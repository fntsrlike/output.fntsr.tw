import{_ as n}from"./ListPage.vue_vue_type_script_setup_true_lang.ee613a8a.js";import i from"./ContentDoc.543d66d4.js";import{E as _,m as c,M as u,o as f,c as l,w as d,$ as g,u as r}from"./entry.c306d37f.js";import{u as h}from"./asyncData.b8f9c606.js";import"./PageTitle.c3afb838.js";import"./PageSubtitle.a41564a6.js";import"./PostContent.vue_vue_type_script_setup_true_lang.b68f2584.js";import"./ContentRenderer.eaf6a2bb.js";import"./ContentRendererMarkdown.8319a5df.js";import"./index.1dec55d2.js";import"./_commonjsHelpers.726de751.js";import"./SearchBar.384e606e.js";import"./ListItem.vue_vue_type_script_setup_true_lang.f9df2234.js";import"./DraftBadge.552de3cd.js";import"./PostTag.c437c4a5.js";import"./_arrayReduce.c1e6a4cb.js";import"./isArray.8e723eb8.js";import"./datetime.91a1a522.js";import"./ContentQuery.b5ace627.js";const v={__name:"ListPageByRoute",async setup($){let t,e;const o=_().name,{data:a}=([t,e]=c(()=>h(()=>u(o).where({slug:{$ne:o}}).sort({created_at:-1,published_at:-1}).find(),"$kSW6Kaqx7U")),t=await t,e(),t);return(x,y)=>{const s=n,p=i;return f(),l(p,{path:`_pages/${r(o)}`},{default:d(({doc:m})=>[g(s,{page:m,posts:r(a)},null,8,["page","posts"])]),_:1},8,["path"])}}};export{v as default};
