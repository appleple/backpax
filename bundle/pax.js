!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Pax=t():e.Pax=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="bundle",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},r={speed:"auto"},i=function(){function e(e,t){void 0===t&&(t={}),e instanceof NodeList?this.elements=e:this.elements=document.querySelectorAll(e),this.options=Object.assign({},r,t),this.move=0,this.setup(),window.requestAnimationFrame?requestAnimationFrame(this.run.bind(this)):setInterval(this.run.bind(this),1e3/60)}return e.prototype.setup=function(){var e=this;[].forEach.call(this.elements,function(t){t.style.position="relative",t.style.overflow="hidden";var n=(Date.now().toString(36)+Math.random().toString(36).substr(2,5)).toUpperCase();t.dataset.id=n;var o=document.createElement("div"),r=t.dataset.img;t.insertBefore(o,null),o.style.backgroundImage="url("+r+")",e.setImgRatio(t,r),o.id=n,o.style.position="absolute",o.style.top="0",o.style.left="0",o.style.width="100%",o.style.height="100vh",o.style.backgroundRepeat="no-repeat",o.style.backgroundPosition="bottom center",o.style.backgroundSize="cover",o.style.transformStyle="preserve-3d",o.style.backfaceVisibility="hidden"})},e.prototype.setImgRatio=function(e,t){var n=new Image;n.onload=function(){var t=n.width/n.height;e.dataset.ratio=""+t;var o=e.dataset.id,r=document.getElementById(o);r&&(r.style.height=window.innerWidth/t+"px")},n.src=t},e.prototype.run=function(){var e=this,t=o();[].forEach.call(this.elements,function(n){var r,i=n.dataset.id,s=document.getElementById(i),a={top:(r=n.getBoundingClientRect()).top+o(),left:r.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)};if(s&&a){var u=a.top,d=parseFloat(n.dataset.ratio),l=window.innerHeight,f=n.offsetHeight,c=s.offsetHeight;if(!(t+l<u)){var p=t+l-u,m=f-c,y=e.options.speed;if("auto"===y){if(!d)return;y=(c-f)/(l+f/2)}n.dataset.speed&&(y=parseInt(n.dataset.speed,10));var h=m+p*y;p!==e.move&&(s.style.transform="translate3d(0px, "+h+"px, 0px)"),e.move=p}}}),window.requestAnimationFrame&&requestAnimationFrame(this.run.bind(this))},e}();t.default=i}]).default});