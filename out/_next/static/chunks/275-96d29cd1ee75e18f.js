"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[275],{202:function(e,n,a){var r=a(5893),t=a(7294),s=a(1163),l=a(1664),o=a.n(l);function i(e){return e.charAt(0).toUpperCase()+e.slice(1)}n.Z=function(){var e=(0,s.useRouter)(),n=(0,t.useState)(null),a=n[0],l=n[1];return(0,t.useEffect)((function(){if(e){var n=e.asPath.split("/");n.shift();var a=n.map((function(e,a){return{breadcrumb:e,href:"/"+n.slice(0,a+1).join("/")}}));a.splice(-1),l(a)}}),[e]),a?(0,r.jsx)("nav",{"aria-label":"breadcrumbs",children:(0,r.jsxs)("ol",{className:"breadcrumb bg-white",children:[(0,r.jsx)("li",{className:"text-xl font-bold text-decoration-none",children:(0,r.jsx)(o(),{href:"/",children:(0,r.jsx)("a",{className:"text-decoration-none text-secondary hover:text-black",children:"Home"})})}),a.map((function(e,n){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"text-xl font-bold text-decoration-none text-secondary -mb-1",children:"\xa0/\xa0"}),(0,r.jsx)("li",{className:"text-xl font-bold text-decoration-none",children:(0,r.jsx)(o(),{href:e.href,children:(0,r.jsx)("a",{className:"text-decoration-none text-secondary hover:text-black",children:i((a=e.breadcrumb,a.replace(/-/g," ").replace(/oe/g,"\xf6").replace(/ae/g,"\xe4").replace(/ue/g,"\xfc")))})})},e.href)]});var a}))]})}):null}},7335:function(e,n,a){a.d(n,{Z:function(){return x}});var r=a(5893),t=(a(7294),a(1664)),s=a.n(t),l=a(1163),o=a(5697),i=a.n(o);function c(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function d(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{},r=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),r.forEach((function(n){c(e,n,a[n])}))}return e}function h(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}function m(e){var n=e.href,a=e.exact,t=e.children,o=h(e,["href","exact","children"]),i=(0,l.useRouter)().pathname;return(a?i===n:i.startsWith(n))&&(o.className+=" active"),(0,r.jsx)(s(),{href:n,children:(0,r.jsx)("a",d({},o,{children:t}))})}function u(e){e.container;return(0,r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark no-flow",children:(0,r.jsxs)("div",{className:"container-fluid ",children:[(0,r.jsx)(s(),{href:"/",children:(0,r.jsx)("a",{className:"navbar-brand -my-2",href:"#",children:(0,r.jsx)("img",{src:"/assets/logo.png",className:"h-[68.52px]"})})}),(0,r.jsx)("button",{className:"navbar-toggler border-none",align:"right",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,r.jsx)("span",{className:"navbar-toggler-icon"})}),(0,r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,r.jsxs)("ul",{className:"navbar-nav mb-2 mb-lg-0 nav ms-auto no-flow",children:[(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(m,{href:"/about",className:"link-light nav-link ",children:"About"})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(m,{href:"/calendar",className:"nav-link link-light",children:"KSB Calendar"})}),(0,r.jsxs)("li",{className:"nav-item dropdown",children:[(0,r.jsx)(m,{href:"/events",className:"nav-link link-light dropdown-toggle",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Events"}),(0,r.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[(0,r.jsx)(m,{href:"/events/business-matters",className:"dropdown-item",children:"Business Matters"}),(0,r.jsx)(m,{href:"/events/summit",className:"dropdown-item",children:"KSB Summit"})]})]}),(0,r.jsxs)("li",{className:"nav-item dropdown",children:[(0,r.jsx)(m,{href:"/community",className:"nav-link link-light dropdown-toggle",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Our Community"}),(0,r.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[(0,r.jsx)(m,{href:"/community/team",className:"dropdown-item",children:"Our Team"}),(0,r.jsx)(m,{href:"/community/clubs",className:"dropdown-item",children:"KSB Clubs"}),(0,r.jsx)(m,{href:"/community/contact",className:"dropdown-item",children:"Contact Us"})]})]}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"btn btn-outline-light hover:bg-[#AD4C66] hover:border-[#AD4C66] ml-2",href:"https://form.typeform.com/to/ImW405p0",target:"_blank",rel:"noopener noreferrer",children:"Subscribe Us"})})]})})]})})}function C(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("footer",{className:"bg-dark",children:(0,r.jsxs)("div",{className:"grid grid-cols-1 justify-items-center gap-3 ",children:[(0,r.jsxs)("div",{className:"flex flex-row gap-3 pt-10",children:[(0,r.jsx)("a",{target:"_blank",href:"https://www.instagram.com/koppelmanslc/",children:(0,r.jsx)("button",{className:"bg-white p-2 rounded",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 40 40","data-arp-injected":"true",children:(0,r.jsx)("path",{fill:"#BC2A8D",d:"M28.9612095,0 L11.0383173,0 C4.95179283,0 0,4.95202943 0,11.0385539 L0,28.9614461 C0,35.0482072 4.95179283,40 11.0383173,40 L28.9612095,40 C35.0482072,40 40,35.0479706 40,28.9614461 L40,11.0385539 C40.0002366,4.95202943 35.0482072,0 28.9612095,0 Z M36.4512427,28.9614461 C36.4512427,33.091292 33.091292,36.4510061 28.9614461,36.4510061 L11.0383173,36.4510061 C6.90870805,36.4512427 3.54899386,33.091292 3.54899386,28.9614461 L3.54899386,11.0385539 C3.54899386,6.90894465 6.90870805,3.54899386 11.0383173,3.54899386 L28.9612095,3.54899386 C33.0910554,3.54899386 36.4510061,6.90894465 36.4510061,11.0385539 L36.4510061,28.9614461 L36.4512427,28.9614461 Z M20,9.6934852 C14.3166412,9.6934852 9.693012,14.3171144 9.693012,20.0004732 C9.693012,25.6835954 14.3166412,30.306988 20,30.306988 C25.6833588,30.306988 30.306988,25.6835954 30.306988,20.0004732 C30.306988,14.3171144 25.6833588,9.6934852 20,9.6934852 Z M20,26.7577575 C16.273793,26.7577575 13.2420059,23.7264436 13.2420059,20.0002366 C13.2420059,16.273793 16.2735564,13.2422425 20,13.2422425 C23.7264436,13.2422425 26.7579941,16.273793 26.7579941,20.0002366 C26.7579941,23.7264436 23.726207,26.7577575 20,26.7577575 Z M30.7392554,6.68417504 C30.0554826,6.68417504 29.3837764,6.96099656 28.9008766,7.44602572 C28.4156108,7.92868888 28.1366599,8.6006317 28.1366599,9.2867705 C28.1366599,9.97078 28.4158474,10.6424862 28.9008766,11.1275153 C29.3835398,11.6101785 30.0554826,11.889366 30.7392554,11.889366 C31.4253942,11.889366 32.0949711,11.6101785 32.5800002,11.1275153 C33.0650294,10.6424862 33.3418509,9.9705434 33.3418509,9.2867705 C33.3418509,8.6006317 33.0650294,7.92868888 32.5800002,7.44602572 C32.0973371,6.96099656 31.4253942,6.68417504 30.7392554,6.68417504 Z M36.4512427,28.9614461 C36.4512427,33.091292 33.091292,36.4510061 28.9614461,36.4510061 L11.0383173,36.4510061 C6.90870805,36.4512427 3.54899386,33.091292 3.54899386,28.9614461 L3.54899386,11.0385539 C3.54899386,6.90894465 6.90870805,3.54899386 11.0383173,3.54899386 L28.9612095,3.54899386 C33.0910554,3.54899386 36.4510061,6.90894465 36.4510061,11.0385539 L36.4510061,28.9614461 L36.4512427,28.9614461 Z M28.9612095,0 L11.0383173,0 C4.95179283,0 0,4.95202943 0,11.0385539 L0,28.9614461 C0,35.0482072 4.95179283,40 11.0383173,40 L28.9612095,40 C35.0482072,40 40,35.0479706 40,28.9614461 L40,11.0385539 C40.0002366,4.95202943 35.0482072,0 28.9612095,0 Z"})})})}),(0,r.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/company/ksbstudentleadership/about/",children:(0,r.jsx)("button",{className:"bg-white p-2 rounded",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 50 50","data-arp-injected":"true",children:(0,r.jsx)("path",{className:"linkedin-button",d:"M 8 3.007812 C 4.53125 3.007812 2.007812 5.089844 2.007812 7.949219 C 2.007812 10.820312 4.589844 12.988281 8 12.988281 C 11.46875 12.988281 13.988281 10.871094 13.988281 7.890625 C 13.832031 5.019531 11.359375 3.007812 8 3.007812 Z M 3 15 C 2.449219 15 2 15.449219 2 16 L 2 45 C 2 45.550781 2.449219 46 3 46 L 13 46 C 13.550781 46 14 45.550781 14 45 L 14 16 C 14 15.449219 13.550781 15 13 15 Z M 18 15 C 17.449219 15 17 15.449219 17 16 L 17 45 C 17 45.550781 17.449219 46 18 46 L 27 46 C 27.550781 46 28 45.550781 28 45 L 28 29.5 C 28 27.128906 29.820312 25.199219 32.140625 25.019531 C 32.261719 25 32.378906 25 32.5 25 C 32.621094 25 32.738281 25 32.859375 25.019531 C 35.179688 25.199219 37 27.128906 37 29.5 L 37 45 C 37 45.550781 37.449219 46 38 46 L 47 46 C 47.550781 46 48 45.550781 48 45 L 48 28 C 48 21.53125 44.527344 15 36.789062 15 C 33.269531 15 30.609375 16.359375 29 17.488281 L 29 16 C 29 15.449219 28.550781 15 28 15 Z M 18 15 "})})})}),(0,r.jsx)("a",{target:"_blank",href:"https://github.com/NeneWang/slc-next/",children:(0,r.jsx)("button",{className:"bg-white p-2 rounded",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 40 40","data-arp-injected":"true",children:(0,r.jsx)("path",{fill:"#333",d:"M37.3171343,10.2106855 C35.5286789,7.06954026 33.1027532,4.58269119 30.0387189,2.74957732 C26.9742285,0.91636994 23.6287185,0 19.9998176,0 C16.3713727,0 13.0247682,0.91665044 9.9609163,2.74957732 C6.89660834,4.58259769 4.47077388,7.06954026 2.68231839,10.2106855 C0.89413653,13.3517373 0,16.7817901 0,20.5007505 C0,24.9680656 1.27147437,28.9851899 3.81506159,32.5531516 C6.35837518,36.1213939 9.6439598,38.5904784 13.6715419,39.9606857 C14.1403638,40.0498824 14.4874198,39.9871455 14.7130746,39.7740645 C14.9388206,39.560703 15.0515567,39.2934869 15.0515567,38.9735381 C15.0515567,38.920151 15.0470874,38.4398538 15.0384224,37.5320856 C15.0294838,36.6243175 15.0252881,35.8323928 15.0252881,35.1566857 L14.4263088,35.262899 C14.0444104,35.3346116 13.5626365,35.3649984 12.9809872,35.3563966 C12.3996114,35.3480753 11.7960716,35.2856189 11.1711884,35.1694949 C10.5460317,35.0543993 9.9645647,34.7874637 9.4263316,34.369249 C8.888372,33.9510342 8.5064737,33.4036058 8.2807277,32.7278051 L8.0203217,32.1135259 C7.84674812,31.7045675 7.57348146,31.2502626 7.20015688,30.7522944 C6.8268323,30.2538587 6.44931204,29.9159584 6.06741368,29.7380325 L5.88508389,29.6042374 C5.7635915,29.5153212 5.65085533,29.4080795 5.54660172,29.2836342 C5.44243933,29.1591889 5.36445436,29.0346501 5.31237316,28.9099243 C5.26020075,28.785105 5.30343453,28.6827251 5.44253054,28.6024107 C5.58162656,28.5220963 5.8330027,28.4831078 6.19775349,28.4831078 L6.71838302,28.5628612 C7.06562139,28.6341999 7.49513164,28.8472809 8.007461,29.2034133 C8.5195168,29.5592651 8.9404532,30.0218912 9.2703616,30.5911046 C9.6698636,31.3209468 10.1511814,31.8770705 10.7156832,32.2597562 C11.2797289,32.6424418 11.8484264,32.8334574 12.4212283,32.8334574 C12.9940303,32.8334574 13.488756,32.7889526 13.905588,32.7004104 C14.3219639,32.6114006 14.7126185,32.4776056 15.0773693,32.2997732 C15.2336129,31.1069308 15.6590187,30.1905609 16.3532218,29.5500088 C15.3637703,29.4434216 14.4741943,29.2828862 13.6840377,29.0694312 C12.8943372,28.8556957 12.0782769,28.5088196 11.2364039,28.027868 C10.394075,27.5475708 9.6953113,26.9511497 9.1399306,26.2396329 C8.5844586,25.5277422 8.1285886,24.5931403 7.77295882,23.4366685 C7.41714666,22.2797292 7.23919498,20.9451446 7.23919498,19.4325404 C7.23919498,17.2788233 7.92509794,15.4460834 9.2966302,13.9332923 C8.6541435,12.3141009 8.7147984,10.4989386 9.4787776,8.4879923 C9.9822596,8.3276439 10.7289087,8.4479753 11.7183602,8.8482385 C12.7079941,9.2486887 13.4325704,9.5917314 13.8928185,9.8761511 C14.3530667,10.1604773 14.7218308,10.4014206 14.999658,10.5968306 C16.6145399,10.134298 18.2810469,9.9029849 19.9996352,9.9029849 C21.7182234,9.9029849 23.3850953,10.134298 25.0000684,10.5968306 L25.9896111,9.9564655 C26.6663018,9.5291815 27.465397,9.1376136 28.3849813,8.7816682 C29.3051128,8.4259099 30.0087106,8.3279244 30.495045,8.4882728 C31.2759893,10.4993126 31.3455829,12.3143814 30.7029137,13.9335728 C32.0743548,15.4463639 32.7605314,17.2795713 32.7605314,19.4328209 C32.7605314,20.945425 32.5819412,22.2842171 32.2266763,23.4500387 C31.8709554,24.6160472 31.4111633,25.5497142 30.8471175,26.2530031 C30.2824333,26.9561985 29.5792004,27.5479448 28.7373274,28.0281485 C27.8952721,28.5087261 27.0789381,28.8556022 26.2892376,29.0693377 C25.4991723,29.2830732 24.6095963,29.4437021 23.6201448,29.5504763 C24.5225814,30.3510028 24.973891,31.6146228 24.973891,33.3407754 L24.973891,38.9727901 C24.973891,39.2927389 25.0824315,39.5598615 25.2996949,39.7733165 C25.5166847,39.9863975 25.8593625,40.0491344 26.3281845,39.9598442 C30.3563138,38.589824 33.6418985,36.1206459 36.1851208,32.5524037 C38.7280696,28.9844419 40,24.9673177 40,20.5000025 C39.9990879,16.7815096 39.1044953,13.3517373 37.3171343,10.2106855 Z"})})})})]}),(0,r.jsx)("p",{className:"text-white",children:"Copyright \xa9 Koppelman SLC 2022"})]})})})}m.propTypes={href:i().string.isRequired,exact:i().bool},m.defaultProps={exact:!1};var p=a(9008);function x(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(p.default,{children:[(0,r.jsx)("link",{rel:"icon",href:"slc-icon32x32.ico"}),(0,r.jsx)("title",{children:"Koppelman Student Leadership Council"}),(0,r.jsx)("meta",{name:"keywords",content:"slc, brooklyn, brooklyn college, cuny, Koppelman student leader council, brooklyn student leadership council, brooklyn college business, brooklyn college leadership, koppelman school of business"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,r.jsx)("meta",{name:"description",content:"The SLC aims to inspire and encourage students to take the lead in their personal and professional lives. We aim to ensure students are equipped with the resources and knowledge they need to dive into their professional careers."}),(0,r.jsx)("meta",{name:"author",content:"Koppelman Student Leadership Council"})]}),(0,r.jsxs)("body",{className:"pb-5",children:[(0,r.jsx)(u,{}),(0,r.jsx)("div",{className:"container mx-auto",children:e.children})]}),"  ",(0,r.jsx)("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/react-modal/3.14.3/react-modal.min.js"}),(0,r.jsx)(C,{})]})}}}]);