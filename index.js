// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,o=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol:void 0,i="function"==typeof e?e.toStringTag:"",f=n&&"symbol"==typeof Symbol.toStringTag?function(t){var n,e,f,y,u;if(null==t)return r.call(t);e=t[i],u=i,n=null!=(y=t)&&o.call(y,u);try{t[i]=void 0}catch(n){return r.call(t)}return f=r.call(t),n?t[i]=e:delete t[i],f}:function(t){return r.call(t)},y="function"==typeof Uint8Array,u="function"==typeof Uint8Array?Uint8Array:null,c="function"==typeof Uint8Array?Uint8Array:void 0;t=function(){var t,n,r;if("function"!=typeof u)return!1;try{n=new u(n=[1,3.14,-3.14,256,257]),r=n,t=(y&&r instanceof Uint8Array||"[object Uint8Array]"===f(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?c:function(){throw new Error("not implemented")};var a,l=t,p="function"==typeof Uint16Array,d="function"==typeof Uint16Array?Uint16Array:null,b="function"==typeof Uint16Array?Uint16Array:void 0;a=function(){var t,n,r;if("function"!=typeof d)return!1;try{n=new d(n=[1,3.14,-3.14,65536,65537]),r=n,t=(p&&r instanceof Uint16Array||"[object Uint16Array]"===f(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?b:function(){throw new Error("not implemented")};var A,m={uint16:a,uint8:l};return(A=new m.uint16(1))[0]=4660,52===new m.uint8(A.buffer)[1]},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).IS_BIG_ENDIAN=n();
//# sourceMappingURL=index.js.map
