_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},"1xVs":function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("hlFM"),o=n("g4pe"),i=n.n(o),u=n("L6Je"),c=n("t78G");t.default=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(i.a,{children:Object(r.jsx)("title",{children:"\u0986\u09ae\u09be\u09a6\u09c7\u09b0 \u09b2\u09c7\u0996\u0995\u0997\u09a3 (Our Authors): Informative Coding - \u0987\u09a8\u09ab\u09b0\u09ae\u09c7\u099f\u09bf\u09ad \u0995\u09cb\u09a1\u09bf\u0982"})}),Object(r.jsxs)(u.a,{children:[Object(r.jsx)(a.a,{marginTop:"10rem"}),Object(r.jsx)(c.a,{title:"\u0986\u09ae\u09be\u09a6\u09c7\u09b0 \u09b2\u09c7\u0996\u0995\u0997\u09a3"}),Object(r.jsx)(a.a,{marginTop:"10rem"})]})]})}},"48fX":function(e,t,n){var r=n("qhzo");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";n("oI91");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var u=a.key.slice(a.key.indexOf("$")+1);e.has(u)?o=!1:e.add(u)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var c=0,s=l.length;c<s;c++){var f=l[c];if(a.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?o=!1:n.add(f);else{var d=a.props[f],p=r[f]||new Set;"name"===f&&i||!p.has(d)?(p.add(d),r[f]=p):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(i.AmpStateContext),r=(0,a.useContext)(u.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=a},T0f4:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},Xuae:function(e,t,n){"use strict";var r=n("mPvQ"),a=n("/GRZ"),o=n("i2R6"),i=(n("qXWd"),n("48fX")),u=n("tCBg"),c=n("T0f4");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),d=function(e){i(n,e);var t=s(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=d},cQFf:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/our-authors",function(){return n("1xVs")}])},g4pe:function(e,t,n){e.exports=n("8Kt/")},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},mPvQ:function(e,t,n){var r=n("5fIB"),a=n("rlHP"),o=n("KckH"),i=n("kG2m");e.exports=function(e){return r(e)||a(e)||o(e)||i()}},oI91:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},qXWd:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},t78G:function(e,t,n){"use strict";var r=n("nKUr"),a=n("hlFM"),o=n("ofer"),i=n("Z3vd"),u=n("q1tI"),c=n("1Bys");t.a=function(e){var t=e.title,n=e.bodyText,s=Object(u.useState)(!1),f=s[0],d=s[1],l=function(){return d(!f)};return Object(r.jsxs)(a.a,{textAlign:"center",children:[Object(r.jsx)(o.a,{variant:"h4",color:"primary",align:"center",children:t}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsx)(o.a,{variant:"body1",color:"textPrimary",align:"center",children:n||"\u0986\u09ae\u09be\u09a6\u09c7\u09b0 \u09b6\u09c1\u09b0\u09c1\u099f\u09be \u0996\u09c1\u09ac \u0985\u09b2\u09cd\u09aa \u09b8\u09ae\u09af\u09bc\u09c7 \u09b9\u09af\u09bc\u09c7\u099b\u09c7, \u09af\u09be\u09b0 \u0995\u09be\u09b0\u09a3\u09c7 \u09b8\u09ac \u0995\u09a8\u09cd\u099f\u09c7\u09a8\u09cd\u099f \u098f\u0996\u09a8\u09cb \u0989\u09aa\u09b2\u09ac\u09cd\u09a7 \u09a8\u09af\u09bc\u0964 \u0986\u09ae\u09b0\u09be \u0995\u09a8\u099f\u09c7\u09a8\u09cd\u099f \u09a4\u09c8\u09b0\u09c0 \u09a8\u09bf\u09df\u09c7 \u0995\u09be\u099c \u0995\u09b0\u099b\u09bf\u0964 \u0986\u09b6\u09be \u0995\u09b0\u09be \u09af\u09be\u09df \u0996\u09c1\u09ac \u09b6\u09bf\u0997\u09cd\u09b0\u0987 \u09b8\u0995\u09b2 \u0995\u09a8\u099f\u09c7\u09a8\u09cd\u099f \u0987\u09a8\u09ab\u09b0\u09ae\u09c7\u099f\u09bf\u09ad \u0995\u09cb\u09a1\u09bf\u0982 \u0993\u09df\u09c7\u09ac\u09b8\u09be\u0987\u099f\u09c7 \u09aa\u09cd\u09b0\u0995\u09be\u09b6\u09bf\u09a4 \u09b9\u09ac\u09c7\u0964 \u0987\u09a8\u09b6\u09be\u09b9\u0986\u09b2\u09cd\u09b2\u09be\u09b9\u0964 \u09a7\u09a8\u09cd\u09af\u09ac\u09be\u09a6 \u0986\u09ae\u09be\u09a6\u09c7\u09b0 \u09b8\u09be\u09a5\u09c7 \u09a5\u09be\u0995\u09be\u09b0 \u099c\u09a8\u09cd\u09af\u0964"}),Object(r.jsx)("br",{}),Object(r.jsx)(i.a,{variant:"text",children:Object(r.jsx)(o.a,{variant:"subtitle1",color:"primary",onClick:l,children:"\u0986\u09ae\u09be\u09a6\u09c7\u09b0 \u098f\u09aa\u09cd\u09b2\u09bf\u0995\u09c7\u09b6\u09a8 \u09a1\u09be\u0989\u09a8\u09b2\u09cb\u09a1 \u0995\u09b0\u09c1\u09a8"})}),Object(r.jsx)(i.a,{variant:"text",href:"https://www.youtube.com/channel/UCBSNbOumi5uNLJz8vFGJLRQ",target:"blank",children:Object(r.jsx)(o.a,{variant:"subtitle1",color:"primary",children:"\u0986\u09ae\u09be\u09a6\u09c7\u09b0 \u099a\u09cd\u09af\u09be\u09a8\u09c7\u09b2 \u09b8\u09be\u09ac\u09b8\u09cd\u0995\u09cd\u09b0\u09be\u0987\u09ac \u0995\u09b0\u09c1\u09a8"})}),Object(r.jsx)(c.a,{isOpen:f,handleClick:l})]})}},tCBg:function(e,t,n){var r=n("C+bE"),a=n("qXWd");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}}},[["cQFf",0,2,1,3,4]]]);