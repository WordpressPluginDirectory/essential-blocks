(()=>{"use strict";var e,t={9052:(e,t,n)=>{window.React;const r=window.wp.element,a=window.wp.data;var o=n(4467),c=n(3453);const l=window.wp.i18n,i=window.wp.components;var s=n(467);const u=window.regeneratorRuntime;var p=n.n(u);const d=window.wp.apiFetch;var m=n.n(d);function f(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return b(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var g=function(e){return new Promise((function(t,n){var r=document.createElement(e.nodeName);["id","rel","src","href","type"].forEach((function(t){e[t]&&(r[t]=e[t])})),e.innerHTML&&r.appendChild(document.createTextNode(e.innerHTML)),r.onload=function(){return t(!0)},r.onerror=function(){return n(new Error("Error loading asset."))},document.body.appendChild(r),("link"===r.nodeName.toLowerCase()||"script"===r.nodeName.toLowerCase()&&!r.src)&&t()}))};function v(){return(v=(0,s.A)(p().mark((function e(){var t,n,r,a,o,c,l,i;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()({url:document.location.href,parse:!1});case 2:return t=e.sent,e.next=5,t.text();case 5:n=e.sent,r=(new window.DOMParser).parseFromString(n,"text/html"),a=["wp-blocks-js-after","essential-blocks-blocks-localize-js-extra","elementor-editor-js-before"],o=Array.from(r.querySelectorAll('link[rel="stylesheet"],script')).filter((function(e){return e.id&&(a.includes(e.id)||!document.getElementById(e.id))})),c=f(o),e.prev=10,c.s();case 12:if((l=c.n()).done){e.next=18;break}return i=l.value,e.next=16,g(i);case 16:e.next=12;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(10),c.e(e.t0);case 23:return e.prev=23,c.f(),e.finish(23);case 26:case"end":return e.stop()}}),e,null,[[10,20,23,26]])})))).apply(this,arguments)}const h=EBControls;function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,o.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E="templately/templately.php";const k=function(){var e,t=(0,r.useState)(!0),n=(0,c.A)(t,2),a=n[0],s=n[1],u=(0,r.useState)(!1),p=(0,c.A)(u,2),d=p[0],m=p[1],f=(0,r.useState)(!1),b=(0,c.A)(f,2),g=b[0],y=b[1],k=(0,r.useState)(!1),O=(0,c.A)(k,2),R=O[0],_=O[1],L=function(){m(!d)};return a?React.createElement(React.Fragment,null,React.createElement(i.Button,{onClick:function(){return L()},className:"eb-pattern-library-button"},React.createElement("img",{src:"".concat(null===(e=EssentialBlocksLocalize)||void 0===e?void 0:e.eb_plugins_url,"assets/images/eb-logo.svg"),alt:"Essential Blocks Icon"})," ",(0,l.__)("Pattern Library","essential-blocks")),d&&React.createElement(i.Popover,{className:"eb-pattern-library-popover"},React.createElement("div",{className:"eb-pattern-library-popover-content"},React.createElement("div",{className:"pattern-content"},React.createElement("h2",{className:"eb-pattern-library-heading"},"Access To Thousands Of Ready Gutenberg Templates"),React.createElement("p",null,"Design unique websites using ready Gutenberg templates from Templately with absolute ease and instantly grab attention."),React.createElement(i.Button,{className:"eb-button ".concat(R?"eb-button-error":""),onClick:function(){return y(!0),void(0,h.installPlugin)("templately",E).then((function(e){if(JSON.parse(e).success){var t=document.createElement("div");t.setAttribute("id","templately-gutenberg"),document.querySelector("body").appendChild(t),function(){return v.apply(this,arguments)}().then((function(){y(!1),m(!1),window.TemplatelyAppManager.open(null,"templately-gutenberg","gutenberg"),EssentialBlocksLocalize.get_plugins=w(w({},EssentialBlocksLocalize.get_plugins),{},(0,o.A)({},E,w(w({},EssentialBlocksLocalize.get_plugins[E]),{},{active:!0})))}))}else _(!0),setTimeout((function(){m(!1)}),2e3)}))}},!R&&React.createElement(React.Fragment,null,(0,l.__)("I want access to FREE Templates","essential-blocks"),g&&React.createElement("img",{className:"eb-install-loader",src:"".concat(EssentialBlocksLocalize.eb_plugins_url,"/assets/images/loading.svg")})),R&&React.createElement(React.Fragment,null,(0,l.__)("Something went wrong!","essential-blocks"))),React.createElement(i.Button,{className:"eb-hide-button",onClick:function(){return(e=new FormData).append("action","hide_pattern_library"),e.append("admin_nonce",EssentialBlocksLocalize.admin_nonce),fetch(EssentialBlocksLocalize.ajax_url,{method:"POST",body:e}).then((function(e){return e.text()})).then((function(e){JSON.parse(e).success&&(m(!1),s(!1))})).catch((function(e){return console.log(e)}));var e}},"Never show again")),React.createElement("div",{className:"pattern-img"},React.createElement("img",{src:"".concat(EssentialBlocksLocalize.image_url,"//patternLibrary.jpg"),alt:"Pattern Library"}))),React.createElement("a",{className:"eb-pattern-library-close-btn",href:"#",onClick:function(){return L()}},React.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},React.createElement("g",{"clip-path":"url(#clip0_435_1560)"},React.createElement("path",{d:"M15 4.75L5 14.75",stroke:"#667085",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"}),React.createElement("path",{d:"M5 4.75L15 14.75",stroke:"#667085",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})),React.createElement("defs",null,React.createElement("clipPath",{id:"clip0_435_1560"},React.createElement("rect",{width:"20",height:"20",fill:"white"}))))))):""};document.addEventListener("DOMContentLoaded",(function(){var e="templately/templately.php",t=EssentialBlocksLocalize.get_plugins[e];if(!t||!t.active){var n=document.createElement("div");n.classList.add("eb-pattern-library-button-wrapper"),(0,r.createRoot)(n).render(React.createElement(k,null)),(0,a.subscribe)((function(){var t=document.querySelector(".edit-post-header-toolbar");if(t){var r=EssentialBlocksLocalize.get_plugins[e];r&&r.active?t.querySelector(".eb-pattern-library-button-wrapper")&&t.removeChild(n):t.querySelector(".eb-pattern-library-button-wrapper")||t.appendChild(n)}}))}}))}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,a,o)=>{if(!n){var c=1/0;for(u=0;u<e.length;u++){n=e[u][0],a=e[u][1],o=e[u][2];for(var l=!0,i=0;i<n.length;i++)(!1&o||c>=o)&&Object.keys(r.O).every((e=>r.O[e](n[i])))?n.splice(i--,1):(l=!1,o<c&&(c=o));if(l){e.splice(u--,1);var s=a();void 0!==s&&(t=s)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,a,o]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.j=108,(()=>{var e={108:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,c=n[0],l=n[1],i=n[2],s=0;if(c.some((t=>0!==e[t]))){for(a in l)r.o(l,a)&&(r.m[a]=l[a]);if(i)var u=i(r)}for(t&&t(n);s<c.length;s++)o=c[s],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},n=self.webpackChunkessential_blocks=self.webpackChunkessential_blocks||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[935],(()=>r(9052)));a=r.O(a)})();