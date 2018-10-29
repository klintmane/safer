!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=195)}({0:function(e,t,r){"use strict";e.exports=r(26)},16:function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},195:function(e,t,r){e.exports=r(196)},196:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Subscribe=t.Store=void 0;var n=r(197);Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})});var o=i(r(198)),u=i(r(201));function i(e){return e&&e.__esModule?e:{default:e}}t.Store=o.default,t.Subscribe=u.default},197:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useStores=void 0;var n=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,u=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,u=e}finally{try{!n&&c.return&&c.return()}finally{if(o)throw u}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=r(0),u=r(49);t.useStores=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var i=(0,o.useState)([]),c=n(i,2),f=c[0],a=c[1],l=t.map(function(e){return(0,o.useContext)((0,u.getContext)(e))});return(0,o.useEffect)(function(){!function(e){a(e)}(l)},[]),f}},198:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(e){return e&&e.__esModule?e:{default:e}}(r(0)),i=r(199),c=r(49),f=r(200);function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=function(e){function t(){var e,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var u=arguments.length,c=Array(u),l=0;l<u;l++)c[l]=arguments[l];return r=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.state={store:o.props.initial||{}},o.get=function(e){return get(o.state.store,e)},o.set=function(e,t){if("set"!==e&&"get"!==e){var r=o.props.name,u=void 0===r?"default":r,c=n({},(0,i.set)(o.state.store,e,t));(0,f.notify)("update",{store:c,change:{name:u,key:e,val:t}}),o.setState({store:c})}},a(o,r)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.default.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.children,r=e.name,n=void 0===r?"default":r,o=this.state.store;o.set=this.set,o.get=this.get,(0,c.newContext)(n);var i=(0,c.getContext)(n);return u.default.createElement(i.Provider,{value:o},t)}}]),t}();t.default=l},199:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split(/[.\[\]]/).filter(function(e){return!!e}).map(function(e){return isNaN(e)?function(e){return e.replace(/['"`]/g,"")}(e):parseInt(e)})};t.get=function(e,t,r){return n(t).reduce(function(e,t){return e?e[t]:r},e)},t.set=function(e,t,r){return n(t).reduce(function(t,n,o,u){if(o<u.length-1){var i=u[o+1],c=t[n],f=function(e){return e&&e.constructor===Object}(c)?c:{},a=Array.isArray(c)?c:[];return t[n]="number"==typeof i?a:f,t[n]}return t[n]=r,e},e)}},20:function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(e){n[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,i,c=function(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),f=1;f<arguments.length;f++){for(var a in r=Object(arguments[f]))o.call(r,a)&&(c[a]=r[a]);if(n){i=n(r);for(var l=0;l<i.length;l++)u.call(r,i[l])&&(c[i[l]]=r[i[l]])}}return c}},200:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var r={};window?window.__SAFER_LISTENERS=r:e&&(e.__SAFER_LISTENERS=r);t.notify=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object.values(r).forEach(function(e){return"function"==typeof e&&e.apply(void 0,t)})}}).call(this,r(16))},201:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0)),o=r(49);var u=function(e){var t=(0,o.getContext)(e);return t||(console.warn("Could not subscribe to '"+e+"', store does not exist."),t=(0,o.getContext)("__no_context")),t},i=function(e){return function(t){return"function"==typeof e?e(t):e}},c=function(e){var t=e.children,r=e.to,o=u(r);return n.default.createElement(o.Consumer,null,i(t))},f=function e(t){var r=t.children,o=t.to,c=void 0===o?[]:o,f=t.index,a=void 0===f?0:f,l=t.stores,s=void 0===l?{}:l,p=u(c[a]);return n.default.createElement(p.Consumer,null,function(t){return s[c[a]]=t,a<c.length-1?n.default.createElement(e,{children:r,to:c,index:a+1,stores:s}):i(r)(s)})};t.default=function(e){var t=e.to;return Array.isArray(t)?n.default.createElement(f,e):n.default.createElement(c,e)}},26:function(e,t,r){"use strict";
/** @license React v16.7.0-alpha.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(20),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,f=o?Symbol.for("react.strict_mode"):60108,a=o?Symbol.for("react.profiler"):60114,l=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.concurrent_mode"):60111,d=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113,v=o?Symbol.for("react.memo"):60115,b=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t=arguments.length-1,r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=0;n<t;n++)r+="&args[]="+encodeURIComponent(arguments[n+1]);!function(e,t,r,n,o,u,i,c){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[r,n,o,u,i,c],a=0;(e=Error(t.replace(/%s/g,function(){return f[a++]}))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",r)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function j(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||_}function O(){}function S(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||_}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&m("85"),this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=j.prototype;var w=S.prototype=new O;w.constructor=S,n(w,j.prototype),w.isPureReactComponent=!0;var x={current:null,currentDispatcher:null},E=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var n=void 0,o={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)E.call(t,n)&&!P.hasOwnProperty(n)&&(o[n]=t[n]);var f=arguments.length-2;if(1===f)o.children=r;else if(1<f){for(var a=Array(f),l=0;l<f;l++)a[l]=arguments[l+2];o.children=a}if(e&&e.defaultProps)for(n in f=e.defaultProps)void 0===o[n]&&(o[n]=f[n]);return{$$typeof:u,type:e,key:i,ref:c,props:o,_owner:x.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var M=/\/+/g,$=[];function R(e,t,r,n){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function I(e,t,r){return null==e?0:function e(t,r,n,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var f=!1;if(null===t)f=!0;else switch(c){case"string":case"number":f=!0;break;case"object":switch(t.$$typeof){case u:case i:f=!0}}if(f)return n(o,t,""===r?"."+T(t,0):r),1;if(f=0,r=""===r?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){var l=r+T(c=t[a],a);f+=e(c,l,n,o)}else if(l=null===t||"object"!=typeof t?null:"function"==typeof(l=h&&t[h]||t["@@iterator"])?l:null,"function"==typeof l)for(t=l.call(t),a=0;!(c=t.next()).done;)f+=e(c=c.value,l=r+T(c,a++),n,o);else"object"===c&&m("31","[object Object]"==(n=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":n,"");return f}(e,"",t,r)}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,function(e){return t[e]})}(e.key):t.toString(36)}function N(e,t){e.func.call(e.context,t,e.count++)}function F(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?q(e,n,r,function(e){return e}):null!=e&&(k(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(M,"$&/")+"/")+r)),n.push(e))}function q(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace(M,"$&/")+"/"),I(e,F,t=R(t,u,n,o)),A(t)}function L(){var e=x.currentDispatcher;return null===e&&m("298"),e}var U={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return q(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;I(e,N,t=R(null,null,t,r)),A(t)},count:function(e){return I(e,function(){return null},null)},toArray:function(e){var t=[];return q(e,t,null,function(e){return e}),t},only:function(e){return k(e)||m("143"),e}},createRef:function(){return{current:null}},Component:j,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:d,render:e}},lazy:function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:v,type:e,compare:void 0===t?null:t}},Fragment:c,StrictMode:f,Suspense:y,createElement:C,cloneElement:function(e,t,r){(null===e||void 0===e)&&m("267",e);var o=void 0,i=n({},e.props),c=e.key,f=e.ref,a=e._owner;if(null!=t){void 0!==t.ref&&(f=t.ref,a=x.current),void 0!==t.key&&(c=""+t.key);var l=void 0;for(o in e.type&&e.type.defaultProps&&(l=e.type.defaultProps),t)E.call(t,o)&&!P.hasOwnProperty(o)&&(i[o]=void 0===t[o]&&void 0!==l?l[o]:t[o])}if(1===(o=arguments.length-2))i.children=r;else if(1<o){l=Array(o);for(var s=0;s<o;s++)l[s]=arguments[s+2];i.children=l}return{$$typeof:u,type:e.type,key:c,ref:f,props:i,_owner:a}},createFactory:function(e){var t=C.bind(null,e);return t.type=e,t},isValidElement:k,version:"16.7.0-alpha.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentOwner:x,assign:n}};U.ConcurrentMode=p,U.Profiler=a,U.useCallback=function(e,t){return L().useCallback(e,t)},U.useContext=function(e,t){return L().useContext(e,t)},U.useEffect=function(e,t){return L().useEffect(e,t)},U.useImperativeMethods=function(e,t,r){return L().useImperativeMethods(e,t,r)},U.useLayoutEffect=function(e,t){return L().useLayoutEffect(e,t)},U.useMemo=function(e,t){return L().useMemo(e,t)},U.useMutationEffect=function(e,t){return L().useMutationEffect(e,t)},U.useReducer=function(e,t,r){return L().useReducer(e,t,r)},U.useRef=function(e){return L().useRef(e)},U.useState=function(e){return L().useState(e)};var D={default:U},V=D&&U||D;e.exports=V.default||V},49:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContext=t.newContext=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(r(0));var o={},u=t.newContext=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o[e]||(o[e]=n.default.createContext(t))};t.getContext=function(e){return o[e]};u("__no_context",{set:function(){},get:function(){}})}})});
//# sourceMappingURL=safer.js.map