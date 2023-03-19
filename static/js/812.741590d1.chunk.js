"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[812],{6556:function(n,t,r){r.d(t,{Z:function(){return v}});var e,a,c,u,o=r(1087),i=r(7689),s=r(168),p=r(9549),f=p.Z.ul(e||(e=(0,s.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),l=p.Z.li(a||(a=(0,s.Z)(["\n  border: 1px solid #7d99a9;\n  border-radius: 5px;\n  padding: 10px;\n  background-color: #f7feff;\n"]))),d=p.Z.p(c||(c=(0,s.Z)(["\n  font-size: 25px;\n  font-weight: 500;\n  text-align: center;\n  color: #0d1b23;\n"]))),m=p.Z.img(u||(u=(0,s.Z)(["\n  margin: 0 auto;\n"]))),x=r(184),v=function(n){var t=n.array,r=(0,i.TH)();return(0,x.jsx)(f,{children:t.map((function(n){return(0,x.jsx)(l,{children:(0,x.jsxs)(o.rU,{to:"/movies/".concat(n.id),state:{from:r},children:[(0,x.jsx)(m,{src:"https://image.tmdb.org/t/p/w300".concat(n.poster_path),alt:n.original_title}),(0,x.jsx)(d,{children:n.original_title})]})},n.id)}))})}},8812:function(n,t,r){r.r(t),r.d(t,{default:function(){return y}});var e,a,c=r(5861),u=r(3433),o=r(9439),i=r(4687),s=r.n(i),p=r(1087),f=r(2791),l=r(7677),d=r(8185),m=r(168),x=r(9549),v=x.Z.input(e||(e=(0,m.Z)(["\n  background-color: inherit;\n  border-radius: 5px;\n  margin-right: 5px;\n"]))),h=x.Z.button(a||(a=(0,m.Z)(["\n  border-radius: 5px;\n  border: none;\n"]))),g=r(184),Z=function(n){var t=n.onSubmit;return(0,g.jsxs)("form",{onSubmit:function(n){n.preventDefault();var r=n.currentTarget;t(r.elements.query.value),r.reset()},autoComplete:"off",children:[(0,g.jsx)(v,{type:"text",name:"query"}),(0,g.jsx)(h,{type:"submit",children:(0,g.jsx)(d.dVI,{})})]})},b=r(6556),y=function(){var n=(0,f.useState)([]),t=(0,o.Z)(n,2),r=t[0],e=t[1],a=(0,p.lr)(),i=(0,o.Z)(a,2),d=i[0],m=i[1],x=(0,f.useMemo)((function(){return Object.fromEntries((0,u.Z)(d))}),[d]).query;(0,f.useEffect)((function(){if(x){var n=function(){var n=(0,c.Z)(s().mark((function n(){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.r5)(x);case 3:t=n.sent,r=t.results,e(r),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}else e([])}),[x]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(Z,{onSubmit:function(n){""!==n.trim()&&m(""!==n?{query:n}:{})}}),r.length>0&&(0,g.jsx)("ul",{children:(0,g.jsx)(b.Z,{array:r})})]})}},7677:function(n,t,r){r.d(t,{Jh:function(){return l},XT:function(){return s},bp:function(){return f},gN:function(){return p},r5:function(){return d}});var e=r(5861),a=r(4687),c=r.n(a),u=r(1243),o="https://api.themoviedb.org/3",i="7365af2a22cee957c4f845cc26521213",s=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(c().mark((function n(t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(t,"&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=812.741590d1.chunk.js.map