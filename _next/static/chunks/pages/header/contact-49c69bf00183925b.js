(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{5201:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/header/contact",function(){return c(6225)}])},5874:function(a,b,c){"use strict";c.d(b,{Z:function(){return o}});var d=c(828),e=c(5893),f=c(7294),g=c(1163),h=c(1664),i=c.n(h),j=function(){var a=(0,f.useState)([0,0]),b=a[0],c=a[1];return(0,f.useLayoutEffect)(function(){var a=function(){c([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",a),a(),function(){return window.removeEventListener("resize",a)}},[]),b},k=j,l=c(7161),m=c.n(l),n=function(a){var b=a.page,c=a.color,h=void 0===c?"#24292f":c,j=(0,d.Z)(k(),2);j[0],j[1];var l=(0,f.useState)(0),n=l[0],o=l[1],p=(0,f.useState)(0),q=p[0],r=p[1],s=(0,f.useState)(0),t=s[0],u=s[1],v=(0,f.useState)(!1),w=v[0],x=v[1],y=(0,g.useRouter)(),z=(0,f.useRef)(Object.keys(b).map(function(){return(0,f.createRef)()})),A=function(a){return z.current[a].current?z.current[a].current.offsetLeft:n},B=function(){return Object.values(b).includes(y.pathname)?Object.values(b).indexOf(y.pathname):0};return(0,f.useEffect)(function(){o(z.current[B()].current.offsetLeft)},[]),(0,f.useEffect)(function(){r(A(B())),u(n-A(B()))}),(0,e.jsxs)("div",{className:m().main,children:[(0,e.jsx)("div",{className:m().main_,children:Object.keys(b).length&&Object.keys(b).map(function(a,c){return(0,e.jsx)("div",{className:m().links,ref:z.current[c],onMouseEnter:function(a){o(a.target.offsetLeft),x(!0)},onMouseLeave:function(){return x(!1)},children:(0,e.jsx)(i(),{href:b[a],children:(0,e.jsx)("a",{style:{cursor:"pointer",color:h},children:a})})},c)})}),(0,e.jsx)("div",{className:m().underline,style:{backgroundColor:h,left:"".concat(q,"px"),transform:"translateX(".concat(w?t:0,"px)")}})]})},o=n},2134:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return p}});var d=c(5893),e=c(5874),f=c(1163),g=c(1664),h=c.n(g),i=c(5877),j=c.n(i),k=function(a){var b=a.page,c=(0,f.useRouter)();return(0,d.jsx)("div",{className:j().main,children:Object.keys(b).length&&Object.keys(b).map(function(a,e){return(0,d.jsx)("div",{className:j().link,children:(0,d.jsx)(h(),{href:b[a],children:(0,d.jsx)("a",{className:c.pathname==b[a]?j().active:"",children:a})})},e)})})},l=k,m=c(7587),n=c.n(m),o=function(){return(0,d.jsxs)("div",{className:n().headers,children:[(0,d.jsx)("div",{className:n().header,children:(0,d.jsx)(e.Z,{page:{Work:"/header",About:"/header/about",Workflow:"/header/workflow",Contact:"/header/contact"}})}),(0,d.jsx)("div",{className:n().header,children:(0,d.jsx)(l,{page:{Work:"/header",About:"/header/about",Workflow:"/header/workflow",Contact:"/header/contact"}})})]})},p=o},6225:function(a,b,c){"use strict";c.r(b);var d=c(5893),e=c(2134),f=function(){return(0,d.jsx)("div",{children:(0,d.jsx)(e.default,{})})};b.default=f},7161:function(a){a.exports={main:"header_main__9Yt_Y",main_:"header_main___dm8VE",links:"header_links__e0mjL",underline:"header_underline__3wI2a"}},5877:function(a){a.exports={main:"header2_main__3i31C",link:"header2_link__bUSFt",active:"header2_active__AyG8l"}},7587:function(a){a.exports={headers:"components_headers__cwhZW",header:"components_header__rdH1r"}},1163:function(a,b,c){a.exports=c(387)},943:function(a,b,c){"use strict";function d(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}c.d(b,{Z:function(){return d}})},3375:function(a,b,c){"use strict";function d(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}c.d(b,{Z:function(){return d}})},828:function(a,b,c){"use strict";c.d(b,{Z:function(){return f}});var d=c(3375),e=c(1566);function f(a,b){return function(a){if(Array.isArray(a))return a}(a)||(0,d.Z)(a,b)||(0,e.Z)(a,b)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(a,b,c){"use strict";c.d(b,{Z:function(){return e}});var d=c(943);function e(a,b){if(a){if("string"==typeof a)return(0,d.Z)(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return(0,d.Z)(a,b)}}}},function(a){a.O(0,[664,774,888,179],function(){var b;return a(a.s=5201)}),_N_E=a.O()}])