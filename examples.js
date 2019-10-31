var app=function(e){"use strict";let t=null;let n=null;function r(e,t={}){let n=document.createElement(e);return Object.keys(t).forEach(e=>{n[e]=t[e]}),n}function i(e,t,n){return(window.getComputedStyle(e,n||null)||{display:"none"})[t]}function o(e){if(!document.documentElement.contains(e))return{detached:!0,rendered:!1};let t=e;for(;t!==document;){if("none"===i(t,"display"))return{detached:!1,rendered:!1};t=t.parentNode}return{detached:!1,rendered:!0}}var s='.resize-triggers{visibility:hidden;opacity:0}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}';let d=0,a=null;function c(e,t){if(e.__resize_mutation_handler__||(e.__resize_mutation_handler__=function(){let{rendered:e,detached:t}=o(this);e!==this.__resize_rendered__&&(!t&&this.__resize_triggers__&&(u(this),this.addEventListener("scroll",_,!0)),this.__resize_rendered__=e,l(this))}.bind(e)),!e.__resize_listeners__)if(e.__resize_listeners__=[],window.ResizeObserver){let{offsetWidth:t,offsetHeight:n}=e,r=new ResizeObserver(()=>{(e.__resize_observer_triggered__||(e.__resize_observer_triggered__=!0,e.offsetWidth!==t||e.offsetHeight!==n))&&l(e)}),{detached:i,rendered:s}=o(e);e.__resize_observer_triggered__=!1===i&&!1===s,e.__resize_observer__=r,r.observe(e)}else if(e.attachEvent&&e.addEventListener)e.__resize_legacy_resize_handler__=function(){l(e)},e.attachEvent("onresize",e.__resize_legacy_resize_handler__),document.addEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);else if(d||(a=function(e){var t=document.createElement("style");return t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),(document.querySelector("head")||document.body).appendChild(t),t}(s)),function(e){let t=i(e,"position");t&&"static"!==t||(e.style.position="relative");e.__resize_old_position__=t,e.__resize_last__={};let n=r("div",{className:"resize-triggers"}),o=r("div",{className:"resize-expand-trigger"}),s=r("div"),d=r("div",{className:"resize-contract-trigger"});o.appendChild(s),n.appendChild(o),n.appendChild(d),e.appendChild(n),e.__resize_triggers__={triggers:n,expand:o,expandChild:s,contract:d},u(e),e.addEventListener("scroll",_,!0),e.__resize_last__={width:e.offsetWidth,height:e.offsetHeight}}(e),e.__resize_rendered__=o(e).rendered,window.MutationObserver){let t=new MutationObserver(e.__resize_mutation_handler__);t.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),e.__resize_mutation_observer__=t}e.__resize_listeners__.push(t),d++}function _(){var e,r;u(this),this.__resize_raf__&&(e=this.__resize_raf__,n||(n=(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(e){clearTimeout(e)}).bind(window)),n(e)),this.__resize_raf__=(r=(()=>{let e=function(e){let{width:t,height:n}=e.__resize_last__,{offsetWidth:r,offsetHeight:i}=e;return r!==t||i!==n?{width:r,height:i}:null}(this);e&&(this.__resize_last__=e,l(this))}),t||(t=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){return setTimeout(e,16)}).bind(window)),t(r))}function l(e){e&&e.__resize_listeners__&&e.__resize_listeners__.forEach(t=>{t.call(e)})}function u(e){let{expand:t,expandChild:n,contract:r}=e.__resize_triggers__,{scrollWidth:i,scrollHeight:o}=r,{offsetWidth:s,offsetHeight:d,scrollWidth:a,scrollHeight:c}=t;r.scrollLeft=i,r.scrollTop=o,n.style.width=s+1+"px",n.style.height=d+1+"px",t.scrollLeft=a,t.scrollTop=c}let f,h=0;function p(){}function m(e){return e()}function g(){return Object.create(null)}function w(e){e.forEach(m)}function v(e){return"function"==typeof e}function y(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function z(e){f=e}window.addEventListener("message",function(e){if(e.data.hasOwnProperty("COMPONENT")){const t=app[e.data.COMPONENT];h=e.data.iframe_id,c(document.body,t=>{e.source.postMessage({HEIGHT:document.documentElement.offsetHeight,iframe_id:h},"*")}),new t({target:document.body,props:{}})}});const b=[],$=[],x=[],E=[],C=Promise.resolve();let O=!1;function N(e){x.push(e)}function M(){const e=new Set;do{for(;b.length;){const e=b.shift();z(e),S(e.$$)}for(;$.length;)$.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];e.has(n)||(n(),e.add(n))}x.length=0}while(b.length);for(;E.length;)E.pop()();O=!1}function S(e){e.fragment&&(e.update(e.dirty),w(e.before_update),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_update.forEach(N))}const k=new Set;function H(e,t){e.$$.dirty||(b.push(e),O||(O=!0,C.then(M)),e.$$.dirty=g()),e.$$.dirty[t]=!0}function T(e,t,n,r,i,o){const s=f;z(e);const d=t.props||{},a=e.$$={fragment:null,ctx:null,props:o,update:p,not_equal:i,bound:g(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(s?s.$$.context:[]),callbacks:g(),dirty:null};let c=!1;var _,l,u;a.ctx=n?n(e,d,(t,n,r=n)=>(a.ctx&&i(a.ctx[t],a.ctx[t]=r)&&(a.bound[t]&&a.bound[t](r),c&&H(e,t)),n)):d,a.update(),c=!0,w(a.before_update),a.fragment=r(a.ctx),t.target&&(t.hydrate?a.fragment.l((u=t.target,Array.from(u.childNodes))):a.fragment.c(),t.intro&&((_=e.$$.fragment)&&_.i&&(k.delete(_),_.i(l))),function(e,t,n){const{fragment:r,on_mount:i,on_destroy:o,after_update:s}=e.$$;r.m(t,n),N(()=>{const t=i.map(m).filter(v);o?o.push(...t):w(t),e.$$.on_mount=[]}),s.forEach(N)}(e,t.target,t.anchor),M()),z(s)}class L{$destroy(){var e,t;t=1,(e=this).$$.fragment&&(w(e.$$.on_destroy),e.$$.fragment.d(t),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={}),this.$destroy=p}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}function A(e,t){document.dispatchEvent(function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(e,t))}class R extends L{constructor(e){if(!e||!e.target&&!e.$$inline)throw new Error("'target' is a required option");super()}$destroy(){super.$destroy(),this.$destroy=(()=>{console.warn("Component was already destroyed")})}}const W="Ex_0_136cb640d0f70017e620eaf9f63905c9.svelte";function q(e){var t;const n={c:function(){var e;e="button",(t=document.createElement(e)).textContent="My button",function(e,t,n,r,i){e.__svelte_meta={loc:{file:t,line:n,column:r,char:i}}}(t,W,0,0,0)},l:function(e){throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option")},m:function(e,n){!function(e,t,n){A("SvelteDOMInsert",{target:e,node:t,anchor:n}),function(e,t,n){e.insertBefore(t,n||null)}(e,t,n)}(e,t,n)},p:p,i:p,o:p,d:function(e){var n;e&&(A("SvelteDOMRemove",{node:n=t}),function(e){e.parentNode.removeChild(e)}(n))}};return A("SvelteRegisterBlock",{block:n,id:q.name,type:"component",source:"",ctx:e}),n}return e.Ex_0_136cb640d0f70017e620eaf9f63905c9=class extends R{constructor(e){super(e),T(this,e,null,q,y,[]),A("SvelteRegisterComponent",{component:this,tagName:"Ex_0_136cb640d0f70017e620eaf9f63905c9",options:e,id:q.name})}},e}({});
