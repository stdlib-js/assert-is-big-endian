// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var n=Object.prototype.toString;var r=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol.toStringTag:"";var e=t&&"symbol"==typeof Symbol.toStringTag?function(t){var e,i,a,y,f;if(null==t)return n.call(t);i=t[o],f=o,e=null!=(y=t)&&r.call(y,f);try{t[o]=void 0}catch(r){return n.call(t)}return a=n.call(t),e?t[o]=i:delete t[o],a}:function(t){return n.call(t)},i="function"==typeof Uint8Array;var a="function"==typeof Uint8Array?Uint8Array:null;var y,f="function"==typeof Uint8Array?Uint8Array:void 0;y=function(){var t,n,r;if("function"!=typeof a)return!1;try{n=new a(n=[1,3.14,-3.14,256,257]),r=n,t=(i&&r instanceof Uint8Array||"[object Uint8Array]"===e(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?f:function(){throw new Error("not implemented")};var u=y,c="function"==typeof Uint16Array;var l="function"==typeof Uint16Array?Uint16Array:null;var p,v="function"==typeof Uint16Array?Uint16Array:void 0;p=function(){var t,n,r;if("function"!=typeof l)return!1;try{n=new l(n=[1,3.14,-3.14,65536,65537]),r=n,t=(c&&r instanceof Uint16Array||"[object Uint16Array]"===e(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?v:function(){throw new Error("not implemented")};var A,U={uint16:p,uint8:u};(A=new U.uint16(1))[0]=4660;var b=52===new U.uint8(A.buffer)[1];export{b as default};
//# sourceMappingURL=mod.js.map