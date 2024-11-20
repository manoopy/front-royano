import{p as j,G as T,j as O,r as C,k as D,n as H,F as R,R as U,Q as N}from"./ClspZet8.js";var v;let E=Symbol("headlessui.useid"),L=0;const Q=(v=T)!=null?v:function(){return O(E,()=>`${++L}`)()};function V(e){j(E,e)}function y(e){var t;if(e==null||e.value==null)return null;let n=(t=e.value.$el)!=null?t:e.value;return n instanceof Node?n:null}function $(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,$),r}function w(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function Y(e,t){let n=C(w(e.value.type,e.value.as));return D(()=>{n.value=w(e.value.type,e.value.as)}),H(()=>{var r;n.value||y(t)&&y(t)instanceof HTMLButtonElement&&!((r=y(t))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}var x=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(x||{}),B=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(B||{});function q({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...o}){var i;let s=k(r,n),u=Object.assign(o,{props:s});if(e||t&2&&s.static)return m(u);if(t&1){let f=(i=s.unmount)==null||i?0:1;return $(f,{0(){return null},1(){return m({...o,props:{...s,hidden:!0,style:{display:"none"}}})}})}return m(u)}function m({props:e,attrs:t,slots:n,slot:r,name:o}){var i,s;let{as:u,...f}=M(e,["unmount","static"]),l=(i=n.default)==null?void 0:i.call(n,r),g={};if(r){let c=!1,h=[];for(let[d,p]of Object.entries(r))typeof p=="boolean"&&(c=!0),p===!0&&h.push(d);c&&(g["data-headlessui-state"]=h.join(" "))}if(u==="template"){if(l=A(l??[]),Object.keys(f).length>0||Object.keys(t).length>0){let[c,...h]=l??[];if(!F(c)||h.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(f).concat(Object.keys(t)).map(a=>a.trim()).filter((a,b,P)=>P.indexOf(a)===b).sort((a,b)=>a.localeCompare(b)).map(a=>`  - ${a}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(a=>`  - ${a}`).join(`
`)].join(`
`));let d=k((s=c.props)!=null?s:{},f,g),p=U(c,d,!0);for(let a in d)a.startsWith("on")&&(p.props||(p.props={}),p.props[a]=d[a]);return p}return Array.isArray(l)&&l.length===1?l[0]:l}return N(u,Object.assign({},f,g),{default:()=>l})}function A(e){return e.flatMap(t=>t.type===R?A(t.children):[t])}function k(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...i){let s=n[r];for(let u of s){if(o instanceof Event&&o.defaultPrevented)return;u(o,...i)}}});return t}function z(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function M(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function F(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let S=Symbol("Context");var W=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(W||{});function J(){return O(S,null)}function K(e){j(S,e)}var G=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(G||{});export{q as A,z as E,x as N,M as T,G as a,Q as b,V as c,W as i,J as l,y as o,Y as s,K as t,$ as u};
