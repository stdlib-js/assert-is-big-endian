// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,o=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol.toStringTag:"",i=n&&"symbol"==typeof Symbol.toStringTag?function(t){var n,i,f,y,u;if(null==t)return r.call(t);i=t[e],u=e,n=null!=(y=t)&&o.call(y,u);try{t[e]=void 0}catch(n){return r.call(t)}return f=r.call(t),n?t[e]=i:delete t[e],f}:function(t){return r.call(t)},f="function"==typeof Uint8Array,y="function"==typeof Uint8Array?Uint8Array:null,u="function"==typeof Uint8Array?Uint8Array:void 0;t=function(){var t,n,r;if("function"!=typeof y)return!1;try{n=new y(n=[1,3.14,-3.14,256,257]),r=n,t=(f&&r instanceof Uint8Array||"[object Uint8Array]"===i(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?u:function(){throw new Error("not implemented")};var a,c=t,l="function"==typeof Uint16Array,p="function"==typeof Uint16Array?Uint16Array:null,d="function"==typeof Uint16Array?Uint16Array:void 0;a=function(){var t,n,r;if("function"!=typeof p)return!1;try{n=new p(n=[1,3.14,-3.14,65536,65537]),r=n,t=(l&&r instanceof Uint16Array||"[object Uint16Array]"===i(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?d:function(){throw new Error("not implemented")};var b,A={uint16:a,uint8:c};return(b=new A.uint16(1))[0]=4660,52===new A.uint8(b.buffer)[1]},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).IS_BIG_ENDIAN=n();
//# sourceMappingURL=index.js.map
