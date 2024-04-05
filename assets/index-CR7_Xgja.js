function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["/factor/assets/vendor-DiFyTCEx.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{r as u,u as E,a as Z,j as e,b as G,F as Y,P as K,d as W,B as j,c as q,J as N,e as V,f as B,g as S,h as J,l as A,i as L,k as Q,m as O,T as _,C as $,n as ee,p as te,q as se,Q as re,X as ne}from"./vendor-DTpLz1XB.js";import{i as oe,g as ae,a as ie,p as ce,d as le,t as de,c as ue,u as C,b as H,e as fe,s as me}from"./firebase-CvI2GOf6.js";import{i as ge,s as he,a as pe}from"./simple-icons-5YJPn3BQ.js";import{z as xe}from"./qr-scanner-BNDZ76mO.js";import"./index-CR7_Xgja.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();var nt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ot(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function at(t){if(t.__esModule)return t;var r=t.default;if(typeof r=="function"){var s=function n(){return this instanceof n?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};s.prototype=r.prototype}else s={};return Object.defineProperty(s,"__esModule",{value:!0}),Object.keys(t).forEach(function(n){var a=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(s,n,a.get?a:{enumerable:!0,get:function(){return t[n]}})}),s}const we="modulepreload",je=function(t,r){return t[0]==="."?new URL(t,r).href:t},D={},ye=function(r,s,n){let a=Promise.resolve();if(s&&s.length>0){const o=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),f=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));a=Promise.all(s.map(d=>{if(d=je(d,n),d in D)return;D[d]=!0;const g=d.endsWith(".css"),l=g?'[rel="stylesheet"]':"";if(!!n)for(let m=o.length-1;m>=0;m--){const p=o[m];if(p.href===d&&(!g||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${l}`))return;const c=document.createElement("link");if(c.rel=g?"stylesheet":we,g||(c.as="script",c.crossOrigin=""),c.href=d,f&&c.setAttribute("nonce",f),document.head.appendChild(c),g)return new Promise((m,p)=>{c.addEventListener("load",m),c.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${d}`)))})}))}return a.then(()=>r()).catch(o=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=o,window.dispatchEvent(i),!i.defaultPrevented)throw o})};function be(t={}){const{immediate:r=!1,onNeedRefresh:s,onOfflineReady:n,onRegistered:a,onRegisteredSW:o,onRegisterError:i}=t;let f,d,g;const l=async(c=!0)=>{await d,await(g==null?void 0:g())};async function w(){if("serviceWorker"in navigator){if(f=await ye(()=>import("./vendor-DTpLz1XB.js").then(c=>c.w),__vite__mapDeps([0]),import.meta.url).then(({Workbox:c})=>new c("/factor/sw.js",{scope:"/factor/",type:"classic"})).catch(c=>{i==null||i(c)}),!f)return;g=async()=>{await(f==null?void 0:f.messageSkipWaiting())};{let c=!1;const m=()=>{c=!0,f==null||f.addEventListener("controlling",p=>{p.isUpdate&&window.location.reload()}),s==null||s()};f.addEventListener("installed",p=>{typeof p.isUpdate>"u"?typeof p.isExternal<"u"?p.isExternal?m():!c&&(n==null||n()):p.isExternal?window.location.reload():!c&&(n==null||n()):p.isUpdate||n==null||n()}),f.addEventListener("waiting",m),f.addEventListener("externalwaiting",m)}f.register({immediate:r}).then(c=>{o?o("/factor/sw.js",c):a==null||a(c)}).catch(c=>{i==null||i(c)})}}return d=w(),l}const T=u.createContext(void 0),ve={apiKey:"AIzaSyDMQ4jffBbrLTjdhy_qS4GeZdbYtzEKHp4",authDomain:"factor-97c20.firebaseapp.com",projectId:"factor-97c20",storageBucket:"factor-97c20.appspot.com",messagingSenderId:"524844196447",appId:"1:524844196447:web:9d5f59006ec0b8e68d31ea"},U=oe(ve),b=ae(U),M=ie(U,{localCache:ce()});function Ce(){const[t]=E(b),r=le(M,"users",(t==null?void 0:t.uid)||""),[s,n,a]=Z(r);return{value:s,loading:n,error:a,userRef:r}}const Ae="/factor/assets/logo-lomxQ9_I.png";function ke({className:t}){return e.jsx("img",{src:Ae,className:"h-52 "+t})}function F({className:t,children:r,...s}){return e.jsxs("div",{className:"w-screen h-[100svh] flex flex-col justify-center items-center gap-5",...s,children:[e.jsx("h1",{className:"text-center m-0",children:"Factor"}),e.jsx(ke,{className:t}),r]})}function Ne({unlock:t,encryptedCode:r}){const s=u.useRef(null),[n]=G(b);u.useEffect(()=>{setTimeout(()=>{var o;return(o=s.current)==null?void 0:o[0].focus()},250)},[]);const a=async o=>{if((o==null?void 0:o.length)===6)try{const i=await W(o,r);t(i.token)}catch(i){console.log(i,o),j.error("Invalid code")}s.current&&(s.current.forEach(i=>{i.value=""}),s.current[0].focus())};return e.jsxs(F,{onClick:()=>{s.current&&s.current[0].focus()},style:{marginTop:"calc(-1 * env(keyboard-inset-height) / 2)"},children:[e.jsx("button",{className:"icon fixed top-4 right-4 bg-danger",onClick:async()=>{try{await n(),await de(M),await ue(M)}catch(o){console.error(o)}},children:e.jsx(Y,{})}),e.jsx("div",{className:"flex",children:e.jsx(K,{length:6,className:"border border-slate-500 w-10 sm:w-12 h-14 m-1.5 rounded-lg text-center text-6xl p-1",type:"password",inputMode:"numeric",ref:s,onComplete:a,onClick:o=>o.stopPropagation()})})]})}function Se(){const[t]=E(b),[r,,s,n]=q(b);return e.jsxs("div",{className:"w-screen h-screen flex justify-center items-center flex-col",children:[!t&&!s&&e.jsxs("button",{onClick:()=>r(),className:"gsi-material-button",children:[e.jsx("div",{className:"gsi-material-button-state"}),e.jsxs("div",{className:"gsi-material-button-content-wrapper",children:[e.jsx("div",{className:"gsi-material-button-icon",children:e.jsxs("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",style:{display:"block"},children:[e.jsx("path",{fill:"#EA4335",d:"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"}),e.jsx("path",{fill:"#4285F4",d:"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"}),e.jsx("path",{fill:"#FBBC05",d:"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"}),e.jsx("path",{fill:"#34A853",d:"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"}),e.jsx("path",{fill:"none",d:"M0 0h48v48H0z"})]})}),e.jsx("span",{className:"gsi-material-button-contents",children:"Sign in with Google"}),e.jsx("span",{style:{display:"none"},children:"Sign in with Google"})]})]}),s&&e.jsx("p",{children:"Loading..."}),n&&e.jsxs("p",{children:["Error: ",n.message]})]})}function Me({lock:t,updateCode:r,editMode:s,setEditMode:n,setEditKey:a}){const o="p-4 rounded-full",i=N(r,{threshold:600,onCancel:(d,{reason:g})=>{g===S.CancelledByRelease&&t()}}),f=N(()=>{n(!0)},{threshold:600,onCancel:(d,{reason:g})=>{g===S.CancelledByRelease&&(s?n(!1):setTimeout(()=>a(!0),10))}});return e.jsxs("div",{className:"fixed bottom-8 right-8 flex gap-4 z-20",children:[e.jsx("button",{className:o+" !bg-slate-800 !text-primary outline outline-primary outline-2 -outline-offset-2",...f(),children:e.jsx(V,{})}),e.jsx("button",{className:"transition-transform "+o+(s?" rotate-45":""),...i(),children:e.jsx(B,{})})]})}function Ee(){const[t,r]=u.useState(new Date),[s,n]=u.useState(new Date);return u.useEffect(()=>{const a=setInterval(()=>n(new Date),1e3);let o;return setTimeout(()=>{r(new Date),o=setInterval(()=>r(new Date),3e4)},3e4-new Date().getTime()%3e4),()=>{o&&clearInterval(o),clearInterval(a)}},[]),{time:s,timestamp:t}}const I={content:["./index.html","./src/**/*.{js,ts,jsx,tsx}"],theme:{extend:{colors:{primary:"#4b888d",secondary:"#051524",tertiary:"#2c2155",danger:"#f07f7b"},keyframes:{wiggle:{"0%, 100%":{transform:"rotate(-0.5deg)"},"50%":{transform:"rotate(0.5deg)"}}},animation:{wiggle:"wiggle 400ms ease-in-out infinite"}}},plugins:[]};function Le(){return u.useMemo(()=>J(I),[I])}const Te="/factor/assets/bastillion-C8U43q6p.png",Fe="/factor/assets/betterment-qyE9Qf23.png",Pe="data:image/png;base64,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",De="/factor/assets/guideline-BzofyXre.png",Ie="/factor/assets/id.me-DKMQt8CE.png",Re="/factor/assets/justworks-GR0TnuZp.jpg",ze="/factor/assets/uwcu-Cguu5ZT9.png";function We(t){if(!t)return;let r=Object.entries(ge).filter(s=>t.toLowerCase().includes(s[1].title.toLowerCase())&&A(t.toLowerCase(),s[1].title.toLowerCase())<t.length/2).sort((s,n)=>A(t.toLowerCase(),s[1].title.toLowerCase())-A(t.toLowerCase(),n[1].title.toLowerCase()))[0];switch(t.toLowerCase()){case"bastillion":return{url:Te,padding:!0,type:"Image"};case"betterment":return{url:Fe,type:"Image"};case"carta":return{url:Pe,type:"Image"};case"facebook":return{...pe,padding:!1,type:"Icon"};case"guideline":return{url:De,type:"Image"};case"id.me":return{url:Ie,type:"Image"};case"justworks":return{url:Re,type:"Image"};case"nas":return{...he,type:"Icon"};case"uw credit union":case"uwcu":return{url:ze,padding:!0,type:"Image"}}return r?{...r[1],type:"Icon",padding:!0}:void 0}const k="bg-slate-900",Be="bg-slate-800";function Oe(t){if(!t||t.type==="Image")return{background:k,fill:Be};const r=t;let s=k,n="#"+r.hex;switch(r.title.toLowerCase()){case"amazon":s=k;break;case"microsoft":n="#00a2ed";break;case"github":case"patreon":case"ubisoft":s="bg-slate-100";break}return{background:s,fill:n}}function X({name:t,className:r}){const s=We(t),n=Oe(s),a="w-12 h-12 rounded-full border border-slate-400 flex justify-center items-center aspect-square "+n.background+" "+r;return s?s.type==="Image"?e.jsx("img",{src:s.url,className:a+` object-cover ${s.padding?"p-1":""}`}):e.jsx("div",{dangerouslySetInnerHTML:{__html:s.svg},className:`${a} ${s.padding?"p-2.5":"p-0.5"}`,style:{fill:n.fill}}):e.jsx("div",{className:a,children:e.jsx(B,{})})}function He({close:t,onScan:r}){return e.jsx("div",{className:"absolute inset-0 w-screen h-screen bg-black flex justify-center z-10",children:e.jsxs("div",{className:"relative w-[100vh] p-2",children:[e.jsx("div",{className:"absolute bottom-14 right-0 left-0 z-10 flex justify-center",children:e.jsx("button",{className:"icon",onClick:t,children:e.jsx(L,{})})}),e.jsx(xe,{onResult:async s=>{try{const n=new URL(s),a=decodeURIComponent(n.pathname.replace("//totp/","")).split(":")[0],o=n.searchParams.get("secret");if(n.protocol!=="otpauth:"||!a||!o)throw new Error(`Invalid URL: ${n.toString()}`);r(a,o),t()}catch(n){console.error(n),j.error("Failed to scan key")}},onError:s=>console.error(s==null?void 0:s.message),components:{audio:!1}})]})})}function Ue(t){const[r,s]=u.useState(t.name||""),[n,a]=u.useState(t.secret||""),[o,i]=u.useState(!1),f=u.useContext(T)||"",d=t.name||t.secret,g=async(l,w)=>{if(l===""||w===""){j.error("Name and secret are required");return}try{d&&(t.name!==l||t.secret!==w)&&await C(t.userRef,{keys:H({name:t.name,secret:t.secret})});const c=await O(f,{secret:w});await C(t.userRef,{keys:fe({name:l,secret:c})}),s(""),a(""),t.close()}catch(c){console.error(c),j.error("Failed to add key")}};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col gap-8",onKeyDown:l=>{l.key==="Enter"&&g(r,n)},children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("h2",{className:"flex-1 text-lg font-medium",children:d?"Edit existing key":"Add a new key"}),e.jsx("button",{onClick:t.close,className:"px-2",children:e.jsx(L,{})})]}),e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(X,{name:r,className:"w-14 h-14 sm:w-16 sm:h-16"}),e.jsxs("div",{className:"flex flex-col gap-3 w-full",children:[e.jsx("input",{value:r,onChange:l=>s(l.target.value),placeholder:"Site name",autoFocus:!0,autoComplete:"false",type:"text"}),e.jsx("input",{value:n,onChange:l=>a(l.target.value),placeholder:"Secret",autoComplete:"false",type:"password"})]})]}),e.jsxs("div",{className:"flex gap-4",children:[!d&&e.jsx("button",{onClick:()=>i(!0),children:e.jsx(Q,{})}),e.jsx("button",{onClick:()=>g(r,n),className:"flex-1",children:t.name||t.secret?"Save":"Add"})]})]}),o&&e.jsx(He,{close:()=>i(!1),onScan:(l,w)=>{s(l),a(w)}})]})}function Xe(){const[t,r]=u.useState(null);return[u.useCallback(async n=>{if(!(navigator!=null&&navigator.clipboard))return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(n),r(n),!0}catch(a){return console.warn("Copy failed",a),r(null),!1}},[]),t]}function Ze(){const[t,r]=u.useState(!1);return u.useEffect(()=>{const s=()=>{r(window.innerWidth<500)};return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),t}function Ge({data:t,userRef:r,timestamp:s,onEdit:n,setEditMode:a,editMode:o,index:i}){const f=u.useContext(T)||"",[d,g]=u.useState(""),[l,w]=u.useState(0),c=Ze(),[m]=Xe(),p=N(()=>a(!0),{threshold:600,onCancel:(x,{reason:P})=>{P===S.CancelledByRelease&&(l===0?w(1):o?n():y())}});u.useEffect(()=>{l!==0&&W(f,t.secret).then(x=>g(x.secret)).catch(x=>{console.error(x),g("Error")})},[t.secret,f,l]);const v=Math.floor(s.getTime()/3e4),h=u.useMemo(()=>{if(d.length===0||d==="Error"||l===0)return"Token Error";try{return _.generate(d.replace(/\s+/g,""),{timestamp:v*3e4}).otp}catch(x){return console.error(x),"Token Error"}},[d,v,l]),y=u.useCallback(()=>m(h).then(x=>{x&&h!=="Token Error"?j.info(t.name+" code copied",{bodyClassName:c?"text-right":""}):j.error("Failed to copy code")}),[h,t,c,m]);return u.useEffect(()=>{l===1&&h!=="Token Error"&&(y(),w(2))},[l,h]),e.jsxs("div",{className:"p-3 bg-slate-800 border border-slate-700 rounded-md select-none flex gap-6 justify-between items-center hover:brightness-[97%] relative cursor-pointer transition-transform duration-1000 rotate-0"+(o?" animate-wiggle":""),style:{animationDelay:`${i*100}ms`},...p(),children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx(X,{name:t.name}),e.jsxs("div",{className:"flex flex-col items-start justify-center",children:[e.jsx("h2",{className:"font-bold capitalize",children:t.name}),e.jsx("div",{children:l===0?"*** ***":d.length===0?"Decrypting...":h==="Token Error"?"Token Error":e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"mr-2",children:h.slice(0,3)}),e.jsx("span",{children:h.slice(3,6)})]})})]})]}),e.jsx("button",{className:"absolute -top-3 -right-3 !p-1 text-slate-800 bg-white border border-slate-400 rounded-full hover:text-white hover:brightness-100 sm:hover:bg-danger transition-all duration-300",style:{pointerEvents:o?"auto":"none",opacity:o?1:0},onClick:x=>{x.stopPropagation(),window.confirm("Are you sure you want to remove this token?")&&window.confirm("Are you really sure?")&&C(r,{keys:H(t)})},onMouseDown:x=>x.stopPropagation(),onTouchStart:x=>x.stopPropagation(),onPointerDown:x=>x.stopPropagation(),children:e.jsx(L,{})})]})}function Ye({userData:t,userRef:r,editMode:s,setEditMode:n,editKey:a,setEditKey:o}){const{time:i,timestamp:f}=Ee(),[d,g]=u.useState(""),[l,w]=u.useState(),c=Le(),m=3e4-i.getTime()%3e4,p=Math.ceil(m/1e3),v=u.useMemo(()=>e.jsxs(e.Fragment,{children:[t.keys.length===0&&e.jsx("div",{className:"text-center text-lg bg-slate-800 p-8 w-full rounded-md",children:"No keys added yet"}),t.keys.length>0&&e.jsxs("div",{className:"w-full max-w-screen-lg",children:[e.jsxs("div",{className:"relative",children:[e.jsx("input",{className:"mb-6 pl-10",type:"search",value:d,placeholder:"Search tokens",onChange:h=>g(h.target.value)}),e.jsx("svg",{className:"fill-slate-400 absolute left-3 top-[11px] h-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:e.jsx("path",{d:"M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"})})]}),e.jsx("div",{className:"w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6",children:t.keys.filter(h=>d.length===0||h.name.toLowerCase().includes(d.toLowerCase())).sort((h,y)=>h.name.localeCompare(y.name)).map((h,y)=>{try{return e.jsx(Ge,{data:h,userRef:r,timestamp:f,onEdit:()=>{o(!0),w(h)},setEditMode:n,editMode:s,index:y},h.name)}catch(x){return console.error(x),e.jsxs("div",{children:["Error Loading Token (",h.name,")"]})}})})]})]}),[t.keys,d,f,r,s]);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed bottom-0 left-0 h-1.5 bg-primary transition-transform duration-700 w-screen z-20 rounded",style:{transform:`scaleX(${p/30*100}%)`}}),e.jsx("div",{className:"flex sm:justify-center pl-8 sm:pl-0 w-full fixed bottom-0 left-0 right-0 pointer-events-none z-10 backdrop-blur-lg bg-slate-900 bg-opacity-30 pt-4",children:e.jsx("div",{className:"w-16 h-16 p-1 mb-6",children:e.jsx($,{value:p-1,maxValue:30,text:p.toString(),styles:ee({textSize:"40px",trailColor:c.theme.colors.slate[700],textColor:c.theme.colors.primary,pathColor:c.theme.colors.primary}),strokeWidth:10})})}),e.jsx("div",{className:"flex flex-col gap-4 m-6 sm:m-8 items-center pb-24",children:v}),a&&e.jsx("div",{className:"fixed z-10 inset-0 bg-slate-900 bg-opacity-75 flex justify-center items-center",onClick:()=>{o(!1),w(void 0)},children:e.jsx("div",{className:"bg-slate-700 rounded-lg p-8 w-full",onClick:h=>h.stopPropagation(),style:{marginTop:"calc(-1 * env(keyboard-inset-height))",maxWidth:"min(80vw, 600px)"},children:e.jsx(Ue,{name:l==null?void 0:l.name,secret:l==null?void 0:l.secret,userRef:r,close:()=>{o(!1),w(void 0)}})})})]})}function Ke(){const[t,r,s]=E(b);return r||s?e.jsx(F,{children:s&&e.jsxs("p",{children:["Error: ",s.message]})}):t?e.jsx(qe,{user:t}):e.jsx(Se,{})}async function R(t){let r="",s=0;for(;r.length!==6&&s<3;)r=prompt("Enter 6 digit pin")||"",s++;if(r.length===6&&(prompt("Re-enter 6 digit pin")||"")!==r){j.error("Codes do not match",{autoClose:5e3});return}if(r.length===6){t||(t=crypto.getRandomValues(new Uint32Array(32)).toString());try{return await O(r,{token:t})}catch(n){console.error(n)}}}function qe({user:t}){var c;const{value:r,loading:s,error:n,userRef:a}=Ce(),[o,i]=u.useState(),[f,d]=u.useState(!1),[g,l]=u.useState(!1);u.useEffect(()=>{const m=()=>{document.visibilityState==="visible"&&i(void 0)};return document.addEventListener("visibilitychange",m),()=>document.removeEventListener("visibilitychange",m)},[]),u.useEffect(()=>{!s&&!n&&(r==null?void 0:r.data())===void 0&&R().then(m=>{m?me(a,{keys:[],email:t.email||"",code:m}):j.error("Failed to create user")})},[r,s,n]);const w=async()=>{const m=await R(o);m?C(a,{code:m}):j.error("Failed to update code")};return s||n||!r||r.data()===void 0?e.jsxs(F,{children:[n&&e.jsxs("p",{children:["Error: ",n.message]}),!r||r.data()===void 0&&e.jsx("p",{children:"No data"})]}):o?e.jsxs(T.Provider,{value:o,children:[e.jsx(Me,{lock:()=>i(void 0),updateCode:w,editMode:f,setEditKey:l,setEditMode:d}),e.jsx(Ye,{userData:r.data(),userRef:a,editMode:f,setEditMode:d,editKey:g,setEditKey:l})]}):e.jsx(Ne,{unlock:m=>i(m),encryptedCode:(c=r.data())==null?void 0:c.code})}window.global||(window.global=window);globalThis.Buffer=te.Buffer;const Ve=be({onNeedRefresh(){confirm("New content available. Reload?")&&Ve()}}),Je=matchMedia("(display-mode: browser)").matches;Je||window.resizeTo(500,760);const z=navigator;z.virtualKeyboard&&(z.virtualKeyboard.overlaysContent=!0);function Qe(){return e.jsxs(e.Fragment,{children:[e.jsx(Ke,{}),e.jsx(re,{theme:"dark",position:"bottom-center",transition:ne,autoClose:1e3,hideProgressBar:!0,closeButton:!1})]})}se(document.getElementById("root")).render(e.jsx(Qe,{}));export{at as a,nt as c,ot as g};
//# sourceMappingURL=index-CR7_Xgja.js.map
