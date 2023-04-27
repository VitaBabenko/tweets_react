"use strict";(self.webpackChunktweets_react=self.webpackChunktweets_react||[]).push([[60],{60:function(n,e,t){t.r(e),t.d(e,{default:function(){return an}});var r,o,i,a,s,p,c,l,u,x,d,f,g,m,h,w,b,A=t(433),Z=t(439),v=t(791),j=t(168),k=t(562),y=k.ZP.div(r||(r=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n"]))),S=k.ZP.select(o||(o=(0,j.Z)(["\n  width: 110px;\n  border: 2px solid #5cd3a8;\n  border-radius: 8px;\n\n  &:hover {\n    background-color: #5cd3a8;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  @media (min-width: 1200px) {\n    padding: 4px 8px;\n  }\n"]))),P=t(184),I=function(){return(0,P.jsxs)(y,{children:[(0,P.jsx)("label",{children:"Select a filter"}),(0,P.jsxs)(S,{name:"filter",id:"filter",children:[(0,P.jsx)("option",{value:"all",children:"all"}),(0,P.jsx)("option",{value:"follow",children:"follow"}),(0,P.jsx)("option",{value:"followings",children:"followings"})]})]})},z=t(783),C=t(861),Q=t(757),E=t.n(Q),D=t(243),O=function(){var n=(0,C.Z)(E().mark((function n(e){var t,r;return E().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(t=new URL("https://6442731176540ce2258c6d17.mockapi.io/users")).searchParams.append("page",e),t.searchParams.append("limit",4),n.next=5,D.Z.get(t);case 5:return r=n.sent,n.abrupt("return",r.data);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),H=function(){var n=(0,C.Z)(E().mark((function n(e,t){var r,o;return E().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new URL("https://6442731176540ce2258c6d17.mockapi.io/users/".concat(e)),n.next=3,D.Z.put(r,{followers:t+1,following:!0});case 3:return o=n.sent,n.abrupt("return",o.data);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),J=function(){var n=(0,C.Z)(E().mark((function n(e,t){var r,o;return E().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new URL("https://6442731176540ce2258c6d17.mockapi.io/users/".concat(e)),n.next=3,D.Z.put(r,{followers:t-1,following:!1});case 3:return o=n.sent,n.abrupt("return",o.data);case 5:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),L=t(93),N=t(311),U=k.ZP.div(i||(i=(0,j.Z)(["\n  position: relative;\n  width: 290px;\n  height: 460px;\n  margin-left: auto;\n  margin-right: auto;\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n\n  @media (min-width: 1200px) {\n    width: 380px;\n  }\n"]))),B=k.ZP.div(a||(a=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n"]))),G=k.ZP.img(s||(s=(0,j.Z)(["\n  margin-top: 15px;\n  margin-left: 15px;\n  width: 70px;\n  height: 20px;\n\n  @media (min-width: 1200px) {\n    margin-top: 20px;\n    margin-left: 20px;\n    width: 76px;\n    height: 22px;\n  }\n"]))),R=k.ZP.img(p||(p=(0,j.Z)(["\n  width: 250px;\n  margin-left: 25px;\n\n  @media (min-width: 1200px) {\n    width: 280px;\n    margin-left: 36px;\n  }\n"]))),Y=k.ZP.hr(c||(c=(0,j.Z)(["\n  margin-top: 18px;\n  height: 8px;\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n"]))),V=k.ZP.img(l||(l=(0,j.Z)(["\n  position: absolute;\n  top: 158px;\n  left: 105px;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  border: 8px solid #ebd8ff;\n\n  @media (min-width: 1200px) {\n    top: 178px;\n    left: 150px;\n  }\n"]))),X=k.ZP.p(u||(u=(0,j.Z)(["\n  margin-top: 60px;\n  margin-bottom: 0;\n  text-align: center;\n  font-weight: 500;\n  font-size: 18px;\n  text-transform: uppercase;\n  color: #ebd8ff;\n"]))),M=k.ZP.p(x||(x=(0,j.Z)(["\n  margin-top: 25px;\n  margin-bottom: 16px;\n  text-align: center;\n  font-weight: 500;\n  font-size: 16px;\n  text-transform: uppercase;\n  color: #ebd8ff;\n\n  @media (min-width: 1200px) {\n    margin-top: 12px;\n    margin-bottom: 12px;\n  }\n"]))),q=k.ZP.p(d||(d=(0,j.Z)(["\n  margin: 0;\n  text-align: center;\n  font-weight: 500;\n  font-size: 16px;\n  text-transform: uppercase;\n  color: #ebd8ff;\n"]))),K=k.ZP.button(f||(f=(0,j.Z)(["\n  display: block;\n  margin-top: 26px;\n  width: 180px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 12px 40px;\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 18px;\n  text-transform: uppercase;\n  color: #373737;\n  border: none;\n  cursor: pointer;\n\n  &:hover {\n    transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n    transform: scale(1.05);\n  }\n\n  @media (min-width: 1200px) {\n    margin-top: 20px;\n  }\n"]))),W=k.ZP.button(g||(g=(0,j.Z)(["\n  display: block;\n  margin-top: 26px;\n  width: 180px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 12px 40px;\n  background: #5cd3a8;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 18px;\n  text-transform: uppercase;\n  color: #373737;\n  border: none;\n  cursor: pointer;\n\n  &:hover {\n    transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n    transform: scale(1.05);\n  }\n\n  @media (min-width: 1200px) {\n    margin-top: 20px;\n  }\n"]))),T=function(n){var e,t=n.oneUser,r=t.id,o=t.user,i=t.tweets,a=t.followers,s=t.avatar,p=t.following,c=(0,v.useState)(a),l=(0,Z.Z)(c,2),u=l[0],x=l[1],d=(0,v.useState)(p),f=(0,Z.Z)(d,2),g=f[0],m=f[1];return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(U,{children:[(0,P.jsxs)(B,{children:[(0,P.jsx)(G,{src:L,alt:"logo"}),(0,P.jsx)(R,{src:N,alt:"tweet"})]}),(0,P.jsx)(Y,{}),(0,P.jsx)(V,{src:s,alt:"avatar"}),(0,P.jsx)(X,{children:o}),(0,P.jsxs)(M,{children:[i," tweets"]}),(0,P.jsxs)(q,{children:[(e=u,e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))," followers"]}),g?(0,P.jsx)(W,{type:"button",onClick:function(){return n=r,console.log("minus"),void J(n,a).then((function(n){x((function(n){return n-1})),m(!1),console.log(n);var e=JSON.parse(localStorage.getItem("users"));console.log(e);var t=e.findIndex((function(e){return e.id===n.id}));console.log(t);var r=e.find((function(e){return e.id===n.id}));r.followers=r.followers-1,r.following=!1,console.log(r),e.splice(t,1,r),localStorage.setItem("users",JSON.stringify(e))}));var n},children:"following"}):(0,P.jsx)(K,{type:"button",onClick:function(){return n=r,console.log("plus"),void H(n,a).then((function(n){x((function(n){return n+1})),m(!0),console.log(n);var e=JSON.parse(localStorage.getItem("users"));console.log(e);var t=e.findIndex((function(e){return e.id===n.id}));console.log(t);var r=e.find((function(e){return e.id===n.id}));r.followers=r.followers+1,r.following=!0,console.log(r),e.splice(t,1,r),localStorage.setItem("users",JSON.stringify(e))}));var n},children:"follow"})]})})},F=k.ZP.ul(m||(m=(0,j.Z)(["\n  list-style: none;\n  padding: 0;\n  margin-top: 40px;\n  display: flex;\n  margin-left: auto;\n  margin-right: auto;\n  flex-direction: column;\n  justify-content: center;\n  gap: 30px;\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n\n  @media (min-width: 1200px) {\n    gap: 80px;\n  }\n"]))),_=function(n){var e=n.users;return(0,P.jsx)(F,{children:e.map((function(n){return(0,P.jsx)("li",{children:(0,P.jsx)(T,{oneUser:n})},n.id)}))})},$=t(87),nn=k.ZP.div(h||(h=(0,j.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),en=(0,k.ZP)($.rU)(w||(w=(0,j.Z)(["\n  text-align: center;\n  width: 100px;\n  font-size: 12px;\n  padding: 7px 17px;\n  border-radius: 2px;\n  border: 1px solid #373737;\n  text-decoration: none;\n  text-transform: uppercase;\n  color: #373737;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  font-weight: 500;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  @media (min-width: 768px) {\n    padding: 8px 16px;\n    font-size: 18px;\n  }\n  &:hover {\n    border-color: #5cd3a8;\n  }\n"]))),tn=k.ZP.button(b||(b=(0,j.Z)(["\n  display: block;\n  margin-top: 30px;\n  width: 160px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 12px 10px;\n  background: #5cd3a8;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 18px;\n  text-transform: uppercase;\n  color: #373737;\n  border: none;\n  cursor: pointer;\n\n  &:hover {\n    transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n    transform: scale(1.05);\n  }\n\n  @media (min-width: 1200px) {\n    margin-top: 50px;\n  }\n"]))),rn=function(){var n=localStorage.getItem("users");return null!==n?JSON.parse(n):[]},on=function(){var n=(0,v.useState)(rn),e=(0,Z.Z)(n,2),t=e[0],r=e[1],o=(0,v.useState)(!1),i=(0,Z.Z)(o,2),a=i[0],s=i[1],p=(0,v.useState)(null),c=(0,Z.Z)(p,2),l=c[0],u=c[1],x=(0,v.useState)(1),d=(0,Z.Z)(x,2),f=d[0],g=d[1];(0,v.useEffect)((function(){localStorage.setItem("users",JSON.stringify(t))}),[t]),(0,v.useEffect)((function(){s(!0),O(f).then((function(n){return r(1===f?n:function(e){return[].concat((0,A.Z)(e),(0,A.Z)(n))})})).catch((function(n){u(n.message)})).finally((function(){return s(!1)}))}),[f]);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(nn,{children:[(0,P.jsx)(en,{to:"/",children:"back"}),(0,P.jsx)(I,{})]}),a&&(0,P.jsx)(z.a,{}),l&&(0,P.jsx)("p",{children:l}),!l&&!a&&(0,P.jsx)(_,{users:t}),f<3&&(0,P.jsx)(tn,{type:"button",onClick:function(){g((function(n){return n+1})),r(JSON.parse(localStorage.getItem("users")))},children:"Load More"})]})},an=function(){return(0,P.jsx)(on,{})}},93:function(n){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKDSURBVHgB1VgxTxtRDPZVzZBIZYBKzdAMdGBIh2bokqVDu/Yvw8DCwhAGGDLAEAaQyMKQDDkp+LvzQ87TO54TIDGfZOXdxWfe+87+7FAsl8v/tHvM2E6LoiibHHifA/74TjvGJ/KBDtuAPgC8EAZ0OYuOyDk8EQYcMWnfyDG8EQYMmLQ2OYVHwlpsQybtMzmEdVPoXtdsU7Y5GzIAQo2udZDwf2S7Ff+F+PfI3uVCEzinzXDHdiXrQzHgjOr9NwH7HL7wvYkw/IEzbvkzdQ9rkDERodZiPWbfcRSj8mffsWzIUnJVE0jEsqAM++UYC3V/Hp1jBexLOeRKcoUslAnbXqQxe2p9qw8o/p1wLXHwlkuyAU2gR28H7P1A7DlZwj1e7ucC5DJsqsgCSX+o1hhco0Rx8K7y12T94I++rCuiOFb1huVZ6wjRZ/8Hehv8VusTtlJe6NAaIJdhE7WGpoAskDKiWqdmsgZxjxG5ffVsPJhOyY6qCZBdb98VuU1ogQxliKxbObDomNaKTiJWuyGuBQVJZu8auQxLHbKNNE60fa1lyL5Yp1LkW4A4ue62NeQI0yPDBdWbRmn9Zfsa+bZEOCHuyLZL9d1cng9Y50f05UudbdvIleQhkzAJYs3XxyKSCyElBkoT2QDSMHJgHmrpA4u+dckGjCgTcoRchoWp+7mEcHhNluhX0Cy051+hXOGXIGtINj2633AGe1dYOg/I+IdMo3qCLuU5lB9mpPjwuAfibqjWMsr4p4ASHtHm2Jf/nwFfGnwwrpS0ZjNZp1X3xCwAyT9pM1Qi31DyVnQo3ak1rLKwAo8/vkeeRD6GN8Ig8nfkGJ4IcynyMbwQ9lqR3xqeAP79BzwxZzuPAAAAAElFTkSuQmCC"},311:function(n,e,t){n.exports=t.p+"static/media/picture.38ea3189a2c780f4bbbf.png"}}]);
//# sourceMappingURL=60.23f2aacf.chunk.js.map