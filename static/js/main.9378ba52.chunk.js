(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{79:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(6),c=a.n(s),r=a(17),o=a(8),l=a(126),d=a(37),h=a(56),j=a.n(h),b=a(51),m=a.n(b),u=a(1),f=[{id:1,heading:"Home",description:" ",icon:Object(u.jsx)(m.a,{className:"tabIcon"}),route:"/"},{id:2,heading:"Why Recruit Us",description:"Vote too already existing poll.",icon:Object(u.jsx)(m.a,{className:"tabIcon"}),route:"/"},{id:3,heading:"Brochure",description:"View Responses to the polls created by you.",icon:Object(u.jsx)(j.a,{className:"tabIcon"}),route:"/"},{id:4,heading:"Contact Us",description:"Login to create new polls or to submit a response.",route:"https://iiitr.ac.in/contact"}],g=a.p+"static/media/logo.974414c7.svg",x=a(121),v=a(118),O=a(123),p=a(125),N=a(59),I=a.n(N),w=a(124),y=a(58),T=a.n(y),k=a(127),L=a(120),C=a(122),R=a(57),S=a.n(R),H=a(119),B=a.p+"static/media/contactUsDemoImage.90dc751e.jpg";a(79);var E=function(e){return Object(u.jsxs)("div",{className:"contactUsCard",children:[Object(u.jsx)("img",{className:"contactUsImage",src:B,alt:"profile"}),Object(u.jsxs)("div",{className:"contactUsInfo",children:[Object(u.jsx)("div",{children:e.name}),Object(u.jsxs)("a",{className:"phoneNum",href:"mailto:".concat(e.email),children:[Object(u.jsx)("i",{class:"fas fa-envelope","aria-hidden":"true"})," : ",e.email]}),Object(u.jsxs)("a",{className:"phoneNum",href:"tel: ".concat(e.phoneNum),children:[Object(u.jsx)("i",{class:"fa fa-phone","aria-hidden":"true"})," : ",e.phoneNum]})]})]})},A=Object(v.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}})),P=i.a.forwardRef((function(e,t){return Object(u.jsx)(H.a,Object(d.a)({direction:"up",ref:t},e))}));function U(e){var t=A(),a=e.open,n=e.handleClose;return Object(u.jsx)("div",{children:Object(u.jsxs)(k.a,{fullScreen:!0,open:a,TransitionComponent:P,children:[Object(u.jsx)(L.a,{className:t.appBar,children:Object(u.jsx)(x.a,{children:Object(u.jsx)(C.a,{edge:"start",color:"inherit",onClick:n,"aria-label":"close",children:Object(u.jsx)(S.a,{})})})}),Object(u.jsx)("h3",{className:"contacUsCardsHeading",children:" Faculty Head "}),Object(u.jsx)("div",{className:"contactUsCardDialog",children:Object(u.jsx)(E,{name:"Jatin",email:"cs19b1013@iiitr.ac.in",phoneNum:"9068334677"})}),Object(u.jsx)("h3",{className:"contacUsCardsHeading",children:" Web Team "}),Object(u.jsxs)("div",{className:"contactUsCardDialog",children:[Object(u.jsx)(E,{name:"Jatin",email:"cs19b1013@iiitr.ac.in",phoneNum:"9068334677"}),Object(u.jsx)(E,{name:"Jatin",email:"cs19b1013@iiitr.ac.in",phoneNum:"9068334677"}),Object(u.jsx)(E,{name:"Jatin",email:"cs19b1013@iiitr.ac.in",phoneNum:"9068334677"})]}),Object(u.jsx)("h3",{className:"contacUsCardsHeading",children:" Placement Team Coordinators "}),Object(u.jsxs)("div",{className:"contactUsCardDialog",children:[Object(u.jsx)(E,{name:"Jatin",email:"cs19b1013@iiitr.ac.in",phoneNum:"9068334677"}),Object(u.jsx)(E,{name:"Jatin",email:"cs19b1013@iiitr.ac.in",phoneNum:"9068334677"})]})]})})}var W=a.p+"static/media/Brochure.c65645de.pdf",F=Object(v.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}));function D(e){var t=e.children,a=e.window,n=F(),i=Object(O.a)({target:a?a():void 0,disableHysteresis:!0,threshold:100});return Object(u.jsx)(w.a,{in:i,children:Object(u.jsx)("div",{onClick:function(){document.getElementById("back-to-top").scrollIntoView({behavior:"smooth"})},role:"presentation",className:n.root,children:t})})}var J=i.a.forwardRef((function(e,t){var a=Object(o.f)(),s=Object(n.useState)(" "),c=Object(r.a)(s,2),l=c[0],h=c[1],j=Object(n.useState)(" "),b=Object(r.a)(j,2),m=b[0],v=b[1],O=Object(n.useState)(!1),N=Object(r.a)(O,2),w=N[0],y=N[1],k=i.a.useState(!1),L=Object(r.a)(k,2),C=L[0],R=L[1];function S(e){1!==e.id?h("activeA"):h(" "),1===e.id?document.getElementById("home").scrollIntoView({behavior:"smooth"}):2===e.id?document.getElementById("recruit").scrollIntoView({behavior:"smooth"}):4===e.id&&R(!0),w&&y(!w)}function H(e){return Object(u.jsx)("button",{className:"hamburger hamburger--collapse ".concat(e," ham"),type:"button",children:Object(u.jsx)("span",{className:"hamburger-box",children:Object(u.jsx)("span",{className:"hamburger-inner"})})})}function B(e){for(var t=1;t<=f.length;t++)t!==parseInt(e)?document.getElementById(t).classList.remove("activeTab"):document.getElementById(e).classList.add("activeTab")}return i.a.useImperativeHandle(t,(function(){return{setNavState:function(e,t){v(e),B(t)}}})),window.addEventListener("scroll",(function(){window.scrollY>20?h("activeA"):h(" "),"/"===window.location.pathname&&(window.scrollY>=2100?B("2"):B("1"))})),Object(u.jsxs)("div",{className:"navBase",children:[Object(u.jsxs)(x.a,{className:"navBar ".concat(l," ").concat(m),children:[Object(u.jsx)("img",{src:g,alt:"Logo",className:"logo",onClick:function(){a.push("/")}}),Object(u.jsx)("div",{className:"menu",onClick:function(){y(!w)},children:H(w?"is-active":" ")}),Object(u.jsx)("ul",{className:w?"list active ":"list ",children:f.map((function(e){return Object(u.jsxs)("li",{className:"dropdown",onClick:function(){S(e)},children:[Object(u.jsxs)("div",{id:e.id,className:"naviTab",children:[3===e.id?Object(u.jsx)("a",{href:W,download:"IIITR Internship Brochure",className:"tabTitle",children:e.heading}):Object(u.jsx)("div",{className:"tabTitle",children:e.heading}),e.drop?Object(u.jsx)(T.a,{}):null]}),Object(u.jsx)("ul",{className:"dropdownMenu",children:e.drop?e.drop.map((function(e,t){return Object(u.jsx)("li",{className:"dropdownItem-".concat(t),onClick:function(){S(e)},children:e.heading},t)})):null})]},e.id)}))})]}),Object(u.jsx)(x.a,{id:"back-to-top-anchor"}),Object(u.jsx)(D,Object(d.a)(Object(d.a)({},e),{},{children:Object(u.jsx)(p.a,{color:"secondary",size:"small","aria-label":"scroll back to top",children:Object(u.jsx)(I.a,{})})})),Object(u.jsx)(U,{open:C,handleClose:function(){R(!1)}})]})})),M=(a(83),a(84),a.p+"static/media/logo.393f38ab.png"),V=a(47),Z=function(){return Object(u.jsx)(V.b,{googleMapsApiKey:"AIzaSyDSsAVdRoCh4OFPROmCU7MQ8frJBPP6h8k",children:Object(u.jsx)(V.a,{mapContainerStyle:{width:"22%",height:"28%",position:"absolute"},zoom:17,center:{lat:16.25049000723698,lng:77.36485465756208},children:[{name:"Gov",location:{lat:16.25049000723698,lng:77.36485465756208}}].map((function(e){return Object(u.jsx)(V.c,{position:e.location,onClick:function(){return window.open("https://www.google.com/maps/place/Government+Engineering+College+Raichur/@16.250181,77.3614858,16z/data=!4m9!1m2!2m1!1sGovernment+Engineering+College+Raichur,+camp,+Yermarus,+Karnataka+584135!3m5!1s0x3bc9d1428458ff9b:0xbed489e863c13fc2!8m2!3d16.2501192!4d77.3648332!15sCkhHb3Zlcm5tZW50IEVuZ2luZWVyaW5nIENvbGxlZ2UgUmFpY2h1ciwgY2FtcCwgWWVybWFydXMsIEthcm5hdGFrYSA1ODQxMzWSARJnb3Zlcm5tZW50X2NvbGxlZ2U","_blank")}},e.name)}))})})},G=[{id:1,name:"Sadhana Jha (Faculty Incharge)",email:"*Placement cell mail ID*",phoneNum:"+91 8768779475"},{id:2,name:"Aditya Agrawal (Student Coordinator)",email:"*Placement cell mail ID*",phoneNum:"+91 9785559273"},{id:3,name:"Reethu Sanagala (Student Coordinator)",email:"*Placement cell mail ID*",phoneNum:"+91 8919239558"},{id:4,name:"IIIT, Raichur",email:"info@iiitr.ac.in",phoneNum:"040 - 2301 6002"}];var q=function(e){return Object(u.jsx)("div",{className:"main",children:Object(u.jsxs)("footer",{children:[Object(u.jsxs)("div",{className:"footer",children:[Object(u.jsx)("div",{className:"logoSpace footerItems",children:Object(u.jsx)("img",{src:M,alt:"Logo",className:"logoF"})}),Object(u.jsxs)("div",{className:"address footerItems",children:[Object(u.jsx)("h3",{className:"footer-title",children:"Address"}),Object(u.jsxs)("div",{className:"contentCards",children:[Object(u.jsx)("div",{children:"Temporary Campus:"}),Object(u.jsx)("div",{children:"Government Engineering College, Raichur, located at Yeramarus."}),Object(u.jsx)("div",{className:"map",children:Object(u.jsx)(Z,{})})]})]}),Object(u.jsxs)("div",{className:"footerItems",children:[Object(u.jsx)("h3",{className:"footer-title",children:"Quick Links"}),Object(u.jsxs)("ul",{className:"quickLinks",children:[Object(u.jsxs)("li",{className:"list",children:[Object(u.jsx)("li",{class:"fas fa-chevron-right rightIcon"}),Object(u.jsx)("a",{href:"https://www.iiitr.ac.in/",children:"IIITR Website"})]}),Object(u.jsxs)("li",{className:"list",children:[Object(u.jsx)("li",{class:"fas fa-chevron-right rightIcon"}),Object(u.jsx)("a",{href:"https://www.iiitr.ac.in/faculty.html",children:"Faculty Profiles"})]})]})]}),Object(u.jsxs)("div",{className:"contact footerItems",children:[Object(u.jsx)("h3",{className:"footer-title",children:"Conatct Us"}),G.map((function(e){return Object(u.jsxs)("div",{className:"contentCards",children:[Object(u.jsx)("div",{children:e.name}),Object(u.jsxs)("a",{className:"phoneNum",href:"mailto:".concat(e.email),children:[Object(u.jsx)("i",{class:"fas fa-envelope","aria-hidden":"true"})," : ",e.email]}),Object(u.jsxs)("a",{className:"phoneNum",href:"tel: ".concat(e.phoneNum),children:[Object(u.jsx)("i",{class:"fa fa-phone","aria-hidden":"true"})," : ",e.phoneNum]})]})}))]})]}),Object(u.jsxs)("div",{className:"footer-bottom",children:[Object(u.jsx)("div",{className:"copyright ",children:Object(u.jsxs)("div",{children:["2020 \xa9 ",Object(u.jsx)("a",{href:"https://www.iiitr.ac.in/",children:" IIITR Raichur "})]})}),Object(u.jsx)("div",{className:"col-md-3",children:Object(u.jsxs)("div",{className:"footer-socials",children:[Object(u.jsxs)("div",{className:"socialIcon ",children:[Object(u.jsx)("svg",{height:"3vw",width:"3vw",children:Object(u.jsx)("circle",{cx:"1.5vw",cy:"1.5vw",r:"1.2vmax",stroke:"white",strokeWidth:"2",fill:"none"})}),Object(u.jsx)("i",{className:"fab fa-instagram fa-lg instagram"})]}),Object(u.jsxs)("div",{className:"socialIcon ",children:[Object(u.jsx)("svg",{height:"3vw",width:"3vw",children:Object(u.jsx)("circle",{cx:"1.5vw",cy:"1.5vw",r:"1.2vmax",stroke:"white",strokeWidth:"2",fill:"none"})}),Object(u.jsx)("i",{className:"fab fa-lg fa-facebook-f facebook"})]}),Object(u.jsxs)("div",{className:"socialIcon ",children:[Object(u.jsx)("svg",{height:"3vw",width:"3vw",children:Object(u.jsx)("circle",{cx:"1.5vw",cy:"1.5vw",r:"1.2vmax",stroke:"white",strokeWidth:"2",fill:"none"})}),Object(u.jsx)("i",{className:"fab fa-lg fa-twitter twitter"})]}),Object(u.jsxs)("div",{className:"socialIcon ",children:[Object(u.jsx)("svg",{height:"3vw",width:"3vw",children:Object(u.jsx)("circle",{cx:"1.5vw",cy:"1.5vw",r:"1.2vmax",stroke:"white",strokeWidth:"2",fill:"none"})}),Object(u.jsx)("i",{className:"fab fa-lg fa-youtube youtube"})]})]})})]})]})})},z=i.a.forwardRef((function(e,t){return Object(n.useEffect)((function(){t.current.setNavState("navColor","3")}),[t]),Object(u.jsx)("div",{className:"programs",children:Object(u.jsx)("h1",{children:"This is Programs at IIITR"})})})),Y=[{isLeftAlign:!0,heading:"CodeSoc - The Coding Club",content:"IITs are focused mainly on Information\n        Technology, and coding emerges as a must\n        need for the institute. To develop the best\n        coding practices in the institute, the club\n        assists individuals to advance in a wide\n        range of programming skills",haveLogo:!0,imgSrc:M,altText:"logo"},{isLeftAlign:!1,heading:"ElectroGeeks - The Electronics and Robotics Club",content:"Apart from programming, this club lets the\n        students explore different facets of Engineering in\n        Electronics and Robotics.",haveLogo:!0,imgSrc:M,altText:"logo"}];var Q,K,X=function(e){return e.isLeftAlign?Object(u.jsxs)("div",{className:"reusableMain","data-aos":"fade-up",children:[Object(u.jsxs)("div",{className:"head",children:[Object(u.jsxs)("h3",{className:"reusableHeading",children:[" ",e.heading,"  "]}),Object(u.jsx)("hr",{className:"lineBreak"})]}),Object(u.jsxs)("div",{className:"reusableBlock",children:[Object(u.jsx)("div",{className:"reusableHeadingBlock",children:e.haveLogo?Object(u.jsx)("img",{className:"reusableHeadingImage",src:e.imgSrc,alt:e.altText}):null}),Object(u.jsx)("div",{className:"reusableCard",children:Object(u.jsxs)("blockquote",{children:[Object(u.jsxs)("p",{className:"quotation",children:[" ",e.content]}),Object(u.jsxs)("footer",{children:[" ",e.writer]})]})})]})]}):Object(u.jsxs)("div",{className:"reusableMain","data-aos":"fade-up",children:[Object(u.jsxs)("div",{className:"head rightHead",children:[Object(u.jsxs)("h3",{className:"reusableHeading",children:[" ",e.heading,"  "]}),Object(u.jsx)("hr",{className:"lineBreak"})]}),Object(u.jsxs)("div",{className:"reusableBlock",children:[Object(u.jsx)("div",{className:"reusableCard",children:Object(u.jsxs)("blockquote",{className:"leftBlock",children:[Object(u.jsxs)("p",{className:"quotation",children:[" ",e.content]}),Object(u.jsxs)("footer",{children:[" ",e.writer]})]})}),Object(u.jsx)("div",{className:"reusableHeadingBlock",children:e.haveLogo?Object(u.jsx)("img",{className:"reusableHeadingImage",src:e.imgSrc,alt:e.altText}):null})]})]})},_=i.a.forwardRef((function(e,t){return Object(n.useEffect)((function(){t.current.setNavState("navColor","4")}),[t]),Object(u.jsx)("div",{className:"clubs",children:Y.map((function(e,t){return Object(u.jsx)(X,{isLeftAlign:e.isLeftAlign,heading:e.heading,content:e.content,haveLogo:e.haveLogo,imgSrc:e.imgSrc,altText:e.altText},t)}))})})),$=[{id:1,isLeftAlign:!0,haveLogo:!0,writer:"BS Murty",heading:"From Director's Desk",content:"Being mentored by IITH, IIITR has adopted the innovative\n    fractal academics system, which warrants continuous\n    evaluation. This ensures the students have a deeper\n    understanding of the core subjects. Moreover, the highly\n    flexible curriculum forged by the esteemed faculty of IITH and\n    IIITR exuberates innovation and inventiveness. With core\n    subjects being incorporated from the first semester itself, the\n    students are able to finish their courses quite early and focus\n    on developing projects & industry relevant skills.",imgSrc:"https://images-ext-1.discordapp.net/external/1CnMkqZMSH_K0lNVZPLhboBu-8x6JSb5Hixk0HRsnvw/https/ocs.iith.ac.in/static/media/directorsdesk.bb13dd37.jpg?width=501&height=450",altText:"Director"},{id:2,isLeftAlign:!1,haveLogo:!0,writer:"Sadhna Jha",heading:"Message From TPO",content:"Being mentored by IITH, IIITR has adopted the innovative\n    fractal academics system, which warrants continuous\n    evaluation. This ensures the students have a deeper\n    understanding of the core subjects. Moreover, the highly\n    flexible curriculum forged by the esteemed faculty of IITH and\n    IIITR exuberates innovation and inventiveness. With core\n    subjects being incorporated from the first semester itself, the\n    students are able to finish their courses quite early and focus\n    on developing projects & industry relevant skills.",imgSrc:"https://images-ext-1.discordapp.net/external/Eld7F0Wj94n5lzFm6tRzx6gd96ikkZX1a75dfitylIU/https/iiitr.ac.in/assets/images/faculty/cse/sadhana.webp",altText:"tpo"}];function ee(){return(ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function te(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}function ae(e,t){var a=e.title,i=e.titleId,s=te(e,["title","titleId"]);return n.createElement("svg",ee({viewBox:"0 0 1003 625",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},s),a?n.createElement("title",{id:i},a):null,Q||(Q=n.createElement("style",null,"\n        path { fill: #ffffff; }\n        @media (prefers-color-scheme: dark) {\n          path { fill: #ffffff; }\n        }\n      ")),K||(K=n.createElement("path",{d:"M341.04 398.844L0 260.116L156.069 419.075L303.468 465.318H219.653L320.809 537.572L390.173 514.451L404.624 526.012L367.052 560.694L459.538 621.387L583.815 514.451L491.329 500.807L488.439 487.633L667.63 488.439L771.676 346.821L546.243 398.844L861.272 277.457L1000 0L450.867 375.723L419.075 427.746L476.879 526.012L404.624 488.439H367.052L341.04 514.451V462.428L367.052 427.746L341.04 398.844Z",fill:"#2E3C7F"})))}var ne=n.forwardRef(ae),ie=(a.p,a.p+"static/media/image1.cd74d2d0.jpeg"),se=i.a.forwardRef((function(e,t){return Object(u.jsxs)("div",{children:[Object(u.jsx)(X,{isLeftAlign:!0,haveLogo:!1,heading:"The Prodigious Curriculum and Academic System",content:" Being mentored by IITH, IIITR has adopted the innovative fractal academics system, which warrants continuous evaluation. This ensures the students have a deeper understanding of the core subjects. Moreover, the highly flexible curriculum forged by the esteemed faculty of IITH and IIITR exuberates innovation and inventiveness. With core subjects being incorporated from the first semester itself, the students are able to finish their courses quite early and focus on developing projects & industry relevant skills."}),Object(u.jsx)("div",{id:"recruit2"}),Object(u.jsx)(X,{isLeftAlign:!1,heading:"The coders, thinkers and tinkerers",haveLogo:!1,content:" The student family of IIITR consists of competitive coders, web development enthusiasts, eager learners and diligent scholars. The students represent the creamy layer of talent in the country. They have been actively involved in various technical and cultural club activities of IIT Hyderabad. At the same time, the students have founded and set up numerous clubs of their own to further facilitate collaborative learning and introspective growth. (The students have been exploring various industry relevant skills & technologies like Python, C++, Java, Javascript, flutter, Go, flask, NoSQL, SQL, Django, Node, Vue, React, Docker etc.)"}),Object(u.jsx)("div",{id:"recruit3"})]})})),ce=a(54),re=a.n(ce);a(85);re.a.init(),re.a.init({easing:"ease-in-out",duration:1e3,delay:20});var oe=i.a.forwardRef((function(e,t){return Object(n.useEffect)((function(){t.current.setNavState(" ","1")}),[t]),Object(u.jsxs)("div",{className:"homepage",id:"home",children:[Object(u.jsxs)("div",{className:"top",children:[Object(u.jsx)("img",{src:ie,alt:"website logo",className:"backImage"}),Object(u.jsxs)("div",{className:"topComponents",children:[Object(u.jsxs)("div",{className:"HomepageCenter","data-aos":"zoom-in",children:[Object(u.jsx)(ne,{className:"logo"}),Object(u.jsxs)("div",{className:"HomepageLogoText","data-aos":"fade-right",children:[Object(u.jsxs)("h1",{children:["Training and ",Object(u.jsx)("br",{}),"Placement Cell"]}),Object(u.jsx)("h6",{children:"Indian Institute Of Information Technology, Raichur"})]})]}),Object(u.jsx)("div",{className:"scrollNoti",onClick:function(){document.getElementById("scrollTO").scrollIntoView({behavior:"smooth"})},children:Object(u.jsx)("i",{className:"fas fa-2x fa-angle-double-down",style:{cursor:"pointer"}})})]})]}),Object(u.jsxs)("div",{className:"recruitUs",id:"scrollTO",children:[Object(u.jsxs)("div",{className:"aboutUs","data-aos":"fade-up",children:[Object(u.jsx)("h1",{children:"About Us"}),Object(u.jsx)("p",{children:"The Indian Institute of Information Technology, Raichur(IIITR) was established in 2019, as a centre of academic excellence in the field of Computer Science and Information Technology. Currently being mentored by the Indian Institute of Technology, Hyderabad(IITH), IIITR is an institute of national importance, formed under the Public Private Partnership model, with contributions from MHRD, Government of India and the Government of Karnataka.\nWith its highly esteemed & able faculty, modern curriculum and a pioneering batch of bright minded individuals, IIITR is an abode of creativity and innovation, ready to show the world what it is capable of."})]}),$.map((function(e,t){return Object(u.jsx)(X,{isLeftAlign:e.isLeftAlign,haveLogo:e.haveLogo,heading:e.heading,writer:e.writer,content:e.content,imgSrc:e.imgSrc,altText:e.altText},t)})),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{id:"recruit",style:{height:"2vh"}}),Object(u.jsx)("h1",{className:"recruitHead","data-aos":"fade-up",href:"/somefile.txt",download:!0,children:"Why Recruit Us"}),Object(u.jsx)(se,{})]})]})]})}));a(86);function le(){return Object(u.jsx)("div",{title:"404",className:"errorPage",children:"404"})}var de=function(){var e=Object(n.useState)(window.screen.width),t=Object(r.a)(e,2),a=t[0],s=t[1];window.addEventListener("resize",(function(){s(window.screen.width)}));var c=i.a.useRef(null);return a<=960?Object(u.jsx)(le,{}):Object(u.jsxs)("div",{className:"base",id:"back-to-top",children:[Object(u.jsx)(l.a,{}),Object(u.jsx)(J,{ref:c}),Object(u.jsx)("div",{className:"mainBody",children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",render:function(e){return Object(u.jsx)(oe,{ref:c})}}),Object(u.jsx)(o.a,{path:"/Programs",render:function(e){return Object(u.jsx)(z,{ref:c})}}),Object(u.jsx)(o.a,{path:"/Clubs",render:function(e){return Object(u.jsx)(_,{ref:c})}}),Object(u.jsx)(o.a,{path:"/test",render:function(e){return Object(u.jsx)(E,{ref:c,name:"Jatin",phoneNum:"9068334677",email:"cs19b1013@iiitr.ac.in"})}})]})}),Object(u.jsx)(q,{})]})},he=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,128)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),s(e),c(e)}))},je=a(42);a(87);c.a.render(Object(u.jsx)(je.a,{children:Object(u.jsx)(de,{})}),document.getElementById("root")),he()}},[[88,1,2]]]);
//# sourceMappingURL=main.9378ba52.chunk.js.map