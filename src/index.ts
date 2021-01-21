import {getRandomId, getScrollTop, getOffset, debounce} from './util';

const assign = require('es6-object-assign').assign;
const find = require('array.prototype.find').shim();

type Option = {
  speed: "auto" | number
}

type Control = {
  ratio: number;
  speed: number;
}

type Item = {
  element: HTMLElement;
  insert: HTMLElement;
}

const defaults = {
  speed: "auto" //recommend!!
} as Option;

export default class Backpax {
  elements: NodeList;
  options: Option;
  controls: Control[];
  move: number;
  items: Item[];
  ticking: boolean;

  constructor(selector: string | NodeList, option = {}) {
    if (selector instanceof NodeList) {
      this.elements = selector;
    } else {
      this.elements = document.querySelectorAll(selector);
    }
    this.controls = [];
    this.items = [];
    this.options = assign({}, defaults, option);
    this.move = 0;
    this.ticking = false;
    this.setup();

    if ("requestAnimationFrame" in window) {
      document.addEventListener('scroll', () => {
        this.run();
      }, { passive: true });
    }

    window.addEventListener('resize', debounce(() => {
      [].forEach.call(this.elements, (element: HTMLElement, index) => {
        const {id} = element.dataset;
        if (id) {
          const insert = document.getElementById(id);
          if (insert) {
            this.setBestImg(element, insert, index);
          }
        }
      });
    }, 100));
  }

  setBestImg(element: HTMLElement, insert: HTMLElement, index: number) {
    const width = window.innerWidth;
    const img = element.dataset.img as string;
    let backgroundImage = img;
    const points = Object.keys(element.dataset).reduce<{ point: number, src: string }[]>((ac, key) => {
      if (/img-\d*/.test(key)) {
        const match = key.match(/img-(\d*)/);
        if (match && match[1]) {
          const point = parseInt(match[1], 10);
          ac.push({
            point,
            src: element.dataset[key] as string
          });
        }
      }
      return ac;
    }, []);
    points.sort((pointA, pointB) => {
      if (pointA.point < pointB.point) {
        return -1;
      }
      return 1;
    });
    const point = points.find((p) => {
      if (width < p.point) {
        return true;
      }
      return false;
    });
    if (point) {
      backgroundImage = point.src;
    }
    const newBackground = `url(${backgroundImage})`;
    if (newBackground !== insert.style.backgroundImage) {
      insert.style.backgroundImage = newBackground;
    }
    this.setImgRatio(element, backgroundImage, index);
  }

  setup() {
    [].forEach.call(this.elements, (element: HTMLElement, index: number) => {
      element.style.position = 'relative';
      element.style.overflow = 'hidden';
      const id = getRandomId();
      element.dataset.id = id;
      const insert = document.createElement('div');
      element.insertBefore(insert, null);
      this.setBestImg(element, insert, index);
      insert.id = id;
      insert.style.position = 'absolute';
      insert.style.top = '0';
      insert.style.left = '0';
      insert.style.right = '0';
      insert.style.bottom = '0';
      insert.style.backgroundRepeat = 'no-repeat';
      insert.style.backgroundPosition = 'bottom center';
      insert.style.backgroundSize = 'cover';
      insert.style.transformStyle = 'preserve-3d';
      insert.style.backfaceVisibility = 'hidden';
      insert.style.willChange = 'transform';

      this.items.push({
        element,
        insert
      })
    });
  }

  setImgRatio(element: HTMLElement, image: string, index: number) {
    const img = new Image();
    img.onload = () => {
      const ratio = img.width / img.height;
      const control = this.controls[index];
      if (control) {
        control.ratio = ratio;
      } else {
        this.controls[index] = {
          ratio,
          speed: parseInt(element.dataset.speed as string, 10)
        }
      }
      const id = element.dataset.id as string;
      const insert = document.getElementById(id);
      if (insert) {
        if (element.offsetHeight > element.offsetWidth / ratio) {
          insert.style.height = element.style.height;
          insert.style.width = `${element.offsetHeight * ratio}px`;
        } else {
          insert.style.height = `${element.offsetWidth / ratio}px`;
          insert.style.width = '100%';
        }
      }
    };
    img.src = image;
  }

  run() {
    if (this.ticking) {
      return;
    }
    requestAnimationFrame(() => {
      this.ticking = false;

      const top = getScrollTop();

      [].forEach.call(this.items, (item: Item, index: number) => {
        const element = item.element;
        const insert = item.insert;
        const elementOffset = getOffset(element);

        if (!elementOffset) {
          return;
        }
        const offset = elementOffset.top;
        if (!this.controls[index] || !this.controls[index].ratio) {
          return;
        }
        const ratio = this.controls[index].ratio;
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

        if (this.controls[index] && this.controls[index].speed) {
          speed = this.controls[index].speed;
        }
        const final = bottom + (move * speed);
        if (move !== this.move) {
            insert.style.transform = `translate3d(0px, ${Math.round(final)}px, 0px)`;
        }
        this.move = move;
      });
    });
    this.ticking = true;
  }
}
