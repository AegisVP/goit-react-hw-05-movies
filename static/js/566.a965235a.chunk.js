"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[566],{8834:function(n,e,t){t.d(e,{XJ:function(){return s},cv:function(){return l},qx:function(){return d}});var r,a,i,o=t(168),c=t(501),u=t(6444),s=u.ZP.ul(r||(r=(0,o.Z)(["\n  margin: ",";\n  padding: ",";\n\n  display: flex;\n  flex-direction: column;\n  flex-wrap: no-wrap;\n\n  list-style: none;\n"])),(function(n){return n.theme.mp(1,0,0)}),(function(n){return n.theme.mp(2)})),d=u.ZP.li(a||(a=(0,o.Z)(["\n  margin: ",";\n  padding: 0;\n  word-wrap: none;\n  padding: 0;\n\n  display: flex;\n  justify-content: start;\n  align-items: center;\n"])),(function(n){return n.theme.mp(2)})),l=(0,u.ZP)(c.rU)(i||(i=(0,o.Z)(["\n  margin: 0;\n  padding: ",";\n\n  width: 100%;\n\n  font-size: 14px;\n  font-weight: normal;\n  text-decoration: none;\n  color: darkblue;\n\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);\n\n  &.active {\n    text-decoration: underline;\n    color: darkred;\n  }\n"])),(function(n){return n.theme.mp(2)}))},1718:function(n,e,t){t.d(e,{$D:function(){return b},DF:function(){return y},J0:function(){return x},RV:function(){return g}});var r=t(8214),a=t(885),i=t(5861),o=t(4569),c=t.n(o),u=t(2791),s="https://api.themoviedb.org/3",d="movie/popular",l="search/movie",p="movie",f="credits",h="reviews",v=new URLSearchParams({api_key:"ad24807293275bef83ede161311e71e0"});function g(n,e){return m.apply(this,arguments)}function m(){return(m=(0,i.Z)((0,r.Z)().mark((function n(e,t){var a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,c().get("".concat(s,"/").concat(p,"/").concat(e,"?").concat(v)).then((function(n){return n.data})).catch(window.alert);case 4:a=n.sent,t(a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n,e){return w.apply(this,arguments)}function w(){return(w=(0,i.Z)((0,r.Z)().mark((function n(e,t){var a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,c().get("".concat(s,"/").concat(p,"/").concat(e,"/").concat(f,"?").concat(v)).then((function(n){return n.data.cast.slice(0,10)})).catch(window.alert);case 4:a=n.sent,t(a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n,e){return Z.apply(this,arguments)}function Z(){return(Z=(0,i.Z)((0,r.Z)().mark((function n(e,t){var a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,c().get("".concat(s,"/").concat(p,"/").concat(e,"/").concat(h,"?").concat(v)).then((function(n){return n.data.results.slice(0,10)})).catch(window.alert);case 4:a=n.sent,t(a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var b=function(){var n=(0,u.useState)(""),e=(0,a.Z)(n,2),t=e[0],o=e[1],p=(0,u.useState)(""),f=(0,a.Z)(p,2),h=f[0],g=f[1],m=(0,u.useState)({results:[]}),x=(0,a.Z)(m,2),w=x[0],y=x[1];function Z(){return(Z=(0,i.Z)((0,r.Z)().mark((function n(e){var t,a,i,o,u,p;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query,a=void 0===t?"trending":t,i=e.page,o=void 0===i?1:i,(null===a||void 0===a?void 0:a.length)>0&&"trending"!==a&&(v.set("query",a),v.set("page",o)),u="trending"===a?d:l,p="".concat(s,"/").concat(u,"?").concat(v),n.next=6,c().get(p).then((function(n){return n.data})).then(y).catch(window.alert);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}(0,u.useEffect)((function(){t?function(n){Z.apply(this,arguments)}({query:t,page:h}):b()}),[t,h]);var b=function(){y({results:[]})};return[w,function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.query,r=void 0===e?"trending":e,a=n.page,i=void 0===a?1:a;t!==r&&(o(null===r||void 0===r?void 0:r.trim().toLocaleLowerCase()),g(i),(null===r||void 0===r?void 0:r.length)>=0||b())},b]}},1566:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r,a,i,o=t(885),c=t(1718),u=t(2791),s=t(501),d=t(8834),l=t(168),p=t(6444),f=p.ZP.label(r||(r=(0,l.Z)(["\n  margin: ",";\n\n  display: flex;\n\n  font-size: 14px;\n  border: 1px solid #000000;\n"])),(function(n){return n.theme.mp(2)})),h=p.ZP.input(a||(a=(0,l.Z)(["\n  margin: 0;\n  padding: ",";\n\n  width: 250px;\n  border: none;\n  outline: none;\n"])),(function(n){return n.theme.mp(1)})),v=p.ZP.button(i||(i=(0,l.Z)(["\n  padding: 6px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 36px;\n  width: 36px;\n\n  font-size: 18px;\n  line-height: 18px;\n\n  border: none;\n  outline: none;\n  background-color: transparent;\n"]))),g=t(184),m=function(){var n=(0,s.lr)(),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,u.useState)(""),i=(0,o.Z)(a,2),l=i[0],p=i[1],m=(0,u.useState)(""),x=(0,o.Z)(m,2),w=x[0],y=x[1],Z=(0,c.$D)(),b=(0,o.Z)(Z,2),k=b[0],q=b[1],j=t.get("query"),P=t.get("page");(0,u.useEffect)((function(){var n=j||"",e=P&&""!==P?P:1;""!==n&&r({query:n,page:e}),p(n),y(e)}),[j,P]),(0,u.useEffect)((function(){q({query:l,page:w})}),[l,w]);return 0===(null===k||void 0===k?void 0:k.results.length)?(0,g.jsxs)("div",{children:[(0,g.jsx)("form",{action:"#",method:"get",onSubmit:function(n){null===n||void 0===n||n.preventDefault(),""!==n.currentTarget.query.value&&r({query:n.currentTarget.query.value,page:1})},children:(0,g.jsxs)(f,{children:[(0,g.jsx)(h,{type:"text",name:"query",autoFocus:!0,placeholder:"What movie do you wish to find?"}),(0,g.jsx)(v,{type:"submit",children:"\ud83d\udd0e"})]})}),""!==l&&(0,g.jsx)("p",{children:"no films found"})]}):(0,g.jsx)(d.XJ,{children:k.results.map((function(n){return(0,g.jsx)(d.qx,{children:(0,g.jsx)(d.cv,{to:"".concat(n.id),state:{from:"/movies?query=".concat(l)},children:null===n||void 0===n?void 0:n.original_title})},n.id)}))})}}}]);
//# sourceMappingURL=566.a965235a.chunk.js.map