const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vendor-C6wWMAoU.css"])))=>i.map(i=>d[i]);
import{r as l,B as p,u as F,a as se,d as j,j as t,t as I,b as Y,c as oe,F as ae,P as ie,e as J,J as ce,f as le,g as ue,h as de,i as fe,k as ge,l as q,m as me,C as Ae,n as he,p as D,q as G,T as pe,s as we,v as xe,w as ye,x as be,y as je,z as Ce,A as ve,Q as Ee,X as Be}from"./vendor-G97e3PG7.js";import{i as Ie,g as Ne,a as Me,p as ke,d as Se,u as v,b as P,t as De,c as Qe,e as R,s as Te}from"./firebase-CgL3426j.js";import{i as ze,s as Fe,a as Ye}from"./simple-icons-CEts9Dpn.js";import{J as Ge}from"./qr-scanner-DFjavqcj.js";import"./index-Dk-gAazt.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();function Lt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Wt(e){if(e.__esModule)return e;var n=e.default;if(typeof n=="function"){var r=function s(){return this instanceof s?Reflect.construct(n,arguments,this.constructor):n.apply(this,arguments)};r.prototype=n.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(s){var o=Object.getOwnPropertyDescriptor(e,s);Object.defineProperty(r,s,o.get?o:{enumerable:!0,get:function(){return e[s]}})}),r}const S=l.createContext(void 0);function Pe(){const[e,n]=l.useState(navigator.onLine);return l.useEffect(()=>{function r(){n(navigator.onLine)}return window.addEventListener("online",r),window.addEventListener("offline",r),()=>{window.removeEventListener("online",r),window.removeEventListener("offline",r)}},[]),e}const Re="modulepreload",Oe=function(e){return"/factor/"+e},U={},Ue=function(n,r,s){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),c=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=Promise.allSettled(r.map(u=>{if(u=Oe(u),u in U)return;U[u]=!0;const g=u.endsWith(".css"),h=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const f=document.createElement("link");if(f.rel=g?"stylesheet":Re,g||(f.as="script"),f.crossOrigin="",f.href=u,c&&f.setAttribute("nonce",c),document.head.appendChild(f),g)return new Promise((d,x)=>{f.addEventListener("load",d),f.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function a(i){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=i,window.dispatchEvent(c),!c.defaultPrevented)throw i}return o.then(i=>{for(const c of i||[])c.status==="rejected"&&a(c.reason);return n().catch(a)})};function Le(e={}){const{immediate:n=!1,onNeedRefresh:r,onOfflineReady:s,onRegistered:o,onRegisteredSW:a,onRegisterError:i}=e;let c,u,g;const h=async(d=!0)=>{await u,g==null||g()};async function f(){if("serviceWorker"in navigator){if(c=await Ue(async()=>{const{Workbox:d}=await import("./vendor-G97e3PG7.js").then(x=>x.K);return{Workbox:d}},__vite__mapDeps([0])).then(({Workbox:d})=>new d("/factor/sw.js",{scope:"/factor/",type:"classic"})).catch(d=>{i==null||i(d)}),!c)return;g=()=>{c==null||c.messageSkipWaiting()};{let d=!1;const x=()=>{d=!0,c==null||c.addEventListener("controlling",y=>{y.isUpdate&&window.location.reload()}),r==null||r()};c.addEventListener("installed",y=>{typeof y.isUpdate>"u"?typeof y.isExternal<"u"&&y.isExternal?x():!d&&(s==null||s()):y.isUpdate||s==null||s()}),c.addEventListener("waiting",x)}c.register({immediate:n}).then(d=>{a?a("/factor/sw.js",d):o==null||o(d)}).catch(d=>{i==null||i(d)})}}return u=f(),h}let B;function We(){const e=Le({onNeedRefresh(){const n="New version installed, tap to update.",r={autoClose:!1,closeOnClick:!0,type:"warning",onClick:()=>{const s="Updating...";B?p.update(B,{render:s,onClick:void 0}):p.warn(s,{autoClose:!1}),e()}};B?p.update(B,{render:n,type:"warning",...r}):B=p.warn(n,r)},onRegistered(n){n&&(setInterval(()=>{n.update()},3e5),n.addEventListener("updatefound",()=>{B||(B=p.info("Downloading new version..."))}))}})}const He={apiKey:"AIzaSyDMQ4jffBbrLTjdhy_qS4GeZdbYtzEKHp4",authDomain:"factor-97c20.firebaseapp.com",projectId:"factor-97c20",storageBucket:"factor-97c20.appspot.com",messagingSenderId:"524844196447",appId:"1:524844196447:web:9d5f59006ec0b8e68d31ea"},_=Ie(He),N=Ne(_),T=Me(_,{localCache:ke()});function Ke(){const[e]=F(N),n=Se(T,"users",(e==null?void 0:e.uid)||""),[r,s,o]=se(n);return{data:r,loading:s,error:o,userRef:n}}function $(e){l.useEffect(()=>{const n=()=>e(!document.hidden);return document.addEventListener("visibilitychange",n),()=>document.removeEventListener("visibilitychange",n)},[e])}async function Ze(e,n){const r=p(`Exporting keys ⏳️
This might take some time...`,{autoClose:!1,progress:1/n.keys.length,hideProgressBar:!1}),s=[];for(let c=0;c<n.keys.length;c++){const u=n.keys[c],g=await j.decrypt(e,u.secret);s.push({name:u.name,secret:g.secret}),p.update(r,{progress:c/n.keys.length})}p.done(r);const o=new Blob([JSON.stringify(s)],{type:"text/json"}),a=URL.createObjectURL(o),i=document.createElement("a");i.href=a,i.download="keys.json",i.click(),URL.revokeObjectURL(a)}async function Xe(e,n,r){const s=document.createElement("input");s.type="file",s.addEventListener("change",o=>{if(s.files&&s.files[0]){const a=s.files[0],i=new FileReader;i.onload=async c=>{try{if(c.target){const u=JSON.parse(c.target.result);let g=0,h=0;for(const f of u){if(!f.name||!f.secret)throw"Invalid file format";const d=f.name;if(n.keys.some(x=>x.name.toLowerCase()===d.toLowerCase()))g++;else{const x=await j.encrypt(e,f.secret);await v(r,{keys:P({name:d,secret:x})}),h++}}g>0&&p.warning(`${g} keys were skipped because they already exist`),h>0&&p.success(`Imported ${u.length-g} keys`)}}catch(u){console.error(u),p.error(u||"Error importing keys")}},i.readAsText(a)}}),s.click()}const L="device-uuid";function ee(){let e=localStorage.getItem(L);return e||(e=crypto.getRandomValues(new Uint32Array(32)).toString(),localStorage.setItem(L,e)),e}const te="/factor/assets/logo-lomxQ9_I.png";function Ve({className:e}){return t.jsx("img",{src:te,className:Y("h-52",e)})}function M({className:e,children:n,...r}){return t.jsxs("div",{className:"w-screen h-[100svh] flex flex-col justify-center items-center gap-5",...r,children:[t.jsx("h1",{className:"text-center m-0 -mb-1",children:"Factor"}),t.jsx(Ve,{className:e}),n,t.jsx("span",{className:I("absolute bottom-1.5 right-2 leading-tight whitespace-pre text-right","text-[8px]"),children:new Date("2024-12-09T09:50:19.247Z").toLocaleString().replace(", ",`
`)})]})}function Je(){const[e]=oe(N);return t.jsx("button",{className:"icon bg-danger",onClick:async()=>{try{await e(),await De(T),await Qe(T),window.location.reload()}catch(n){console.error(n)}},children:t.jsx(ae,{})})}function qe({pinRef:e,encryptedCode:n,unlock:r,className:s}){l.useEffect(()=>{setTimeout(()=>{var a;return(a=e.current)==null?void 0:a[0].focus()},250)},[]);const o=async a=>{if((a==null?void 0:a.length)===6)try{const i=await j.decrypt(a,n);r(i.token)}catch(i){console.log(i,a),p.error("Invalid code")}e.current&&(e.current.forEach(i=>{i.value=""}),e.current[0].focus())};return t.jsx("div",{className:Y("flex",s),children:t.jsx(ie,{length:6,className:"border border-slate-500 w-10 sm:w-12 h-14 m-1.5 rounded-lg text-center text-6xl p-1",type:"password",inputMode:"numeric",ref:e,onComplete:o})})}const ne=Uint8Array.from(window.crypto.getRandomValues(new Uint8Array(32)));async function _e(){try{const e=Uint8Array.from(window.crypto.getRandomValues(new Uint8Array(32))),n=N.currentUser,r={challenge:ne,rp:{name:"Factor"},user:{id:e,name:(n==null?void 0:n.email)||"user@email.com",displayName:(n==null?void 0:n.displayName)||"User"},pubKeyCredParams:[{type:"public-key",alg:-7}],authenticatorSelection:{requireResidentKey:!0}},s=await navigator.credentials.create({publicKey:r});return{userHandle:z(e),credentialId:z(s.rawId)}}catch(e){console.error("Error registering credential:",e)}return null}async function $e(e){try{const n=tt(e),r={challenge:ne,allowCredentials:[{type:"public-key",id:n}]},s=await navigator.credentials.get({publicKey:r});if(s!=null&&s.response)return z(s.response.userHandle)}catch(n){console.error("Error authenticating:",n)}return null}function et(e){const n=new Uint8Array(e),r=Array.from(n);return String.fromCharCode.apply(null,r)}function z(e){return btoa(et(e))}function tt(e){const n=atob(e),r=n.length,s=new ArrayBuffer(r),o=new Uint8Array(s);for(let a=0;a<r;a++)o[a]=n.charCodeAt(a);return s}function nt({userRef:e,encryptedCode:n}){const r=ee(),s=async()=>{try{const o=prompt("Enter pin to register biometric login")||"",a=await j.decrypt(o,n),i=await _e(),c=(i==null?void 0:i.userHandle)||"",u=await j.encrypt(c,a);v(e,{webauthn:P({credentialId:i==null?void 0:i.credentialId,uuid:r,secret:u,userAgent:navigator.userAgent})}),p.success("Successfully enrolled biometric login")}catch(o){console.error(o),p.error("Error registering fingerprint")}};return t.jsx("button",{className:"icon bg-primary text-slate-200",onClick:s,children:t.jsx(J,{})})}const W=new Set;function rt(e,n){l.useEffect(()=>{W.has(e)||(n(),W.add(e))},[])}function k(e,n,r=600){const s=ce(e,{threshold:r,onCancel:(o,{reason:a})=>{a===le.CancelledByRelease&&n()}});return()=>({onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&e()},...s()})}function st({webauthn:e,userRef:n,unlock:r}){$(a=>{a&&e&&o()}),rt("webauthn",()=>{e&&o()});const s=k(()=>{e&&confirm("Reset Biometric Auth?")&&v(n,{webauthn:R({...e})})},()=>o(),3e3),o=async()=>{try{if(!e)throw"webauthn not defined";const a=await $e(e.credentialId).catch(console.error),i=await j.decrypt(a||"",e.secret);r(i.token)}catch(a){console.error(a),p.error("Invalid biometric login")}};return t.jsx("button",{className:"p-3 rounded-full bg-tertiary text-slate-200 border-2 border-slate-600",...s(),children:t.jsx(J,{size:30})})}function ot({unlock:e,encryptedCode:n,data:r,userRef:s}){var c;const o=l.useRef(null),a=ee(),i=(c=r==null?void 0:r.webauthn)==null?void 0:c.find(u=>u.uuid===a);return t.jsxs(M,{onClick:u=>{var h;const g=(h=u.target)==null?void 0:h.nodeName;o.current&&(g==="DIV"||g==="IMG"||g==="H1")&&o.current[0].focus()},style:{marginTop:"calc(-1 * env(keyboard-inset-height) / 2)"},children:[t.jsxs("div",{className:"flex fixed top-4 right-4 gap-2",children:[!i&&t.jsx(nt,{encryptedCode:n,userRef:s}),t.jsx(Je,{})]}),t.jsx(qe,{pinRef:o,encryptedCode:n,unlock:e}),i&&t.jsx(st,{unlock:e,userRef:s,webauthn:i})]})}function at(){const[e]=F(N),[n,,r,s]=ue(N);return t.jsxs("div",{className:"flex justify-center items-center flex-col",children:[!e&&!r&&t.jsx(it,{signin:()=>n()}),r&&t.jsx("p",{children:"Loading..."}),s&&t.jsxs("p",{children:["Error: ",s.message]})]})}function it({signin:e}){return t.jsxs("button",{className:"gsi-material-button",onClick:e,children:[t.jsx("div",{className:"gsi-material-button-state"}),t.jsxs("div",{className:"gsi-material-button-content-wrapper",children:[t.jsx("div",{className:"gsi-material-button-icon",children:t.jsxs("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",style:{display:"block"},children:[t.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),t.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),t.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),t.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"}),t.jsx("path",{fill:"none",d:"M0 0h48v48H0z"})]})}),t.jsx("span",{className:"gsi-material-button-contents",children:"Sign in with Google"}),t.jsx("span",{style:{display:"none"},children:"Sign in with Google"})]})]})}function ct({lock:e,updateCode:n,editMode:r,setEditMode:s,setEditKey:o,exportKeys:a,importKeys:i}){const c="p-4 rounded-full ",u=c+" !bg-slate-800 !text-primary",g=k(n,e),h=k(()=>s(!r),()=>{r?s(!1):o(!0)});return t.jsxs("div",{className:"fixed bottom-8 right-8 flex gap-4 z-20",children:[r&&t.jsxs(t.Fragment,{children:[t.jsx("button",{className:u,onClick:()=>i(),children:t.jsx(de,{})}),t.jsx("button",{className:u+" mr-4",onClick:()=>a(),children:t.jsx(fe,{})})]}),t.jsx("button",{className:I(u,r&&"rotate-45"),...h(),children:t.jsx(ge,{})}),t.jsx("button",{className:I("transition-transform",c),...g(),children:t.jsx(q,{})})]})}function lt(){const[e,n]=l.useState(new Date);return l.useEffect(()=>{let r;return setTimeout(()=>{n(new Date),r=setInterval(()=>n(new Date),3e4)},3e4-new Date().getTime()%3e4),()=>{r&&clearInterval(r)}},[]),{timestamp:e}}function ut(){const[e,n]=l.useState(new Date);return l.useEffect(()=>{const r=setInterval(()=>n(new Date),1e3);return()=>{clearInterval(r)}},[]),{time:e}}const H={content:["./index.html","./src/**/*.{js,ts,jsx,tsx}"],theme:{extend:{colors:{primary:"#4b888d",secondary:"#051524",tertiary:"#2c2155",danger:"#f07f7b"},keyframes:{wiggle:{"0%, 100%":{transform:"rotate(-0.5deg)"},"50%":{transform:"rotate(0.5deg)"}}},animation:{wiggle:"wiggle 400ms ease-in-out infinite"}}},plugins:[]};function dt(){return l.useMemo(()=>me(H),[H])}function ft(){const e=dt(),{time:n}=ut(),r=3e4-n.getTime()%3e4,s=Math.ceil(r/1e3),a=(30-s+.15)/29.4*50;return t.jsxs("div",{className:"flex sm:justify-center pl-8 sm:pl-0 fixed bottom-0 left-0 right-0 z-10 backdrop-blur-lg bg-slate-900 bg-opacity-30 pt-4 border-t-2 border-secondary",children:[t.jsx("div",{className:"w-16 h-16 p-1 mb-6",children:t.jsx(Ae,{value:s-1,maxValue:30,text:s.toString(),styles:he({textSize:"40px",trailColor:e.theme.colors.slate[700],textColor:e.theme.colors.primary,pathColor:e.theme.colors.primary}),strokeWidth:10})}),t.jsx("div",{className:"fixed bottom-1 h-1.5 bg-primary transition-all duration-700 z-20 rounded",style:{left:`${a}%`,right:`${a}%`}})]})}const gt=()=>{const[e,n]=l.useState(r());function r(){const s=window.innerWidth;return s<640?"sm":s<768?"md":s<1024?"lg":s<1280?"xl":"2xl"}return l.useEffect(()=>{const s=()=>{n(r())};return window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),e},mt="/factor/assets/bastillion-C8U43q6p.png",At="/factor/assets/betterment-qyE9Qf23.png",ht="data:image/png;base64,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",pt="/factor/assets/guideline-BzofyXre.png",wt="/factor/assets/id.me-DfyXe1at.png",xt="/factor/assets/justworks-BJD2k2It.jpg",yt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADwCAYAAAA+VemSAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA+BJREFUeJzt2bFtG1kYRtEnPkXqwNEkrsAVWHAdhIpwF9uDAoGFCO7AzneDSXZLUEJwtgOtoQU0usQ58R984OACD+DNtm0DaDrsPQB4OwFDmIAhTMAQJmAIEzCECRjCBAxhAoYwAUOYgCFMwBAmYAgTMIQJGMIEDGEChjABQ5iAIUzAECZgCBMwhAkYwgQMYQKGMAFDmIAhTMAQJmAIEzCECRjCBAxht3sPGGOM+/v722VZlr131M05Xx4fH/9+7eZ4PH6ac96916Zrta7r+vz8fN57x4cIeFmWZdu2P/feUXc+n3+MMb6+dnM4HE7btn17n0XXa1mWz2OMv/be4QkNYQKGMAFDmIAhTMAQJmAIEzCECRjCBAxhAoYwAUOYgCFMwBAmYAgTMIQJGMIEDGEChjABQ5iAIUzAECZgCBMwhAkYwgQMYQKGMAFDmIAhTMAQJmAIEzCECRjCBAxhAoYwAUOYgCFMwBAmYAgTMIQJGMIEDGEChjABQ5iAIUzAECZgCBMwhAkYwgQMYQKGMAFDmIAhTMAQJmAIEzCECRjCBAxhAoYwAUOYgCFMwBAmYAgTMIQJGMIEDGEChjABQ5iAIUzAECZgCBMwhAkYwgQMYQKGMAFDmIAhTMAQJmAIEzCECRjCbvceMMYYc86X8/n8Y+8dV+Dnb9z8Gh/ku5fNOV/23jDGGDfbtu29AXgjT2gIEzCECRjCBAxhAoYwAUOYgCHsQ/yhfzwePx0Oh9PeO67Ar6enp++vHTw8PPwxxvjyTnuu1uVyOZ5Op3/23vEhAp5z3m3b9m3vHVfgd77nlzGG3/p/mnPe7b1hDE9oSBMwhAkYwgQMYQKGMAFDmIAhTMAQJmAIEzCECRjCBAxhAoYwAUOYgCFMwBAmYAgTMIQJGMIEDGEChjABQ5iAIUzAECZgCBMwhAkYwgQMYQKGMAFDmIAhTMAQJmAIEzCECRjCBAxhAoYwAUOYgCFMwBAmYAgTMIQJGMIEDGEChjABQ5iAIUzAECZgCBMwhAkYwgQMYQKGMAFDmIAhTMAQJmAIEzCECRjCBAxhAoYwAUOYgCFMwBAmYAgTMIQJGMIEDGEChjABQ5iAIUzAECZgCBMwhAkYwgQMYQKGMAFDmIAhTMAQdrv3gDHGWNd1XZbl89476uacL/91c7lcjnPOu/fYc83WdV333jDGGDfbtu29AXgjT2gIEzCECRjCBAxhAoYwAUOYgCFMwBAmYAgTMIQJGMIEDGEChjABQ5iAIUzAECZgCBMwhAkYwgQMYQKGMAFDmIAhTMAQJmAIEzCECRjCBAxhAoYwAUOYgCFMwBD2L7MKSZ5etPMSAAAAAElFTkSuQmCC",bt="data:image/png;base64,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",jt="/factor/assets/twitter-CSQ8FmJA.png",Ct="/factor/assets/uwcu-Cguu5ZT9.png";function vt(e){if(!e)return;let n=Object.entries(ze).filter(r=>e.toLowerCase().includes(r[1].title.toLowerCase())&&D(e.toLowerCase(),r[1].title.toLowerCase())<e.length/2).sort((r,s)=>D(e.toLowerCase(),r[1].title.toLowerCase())-D(e.toLowerCase(),s[1].title.toLowerCase()))[0];switch(e.toLowerCase()){case"bastillion":return{url:mt,padding:!0,type:"Image"};case"betterment":return{url:At,type:"Image"};case"carta":return{url:ht,type:"Image"};case"facebook":return{...Ye,padding:!1,type:"Icon"};case"guideline":return{url:pt,type:"Image"};case"id.me":return{url:wt,type:"Image"};case"justworks":return{url:xt,type:"Image"};case"microsoft":return{url:yt,padding:!0,type:"Image"};case"nas":return{...Fe,type:"Icon"};case"uw credit union":case"uwcu":return{url:Ct,padding:!0,type:"Image"};case"sequoia":return{url:bt,padding:!0,type:"Image"};case"twitter":return{url:jt,padding:!0,type:"Image"}}return n?{...n[1],type:"Icon",padding:!0}:void 0}const Q="bg-slate-900",Et="bg-slate-800";function Bt(e){if(!e||e.type==="Image")return{background:Q,fill:Et};const n=e;let r=Q,s="#"+n.hex;switch(n.title.toLowerCase()){case"amazon":r=Q;break;case"microsoft":s="#00a2ed";break;case"github":case"patreon":case"ubisoft":r="bg-slate-100";break}return{background:r,fill:s}}function re({name:e,className:n}){const r=vt(e),s=Bt(r),o="w-12 h-12 rounded-full border border-slate-400 flex justify-center items-center aspect-square "+s.background+" "+n;return r?r.type==="Image"?t.jsx("img",{src:r.url,className:I(o,"object-cover",r.padding&&"p-1")}):t.jsx("div",{dangerouslySetInnerHTML:{__html:r.svg},className:I(o,r.padding?"p-2.5":"p-0.5"),style:{fill:s.fill}}):t.jsx("div",{className:o,children:t.jsx(q,{})})}function It({close:e,onScan:n}){return t.jsx("div",{className:"absolute inset-0 w-screen h-screen bg-black flex justify-center z-10",children:t.jsxs("div",{className:"relative w-[100vh] p-2",children:[t.jsx("div",{className:"absolute bottom-14 right-0 left-0 z-10 flex justify-center",children:t.jsx("button",{className:"icon",onClick:e,children:t.jsx(G,{})})}),t.jsx(Ge,{onResult:async r=>{try{const s=new URL(r),o=decodeURIComponent(s.pathname.replace("//totp/","")).split(":")[0],a=s.searchParams.get("secret");if(s.protocol!=="otpauth:"||!o||!a)throw new Error(`Invalid URL: ${s.toString()}`);n(o,a),e()}catch(s){console.error(s),p.error("Failed to scan qr code")}},onError:r=>console.error(r==null?void 0:r.message),components:{audio:!1}})]})})}function Nt(){const[e,n]=l.useState(null);return[l.useCallback(async s=>{if(!(navigator!=null&&navigator.clipboard))return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(s),n(s),!0}catch(o){return console.warn("Copy failed",o),n(null),!1}},[]),e]}function Mt(){const[e,n]=l.useState(!1);return l.useEffect(()=>{const r=()=>{n(window.innerWidth<500)};return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),e}const C=new Map;function K({data:e,userRef:n,timestamp:r,onEdit:s,setEditMode:o,editMode:a,addRecentKey:i}){const c=l.useContext(S)||"",[u,g]=l.useState(C.get(e.name)||""),[h,f]=l.useState(0),d=Mt(),[x]=Nt(),y=l.useCallback(()=>{a?s():h===0?f(1):b()},[a,h]),E=k(()=>o(!a),y);l.useEffect(()=>{u.length>0&&f(2)},[]),l.useEffect(()=>{if(h!==0){if(C.has(e.name)){g(C.get(e.name)||"");return}j.decrypt(c,e.secret).then(m=>{g(m.secret),C.set(e.name,m.secret)}).catch(m=>{console.error(m),g("Error"),C.delete(e.name)})}},[e.secret,c,h]),l.useEffect(()=>{let m;return h!==0&&(m=setTimeout(()=>{f(0)},30*1e3)),()=>{m&&clearTimeout(m)}},[h]);const w=Math.floor(r.getTime()/3e4),A=l.useMemo(()=>{if(u.length===0||u==="Error"||h===0)return"Token Error";try{return pe.generate(u.replace(/\s+/g,""),{timestamp:w*3e4}).otp}catch(m){return console.error(m),"Token Error"}},[u,w,h]),b=l.useCallback(()=>{x(A).then(m=>{m&&A!=="Token Error"?p.success(e.name+" code copied",{bodyClassName:d?"text-right":"",autoClose:2500}):p.error("Failed to copy code",{autoClose:2500})}),i(e.name)},[A,e,d,x]);return l.useEffect(()=>{h===1&&A!=="Token Error"&&(b(),f(2))},[h,A]),t.jsxs("div",{className:I("p-3 bg-slate-800 border border-slate-700 rounded-md select-none flex gap-6 justify-between items-center hover:brightness-[90%] relative cursor-pointer transition-all rotate-0",a&&"animate-wiggle"),style:{animationDelay:`${Math.random()*250}ms`},tabIndex:0,...E(),onKeyDown:m=>{(m.key==="Enter"||m.key===" ")&&y()},children:[t.jsxs("div",{className:"flex gap-4",children:[t.jsx(re,{name:e.name}),t.jsxs("div",{className:"flex flex-col items-start justify-center",children:[t.jsx("h2",{className:"font-bold capitalize",children:e.name}),t.jsx("div",{children:h===0?"*** ***":u.length===0?"Decrypting...":A==="Token Error"?"Token Error":t.jsxs(t.Fragment,{children:[t.jsx("span",{className:"mr-2",children:A.slice(0,3)}),t.jsx("span",{children:A.slice(3,6)})]})})]})]}),t.jsx("button",{className:"remove absolute -top-3 -right-3 !p-1 text-slate-800 bg-white border border-slate-400 rounded-full hover:text-white sm:hover:bg-danger transition-all duration-300",style:{pointerEvents:a?"auto":"none",opacity:a?1:0},tabIndex:a?0:-1,onClick:m=>{m.stopPropagation(),window.confirm(`Are you sure you want to remove ${e.name}? This cannot be undone!`)&&window.confirm(`Are you really sure you want to delete ${e.name}?`)&&v(n,{keys:R(e)})},onMouseDown:m=>m.stopPropagation(),onTouchStart:m=>m.stopPropagation(),onPointerDown:m=>m.stopPropagation(),children:t.jsx(G,{})})]})}function kt(e){const[n,r]=l.useState(e.name||""),[s,o]=l.useState(""),[a,i]=l.useState(!1),[c,u]=l.useState(!0),[g,h]=l.useState(!1),[f,d]=l.useState(!1),x=l.useContext(S)||"",y=e.name||e.secret;l.useEffect(()=>{if(e.name&&e.secret){if(C.has(e.name)){o(C.get(e.name));return}d(!0),j.decrypt(x,e.secret).then(w=>{o(w.secret)}).catch(w=>{console.error(w),p.error("Failed to decrypt token.",{autoClose:2500}),e.close()}).finally(()=>d(!1))}},[]);const E=async(w,A)=>{if(w===""||A===""){p.error("Name and secret are required");return}if(y&&e.name===w&&e.secret===A){e.close();return}try{h(!0),y&&(await v(e.userRef,{keys:R({name:e.name,secret:e.secret})}),e.name&&C.delete(e.name));const b=await j.encrypt(x,{secret:A});await v(e.userRef,{keys:P({name:w,secret:b})}),r(""),o(""),u(!0),e.close()}catch(b){console.error(b),p.error("Failed to add key")}finally{h(!1)}};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flex flex-col gap-8",onKeyDown:w=>{w.key==="Enter"&&E(n,s)},children:[t.jsxs("div",{className:"flex gap-4 items-center",children:[t.jsx(re,{name:n,className:"w-14 h-14 sm:w-16 sm:h-16"}),t.jsxs("div",{className:"flex flex-col gap-3 w-full",children:[t.jsx("input",{value:n,onChange:w=>r(w.target.value),placeholder:"Site name",autoFocus:!0,autoComplete:"false",type:"text"}),t.jsxs("div",{className:"relative",children:[t.jsx("input",{value:s,onChange:w=>o(w.target.value),placeholder:f?"Decrypting":"Secret",autoComplete:"false",type:c?"password":"text",disabled:f}),t.jsx("button",{className:"absolute right-0 top-0 bottom-0 flex items-center cursor-pointer bg-transparent",onClick:()=>u(!c),children:c?t.jsx(we,{}):t.jsx(xe,{})})]})]})]}),t.jsxs("div",{className:"flex gap-4",children:[!y&&t.jsx("button",{onClick:()=>i(!0),children:t.jsx(ye,{})}),t.jsx("button",{onClick:()=>E(n,s),className:"flex-1",disabled:g,children:g?y?"Saving":"Adding":y?"Save":"Add"})]})]}),a&&t.jsx(It,{close:()=>i(!1),onScan:(w,A)=>{r(w),o(A)}})]})}function St({onClose:e,title:n,children:r}){return t.jsx("div",{className:"fixed z-10 inset-0 bg-slate-900 bg-opacity-75 flex justify-center items-center",onClick:e,onKeyDown:s=>{s.key==="Escape"&&e()},children:t.jsxs("div",{className:"bg-slate-700 rounded-lg p-8 w-full",onClick:s=>s.stopPropagation(),style:{marginTop:"calc(-1 * env(keyboard-inset-height))",maxWidth:"min(80vw, 600px)"},children:[t.jsxs("div",{className:"flex items-center mb-8",children:[t.jsx("h2",{className:"flex-1 text-xl font-medium",children:n}),t.jsx("button",{onClick:e,className:"px-2 bg-slate-600 border-2 border-slate-800",children:t.jsx(G,{})})]}),r]})})}function Dt({userData:e,userRef:n,editMode:r,setEditMode:s,editKey:o,setEditKey:a}){var w;const{timestamp:i}=lt(),c=gt(),u=l.useContext(S)||"",[g,h]=l.useState(""),[f,d]=l.useState();l.useEffect(()=>()=>{s(!1),a(!1)},[]),l.useEffect(()=>{r&&navigator.vibrate&&navigator.vibrate(200)},[r]);const x=l.useCallback(async A=>{let m=[...e.recentKeys||[]];m.includes(A)&&(m=m.filter(O=>O!==A)),m.unshift(A),m.length>4&&(m=m.slice(0,4)),JSON.stringify(m)!==JSON.stringify(e.recentKeys)&&await v(n,{recentKeys:m})},[e.recentKeys,n]),y=l.useCallback(A=>{a(!0),d({name:A.name,secret:A.secret})},[u,a,d]),E="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6";return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"flex flex-col gap-4 m-6 sm:m-8 items-center pb-24",children:((w=e.keys)==null?void 0:w.length)===0?t.jsx("div",{className:"text-center text-lg bg-slate-800 p-8 w-full rounded-md",children:"No keys added yet"}):t.jsxs("div",{className:"w-full max-w-screen-lg",children:[t.jsxs("div",{className:"flex gap-4 sm:gap-6 items-center mb-10",children:[t.jsx("img",{src:te,className:"h-10 aspect-square -mb-0.5"}),t.jsxs("div",{className:"relative w-full",children:[t.jsx("input",{className:"pl-10",type:"search",value:g,placeholder:"Search tokens",onChange:A=>h(A.target.value)}),t.jsx(be,{className:"fill-slate-400 absolute left-3 top-[11px] h-4"})]})]}),e.recentKeys.length>0&&t.jsxs("div",{className:"grid gap-4 sm:gap-6 mb-4 sm:mb-6",children:[t.jsx("h2",{className:"m-0 text-xl leading-none",children:"Recently Used"}),t.jsx("div",{className:E,children:e.recentKeys.slice(0,c==="sm"||c==="lg"?3:4).map(A=>{const b=e.keys.find(m=>m.name===A);if(b)return t.jsx(K,{data:b,userRef:n,timestamp:i,onEdit:()=>y(b),setEditMode:s,editMode:r,addRecentKey:x},b.name+b.secret)})}),t.jsx("hr",{className:"border-slate-700"})]}),t.jsx("div",{className:E,children:e.keys.filter(A=>g.length===0||A.name.toLowerCase().includes(g.toLowerCase())).sort((A,b)=>A.name.localeCompare(b.name)).map(A=>t.jsx(K,{data:A,userRef:n,timestamp:i,onEdit:()=>y(A),setEditMode:s,editMode:r,addRecentKey:x},A.name+A.secret))})]})}),o&&t.jsx(St,{title:f!=null&&f.name||f!=null&&f.secret?"Edit existing key":"Add a new key",onClose:()=>{a(!1),d(void 0)},children:t.jsx(kt,{name:f==null?void 0:f.name,secret:f==null?void 0:f.secret,userRef:n,close:()=>{a(!1),d(void 0)}})})]})}function Qt(){const[e,n,r]=F(N);return We(),n||r?t.jsx(M,{children:r&&t.jsxs("p",{children:["Error: ",r.message]})}):e?t.jsx(Tt,{user:e}):t.jsx(M,{children:t.jsx(at,{})})}async function Z(e){let n="",r=0;for(;n.length!==6&&r<3;)n=prompt("Set a new 6 digit pin")||"",r++;if(n.length===6&&(prompt("Re-enter 6 digit pin")||"")!==n){p.error("Pins do not match");return}if(n.length===6){e||(e=crypto.getRandomValues(new Uint32Array(32)).toString());try{return await j.encrypt(n,{token:e})}catch(s){console.error(s)}}}function X({className:e}){return Pe()?null:t.jsx(je,{className:Y("text-danger fixed top-2 right-2 text-2xl z-10 "+e),title:"You are currently offline. It is not recommend to add/edit keys offline to avoid conflicts."})}function Tt({user:e}){const{data:n,loading:r,error:s,userRef:o}=Ke(),[a,i]=l.useState(),[c,u]=l.useState(!1),[g,h]=l.useState(!1);$(d=>{d||i(void 0)}),l.useEffect(()=>{!r&&!s&&!n&&Z().then(d=>{d?Te(o,{keys:[],recentKeys:[],email:e.email||"",code:d,webauthn:[]}):p.error("Failed to create user")})},[n,r,s]);const f=async()=>{if(!confirm("Would you like to update your pin?"))return;const d=await Z(a);d?v(o,{code:d}):p.error("Failed to update pin")};return r||s||!n?t.jsxs(M,{children:[s&&t.jsxs("p",{children:["Error: ",s.message]}),!n&&t.jsx("p",{children:"No data"})]}):a?t.jsxs(S.Provider,{value:a,children:[t.jsx(X,{}),t.jsx(Dt,{userData:n,userRef:o,editMode:c,setEditMode:u,editKey:g,setEditKey:h}),t.jsx(ft,{}),t.jsx(ct,{lock:()=>i(void 0),updateCode:f,editMode:c,setEditKey:h,setEditMode:u,exportKeys:()=>Ze(a,n),importKeys:()=>Xe(a,n,o)})]}):t.jsxs(t.Fragment,{children:[t.jsx(X,{className:"!bottom-4 !right-5 top-auto"}),t.jsx(ot,{unlock:d=>i(d),encryptedCode:n==null?void 0:n.code,data:n,userRef:o})]})}window.global||(window.global=window);globalThis.Buffer=Ce.Buffer;const zt=matchMedia("(display-mode: browser)").matches;zt||window.resizeTo(500,760);const V=navigator;V.virtualKeyboard&&(V.virtualKeyboard.overlaysContent=!0);function Ft(){return t.jsxs(t.Fragment,{children:[t.jsx(Qt,{}),t.jsx(Ee,{theme:"dark",position:"bottom-center",transition:Be,hideProgressBar:!0,closeButton:!1,autoClose:5e3})]})}ve.createRoot(document.getElementById("root")).render(t.jsx(Ft,{}));export{Wt as a,Lt as g};
//# sourceMappingURL=index-Dk-gAazt.js.map
