"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[842,146],{7842:function(n,t,e){e.r(t);var c=e(885),r=e(6636),o=e(4146),a=e(2791),i=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,c.Z)(n,2),e=t[0],u=t[1];return document.title="React HW05 - Trending movies",(0,a.useEffect)((function(){(0,r.KS)().then(u)}),[]),(null===e||void 0===e?void 0:e.total_results)&&(0,i.jsx)(o.default,{filmList:e,state:{from:"/",addPath:"movies/"}})}},4146:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var c,r,o,a=e(168),i=e(501),u=e(6444),d=u.ZP.ul(c||(c=(0,a.Z)(["\n  margin: ",";\n  padding: ",";\n\n  display: flex;\n  flex-direction: column;\n  flex-wrap: no-wrap;\n\n  list-style: none;\n"])),(function(n){return n.theme.mp(1,0,0)}),(function(n){return n.theme.mp(2)})),f=u.ZP.li(r||(r=(0,a.Z)(["\n  margin: ",";\n  padding: 0;\n  word-wrap: none;\n  padding: 0;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n"])),(function(n){return n.theme.mp(2)})),l=(0,u.ZP)(i.rU)(o||(o=(0,a.Z)(["\n  margin: 0;\n  padding: ",";\n\n  width: 100%;\n\n  font-size: 14px;\n  font-weight: normal;\n  text-decoration: none;\n  color: darkblue;\n\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);\n\n  &.active {\n    text-decoration: underline;\n    color: darkred;\n  }\n"])),(function(n){return n.theme.mp(2)})),s=e(184),p=function(n){var t=n.filmList,e=n.state;return(0,s.jsx)(d,{children:t.results.map((function(n){var t;return(0,s.jsx)(f,{children:(0,s.jsx)(l,{to:"".concat(e.addPath).concat(n.id),state:e,children:null!==(t=n.title)&&void 0!==t?t:n.original_title})},n.id)}))})}},6636:function(n,t,e){e.d(t,{DF:function(){return p},J0:function(){return s},KS:function(){return d},RV:function(){return l},wn:function(){return f}});var c=e(4569),r=e.n(c),o="ad24807293275bef83ede161311e71e0",a="https://api.themoviedb.org/3/",i="movie",u=function(n){return r().get(n).then((function(n){return n.data}))},d=function(){return u("".concat(a).concat("movie/popular","?api_key=").concat(o))},f=function(n){var t=n.query,e=void 0===t?"trending":t,c=n.page,r=void 0===c?1:c;return u("".concat(a).concat("search/movie","?api_key=").concat(o,"&query=").concat(e,"&page=").concat(r))},l=function(n){return u("".concat(a).concat(i,"/").concat(n,"?api_key=").concat(o))},s=function(n){return u("".concat(a).concat(i,"/").concat(n,"/").concat("credits","?api_key=").concat(o)).then((function(n){return n.cast.slice(0,10)}))},p=function(n){return u("".concat(a).concat(i,"/").concat(n,"/").concat("reviews","?api_key=").concat(o)).then((function(n){return n.results.slice(0,10)}))}}}]);
//# sourceMappingURL=842.b4df190c.chunk.js.map