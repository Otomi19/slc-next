(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[854],{4678:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/community/team",function(){return t(1882)}])},2185:function(e,n,t){"use strict";var r=t(5893),a=t(7294),o=t(1163),s=t(1664);function l(e){return e.charAt(0).toUpperCase()+e.slice(1)}n.Z=function(){var e=(0,o.useRouter)(),n=(0,a.useState)(null),t=n[0],i=n[1];return(0,a.useEffect)((function(){if(e){var n=e.asPath.split("/");n.shift();var t=n.map((function(e,t){return{breadcrumb:e,href:"/"+n.slice(0,t+1).join("/")}}));t.splice(-1),i(t)}}),[e]),t?(0,r.jsx)("nav",{"aria-label":"breadcrumbs",children:(0,r.jsxs)("ol",{className:"breadcrumb bg-white",children:[(0,r.jsx)("li",{className:"text-xl font-bold text-decoration-none ",children:(0,r.jsx)(s.default,{href:"/",children:(0,r.jsx)("a",{className:"text-decoration-none text-secondary dark-text-hover",children:"Home"})})}),t.map((function(e,n){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"text-xl font-bold text-decoration-none text-secondary ",children:"\xa0/\xa0"}),(0,r.jsx)("li",{className:"text-xl font-bold text-decoration-none ",children:(0,r.jsx)(s.default,{href:e.href,children:(0,r.jsx)("a",{className:"text-decoration-none text-secondary dark-text-hover",children:l((t=e.breadcrumb,t.replace(/-/g," ").replace(/oe/g,"\xf6").replace(/ae/g,"\xe4").replace(/ue/g,"\xfc")))})})},e.href)]});var t}))]})}):null}},6503:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var r=t(5893),a=(t(7294),t(1664)),o=t(1163),s=t(5697),l=t.n(s);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}function u(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function d(e){var n=e.href,t=e.exact,s=e.children,l=u(e,["href","exact","children"]),i=(0,o.useRouter)().pathname;return(t?i===n:i.startsWith(n))&&(l.className+=" active"),(0,r.jsx)(a.default,{href:n,children:(0,r.jsx)("a",c({},l,{children:s}))})}function f(e){e.container;return(0,r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark no-flow",children:(0,r.jsxs)("div",{className:"container-fluid ",children:[(0,r.jsx)(a.default,{href:"/",children:(0,r.jsx)("a",{className:"navbar-brand",href:"#",children:(0,r.jsx)("img",{className:"logo",src:"/assets/logo.png",alt:"Koppelman Student Leadership Council"})})}),(0,r.jsx)("button",{className:"navbar-toggler no-border",align:"right",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,r.jsx)("span",{className:"navbar-toggler-icon"})}),(0,r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:(0,r.jsxs)("ul",{className:"navbar-nav mb-2 mb-lg-0 nav ms-auto no-flow",children:[(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(d,{href:"/about",className:"link-light nav-link ",children:"About"})}),(0,r.jsx)("li",{className:"nav-item",children:(0,r.jsx)(d,{href:"/calendar",className:"nav-link link-light",children:"KSB Calendar"})}),(0,r.jsxs)("li",{className:"nav-item dropdown",children:[(0,r.jsx)(d,{href:"/events",className:"nav-link link-light dropdown-toggle",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Events"}),(0,r.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[(0,r.jsx)(d,{href:"/events/business-matters",className:"dropdown-item",children:"Business Matters"}),(0,r.jsx)(d,{href:"/events/summit",className:"dropdown-item",children:"KSB Summit"}),(0,r.jsx)(d,{href:"/events/learn-more",className:"dropdown-item",children:"Learn More"})]})]}),(0,r.jsxs)("li",{className:"nav-item dropdown",children:[(0,r.jsx)(d,{href:"/community",className:"nav-link link-light dropdown-toggle",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Our Community"}),(0,r.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdown",children:[(0,r.jsx)(d,{href:"/community/team",className:"dropdown-item",children:"Our Team"}),(0,r.jsx)(d,{href:"/community/clubs",className:"dropdown-item",children:"KSB Clubs"}),(0,r.jsx)(d,{href:"/community/contact",className:"dropdown-item",children:"Contact Us"})]})]}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{className:"btn btn-outline-light slc-hover-background ml-2",href:"https://form.typeform.com/to/ImW405p0",target:"_blank",rel:"noopener noreferrer",children:"Subscribe Us"})})]})})]})})}function p(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("footer",{className:"py-5 bg-dark",children:(0,r.jsx)("div",{className:"container",children:(0,r.jsx)("p",{className:"m-0 text-center text-white",children:"Copyright \xa9 Koppelman SLC 2022"})})})})}d.propTypes={href:l().string.isRequired,exact:l().bool},d.defaultProps={exact:!1};var h=t(9008);function m(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(h.default,{children:[(0,r.jsx)("link",{rel:"icon",href:"slc-icon32x32.ico"}),(0,r.jsx)("title",{children:"Koppelman Student Leadership Council"}),(0,r.jsx)("meta",{name:"keywords",content:"slc, brooklyn, brooklyn college, cuny, Koppelman student leader council, brooklyn student leadership council, brooklyn college business, brooklyn college leadership, koppelman school of business"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,r.jsx)("meta",{name:"description",content:"The SLC aims to inspire and encourage students to take the lead in their personal and professional lives. We aim to ensure students are equipped with the resources and knowledge they need to dive into their professional careers."}),(0,r.jsx)("meta",{name:"author",content:"Koppelman Student Leadership Council"})]}),(0,r.jsxs)("body",{className:"pb-5",children:[(0,r.jsx)(f,{}),(0,r.jsx)("div",{className:" container mx-auto px-5",children:e.children})]}),(0,r.jsx)(p,{})]})}},1031:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(5893),a=t(2185);function o(e){var n=e.children,t=e.breadcrumb;return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("br",{}),t&&(0,r.jsx)(a.Z,{}),(0,r.jsx)("br",{}),(0,r.jsx)("h1",{className:"link link--metis text-center text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight mb-12 ml-2",children:n})]})})}},8418:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],s=!0,l=!1;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);s=!0);}catch(i){l=!0,a=i}finally{try{s||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var o,s=(o=t(7294))&&o.__esModule?o:{default:o},l=t(6273),i=t(387),c=t(7190);var u={};function d(e,n,t,r){if(e&&l.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,r=i.useRouter(),o=s.default.useMemo((function(){var n=a(l.resolveHref(r,e.href,!0),2),t=n[0],o=n[1];return{href:t,as:e.as?l.resolveHref(r,e.as):o||t}}),[r,e.href,e.as]),f=o.href,p=o.as,h=e.children,m=e.replace,b=e.shallow,v=e.scroll,x=e.locale;"string"===typeof h&&(h=s.default.createElement("a",null,h));var y=(n=s.default.Children.only(h))&&"object"===typeof n&&n.ref,g=a(c.useIntersection({rootMargin:"200px"}),2),j=g[0],w=g[1],N=s.default.useCallback((function(e){j(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,j]);s.default.useEffect((function(){var e=w&&t&&l.isLocalURL(f),n="undefined"!==typeof x?x:r&&r.locale,a=u[f+"%"+p+(n?"%"+n:"")];e&&!a&&d(r,f,p,{locale:n})}),[p,f,w,x,t,r]);var k={ref:N,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,s,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(t))&&(e.preventDefault(),null==s&&r.indexOf("#")>=0&&(s=!1),n[a?"replace":"push"](t,r,{shallow:o,locale:i,scroll:s}))}(e,r,f,p,m,b,v,x)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),l.isLocalURL(f)&&d(r,f,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var O="undefined"!==typeof x?x:r&&r.locale,S=r&&r.isLocaleDomain&&l.getDomainLocale(p,O,r&&r.locales,r&&r.domainLocales);k.href=S||l.addBasePath(l.addLocale(p,O,r&&r.defaultLocale))}return s.default.cloneElement(n,k)};n.default=f},7190:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],s=!0,l=!1;try{for(t=t.call(e);!(s=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);s=!0);}catch(i){l=!0,a=i}finally{try{s||null==t.return||t.return()}finally{if(l)throw a}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,r=e.disabled||!l,c=o.useRef(),u=a(o.useState(!1),2),d=u[0],f=u[1],p=a(o.useState(n?n.current:null),2),h=p[0],m=p[1],b=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||d||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,o=r.observer,s=r.elements;return s.set(e,n),o.observe(e),function(){s.delete(e),o.unobserve(e),0===s.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&f(e)}),{root:h,rootMargin:t}))}),[r,h,t,d]);return o.useEffect((function(){if(!l&&!d){var e=s.requestIdleCallback((function(){return f(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){n&&m(n.current)}),[n]),[b,d]};var o=t(7294),s=t(9311),l="undefined"!==typeof IntersectionObserver;var i=new Map},1882:function(e,n,t){"use strict";t.r(n);var r=t(5893),a=t(6503),o=t(1031);n.default=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(o.Z,{breadcrumb:!0,children:"Our Team"}),(0,r.jsx)("div",{className:"",children:"Each Fall semester, the SLC hosts Business Matters, a two-day symposium designed to to help build strong ties between business students, business faculty, and the business community by providing a forum that facilitates an exchange of ideas leading to professional growth. Business Matters is attended by approximately 800 students every Fall semester, and has hosted BC alumnus from premier firms such as Goldman Sachs, J.P. Morgan, Deloitte, Accenture, and the NYC Department of Finance. Over 8 years, Business Matters has grown into one of the largest, student organized event on campus."})]})})}},9008:function(e,n,t){e.exports=t(5443)},1664:function(e,n,t){e.exports=t(8418)},1163:function(e,n,t){e.exports=t(387)},2703:function(e,n,t){"use strict";var r=t(414);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,n,t,a,o,s){if(s!==r){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:a};return t.PropTypes=t,t}},5697:function(e,n,t){e.exports=t(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[774,888,179],(function(){return n=4678,e(e.s=n);var n}));var n=e.O();_N_E=n}]);