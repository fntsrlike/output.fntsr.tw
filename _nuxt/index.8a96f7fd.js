import{k as h,_ as y}from"./PostTag.de39a944.js";import{m as w,o as i,p as c,B as l,F as b,a0 as v,u as p,K as $,Z as g,w as k,$ as C,t as T,h as E}from"./entry.d45912a7.js";import{u as N}from"./asyncData.7c5cec5d.js";import{t as B}from"./_arrayReduce.c1e6a4cb.js";import"./isArray.8e723eb8.js";function I(d){return B(d).toLowerCase()}const L={class:"flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0"},j=l("div",{class:"space-x-2 pt-6 pb-8 md:space-y-5"},[l("h1",{class:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14"}," Tags ")],-1),A={class:"flex max-w-lg flex-wrap"},Z={__name:"index",async setup(d){let o,m;const r={},f=(n,s)=>n.map(e=>{let t=e;if(typeof e=="object"){e[s]||(console.log(`[WARN] "${e._path}" has no "${s}" property`),e[s]=[]);const a=e[s];t=f(a)}if(typeof s>"u"){const a=I(t);r[a]=r[a]?r[a]+1:1,t=a}return t}).flat(1),{data:x}=([o,m]=w(()=>N("tags",()=>$("/").only(["tags"]).where({tags:{$exists:!0}}).where({published_at:{$ne:null}}).find())),o=await o,m(),o),u=[...new Set(f(x.value,"tags"))].filter(n=>typeof n=="string"&&n.length>0);return(n,s)=>{const _=y,e=E;return i(),c("div",L,[j,l("div",A,[(i(!0),c(b,null,v(p(u),t=>(i(),c("div",{key:t,class:"mt-2 mb-2 mr-5"},[g(_,{text:t},null,8,["text"]),g(e,{href:"/tags/"+p(h)(t),class:"-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300","aria-label":`
          posts
          tagged
          \${tag}\``},{default:k(()=>[C(" ("+T(r[t])+") ",1)]),_:2},1032,["href"])]))),128))])])}}};export{Z as default};
