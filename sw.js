if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const u=s=>i(s,r),a={module:{uri:r},exports:t,require:u};e[r]=Promise.all(l.map((s=>a[s]||u(s)))).then((s=>(n(...s),t)))}}define(["./workbox-faaa562d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/403-3e094d8b.js",revision:null},{url:"assets/403-b0b40166.css",revision:null},{url:"assets/404-dc01ded2.css",revision:null},{url:"assets/404-e1740632.js",revision:null},{url:"assets/500-4c5abba8.js",revision:null},{url:"assets/500-f929edf8.css",revision:null},{url:"assets/Home-80001df6.js",revision:null},{url:"assets/Home-ef7993e3.css",revision:null},{url:"assets/index-5170f2bc.js",revision:null},{url:"assets/index-c412eba6.js",revision:null},{url:"assets/index-e4edc2cc.css",revision:null},{url:"assets/List-352652a9.js",revision:null},{url:"assets/List-94a6cee8.css",revision:null},{url:"assets/Result-772c5fff.js",revision:null},{url:"assets/Select-b262cc01.js",revision:null},{url:"assets/Setting-1299e402.js",revision:null},{url:"assets/Setting-c65b2d3b.css",revision:null},{url:"assets/Tag-ffcb6dc5.js",revision:null},{url:"assets/Test-a641acf3.js",revision:null},{url:"assets/Test-ff08ab87.css",revision:null},{url:"assets/vuedraggable.umd-b67b15a0.js",revision:null},{url:"index.html",revision:"dbbe794c1c7ab2b6b1fe257446ef7e49"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"ico/favicon.png",revision:"d1f8ebcc6327ed6cc6061a908117ea78"},{url:"manifest.webmanifest",revision:"0da201f30fa5e689612a1a579e4ab978"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/(.*?)\.(woff2|woff|ttf)/,new s.CacheFirst({cacheName:"file-cache",plugins:[]}),"GET"),s.registerRoute(/(.*?)\.(webp|png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new s.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
