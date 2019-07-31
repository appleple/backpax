import { getRandomId, getScrollTop, getOffset } from './util';

type Option = {
  speed: "auto" | number
}

const defaults = {
  speed: "auto"
} as Option;

export default class Pax {
  elements: NodeList;
  options: Option;
  move: number;
  constructor(selector: string | NodeList, option = {}) {
    if (selector instanceof NodeList) {
      this.elements = selector;
    } else {
      this.elements = document.querySelectorAll(selector);
    }
    this.options = Object.assign({}, defaults, option);
    this.move = 0;
    this.setup();
    if (window.requestAnimationFrame) {
      requestAnimationFrame(this.run.bind(this));
    } else {
      setInterval(this.run.bind(this), 1000 / 60);
    }
  }
  setup() {
    [].forEach.call(this.elements, (element: HTMLElement) => {
      element.style.position = 'relative';
      element.style.overflow = 'hidden';
      const id = getRandomId();
      element.dataset.id = id;
      const insert = document.createElement('div');
      // const desktopImg = element.dataset.desktopImg as string;
      const img = element.dataset.img as string;
      let backgroundImage = img;
      element.insertBefore(insert, null);
      // if (window.innerWidth >= 767) {
      //   backgroundImage = desktopImg;
      // }
      insert.style.backgroundImage = `url(${backgroundImage})`;
      this.setImgRatio(element, backgroundImage);
      insert.id = id;
      insert.style.position = 'absolute';
      insert.style.top = '0';
      insert.style.left = '0';
      insert.style.width = '100%';
      insert.style.height = '100vh';
      insert.style.backgroundRepeat = 'no-repeat';
      insert.style.backgroundPosition = 'bottom center';
      insert.style.backgroundSize = 'cover';
      insert.style.transformStyle = 'preserve-3d';
      insert.style.backfaceVisibility = 'hidden';
    });
  }
  setImgRatio(element: HTMLElement, image: string) {
    const img = new Image();
    img.onload = () => {
      const ratio = img.width / img.height;
      element.dataset.ratio = `${ratio}`;
      const id = element.dataset.id as string;
      const insert = document.getElementById(id);
      if (insert) {
        insert.style.height = `${window.innerWidth / ratio}px`;
      }
    }
    img.src = image;
  }
  run() {
    const top = getScrollTop();
    [].forEach.call(this.elements, (element: HTMLElement) => {
      const id = element.dataset.id as string;
      const insert = document.getElementById(id);
      const elementOffset = getOffset(element);
      if (!insert) {
        return;
      }
      if (!elementOffset) {
        return;
      }
      const offset = elementOffset.top;
      const ratio = parseInt(element.dataset.ratio as string, 10);
      const windowHeight = window.innerHeight;
      const elementHeight = element.offsetHeight;
      const insertHeight = insert.offsetHeight;
      if (top + windowHeight < offset) {
        return;
      }
      const move = top + windowHeight - offset;
      const bottom = elementHeight - insertHeight;
      let speed = this.options.speed;
      if (speed === 'auto') {
        if (ratio) {
          speed = (insertHeight - elementHeight) / (windowHeight + (elementHeight / 2));
        } else {
          return;
        }
      }
      
      if (element.dataset.speed) {
        speed = parseInt(element.dataset.speed, 10);
      }
      const final = bottom + (move * speed);
      if (move !== this.move) {
        insert.style.transform = `translate3d(0px, ${final}px, 0px)`;
      }
      this.move = move;
    });
    if (window.requestAnimationFrame) {
      requestAnimationFrame(this.run.bind(this));
    }
  }
}
