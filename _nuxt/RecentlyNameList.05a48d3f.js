import{m as d,o as e,p as n,A as o,t as u,F as y,a1 as f,$ as h,w as x,a0 as N,u as i,f as g,h as k}from"./entry.93e3992e.js";import{u as w}from"./useQuery.05944e79.js";const V={class:"list-none px-0"},B={key:0},v={__name:"RecentlyNameList",props:{title:{type:String,default:"default title"},type:{type:String,default:""},count:{type:Number,default:5}},async setup(l){let t,c;const r=l,{quertRecentlyPosts:p}=w(),s=([t,c]=d(()=>p(r.type,r.count)),t=await t,c(),t);return console.log(s.value),(C,L)=>{const _=k;return e(),n("section",null,[o("h3",null,u(l.title),1),o("div",null,[o("ul",V,[(e(!0),n(y,null,f(i(s),(a,m)=>(e(),n("li",{key:a._path,class:"inline-block px-0"},[h(_,{to:a._path},{default:x(()=>[N(u(a.title),1)]),_:2},1032,["to"]),m+1<i(s).length?(e(),n("span",B,"\u3001")):g("",!0)]))),128))])])])}}};export{v as default};
