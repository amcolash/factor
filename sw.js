if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const l=e=>i(e,c),a={module:{uri:c},exports:o,require:l};s[c]=Promise.all(n.map((e=>a[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/firebase-3c6fffea.js",revision:null},{url:"assets/index-4fad3d39.js",revision:null},{url:"assets/index-9cb5ab1c.css",revision:null},{url:"assets/logo-d1f49d9e.png",revision:null},{url:"assets/qr-scanner-4c561c8d.js",revision:null},{url:"assets/react-5368749d.js",revision:null},{url:"assets/simple-icons-9fc1fa0d.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"icon-192x192.png",revision:"6ace3e0be0ef0c0aafb3b9ebd545ceae"},{url:"icon-256x256.png",revision:"e2b679296d3726583fc704749846d6db"},{url:"icon-384x384.png",revision:"4c8d21b462f488cc503247408c9a3ed9"},{url:"icon-512x512.png",revision:"3069cbb1b613080c7df04a2ca1c067bc"},{url:"index.html",revision:"80df901ceb6e414789273f1a73ad8637"},{url:"manifest.webmanifest",revision:"5bea589213aba860ab457b1a1b6df413"},{url:"icon-192x192.png",revision:"6ace3e0be0ef0c0aafb3b9ebd545ceae"},{url:"icon-256x256.png",revision:"e2b679296d3726583fc704749846d6db"},{url:"icon-384x384.png",revision:"4c8d21b462f488cc503247408c9a3ed9"},{url:"icon-512x512.png",revision:"3069cbb1b613080c7df04a2ca1c067bc"},{url:"manifest.webmanifest",revision:"5bea589213aba860ab457b1a1b6df413"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
