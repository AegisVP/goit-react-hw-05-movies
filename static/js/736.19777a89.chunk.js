"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{9736:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,a,c,i,o,u,s=e(885),f=e(1718),p=e(2791),h=e(6871),d=e(168),l=e(6444),m=l.ZP.ul(r||(r=(0,d.Z)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]))),g=l.ZP.li(a||(a=(0,d.Z)(["\n  padding: ",";\n  margin: ",";\n\n  font-size: 14px;\n  font-weight: normal;\n\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);\n"])),(function(n){return n.theme.mp(2)}),(function(n){return n.theme.mp(3,0,0)})),v=l.ZP.div(c||(c=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: normal;\n  margin: 0;\n"]))),w=l.ZP.p(i||(i=(0,d.Z)(["\n  margin: ",";\n  font-size: 18px;\n  font-weight: bold;\n"])),(function(n){return n.theme.mp(2,0,0)})),x=l.ZP.span(o||(o=(0,d.Z)(["\n  font-weight: normal;\n"]))),Z=l.ZP.p(u||(u=(0,d.Z)(["\n  margin: ",";\n  font-weight: bold;\n"])),(function(n){return n.theme.mp(2,0,0)})),b=e(184),y=function(){var n=(0,h.UO)(),t=parseInt(n.movieId),e=(0,p.useState)([]),r=(0,s.Z)(e,2),a=r[0],c=r[1];return(0,p.useEffect)((function(){if(isNaN(t)||"number"!==typeof t)return(0,b.jsx)("p",{children:"Not a number"});(0,f.J0)(t,c)}),[t]),(0,b.jsx)(m,{children:a&&a.length>0?a.map((function(n){var t=n.id,e=n.name,r=n.character,a=n.profile_path;return(0,b.jsxs)(g,{children:[(0,b.jsx)("img",{src:a?"https://www.themoviedb.org/t/p/w138_and_h175_face/".concat(a):"https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg",width:"138",height:"175",alt:e}),(0,b.jsxs)(v,{children:[(0,b.jsx)(w,{children:e}),r.length>0&&(0,b.jsxs)(Z,{children:[(0,b.jsx)(x,{children:"as "})," ",r]})]})]},t)})):(0,b.jsx)(g,{children:"No information is available"})})}},1718:function(n,t,e){e.d(t,{$D:function(){return y},DF:function(){return Z},J0:function(){return w},RV:function(){return g}});var r=e(8214),a=e(885),c=e(5861),i=e(4569),o=e.n(i),u=e(2791),s="https://api.themoviedb.org/3",f="movie/popular",p="search/movie",h="movie",d="credits",l="reviews",m=new URLSearchParams({api_key:"ad24807293275bef83ede161311e71e0"});function g(n,t){return v.apply(this,arguments)}function v(){return(v=(0,c.Z)((0,r.Z)().mark((function n(t,e){var a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,o().get("".concat(s,"/").concat(h,"/").concat(t,"?").concat(m)).then((function(n){return n.data})).catch(window.alert);case 4:a=n.sent,e(a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n,t){return x.apply(this,arguments)}function x(){return(x=(0,c.Z)((0,r.Z)().mark((function n(t,e){var a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,o().get("".concat(s,"/").concat(h,"/").concat(t,"/").concat(d,"?").concat(m)).then((function(n){return n.data.cast.slice(0,10)})).catch(window.alert);case 4:a=n.sent,e(a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(n,t){return b.apply(this,arguments)}function b(){return(b=(0,c.Z)((0,r.Z)().mark((function n(t,e){var a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,o().get("".concat(s,"/").concat(h,"/").concat(t,"/").concat(l,"?").concat(m)).then((function(n){return n.data.results.slice(0,10)})).catch(window.alert);case 4:a=n.sent,e(a);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var y=function(){var n=(0,u.useState)(""),t=(0,a.Z)(n,2),e=t[0],i=t[1],h=(0,u.useState)(""),d=(0,a.Z)(h,2),l=d[0],g=d[1],v=(0,u.useState)({results:[]}),w=(0,a.Z)(v,2),x=w[0],Z=w[1];function b(){return(b=(0,c.Z)((0,r.Z)().mark((function n(t){var e,a,c,i,u,h;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.query,a=void 0===e?"trending":e,c=t.page,i=void 0===c?1:c,(null===a||void 0===a?void 0:a.length)>0&&"trending"!==a&&(m.set("query",a),m.set("page",i)),u="trending"===a?f:p,h="".concat(s,"/").concat(u,"?").concat(m),n.next=6,o().get(h).then((function(n){return n.data})).then(Z).catch(window.alert);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}(0,u.useEffect)((function(){e?function(n){b.apply(this,arguments)}({query:e,page:l}):y()}),[e,l]);var y=function(){Z({results:[]})};return[x,function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.query,r=void 0===t?"trending":t,a=n.page,c=void 0===a?1:a;e!==r&&(i(null===r||void 0===r?void 0:r.trim().toLocaleLowerCase()),g(c),(null===r||void 0===r?void 0:r.length)>=0||y())},y]}}}]);
//# sourceMappingURL=736.19777a89.chunk.js.map