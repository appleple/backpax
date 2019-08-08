import { getRandomId, getScrollTop, getOffset } from './util';
var defaults = {
    speed: "auto"
};
var Pax = /** @class */ (function () {
    function Pax(selector, option) {
        if (option === void 0) { option = {}; }
        if (selector instanceof NodeList) {
            this.elements = selector;
        }
        else {
            this.elements = document.querySelectorAll(selector);
        }
        this.options = Object.assign({}, defaults, option);
        this.move = 0;
        this.setup();
        if (window.requestAnimationFrame) {
            requestAnimationFrame(this.run.bind(this));
        }
        else {
            setInterval(this.run.bind(this), 1000 / 60);
        }
    }
    Pax.prototype.setup = function () {
        var _this = this;
        [].forEach.call(this.elements, function (element) {
            element.style.position = 'relative';
            element.style.overflow = 'hidden';
            var id = getRandomId();
            element.dataset.id = id;
            var insert = document.createElement('div');
            // const desktopImg = element.dataset.desktopImg as string;
            var img = element.dataset.img;
            var backgroundImage = img;
            element.insertBefore(insert, null);
            // if (window.innerWidth >= 767) {
            //   backgroundImage = desktopImg;
            // }
            insert.style.backgroundImage = "url(" + backgroundImage + ")";
            _this.setImgRatio(element, backgroundImage);
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
    };
    Pax.prototype.setImgRatio = function (element, image) {
        var img = new Image();
        img.onload = function () {
            var ratio = img.width / img.height;
            element.dataset.ratio = "" + ratio;
            var id = element.dataset.id;
            var insert = document.getElementById(id);
            if (insert) {
                insert.style.height = window.innerWidth / ratio + "px";
            }
        };
        img.src = image;
    };
    Pax.prototype.run = function () {
        var _this = this;
        var top = getScrollTop();
        [].forEach.call(this.elements, function (element) {
            var id = element.dataset.id;
            var insert = document.getElementById(id);
            var elementOffset = getOffset(element);
            if (!insert) {
                return;
            }
            if (!elementOffset) {
                return;
            }
            var offset = elementOffset.top;
            var ratio = parseFloat(element.dataset.ratio);
            var windowHeight = window.innerHeight;
            var elementHeight = element.offsetHeight;
            var insertHeight = insert.offsetHeight;
            if (top + windowHeight < offset) {
                return;
            }
            var move = top + windowHeight - offset;
            var bottom = elementHeight - insertHeight;
            var speed = _this.options.speed;
            if (speed === 'auto') {
                if (ratio) {
                    speed = (insertHeight - elementHeight) / (windowHeight + (elementHeight / 2));
                }
                else {
                    return;
                }
            }
            if (element.dataset.speed) {
                speed = parseInt(element.dataset.speed, 10);
            }
            var final = bottom + (move * speed);
            if (move !== _this.move) {
                insert.style.transform = "translate3d(0px, " + final + "px, 0px)";
            }
            _this.move = move;
        });
        if (window.requestAnimationFrame) {
            requestAnimationFrame(this.run.bind(this));
        }
    };
    return Pax;
}());
export default Pax;
//# sourceMappingURL=index.js.map