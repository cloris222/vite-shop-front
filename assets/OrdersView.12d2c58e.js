import{a as p,aG as m,S as f,o as l,c as s,b as n,w as o,V,d,e as y,h as t,R as _,aH as h,af as u}from"./index.e4b7e0cf.js";import{V as w}from"./VTable.7b9de451.js";const x={id:"orders"},D=t("h1",{class:"text-center"},"\u8A02\u55AE",-1),g=t("tr",null,[t("th",null,"ID"),t("th",null,"\u65E5\u671F"),t("th",null,"\u91D1\u984D"),t("th",null,"\u5546\u54C1")],-1),k=t("tbody",null,null,-1),B={__name:"OrdersView",setup(S){const c=p([]);return(async()=>{try{const{data:i}=await m.get("/orders");c.push(...i.result.map(r=>(r.totalPrice=r.products.reduce((e,a)=>e+a.p_id.price*a.quantity,0),r)))}catch{f.fire({icon:"error",title:"\u5931\u6557",text:"\u53D6\u5F97\u8A02\u55AE\u5931\u6557"})}})(),(i,r)=>(l(),s("div",x,[n(V,null,{default:o(()=>[n(d,{cols:"12"}),D,n(y),n(d,{cols:"12"},{default:o(()=>[n(w,null,{default:o(()=>[t("thead",null,[g,k,(l(!0),s(_,null,h(c,e=>(l(),s("tr",{key:e._id},[t("td",null,u(e._id),1),t("td",null,u(new Date(e.date).toLocaleDateString()),1),t("td",null,u(e.totalPrice),1),t("td",null,[t("ul",null,[(l(!0),s(_,null,h(e.products,a=>(l(),s("li",{key:a._id},u(a.quantity+" \u500B "+a.p_id.name),1))),128))])])]))),128))])]),_:1})]),_:1})]),_:1})]))}};export{B as default};
