if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,r)=>{const o=s||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let l={};const t=s=>n(s,o),a={module:{uri:o},exports:l,require:t};e[o]=Promise.all(i.map((s=>a[s]||t(s)))).then((s=>(r(...s),l)))}}define(["./workbox-78331965"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/bastillion-C8U43q6p.png",revision:null},{url:"assets/betterment-qyE9Qf23.png",revision:null},{url:"assets/firebase-sYCQt8ZG.js",revision:null},{url:"assets/firebase-sYCQt8ZG.js.map",revision:null},{url:"assets/guideline-BzofyXre.png",revision:null},{url:"assets/id.me-DKMQt8CE.png",revision:null},{url:"assets/index-1OQT6dGP.js",revision:null},{url:"assets/index-1OQT6dGP.js.map",revision:null},{url:"assets/index-DVlrD2aE.css",revision:null},{url:"assets/justworks-GR0TnuZp.jpg",revision:null},{url:"assets/logo-lomxQ9_I.png",revision:null},{url:"assets/qr-scanner-BJt17_9o.js",revision:null},{url:"assets/qr-scanner-BJt17_9o.js.map",revision:null},{url:"assets/simple-icons-5YJPn3BQ.js",revision:null},{url:"assets/simple-icons-5YJPn3BQ.js.map",revision:null},{url:"assets/uwcu-Cguu5ZT9.png",revision:null},{url:"assets/vendor-DiFyTCEx.css",revision:null},{url:"assets/vendor-DkBzqjRh.js",revision:null},{url:"assets/vendor-DkBzqjRh.js.map",revision:null},{url:"index.html",revision:"78a0b69632140fea3f9f25be48453bd8"},{url:"logos/logo-circle.svg",revision:"9796c54d5e6b202956d9ede846b1a944"},{url:"logos/logo-rounded.svg",revision:"dca29f3944a0fc0e9d0d6da61b033600"},{url:"logos/logo.svg",revision:"1ba274b824f76b38254eca0244802644"},{url:"manifest.webmanifest",revision:"2ef433ff65b59559e360ae073dd11772"},{url:"screenshots/screenshot-tall-1.png",revision:"57c6d2f7b7a7b49383d00df5c7423121"},{url:"screenshots/screenshot-tall-2.png",revision:"2f3c64c289b9026064ec5a6dbc62e4b4"},{url:"screenshots/screenshot-wide-1.png",revision:"abd9a42fb4936709a094363e103f80e4"},{url:"screenshots/screenshot-wide-2.png",revision:"5a3f202d48271a9e7abd8f0ced877505"},{url:"./logos/logo.svg",revision:"1ba274b824f76b38254eca0244802644"},{url:"./logos/logo-rounded.svg",revision:"dca29f3944a0fc0e9d0d6da61b033600"},{url:"logos/logo-circle.svg",revision:"9796c54d5e6b202956d9ede846b1a944"},{url:"screenshots/screenshot-tall-1.png",revision:"57c6d2f7b7a7b49383d00df5c7423121"},{url:"screenshots/screenshot-tall-2.png",revision:"2f3c64c289b9026064ec5a6dbc62e4b4"},{url:"screenshots/screenshot-wide-1.png",revision:"abd9a42fb4936709a094363e103f80e4"},{url:"screenshots/screenshot-wide-2.png",revision:"5a3f202d48271a9e7abd8f0ced877505"},{url:"manifest.webmanifest",revision:"2ef433ff65b59559e360ae073dd11772"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new s.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map
