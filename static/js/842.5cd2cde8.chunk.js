"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[842,146],{1718:function(n,t,e){e.d(t,{$D:function(){return k},DF:function(){return Z},J0:function(){return g},RV:function(){return m}});var r=e(8214),a=e(885),c=e(5861),i=e(4569),o=e.n(i),u=e(2791),s="https://api.themoviedb.org/3",d="movie/popular",f="search/movie",l="movie",p="credits",h="reviews",v=new URLSearchParams({api_key:"ad24807293275bef83ede161311e71e0"});function m(n,t){return w.apply(this,arguments)}function w(){return(w=(0,c.Z)((0,r.Z)().mark((function n(t,e){var a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,o().get("".concat(s,"/").concat(l,"/").concat(t,"?").concat(v)).then((function(n){return n.data})).catch(window.alert);case 4:a=n.sent,e(a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n,t){return x.apply(this,arguments)}function x(){return(x=(0,c.Z)((0,r.Z)().mark((function n(t,e){var a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,o().get("".concat(s,"/").concat(l,"/").concat(t,"/").concat(p,"?").concat(v)).then((function(n){return n.data.cast.slice(0,10)})).catch(window.alert);case 4:a=n.sent,e(a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(n,t){return y.apply(this,arguments)}function y(){return(y=(0,c.Z)((0,r.Z)().mark((function n(t,e){var a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,o().get("".concat(s,"/").concat(l,"/").concat(t,"/").concat(h,"?").concat(v)).then((function(n){return n.data.results.slice(0,10)})).catch(window.alert);case 4:a=n.sent,e(a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var k=function(){var n=(0,u.useState)(""),t=(0,a.Z)(n,2),e=t[0],i=t[1],l=(0,u.useState)(""),p=(0,a.Z)(l,2),h=p[0],m=p[1],w=(0,u.useState)({results:[]}),g=(0,a.Z)(w,2),x=g[0],Z=g[1];function y(){return(y=(0,c.Z)((0,r.Z)().mark((function n(t){var e,a,c,i,u,l;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.query,a=void 0===e?"trending":e,c=t.page,i=void 0===c?1:c,(null===a||void 0===a?void 0:a.length)>0&&"trending"!==a&&(v.set("query",a),v.set("page",i)),u="trending"===a?d:f,l="".concat(s,"/").concat(u,"?").concat(v),n.next=6,o().get(l).then((function(n){return n.data})).then(Z).catch(window.alert);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}(0,u.useEffect)((function(){e?function(n){y.apply(this,arguments)}({query:e,page:h}):k()}),[e,h]);var k=function(){Z({})};return[x,function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.query,r=void 0===t?"trending":t,a=n.page,c=void 0===a?1:a;e!==r&&(i(null===r||void 0===r?void 0:r.trim().toLocaleLowerCase()),m(c),(null===r||void 0===r?void 0:r.length)>=0||k())},k]}},7842:function(n,t,e){e.r(t);var r=e(885),a=e(1718),c=e(4146),i=e(2791),o=e(184);t.default=function(){var n=(0,a.$D)(),t=(0,r.Z)(n,2),e=t[0],u=t[1];return document.title="React HW05 - Trending movies",(0,i.useEffect)((function(){u("trending")}),[u]),(null===e||void 0===e?void 0:e.total_results)&&(0,o.jsx)(c.default,{filmList:e,state:{from:"/",addPath:"movies/"}})}},4146:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var r,a,c,i=e(168),o=e(501),u=e(6444),s=u.ZP.ul(r||(r=(0,i.Z)(["\n  margin: ",";\n  padding: ",";\n\n  display: flex;\n  flex-direction: column;\n  flex-wrap: no-wrap;\n\n  list-style: none;\n"])),(function(n){return n.theme.mp(1,0,0)}),(function(n){return n.theme.mp(2)})),d=u.ZP.li(a||(a=(0,i.Z)(["\n  margin: ",";\n  padding: 0;\n  word-wrap: none;\n  padding: 0;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n"])),(function(n){return n.theme.mp(2)})),f=(0,u.ZP)(o.rU)(c||(c=(0,i.Z)(["\n  margin: 0;\n  padding: ",";\n\n  width: 100%;\n\n  font-size: 14px;\n  font-weight: normal;\n  text-decoration: none;\n  color: darkblue;\n\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);\n\n  &.active {\n    text-decoration: underline;\n    color: darkred;\n  }\n"])),(function(n){return n.theme.mp(2)})),l=e(184),p=function(n){var t=n.filmList,e=n.state;return(0,l.jsx)(s,{children:t.results.map((function(n){var t;return(0,l.jsx)(d,{children:(0,l.jsx)(f,{to:"".concat(e.addPath).concat(n.id),state:e,children:null!==(t=n.title)&&void 0!==t?t:n.original_title})},n.id)}))})}}}]);
//# sourceMappingURL=842.5cd2cde8.chunk.js.map