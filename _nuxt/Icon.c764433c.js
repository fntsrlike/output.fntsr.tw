import{b as S,i as A,j as N,k as b,e as c,l as B,m as C,u as e,o as m,p as w,q as h,c as z,s as q,t as D,v as j,a as E}from"./entry.d45912a7.js";import{u as F}from"./config.762540b9.js";import{I as H,l as $}from"./Icon.vue_vue_type_style_index_0_scoped_701f469d_lang.11cff27d.js";const G=["width","height"],J=S({__name:"Icon",props:{name:{type:String,required:!0},size:{type:String,default:""}},async setup(v){var y;let i,f;const l=v,k=A(),s=F();(y=s==null?void 0:s.nuxtIcon)!=null&&y.aliases;const p=N("icons",()=>({})),d=b(!1),a=c(()=>{var t;return(((t=s.nuxtIcon)==null?void 0:t.aliases)||{})[l.name]||l.name}),_=c(()=>{var t;return(t=p.value)==null?void 0:t[a.value]}),u=c(()=>k.vueApp.component(a.value)),n=c(()=>{var o,I,g;if(!l.size&&typeof((o=s.nuxtIcon)==null?void 0:o.size)=="boolean"&&!((I=s.nuxtIcon)!=null&&I.size))return;const t=l.size||((g=s.nuxtIcon)==null?void 0:g.size)||"1em";return String(Number(t))===t?`${t}px`:t}),r=c(()=>{var t,o;return(o=(t=s==null?void 0:s.nuxtIcon)==null?void 0:t.class)!=null?o:"icon"});async function x(){var t;u.value||(t=p.value)!=null&&t[a.value]||(d.value=!0,p.value[a.value]=await $(a.value).catch(()=>{}),d.value=!1)}return B(()=>a.value,x),!u.value&&([i,f]=C(()=>x()),i=await i,f()),(t,o)=>e(d)?(m(),w("span",{key:0,class:h(e(r)),width:e(n),height:e(n)},null,10,G)):e(_)?(m(),z(e(H),{key:1,icon:e(_),class:h(e(r)),width:e(n),height:e(n)},null,8,["icon","class","width","height"])):e(u)?(m(),z(q(e(u)),{key:2,class:h(e(r)),width:e(n),height:e(n)},null,8,["class","width","height"])):(m(),w("span",{key:3,class:h(e(r)),style:j({fontSize:e(n),lineHeight:e(n),width:e(n),height:e(n)})},D(v.name),7))}}),O=E(J,[["__scopeId","data-v-701f469d"]]);export{O as default};
