(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[938],{1897:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pages/p",function(){return c(1213)}])},5874:function(a,b,c){"use strict";c.d(b,{Z:function(){return o}});var d=c(828),e=c(5893),f=c(7294),g=c(1163),h=c(1664),i=c.n(h),j=function(){var a=(0,f.useState)([0,0]),b=a[0],c=a[1];return(0,f.useLayoutEffect)(function(){var a=function(){c([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",a),a(),function(){return window.removeEventListener("resize",a)}},[]),b},k=j,l=c(7161),m=c.n(l),n=function(a){var b=a.page,c=a.color,h=void 0===c?"#24292f":c,j=(0,d.Z)(k(),2);j[0],j[1];var l=(0,f.useState)(0),n=l[0],o=l[1],p=(0,f.useState)(0),q=p[0],r=p[1],s=(0,f.useState)(0),t=s[0],u=s[1],v=(0,f.useState)(!1),w=v[0],x=v[1],y=(0,g.useRouter)(),z=(0,f.useRef)(Object.keys(b).map(function(){return(0,f.createRef)()})),A=function(a){return z.current[a].current?z.current[a].current.offsetLeft:n},B=function(){return Object.values(b).includes(y.pathname)?Object.values(b).indexOf(y.pathname):0};return(0,f.useEffect)(function(){o(z.current[B()].current.offsetLeft)},[]),(0,f.useEffect)(function(){r(A(B())),u(n-A(B()))}),(0,e.jsxs)("div",{className:m().main,children:[(0,e.jsx)("div",{className:m().main_,children:Object.keys(b).length&&Object.keys(b).map(function(a,c){return(0,e.jsx)("div",{className:m().links,ref:z.current[c],onMouseEnter:function(a){o(a.target.offsetLeft),x(!0)},onMouseLeave:function(){return x(!1)},children:(0,e.jsx)(i(),{href:b[a],children:(0,e.jsx)("a",{style:{cursor:"pointer",color:h},children:a})})},c)})}),(0,e.jsx)("div",{className:m().underline,style:{backgroundColor:h,left:"".concat(q,"px"),transform:"translateX(".concat(w?t:0,"px)")}})]})},o=n},1087:function(a,b,c){"use strict";var d=c(5893),e=c(7294),f=c(6662),g=c(593),h=c.n(g),i=function(a){var b=a.children,c=a.color,g=void 0===c?"#000":c,i=(0,e.useState)(0),j=i[0],k=i[1],l=(0,e.useState)(0),m=l[0],n=l[1],o=(0,e.useState)(!0),p=o[0],q=o[1],r=(0,e.useState)(void 0),s=r[0],t=r[1],u=(0,e.useState)(!1),v=u[0],w=u[1],x=function(){return"A"==s};return(0,e.useEffect)(function(){w(f.Z)}),(0,d.jsx)("div",{children:v?(0,d.jsx)("div",{onMouseMove:function(){w(f.Z)},children:b}):(0,d.jsxs)("div",{className:h().main,children:[(0,d.jsx)("div",{className:h().main,onMouseMove:function(a){q(!1),window.innerWidth<=a.clientX+50||k(a.clientX),window.innerHeight<=a.clientY+50||n(a.clientY),window.innerWidth<=a.clientX+50||window.innerHeight<=a.clientY+50||q(!0),t(a.target.nodeName)},onMouseLeave:function(){return q(!1)},children:b}),p&&(0,d.jsx)("div",{className:"".concat(h().cursor," ").concat(x()?h().active:""),style:{transform:"translateX(".concat(j,"px) translateY(").concat(m,"px)"),border:x()?"1px solid ".concat(g):"1px solid transparent",backgroundColor:x()?"transparent":g}})]})})};b.Z=i},9796:function(a,b,c){"use strict";var d=c(5893),e=c(7294),f=c(6662),g=function(a){var b=a.children,c=(0,e.useRef)(null),g=(0,e.useState)(0),h=g[0],i=g[1],j=(0,e.useState)(1/0),k=j[0],l=j[1],m=(0,e.useState)(!1),n=m[0],o=m[1],p=function(a,b){var c=a-b;return c>0?0:Math.abs(c)>k?-k:c};return(0,e.useEffect)(function(){if(o(f.Z),c.current){if(c.current.clientHeight<window.innerHeight){l(0);return}l(c.current?c.current.clientHeight-window.innerHeight:k)}}),(0,d.jsx)("div",{children:n?(0,d.jsx)("div",{onMouseMove:function(){o(f.Z)},children:b}):(0,d.jsx)("div",{style:{overflow:"hidden",position:"relative",height:"100vh"},onWheel:function(a){i(function(b){return p(b,a.deltaY)})},onMouseLeave:function(){return o(f.Z)},children:(0,d.jsx)("div",{ref:c,style:{position:"relative",transform:"translateY(".concat(h,"px)"),transition:"transform 1s ease",willChange:"transform"},onWheel:function(a){i(function(b){return p(b,a.deltaY)})},children:b})})})};b.Z=g},6662:function(a,b,c){"use strict";function d(){return 0!=window.navigator.maxTouchPoints}c.d(b,{Z:function(){return d}})},7613:function(a,b,c){"use strict";c.r(b);var d=c(5893),e=c(7294),f=c(5675),g=c.n(f),h=c(9650),i=c.n(h),j=c(5874),k=function(){var a=(0,e.useRef)(null),b=(0,e.useState)("/"),c=b[0],f=b[1],h=(0,e.useState)(0),k=h[0],l=h[1];return(0,e.useEffect)(function(){l(a.current.clientHeight)}),(0,e.useEffect)(function(){f(location.host.indexOf("git")+1?"/components/":"/")},[]),(0,d.jsxs)("div",{className:i().main,onWheel:function(){return l(a.current.clientHeight)},onMouseEnter:function(){return l(a.current.client)},onMouseMove:function(){return l(a.current.client)},children:[(0,d.jsx)(j.Z,{page:{components:"/","this page":"/pages/p"},color:"#fff"}),(0,d.jsx)("h1",{className:i().title,children:"Hello, world!"}),(0,d.jsxs)("div",{style:{display:"flex",overflow:"hidden",height:"calc(".concat(k,"px + 100px)")},children:[(0,d.jsx)("div",{className:i().img,children:(0,d.jsx)("div",{ref:a,children:(0,d.jsx)(g(),{width:"100%",height:"150%",layout:"responsive",src:c+"altinay-dinc-unsplash.jpg"})})}),(0,d.jsxs)("div",{className:i().descriptions,children:[(0,d.jsxs)("h3",{children:["Photo by ",(0,d.jsx)("a",{href:"https://unsplash.com/@adinc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Altınay Din\xe7"})," on ",(0,d.jsx)("a",{href:"https://unsplash.com/s/photos/night?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",children:"Unsplash"})]}),(0,d.jsx)("p",{className:i().description,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, assumenda?"}),(0,d.jsx)("p",{className:i().description,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor minima et voluptatum nesciunt mollitia nobis doloremque hic quidem iste perferendis!"}),(0,d.jsx)("p",{className:i().description,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rerum consequatur velit possimus ad labore, aliquid ipsum ea totam! Ratione blanditiis corporis provident placeat, assumenda non, incidunt ex obcaecati nam praesentium eius qui. Odit deleniti debitis animi perferendis veritatis perspiciatis."}),(0,d.jsx)("p",{className:i().description,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aperiam vero eaque corporis perspiciatis illo doloremque quidem nemo saepe sed."}),(0,d.jsx)("p",{className:i().description,children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, ea?"}),(0,d.jsx)("p",{className:i().description,children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur perspiciatis ex accusantium nesciunt vero laboriosam quas qui non rem laborum. Libero, velit! Est ipsum dolores, ipsam aliquid, cumque vitae ipsa fugit soluta, numquam recusandae alias perferendis possimus molestiae molestias dolor totam explicabo labore accusantium maiores at doloribus corporis. Totam, adipisci."}),(0,d.jsx)("p",{className:i().description,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates nostrum laudantium necessitatibus ipsa magnam debitis? In tempore reprehenderit nihil!"}),(0,d.jsx)("p",{className:i().description,children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat praesentium modi expedita, nemo delectus et minus corporis sit officia esse ipsum mollitia atque iste error, magni fuga eligendi? Corporis, enim."}),(0,d.jsx)("p",{className:i().description,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit."}),(0,d.jsx)("p",{className:i().description,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim animi harum, labore explicabo saepe eos ipsum debitis aliquam."}),(0,d.jsx)("p",{className:i().description,children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem quod sed unde, nemo voluptate aut accusamus blanditiis ea vitae deserunt nisi, quia molestias nihil consectetur adipisci maiores odio vero voluptates."}),(0,d.jsx)("p",{className:i().description,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quos voluptas pariatur deserunt quam quod debitis delectus a ipsam expedita."}),(0,d.jsx)("p",{className:i().description,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, excepturi esse in consequuntur repellendus blanditiis quam maiores laboriosam illo quaerat amet quas odio dolore quia!"}),(0,d.jsx)("p",{className:i().description,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatum rem sed aut id repellendus?"})]})]})]})};b.default=k},1213:function(a,b,c){"use strict";c.r(b);var d=c(5893),e=c(9796),f=c(1087),g=c(7613),h=function(){return(0,d.jsx)(f.Z,{color:"#fff",children:(0,d.jsx)(e.Z,{children:(0,d.jsx)("div",{style:{height:"100%",overflow:"auto",backgroundColor:"#141414"},children:(0,d.jsx)(g.default,{})})})})};b.default=h},7161:function(a){a.exports={main:"header_main__9Yt_Y",main_:"header_main___dm8VE",links:"header_links__e0mjL",underline:"header_underline__3wI2a"}},593:function(a){a.exports={main:"mouse_main__L5Zus",cursor:"mouse_cursor__5bzGd",scroll:"mouse_scroll__CYq3c",active:"mouse_active__B7dIo"}},9650:function(a){a.exports={main:"p_main__4tyZk",title:"p_title__ZEHqy",descriptions:"p_descriptions__ZXE4J",description:"p_description__W7Qch",show:"p_show__ifNpl",img:"p_img__Iu_dJ"}}},function(a){a.O(0,[664,897,774,888,179],function(){var b;return a(a.s=1897)}),_N_E=a.O()}])