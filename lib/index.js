import { getRandomId, getScrollTop, getOffset, debounce } from './util';
var defaults = {
    speed: "auto"
};
var Pax = /** @class */ (function () {
    function Pax(selector, option) {
        if (option === void 0) { option = {}; }
        var _this = this;
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
        window.addEventListener('resize', debounce(function () {
            [].forEach.call(_this.elements, function (element) {
                var id = element.dataset.id;
                if (id) {
                    var insert = document.getElementById(id);
                    if (insert) {
                        _this.setBestImg(element, insert);
                    }
                }
            });
        }, 100));
    }
    Pax.prototype.setBestImg = function (element, insert) {
        var width = window.innerWidth;
        var img = element.dataset.img;
        var backgroundImage = img;
        var points = Object.keys(element.dataset).reduce(function (ac, key) {
            if (/img-\d*/.test(key)) {
                var match = key.match(/img-(\d*)/);
                if (match && match[1]) {
                    var point_1 = parseInt(match[1], 10);
                    ac.push({
                        point: point_1,
                        src: element.dataset[key]
                    });
                }
            }
            return ac;
        }, []);
        points.sort(function (pointA, pointB) {
            if (pointA.point < pointB.point) {
                return -1;
            }
            return 1;
        });
        var point = points.find(function (p) {
            if (width < p.point) {
                return true;
            }
            return false;
        });
        if (point) {
            backgroundImage = point.src;
        }
        insert.style.backgroundImage = "url(" + backgroundImage + ")";
        this.setImgRatio(element, backgroundImage);
    };
    Pax.prototype.setup = function () {
        var _this = this;
        [].forEach.call(this.elements, function (element) {
            element.style.position = 'relative';
            element.style.overflow = 'hidden';
            var id = getRandomId();
            element.dataset.id = id;
            var insert = document.createElement('div');
            element.insertBefore(insert, null);
            _this.setBestImg(element, insert);
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
                insert.style.transform = "translate3d(0px, " + Math.round(final) + "px, 0px)";
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