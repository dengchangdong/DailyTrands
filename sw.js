if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let t={};const u=s=>i(s,r),a={module:{uri:r},exports:t,require:u};e[r]=Promise.all(l.map((s=>a[s]||u(s)))).then((s=>(n(...s),t)))}}define(["./workbox-faaa562d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/403-33bd1f18.js",revision:null},{url:"assets/403-b0b40166.css",revision:null},{url:"assets/404-d916f4e7.js",revision:null},{url:"assets/404-dc01ded2.css",revision:null},{url:"assets/500-44ca15e4.js",revision:null},{url:"assets/500-f929edf8.css",revision:null},{url:"assets/Home-9b4ee4a6.js",revision:null},{url:"assets/Home-ef7993e3.css",revision:null},{url:"assets/index-5b3ed4a8.js",revision:null},{url:"assets/index-65e9b8ed.js",revision:null},{url:"assets/index-bc27c7d5.css",revision:null},{url:"assets/List-196fa81e.js",revision:null},{url:"assets/List-94a6cee8.css",revision:null},{url:"assets/Result-3232d719.js",revision:null},{url:"assets/Select-1ddc8fc0.js",revision:null},{url:"assets/Setting-c65b2d3b.css",revision:null},{url:"assets/Setting-d96d8e2c.js",revision:null},{url:"assets/Tag-2bff8760.js",revision:null},{url:"assets/Test-aef595e6.js",revision:null},{url:"assets/Test-ff08ab87.css",revision:null},{url:"assets/vuedraggable.umd-73c128a8.js",revision:null},{url:"index.html",revision:"9f44148487b5560bd0cf8408199da45a"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"ico/favicon.png",revision:"d1f8ebcc6327ed6cc6061a908117ea78"},{url:"manifest.webmanifest",revision:"0da201f30fa5e689612a1a579e4ab978"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute(/(.*?)\.(woff2|woff|ttf)/,new s.CacheFirst({cacheName:"file-cache",plugins:[]}),"GET"),s.registerRoute(/(.*?)\.(webp|png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new s.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
