(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),r=n(14),s=n.n(r),a=n(4),i=n(3),u=n.n(i),j="/api/persons";var l={deleteContact:function(e){u.a.delete("".concat(j,"/").concat(e))},updateContact:function(e){u.a.put("".concat(j,"/").concat(e.id),e).then((function(e){return e})).catch((function(e){e.response?console.log(e.request):console.log("Error",e.message)}))}},d=n(0),b=function(e){var t=e.persons,n=e.setPersons;return Object(d.jsx)("div",{children:t.map((function(e){return Object(d.jsxs)("p",{children:[e.name,"- ",e.number,Object(d.jsx)("button",{onClick:function(){return c=e.id,o=e.name,void(window.confirm("Are you sure you want to delete ".concat(o))&&(l.deleteContact(c),n(t.filter((function(e){return e.id!==c})))));var c,o},children:"delete"})]},e.id)}))})},f=function(e){var t=e.message,n=e.errorMessageType;return null===t?null:Object(d.jsx)(d.Fragment,{children:n?Object(d.jsx)("div",{className:"error",children:t}):Object(d.jsx)("div",{className:"success",children:t})})},h=(n(38),"/api/persons"),O=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(""),s=Object(a.a)(r,2),i=s[0],j=s[1],O=Object(c.useState)(""),p=Object(a.a)(O,2),m=p[0],v=p[1],x=Object(c.useState)(null),g=Object(a.a)(x,2),w=g[0],C=g[1],y=Object(c.useState)(null),S=Object(a.a)(y,2),k=S[0],E=S[1];Object(c.useEffect)((function(){u.a.get(h).then((function(e){o(e.data)}))}),[]);return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Phonebook"}),Object(d.jsx)(f,{message:w,errorMessageType:k}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=n.find((function(e){return e.name.toString().toLowerCase()===i.toLowerCase()}));if(t){if(window.confirm("".concat(i," is already on the contacts list.Do you want to overwrite?"))){t.number=m;l.updateContact(t);var c=n.filter((function(e){return e.id!=t.id}));c.push(t),o(c)}}else{var r={name:i,number:m};o(n.concat({name:i,number:m})),u.a.post("".concat(h),r).catch((function(e){C("Error"),console.log(e.response.data),E(!0),setTimeout((function(){C(null)}),5e3)}))}},children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{children:["Name: ",Object(d.jsx)("input",{value:i,onChange:function(e){j(e.target.value)}})]}),"Phone: ",Object(d.jsx)("input",{value:m,onChange:function(e){v(e.target.value)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{type:"submit",children:"add"})," "]})]}),Object(d.jsx)("div",{children:Object(d.jsx)(b,{persons:n,setPersons:o})})]})};s.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.df37da6e.chunk.js.map