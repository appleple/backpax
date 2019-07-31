export var getRandomId = function () {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
};
export var getScrollTop = function () {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
};
export var getScrollLeft = function () {
    return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
};
export var getOffset = function (el) {
    var rect = el.getBoundingClientRect();
    return {
        top: rect.top + getScrollTop(),
        left: rect.left + getScrollLeft()
    };
};
//# sourceMappingURL=util.js.map