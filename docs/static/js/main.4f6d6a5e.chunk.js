(this["webpackJsonpreact-router-real-example"]=this["webpackJsonpreact-router-real-example"]||[]).push([[0],{14:function(e,t,n){e.exports={form:"QuoteForm_form__3V-44",loading:"QuoteForm_loading__3Yco7",control:"QuoteForm_control__1mdE9",actions:"QuoteForm_actions__3azpZ"}},15:function(e,t,n){e.exports={header:"MainNavigation_header__9-5uS",logo:"MainNavigation_logo__3lmdX",nav:"MainNavigation_nav__1YK1H",active:"MainNavigation_active__3WZgR"}},23:function(e,t,n){e.exports={form:"NewCommentForm_form__27osS",loading:"NewCommentForm_loading__3QTH_",control:"NewCommentForm_control__1dual",actions:"NewCommentForm_actions__fEprS"}},29:function(e,t,n){e.exports={list:"QuoteList_list__3Qp_v",sorting:"QuoteList_sorting__394rq"}},33:function(e,t,n){e.exports={item:"QuoteItem_item__1K8hd"}},35:function(e,t,n){e.exports={noquotes:"NoQuotesFound_noquotes__vwy2K"}},36:function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__TFYC1"}},37:function(e,t,n){e.exports={card:"Card_card__3fv8Y"}},38:function(e,t,n){e.exports={item:"CommentItem_item__17HnR"}},39:function(e,t,n){e.exports={comments:"CommentsList_comments__E6Aje"}},40:function(e,t,n){e.exports={comments:"Comments_comments__1Xokh"}},41:function(e,t,n){e.exports={quote:"HighlightedQuote_quote__1_mWv"}},42:function(e,t,n){e.exports={main:"Layout_main__2YrMH"}},51:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(19),r=n.n(c),o=n(5),s=n(4),a=(n(51),n(1)),i=n(2),u=n(11),d=n.n(u),l=n(18),j=n(22),m=n(21),b=Object(m.b)({name:"quotes",initialState:{items:[],changed:!1,isLoading:!1},reducers:{startLoadingQuotes:function(e){e.isLoading=!0},endLoadingQuotes:function(e){e.isLoading=!1},replaceQuotes:function(e,t){e.items=t.payload.items},addQuote:function(e,t){var n=t.payload,c=null===n||void 0===n?void 0:n.id;if(e.changed=!0,c){var r=e.items.find((function(e){return String(e.id)===c})),o={id:Math.round(1e3*Math.random()),text:n.comment};(null===r||void 0===r?void 0:r.comments)?r.comments=[].concat(Object(j.a)(r.comments),[o]):r.comments=[o]}else e.items.push({id:e.items.length>0?e.items[e.items.length-1].id+1:1,author:n.author,text:n.text,comments:[]})},deleteQuote:function(e,t){var n=e.items.filter((function(e){return String(e.id)!==t.payload}));e.changed=!0,e.items=n}}}),h=b.actions,x=b.reducer,f=n(10),O=n.n(f),p="https://react-http-ar-default-rtdb.firebaseio.com/quotes.json",v=n(33),g=n.n(v),_=n(0),N=function(e){return Object(_.jsxs)("li",{className:g.a.item,children:[Object(_.jsxs)("figure",{children:[Object(_.jsx)("blockquote",{children:Object(_.jsx)("p",{children:e.text})}),Object(_.jsx)("figcaption",{children:e.author})]}),Object(_.jsx)(o.b,{to:"/quotes/".concat(e.id),className:"btn",children:"View Fullscreen"})]})},q=n(29),Q=n.n(q);var C=function(e){var t,n,c=Object(i.h)(),r=Object(i.i)(),o="asc"===new URLSearchParams(r.search).get("sort"),s=(t=Object(j.a)(e.quotes),n=o,t.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(_.jsxs)(a.Fragment,{children:[Object(_.jsx)("div",{className:Q.a.sorting,children:Object(_.jsxs)("button",{onClick:function(){c.push({pathname:r.pathname,search:"?sort=".concat(o?"desc":"asc")})},children:["Sort ",o?"Descending":"Ascending"]})}),Object(_.jsx)("ul",{className:Q.a.list,children:s.map((function(e){return Object(_.jsx)(N,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},w=n(35),F=n.n(w),S=function(){return Object(_.jsxs)("div",{className:F.a.noquotes,children:[Object(_.jsx)("p",{children:"No quotes found!"}),Object(_.jsx)(o.b,{to:"new-quote",className:"btn",children:"Add a Quote"})]})},I=n(36),k=n.n(I),L=function(){return Object(_.jsx)("div",{className:k.a.spinner})},y=function(){var e=Object(s.c)((function(e){return e.quote}));return e.isLoading?Object(_.jsx)("div",{className:"centered",children:Object(_.jsx)(L,{})}):0===e.items.length?Object(_.jsx)(S,{}):Object(_.jsx)(a.Fragment,{children:Object(_.jsx)(C,{quotes:e.items})})},A=n(12),E=n(37),H=n.n(E),B=function(e){return Object(_.jsx)("div",{className:H.a.card,children:e.children})},Y=n(14),M=n.n(Y),V=function(e){var t=Object(a.useState)(""),n=Object(A.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(!1),s=Object(A.a)(o,2),i=s[0],u=s[1],d=e(c);return{value:c,hasError:!d&&i,isValid:d,reset:function(){r("")},onChangeInputHandler:function(e){r(e.target.value)},onBlurInputHandler:function(){u(!0)}}},D=function(e){var t=Object(a.useState)(!1),n=Object(A.a)(t,2),c=n[0],r=n[1],o=V((function(e){return""!==e.trim()})),s=o.value,u=o.isValid,d=o.hasError,l=o.onChangeInputHandler,j=o.onBlurInputHandler,m=V((function(e){return""!==e.trim()})),b=m.value,h=m.isValid,x=m.hasError,f=m.onChangeInputHandler,p=m.onBlurInputHandler,v=!1;return u&&h&&(v=!0),Object(_.jsxs)(a.Fragment,{children:[Object(_.jsx)(i.a,{when:c,message:function(e){return"Are you sure to leave from this page?, You will lost all information entered"}}),Object(_.jsx)(B,{children:Object(_.jsxs)("form",{onFocus:function(){r(!0)},className:M.a.form,onSubmit:function(t){if(t.preventDefault(),!c)return v?void e.onAddQuote({author:s,text:b}):(p(),j(),void O.a.fire("Incompleted Information","Your information is incompleted, please complete the form.","warning"))},children:[e.isLoading&&Object(_.jsx)("div",{className:M.a.loading,children:Object(_.jsx)(L,{})}),Object(_.jsxs)("div",{className:"".concat(M.a.control," ").concat(d?"invalid":""),children:[Object(_.jsx)("label",{htmlFor:"author",children:"Author"}),Object(_.jsx)("input",{id:"author",type:"text",value:s,onBlur:j,onChange:l}),d&&Object(_.jsx)("p",{children:"Author name is not valid*"})]}),Object(_.jsxs)("div",{className:"".concat(M.a.control," ").concat(x?"invalid":""),children:[Object(_.jsx)("label",{htmlFor:"text",children:"Text"}),Object(_.jsx)("textarea",{id:"text",rows:"5",value:b,onChange:f,onBlur:p,style:{resize:"none"}}),x&&Object(_.jsx)("p",{children:"Text is not valid*"})]}),Object(_.jsx)("div",{className:M.a.actions,children:Object(_.jsx)("button",{onClick:function(){r(!1)},type:"submit",className:"btn",children:"Add Quote"})})]})})]})},T=function(){var e=Object(s.b)(),t=Object(i.h)();return Object(_.jsx)(a.Fragment,{children:Object(_.jsx)(D,{onAddQuote:function(n){e(h.addQuote(n)),O.a.fire("Succes","Your Quote has created!","success"),t.push("/quotes")}})})},U=n(38),J=n.n(U),K=function(e){return Object(_.jsx)("li",{className:J.a.item,children:Object(_.jsx)("p",{children:e.text})})},P=n(39),R=n.n(P),W=function(e){return Object(_.jsx)("ul",{className:R.a.comments,children:e.comments.map((function(e){return Object(_.jsx)(K,{text:e.text},e.id)}))})},z=n(40),X=n.n(z),Z=n(23),G=n.n(Z),$=function(e){var t=Object(s.b)(),n=Object(i.j)(),c=V((function(e){return""!==e})),r=c.value,o=c.hasError,a=c.isValid,u=c.onChangeInputHandler,d=c.onBlurInputHandler,l=!1;a&&(l=!0);var j=function(c){c.preventDefault(),l&&(t(h.addQuote({id:n.quoteId,comment:r})),O.a.fire("Success","Comment created","success"),e.setIsAddingComment(!1))};return Object(_.jsxs)("form",{className:G.a.form,onSubmit:j,children:[Object(_.jsxs)("div",{className:"".concat(G.a.control," ").concat(o?"invalid":""),onSubmit:j,children:[Object(_.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(_.jsx)("textarea",{id:"comment",rows:"5",value:r,onBlur:d,onChange:u})]}),Object(_.jsx)("div",{className:G.a.actions,children:Object(_.jsx)("button",{className:"btn",children:"Add Comment"})})]})},ee=function(){var e,t=Object(a.useState)(!1),n=Object(A.a)(t,2),c=n[0],r=n[1],o=Object(i.j)().quoteId,u=Object(s.c)((function(e){return e.quote.items})).find((function(e){return String(e.id)===o}));return Object(_.jsxs)("section",{className:X.a.comments,children:[Object(_.jsx)("h2",{children:"User Comments"}),!c&&Object(_.jsx)("button",{className:"btn",onClick:function(){r(!0)},children:"Add a Comment"}),c&&Object(_.jsx)($,{setIsAddingComment:r}),(null===u||void 0===u||null===(e=u.comments)||void 0===e?void 0:e.length)>0?Object(_.jsx)(W,{comments:null===u||void 0===u?void 0:u.comments}):Object(_.jsx)("p",{children:"No Comments..."})]})},te=n(41),ne=n.n(te),ce=function(e){return Object(_.jsx)(a.Fragment,{children:Object(_.jsxs)("figure",{className:ne.a.quote,children:[Object(_.jsx)("p",{children:e.text}),Object(_.jsxs)("figcaption",{children:["- ",e.author]})]})})},re=function(){var e=Object(i.k)(),t=Object(i.j)(),n=Object(s.c)((function(e){return e.quote})),c=Object(i.h)(),r=Object(s.b)(),u=n.items.find((function(e){return String(e.id)===t.quoteId}));if(n.isLoading)return Object(_.jsx)("div",{className:"centered",children:Object(_.jsx)(L,{})});if(!u)return Object(_.jsx)("h1",{className:"centered",children:"No Quote Find"});return Object(_.jsxs)(a.Fragment,{children:[Object(_.jsx)(o.b,{to:"/quotes",className:"btn btn-outline",children:"\u21a9 Quotes"}),Object(_.jsx)(ce,{author:null===u||void 0===u?void 0:u.author,text:null===u||void 0===u?void 0:u.text}),Object(_.jsx)(i.c,{path:e.path,exact:!0,children:Object(_.jsxs)("div",{className:"options",children:[Object(_.jsx)("button",{onClick:function(){O.a.fire({title:"Delete quote",text:"Are you sure to delete this quote?",icon:"warning",showCancelButton:!0,showConfirmButton:!0}).then((function(e){e.isConfirmed&&(r(h.deleteQuote(t.quoteId)),O.a.fire("Success","Your quote has deleted","success"),c.push("/quotes"))}))},className:"btn btn-red",children:"Delete Quote"}),Object(_.jsx)(o.b,{to:"".concat(e.url,"/comments"),className:"btn btn-comments",children:"Load comments"})]})}),Object(_.jsx)(i.c,{path:"".concat(e.path,"/comments"),children:Object(_.jsx)(ee,{})})]})},oe=function(){return Object(_.jsx)("div",{className:"centered",children:Object(_.jsx)("p",{children:"Page not Found"})})},se=n(27),ae=n(42),ie=n.n(ae),ue=n(15),de=n.n(ue),le=function(){return Object(_.jsxs)("main",{className:de.a.header,children:[Object(_.jsx)("h2",{className:de.a.logo,children:"Graet Quotes"}),Object(_.jsx)("nav",{className:de.a.nav,children:Object(_.jsxs)("ul",{children:[Object(_.jsx)("li",{children:Object(_.jsx)(o.c,{to:"/quotes",activeClassName:de.a.active,children:"All Quotes"})}),Object(_.jsx)("li",{children:Object(_.jsx)(o.c,{to:"/new-quote",activeClassName:de.a.active,children:"Add a Quote"})})]})})]})},je=function(e){return Object(_.jsxs)(se.Fragment,{children:[Object(_.jsx)(le,{}),Object(_.jsx)("main",{className:ie.a.main,children:e.children})]})},me=!0;var be=function(){var e=Object(s.c)((function(e){return e.quote})),t=e.changed,n=e.items,c=Object(s.b)();return Object(a.useEffect)((function(){c(function(){var e=Object(l.a)(d.a.mark((function e(t){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(){var e=Object(l.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(p);case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("We have error getting the data! :(");case 5:return e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t(h.startLoadingQuotes()),e.prev=2,e.next=5,n();case 5:c=e.sent,t(h.replaceQuotes({items:(null===c||void 0===c?void 0:c.items)||[]})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),O.a.fire("Error!","Error: "+e.t0.message,"error");case 12:t(h.endLoadingQuotes());case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}())}),[c]),Object(a.useEffect)((function(){var e;me?me=!1:t&&c((e=n,function(){var t=Object(l.a)(d.a.mark((function t(n){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(){var t=Object(l.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(p,{method:"PUT",body:JSON.stringify({items:e})});case 2:if(t.sent.ok){t.next=5;break}throw new Error("Error getting the data");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n(h.startLoadingQuotes()),t.prev=2,t.next=5,c();case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),O.a.fire("Ups..","Error: "+t.t0.message,"error");case 10:n(h.endLoadingQuotes());case 11:case"end":return t.stop()}}),t,null,[[2,7]])})));return function(e){return t.apply(this,arguments)}}()))}),[c,t,n]),Object(_.jsx)("div",{children:Object(_.jsx)(je,{children:Object(_.jsxs)(i.e,{children:[Object(_.jsx)(i.c,{path:"/",exact:!0,children:Object(_.jsx)(i.b,{to:"/quotes"})}),Object(_.jsx)(i.c,{path:"/quotes",exact:!0,children:Object(_.jsx)(y,{})}),Object(_.jsx)(i.c,{path:"/quotes/:quoteId",children:Object(_.jsx)(re,{})}),Object(_.jsx)(i.c,{path:"/new-quote",children:Object(_.jsx)(T,{})}),Object(_.jsx)(i.c,{path:"*",children:Object(_.jsx)(oe,{})})]})})})},he=Object(m.a)({reducer:{quote:x}});r.a.render(Object(_.jsx)(o.a,{children:Object(_.jsx)(s.a,{store:he,children:Object(_.jsx)(be,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.4f6d6a5e.chunk.js.map