import{P as h,o,b as _,e as t,Y as i,O as l,S as r,u as d,F as p,a0 as m,Z as a,s as f,L as x}from"./entry.5498e93d.js";import{u as v}from"./asyncData.a718005a.js";const y={class:"header"},g=t("h1",null,"Routes overview",-1),b={class:"info"},w={class:"wrapper"},k={id:"routes"},j=t("tr",null,[t("th",{class:"text-lg text-center"},"content._id"),t("th",{class:"text-lg text-center"},"content._path")],-1),N=t("div",{class:"info"},[a(" The implementaion of this page is reference by "),t("a",{href:"https://wri7e.medium.com/view-all-routes-in-a-nuxtjs-application-193f38a715ac",target:"_blank"},' "42 - View all routes in a nuxtjs application" '),a(" . ")],-1),V={layout:"pure"},D=Object.assign(V,{__name:"content",async setup(B){let s,c;const{data:u}=([s,c]=h(()=>v("home",()=>f("/").find())),s=await s,c(),s);return(C,L)=>{const n=x;return o(),_("div",null,[t("div",y,[g,i(n,{to:"/"},{default:l(()=>[a("Go back to index")]),_:1})]),t("div",b,[t("h1",null,"There are "+r(d(u).length)+" available routes by nuxtjs",1)]),t("div",w,[t("table",k,[j,(o(!0),_(p,null,m(d(u),e=>(o(),_("tr",{key:e._path},[t("td",null,[i(n,{to:e._id},{default:l(()=>[a(r(e._id),1)]),_:2},1032,["to"])]),t("td",null,[i(n,{to:e._path},{default:l(()=>[a(r(e._path),1)]),_:2},1032,["to"])])]))),128))])]),N])}}});export{D as default};
