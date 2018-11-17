function initMe(){var e=location.host.replace("www.","");e=new RegExp(e,"i");for(var t=document.getElementsByTagName("a"),n=0;n<t.length;n++){var o=t[n].host;e.test(o)||(t[n].setAttribute("target","_blank"),t[n].setAttribute("aria-label",t[n].innerText+" (external link)"),t[n].setAttribute("rel","noopener noreferrer"))}var i=document.querySelectorAll("nav[role='navigation'] ul li a");if(i){for(var n=0;n<i.length;n++)i[n].classList.remove("active");for(var r=!1,n=i.length-1;n>=0;n--){if(location.href.includes(i[n].getAttribute("href"))){i[n].classList.add("active"),r=!0;break}if(location.href.includes("/work/")){i[1].classList.add("active"),r=!0;break}}r||i[0].classList.add("active")}var a=document.querySelectorAll("article p img");if(a&&!document.querySelector(".listicle"))for(var n=0;n<a.length;n++){var s=a[n].getAttribute("src"),c=a[n].getAttribute("alt"),l=document.createElement("div");l.classList.add("image"),l.innerHTML=a[n].parentNode.innerHTML,a[n].parentNode.parentNode.replaceChild(l,a[n].parentNode)}var d=document.querySelectorAll("ul.filter a");if(d.length>0){for(var n=0;n<d.length;n++)d[n].classList.remove("selected");for(var r=!1,n=d.length-1;n>=0;n--)if(location.href.includes(d[n].getAttribute("href"))){d[n].classList.add("selected"),r=!0;break}r||d[0].classList.add("selected")}mediumZoom(document.querySelectorAll(".two-images img, .three-images img, .image img"))}!function(e,t){var n=t(e,e.document);e.lazySizes=n,"object"==typeof module&&module.exports&&(module.exports=n)}(window,function(e,t){"use strict";if(t.getElementsByClassName){var n,o,i=t.documentElement,r=e.Date,a=e.HTMLPictureElement,s="addEventListener",c="getAttribute",l=e[s],d=e.setTimeout,u=e.requestAnimationFrame||d,f=e.requestIdleCallback,m=/^picture$/i,h=["load","error","lazyincluded","_lazyloaded"],p={},v=Array.prototype.forEach,g=function(e,t){return p[t]||(p[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),p[t].test(e[c]("class")||"")&&p[t]},y=function(e,t){g(e,t)||e.setAttribute("class",(e[c]("class")||"").trim()+" "+t)},w=function(e,t){var n;(n=g(e,t))&&e.setAttribute("class",(e[c]("class")||"").replace(n," "))},b=function(e,t,n){var o=n?s:"removeEventListener";n&&b(e,t),h.forEach(function(n){e[o](n,t)})},C=function(e,o,i,r,a){var s=t.createEvent("CustomEvent");return i||(i={}),i.instance=n,s.initCustomEvent(o,!r,!a,i),e.dispatchEvent(s),s},z=function(t,n){var i;!a&&(i=e.picturefill||o.pf)?i({reevaluate:!0,elements:[t]}):n&&n.src&&(t.src=n.src)},E=function(e,t){return(getComputedStyle(e,null)||{})[t]},L=function(e,t,n){for(n=n||e.offsetWidth;n<o.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},T=function(){var e,n,o=[],i=[],r=o,a=function(){var t=r;for(r=o.length?i:o,e=!0,n=!1;t.length;)t.shift()();e=!1},s=function(o,i){e&&!i?o.apply(this,arguments):(r.push(o),n||(n=!0,(t.hidden?d:u)(a)))};return s._lsFlush=a,s}(),x=function(e,t){return t?function(){T(e)}:function(){var t=this,n=arguments;T(function(){e.apply(t,n)})}},A=function(e){var t,n=0,i=o.throttleDelay,a=o.ricTimeout,s=function(){t=!1,n=r.now(),e()},c=f&&a>49?function(){f(s,{timeout:a}),a!==o.ricTimeout&&(a=o.ricTimeout)}:x(function(){d(s)},!0);return function(e){var o;(e=e===!0)&&(a=33),t||(t=!0,o=i-(r.now()-n),0>o&&(o=0),e||9>o?c():d(c,o))}},k=function(e){var t,n,o=99,i=function(){t=null,e()},a=function(){var e=r.now()-n;o>e?d(a,o-e):(f||i)(i)};return function(){n=r.now(),t||(t=d(a,o))}};!function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};o=e.lazySizesConfig||e.lazysizesConfig||{};for(t in n)t in o||(o[t]=n[t]);e.lazySizesConfig=o,d(function(){o.init&&S()})}();var _=function(){var a,u,f,h,p,L,_,S,N,P,M,j,O,B,I=/^img$/i,R=/^iframe$/i,q="onscroll"in e&&!/glebot/.test(navigator.userAgent),D=0,W=0,F=0,U=-1,K=function(e){F--,e&&e.target&&b(e.target,K),(!e||0>F||!e.target)&&(F=0)},G=function(e,n){var o,r=e,a="hidden"==E(t.body,"visibility")||"hidden"!=E(e,"visibility");for(S-=n,M+=n,N-=n,P+=n;a&&(r=r.offsetParent)&&r!=t.body&&r!=i;)a=(E(r,"opacity")||1)>0,a&&"visible"!=E(r,"overflow")&&(o=r.getBoundingClientRect(),a=P>o.left&&N<o.right&&M>o.top-1&&S<o.bottom+1);return a},Y=function(){var e,r,s,l,d,f,m,p,v,g=n.elements;if((h=o.loadMode)&&8>F&&(e=g.length)){r=0,U++,null==O&&("expand"in o||(o.expand=i.clientHeight>500&&i.clientWidth>500?500:370),j=o.expand,O=j*o.expFactor),O>W&&1>F&&U>2&&h>2&&!t.hidden?(W=O,U=0):W=h>1&&U>1&&6>F?j:D;for(;e>r;r++)if(g[r]&&!g[r]._lazyRace)if(q)if((p=g[r][c]("data-expand"))&&(f=1*p)||(f=W),v!==f&&(L=innerWidth+f*B,_=innerHeight+f,m=-1*f,v=f),s=g[r].getBoundingClientRect(),(M=s.bottom)>=m&&(S=s.top)<=_&&(P=s.right)>=m*B&&(N=s.left)<=L&&(M||P||N||S)&&(o.loadHidden||"hidden"!=E(g[r],"visibility"))&&(u&&3>F&&!p&&(3>h||4>U)||G(g[r],f))){if(te(g[r]),d=!0,F>9)break}else!d&&u&&!l&&4>F&&4>U&&h>2&&(a[0]||o.preloadAfterLoad)&&(a[0]||!p&&(M||P||N||S||"auto"!=g[r][c](o.sizesAttr)))&&(l=a[0]||g[r]);else te(g[r]);l&&!d&&te(l)}},X=A(Y),Z=function(e){y(e.target,o.loadedClass),w(e.target,o.loadingClass),b(e.target,J),C(e.target,"lazyloaded")},V=x(Z),J=function(e){V({target:e.target})},$=function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}},Q=function(e){var t,n=e[c](o.srcsetAttr);(t=o.customMedia[e[c]("data-media")||e[c]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},ee=x(function(e,t,n,i,r){var a,s,l,u,h,p;(h=C(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?y(e,o.autosizesClass):e.setAttribute("sizes",i)),s=e[c](o.srcsetAttr),a=e[c](o.srcAttr),r&&(l=e.parentNode,u=l&&m.test(l.nodeName||"")),p=t.firesLoad||"src"in e&&(s||a||u),h={target:e},p&&(b(e,K,!0),clearTimeout(f),f=d(K,2500),y(e,o.loadingClass),b(e,J,!0)),u&&v.call(l.getElementsByTagName("source"),Q),s?e.setAttribute("srcset",s):a&&!u&&(R.test(e.nodeName)?$(e,a):e.src=a),r&&(s||u)&&z(e,{src:a})),e._lazyRace&&delete e._lazyRace,w(e,o.lazyClass),T(function(){(!p||e.complete&&e.naturalWidth>1)&&(p?K(h):F--,Z(h))},!0)}),te=function(e){var t,n=I.test(e.nodeName),i=n&&(e[c](o.sizesAttr)||e[c]("sizes")),r="auto"==i;(!r&&u||!n||!e[c]("src")&&!e.srcset||e.complete||g(e,o.errorClass)||!g(e,o.lazyClass))&&(t=C(e,"lazyunveilread").detail,r&&H.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,F++,ee(e,t,r,i,n))},ne=function(){if(!u){if(r.now()-p<999)return void d(ne,999);var e=k(function(){o.loadMode=3,X()});u=!0,o.loadMode=3,X(),l("scroll",function(){3==o.loadMode&&(o.loadMode=2),e()},!0)}};return{_:function(){p=r.now(),n.elements=t.getElementsByClassName(o.lazyClass),a=t.getElementsByClassName(o.lazyClass+" "+o.preloadClass),B=o.hFac,l("scroll",X,!0),l("resize",X,!0),e.MutationObserver?new MutationObserver(X).observe(i,{childList:!0,subtree:!0,attributes:!0}):(i[s]("DOMNodeInserted",X,!0),i[s]("DOMAttrModified",X,!0),setInterval(X,999)),l("hashchange",X,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t[s](e,X,!0)}),/d$|^c/.test(t.readyState)?ne():(l("load",ne),t[s]("DOMContentLoaded",X),d(ne,2e4)),n.elements.length?(Y(),T._lsFlush()):X()},checkElems:X,unveil:te}}(),H=function(){var e,n=x(function(e,t,n,o){var i,r,a;if(e._lazysizesWidth=o,o+="px",e.setAttribute("sizes",o),m.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),r=0,a=i.length;a>r;r++)i[r].setAttribute("sizes",o);n.detail.dataAttr||z(e,n.detail)}),i=function(e,t,o){var i,r=e.parentNode;r&&(o=L(e,r,o),i=C(e,"lazybeforesizes",{width:o,dataAttr:!!t}),i.defaultPrevented||(o=i.detail.width,o&&o!==e._lazysizesWidth&&n(e,r,i,o)))},r=function(){var t,n=e.length;if(n)for(t=0;n>t;t++)i(e[t])},a=k(r);return{_:function(){e=t.getElementsByClassName(o.autosizesClass),l("resize",a)},checkElems:a,updateElem:i}}(),S=function(){S.i||(S.i=!0,H._(),_._())};return n={cfg:o,autoSizer:H,loader:_,init:S,uP:z,aC:y,rC:w,hC:g,fire:C,gW:L,rAF:T}}}),!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Barba",[],t):"object"==typeof exports?exports.Barba=t():e.Barba=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="http://localhost:8080/dist",t(0)}([function(e,t,n){"function"!=typeof Promise&&(window.Promise=n(1));var o={version:"1.0.0",BaseTransition:n(4),BaseView:n(6),BaseCache:n(8),Dispatcher:n(7),HistoryManager:n(9),Pjax:n(10),Prefetch:n(13),Utils:n(5)};e.exports=o},function(e,t,n){(function(t){!function(n){function o(){}function i(e,t){return function(){e.apply(t,arguments)}}function r(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],u(e,this)}function a(e,t){for(;3===e._state;)e=e._value;return 0===e._state?void e._deferreds.push(t):(e._handled=!0,void m(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?s:c)(t.promise,e._value);var o;try{o=n(e._value)}catch(e){return void c(t.promise,e)}s(t.promise,o)}))}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof r)return e._state=3,e._value=t,void l(e);if("function"==typeof n)return void u(i(n,t),e)}e._state=1,e._value=t,l(e)}catch(t){c(e,t)}}function c(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&m(function(){e._handled||h(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)a(e,e._deferreds[t]);e._deferreds=null}function d(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function u(e,t){var n=!1;try{e(function(e){n||(n=!0,s(t,e))},function(e){n||(n=!0,c(t,e))})}catch(e){if(n)return;n=!0,c(t,e)}}var f=setTimeout,m="function"==typeof t&&t||function(e){f(e,0)},h=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};r.prototype.catch=function(e){return this.then(null,e)},r.prototype.then=function(e,t){var n=new this.constructor(o);return a(this,new d(e,t,n)),n},r.all=function(e){var t=Array.prototype.slice.call(e);return new r(function(e,n){function o(r,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(e){o(r,e)},n)}t[r]=a,0===--i&&e(t)}catch(e){n(e)}}if(0===t.length)return e([]);for(var i=t.length,r=0;r<t.length;r++)o(r,t[r])})},r.resolve=function(e){return e&&"object"==typeof e&&e.constructor===r?e:new r(function(t){t(e)})},r.reject=function(e){return new r(function(t,n){n(e)})},r.race=function(e){return new r(function(t,n){for(var o=0,i=e.length;o<i;o++)e[o].then(t,n)})},r._setImmediateFn=function(e){m=e},r._setUnhandledRejectionFn=function(e){h=e},"undefined"!=typeof e&&e.exports?e.exports=r:n.Promise||(n.Promise=r)}(this)}).call(t,n(2).setImmediate)},function(e,t,n){(function(e,o){function i(e,t){this._id=e,this._clearFn=t}var r=n(3).nextTick,a=Function.prototype.apply,s=Array.prototype.slice,c={},l=0;t.setTimeout=function(){return new i(a.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new i(a.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},t.setImmediate="function"==typeof e?e:function(e){var n=l++,o=!(arguments.length<2)&&s.call(arguments,1);return c[n]=!0,r(function(){c[n]&&(o?e.apply(null,o):e.call(null),t.clearImmediate(n))}),n},t.clearImmediate="function"==typeof o?o:function(e){delete c[e]}}).call(t,n(2).setImmediate,n(2).clearImmediate)},function(e,t){function n(){u&&l&&(u=!1,l.length?d=l.concat(d):f=-1,d.length&&o())}function o(){if(!u){var e=a(n);u=!0;for(var t=d.length;t;){for(l=d,d=[];++f<t;)l&&l[f].run();f=-1,t=d.length}l=null,u=!1,s(e)}}function i(e,t){this.fun=e,this.array=t}function r(){}var a,s,c=e.exports={};!function(){try{a=setTimeout}catch(e){a=function(){throw new Error("setTimeout is not defined")}}try{s=clearTimeout}catch(e){s=function(){throw new Error("clearTimeout is not defined")}}}();var l,d=[],u=!1,f=-1;c.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];d.push(new i(e,t)),1!==d.length||u||a(o,0)},i.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=r,c.addListener=r,c.once=r,c.off=r,c.removeListener=r,c.removeAllListeners=r,c.emit=r,c.binding=function(e){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(e){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},function(e,t,n){var o=n(5),i={oldContainer:void 0,newContainer:void 0,newContainerLoading:void 0,extend:function(e){return o.extend(this,e)},init:function(e,t){var n=this;return this.oldContainer=e,this._newContainerPromise=t,this.deferred=o.deferred(),this.newContainerReady=o.deferred(),this.newContainerLoading=this.newContainerReady.promise,this.start(),this._newContainerPromise.then(function(e){n.newContainer=e,n.newContainerReady.resolve()}),this.deferred.promise},done:function(){this.oldContainer.parentNode.removeChild(this.oldContainer),this.newContainer.style.visibility="visible",this.deferred.resolve()},start:function(){}};e.exports=i},function(e,t){var n={getCurrentUrl:function(){return window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search},cleanLink:function(e){return e.replace(/#.*/,"")},xhrTimeout:5e3,xhr:function(e){var t=this.deferred(),n=new XMLHttpRequest;return n.onreadystatechange=function(){if(4===n.readyState)return 200===n.status?t.resolve(n.responseText):t.reject(new Error("xhr: HTTP code is not 200"))},n.ontimeout=function(){return t.reject(new Error("xhr: Timeout exceeded"))},n.open("GET",e),n.timeout=this.xhrTimeout,n.setRequestHeader("x-barba","yes"),n.send(),t.promise},extend:function(e,t){var n=Object.create(e);for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);return n},deferred:function(){return new function(){this.resolve=null,this.reject=null,this.promise=new Promise(function(e,t){this.resolve=e,this.reject=t}.bind(this))}},getPort:function(e){var t="undefined"!=typeof e?e:window.location.port,n=window.location.protocol;return""!=t?parseInt(t):"http:"===n?80:"https:"===n?443:void 0}};e.exports=n},function(e,t,n){var o=n(7),i=n(5),r={namespace:null,extend:function(e){return i.extend(this,e)},init:function(){var e=this;o.on("initStateChange",function(t,n){n&&n.namespace===e.namespace&&e.onLeave()}),o.on("newPageReady",function(t,n,o){e.container=o,t.namespace===e.namespace&&e.onEnter()}),o.on("transitionCompleted",function(t,n){t.namespace===e.namespace&&e.onEnterCompleted(),n&&n.namespace===e.namespace&&e.onLeaveCompleted()})},onEnter:function(){},onEnterCompleted:function(){},onLeave:function(){},onLeaveCompleted:function(){}};e.exports=r},function(e,t){var n={events:{},on:function(e,t){this.events[e]=this.events[e]||[],this.events[e].push(t)},off:function(e,t){e in this.events!=0&&this.events[e].splice(this.events[e].indexOf(t),1)},trigger:function(e){if(e in this.events!=0)for(var t=0;t<this.events[e].length;t++)this.events[e][t].apply(this,Array.prototype.slice.call(arguments,1))}};e.exports=n},function(e,t,n){var o=n(5),i={data:{},extend:function(e){return o.extend(this,e)},set:function(e,t){this.data[e]=t},get:function(e){return this.data[e]},reset:function(){this.data={}}};e.exports=i},function(e,t){var n={history:[],add:function(e,t){t||(t=void 0),this.history.push({url:e,namespace:t})},currentStatus:function(){return this.history[this.history.length-1]},prevStatus:function(){var e=this.history;return e.length<2?null:e[e.length-2]}};e.exports=n},function(e,t,n){var o=n(5),i=n(7),r=n(11),a=n(8),s=n(9),c=n(12),l={Dom:c,History:s,Cache:a,cacheEnabled:!0,transitionProgress:!1,ignoreClassLink:"no-barba",start:function(){this.init()},init:function(){var e=this.Dom.getContainer(),t=this.Dom.getWrapper();t.setAttribute("aria-live","polite"),this.History.add(this.getCurrentUrl(),this.Dom.getNamespace(e)),i.trigger("initStateChange",this.History.currentStatus()),i.trigger("newPageReady",this.History.currentStatus(),{},e,this.Dom.currentHTML),i.trigger("transitionCompleted",this.History.currentStatus()),this.bindEvents()},bindEvents:function(){document.addEventListener("click",this.onLinkClick.bind(this)),window.addEventListener("popstate",this.onStateChange.bind(this))},getCurrentUrl:function(){return o.cleanLink(o.getCurrentUrl())},goTo:function(e){window.history.pushState(null,null,e),this.onStateChange()},forceGoTo:function(e){window.location=e},load:function(e){var t,n=o.deferred(),i=this;return t=this.Cache.get(e),t||(t=o.xhr(e),this.Cache.set(e,t)),t.then(function(e){var t=i.Dom.parseResponse(e);i.Dom.putContainer(t),i.cacheEnabled||i.Cache.reset(),n.resolve(t)},function(){i.forceGoTo(e),n.reject()}),n.promise},getHref:function(e){if(e)return e.getAttribute&&"string"==typeof e.getAttribute("xlink:href")?e.getAttribute("xlink:href"):"string"==typeof e.href?e.href:void 0},onLinkClick:function(e){for(var t=e.target;t&&!this.getHref(t);)t=t.parentNode;if(this.preventCheck(e,t)){e.stopPropagation(),e.preventDefault(),i.trigger("linkClicked",t,e);var n=this.getHref(t);this.goTo(n)}},preventCheck:function(e,t){if(!window.history.pushState)return!1;var n=this.getHref(t);return!(!t||!n||e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||t.target&&"_blank"===t.target||window.location.protocol!==t.protocol||window.location.hostname!==t.hostname||o.getPort()!==o.getPort(t.port)||n.indexOf("#")>-1||t.getAttribute&&"string"==typeof t.getAttribute("download")||o.cleanLink(n)==o.cleanLink(location.href)||t.classList.contains(this.ignoreClassLink))},getTransition:function(){return r},onStateChange:function(){var e=this.getCurrentUrl();if(this.transitionProgress&&this.forceGoTo(e),this.History.currentStatus().url===e)return!1;this.History.add(e);var t=this.load(e),n=Object.create(this.getTransition());this.transitionProgress=!0,i.trigger("initStateChange",this.History.currentStatus(),this.History.prevStatus());var o=n.init(this.Dom.getContainer(),t);t.then(this.onNewContainerLoaded.bind(this)),o.then(this.onTransitionEnd.bind(this))},onNewContainerLoaded:function(e){var t=this.History.currentStatus();t.namespace=this.Dom.getNamespace(e),i.trigger("newPageReady",this.History.currentStatus(),this.History.prevStatus(),e,this.Dom.currentHTML)},onTransitionEnd:function(){this.transitionProgress=!1,i.trigger("transitionCompleted",this.History.currentStatus(),this.History.prevStatus())}};e.exports=l},function(e,t,n){var o=n(4),i=o.extend({start:function(){this.newContainerLoading.then(this.finish.bind(this))},finish:function(){document.body.scrollTop=0,this.done()}});e.exports=i},function(e,t){var n={dataNamespace:"namespace",wrapperId:"barba-wrapper",containerClass:"barba-container",currentHTML:document.documentElement.innerHTML,parseResponse:function(e){this.currentHTML=e;var t=document.createElement("div");t.innerHTML=e;var n=t.querySelector("title");return n&&(document.title=n.textContent),this.getContainer(t)},getWrapper:function(){var e=document.getElementById(this.wrapperId);if(!e)throw new Error("Barba.js: wrapper not found!");return e},getContainer:function(e){if(e||(e=document.body),!e)throw new Error("Barba.js: DOM not ready!");var t=this.parseContainer(e);if(t&&t.jquery&&(t=t[0]),!t)throw new Error("Barba.js: no container found");return t},getNamespace:function(e){return e&&e.dataset?e.dataset[this.dataNamespace]:e?e.getAttribute("data-"+this.dataNamespace):null},putContainer:function(e){e.style.visibility="hidden";var t=this.getWrapper();t.appendChild(e)},parseContainer:function(e){return e.querySelector("."+this.containerClass)}};e.exports=n},function(e,t,n){var o=n(5),i=n(10),r={ignoreClassLink:"no-barba-prefetch",init:function(){return!!window.history.pushState&&(document.body.addEventListener("mouseover",this.onLinkEnter.bind(this)),void document.body.addEventListener("touchstart",this.onLinkEnter.bind(this)))},onLinkEnter:function(e){for(var t=e.target;t&&!i.getHref(t);)t=t.parentNode;if(t&&!t.classList.contains(this.ignoreClassLink)){var n=i.getHref(t);if(i.preventCheck(e,t)&&!i.Cache.get(n)){var r=o.xhr(n);i.Cache.set(n,r)}}}};e.exports=r}])}),!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.mediumZoom=t()}(this,function(){"use strict";var e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},t=["IMG"],n=[27,81],o=function(e){return t.indexOf(e.tagName)>-1},i=function(e){return e.naturalWidth!==e.width},r=function(e){return e&&1===e.nodeType},a=function(a){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=s.margin,l=void 0===c?0:c,d=s.background,u=void 0===d?"#fff":d,f=s.scrollOffset,m=void 0===f?48:f,h=s.metaClick,p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{bubbles:!1,cancelable:!1,detail:void 0};if("function"==typeof window.CustomEvent)return new CustomEvent(e,t);var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n},v=function(){if(k.original){if(k.original.dispatchEvent(p("show")),_=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,H=!0,k.zoomed=function(e){var t=e.getBoundingClientRect(),n=t.top,o=t.left,i=t.width,r=t.height,a=e.cloneNode(),s=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,c=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return a.removeAttribute("id"),a.style.position="absolute",a.style.top=n+s+"px",a.style.left=o+c+"px",a.style.width=i+"px",a.style.height=r+"px",a.style.transform="",a}(k.original),document.body.appendChild(A),T.template){var e=r(T.template)?T.template:document.querySelector(T.template);k.template=document.createElement("div"),k.template.appendChild(e.content.cloneNode(!0)),document.body.appendChild(k.template)}if(document.body.appendChild(k.zoomed),requestAnimationFrame(function(){document.body.classList.add("medium-zoom--open")}),k.original.style.visibility="hidden",k.zoomed.classList.add("medium-zoom-image--open"),k.zoomed.addEventListener("click",g),k.zoomed.addEventListener("transitionend",b),k.original.getAttribute("data-zoom-target")){k.zoomedHd=k.zoomed.cloneNode(),k.zoomedHd.src=k.zoomed.getAttribute("data-zoom-target"),k.zoomedHd.onerror=function(){clearInterval(t),console.error("Unable to reach the zoom image target "+k.zoomedHd.src),k.zoomedHd=null,L()};var t=setInterval(function(){k.zoomedHd.naturalWidth&&(clearInterval(t),k.zoomedHd.classList.add("medium-zoom-image--open"),k.zoomedHd.addEventListener("click",g),document.body.appendChild(k.zoomedHd),L())},10)}else L()}},g=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=function(){!H&&k.original&&(k.original.dispatchEvent(p("hide")),H=!0,document.body.classList.remove("medium-zoom--open"),k.zoomed.style.transform="",k.zoomedHd&&(k.zoomedHd.style.transform="",k.zoomedHd.removeEventListener("click",e)),k.template&&(k.template.style.transition="opacity 150ms",k.template.style.opacity=0),k.zoomed.removeEventListener("click",e),k.zoomed.addEventListener("transitionend",C))};t>0?setTimeout(n,t):n()},y=function(e){e&&e.target?(k.original=e.target,v()):k.original?g():(k.original=x[0],v())},w=function(e){return(e.metaKey||e.ctrlKey)&&T.metaClick?window.open(e.target.getAttribute("data-original")||e.target.parentNode.href||e.target.src,"_blank"):(e.preventDefault(),void y(e))},b=function e(){H=!1,k.zoomed.removeEventListener("transitionend",e),k.original.dispatchEvent(p("shown"))},C=function e(){k.original&&(k.original.style.visibility="",document.body.removeChild(k.zoomed),k.zoomedHd&&document.body.removeChild(k.zoomedHd),document.body.removeChild(A),k.zoomed.classList.remove("medium-zoom-image--open"),k.template&&document.body.removeChild(k.template),H=!1,k.zoomed.removeEventListener("transitionend",e),k.original.dispatchEvent(p("hidden")),k.original=null,k.zoomed=null,k.zoomedHd=null,k.template=null)},z=function(){if(!H&&k.original){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(_-e)>T.scrollOffset&&g(150)}},E=function(e){n.indexOf(e.keyCode||e.which)>-1&&g()},L=function(){if(k.original){var t={width:window.innerWidth,height:window.innerHeight,left:0,top:0,right:0,bottom:0},n=void 0,o=void 0;if(T.container)if(T.container instanceof Object)e(t,T.container),n=t.width-t.left-t.right-2*T.margin,o=t.height-t.top-t.bottom-2*T.margin;else{var i=(r(T.container)?T.container:document.querySelector(T.container)).getBoundingClientRect(),a=i.width,s=i.height,c=i.left,l=i.top;e(t,{width:a,height:s,left:c,top:l})}n=n||t.width-2*T.margin,o=o||t.height-2*T.margin;var d=k.zoomedHd||k.original,u=d.naturalWidth,f=void 0===u?n:u,m=d.naturalHeight,h=void 0===m?o:m,p=d.getBoundingClientRect(),v=p.top,g=p.left,y=p.width,w=p.height,b=Math.min(f,n)/y,C=Math.min(h,o)/w,z=Math.min(b,C)||1,E="scale("+z+") translate3d("+((n-y)/2-g+T.margin+t.left)/z+"px, "+((o-w)/2-v+T.margin+t.top)/z+"px, 0)";k.zoomed.style.transform=E,k.zoomedHd&&(k.zoomedHd.style.transform=E)}},T={margin:l,background:u,scrollOffset:m,metaClick:void 0===h||h,container:s.container,template:s.template};a instanceof Object&&e(T,a);var x=function(e){try{return Array.isArray(e)?e.filter(o):function(e){return NodeList.prototype.isPrototypeOf(e)||HTMLCollection.prototype.isPrototypeOf(e)}(e)?Array.apply(null,e).filter(o):r(e)?[e].filter(o):"string"==typeof e?Array.apply(null,document.querySelectorAll(e)).filter(o):Array.apply(null,document.querySelectorAll(t.map(function(e){return e.toLowerCase()}).join(","))).filter(i)}catch(e){throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList, an HTMLCollection or an array.\nSee: https://github.com/francoischalifour/medium-zoom")}}(a),A=function(e){var t=document.createElement("div");return t.classList.add("medium-zoom-overlay"),t.style.backgroundColor=e,t}(T.background),k={original:null,zoomed:null,zoomedHd:null,template:null},_=0,H=!1;return x.forEach(function(e){e.classList.add("medium-zoom-image"),e.addEventListener("click",w)}),A.addEventListener("click",g),document.addEventListener("scroll",z),document.addEventListener("keyup",E),window.addEventListener("resize",g),{show:y,hide:g,toggle:y,update:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.background&&(A.style.backgroundColor=t.background),t.container&&t.container instanceof Object&&(t.container=e({},T.container,t.container)),e(T,t)},addEventListeners:function(e,t){x.forEach(function(n){n.addEventListener(e,t)})},detach:function(){k.zoomed&&g();var e=p("detach");x.forEach(function(t){t.classList.remove("medium-zoom-image"),t.removeEventListener("click",w),t.dispatchEvent(e)}),x.splice(0,x.length),A.removeEventListener("click",g),document.removeEventListener("scroll",z),document.removeEventListener("keyup",E),window.removeEventListener("resize",g)},images:x,options:T}},s=Object.freeze({default:a});return function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--open .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s}.medium-zoom-image--open{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"),s&&a||s}),function(){initMe();var e=Barba.BaseTransition.extend({start:function(){Promise.all([this.newContainerLoading,this.fadeOut()]).then(this.fadeIn.bind(this))},fadeOut:function(){return document.body.classList.add("fade-out"),new Promise(function(e){window.scrollTo(0,0),e()})},fadeIn:function(){document.body.classList.remove("fade-out"),this.newContainer.classList.toggle("fade-in"),this.done()}});Barba.Pjax.getTransition=function(){return e},Barba.Pjax.start(),Barba.Dispatcher.on("newPageReady",function(e,t,n){initMe()}),document.querySelector(".more-button").addEventListener("focus",function(){document.querySelector("#masthead").classList.add("hover")}),document.querySelector(".more-button").addEventListener("blur",function(){setTimeout(function(){for(var e=!1,t=document.querySelectorAll(".list a"),n=0;n<t.length;n++)document.activeElement===t[n]&&(e=!0);e?document.querySelector("#masthead").classList.add("hover"):document.querySelector("#masthead").classList.remove("hover")},1e3)})}();