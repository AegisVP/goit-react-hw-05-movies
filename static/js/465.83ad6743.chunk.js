"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[465],{5344:function(n,t,e){e.r(t),e.d(t,{default:function(){return S}});var o,c,r,i,a,s,d,l,u=e(885),p=e(6636),f=e(2791),h=e(6871),x=e(501),m=e(3061),g=e.p+"static/media/film-poster-placeholder.9a8182eb4c8ae70fe602.png",v=e(168),b=e(6444),j=b.ZP.button(o||(o=(0,v.Z)(["\n  margin: ",";\n  padding: ",";\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  border-radius: 5px;\n  border: none;\n  outline: none;\n  color: #222244;\n  background-color: transparent;\n\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);\n"])),(function(n){return n.theme.mp(0,0,2)}),(function(n){return n.theme.mp(2,3)})),w=b.ZP.div(c||(c=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n"]))),Z=b.ZP.h1(r||(r=(0,v.Z)(["\n  margin: 0 0 20px;\n  font-size: 36px;\n  font-weight: bold;\n"]))),_=b.ZP.span(i||(i=(0,v.Z)(["\n  font-size: 32px;\n  font-weight: normal;\n"]))),k=b.ZP.div(a||(a=(0,v.Z)(["\n  display: flex;\n  padding: 10px 0 20px;\n  border-bottom: 1px solid #000000;\n"]))),y=b.ZP.p(s||(s=(0,v.Z)(["\n  margin: 0 0 0 10px;\n  font-size: 16px;\n  font-weight: normal;\n"]))),P=(0,b.ZP)(x.rU)(d||(d=(0,v.Z)(["\n  margin: 10px 0 0;\n  font-size: 16px;\n  font-weight: bold;\n  text-decoration: underline;\n  color: #222244;\n"]))),z=b.ZP.div(l||(l=(0,v.Z)(["\n  display: flex;\n  padding: 0 0 20px;\n  flex-direction: column;\n  border-bottom: 1px solid #000000;\n"]))),R=e(184),S=function(){var n,t,e=(0,h.UO)(),o=parseInt(e.movieId),c=(0,f.useState)({}),r=(0,u.Z)(c,2),i=r[0],a=r[1],s=null!==(n=null===(t=(0,h.TH)().state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/movies";(0,f.useEffect)((function(){(0,p.RV)(o).then(a)}),[o]);var d=i.title,l=i.tagline,v=i.poster_path,b=i.overview,S=i.release_date;return document.title="React HW05 - Movie info - ".concat(d),(0,R.jsxs)(w,{children:[(0,R.jsx)(x.rU,{to:s,children:(0,R.jsxs)(j,{children:[(0,R.jsx)(m.D_,{}),"Go back"]})}),d&&b?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(Z,{children:[d," ",(0,R.jsxs)(_,{children:["(",String(S).slice(0,4),")"]})]}),(0,R.jsxs)(k,{children:[(0,R.jsx)("img",{width:"300",height:"450",alt:l,src:v?"https://www.themoviedb.org/t/p/w300_and_h450_bestv2".concat(v):g}),(0,R.jsx)(y,{children:b})]}),(0,R.jsxs)(z,{children:[(0,R.jsx)(P,{to:"cast",state:{from:"".concat(s)},children:"Cast"}),(0,R.jsx)(P,{to:"reviews",state:{from:"".concat(s)},children:"Reviews"})]}),(0,R.jsx)(f.Suspense,{fallback:(0,R.jsx)("p",{children:"Loading..."}),children:(0,R.jsx)(h.j3,{})})]}):(0,R.jsx)("p",{children:"Loading..."})]})}},6636:function(n,t,e){e.d(t,{DF:function(){return f},J0:function(){return p},KS:function(){return d},RV:function(){return u},wn:function(){return l}});var o=e(4569),c=e.n(o),r="ad24807293275bef83ede161311e71e0",i="https://api.themoviedb.org/3/",a="movie",s=function(n){return c().get(n).then((function(n){return n.data}))},d=function(){return s("".concat(i).concat("movie/popular","?api_key=").concat(r))},l=function(n){var t=n.query,e=void 0===t?"trending":t,o=n.page,c=void 0===o?1:o;return s("".concat(i).concat("search/movie","?api_key=").concat(r,"&query=").concat(e,"&page=").concat(c))},u=function(n){return s("".concat(i).concat(a,"/").concat(n,"?api_key=").concat(r))},p=function(n){return s("".concat(i).concat(a,"/").concat(n,"/").concat("credits","?api_key=").concat(r)).then((function(n){return n.cast.slice(0,10)}))},f=function(n){return s("".concat(i).concat(a,"/").concat(n,"/").concat("reviews","?api_key=").concat(r)).then((function(n){return n.results.slice(0,10)}))}}}]);
//# sourceMappingURL=465.83ad6743.chunk.js.map