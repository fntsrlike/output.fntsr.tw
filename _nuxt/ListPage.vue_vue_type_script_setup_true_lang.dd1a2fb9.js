import C from"./PageTitle.87a57781.js";import V from"./PageSubtitle.77e4aad0.js";import{_ as k}from"./PostContent.vue_vue_type_script_setup_true_lang.c531ea05.js";import x from"./SearchBar.cd2fea4f.js";import{_ as L}from"./ListItem.vue_vue_type_script_setup_true_lang.a3a3c9e2.js";import{D as P}from"./datetime.91a1a522.js";import{b,k as B,e as D,o as l,p as m,B as n,Z as r,w as _,$ as d,t as p,c as S,f as T,F as w,a0 as N,u as $}from"./entry.d45912a7.js";const F={class:"pb-24"},I={class:"divide-y divide-gray-200 dark:divide-gray-700"},j={class:"pb-8 space-y-2 md:space-y-5"},G=b({__name:"ListPage",props:{page:null,posts:null},setup(a){const f=a,i=B(""),g=f.posts.map(e=>(!!e.tags||(e.tags=[]),e)),h=D(()=>g.filter(e=>{if(!e.published_at)return!1;const c=e.tags.filter(t=>!!t);return(e.title+e.title_en+e.description+c.map(t=>t?t.split(" ").join("-"):"")+P.fromISO(e.published_at).toFormat("yyyy-LL-dd")).toLowerCase().includes(i.value.toLowerCase())}));return(e,s)=>{const c=C,u=V,t=k,y=x,v=L;return l(),m("section",F,[n("div",I,[n("header",j,[n("div",null,[r(c,null,{default:_(()=>[d(p(a.page.title),1)]),_:1}),a.page.title_en?(l(),S(u,{key:0,lang:"en"},{default:_(()=>[d(p(a.page.title_en),1)]),_:1})):T("",!0)]),r(t,{post:a.page},null,8,["post"]),r(y,{modelValue:i.value,"onUpdate:modelValue":s[0]||(s[0]=o=>i.value=o),"placeholder-text":"Search announce"},null,8,["modelValue"])]),n("main",null,[n("ul",null,[(l(!0),m(w,null,N($(h),o=>(l(),m("li",{key:o._path,class:"py-4"},[r(v,{item:o},null,8,["item"])]))),128))])])])])}}});export{G as _};
