"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.L=void 0,exports.Localizer=Localizer,exports.Internationalizer=Internationalizer;var _react=require("react"),_react2=_interopRequireDefault(_react);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var lang="",default_lang="";function Localizer(n){return function(e){return n[lang]?n[lang][e]:default_lang?n[default_lang][e]:void 0}}function Internationalizer(e){return lang=e.lang,default_lang=e.default,e.children}var L=exports.L={text:function(e){return compose(_react2.default.Fragment,e)},p:function(e,n){return compose("p",e,n)},strong:function(e,n){return compose("strong",e,n)},em:function(e,n){return compose("em",e,n)},span:function(e,n){return compose("span",e,n)},sup:function(e,n){return compose("sup",e,n)},sub:function(e,n){return compose("sub",e,n)},ul:function(e,n){return compose("ul",e,n)},ol:function(e,n){return compose("ol",e,n)},li:function(e,n){return compose("li",e,n)},a:function(e,n){return compose("a",e,n)}};function compose(e){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,r=Array.isArray(n)?n.map(function(e,n){return _react2.default.createElement(_react2.default.Fragment,{key:n},e)}):n;return _react2.default.createElement(e,t,r)}var Lieumila={Localizer:Localizer,Internationalizer:Internationalizer,L:L};exports.default=Lieumila,module.exports=Lieumila;