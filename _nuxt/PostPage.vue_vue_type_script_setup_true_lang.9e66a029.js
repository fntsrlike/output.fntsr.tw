import{b as d,u as e,o as c,p as a,A as r,a0 as s,$ as o,w as f,h}from"./entry.93e3992e.js";import{_ as P}from"./PostHeader.vue_vue_type_script_setup_true_lang.65ce81b5.js";import{_ as x}from"./PostContent.vue_vue_type_script_setup_true_lang.62bb0310.js";import{_ as b}from"./PostFooter.vue_vue_type_script_setup_true_lang.cc4db27a.js";const k=t=>t._draft||t.draft||!t.published_at,v=()=>({isDraft:k}),n=()=>"production",N=()=>n()==="development",$=()=>n()==="production",B=()=>({isProduction:$,isDevelopment:N,getEnv:n}),C={key:0},D=r("p",null,"Haven't published.",-1),V={key:1,class:"pb-4"},F=d({__name:"PostPage",props:{post:null},setup(t){const{isProduction:i}=B(),{isDraft:_}=v();return(g,w)=>{const p=h,u=P,l=x,m=b;return e(i)()&&e(_)(t.post)?(c(),a("div",C,[D,r("p",null,[s("back to "),o(p,{to:"/"},{default:f(()=>[s("index")]),_:1}),s(".")])])):(c(),a("article",V,[o(u,{post:t.post,class:"pb-6"},null,8,["post"]),o(l,{post:t.post},null,8,["post"]),o(m,{post:t.post,class:"pt-10"},null,8,["post"])]))}}});export{F as _};
