(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),r=n(14),a=n.n(r),i=n(4),s=n(3),u=n.n(s),d="/api/persons";var j={deleteContact:function(e){u.a.delete("".concat(d,"/").concat(e))},updateContact:function(e){u.a.put("".concat(d,"/").concat(e.id),e).then((function(e){return e})).catch((function(e){e.response?console.log(e.request):console.log("Error",e.message)}))}},b=n(0),l=function(e){var t=e.persons,n=e.setPersons;return Object(b.jsx)("div",{children:t.map((function(e){return Object(b.jsxs)("p",{children:[e.name,"- ",e.number,Object(b.jsx)("button",{onClick:function(){return c=e.id,o=e.name,void(window.confirm("Are you sure you want to delete ".concat(o))&&(j.deleteContact(c),n(t.filter((function(e){return e.id!==c})))));var c,o},children:"delete"})]},e.id)}))})},f="/api/persons",h=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(""),a=Object(i.a)(r,2),s=a[0],d=a[1],h=Object(c.useState)(""),p=Object(i.a)(h,2),O=p[0],v=p[1];Object(c.useEffect)((function(){u.a.get(f).then((function(e){o(e.data)}))}),[]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Phonebook"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=n.find((function(e){return e.name.toString().toLowerCase()===s.toLowerCase()}));if(t){if(window.confirm("".concat(s," is already on the contacts list.Do you want to overwrite?"))){t.number=O;j.updateContact(t);var c=n.filter((function(e){return e.id!=t.id}));c.push(t),o(c)}}else{var r={name:s,number:O};o(n.concat({name:s,number:O})),u.a.post("".concat(f),r)}},children:[Object(b.jsxs)("div",{children:[Object(b.jsxs)("p",{children:["Name: ",Object(b.jsx)("input",{value:s,onChange:function(e){d(e.target.value)}})]}),"Phone: ",Object(b.jsx)("input",{value:O,onChange:function(e){v(e.target.value)}})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{type:"submit",children:"add"})," "]})]}),Object(b.jsx)("div",{children:Object(b.jsx)(l,{persons:n,setPersons:o})})]})};a.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.50a97872.chunk.js.map