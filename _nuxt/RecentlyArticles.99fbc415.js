import{m as y,o as a,p as s,A as l,F as d,a1 as f,a0 as r,t as n,u as c,$ as h,w as x,h as A}from"./entry.93e3992e.js";import{u as L}from"./asyncData.6e617f77.js";import{D as N}from"./datetime.91a1a522.js";import{u as k}from"./useQuery.05944e79.js";const w=l("h3",null,"Articles",-1),C={__name:"RecentlyArticles",props:{count:{type:Number,default:5}},async setup(u){let t,o;const i=u,{quertRecentlyPosts:_}=k(),m=([t,o]=y(()=>L(()=>_("articles",i.count),"$2BiZWMWLSA").data),t=await t,o(),t);return(B,D)=>{const p=A;return a(),s("section",null,[w,l("ol",null,[(a(!0),s(d,null,f(c(m),e=>(a(),s("li",{key:e._path},[r(n(c(N).fromISO(e.created_at).toLocal().toFormat("yyyy-LL-dd"))+" ",1),h(p,{to:e._path},{default:x(()=>[r(n(e.title),1)]),_:2},1032,["to"])]))),128))])])}}};export{C as default};
