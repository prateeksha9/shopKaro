(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[0],{26:function(t,e,c){},34:function(t,e,c){"use strict";c.r(e);var n=c(1),r=c.n(n),s=c(13),i=c.n(s),o=(c(26),c(8)),a=c(2),d="UPDATE_POSTS",j="SORT_POSTS",l="ADD_PRODUCT",u="DELETE_PRODUCT",b="EDIT_PRODUCT",p="ADD_TO_CART",h="REMOVE_FROM_CART",O="INCREASE_QUANTITY",m="DECREASE_QUANTITY";function x(t){var e=[];for(var c in t){var n=encodeURIComponent(c),r=encodeURIComponent(t[c]);e.push(n+"="+r)}return e.join("&")}function f(){return function(t){fetch("https://my-json-server.typicode.com/prateeksha9/server/products").then((function(t){return t.json()})).then((function(e){console.log(e),t({type:d,posts:e})}))}}function g(t,e,c,n,r){return function(r){var s=1+99*Math.random();fetch("https://my-json-server.typicode.com/prateeksha9/server/products",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:x({id:s,name:t,brand:e,price:c,description:n,img:null})}).then((function(t){return t.json()})).then((function(t){console.log("success"),r({type:l,posts:t})}))}}function v(t){return function(e){fetch("https://my-json-server.typicode.com/prateeksha9/server/products/".concat(t),{method:"DELETE"}).then((function(t){return t.json()})).then((function(c){console.log("success"),e(function(t){return{type:u,id:t}}(t))}))}}function y(t,e){return{type:b,id:t,description:e}}var k=c(3),N=c(0);var P=function(t){var e=t.posts;return console.log(e,"fromHome"),Object(N.jsx)("div",{children:e.map((function(t){return Object(N.jsx)(A,{post:t},t.id)}))})},C=c(4);var A=function(t){var e=t.post,c=e.name,r=e.brand,s=e.description,i=e.img,o=e.price,a=e.id,d=Object(n.useState)(!1),j=Object(C.a)(d,2),l=j[0],u=j[1],b=Object(n.useState)(""),h=Object(C.a)(b,2),O=h[0],m=h[1],x=Object(k.b)();return Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card",children:[Object(N.jsxs)("div",{className:"details",children:[Object(N.jsx)("div",{className:"cardLeft",children:"null"===i?Object(N.jsx)("img",{src:"https://us.123rf.com/450wm/blankstock/blankstock1904/blankstock190400607/119982741-no-or-stop-attach-document-icon-information-file-sign-paper-page-concept-symbol-upload-data-prohibit.jpg?ver=6",alt:"ProductPic"}):Object(N.jsx)("img",{src:i,alt:"ProductPic"})}),Object(N.jsxs)("div",{className:"cardHead",children:[Object(N.jsx)("h2",{children:c}),Object(N.jsxs)("span",{children:["Brand: ",r,Object(N.jsx)("br",{})]}),Object(N.jsxs)("span",{children:["Price: ",o]})]})]}),Object(N.jsxs)("div",{className:"cardDescription",children:[Object(N.jsx)("h3",{children:"Description:"}),l?Object(N.jsx)("input",{type:"text",placeholder:s,onChange:function(t){return function(t){m(t.target.value)}(t)}}):Object(N.jsx)("span",{children:s})]}),Object(N.jsxs)("div",{className:"cardAction",children:[Object(N.jsx)("button",{onClick:function(){x(function(t){return{type:p,newIteminCart:t}}({id:a,name:c,brand:r,img:i,price:o,quantity:1}))},children:Object(N.jsx)("img",{src:"https://cdn2.iconfinder.com/data/icons/e-commerce-46/64/x-07-512.png",alt:"add-to-cart"})}),l?Object(N.jsx)("button",{className:"buttonDes",onClick:function(){return u(!1),void x(y(a,O))},children:"Done"}):Object(N.jsx)("button",{onClick:function(){u(!0)},children:Object(N.jsx)("img",{src:"https://st2.depositphotos.com/8659352/45860/v/380/depositphotos_458607942-stock-illustration-pencil-logo-vector-symbol.jpg",alt:"edit-logo"})}),Object(N.jsx)("button",{onClick:function(){x(v(a))},children:Object(N.jsx)("img",{src:"https://w7.pngwing.com/pngs/228/54/png-transparent-logo-trademark-brand-delete-button-miscellaneous-text-trademark.png",alt:"delete"})})]})]})})};var S=function(){var t=Object(k.b)(),e=Object(k.c)((function(t){return t.cart})),c=Object(n.useState)(!1),r=Object(C.a)(c,2),s=r[0],i=r[1];return Object(N.jsx)("div",{className:"nav",children:Object(N.jsxs)("div",{className:"navLeft",children:[Object(N.jsx)("div",{children:Object(N.jsx)(o.b,{to:"/",children:Object(N.jsx)("img",{className:"logo",src:"https://freevector-images.s3.amazonaws.com/uploads/vector/preview/36682/36682.png",alt:"Logo"})})}),Object(N.jsxs)("div",{className:"navAction",children:[Object(N.jsx)(o.b,{to:"/addProduct",children:Object(N.jsx)("button",{children:"Add Product"})}),Object(N.jsx)("button",{onClick:function(){s?(i(!1),t(f())):(i(!0),t((console.log("sortPosts reached"),{type:j})))},children:s?"Sorted":"Sort"})]}),Object(N.jsxs)("div",{children:[Object(N.jsx)(o.b,{to:"/cart",children:Object(N.jsx)("img",{className:"cart",src:"https://st2.depositphotos.com/3665639/7450/v/380/depositphotos_74500663-stock-illustration-pictograph-of-shopping-cart.jpg",alt:"cart"})}),Object(N.jsx)("div",{className:"cartLength",children:e.length})]})]})})};var D=function(){var t=Object(n.useState)(""),e=Object(C.a)(t,2),c=e[0],r=e[1],s=Object(n.useState)(""),i=Object(C.a)(s,2),a=i[0],d=i[1],j=Object(n.useState)(0),l=Object(C.a)(j,2),u=l[0],b=l[1],p=Object(n.useState)(!1),h=Object(C.a)(p,2),O=h[0],m=h[1],x=Object(n.useState)(""),f=Object(C.a)(x,2),v=f[0],y=f[1],P=Object(k.b)(),A=function(){m(!1),r(""),d(""),b(0),m(""),y(""),document.getElementById("addProductForm").reset()};return Object(N.jsxs)("div",{className:"addProduct",children:[Object(N.jsxs)("form",{id:"addProductForm",children:[Object(N.jsx)("input",{type:"text",placeholder:"Product Name",onChange:function(t){r(t.target.value)},required:!0}),Object(N.jsx)("input",{type:"text",placeholder:"Brand",onChange:function(t){d(t.target.value)},required:!0}),Object(N.jsx)("input",{type:"number",placeholder:"Price",onChange:function(t){b(t.target.value)},required:!0}),Object(N.jsx)("input",{type:"text",placeholder:"Description",onChange:function(t){y(t.target.value)},required:!0})]}),O?Object(N.jsxs)("div",{className:"afterAdded",children:[Object(N.jsx)("span",{children:"Product Added Successfully!"}),Object(N.jsxs)("div",{className:"afterAddedAction",children:[Object(N.jsx)(o.b,{to:"/addProduct",onClick:A,children:Object(N.jsx)("button",{children:"Add Another Product"})}),Object(N.jsx)(o.b,{to:"/",children:Object(N.jsx)("button",{onClick:A,children:"Back To Home"})})]})]}):Object(N.jsx)("button",{onClick:function(){P(g(c,a,u,v)),m(!0)},children:"Add Product"})]})};var T=function(){var t=Object(k.c)((function(t){return t.cart})),e=0;return t.map((function(t){return e+=t.quantity*t.price})),console.log(t),Object(N.jsx)("div",{children:0===t.length?Object(N.jsx)("div",{className:"afterAdded ",children:Object(N.jsx)("span",{children:"Your cart is Empty"})}):Object(N.jsxs)("div",{children:[t.map((function(t){return Object(N.jsx)(I,{item:t},t.id)})),Object(N.jsx)("div",{className:"total",children:Object(N.jsxs)("h2",{children:["Total Cost:",e]})})]})})};var I=function(t){var e=t.item,c=e.name,n=e.brand,r=e.img,s=e.price,i=e.id,o=Object(k.b)(),a=function(){o(function(t){return{type:h,id:t}}(i))},d=function(){o(function(t){return{type:O,id:t}}(i))},j=function(){o(function(t){return{type:m,id:t}}(i))};return Object(N.jsx)("div",{children:Object(N.jsxs)("div",{className:"card",children:[Object(N.jsxs)("div",{className:"details",children:[Object(N.jsx)("div",{className:"cardLeft",children:"null"===r?Object(N.jsx)("img",{src:"https://us.123rf.com/450wm/blankstock/blankstock1904/blankstock190400607/119982741-no-or-stop-attach-document-icon-information-file-sign-paper-page-concept-symbol-upload-data-prohibit.jpg?ver=6",alt:"ProductPic"}):Object(N.jsx)("img",{src:r,alt:"ProductPic"})}),Object(N.jsxs)("div",{className:"cardHead",children:[Object(N.jsx)("h2",{children:c}),Object(N.jsxs)("span",{children:["Brand: ",n,Object(N.jsx)("br",{})]}),Object(N.jsxs)("span",{children:["Quantity: ",t.item.quantity,Object(N.jsx)("br",{})]}),Object(N.jsxs)("span",{children:["Price: ",s]})]})]}),Object(N.jsxs)("div",{className:"cardAction",children:[Object(N.jsx)("button",{onClick:function(){return d()},children:Object(N.jsx)("img",{src:"https://banner2.cleanpng.com/20180409/gye/kisspng-computer-icons-symbol-icon-design-google-plus-5acb0027158c40.8641644415232532870883.jpg",alt:"increase"})}),Object(N.jsx)("button",{onClick:function(){return j()},children:Object(N.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3c2ctrlI2DuGydazN6VxYqJhKhxGDNLGE5sDZ0IOBk1gBepiaLaxhZNPZkdHieZKW5S4&usqp=CAU",alt:"decrease"})}),Object(N.jsx)("button",{onClick:function(){return a()},children:Object(N.jsx)("img",{src:"https://w7.pngwing.com/pngs/228/54/png-transparent-logo-trademark-brand-delete-button-miscellaneous-text-trademark.png",alt:"delete"})})]})]})})};var w=function(t){return Object(N.jsx)("div",{children:Object(N.jsx)("h1",{children:"No Page Found"})})};var E=function(t){return Object(k.c)((function(t){return t.posts})),Object(N.jsx)("div",{children:" Product page"})};var q=function(){return Object(N.jsx)("div",{className:"footer",children:Object(N.jsxs)("div",{className:"footerItem",children:[Object(N.jsx)("div",{className:"name",children:Object(N.jsx)("span",{children:"Created By: Prateeksha Ranjan |"})}),Object(N.jsxs)("div",{className:"footer-logo",children:[Object(N.jsx)("a",{href:"https://www.linkedin.com/in/prateeksharanjan/",children:Object(N.jsx)("img",{className:"logo",src:"https://e7.pngegg.com/pngimages/342/689/png-clipart-linkedin-logo-icon-others-blue-text-thumbnail.png",alt:"linkedin-logo"})}),Object(N.jsx)("a",{href:"https://github.com/prateeksha9/shopKaro.git",children:Object(N.jsx)("img",{id:"git-logo",className:"logo",src:"https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png",alt:"insta-logo"})})]})]})})};var R=function(){var t=Object(k.c)((function(t){return t.posts})),e=Object(k.b)();return Object(n.useEffect)((function(){e(f())}),[]),Object(N.jsx)(o.a,{children:Object(N.jsxs)("div",{className:"App",children:[Object(N.jsx)(S,{}),Object(N.jsxs)(a.c,{children:[Object(N.jsx)(a.a,{path:"/shopKaro",element:Object(N.jsx)(P,{posts:t})}),Object(N.jsx)(a.a,{path:"/",element:Object(N.jsx)(P,{posts:t})}),Object(N.jsx)(a.a,{path:"/addProduct",element:Object(N.jsx)(D,{})}),Object(N.jsx)(a.a,{path:"/cart",element:Object(N.jsx)(T,{})}),Object(N.jsx)(a.a,{path:"/product",element:Object(N.jsx)(E,{})}),Object(N.jsx)(a.a,{path:"*",element:Object(N.jsx)(w,{})})]}),Object(N.jsx)(q,{})]})})},B=c(21),_=c(12),L=c(20),U=c(19),K=c.n(U),G=c(9);var H=Object(_.b)({posts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return e.posts;case j:console.log("state.in sort",t);var c=t.sort((function(t,e){return t.price<e.price?1:-1}));return console.log("sorted",c),Object(G.a)(c);case l:return[e.posts].concat(Object(G.a)(t));case u:var n=t.filter((function(t){return t.id!==e.id}));return alert("Product Deleted Successfully"),n;case b:var r=t.findIndex((function(t){return t.id===e.id}));return t[r].description=e.description,Object(G.a)(t);default:return t}},cart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p:var c=t.findIndex((function(t){return t.id===e.newIteminCart.id}));return-1!==c?(t[c].quantity=t[c].quantity+1,Object(G.a)(t)):(console.log(c,"fsdiudh"),[e.newIteminCart].concat(Object(G.a)(t)));case h:var n=t.filter((function(t){return t.id!==e.id}));return alert("Product Removed Successfully"),n;case O:var r=t.findIndex((function(t){return t.id===e.id}));return t[r].quantity=t[r].quantity+1,Object(G.a)(t);case m:var s=t.findIndex((function(t){return t.id===e.id}));if(t[s].quantity<2){var i=t.filter((function(t){return t.id!==e.id}));return i}return t[s].quantity=t[s].quantity-1,Object(G.a)(t);default:return t}}});var Y=Object(_.c)(H,Object(_.a)(L.a,K.a));B.a.initializeApp({apiKey:"AIzaSyBou2JN1OTtXTQK9BODLbC-A2DRBY6hO8I",authDomain:"ecommerce-3a95f.firebaseapp.com",projectId:"ecommerce-3a95f",storageBucket:"ecommerce-3a95f.appspot.com",messagingSenderId:"735531265955",appId:"1:735531265955:web:d4bc5be74b0941b9327416"}),i.a.render(Object(N.jsx)(k.a,{store:Y,children:Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(R,{})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.4e4ac665.chunk.js.map