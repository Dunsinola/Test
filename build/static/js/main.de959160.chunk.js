(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},79:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c(1),s=c.n(n),a=c(20),i=c.n(a),o=(c(48),c(41)),l=(c(49),c(5)),j=c(3),d=(c(50),c(4)),u=c(19),b=function(e){var t=e.click;Object(d.c)((function(e){return e.cart})).cartItems;return Object(r.jsxs)("nav",{className:"navbar",children:[Object(r.jsx)("div",{className:"navbar__logo",children:Object(r.jsxs)("h2",{children:["Dev",Object(r.jsx)("span",{className:"hire",children:"Hire"})]})}),Object(r.jsxs)("ul",{className:"navbar__links",children:[Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/",children:Object(r.jsxs)("span",{children:[Object(r.jsx)(u.b,{})," Home ",Object(r.jsx)("span",{})]})})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/cart",children:Object(r.jsxs)("span",{children:[Object(r.jsx)(u.a,{})," Favorites"]})})})]}),Object(r.jsxs)("div",{className:"hamburger__menu",onClick:t,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})]})},p=(c(57),function(e){var t=e.show,c=e.click,n=["sidedrawer"];Object(d.c)((function(e){return e.cart})).cartItems;return t&&n.push("show"),Object(r.jsx)("div",{className:n.join(" "),children:Object(r.jsxs)("ul",{className:"sidedrawer__links",onClick:c,children:[Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/cart",children:Object(r.jsx)("span",{children:"Favourites"})})}),Object(r.jsx)("li",{children:Object(r.jsx)(l.b,{to:"/",children:"Developers"})})]})})}),h=(c(58),function(e){var t=e.click;return e.show&&Object(r.jsx)("div",{className:"backdrop",onClick:t})}),O=(c(59),c(60),c(12)),m=c.n(O),f=c(18),v="ADD_TO_CART",x="REMOVE_FROM_CART",_=c(23),g=c.n(_),N=function(e,t,c,r,n){return function(){var r=Object(f.a)(m.a.mark((function r(s,a){return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:s({type:v,payload:{product:n,name:t,imageUrl:e,price:c}}),localStorage.setItem("cart",JSON.stringify(a().cart.cartItems));case 2:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()},y=function(e){var t=e.imageUrl,c=e.description,n=e.price,s=e.name,a=e.productId,i=Object(d.b)(),o=function(){i(N(t,c,n,0,a))};return Object(r.jsxs)("div",{className:"product",children:[Object(r.jsx)("img",{src:t,alt:s}),Object(r.jsxs)("div",{className:"product__info",children:[Object(r.jsxs)("div",{className:"like_group",children:[Object(r.jsx)("p",{className:"info__name",children:s}),Object(r.jsx)(u.a,{className:"like",onClick:o})]}),Object(r.jsxs)("p",{className:"info__description",children:[c.substring(0,200),"..."]}),Object(r.jsx)("p",{className:"info__price",children:n}),Object(r.jsx)(l.b,{onClick:o,className:"info__button",children:"Hire"})]})]})};c(79);function I(){return Object(r.jsxs)("div",{className:"footer",children:[Object(r.jsx)("div",{className:"copy",children:Object(r.jsx)("p",{children:"22 DivHire"})}),Object(r.jsx)("div",{className:"lang",children:Object(r.jsx)("form",{children:Object(r.jsxs)("select",{id:"Currency",name:"currency",children:[Object(r.jsx)("option",{value:"volvo",children:"Naira"}),Object(r.jsx)("option",{value:"saab",children:"pounds"}),Object(r.jsx)("option",{value:"fiat",children:"yen"}),Object(r.jsx)("option",{value:"audi",children:"Audi"})]})})})]})}var T="GET_PRODUCTS_REQUEST",k="GET_PRODUCTS_SUCCESS",S="GET_PRODUCTS_FAIL",C="GET_PRODUCT_DETAILS_REQUEST",w="GET_PRODUCT_DETAILS_SUCCESS",E="GET_PRODUCT_DETAILS_FAIL",D="GET_PRODUCT_DETAILS_RESET",P=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.getProducts})),c=t.products,s=t.loading,a=t.error;return console.log(c),Object(n.useEffect)((function(){e(function(){var e=Object(f.a)(m.a.mark((function e(t){var c,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:T}),e.next=4,g.a.get("https://api.terawork.com/service-categories/sellers-services/computer-software-development");case 4:c=e.sent,r=(r=c.data).data.service_search_results.hits,t({type:k,payload:r}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),t({type:S,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(r.jsxs)("div",{className:"homescreen",children:[Object(r.jsx)("h2",{className:"homescreen__title",children:"Hire Top Developers"}),Object(r.jsx)("div",{className:"homescreen__products",children:s?Object(r.jsx)("h2",{children:"Loading..."}):a?Object(r.jsx)("h2",{children:a}):c.map((function(e){return Object(r.jsx)(y,{name:e._source.display_name,description:e._source.services_overview_title,price:e._source.starting_from,imageUrl:e._source.service_photo,avatar:e._source.avatar,productId:e._id},e._id)}))}),Object(r.jsx)(I,{})]})},R=(c(80),function(e){var t=e.match,c=e.history,s=Object(d.b)(),a=Object(d.c)((function(e){return e.getProductDetails})),i=a.loading,o=a.error,l=a.product;console.log(l[0]._id),Object(n.useEffect)((function(){var e;l&&t.params.id!==l[0]._id&&s((e=t.params.id,function(){var t=Object(f.a)(m.a.mark((function t(c){var r,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:C}),t.next=4,g.a.get("https://api.terawork.com/service-categories/sellers-services/computer-software-development");case 4:r=t.sent,n=(n=r.data).data.service_search_results.hits.filter((function(t){return t._id===e})),console.log(n),c({type:w,payload:n}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),c({type:E,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()))}),[s,t,l]);return Object(r.jsx)("div",{className:"productscreen",children:i?Object(r.jsx)("h2",{children:"Loading..."}):o?Object(r.jsx)("h2",{children:o}):Object(r.jsxs)(r.Fragment,{children:[console.log(l),Object(r.jsxs)("div",{className:"productscreen__left",children:[Object(r.jsx)("div",{className:"left__image",children:Object(r.jsx)("img",{src:[l[0]._source.avatar],alt:[l[0].name]})}),Object(r.jsxs)("div",{className:"left__info",children:[Object(r.jsx)("p",{className:"left__name",children:[l[0].name]}),Object(r.jsxs)("p",{children:["Price: ",[l[0]._source.starting_from]]}),Object(r.jsxs)("p",{children:["Description: ",[l[0]._source.services_overview_title]]})]})]}),Object(r.jsx)("div",{className:"productscreen__right",children:Object(r.jsxs)("div",{className:"right__info",children:[Object(r.jsxs)("p",{children:["Price:",Object(r.jsx)("span",{children:[l[0]._source.starting_from]})]}),Object(r.jsx)("p",{children:Object(r.jsx)("button",{type:"button",onClick:function(){s(N(l[0]._id,l[0]._source.service_photo,l[0].name)),c.push("/cart")},children:"Add To Favourite"})})]})})]})})}),U=(c(81),c(82),function(e){var t=e.item,c=(e.qtyChangeHandler,e.removeHandler);return Object(r.jsxs)("div",{className:"cartitem",children:[Object(r.jsx)("div",{className:"cartitem__image",children:Object(r.jsx)("img",{src:t.imageUrl,alt:t.name})}),Object(r.jsx)(l.b,{to:"/product/".concat(t.product),className:"cartItem__name",children:Object(r.jsx)("p",{children:t.name})}),Object(r.jsx)("p",{className:"cartitem__price",children:t.price}),Object(r.jsx)("button",{className:"cartItem__deleteBtn",onClick:function(){return c(t.product)},children:Object(r.jsx)("i",{className:"fas fa-trash"})})]})}),F=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.cart})).cartItems;Object(n.useEffect)((function(){}),[]);var c=function(t,c){e(N(t,c))},s=function(t){e(function(e){return function(t,c){t({type:x,payload:e}),localStorage.setItem("cart",JSON.stringify(c().cart.cartItems))}}(t))};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"cartscreen",children:Object(r.jsxs)("div",{className:"cartscreen__left",children:[Object(r.jsx)("h2",{children:"Favourites"}),0===t.length?Object(r.jsxs)("div",{children:["You have no Favourites yet",Object(r.jsx)(l.b,{to:"/",children:"Go Back"})]}):t.map((function(e){return Object(r.jsx)(U,{item:e,qtyChangeHandler:c,removeHandler:s},e.product)}))]})})})};var A=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],s=t[1];return Object(r.jsxs)(l.a,{children:[Object(r.jsx)(b,{click:function(){return s(!0)}}),Object(r.jsx)(p,{show:c,click:function(){return s(!1)}}),Object(r.jsx)(h,{show:c,click:function(){return s(!1)}}),Object(r.jsx)("main",{className:"app",children:Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{exact:!0,path:"/",component:P}),Object(r.jsx)(j.a,{exact:!0,path:"/product/:id",component:R}),Object(r.jsx)(j.a,{exact:!0,path:"/cart",component:F})]})})]})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,84)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),r(e),n(e),s(e),a(e)}))},H=c(13),G=c(39),J=c(40),B=c(42),M=c(14),q={cartItems:[]},Q=Object(H.combineReducers)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:var c=t.payload,r=e.cartItems.find((function(e){return e.product===c.product}));return r?Object(M.a)(Object(M.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===r.product?c:e}))}):Object(M.a)(Object(M.a)({},e),{},{cartItems:[].concat(Object(B.a)(e.cartItems),[c])});case x:return Object(M.a)(Object(M.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});default:return e}},getProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return{loading:!0,products:[]};case k:return{products:t.payload,loading:!1};case S:return{loading:!1,error:t.payload};default:return e}},getProductDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return{loading:!0};case w:return{loading:!1,product:t.payload};case E:return{loading:!1,error:t.payload};case D:return{product:{}};default:return e}}}),V=[G.a],W={cart:{cartItems:localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]}},Y=Object(H.createStore)(Q,W,Object(J.composeWithDevTools)(H.applyMiddleware.apply(void 0,V)));i.a.render(Object(r.jsx)(d.a,{store:Y,children:Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(A,{})})}),document.getElementById("root")),L()}},[[83,1,2]]]);
//# sourceMappingURL=main.de959160.chunk.js.map