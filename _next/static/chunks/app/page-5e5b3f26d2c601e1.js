(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{2007:(e,a,s)=>{"use strict";s.d(a,{default:()=>o});var t=s(5155),l=s(7401);let c=(0,l.A)("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),i=(0,l.A)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);var n=s(6462),r=s(2115);function o(){let e=["Software Engineering Undergraduate","Web Developer","UI/UX Designer"],[a,s]=(0,r.useState)(0),[l,o]=(0,r.useState)(""),[d,h]=(0,r.useState)(!1),m=d?50:100;return(0,r.useEffect)(()=>{let t=setTimeout(()=>{let t=e[a];d?o(e=>e.slice(0,-1)):o(e=>t.slice(0,e.length+1)),d||l!==t?d&&""===l&&(h(!1),s(a=>(a+1)%e.length)):setTimeout(()=>h(!0),1500)},m);return()=>clearTimeout(t)},[l,d,a]),(0,t.jsx)("section",{className:"hero",children:(0,t.jsxs)("div",{className:"hero-content",children:[(0,t.jsx)("div",{className:"hero-image",children:(0,t.jsx)("div",{className:"image-placeholder",children:(0,t.jsx)("img",{src:"/kirush.jpg",alt:"Kirushnabalan Vijayabalan"})})}),(0,t.jsxs)("div",{className:"hero-text",children:[(0,t.jsx)("h1",{className:"animate-title",children:"Kirushnabalan Vijayabalan"}),(0,t.jsxs)("h2",{className:"animate-title",children:[l,"|"]}),(0,t.jsxs)("div",{className:"social-links animate-social",children:[(0,t.jsx)("a",{href:"https://github.com/Kirushnabalan",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub",children:(0,t.jsx)(c,{})}),(0,t.jsx)("a",{href:"https://www.linkedin.com/in/kirushnabalan",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn",children:(0,t.jsx)(i,{})}),(0,t.jsx)("a",{href:"mailto:kirushnabalan1803@gmail.com","aria-label":"Email",children:(0,t.jsx)(n.A,{})})]}),(0,t.jsxs)("div",{className:"cta-buttons",children:[(0,t.jsx)("a",{href:"#contact",className:"cta-button animate-cta",children:"Contact Me"}),(0,t.jsx)("a",{className:"cta-button animate-cta",href:"https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-globalnav-goto",download:"cv.pdf",children:"Download CV"})]})]})]})})}},3115:(e,a,s)=>{"use strict";s.d(a,{default:()=>h});var t=s(5155),l=s(2115),c=s(8897),i=s.n(c),n=s(7401);let r=(0,n.A)("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]),o=(0,n.A)("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);var d=s(6462);let h=()=>{let[e,a]=(0,l.useState)(""),s=async e=>{e.preventDefault(),a("Sending....");let s=new FormData(e.target);s.append("access_key","82565c8d-edb8-49e5-832c-7049d6d7ed62");try{let t=await fetch("https://api.web3forms.com/submit",{method:"POST",body:s}),l=await t.json();l.success?(a("Form Submitted Successfully"),e.target.reset(),i().fire({title:"Thank You!",text:"Your message has been sent successfully.",icon:"success",confirmButtonText:"OK"})):(console.error("Error",l),a(l.message))}catch(e){console.error("Request failed",e),a("Something went wrong. Please try again.")}};return(0,t.jsxs)("section",{id:"contact",className:"section",children:[(0,t.jsx)("h2",{className:"section-title",children:"Contact"}),(0,t.jsx)("div",{className:"section-content",children:(0,t.jsxs)("div",{className:"contact-container",children:[(0,t.jsxs)("div",{className:"contact-info",children:[(0,t.jsxs)("div",{className:"contact-item",children:[(0,t.jsx)(r,{className:"contact-icon"}),(0,t.jsx)("p",{children:"Dehiwala, Sri Lanka"})]}),(0,t.jsxs)("div",{className:"contact-item",children:[(0,t.jsx)(o,{className:"contact-icon"}),(0,t.jsx)("p",{children:"+94 77 664 13316"})]}),(0,t.jsxs)("div",{className:"contact-item",children:[(0,t.jsx)(d.A,{className:"contact-icon"}),(0,t.jsx)("p",{children:"kirushnabalan1803@gmail.com"})]})]}),(0,t.jsx)("div",{className:"contact-form",children:(0,t.jsxs)("form",{onSubmit:s,children:[(0,t.jsxs)("div",{className:"inputbox",children:[(0,t.jsx)("label",{children:"Full Name"}),(0,t.jsx)("input",{type:"text",name:"name",className:"field",placeholder:"Enter your Name",required:!0})]}),(0,t.jsxs)("div",{className:"inputbox",children:[(0,t.jsx)("label",{children:"Email Address"}),(0,t.jsx)("input",{type:"email",name:"email",className:"field",placeholder:"Enter your email",required:!0})]}),(0,t.jsxs)("div",{className:"inputbox",children:[(0,t.jsx)("label",{children:"Your Message"}),(0,t.jsx)("textarea",{name:"message",className:"field",placeholder:"Enter your message",required:!0})]}),(0,t.jsx)("button",{type:"submit",children:"Send Message"}),(0,t.jsx)("p",{children:e})]})})]})})]})}},3189:(e,a,s)=>{"use strict";s.d(a,{default:()=>u});var t=s(5155),l=s(2115),c=s(7401);let i=(0,c.A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),n=(0,c.A)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]),r=(0,c.A)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),o=(0,c.A)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);function d(){let[e,a]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{let e=localStorage.getItem("theme"),s=window.matchMedia("(prefers-color-scheme: dark)").matches;("dark"===e||!e&&s)&&(a(!0),document.documentElement.classList.add("dark"))},[]),(0,t.jsx)("button",{onClick:()=>{e?(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light")):(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")),a(!e)},className:"theme-toggle","aria-label":e?"Switch to light mode":"Switch to dark mode",children:e?(0,t.jsx)(r,{className:"icon"}):(0,t.jsx)(o,{className:"icon"})})}var h=s(8173),m=s.n(h);function u(){let[e,a]=(0,l.useState)(!1),[s,c]=(0,l.useState)(!1),[r,o]=(0,l.useState)("home");(0,l.useEffect)(()=>{let e=()=>{window.scrollY>50?c(!0):c(!1);let e=document.querySelectorAll("section[id]"),a=window.scrollY+100;e.forEach(e=>{let s=e.getAttribute("id")||"",t=e.offsetTop,l=e.offsetHeight;a>=t&&a<t+l&&o(s)})};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);let h=()=>{a(!1)};return(0,l.useEffect)(()=>{let e=()=>{window.innerWidth>=768&&a(!1)};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,t.jsxs)("header",{className:"navbar ".concat(s?"navbar-scrolled":""),children:[(0,t.jsxs)("div",{className:"navbar-container",children:[(0,t.jsx)(m(),{href:"#home",className:"logo",children:(0,t.jsx)("span",{className:"logo-text",children:"KV"})}),(0,t.jsx)("nav",{className:"desktop-nav",children:(0,t.jsxs)("ul",{className:"nav-links",children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#home",className:"home"===r?"active":"",children:"Home"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#about",className:"about"===r?"active":"",children:"About"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#education",className:"education"===r?"active":"",children:"Education"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#projects",className:"projects"===r?"active":"",children:"Projects"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#skills",className:"skills"===r?"active":"",children:"Skills"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#contact",className:"contact"===r?"active":"",children:"Contact"})})]})}),(0,t.jsxs)("div",{className:"navbar-right",children:[(0,t.jsx)(d,{}),(0,t.jsx)("button",{className:"mobile-menu-button",onClick:()=>a(!e),"aria-label":"Toggle menu","aria-expanded":e,children:e?(0,t.jsx)(i,{className:"icon"}):(0,t.jsx)(n,{className:"icon"})})]})]}),(0,t.jsx)("div",{className:"mobile-nav ".concat(e?"open":""),children:(0,t.jsxs)("ul",{className:"mobile-nav-links",children:[(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#home",className:"home"===r?"active":"",onClick:h,children:"Home"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#about",className:"about"===r?"active":"",onClick:h,children:"About"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#education",className:"education"===r?"active":"",onClick:h,children:"Education"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#projects",className:"projects"===r?"active":"",onClick:h,children:"Projects"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#skills",className:"skills"===r?"active":"",onClick:h,children:"Skills"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"#contact",className:"contact"===r?"active":"",onClick:h,children:"Contact"})})]})})]})}},3632:(e,a,s)=>{Promise.resolve().then(s.bind(s,3115)),Promise.resolve().then(s.bind(s,2007)),Promise.resolve().then(s.bind(s,3189))},6462:(e,a,s)=>{"use strict";s.d(a,{A:()=>t});let t=(0,s(7401).A)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]])},7401:(e,a,s)=>{"use strict";s.d(a,{A:()=>r});var t=s(2115);let l=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),c=function(){for(var e=arguments.length,a=Array(e),s=0;s<e;s++)a[s]=arguments[s];return a.filter((e,a,s)=>!!e&&""!==e.trim()&&s.indexOf(e)===a).join(" ").trim()};var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,t.forwardRef)((e,a)=>{let{color:s="currentColor",size:l=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:d,iconNode:h,...m}=e;return(0,t.createElement)("svg",{ref:a,...i,width:l,height:l,stroke:s,strokeWidth:r?24*Number(n)/Number(l):n,className:c("lucide",o),...m},[...h.map(e=>{let[a,s]=e;return(0,t.createElement)(a,s)}),...Array.isArray(d)?d:[d]])}),r=(e,a)=>{let s=(0,t.forwardRef)((s,i)=>{let{className:r,...o}=s;return(0,t.createElement)(n,{ref:i,iconNode:a,className:c("lucide-".concat(l(e)),r),...o})});return s.displayName="".concat(e),s}}},e=>{var a=a=>e(e.s=a);e.O(0,[320,441,587,358],()=>a(3632)),_N_E=e.O()}]);