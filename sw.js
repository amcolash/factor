if(!self.define){let e,s={};const n=(n,i)=>(n=new URL(n+".js",i).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(i,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const t=e=>n(e,o),a={module:{uri:o},exports:l,require:t};s[o]=Promise.all(i.map((e=>a[e]||t(e)))).then((e=>(r(...e),l)))}}define(["./workbox-78331965"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/bastillion-C8U43q6p.png",revision:null},{url:"assets/betterment-qyE9Qf23.png",revision:null},{url:"assets/firebase-CQ7Shay7.js",revision:null},{url:"assets/firebase-CQ7Shay7.js.map",revision:null},{url:"assets/guideline-BzofyXre.png",revision:null},{url:"assets/id.me-DKMQt8CE.png",revision:null},{url:"assets/index-C-m8bfRt.css",revision:null},{url:"assets/index-D0hPhKkn.js",revision:null},{url:"assets/index-D0hPhKkn.js.map",revision:null},{url:"assets/justworks-GR0TnuZp.jpg",revision:null},{url:"assets/logo-lomxQ9_I.png",revision:null},{url:"assets/qr-scanner-okGx8PHk.js",revision:null},{url:"assets/qr-scanner-okGx8PHk.js.map",revision:null},{url:"assets/simple-icons-5YJPn3BQ.js",revision:null},{url:"assets/simple-icons-5YJPn3BQ.js.map",revision:null},{url:"assets/uwcu-Cguu5ZT9.png",revision:null},{url:"assets/vendor-Blq3S4Ne.js",revision:null},{url:"assets/vendor-Blq3S4Ne.js.map",revision:null},{url:"assets/vendor-DiFyTCEx.css",revision:null},{url:"index.html",revision:"ac553e8de3506ce7e9ec9167d4570fdf"},{url:"logos/logo-circle.svg",revision:"9796c54d5e6b202956d9ede846b1a944"},{url:"logos/logo-rounded.svg",revision:"dca29f3944a0fc0e9d0d6da61b033600"},{url:"logos/logo.svg",revision:"1ba274b824f76b38254eca0244802644"},{url:"manifest.webmanifest",revision:"2ef433ff65b59559e360ae073dd11772"},{url:"screenshots/screenshot-tall-1.png",revision:"57c6d2f7b7a7b49383d00df5c7423121"},{url:"screenshots/screenshot-tall-2.png",revision:"2f3c64c289b9026064ec5a6dbc62e4b4"},{url:"screenshots/screenshot-wide-1.png",revision:"abd9a42fb4936709a094363e103f80e4"},{url:"screenshots/screenshot-wide-2.png",revision:"5a3f202d48271a9e7abd8f0ced877505"},{url:"./logos/logo.svg",revision:"1ba274b824f76b38254eca0244802644"},{url:"./logos/logo-rounded.svg",revision:"dca29f3944a0fc0e9d0d6da61b033600"},{url:"logos/logo-circle.svg",revision:"9796c54d5e6b202956d9ede846b1a944"},{url:"screenshots/screenshot-tall-1.png",revision:"57c6d2f7b7a7b49383d00df5c7423121"},{url:"screenshots/screenshot-tall-2.png",revision:"2f3c64c289b9026064ec5a6dbc62e4b4"},{url:"screenshots/screenshot-wide-1.png",revision:"abd9a42fb4936709a094363e103f80e4"},{url:"screenshots/screenshot-wide-2.png",revision:"5a3f202d48271a9e7abd8f0ced877505"},{url:"manifest.webmanifest",revision:"2ef433ff65b59559e360ae073dd11772"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.gstatic\.com\/.*/i,new e.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map
