(this["webpackJsonpreact-router-real-example"]=this["webpackJsonpreact-router-real-example"]||[]).push([[5],{69:function(e,t,c){e.exports={item:"QuoteItem_item__1K8hd"}},70:function(e,t,c){e.exports={list:"QuoteList_list__3Qp_v",sorting:"QuoteList_sorting__394rq"}},71:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__vwy2K"}},74:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(13),r=c(29),i=c(2),o=c(69),a=c.n(o),u=c(12),j=c(1),d=function(e){return Object(j.jsxs)("li",{className:a.a.item,children:[Object(j.jsxs)("figure",{children:[Object(j.jsx)("blockquote",{children:Object(j.jsx)("p",{children:e.text})}),Object(j.jsx)("figcaption",{children:e.author})]}),Object(j.jsx)(u.b,{to:"/quotes/".concat(e.id),className:"btn",children:"View Fullscreen"})]})},l=c(70),b=c.n(l);var h=function(e){var t,c,s=Object(i.h)(),o=Object(i.i)(),a="asc"===new URLSearchParams(o.search).get("sort"),u=(t=Object(r.a)(e.quotes),c=a,t.sort((function(e,t){return c?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)("div",{className:b.a.sorting,children:Object(j.jsxs)("button",{onClick:function(){s.push({pathname:o.pathname,search:"?sort=".concat(a?"desc":"asc")})},children:["Sort ",a?"Descending":"Ascending"]})}),Object(j.jsx)("ul",{className:b.a.list,children:u.map((function(e){return Object(j.jsx)(d,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},x=c(71),O=c.n(x),m=function(){return Object(j.jsxs)("div",{className:O.a.noquotes,children:[Object(j.jsx)("p",{children:"No quotes found!"}),Object(j.jsx)(u.b,{to:"new-quote",className:"btn",children:"Add a Quote"})]})},p=c(25);t.default=function(){var e=Object(s.c)((function(e){return e.quote}));return e.isLoading?Object(j.jsx)("div",{className:"centered",children:Object(j.jsx)(p.a,{})}):0===e.items.length?Object(j.jsx)(m,{}):Object(j.jsx)(n.Fragment,{children:Object(j.jsx)(h,{quotes:e.items})})}}}]);
//# sourceMappingURL=5.a2d5259b.chunk.js.map