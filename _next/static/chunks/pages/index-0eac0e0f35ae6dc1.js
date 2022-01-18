(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(e,n){var t;!function(){"use strict";var s={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)){if(t.length){var a=r.apply(null,t);a&&e.push(a)}}else if("object"===i)if(t.toString===Object.prototype.toString)for(var c in t)s.call(t,c)&&t[c]&&e.push(c);else e.push(t.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(t=function(){return r}.apply(n,[]))||(e.exports=t)}()},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6100)}])},2072:function(e,n,t){"use strict";var s=t(5666),r=t.n(s),i=t(5893),a=t(7294);function c(e,n,t,s,r,i,a){try{var c=e[i](a),l=c.value}catch(o){return void t(o)}c.done?n(l):Promise.resolve(l).then(s,r)}function l(e){return function(){var n=this,t=arguments;return new Promise((function(s,r){var i=e.apply(n,t);function a(e){c(i,s,r,a,l,"next",e)}function l(e){c(i,s,r,a,l,"throw",e)}a(void 0)}))}}n.Z=function(e){var n=e.slug,t=e.url,s=e.version,c=(0,a.useState)(!1),o=c[0],d=c[1],u=(0,a.useState)(!1),x=u[0],v=u[1];(0,a.useEffect)((function(){var e,t,r=null!==(t=null===(e=window.checkJuejinExtension)||void 0===e?void 0:e.call(window,n,s))&&void 0!==t?t:{},i=r.added,a=r.update;d(i),v(a)}),[n,s]);var f=l(r().mark((function e(i){var a,c;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.stopPropagation(),i.preventDefault(),e.next=5,null===(a=window.onAddJuejinExtension)||void 0===a?void 0:a.call(window,n,{url:t,version:s});case 5:"success"===(c=e.sent)?(d(!0),v(!1)):alert(c);case 7:case"end":return e.stop()}}),e)}))),h=l(r().mark((function e(t){var s,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopPropagation(),t.preventDefault(),e.next=5,null===(s=window.onRemoveJuejinExtension)||void 0===s?void 0:s.call(window,n);case 5:"success"===(i=e.sent)?d(!1):alert(i);case 7:case"end":return e.stop()}}),e)})));return o?(0,i.jsxs)("div",{className:"space-x-2",children:[x?(0,i.jsx)("button",{className:"btn btn-green text-xs",onClick:f,children:"\u66f4\u65b0"}):null,(0,i.jsx)("button",{className:"btn btn-red text-xs",onClick:h,children:"\u79fb\u9664"})]}):(0,i.jsx)("button",{className:"btn btn-green text-xs",onClick:f,children:"\u6dfb\u52a0"})}},6324:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var s=t(5893),r=t(9008),i=t(1664),a=function(e){e.children;return(0,s.jsxs)("header",{className:"w-full py-4 flex items-center",children:[(0,s.jsx)(i.default,{href:"/",passHref:!0,children:(0,s.jsxs)("div",{className:"h-8 flex items-center space-x-2 cursor-pointer",children:[(0,s.jsx)("div",{className:"font-medium",children:"\u6398\u91d1\u5c0f\u52a9\u624b"}),(0,s.jsx)("div",{className:"text-gray-400 text-xs",children:"\u6269\u5c55\u5e02\u573a"})]})}),(0,s.jsxs)("div",{className:"ml-auto space-x-1",children:[(0,s.jsx)("input",{type:"file",className:"w-0 h-0",id:"local-extension",onChange:function(e){var n=e.target.files;if(n){var t=n[0],s=new FileReader;s.addEventListener("load",(function(n){var s,r,i=null===(r=window.onAddLocalJuejinExtension)||void 0===r?void 0:r.call(window,t.name,null===(s=n.target)||void 0===s?void 0:s.result);console.log(i),e.target.value=""})),s.readAsText(t,"utf-8")}},accept:".js"}),(0,s.jsx)("label",{className:"btn text-xs border cursor-pointer",htmlFor:"local-extension",children:"\u6dfb\u52a0\u672c\u5730\u6269\u5c55"}),(0,s.jsx)("button",{className:"btn text-xs border",onClick:function(){var e;null===(e=window.onRemoveLocalJuejinExtension)||void 0===e||e.call(window)},children:"\u79fb\u9664\u672c\u5730\u6269\u5c55"}),(0,s.jsx)("button",{className:"btn text-xs border",onClick:function(){var e;null===(e=window.cleanExtensionDataCaches)||void 0===e||e.call(window)},children:"\u6e05\u9664\u7f13\u5b58\u6570\u636e"})]})]})},c=function(e){var n=e.children;return(0,s.jsxs)("div",{className:"max-w-4xl mx-auto w-full px-8 min-h-screen flex flex-col",children:[(0,s.jsxs)(r.default,{children:[(0,s.jsx)("title",{children:"\u6398\u91d1\u5c0f\u52a9\u624b | \u6269\u5c55\u5e02\u573a"}),(0,s.jsx)("meta",{name:"description",content:"\u4e3a\u6398\u91d1\u793e\u533a\u63d0\u4f9b\u7b2c\u4e09\u65b9\u529f\u80fd\u8f85\u52a9"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.png"})]}),(0,s.jsx)(a,{}),(0,s.jsx)("main",{className:"w-full flex-grow",children:n}),(0,s.jsx)("footer",{className:"pt-4 pb-6 text-center border-t text-gray-300 text-sm",children:(0,s.jsx)("a",{href:"https://juejin.cn/post/7027032269994852389",children:"\u5173\u4e8e\u6398\u91d1\u5c0f\u52a9\u624b"})})]})}},6100:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return o},default:function(){return d}});var s=t(5893),r=t(6324),i=t(2072),a=t(4184),c=t.n(a),l=function(e){var n=e.categories,t=e.classNames;return(0,s.jsxs)("div",{className:c()("sm:hidden md:block",t),children:[(0,s.jsx)("div",{className:"pb-4",children:(0,s.jsx)("label",{children:(0,s.jsx)("input",{type:"text",className:"w-full rounded px-4 py-2 truncate bg-black bg-opacity-5 outline-none",placeholder:"\u641c\u7d22"})})}),(0,s.jsxs)("nav",{children:[(0,s.jsx)("div",{className:"pt-1 pb-2 text-xs text-gray-400",children:"\u5206\u7c7b"}),(0,s.jsx)("ul",{children:n.map((function(e){var n=e.key,t=e.title;return(0,s.jsx)("li",{className:" text-gray-500 hover:bg-black hover:bg-opacity-5 rounded",children:(0,s.jsx)("a",{className:"block px-4 py-2",href:"#".concat(t),children:t})},n)}))})]})]})},o=!0,d=function(e){var n=e.categories;return(0,s.jsx)(r.Z,{children:(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)(l,{categories:n,classNames:"w-1/4 pr-10 pt-8"}),(0,s.jsx)("div",{className:"w-3/4 py-8 space-y-4",children:n.map((function(e){var n=e.key,t=e.title,r=e.items;return(0,s.jsxs)("section",{children:[(0,s.jsxs)("h4",{id:t,className:"text-gray-500 font-medium mb-4",children:[t," \u279c"]}),r.map((function(e){var n=e.slug,t=void 0===n?"":n,r=e.title,a=e.description,c=e.preview,l=e.rawURL,o=void 0===l?"":l,d=e.version,u=void 0===d?"":d;return(0,s.jsx)("div",{className:"rounded-md bg-white shadow my-4",children:(0,s.jsxs)("a",{href:"/extensions/".concat(t),className:"flex",children:[(0,s.jsx)("div",{className:"w-2/5 bg-cover bg-center bg-no-repeat",style:{backgroundImage:"url(".concat(c,")")}}),(0,s.jsxs)("div",{className:"px-6 py-4 space-y-3 w-3/5",children:[(0,s.jsx)("h5",{className:"font-bold",children:r}),(0,s.jsx)("div",{className:"text-xs text-gray-500",children:a}),(0,s.jsx)("div",{className:"text-right",children:(0,s.jsx)(i.Z,{slug:t,url:o,version:u})})]})]})},t)}))]},n)}))})]})})}}},function(e){e.O(0,[341,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);