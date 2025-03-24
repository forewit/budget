import{z as P,A as b,B as w,C as V,D as N,F as j,G as Y,H as q,I as L,J as x,K as z,L as F,M as T,N as E,O as I,P as G,c as h,Q as U,R as $,S as J,T as K,U as Q,V as X,W as Z,a as ee,s as te,e as re,h as S,v as ae}from"./TRalcB7t.js";import{r as ne,b as oe}from"./BeJcuUKb.js";function ve(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const se=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function he(e){return se.includes(e)}const ie={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ye(e){return e=e.toLowerCase(),ie[e]??e}const ue=["touchstart","touchmove"];function ce(e){return ue.includes(e)}const le=["textarea","script","style","title"];function ge(e){return le.includes(e)}function Ee(e,t){if(t){const r=document.body;e.autofocus=!0,P(()=>{document.activeElement===r&&e.focus()})}}let O=!1;function fe(){O||(O=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function D(e){var t=V,r=N;b(null),w(null);try{return e()}finally{b(t),w(r)}}function be(e,t,r,o=r){e.addEventListener(t,()=>D(r));const n=e.__on_r;n?e.__on_r=()=>{n(),o(!0)}:e.__on_r=()=>o(!0),fe()}const M=new Set,k=new Set;function W(e,t,r,o={}){function n(a){if(o.capture||y.call(t,a),!a.cancelBubble)return D(()=>r==null?void 0:r.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?P(()=>{t.addEventListener(e,n,o)}):t.addEventListener(e,n,o),n}function we(e,t,r,o={}){var n=W(t,e,r,o);return()=>{e.removeEventListener(t,n,o)}}function me(e,t,r,o,n){var a={capture:o,passive:n},u=W(e,t,r,a);(t===document.body||t===window||t===document)&&q(()=>{t.removeEventListener(e,u,a)})}function Te(e){for(var t=0;t<e.length;t++)M.add(e[t]);for(var r of k)r(e)}function y(e){var R;var t=this,r=t.ownerDocument,o=e.type,n=((R=e.composedPath)==null?void 0:R.call(e))||[],a=n[0]||e.target,u=0,_=e.__root;if(_){var f=n.indexOf(_);if(f!==-1&&(t===document||t===window)){e.__root=t;return}var p=n.indexOf(t);if(p===-1)return;f<=p&&(u=f)}if(a=n[u]||e.target,a!==t){j(e,"currentTarget",{configurable:!0,get(){return a||r}});var m=V,c=N;b(null),w(null);try{for(var s,i=[];a!==null;){var l=a.assignedSlot||a.parentNode||a.host||null;try{var d=a["__"+o];if(d!==void 0&&(!a.disabled||e.target===a))if(Y(d)){var[B,...H]=d;B.apply(a,[e,...H])}else d.call(a,e)}catch(g){s?i.push(g):s=g}if(e.cancelBubble||l===t||l===null)break;a=l}if(s){for(let g of i)queueMicrotask(()=>{throw g});throw s}}finally{e.__root=t,delete e.currentTarget,b(m),w(c)}}}function Le(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r+"")}function de(e,t){return C(e,t)}function Se(e,t){L(),t.intro=t.intro??!1;const r=t.target,o=S,n=h;try{for(var a=x(r);a&&(a.nodeType!==8||a.data!==z);)a=F(a);if(!a)throw T;E(!0),I(a),G();const u=C(e,{...t,anchor:a});if(h===null||h.nodeType!==8||h.data!==U)throw $(),T;return E(!1),u}catch(u){if(u===T)return t.recover===!1&&J(),L(),K(r),E(!1),de(e,t);throw u}finally{E(o),I(n),ne()}}const v=new Map;function C(e,{target:t,anchor:r,props:o={},events:n,context:a,intro:u=!0}){L();var _=new Set,f=c=>{for(var s=0;s<c.length;s++){var i=c[s];if(!_.has(i)){_.add(i);var l=ce(i);t.addEventListener(i,y,{passive:l});var d=v.get(i);d===void 0?(document.addEventListener(i,y,{passive:l}),v.set(i,1)):v.set(i,d+1)}}};f(Q(M)),k.add(f);var p=void 0,m=X(()=>{var c=r??t.appendChild(Z());return ee(()=>{if(a){te({});var s=re;s.c=a}n&&(o.$$events=n),S&&oe(c,null),p=e(c,o)||{},S&&(N.nodes_end=h),a&&ae()}),()=>{var l;for(var s of _){t.removeEventListener(s,y);var i=v.get(s);--i===0?(document.removeEventListener(s,y),v.delete(s)):v.set(s,i)}k.delete(f),c!==r&&((l=c.parentNode)==null||l.removeChild(c))}});return A.set(p,m),p}let A=new WeakMap;function ke(e,t){const r=A.get(e);return r?(A.delete(e),r(t)):Promise.resolve()}export{ve as a,Ee as b,W as c,Te as d,fe as e,he as f,me as g,Se as h,ge as i,be as l,de as m,ye as n,we as o,Le as s,ke as u};
