"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Localizer=Localizer,exports.Internationalizer=Internationalizer,exports.default=exports.L=void 0;var _react=_interopRequireDefault(require("react"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var lang="",default_lang="";function Localizer(t){return function(e){return t[lang]?t[lang][e]:default_lang?t[default_lang][e]:void 0}}function Internationalizer(e){return lang=e.lang,default_lang=e.default,e.children}var L={text:function(e){return compose(_react.default.Fragment,e)},p:function(e,t){return compose("p",e,t)},strong:function(e,t){return compose("strong",e,t)},em:function(e,t){return compose("em",e,t)},span:function(e,t){return compose("span",e,t)},sup:function(e,t){return compose("sup",e,t)},sub:function(e,t){return compose("sub",e,t)},ul:function(e,t){return compose("ul",e,t)},ol:function(e,t){return compose("ol",e,t)},li:function(e,t){return compose("li",e,t)},a:function(e,t){return compose("a",e,t)}};function compose(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,r=Array.isArray(t)?t.map(function(e,t){return _react.default.createElement(_react.default.Fragment,{key:t},e)}):t;return _react.default.createElement(e,n,r)}var Lieumila={Localizer:Localizer,Internationalizer:Internationalizer,L:exports.L=L},_default=Lieumila;exports.default=_default,module.exports=Lieumila;