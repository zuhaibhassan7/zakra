(()=>{var e,t,r,o,a,n,i,l,c,s={},u={};function d(e){var t=u[e];if(void 0!==t)return t.exports;var r=u[e]={exports:{}};return s[e](r,r.exports,d),r.exports}d.m=s,d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>e+".js",d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="blockart-blocks:",d.l=(r,o,a,n)=>{if(e[r])e[r].push(o);else{var i,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var u=c[s];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+a){i=u;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",t+a),i.src=r),e[r]=[o];var p=(t,o)=>{i.onerror=i.onload=null,clearTimeout(f);var a=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(o))),t)return t(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;d.g.importScripts&&(e=d.g.location+"");var t=d.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=e})(),(()=>{var e={457:0};d.f.j=(t,r)=>{var o=d.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var n=d.p+d.u(t),i=new Error;d.l(n,(r=>{if(d.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",i.name="ChunkLoadError",i.type=a,i.request=n,o[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,a,[n,i,l]=r,c=0;if(n.some((t=>0!==e[t]))){for(o in i)d.o(i,o)&&(d.m[o]=i[o]);l&&l(d)}for(t&&t(r);c<n.length;c++)a=n[c],d.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunkblockart_blocks=self.webpackChunkblockart_blocks||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),d.p=window._BLOCKART_WEBPACK_PUBLIC_PATH_,r=window.blockartUtils,o=r.$$,a=r.domReady,n=r.observeElementInView,i=r.each,l=r.find,c=r.toArray,a((function(){var e=c(o(".blockart-counter"));e.length&&d.e(896).then(d.bind(d,896)).then((function(t){var r=t.CountUp;i(e,(function(e){var t=new r(l(e,".blockart-counter-number"),parseFloat(e.dataset.end),{startVal:parseFloat(e.dataset.start),separator:e.dataset.separator,decimalPlaces:e.dataset.decimal,duration:e.dataset.animation});n(e,(function(){t.start()}))}))}))}))})();