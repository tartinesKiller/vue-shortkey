!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("VueShortkey",[],t):"object"==typeof exports?exports.VueShortkey=t():e.VueShortkey=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="../dist/",t(t.s=0)}([function(e,t,n){"use strict";(function(e){function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),n(2),n(3);var o={},u={},i=[],c=[],a=!1,l=function(e){return e="string"==typeof e?JSON.parse(e.replace(/\'/gi,'"')):e,e instanceof Array?{"":e}:e},f=function(e,t,n,r){var o=!0===n.modifiers.push,u=!0===n.modifiers.avoid,c=!0==!n.modifiers.focus,a=!0===n.modifiers.once,l=r.context._uid;u?(i=i.filter(function(e){return!e===t}),i.push(t)):v({b:e,push:o,once:a,focus:c,el:r.elm,elKey:l})},s=function(e,t,n){var r=n.key;for(var i in e){var c=o.encodeKey(e[i]);if(void 0===i){var a=u[c].el.undefined.indexOf(t);u[c].el.splice(a,1)}else delete u[c].el[r]}};o.install=function(e,t){c=[].concat(r(t&&t.prevent?t.prevent:[])),e.directive("shortkey",{bind:function(e,t,n){var r=l(t.value);f(r,e,t,n),n.context._havevshortkey=!0},update:function(e,t,n){var r=l(t.oldValue);s(r,e,n);var o=l(t.value);f(o,e,t,n)},unbind:function(e,t,n){var r=l(t.value);s(r,e,n)}})},o.decodeKey=function(e){return d(e)},o.encodeKey=function(e){var t={};t.shiftKey=e.includes("shift"),t.ctrlKey=e.includes("ctrl"),t.metaKey=e.includes("meta"),t.altKey=e.includes("alt");var n=d(t);return n+=e.filter(function(e){return!["shift","ctrl","meta","alt"].includes(e)}).join("")};var d=function(e){var t="";return("Shift"===e.key||e.shiftKey)&&(t+="shift"),("Control"===e.key||e.ctrlKey)&&(t+="ctrl"),("Meta"===e.key||e.metaKey)&&(t+="meta"),("Alt"===e.key||e.altKey)&&(t+="alt"),"ArrowUp"===e.key&&(t+="arrowup"),"ArrowLeft"===e.key&&(t+="arrowleft"),"ArrowRight"===e.key&&(t+="arrowright"),"ArrowDown"===e.key&&(t+="arrowdown"),"AltGraph"===e.key&&(t+="altgraph"),"Escape"===e.key&&(t+="esc"),"Enter"===e.key&&(t+="enter"),"Tab"===e.key&&(t+="tab")," "===e.key&&(t+="space"),"PageUp"===e.key&&(t+="pageup"),"PageDown"===e.key&&(t+="pagedown"),"Home"===e.key&&(t+="home"),"End"===e.key&&(t+="end"),"Delete"===e.key&&(t+="del"),"Backspace"===e.key&&(t+="backspace"),"Insert"===e.key&&(t+="insert"),"NumLock"===e.key&&(t+="numlock"),"CapsLock"===e.key&&(t+="capslock"),"Pause"===e.key&&(t+="pause"),"ContextMenu"===e.key&&(t+="contextmenu"),"ScrollLock"===e.key&&(t+="scrolllock"),"BrowserHome"===e.key&&(t+="browserhome"),"MediaSelect"===e.key&&(t+="mediaselect"),(e.key&&" "!==e.key&&1===e.key.length||/F\d{1,2}|\//g.test(e.key))&&(t+=e.key.toLowerCase()),t},y=function(e,t){var n=new CustomEvent("shortkey",{bubbles:!1});u[e].key&&(n.srcKey=u[e].key);var r=u[e].el;void 0===t?r.undefined[r.length-1].dispatchEvent(n):r[t].dispatchEvent(n)};o.keyDown=function(e,t){(!u[e].once&&!u[e].push||u[e].push&&!a)&&y(e,t)},e&&Object({NODE_ENV:"production"})&&function(){document.addEventListener("keydown",function(e){var t=o.decodeKey(e);if(h(t)){e.preventDefault(),e.stopPropagation();var n=p(e.target),r=n.__vue__._vnode.context._uid;if(u[t].focus)o.keyDown(t,r),a=!0;else if(!a){var i=void 0,c=u[t].el;i=c[c.length-1],i.focus(),a=!0}}},!0),document.addEventListener("keyup",function(e){var t=o.decodeKey(e);h(t)&&(e.preventDefault(),e.stopPropagation(),(u[t].once||u[t].push)&&y(t)),a=!1},!0)}();var p=function e(t){return t.__vue__&&t.__vue__._havevshortkey?t:t.parentElement?e(t.parentElement):null},v=function(e){var t=e.b,n=e.push,r=e.once,i=e.focus,c=e.el,a=e.elKey;for(var l in t){var f=o.encodeKey(t[l]),s=u[f]&&u[f].el?u[f].el:{};s[a]=c,u[f]={push:n,once:r,focus:i,key:l,el:s}}},h=function(e){var t=!!i.find(function(e){return e===document.activeElement}),n=!!c.find(function(e){return document.activeElement&&document.activeElement.matches(e)});return!!u[e]&&!(t||n)};t.default=o}).call(t,n(1))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function u(e){if(s===clearTimeout)return clearTimeout(e);if((s===r||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{return s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}function i(){v&&y&&(v=!1,y.length?p=y.concat(p):h=-1,p.length&&c())}function c(){if(!v){var e=o(i);v=!0;for(var t=p.length;t;){for(y=p,p=[];++h<t;)y&&y[h].run();h=-1,t=p.length}y=null,v=!1,u(e)}}function a(e,t){this.fun=e,this.array=t}function l(){}var f,s,d=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{s="function"==typeof clearTimeout?clearTimeout:r}catch(e){s=r}}();var y,p=[],v=!1,h=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new a(e,t)),1!==p.length||v||o(c)},a.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector)},function(e,t){!function(){if("undefined"!=typeof window)try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var t=function(e,t){var n,r;return t=t||{},t.bubbles=!!t.bubbles,t.cancelable=!!t.cancelable,n=document.createEvent("CustomEvent"),n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),r=n.preventDefault,n.preventDefault=function(){r.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n};t.prototype=window.Event.prototype,window.CustomEvent=t}}()}])});
//# sourceMappingURL=index.js.map