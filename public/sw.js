if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let r={};const c=e=>i(e,t),o={module:{uri:t},exports:r,require:c};s[t]=Promise.all(n.map((e=>o[e]||c(e)))).then((e=>(a(...e),r)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.html",revision:"0a27a4163254fc8fce870c8cc3a3f94f"},{url:"/_next//static/media/chart.f9d8ad74.svg",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next//static/media/cow.3774ef08.svg",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next//static/media/tube.abcf71bb.svg",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/1_ey_T0UOfojq1Tsqggrs/_buildManifest.js",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/1_ey_T0UOfojq1Tsqggrs/_middlewareManifest.js",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/1_ey_T0UOfojq1Tsqggrs/_ssgManifest.js",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/chunks/646-7b3229ae109e12e1.js",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/chunks/651.243d23442247d286.js",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/chunks/929-e4781ea07c06a6a5.js",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/chunks/main-911cae6bf66273c0.js",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/chunks/pages/404-ffc3c8957f6522dc.js",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/chunks/pages/_app-1c0cdac1bc98811a.js",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/chunks/pages/_error-6819325ff470bbd0.js",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/chunks/pages/cattle-15297b46ee852192.js",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/chunks/pages/cattle/%5Bid%5D-2709ac0bd7c2b965.js",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/chunks/pages/index-746e4d6951f830a8.js",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/chunks/pages/semen-1134e376443d4167.js",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/chunks/webpack-813d581337d07d7d.js",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/css/1b0caf5563eb4244.css",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/media/prompt-all-400-normal.cf2f3a33.woff",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/media/prompt-all-700-normal.4e0d4aff.woff",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/media/prompt-latin-400-normal.ac1c02e4.woff2",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/media/prompt-latin-700-normal.33f7a855.woff2",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/media/prompt-latin-ext-400-normal.b9f769c0.woff2",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/media/prompt-latin-ext-700-normal.240d6635.woff2",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/media/prompt-thai-400-normal.2d7051f8.woff2",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/media/prompt-thai-700-normal.eb0ebdea.woff2",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/media/prompt-vietnamese-400-normal.2f7e5073.woff2",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/_next/static/media/prompt-vietnamese-700-normal.b113fcf6.woff2",revision:"1_ey_T0UOfojq1Tsqggrs"},{url:"/favicon.ico",revision:"3b935e197bb45169a4eaf1922accec68"},{url:"/icons/chart.svg",revision:"950960461e7e63c489b9c143fbb27c35"},{url:"/icons/cow.svg",revision:"8b5fa00b430499b6b3993b5ba5bde5fc"},{url:"/icons/loader.gif",revision:"1224b9e7879c9ca26dbdeafee4d9ae10"},{url:"/icons/tube.svg",revision:"d9fe76ce6a4528c7618ed416cf82e2c6"},{url:"/images/semen/61ed70cbf029845c1a719483.webp",revision:"90e7cd947fb4d5ea19808b8efeeb324b"},{url:"/images/semen/61ed76aef029845c1a71949d.webp",revision:"80dd5ec0fa6f4f276d61d95b6b5c3eb1"},{url:"/images/semen/61ed808ff029845c1a719520.webp",revision:"fe00a09f0c142d5be929c794d8aadefa"},{url:"/images/semen/61ed810cf029845c1a719523.webp",revision:"3e6f0a3a68167530b2fab4669c5f2a6b"},{url:"/images/semen/61ed8169f029845c1a719526.webp",revision:"da59ab032b018edd0f378db218cff29b"},{url:"/images/semen/61ed81f6f029845c1a719529.webp",revision:"09fe6e910163102e89b4b7b4183af18f"},{url:"/images/semen/61ed826af029845c1a71952c.webp",revision:"6b099e2d7ee9ad1e03a223feff673c13"},{url:"/manifest.json",revision:"cb5d82113725c6b6ec44b350804c4717"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
