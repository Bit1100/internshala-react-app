(this.webpackJsonpreact_api_app=this.webpackJsonpreact_api_app||[]).push([[0],{57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var c=a(22),n=a.n(c),d=a(11),l=a(5),s=a(2),i=a(19),r=i.c,o=function(){return Object(i.b)()},x=a.p+"static/media/Bit.2097ccb2.jpg",j=a(1),m=function(){var e=r((function(e){return e.selectedCandidates.totalSelected}));return Object(j.jsxs)("div",{className:"p-2 bg-black text-white flex flex-center justify-between flex-wrap",children:[Object(j.jsx)(d.b,{to:"/",children:Object(j.jsx)("img",{className:"w-12 rounded-full",src:x,alt:"BiT Logo"})}),Object(j.jsxs)("ul",{className:"flex",children:[Object(j.jsx)("li",{className:"text-lg md:text-2xl md:mx-2 p-1 hover:bg-yellow-600 rounded-md",children:Object(j.jsx)(d.c,{to:"/",exact:!0,children:"Home"})}),Object(j.jsx)("li",{className:"text-lg md:text-2xl md:mx-2 p-1 hover:bg-yellow-600 rounded-md",children:Object(j.jsx)(d.c,{to:"/candidates",children:"Candidates"})}),Object(j.jsx)("li",{className:"text-lg md:text-2xl md:mx-2 p-1 hover:bg-yellow-600 rounded-md",children:Object(j.jsxs)(d.c,{to:"/selection",children:["Selected -",Object(j.jsx)("span",{className:"mx-2 bg-yellow-400 text-black rounded-full font-bold p-1",children:e})]})})]})]})},b=a.p+"static/media/surajl.095e382c.jpg",u=function(){return Object(j.jsxs)("div",{className:"w-full h-screen border-yellow border-10 container mx-auto grid grid-cols-1 p-5 md:grid-cols-2",children:[Object(j.jsxs)("div",{className:"p-5 flex flex-col justify-center",children:[Object(j.jsx)("h2",{className:"my-2 text-4xl md:text-5xl xl:text-7xl xl:my-8 text-black underline 600 font-bold",children:"Candidate Hiring Platform"}),Object(j.jsxs)("p",{className:"my-4 text-2xl xl:text-3xl xl:my-4 leading-relaxed tracking-wide",children:["Best Place to Get Hired. The easy bridge between the",Object(j.jsx)("strong",{children:" Companies"})," and the",Object(j.jsx)("strong",{children:" IT Job Seeking Candidates"})]}),Object(j.jsx)("button",{className:"px-8 py-3 my-4 w-max xl:my-8 bg-black text-white text-2xl  rounded-full border-3 text-yellow-200 font-bold border-green-700 hover:bg-yellow-500 hover:text-black",children:"Inquire Now"})]}),Object(j.jsx)("div",{className:"grid place-items-center",children:Object(j.jsx)("img",{className:"w-1/2 rounded-full",src:b,alt:"Beautiful Sun"})})]})},h=a(14),f=a(59),p={loading:!1,candidates:[],error:"",candidate:Object.create({})},g=Object(h.b)("candidates/fetchCandidateById",(function(e){return f.a.get("https://jsonplaceholder.typicode.com/users/".concat(e)).then((function(e){var t=e.data;return t.address=t.address.city,t.company=t.company.name,t}))})),O=Object(h.b)("candidates/fetchCandidates",(function(){return f.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){return e.data}))})),w=Object(h.c)({name:"candidates",initialState:p,reducers:{},extraReducers:function(e){e.addCase(O.pending,(function(e){e.loading=!0})),e.addCase(O.fulfilled,(function(e,t){e.loading=!1,e.candidates=t.payload,e.error=""})),e.addCase(O.rejected,(function(e,t){e.loading=!1,e.candidates=[],e.error=t.error.message||"Something Went Wrong"})),e.addCase(g.pending,(function(e){e.loading=!0})),e.addCase(g.fulfilled,(function(e,t){e.loading=!1,e.candidate=t.payload,e.error=""})),e.addCase(g.rejected,(function(e,t){e.loading=!1,e.candidate=Object.create({}),e.error=t.error.message||"Something Went Wrong"}))}}).reducer,v=Object(h.b)("candidates/fetchSelectedCandidatesById",(function(e){return f.a.get("https://jsonplaceholder.typicode.com/users/".concat(e)).then((function(e){var t=e.data;return t.address=t.address.city,t.company=t.company.name,t}))})),y=Object(h.c)({name:"selectedCandidates",initialState:{candidates:[],totalSelected:0,candidatesDetail:{candidates:[],loading:!1,error:""}},reducers:{savedCandidates:function(e,t){var a,c=0;null===(a=t.payload)||void 0===a||a.forEach((function(t){e.candidatesDetail.candidates.push(t),e.candidates.push({id:t.id}),c++})),e.totalSelected=c},selectCandidate:function(e,t){var a,c=t.payload,n={id:c};(null===(a=e.candidates)||void 0===a?void 0:a.some((function(e){return e.id===c})))||(e.candidates.push(n),e.totalSelected+=1)},deleteCandidate:function(e,t){var a,c,n=t.payload,d=e.candidates.findIndex((function(e){return e.id===n})),l=e.candidatesDetail.candidates.findIndex((function(e){return e.id===n}));null===(a=e.candidates)||void 0===a||a.splice(d,1),null===(c=e.candidatesDetail.candidates)||void 0===c||c.splice(l,1),e.totalSelected-=1,e.totalSelected<0&&(e.totalSelected=0)}},extraReducers:function(e){e.addCase(v.pending,(function(e){e.candidatesDetail.loading=!0})),e.addCase(v.fulfilled,(function(e,t){e.candidatesDetail.loading=!1,e.candidatesDetail.candidates.push(t.payload),e.candidatesDetail.error=""})),e.addCase(v.rejected,(function(e,t){e.candidatesDetail.loading=!1,e.candidatesDetail.error=t.error.message||"Something Went Wrong"}))}}),N=y.actions,C=N.savedCandidates,k=N.selectCandidate,S=N.deleteCandidate,D=y.reducer,B=Object(h.a)({reducer:{candidates:w,selectedCandidates:D}}),I=a(13),E=function(e){var t=e.candidate,a=e.image,c=Object(s.useState)(!1),n=Object(I.a)(c,2),d=n[0],l=n[1],i=t.id,r=t.name,x=t.email,m=t.website,b=o();return Object(j.jsxs)("div",{className:"w-96 h-96 md:w-80 xl:w-96 xl:h-96 flex flex-col justify-center border-4 my-2 bg-green-300 rounded-xl my-8",children:[Object(j.jsxs)("div",{className:"my-4 flex flex-col items-center",children:[Object(j.jsx)("img",{className:"w-36 h-36 m-4 rounded-full",src:a,alt:"Candidate"}),Object(j.jsx)("div",{className:"text-3xl m-1 ",children:r}),Object(j.jsx)("a",{href:"mailto:".concat(x),className:"text-xl m-1 hover:underline",children:x})]}),Object(j.jsxs)("div",{className:"px-4 mt-2 text-2xl flex items-center justify-between",children:[Object(j.jsx)("a",{href:"http://".concat(m),target:"_blank",rel:"noreferrer",className:"hover:underline text-2xl",children:m}),Object(j.jsxs)("button",{onClick:function(e){e.preventDefault(),d?(b(S(i)),l(!1)):(l(!0),b(k(i)),b(v(i)))},className:d?"bg-blue-600 text-white font-bold border-2 border-white px-1 rounded-md text-xl text-2xl":"bg-yellow-400 border-2 border-black px-1 rounded-md text-xl",children:["Select",d?"ed":""]})]})]},i)},W=[a.p+"static/media/s1.a1364427.jpg",a.p+"static/media/s2.91e5d4d3.jpg",a.p+"static/media/s3.523973c0.jpg",a.p+"static/media/s4.b0c18f12.jpg",a.p+"static/media/s5.4403e508.jpg",a.p+"static/media/s6.095e382c.jpg",a.p+"static/media/s7.d7c23fc0.jpg",a.p+"static/media/s8.1542c9e7.jpg",a.p+"static/media/s9.7e11567b.jpg",a.p+"static/media/s10.151360c6.jpg"],_=function(){var e=r((function(e){return e.candidates.candidates})),t=o();return Object(s.useEffect)((function(){t(O())}),[t]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{className:"border-4 border-brown w-max mx-auto p-2 rounded-xl px-4 text-center bg-black my-20 text-yellow-300 font-bold text-6xl drop-shadow-lg",children:"Candidates"}),Object(j.jsx)("div",{className:"container mx-auto my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center",children:e.map((function(e,t){return Object(j.jsx)(d.b,{to:"/candidates/".concat(e.id),children:Object(j.jsx)(E,{candidate:e,image:W[t]},e.id)})}))})]})},F=function(){return Object(j.jsx)("footer",{className:"bg-black text-yellow-200 font-bold text-center text-xl lg:text-2xl p-3",children:"CopyRight \xa9 2022/23. All Rights Reserved."})},J=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{}),Object(j.jsx)(_,{}),Object(j.jsx)(F,{})]})},R=function(){var e=o(),t=r((function(e){return e.selectedCandidates.candidatesDetail.candidates}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("section",{className:"pt-8 min-w-screen min-h-screen w-full h-full flex flex-col max-w-full max-h-full bg-green-500",children:[Object(j.jsx)("h1",{className:"border-4 border-brown w-max mx-auto p-2 rounded-xl px-4 text-center bg-yellow-600 text-yellow-300 font-bold text-3xl md:text-5xl lg:text-6xl drop-shadow-lg",children:"Selected Candidates"}),Object(j.jsx)("ul",{className:"container mx-auto w-full h-full py-16 grid place-items-center",children:null===t||void 0===t?void 0:t.map((function(t,a){var c=t.id,n=t.name,d=t.email,l=t.website;return Object(j.jsxs)("li",{className:"w-full lg:w-3/4 mx-auto bg-yellow-200 m-8 rounded-xl p-2 flex flex-wrap text-xl justify-center items-center md:justify-between md:items-center",children:[Object(j.jsx)("div",{className:"text-black rounded-xl p-1 m-2",children:c}),Object(j.jsx)("span",{className:"text-black rounded-xl p-1 m-2",children:n}),Object(j.jsx)("a",{href:"mailto:".concat(d),className:"hover:underline text-black rounded-xl p-1 m-2",children:d}),Object(j.jsx)("a",{href:"http://".concat(l),target:"_blank",rel:"noreferrer",className:"hover:underline text-black rounded-xl p-1 m-2",children:l}),Object(j.jsx)("button",{className:"text-black rounded-xl p-1 m-2 text-xl px-4 bg-red-400 text-white",onClick:function(t){t.preventDefault(),e(S(c))},children:"Delete"})]},c)}))})]}),Object(j.jsx)(F,{})]})},P=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"container mx-auto min-h-screen h-full",children:Object(j.jsx)(_,{})}),Object(j.jsx)(F,{})]})},H=function(){var e=r((function(e){return e.candidates.candidate})),t=o(),a=e.name,c=e.phone,n=e.email,d=e.website,i=e.address,x=e.company,m=Object(l.h)().id,b=Number(m),u=Object(l.g)();Object(s.useEffect)((function(){t(g(b))}),[b,t]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"min-h-screen",children:[Object(j.jsx)("button",{onClick:function(){return u.goBack()},className:"m-16 mb-0 p-2 px-6 bg-black text-4xl text-white rounded-xl",children:"<- Back"}),Object(j.jsxs)("div",{className:"border-8 border-black w-11/12 lg:w-3/4 xl:w-max p-8 mt-16 bg-green-300 rounded-xl flex flex-wrap lg:flex-nowrap items-center justify-center container mx-auto ",children:[Object(j.jsx)("img",{src:W[b-1],className:"w-64 h-64 xl:w-96 xl:h-96 rounded-full mb-12",alt:"Suraj Keshari"}),Object(j.jsxs)("div",{className:"ml-8 lg:ml-16 text-2xl ",children:[Object(j.jsxs)("div",{className:"font-bold",children:["Name - ",a]}),Object(j.jsxs)("div",{className:"hover:underline",children:["E-mail - ",n]}),Object(j.jsxs)("div",{children:["Phone - ",c]}),Object(j.jsxs)("div",{children:["Address - ",i," City"]}),Object(j.jsxs)("div",{children:["Company - ",x," Pvt. Limited"]}),Object(j.jsxs)("div",{className:"hover:underline",children:["Website - ",d]})]})]})]})})},T=(a(57),function(){var e=o(),t=r((function(e){return e.selectedCandidates.candidatesDetail.candidates}));return Object(s.useEffect)((function(){e(C(function(){var e=window.localStorage.getItem("selected")||"";return JSON.parse(e)}()))}),[e]),Object(s.useEffect)((function(){var e;e=t,window.localStorage.setItem("selected",JSON.stringify(e))}),[t]),Object(j.jsxs)(d.a,{basename:"/internshala-react-app",children:[Object(j.jsx)(m,{}),Object(j.jsxs)(l.d,{children:[Object(j.jsx)(l.b,{path:"/",component:J,exact:!0}),Object(j.jsx)(l.b,{path:"/candidates",exact:!0,component:P}),Object(j.jsx)(l.b,{path:"/candidates/:id",component:H}),Object(j.jsx)(l.b,{path:"/selection",component:R}),Object(j.jsx)(l.a,{to:"/"})]})]})});n.a.render(Object(j.jsx)(i.a,{store:B,children:Object(j.jsx)(T,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.dc017aa5.chunk.js.map