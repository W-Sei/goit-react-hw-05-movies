"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[128],{6128:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,a,c,u,o,i=e(9439),s=e(2791),p=e(7689),f=e(1757),h=e(168),d=e(6444),l=d.ZP.ul(r||(r=(0,h.Z)(["\n  padding: 40px 90px;\n"]))),v=d.ZP.li(a||(a=(0,h.Z)(["\n  border: transparent;\n  border-radius: 7px;\n  background-color: #fadadd;\n  padding: 40px;\n  margin-bottom: 10px;\n"]))),g=d.ZP.p(c||(c=(0,h.Z)(["\n  font-size: 15px;\n  font-weight: 700;\n  color: purple;\n  margin-right: 5px;\n"]))),x=d.ZP.span(u||(u=(0,h.Z)(["\n  color: black;\n  font-weight: 500;\n  font-family: 'Roboto', sans-serif;\n  font-size: 13px;\n"]))),w=d.ZP.p(o||(o=(0,h.Z)(["\n  display: flex;\n  justify-content: center;\n  padding: 40px;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 500;\n  font-size: 25px;\n"]))),m=e(184);function y(n){var t=n.reviews;return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(l,{children:t.map((function(n){var t=n.author,e=n.review,r=n.id;return(0,m.jsx)(v,{children:(0,m.jsxs)(g,{children:[t,": ",(0,m.jsxs)(x,{children:['"',e,'"']})]})},r)}))})})}function Z(){var n=(0,s.useState)(null),t=(0,i.Z)(n,2),e=t[0],r=t[1],a=(0,p.UO)().movieId;return(0,s.useEffect)((function(){(0,f.sv)(a).then((function(n){var t=[];n.results.map((function(n){var e=n.author,r=n.content,a={id:n.id,author:e,review:r};return t.push(a)})),r(t)}))}),[a]),e&&e.length>0?(0,m.jsx)(y,{reviews:e}):(0,m.jsx)(w,{children:"We have no reviews here yet."})}},1757:function(n,t,e){e.d(t,{FE:function(){return s},Y5:function(){return d},sv:function(){return x},uV:function(){return v},wr:function(){return f}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1243),o="https://api.themoviedb.org/3",i="c8d20ee8a9e8ed9b29c68c787df9586c";function s(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"/search/movie?api_key=").concat(i,"&query=").concat(t,"&page=1"),n.next=3,u.Z.get("".concat(e)).then((function(n){return n.data}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(o,"/trending/movie/day?api_key=").concat(i,"&page=",1),n.next=3,u.Z.get("".concat(t)).then((function(n){return n.data}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"/movie/").concat(t,"?api_key=").concat(i,"&language=en-US"),n.next=3,u.Z.get("".concat(e)).then((function(n){return n.data}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(i),n.next=3,u.Z.get("".concat(e)).then((function(n){return n.data}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"),n.next=3,u.Z.get("".concat(e)).then((function(n){return n.data}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=128.ec7664a7.chunk.js.map