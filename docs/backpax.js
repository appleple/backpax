!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Backpax=e():t.Backpax=e()}(window,function(){return function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="bundle",r(r.s=39)}([function(t,e,r){"use strict";var o=TypeError,n=Object.getOwnPropertyDescriptor;if(n)try{n({},"")}catch(t){n=null}var i=function(){throw new o},a=n?function(){try{return arguments.callee,i}catch(t){try{return n(arguments,"callee").get}catch(t){return i}}}():i,f=r(14)(),p=Object.getPrototypeOf||function(t){return t.__proto__},u=void 0,y="undefined"==typeof Uint8Array?void 0:p(Uint8Array),c={"%Array%":Array,"%ArrayBuffer%":"undefined"==typeof ArrayBuffer?void 0:ArrayBuffer,"%ArrayBufferPrototype%":"undefined"==typeof ArrayBuffer?void 0:ArrayBuffer.prototype,"%ArrayIteratorPrototype%":f?p([][Symbol.iterator]()):void 0,"%ArrayPrototype%":Array.prototype,"%ArrayProto_entries%":Array.prototype.entries,"%ArrayProto_forEach%":Array.prototype.forEach,"%ArrayProto_keys%":Array.prototype.keys,"%ArrayProto_values%":Array.prototype.values,"%AsyncFromSyncIteratorPrototype%":void 0,"%AsyncFunction%":void 0,"%AsyncFunctionPrototype%":void 0,"%AsyncGenerator%":void 0,"%AsyncGeneratorFunction%":void 0,"%AsyncGeneratorPrototype%":void 0,"%AsyncIteratorPrototype%":u&&f&&Symbol.asyncIterator?u[Symbol.asyncIterator]():void 0,"%Atomics%":"undefined"==typeof Atomics?void 0:Atomics,"%Boolean%":Boolean,"%BooleanPrototype%":Boolean.prototype,"%DataView%":"undefined"==typeof DataView?void 0:DataView,"%DataViewPrototype%":"undefined"==typeof DataView?void 0:DataView.prototype,"%Date%":Date,"%DatePrototype%":Date.prototype,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%ErrorPrototype%":Error.prototype,"%eval%":eval,"%EvalError%":EvalError,"%EvalErrorPrototype%":EvalError.prototype,"%Float32Array%":"undefined"==typeof Float32Array?void 0:Float32Array,"%Float32ArrayPrototype%":"undefined"==typeof Float32Array?void 0:Float32Array.prototype,"%Float64Array%":"undefined"==typeof Float64Array?void 0:Float64Array,"%Float64ArrayPrototype%":"undefined"==typeof Float64Array?void 0:Float64Array.prototype,"%Function%":Function,"%FunctionPrototype%":Function.prototype,"%Generator%":void 0,"%GeneratorFunction%":void 0,"%GeneratorPrototype%":void 0,"%Int8Array%":"undefined"==typeof Int8Array?void 0:Int8Array,"%Int8ArrayPrototype%":"undefined"==typeof Int8Array?void 0:Int8Array.prototype,"%Int16Array%":"undefined"==typeof Int16Array?void 0:Int16Array,"%Int16ArrayPrototype%":"undefined"==typeof Int16Array?void 0:Int8Array.prototype,"%Int32Array%":"undefined"==typeof Int32Array?void 0:Int32Array,"%Int32ArrayPrototype%":"undefined"==typeof Int32Array?void 0:Int32Array.prototype,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":f?p(p([][Symbol.iterator]())):void 0,"%JSON%":"object"==typeof JSON?JSON:void 0,"%JSONParse%":"object"==typeof JSON?JSON.parse:void 0,"%Map%":"undefined"==typeof Map?void 0:Map,"%MapIteratorPrototype%":"undefined"!=typeof Map&&f?p((new Map)[Symbol.iterator]()):void 0,"%MapPrototype%":"undefined"==typeof Map?void 0:Map.prototype,"%Math%":Math,"%Number%":Number,"%NumberPrototype%":Number.prototype,"%Object%":Object,"%ObjectPrototype%":Object.prototype,"%ObjProto_toString%":Object.prototype.toString,"%ObjProto_valueOf%":Object.prototype.valueOf,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":"undefined"==typeof Promise?void 0:Promise,"%PromisePrototype%":"undefined"==typeof Promise?void 0:Promise.prototype,"%PromiseProto_then%":"undefined"==typeof Promise?void 0:Promise.prototype.then,"%Promise_all%":"undefined"==typeof Promise?void 0:Promise.all,"%Promise_reject%":"undefined"==typeof Promise?void 0:Promise.reject,"%Promise_resolve%":"undefined"==typeof Promise?void 0:Promise.resolve,"%Proxy%":"undefined"==typeof Proxy?void 0:Proxy,"%RangeError%":RangeError,"%RangeErrorPrototype%":RangeError.prototype,"%ReferenceError%":ReferenceError,"%ReferenceErrorPrototype%":ReferenceError.prototype,"%Reflect%":"undefined"==typeof Reflect?void 0:Reflect,"%RegExp%":RegExp,"%RegExpPrototype%":RegExp.prototype,"%Set%":"undefined"==typeof Set?void 0:Set,"%SetIteratorPrototype%":"undefined"!=typeof Set&&f?p((new Set)[Symbol.iterator]()):void 0,"%SetPrototype%":"undefined"==typeof Set?void 0:Set.prototype,"%SharedArrayBuffer%":"undefined"==typeof SharedArrayBuffer?void 0:SharedArrayBuffer,"%SharedArrayBufferPrototype%":"undefined"==typeof SharedArrayBuffer?void 0:SharedArrayBuffer.prototype,"%String%":String,"%StringIteratorPrototype%":f?p(""[Symbol.iterator]()):void 0,"%StringPrototype%":String.prototype,"%Symbol%":f?Symbol:void 0,"%SymbolPrototype%":f?Symbol.prototype:void 0,"%SyntaxError%":SyntaxError,"%SyntaxErrorPrototype%":SyntaxError.prototype,"%ThrowTypeError%":a,"%TypedArray%":y,"%TypedArrayPrototype%":y?y.prototype:void 0,"%TypeError%":o,"%TypeErrorPrototype%":o.prototype,"%Uint8Array%":"undefined"==typeof Uint8Array?void 0:Uint8Array,"%Uint8ArrayPrototype%":"undefined"==typeof Uint8Array?void 0:Uint8Array.prototype,"%Uint8ClampedArray%":"undefined"==typeof Uint8ClampedArray?void 0:Uint8ClampedArray,"%Uint8ClampedArrayPrototype%":"undefined"==typeof Uint8ClampedArray?void 0:Uint8ClampedArray.prototype,"%Uint16Array%":"undefined"==typeof Uint16Array?void 0:Uint16Array,"%Uint16ArrayPrototype%":"undefined"==typeof Uint16Array?void 0:Uint16Array.prototype,"%Uint32Array%":"undefined"==typeof Uint32Array?void 0:Uint32Array,"%Uint32ArrayPrototype%":"undefined"==typeof Uint32Array?void 0:Uint32Array.prototype,"%URIError%":URIError,"%URIErrorPrototype%":URIError.prototype,"%WeakMap%":"undefined"==typeof WeakMap?void 0:WeakMap,"%WeakMapPrototype%":"undefined"==typeof WeakMap?void 0:WeakMap.prototype,"%WeakSet%":"undefined"==typeof WeakSet?void 0:WeakSet,"%WeakSetPrototype%":"undefined"==typeof WeakSet?void 0:WeakSet.prototype},s=r(4).call(Function.call,String.prototype.replace),l=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,d=/\\(\\)?/g;t.exports=function(t,e){if("string"!=typeof t||0===t.length)throw new TypeError("intrinsic name must be a non-empty string");if(arguments.length>1&&"boolean"!=typeof e)throw new TypeError('"allowMissing" argument must be a boolean');for(var r,i=(r=[],s(t,l,function(t,e,o,n){r[r.length]=o?s(n,d,"$1"):e||t}),r),a=function(t,e){if(!(t in c))throw new SyntaxError("intrinsic "+t+" does not exist!");if(void 0===c[t]&&!e)throw new o("intrinsic "+t+" exists, but is not available. Please file an issue!");return c[t]}("%"+(i.length>0?i[0]:"")+"%",e),f=1;f<i.length;f+=1)if(null!=a)if(n&&f+1>=i.length){var p=n(a,i[f]);if(!(e||i[f]in a))throw new o("base intrinsic for "+t+" exists, but the property is not available.");a=p?p.get||p.value:a[i[f]]}else a=a[i[f]];return a}},function(t,e,r){"use strict";var o=r(11),n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,a=Array.prototype.concat,f=Object.defineProperty,p=f&&function(){var t={};try{for(var e in f(t,"x",{enumerable:!1,value:t}),t)return!1;return t.x===t}catch(t){return!1}}(),u=function(t,e,r,o){var n;e in t&&("function"!=typeof(n=o)||"[object Function]"!==i.call(n)||!o())||(p?f(t,e,{configurable:!0,enumerable:!1,value:r,writable:!0}):t[e]=r)},y=function(t,e){var r=arguments.length>2?arguments[2]:{},i=o(e);n&&(i=a.call(i,Object.getOwnPropertySymbols(e)));for(var f=0;f<i.length;f+=1)u(t,i[f],e[i[f]],r[i[f]])};y.supportsDescriptors=!!p,t.exports=y},function(t,e,r){"use strict";t.exports=r(13)},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";var o=r(16);t.exports=Function.prototype.bind||o},function(t,e,r){"use strict";var o=r(17),n=r(18),i=r(37);t.exports=function(t){var e=o(this),r=n(e.length);if(!i(t))throw new TypeError("Array#find: predicate must be a function");if(0!==r){var a;arguments.length>0&&(a=arguments[1]);for(var f,p=0;p<r;p++)if(f=e[p],t.apply(a,[f,p,e]))return f}}},function(t,e,r){"use strict";var o=r(4),n=r(0),i=n("%Function.prototype.apply%"),a=n("%Function.prototype.call%"),f=n("%Reflect.apply%",!0)||o.call(a,i);t.exports=function(){return f(o,a,arguments)},t.exports.apply=function(){return f(o,i,arguments)}},function(t,e,r){"use strict";var o,n,i=Function.prototype.toString,a="object"==typeof Reflect&&null!==Reflect&&Reflect.apply;if("function"==typeof a&&"function"==typeof Object.defineProperty)try{o=Object.defineProperty({},"length",{get:function(){throw n}}),n={}}catch(t){a=null}else a=null;var f=/^\s*class\b/,p=function(t){try{var e=i.call(t);return f.test(e)}catch(t){return!1}},u=Object.prototype.toString,y="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;t.exports=a?function(t){if(!t)return!1;if("function"!=typeof t&&"object"!=typeof t)return!1;if("function"==typeof t&&!t.prototype)return!0;try{a(t,null,o)}catch(t){if(t!==n)return!1}return!p(t)}:function(t){if(!t)return!1;if("function"!=typeof t&&"object"!=typeof t)return!1;if("function"==typeof t&&!t.prototype)return!0;if(y)return function(t){try{return!p(t)&&(i.call(t),!0)}catch(t){return!1}}(t);if(p(t))return!1;var e=u.call(t);return"[object Function]"===e||"[object GeneratorFunction]"===e}},function(t,e,r){"use strict";t.exports=function(){return Array.prototype.find&&1!==[,1].find(function(){return!0})?Array.prototype.find:r(5)}},function(t,e,r){"use strict";function o(t,e){if(null==t)throw new TypeError("Cannot convert first argument to object");for(var r=Object(t),o=1;o<arguments.length;o++){var n=arguments[o];if(null!=n)for(var i=Object.keys(Object(n)),a=0,f=i.length;a<f;a++){var p=i[a],u=Object.getOwnPropertyDescriptor(n,p);void 0!==u&&u.enumerable&&(r[p]=n[p])}}return r}t.exports={assign:o,polyfill:function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}}},function(t,e,r){"use strict";var o=r(1),n=r(2),i=r(5),a=r(8),f=r(38),p=Array.prototype.slice,u=a(),y=function(t,e){n(t);var r=p.call(arguments,1);return u.apply(t,r)};o(y,{getPolyfill:a,implementation:i,shim:f}),t.exports=y},function(t,e,r){"use strict";var o=Object.prototype.hasOwnProperty,n=Object.prototype.toString,i=Array.prototype.slice,a=r(12),f=Object.prototype.propertyIsEnumerable,p=!f.call({toString:null},"toString"),u=f.call(function(){},"prototype"),y=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],c=function(t){var e=t.constructor;return e&&e.prototype===t},s={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},l=function(){if("undefined"==typeof window)return!1;for(var t in window)try{if(!s["$"+t]&&o.call(window,t)&&null!==window[t]&&"object"==typeof window[t])try{c(window[t])}catch(t){return!0}}catch(t){return!0}return!1}(),d=function(t){var e=null!==t&&"object"==typeof t,r="[object Function]"===n.call(t),i=a(t),f=e&&"[object String]"===n.call(t),s=[];if(!e&&!r&&!i)throw new TypeError("Object.keys called on a non-object");var d=u&&r;if(f&&t.length>0&&!o.call(t,0))for(var b=0;b<t.length;++b)s.push(String(b));if(i&&t.length>0)for(var v=0;v<t.length;++v)s.push(String(v));else for(var m in t)d&&"prototype"===m||!o.call(t,m)||s.push(String(m));if(p)for(var g=function(t){if("undefined"==typeof window||!l)return c(t);try{return c(t)}catch(t){return!1}}(t),h=0;h<y.length;++h)g&&"constructor"===y[h]||!o.call(t,y[h])||s.push(y[h]);return s};d.shim=function(){if(Object.keys){if(!function(){return 2===(Object.keys(arguments)||"").length}(1,2)){var t=Object.keys;Object.keys=function(e){return a(e)?t(i.call(e)):t(e)}}}else Object.keys=d;return Object.keys||d},t.exports=d},function(t,e,r){"use strict";var o=Object.prototype.toString;t.exports=function(t){var e=o.call(t),r="[object Arguments]"===e;return r||(r="[object Array]"!==e&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Function]"===o.call(t.callee)),r}},function(t,e,r){"use strict";var o=r(0)("%TypeError%");t.exports=function(t,e){if(null==t)throw new o(e||"Cannot call method on "+t);return t}},function(t,e,r){"use strict";(function(e){var o=e.Symbol,n=r(15);t.exports=function(){return"function"==typeof o&&("function"==typeof Symbol&&("symbol"==typeof o("foo")&&("symbol"==typeof Symbol("bar")&&n())))}}).call(this,r(3))},function(t,e,r){"use strict";t.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),r=Object(e);if("string"==typeof e)return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(e in t[e]=42,t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==e)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var n=Object.getOwnPropertyDescriptor(t,e);if(42!==n.value||!0!==n.enumerable)return!1}return!0}},function(t,e,r){"use strict";var o=Array.prototype.slice,n=Object.prototype.toString;t.exports=function(t){var e=this;if("function"!=typeof e||"[object Function]"!==n.call(e))throw new TypeError("Function.prototype.bind called on incompatible "+e);for(var r,i=o.call(arguments,1),a=Math.max(0,e.length-i.length),f=[],p=0;p<a;p++)f.push("$"+p);if(r=Function("binder","return function ("+f.join(",")+"){ return binder.apply(this,arguments); }")(function(){if(this instanceof r){var n=e.apply(this,i.concat(o.call(arguments)));return Object(n)===n?n:this}return e.apply(t,i.concat(o.call(arguments)))}),e.prototype){var u=function(){};u.prototype=e.prototype,r.prototype=new u,u.prototype=null}return r}},function(t,e,r){"use strict";var o=r(0)("%Object%"),n=r(2);t.exports=function(t){return n(t),o(t)}},function(t,e,r){"use strict";var o=r(19),n=r(20);t.exports=function(t){var e=n(t);return e<=0?0:e>o?o:e}},function(t,e,r){"use strict";var o=r(0),n=o("%Math%"),i=o("%Number%");t.exports=i.MAX_SAFE_INTEGER||n.pow(2,53)-1},function(t,e,r){"use strict";var o=r(21),n=r(26);t.exports=function(t){var e=n(t);return o(e)}},function(t,e,r){"use strict";var o=r(0)("%Math%"),n=r(22),i=r(23),a=r(24),f=r(25),p=o.floor,u=o.abs;t.exports=function(t){var e=n(t);return i(e)?0:0!==e&&a(e)?f(e)*p(u(e)):e}},function(t,e,r){"use strict";t.exports=function(t){return+t}},function(t,e,r){"use strict";t.exports=Number.isNaN||function(t){return t!=t}},function(t,e,r){"use strict";var o=Number.isNaN||function(t){return t!=t};t.exports=Number.isFinite||function(t){return"number"==typeof t&&!o(t)&&t!==1/0&&t!==-1/0}},function(t,e,r){"use strict";t.exports=function(t){return t>=0?1:-1}},function(t,e,r){"use strict";var o=r(0),n=o("%TypeError%"),i=o("%Number%"),a=o("%RegExp%"),f=o("%parseInt%"),p=r(27),u=r(28),y=r(29),c=p("String.prototype.slice"),s=u(/^0b[01]+$/i),l=u(/^0o[0-7]+$/i),d=u(/^[-+]0x[0-9a-f]+$/i),b=u(new a("["+["","​","￾"].join("")+"]","g")),v=["\t\n\v\f\r   ᠎    ","         　\u2028","\u2029\ufeff"].join(""),m=new RegExp("(^["+v+"]+)|(["+v+"]+$)","g"),g=p("String.prototype.replace"),h=r(30);t.exports=function t(e){var r=y(e)?e:h(e,i);if("symbol"==typeof r)throw new n("Cannot convert a Symbol value to a number");if("string"==typeof r){if(s(r))return t(f(c(r,2),2));if(l(r))return t(f(c(r,2),8));if(b(r)||d(r))return NaN;var o=function(t){return g(t,m,"")}(r);if(o!==r)return t(o)}return i(r)}},function(t,e,r){"use strict";var o=r(0),n=r(6),i=n(o("String.prototype.indexOf"));t.exports=function(t,e){var r=o(t,!!e);return"function"==typeof r&&i(t,".prototype.")?n(r):r}},function(t,e,r){"use strict";var o=r(0)("RegExp.prototype.test"),n=r(6);t.exports=function(t){return n(o,t)}},function(t,e,r){"use strict";t.exports=function(t){return null===t||"function"!=typeof t&&"object"!=typeof t}},function(t,e,r){"use strict";var o=r(31);t.exports=function(t){return arguments.length>1?o(t,arguments[1]):o(t)}},function(t,e,r){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator,n=r(32),i=r(7),a=r(33),f=r(34);t.exports=function(t){if(n(t))return t;var e,r="default";if(arguments.length>1&&(arguments[1]===String?r="string":arguments[1]===Number&&(r="number")),o&&(Symbol.toPrimitive?e=function(t,e){var r=t[e];if(null!=r){if(!i(r))throw new TypeError(r+" returned for property "+e+" of object "+t+" is not a function");return r}}(t,Symbol.toPrimitive):f(t)&&(e=Symbol.prototype.valueOf)),void 0!==e){var p=e.call(t,r);if(n(p))return p;throw new TypeError("unable to convert exotic object to primitive")}return"default"===r&&(a(t)||f(t))&&(r="string"),function(t,e){if(null==t)throw new TypeError("Cannot call method on "+t);if("string"!=typeof e||"number"!==e&&"string"!==e)throw new TypeError('hint must be "string" or "number"');var r,o,a,f="string"===e?["toString","valueOf"]:["valueOf","toString"];for(a=0;a<f.length;++a)if(r=t[f[a]],i(r)&&(o=r.call(t),n(o)))return o;throw new TypeError("No default value")}(t,"default"===r?"number":r)}},function(t,e,r){"use strict";t.exports=function(t){return null===t||"function"!=typeof t&&"object"!=typeof t}},function(t,e,r){"use strict";var o=Date.prototype.getDay,n=Object.prototype.toString,i="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;t.exports=function(t){return"object"==typeof t&&null!==t&&(i?function(t){try{return o.call(t),!0}catch(t){return!1}}(t):"[object Date]"===n.call(t))}},function(t,e,r){"use strict";var o=Object.prototype.toString;if(r(35)()){var n=Symbol.prototype.toString,i=/^Symbol\(.*\)$/;t.exports=function(t){if("symbol"==typeof t)return!0;if("[object Symbol]"!==o.call(t))return!1;try{return function(t){return"symbol"==typeof t.valueOf()&&i.test(n.call(t))}(t)}catch(t){return!1}}}else t.exports=function(t){return!1}},function(t,e,r){"use strict";(function(e){var o=e.Symbol,n=r(36);t.exports=function(){return"function"==typeof o&&("function"==typeof Symbol&&("symbol"==typeof o("foo")&&("symbol"==typeof Symbol("bar")&&n())))}}).call(this,r(3))},function(t,e,r){"use strict";t.exports=function(){if("function"!=typeof Symbol||"function"!=typeof Object.getOwnPropertySymbols)return!1;if("symbol"==typeof Symbol.iterator)return!0;var t={},e=Symbol("test"),r=Object(e);if("string"==typeof e)return!1;if("[object Symbol]"!==Object.prototype.toString.call(e))return!1;if("[object Symbol]"!==Object.prototype.toString.call(r))return!1;for(e in t[e]=42,t)return!1;if("function"==typeof Object.keys&&0!==Object.keys(t).length)return!1;if("function"==typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return!1;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==e)return!1;if(!Object.prototype.propertyIsEnumerable.call(t,e))return!1;if("function"==typeof Object.getOwnPropertyDescriptor){var n=Object.getOwnPropertyDescriptor(t,e);if(42!==n.value||!0!==n.enumerable)return!1}return!0}},function(t,e,r){"use strict";t.exports=r(7)},function(t,e,r){"use strict";var o=r(1),n=r(8);t.exports=function(){var t=n();return o(Array.prototype,{find:t},{find:function(){return Array.prototype.find!==t}}),t}},function(t,e,r){"use strict";r.r(e);var o=function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},n=function(t,e,r){var o;return void 0===r&&(r=!1),function(){var n=r&&!o;clearTimeout(o),o=window.setTimeout(function(){o=void 0,r||t()},e),n&&t()}},i=r(9).assign,a=(r(10).shim(),{speed:"auto"}),f=function(){function t(t,e){var r=this;void 0===e&&(e={}),t instanceof NodeList?this.elements=t:this.elements=document.querySelectorAll(t),this.controls=[],this.items=[],this.options=i({},a,e),this.move=0,this.setup(),"requestAnimationFrame"in window&&document.addEventListener("scroll",function(){r.run()},{passive:!0}),window.addEventListener("resize",n(function(){[].forEach.call(r.elements,function(t,e){var o=t.dataset.id;if(o){var n=document.getElementById(o);n&&r.setBestImg(t,n,e)}})},100))}return t.prototype.setBestImg=function(t,e,r){var o=window.innerWidth,n=t.dataset.img,i=Object.keys(t.dataset).reduce(function(e,r){if(/img-\d*/.test(r)){var o=r.match(/img-(\d*)/);if(o&&o[1]){var n=parseInt(o[1],10);e.push({point:n,src:t.dataset[r]})}}return e},[]);i.sort(function(t,e){return t.point<e.point?-1:1});var a=i.find(function(t){return o<t.point});a&&(n=a.src);var f="url("+n+")";f!==e.style.backgroundImage&&(e.style.backgroundImage=f),this.setImgRatio(t,n,r)},t.prototype.setup=function(){var t=this;[].forEach.call(this.elements,function(e,r){e.style.position="relative",e.style.overflow="hidden";var o=(Date.now().toString(36)+Math.random().toString(36).substr(2,5)).toUpperCase();e.dataset.id=o;var n=document.createElement("div");e.insertBefore(n,null),t.setBestImg(e,n,r),n.id=o,n.style.position="absolute",n.style.top="0",n.style.left="0",n.style.right="0",n.style.bottom="0",n.style.backgroundRepeat="no-repeat",n.style.backgroundPosition="bottom center",n.style.backgroundSize="cover",n.style.transformStyle="flat",n.style.backfaceVisibility="hidden",n.style.willChange="transform",t.items.push({element:e,insert:n,elementOffsetHeight:e.offsetHeight,insertOffsetHeight:0})})},t.prototype.setImgRatio=function(t,e,r){var o=this,n=new Image;n.onload=function(){var e=n.width/n.height,i=o.controls[r];i?i.ratio=e:o.controls[r]={ratio:e,speed:parseInt(t.dataset.speed,10)};var a=t.dataset.id,f=document.getElementById(a);f&&(t.offsetHeight>t.offsetWidth/e?(f.style.height=t.style.height,f.style.width=t.offsetHeight*e+"px"):(f.style.height=t.offsetWidth/e+"px",f.style.width="100%"),o.items[r].insertOffsetHeight=f.offsetHeight)},n.src=e},t.prototype.run=function(){var t=this,e=o(),r=window.innerHeight;[].forEach.call(this.items,function(o,n){var i=o.element,a=o.insert,f=i.getBoundingClientRect().top+e;if(t.controls[n]&&t.controls[n].ratio){var p=t.controls[n].ratio,u=o.elementOffsetHeight,y=o.insertOffsetHeight;if(!(e+r<f)){var c=e+r-f,s=u-y,l=t.options.speed;if("auto"===l){if(!p)return;l=(y-u)/(r+u/2)}t.controls[n]&&t.controls[n].speed&&(l=t.controls[n].speed);var d=s+c*l;c!==t.move&&requestAnimationFrame(function(){a.style.transform="translateY("+Math.round(d)+"px)"}),t.move=c}}})},t}();e.default=f}]).default});