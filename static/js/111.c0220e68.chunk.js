"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[111],{111:function(n,t,e){e.r(t),e.d(t,{default:function(){return B}});var r,i=e(9439),a=e(7689),o=e(1757),c=e(2791),s=e(168),u=e(6444),p=u.ZP.button(r||(r=(0,s.Z)(["\n  min-width: 80px;\n  min-height: 30px;\n  padding: 4px;\n  font-weight: 600;\n  font-size: 16px;\n  background-color: purple;\n  box-shadow: 0 3px 5px 0 rgb(0 4 56 / 50%);\n  color: white;\n  border: 2px solid purple;\n  border-radius: 4px;\n  margin-top: 100px;\n  transition: all 250ms;\n  :hover {\n    transform: scale(1.1);\n    color: yellow;\n  }\n  :hover {\n    opacity: 0.8;\n  }\n"]))),l=e(184);function d(n){var t=n.location,e=(0,a.s0)();return(0,l.jsx)(p,{onClick:function(){var n,r;e(null!==(n=null===t||void 0===t||null===(r=t.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/")},children:"Return"})}var x,h,f,g,v,m,Z,w,b,j,y,k,P,_,z,D,C=e(1087),O=e(6856),S=u.ZP.div(x||(x=(0,s.Z)(["\n  padding: 0 100px;\n"]))),U=u.ZP.section(h||(h=(0,s.Z)(["\n  margin-top: 10px;\n  padding: 80px;\n  display: flex;\n"]))),E=u.ZP.img(f||(f=(0,s.Z)(["\n  width: 400px;\n"]))),F=u.ZP.div(g||(g=(0,s.Z)(["\n  padding: 15px;\n"]))),I=u.ZP.div(v||(v=(0,s.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 30px;\n"]))),R=u.ZP.h2(m||(m=(0,s.Z)(["\n  font-size: 30px;\n  color: #585858;\n  margin-bottom: 20px;\n"]))),V=u.ZP.h3(Z||(Z=(0,s.Z)(["\n  font-size: 18px;\n  color: #585858;\n  margin-bottom: 10px;\n"]))),Y=u.ZP.p(w||(w=(0,s.Z)(["\n  font-weight: 400;\n  font-size: 15px;\n  margin-bottom: 20px;\n"]))),q=u.ZP.div(b||(b=(0,s.Z)([""]))),A=u.ZP.div(j||(j=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n  background: linear-gradient(90deg, purple, pink);\n  box-shadow: 0 3px 5px 0 rgb(0 4 56 / 50%);\n  padding: 0 20px;\n  margin-bottom: 15px;\n"]))),G=u.ZP.p(y||(y=(0,s.Z)(["\n  color: white;\n  font-size: 20px;\n  font-weight: 500;\n"]))),H=u.ZP.ul(k||(k=(0,s.Z)([""]))),L=u.ZP.li(P||(P=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n  background-color: #fadadd;\n  margin-bottom: 8px;\n  align-items: center;\n  transition: all 250ms;\n  :hover {\n    opacity: 0.8;\n  }\n  :last-child {\n    margin-bottom: 0;\n    border-bottom: 1px solid black;\n  }\n"]))),M=(0,u.ZP)(C.OL)(_||(_=(0,s.Z)(["\n  font-size: 18px;\n  color: black;\n  display: block;\n  margin-bottom: 8px;\n"]))),Q=((0,u.ZP)(O.aQX)(z||(z=(0,s.Z)(["\n  margin-right: 5px;\n"]))),(0,u.ZP)(O.Djl)(D||(D=(0,s.Z)(["\n  margin-left: 5px;\n  height: 13px;\n"])))),T=e(3800);function X(n){var t=n.movieDetails,e=t.title,r=t.genres,i=t.poster,o=t.overview,c=t.releaseDate,s=t.vote,u=(0,a.TH)(),p=r.map((function(n){return n.name})).join(", ");return(0,l.jsxs)(S,{children:[(0,l.jsxs)(U,{children:[(0,l.jsx)(E,{src:i?"https://image.tmdb.org/t/p/w500/".concat(i):T,alt:e}),(0,l.jsxs)(F,{children:[(0,l.jsxs)(I,{children:[(0,l.jsx)(R,{children:e}),(0,l.jsxs)(V,{children:["Vote: ",s]})]}),(0,l.jsxs)(V,{children:["Date release: ",c]}),(0,l.jsx)(V,{children:"Overwiew:"}),(0,l.jsxs)(Y,{children:[" ",o]}),(0,l.jsx)(V,{children:"Genres:"}),(0,l.jsxs)(Y,{children:[" ",p]}),(0,l.jsx)(d,{location:u})]})]}),(0,l.jsxs)(q,{children:[(0,l.jsx)(A,{children:(0,l.jsx)(G,{children:"Aditional Information"})}),(0,l.jsxs)(H,{children:[(0,l.jsx)(L,{children:(0,l.jsxs)(M,{to:"cast",state:u.state,children:["Cast",(0,l.jsx)(Q,{})]})}),(0,l.jsx)(L,{children:(0,l.jsxs)(M,{to:"reviews",state:u.state,children:["Reviews",(0,l.jsx)(Q,{})]})})]})]})]})}function B(){var n=(0,c.useState)(null),t=(0,i.Z)(n,2),e=t[0],r=t[1],s=(0,a.UO)().movieId;return(0,c.useEffect)((function(){(0,o.Y5)(s).then((function(n){var t=n.original_title,e=n.genres,i=n.overview,a=n.poster_path,o=n.release_date,c=n.vote_average;return r({title:t,genres:e,overview:i,poster:a,releaseDate:o,vote:c})}))}),[s,r]),(0,l.jsxs)(l.Fragment,{children:[e&&(0,l.jsx)(X,{movieDetails:e}),(0,l.jsx)(a.j3,{})]})}},1757:function(n,t,e){e.d(t,{FE:function(){return u},Y5:function(){return x},sv:function(){return v},uV:function(){return f},wr:function(){return l}});var r=e(5861),i=e(7757),a=e.n(i),o=e(1243),c="https://api.themoviedb.org/3",s="c8d20ee8a9e8ed9b29c68c787df9586c";function u(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(c,"/search/movie?api_key=").concat(s,"&query=").concat(t,"&page=1"),n.next=3,o.Z.get("".concat(e)).then((function(n){return n.data}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(c,"/trending/movie/day?api_key=").concat(s,"&page=",1),n.next=3,o.Z.get("".concat(t)).then((function(n){return n.data}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(c,"/movie/").concat(t,"?api_key=").concat(s,"&language=en-US"),n.next=3,o.Z.get("".concat(e)).then((function(n){return n.data}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(c,"/movie/").concat(t,"/credits?api_key=").concat(s),n.next=3,o.Z.get("".concat(e)).then((function(n){return n.data}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(c,"/movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"),n.next=3,o.Z.get("".concat(e)).then((function(n){return n.data}));case 3:return n.abrupt("return",n.sent);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},3800:function(n,t,e){n.exports=e.p+"static/media/noMovie.156109e61a99a4a55973.png"}}]);
//# sourceMappingURL=111.c0220e68.chunk.js.map