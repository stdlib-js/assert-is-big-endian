// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,o=r,e=function(t){return o.call(t)},i=Object.prototype.hasOwnProperty,f=function(t,n){return null!=t&&i.call(t,n)},u="function"==typeof Symbol?Symbol.toStringTag:"",y=f,c=u,a=r,l=e,p=function(t){var n,r,o;if(null==t)return a.call(t);r=t[c],n=y(t,c);try{t[c]=void 0}catch(n){return a.call(t)}return o=a.call(t),n?t[c]=r:delete t[c],o},d=n&&"symbol"==typeof Symbol.toStringTag?p:l,b=d,A="function"==typeof Uint8Array,m="function"==typeof Uint8Array?Uint8Array:null,U=function(t){return A&&t instanceof Uint8Array||"[object Uint8Array]"===b(t)},s=m,h=function(){var t,n;if("function"!=typeof s)return!1;try{n=new s(n=[1,3.14,-3.14,256,257]),t=U(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},w="function"==typeof Uint8Array?Uint8Array:void 0,S=function(){throw new Error("not implemented")},v=h()?w:S,g=d,j="function"==typeof Uint16Array,T="function"==typeof Uint16Array?Uint16Array:null,E=function(t){return j&&t instanceof Uint16Array||"[object Uint16Array]"===g(t)},I=T,O=function(){var t,n;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,65536,65537]),t=E(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t},x="function"==typeof Uint16Array?Uint16Array:void 0,N=function(){throw new Error("not implemented")},_={uint16:O()?x:N,uint8:v};return(t=new _.uint16(1))[0]=4660,52===new _.uint8(t.buffer)[1]},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).IS_BIG_ENDIAN=n();
//# sourceMappingURL=index.js.map
