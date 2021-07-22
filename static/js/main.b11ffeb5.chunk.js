(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),n=c(6),i=c.n(n),s=(c(11),c(2)),j=(c(12),c(0));var l=function(e){var t=e.categories,c=void 0===t?[]:t,r=e.setCurrentCategory,n=e.currentCategory;return Object(a.useEffect)((function(){document.title=n.name})),Object(j.jsxs)("header",{className:"flex-row px-1",children:[Object(j.jsx)("h2",{children:"Jagraj Singh"}),Object(j.jsx)("nav",{className:"nav-style",children:Object(j.jsx)("ul",{className:"flex-row",children:c.map((function(e){return Object(j.jsx)("li",{className:"mx-1 ".concat(n.name===e.name&&"navActive"),children:Object(j.jsxs)("span",{onClick:function(){r(e)},children:[" ",e.name]})},e.name)}))})})]})};var o=function(){return Object(j.jsxs)("section",{children:[Object(j.jsx)("div",{children:Object(j.jsx)("h2",{className:"h2-title",children:"About Me"})}),Object(j.jsx)("p",{className:"about-me",children:"My name is Jagraj and I am a full stack developer. Currently living in canada and I am open to work with projects."})]})};var b=function(e){var t=e.projects,c=void 0===t?[]:t;return Object(j.jsxs)("header",{children:[Object(j.jsx)("h2",{className:"h2-title",children:"Portfolio"}),Object(j.jsx)("div",{className:"grid-container",children:Object(j.jsx)("div",{className:"grid-layout",children:c.map((function(e){return Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"".concat(e.name),children:[Object(j.jsx)("h2",{children:Object(j.jsx)("b",{children:e.name})}),Object(j.jsx)("p",{children:e.tools}),Object(j.jsx)("a",{href:e.github,children:":link:"}),Object(j.jsx)("a",{href:e.website,children:":computer:"})]})},e.name)}))})})]})};var h=function(){return Object(j.jsxs)("section",{children:[Object(j.jsx)("h2",{className:"h2-title",children:"Resume"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Front-End"}),Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:"HTML"}),Object(j.jsx)("li",{children:"CSS"}),Object(j.jsx)("li",{children:"JavaScript"}),Object(j.jsx)("li",{children:"JQuery"}),Object(j.jsx)("li",{children:"React"}),Object(j.jsx)("li",{children:"Bootstrap"})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Back-End"}),Object(j.jsxs)("ol",{children:[Object(j.jsx)("li",{children:"APIs"}),Object(j.jsx)("li",{children:"Node"}),Object(j.jsx)("li",{children:"Express"}),Object(j.jsx)("li",{children:"MySQL, Sequelize"}),Object(j.jsx)("li",{children:"REST"}),Object(j.jsx)("li",{children:"GraphQL"})]})]})]})},d=c(3),u=c(5);var m=function(){var e=Object(a.useState)({name:"",email:"",message:""}),t=Object(s.a)(e,2),c=t[0],r=t[1],n=c.name,i=c.email,l=c.message,o=Object(a.useState)(""),b=Object(s.a)(o,2),h=b[0],m=b[1];function O(e){"email"!==e.target.name?(e.target.name,e.target.value.length?m(""):m("".concat(e.target.name," is required")),h||r(Object(u.a)(Object(u.a)({},c),{},Object(d.a)({},e.target.name,e.target.value)))):function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value)||m("Your email is invalid")}return Object(j.jsxs)("section",{children:[Object(j.jsx)("h2",{className:"h2-title",children:"Contact"}),Object(j.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault()},children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"name",children:"Name: "}),Object(j.jsx)("input",{type:"text",defaultValue:n,name:"name",onBlur:O})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"email",children:"Email: "}),Object(j.jsx)("input",{type:"email",defaultValue:i,name:"email",onBlur:O})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"message",children:"Message: "}),Object(j.jsx)("textarea",{name:"message",defaultValue:l,onBlur:O})]}),h&&Object(j.jsx)("div",{children:Object(j.jsx)("p",{className:"error-text",children:h})}),Object(j.jsx)("button",{type:"submit",children:"Submit"})]})]})};var O=function(e){var t=e.currentCategory,c=Object(a.useState)([{name:"Run Buddy",github:"https://github.com/ITJagraj/ITJagraj.github.io",tools:"HTML, CSS",website:"https://itjagraj.github.io/"},{name:"Code-refactor",github:"https://github.com/ITJagraj/Code-refactor",tools:"HTML, CSS"},{name:"Note-taker",github:"https://github.com/ITJagraj/Note-taker",tools:"HTML, CSS, JavaScript, heroku"},{name:"Weather app",github:"https://github.com/ITJagraj/weather-dashboard",tools:"HTML, CSS, JavaScript",website:"https://itjagraj.github.io/weather-dashboard/"},{name:"Robot Gladiators",github:"https://github.com/ITJagraj/code-quiz",tools:"HTML, CSS, JavaScript",website:"https://itjagraj.github.io/code-quiz/"}]),r=Object(s.a)(c,1)[0],n=Object(a.useState)(r[0]),i=Object(s.a)(n,2),l=i[0],d=i[1];switch(t.name){case"About me":return Object(j.jsx)(o,{});case"Portfolio":return Object(j.jsx)(b,{projects:r,currentProject:l,setCurrentProject:d});case"Contact":return Object(j.jsx)(m,{});default:return Object(j.jsx)(h,{})}};var x=function(){return Object(j.jsxs)("section",{className:"footer",children:[Object(j.jsx)("div",{className:"",children:Object(j.jsx)("a",{href:"https://github.com/ITJagraj",children:"Github"})}),Object(j.jsx)("div",{children:Object(j.jsx)("a",{href:"https://www.linkedin.com/in/jagraj-singh-877b2673/",children:"Linkedin"})})]})};var g=function(){var e=Object(a.useState)([{name:"About me",description:"about me"},{name:"Portfolio",description:"my portfolio"},{name:"Contact",description:"contact me"},{name:"Resume",description:"my resume"}]),t=Object(s.a)(e,1)[0],c=Object(a.useState)(t[0]),r=Object(s.a)(c,2),n=r[0],i=r[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(l,{categories:t,currentCategory:n,setCurrentCategory:i}),Object(j.jsx)("main",{children:Object(j.jsx)(O,{currentCategory:n,children:" "})}),Object(j.jsx)("footer",{children:Object(j.jsx)(x,{})})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),r(e),n(e),i(e)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),p()}},[[14,1,2]]]);
//# sourceMappingURL=main.b11ffeb5.chunk.js.map