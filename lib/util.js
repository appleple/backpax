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
export var debounce = function (func, wait, immediate) {
    if (immediate === void 0) { immediate = false; }
    var timeout;
    return function () {
        var later = function () {
            timeout = undefined;
            if (!immediate) {
                func();
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func();
        }
    };
};
//# sourceMappingURL=util.js.map