(this["webpackJsonpreact-auth0"]=this["webpackJsonpreact-auth0"]||[]).push([[0],{28:function(t,e,n){},41:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n(0),r=n(10),o=n.n(r),a=n(15),u=n(11),s=n(2),l=n(14),d=(n(28),function(){var t=Object(s.b)(),e=t.loginWithRedirect;return!t.isAuthenticated&&Object(c.jsx)("button",{onClick:function(){return e()},children:"Log In"})}),j=function(){var t=Object(s.b)(),e=t.logout;return t.isAuthenticated&&Object(c.jsx)("button",{onClick:function(){return e({returnTo:"".concat(window.location.origin,"/auth0")})},children:"Log Out"})},b=n(12),h=n.n(b),O=n.p+"static/media/def_avatar.22c31152.png",f=function(){var t=Object(s.b)(),e=t.user,n=t.isAuthenticated,i=(null===e||void 0===e?void 0:e.picture)?e.picture:O;return n&&Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:i,alt:null===e||void 0===e?void 0:e.name,width:250}),Object(c.jsx)("h2",{children:null===e||void 0===e?void 0:e.name}),Object(c.jsx)("p",{children:null===e||void 0===e?void 0:e.email}),Object(c.jsx)(h.a,{data:e})]})},g=n(13),v=n.n(g);function x(){var t=Object(u.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]);return x=function(){return t},t}var m=Object(l.a)(x());var p=function(){var t=Object(i.useState)((function(){return localStorage.getItem("userToken")?localStorage.getItem("userToken"):""})),e=Object(a.a)(t,2)[1],n=Object(s.b)(),r=n.isLoading,o=n.isAuthenticated,u=n.getAccessTokenSilently;return Object(i.useEffect)((function(){o&&u().then((function(t){e(t),localStorage.setItem("userToken",t),console.log(t)}))}),[o,u]),r?Object(c.jsx)(v.a,{color:"#ffffff",loading:r,css:m,size:150}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"This is App#1"}),Object(c.jsxs)("div",{className:"box",children:[Object(c.jsx)("a",{href:"https://created-with-love.github.io/auth0-2",target:"_blank",rel:"noreferrer",className:"link",children:"Go to the App #2"}),Object(c.jsx)(d,{}),Object(c.jsx)(j,{})]}),Object(c.jsx)(f,{})]})};o.a.render(Object(c.jsx)(s.a,{domain:"dev-163uvcf0.eu.auth0.com",clientId:"egqN71x3jTdgebBnOPlRbdOKXIVhg8Vw",redirectUri:"".concat(window.location.origin,"/auth0"),children:Object(c.jsx)(p,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.f22b13d9.chunk.js.map