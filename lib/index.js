import { getRandomId, getScrollTop, debounce } from './util';
var assign = require('es6-object-assign').assign;
var find = require('array.prototype.find').shim();
var defaults = {
    speed: "auto" //recommend!!
};
var Backpax = /** @class */ (function () {
    function Backpax(selector, option) {
        var _this = this;
        if (option === void 0) { option = {}; }
        if (selector instanceof NodeList) {
            this.elements = selector;
        }
        else {
            this.elements = document.querySelectorAll(selector);
        }
        this.controls = [];
        this.items = [];
        this.options = assign({}, defaults, option);
        this.move = 0;
        this.ticking = false;
        this.setup();
        if ("requestAnimationFrame" in window) {
            document.addEventListener('scroll', function () {
                _this.run();
            }, { passive: true });
        }
        window.addEventListener('resize', debounce(function () {
            [].forEach.call(_this.elements, function (element, index) {
                var id = element.dataset.id;
                if (id) {
                    var insert = document.getElementById(id);
                    if (insert) {
                        _this.setBestImg(element, insert, index);
                    }
                }
            });
        }, 100));
    }
    Backpax.prototype.setBestImg = function (element, insert, index) {
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
        var newBackground = "url(" + backgroundImage + ")";
        if (newBackground !== insert.style.backgroundImage) {
            insert.style.backgroundImage = newBackground;
        }
        this.setImgRatio(element, backgroundImage, index);
    };
    Backpax.prototype.setup = function () {
        var _this = this;
        [].forEach.call(this.elements, function (element, index) {
            element.style.position = 'relative';
            element.style.overflow = 'hidden';
            var id = getRandomId();
            element.dataset.id = id;
            var insert = document.createElement('div');
            element.insertBefore(insert, null);
            _this.setBestImg(element, insert, index);
            insert.id = id;
            insert.style.position = 'absolute';
            insert.style.top = '0';
            insert.style.left = '0';
            insert.style.right = '0';
            insert.style.bottom = '0';
            insert.style.backgroundRepeat = 'no-repeat';
            insert.style.backgroundPosition = 'bottom center';
            insert.style.backgroundSize = 'cover';
            insert.style.transformStyle = 'flat';
            insert.style.backfaceVisibility = 'hidden';
            // insert.style.transitionDuration = '900ms';
            insert.style.willChange = 'transform';
            _this.items.push({
                element: element,
                insert: insert,
                elementOffsetHeight: element.offsetHeight,
                insertOffsetHeight: 0,
            });
        });
    };
    Backpax.prototype.setImgRatio = function (element, image, index) {
        var _this = this;
        var img = new Image();
        img.onload = function () {
            var ratio = img.width / img.height;
            var control = _this.controls[index];
            if (control) {
                control.ratio = ratio;
            }
            else {
                _this.controls[index] = {
                    ratio: ratio,
                    speed: parseInt(element.dataset.speed, 10)
                };
            }
            var id = element.dataset.id;
            var insert = document.getElementById(id);
            if (insert) {
                if (element.offsetHeight > element.offsetWidth / ratio) {
                    insert.style.height = element.style.height;
                    insert.style.width = element.offsetHeight * ratio + "px";
                }
                else {
                    insert.style.height = element.offsetWidth / ratio + "px";
                    insert.style.width = '100%';
                }
                _this.items[index].insertOffsetHeight = insert.offsetHeight;
            }
        };
        img.src = image;
    };
    Backpax.prototype.run = function () {
        var _this = this;
        if (this.ticking) {
            return;
        }
        requestAnimationFrame(function () {
            _this.ticking = false;
            var top = getScrollTop();
            var windowHeight = window.innerHeight;
            [].forEach.call(_this.items, function (item, index) {
                var element = item.element;
                var insert = item.insert;
                var offset = element.getBoundingClientRect().top + top;
                if (!_this.controls[index] || !_this.controls[index].ratio) {
                    return;
                }
                var ratio = _this.controls[index].ratio;
                var elementHeight = item.elementOffsetHeight;
                var insertHeight = item.insertOffsetHeight;
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
                if (_this.controls[index] && _this.controls[index].speed) {
                    speed = _this.controls[index].speed;
                }
                var final = bottom + (move * speed);
                if (move !== _this.move) {
                    insert.style.transform = "translateY(" + Math.round(final) + "px)";
                }
                _this.move = move;
            });
        });
        this.ticking = true;
    };
    return Backpax;
}());
export default Backpax;
//# sourceMappingURL=index.js.map