(this.webpackJsonpcriando_um_hook_de_carrinho_de_compras=this.webpackJsonpcriando_um_hook_de_carrinho_de_compras||[]).push([[0],{75:function(n,t,e){"use strict";e.r(t);var r,c=e(0),a=e.n(c),o=e(23),i=e.n(o),d=e(14),s=e(13),u=e(3),b=e(12),l=e.n(b),p=e(20),j=e(24),x=e(10),f=e(26),h=e(11),O=e(8),g=e(9),m=e(17),v=g.b.ul(r||(r=Object(O.a)(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 20px;\n  list-style: none;\n\n  li {\n    display: flex;\n    flex-direction: column;\n    background: #fff;\n    border-radius: 4px;\n    padding: 20px;\n\n    img {\n      align-self: center;\n      max-width: 250px;\n    }\n\n    > strong {\n      font-size: 16px;\n      line-height: 20px;\n      color: #333;\n      margin-top: 5px;\n    }\n\n    > span {\n      font-size: 21px;\n      font-weight: bold;\n      margin: 5px 0 20px;\n    }\n\n    button {\n      background: #7159c1;\n      color: #fff;\n      border: 0;\n      border-radius: 4px;\n      overflow: hidden;\n      margin-top: auto;\n\n      display: flex;\n      align-items: center;\n      transition: background 0.2s;\n\n      &:hover {\n        background: ",";\n      }\n\n      div {\n        display: flex;\n        align-items: center;\n        padding: 12px;\n        background: rgba(0, 0, 0, 0.1);\n\n        svg {\n          margin-right: 5px;\n        }\n      }\n\n      span {\n        flex: 1;\n        text-align: center;\n        font-weight: bold;\n      }\n    }\n  }\n"])),Object(m.a)(.06,"#7159c1")),k=e(45),y=e.n(k).a.create({baseURL:"http://localhost:3333"}),w=new Intl.NumberFormat("pt-br",{style:"currency",currency:"BRL"}).format,F=e(27),z=e(1),C=Object(c.createContext)({});function I(n){var t,e=n.children,r=Object(c.useState)((function(){var n=localStorage.getItem("@RocketShoes:cart");return n?JSON.parse(n):[]})),a=Object(f.a)(r,2),o=a[0],i=a[1],d=Object(c.useRef)();Object(c.useEffect)((function(){d.current=o}),[]);var u=null!==(t=d.current)&&void 0!==t?t:o;Object(c.useEffect)((function(){u!==o&&localStorage.setItem("@RocketShoes:cart",JSON.stringify(o))}),[o,u]);var b=function(){var n=Object(p.a)(l.a.mark((function n(t){var e,r,c,a,d,u;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=Object(F.a)(o),r=o.find((function(n){return n.id===t}))||!1,n.next=5,y.get("/stock/".concat(t)).then((function(n){return n.data.amount}));case 5:if(c=n.sent,a=r?r.amount:0,!(c<=a)){n.next=10;break}return s.b.error("Quantidade solicitada fora de estoque"),n.abrupt("return");case 10:if(!r){n.next=14;break}r.amount+=1,n.next=19;break;case 14:return n.next=16,y.get("/products/".concat(t)).then((function(n){return n.data}));case 16:d=n.sent,u=Object(x.a)(Object(x.a)({},d),{},{amount:1}),e.push(u);case 19:i(e),n.next=25;break;case 22:n.prev=22,n.t0=n.catch(0),s.b.error("Erro na adi\xe7\xe3o do produto");case 25:case"end":return n.stop()}}),n,null,[[0,22]])})));return function(t){return n.apply(this,arguments)}}(),j=function(){var n=Object(p.a)(l.a.mark((function n(t){var e,r,c,a,d;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e=t.productId,r=t.amount,n.prev=1,!(r<=0)){n.next=4;break}return n.abrupt("return");case 4:return n.next=6,y.get("/stock/".concat(e)).then((function(n){return n.data.amount}));case 6:if(c=n.sent,!(r>c)){n.next=10;break}return s.b.error("Quantidade solicitada fora de estoque"),n.abrupt("return");case 10:if(a=Object(F.a)(o),!(d=a.find((function(n){return n.id===e})))){n.next=17;break}d.amount=r,i(a),n.next=18;break;case 17:throw Error();case 18:n.next=23;break;case 20:n.prev=20,n.t0=n.catch(1),s.b.error("Erro na altera\xe7\xe3o de quantidade do produto");case 23:case"end":return n.stop()}}),n,null,[[1,20]])})));return function(t){return n.apply(this,arguments)}}();return Object(z.jsx)(C.Provider,{value:{cart:o,addProduct:b,removeProduct:function(n){try{var t=Object(F.a)(o),e=t.findIndex((function(t){return t.id===n}));if(!(e>=0))throw Error();t.splice(e,1),i(t)}catch(r){s.b.error("Erro na remo\xe7\xe3o do produto")}},updateProductAmount:j},children:e})}function _(){return Object(c.useContext)(C)}var R,S,P,E,A,T,L=function(){var n=Object(c.useState)([]),t=Object(f.a)(n,2),e=t[0],r=t[1],a=_(),o=a.addProduct,i=a.cart.reduce((function(n,t){return Object(x.a)(Object(x.a)({},n),{},Object(j.a)({},t.id,t.amount))}),{});return Object(c.useEffect)((function(){function n(){return(n=Object(p.a)(l.a.mark((function n(){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:y.get("/products").then((function(n){return r(n.data)}));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),Object(z.jsx)(v,{children:e.map((function(n){return Object(z.jsxs)("li",{children:[Object(z.jsx)("img",{src:n.image,alt:n.title}),Object(z.jsx)("strong",{children:n.title}),Object(z.jsx)("span",{children:w(n.price)}),Object(z.jsxs)("button",{type:"button","data-testid":"add-product-button",onClick:function(){return t=n.id,void o(t);var t},children:[Object(z.jsxs)("div",{"data-testid":"cart-product-quantity",children:[Object(z.jsx)(h.b,{size:16,color:"#FFF"}),i[n.id]||0]}),Object(z.jsx)("span",{children:"ADICIONAR AO CARRINHO"})]})]},n.id)}))})},N=g.b.div(R||(R=Object(O.a)(["\n  padding: 30px;\n  background: #fff;\n  border-radius: 4px;\n\n  footer {\n    margin-top: 30px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    button {\n      background: #7159c1;\n      color: #fff;\n      border: 0;\n      border-radius: 4px;\n      padding: 12px 20px;\n      font-weight: bold;\n      text-transform: uppercase;\n      transition: background 0.2s;\n\n      &:hover {\n        background: ",";\n      }\n    }\n  }\n"])),Object(m.a)(.06,"#7159c1")),q=g.b.table(S||(S=Object(O.a)(["\n  width: 100%;\n\n  thead th {\n    color: #999;\n    text-align: left;\n    padding: 12px;\n  }\n\n  tbody td {\n    padding: 12px;\n    border-bottom: 1px solid #eee;\n  }\n\n  img {\n    height: 100px;\n  }\n\n  strong {\n    color: #333;\n    display: block;\n  }\n\n  span {\n    display: block;\n    margin-top: 5px;\n    font-size: 18px;\n    font-weight: bold;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n\n    input {\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      color: #666;\n      padding: 6px;\n      width: 50px;\n    }\n  }\n\n  button {\n    background: none;\n    border: 0;\n    padding: 6px;\n\n    svg {\n      color: #7159c1;\n      transition: color 0.2s;\n    }\n\n    &:hover {\n      svg {\n        color: ",";\n      }\n    }\n\n    &:disabled {\n      svg {\n        color: ",";\n        cursor: not-allowed;\n      }\n    }\n  }\n"])),Object(m.a)(.06,"#7159c1"),Object(m.b)(.25,"#7159c1")),B=g.b.div(P||(P=Object(O.a)(["\n  display: flex;\n  align-items: baseline;\n\n  span {\n    color: #999;\n    font-weight: bold;\n  }\n\n  strong {\n    font-size: 28px;\n    margin-left: 5px;\n  }\n"]))),D=function(){var n=_(),t=n.cart,e=n.removeProduct,r=n.updateProductAmount,c=t.map((function(n){return Object(x.a)(Object(x.a)({},n),{},{priceFormatted:w(n.price),subtotal:w(n.price*n.amount)})})),a=w(t.reduce((function(n,t){return n+t.price*t.amount}),0));return Object(z.jsxs)(N,{children:[Object(z.jsxs)(q,{children:[Object(z.jsx)("thead",{children:Object(z.jsxs)("tr",{children:[Object(z.jsx)("th",{"aria-label":"product image"}),Object(z.jsx)("th",{children:"PRODUTO"}),Object(z.jsx)("th",{children:"QTD"}),Object(z.jsx)("th",{children:"SUBTOTAL"}),Object(z.jsx)("th",{"aria-label":"delete icon"})]})}),Object(z.jsx)("tbody",{children:c.map((function(n){return Object(z.jsxs)("tr",{"data-testid":"product",children:[Object(z.jsx)("td",{children:Object(z.jsx)("img",{src:n.image,alt:n.title})}),Object(z.jsxs)("td",{children:[Object(z.jsx)("strong",{children:n.title}),Object(z.jsx)("span",{children:n.priceFormatted})]}),Object(z.jsx)("td",{children:Object(z.jsxs)("div",{children:[Object(z.jsx)("button",{type:"button","data-testid":"decrement-product",disabled:n.amount<=1,onClick:function(){return function(n){var t={productId:n.id,amount:n.amount-1};r(t)}(n)},children:Object(z.jsx)(h.d,{size:20})}),Object(z.jsx)("input",{type:"text","data-testid":"product-amount",readOnly:!0,value:n.amount}),Object(z.jsx)("button",{type:"button","data-testid":"increment-product",onClick:function(){return function(n){var t={productId:n.id,amount:n.amount+1};r(t)}(n)},children:Object(z.jsx)(h.a,{size:20})})]})}),Object(z.jsx)("td",{children:Object(z.jsx)("strong",{children:n.subtotal})}),Object(z.jsx)("td",{children:Object(z.jsx)("button",{type:"button","data-testid":"remove-product",onClick:function(){return t=n.id,void e(t);var t},children:Object(z.jsx)(h.c,{size:20})})})]},n.id)}))})]}),Object(z.jsxs)("footer",{children:[Object(z.jsx)("button",{type:"button",children:"Finalizar pedido"}),Object(z.jsxs)(B,{children:[Object(z.jsx)("span",{children:"TOTAL"}),Object(z.jsx)("strong",{children:a})]})]})]})},J=function(){return Object(z.jsxs)(u.c,{children:[Object(z.jsx)(u.a,{path:"/",exact:!0,component:L}),Object(z.jsx)(u.a,{path:"/cart",component:D})]})},Q=(e(74),e.p+"static/media/background.72f221ea.svg"),U=Object(g.a)(E||(E=Object(O.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background: #191920 url(",") no-repeat center top;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font: 14px Roboto, sans-serif;\n  }\n\n  #root {\n    max-width: 1020px;\n    margin: 0 auto;\n    padding: 0 20px 50px;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"])),Q),M=e.p+"static/media/logo.a865163d.svg",H=g.b.header(A||(A=Object(O.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 50px 0;\n\n  a {\n    transition: opacity 0.2s;\n\n    &:hover {\n      opacity: 0.7;\n    }\n  }\n"]))),G=Object(g.b)(d.b)(T||(T=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n\n  div {\n    text-align: right;\n    margin-right: 10px;\n\n    strong {\n      display: block;\n      color: #fff;\n    }\n\n    span {\n      font-size: 12px;\n      color: #999;\n    }\n  }\n"]))),K=function(){var n=_().cart.reduce((function(n,t){return n+1}),0);return Object(z.jsxs)(H,{children:[Object(z.jsx)(d.b,{to:"/",children:Object(z.jsx)("img",{src:M,alt:"Rocketshoes"})}),Object(z.jsxs)(G,{to:"/cart",children:[Object(z.jsxs)("div",{children:[Object(z.jsx)("strong",{children:"Meu carrinho"}),Object(z.jsx)("span",{"data-testid":"cart-size",children:"".concat(n,1===n?" item":" itens")})]}),Object(z.jsx)(h.e,{size:36,color:"#FFF"})]})]})},V=function(){return Object(z.jsx)(d.a,{children:Object(z.jsxs)(I,{children:[Object(z.jsx)(U,{}),Object(z.jsx)(K,{}),Object(z.jsx)(J,{}),Object(z.jsx)(s.a,{autoClose:3e3})]})})},W=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,76)).then((function(t){var e=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;e(n),r(n),c(n),a(n),o(n)}))};i.a.render(Object(z.jsx)(a.a.StrictMode,{children:Object(z.jsx)(V,{})}),document.getElementById("root")),W()}},[[75,1,2]]]);
//# sourceMappingURL=main.9a02a8a3.chunk.js.map