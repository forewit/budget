var Sn=Array.isArray,Vt=Array.prototype.indexOf,In=Array.from,Nn=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,Gt=Object.getOwnPropertyDescriptors,Pn=Object.prototype,bn=Array.prototype,Kt=Object.getPrototypeOf;const Fn=()=>{};function Cn(t){return t()}function wt(t){for(var n=0;n<t.length;n++)t[n]()}const E=2,yt=4,at=8,st=16,k=32,b=64,U=128,d=256,H=512,w=1024,D=2048,F=4096,P=8192,z=16384,Zt=32768,Et=65536,qn=1<<17,$t=1<<19,gt=1<<20,ct=Symbol("$state"),Yn=Symbol("legacy props");function mt(t){return t===this.v}function Wt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Tt(t){return!Wt(t,this.v)}function zt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Jt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Qt(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Xt(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ln(){throw new Error("https://svelte.dev/e/hydration_failed")}function jn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Mn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Bn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function tn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function nn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let J=!1;function Un(){J=!0}const Hn=1,Vn=2,Gn=4,Kn=8,Zn=16,$n=1,Wn=2,rn="[",en="[!",ln="]",xt={},zn=Symbol();function At(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let i=null;function vt(t){i=t}function Jn(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},J&&!n&&(i.l={s:null,u:null,r1:[],r2:ut(!1)})}function Qn(t){const n=i;if(n!==null){const s=n.e;if(s!==null){var r=o,e=u;n.e=null;try{for(var a=0;a<s.length;a++){var l=s[a];Z(l.effect),K(l.reaction),Pt(l.fn)}}finally{Z(r),K(e)}}i=n.p,n.m=!0}return{}}function Q(){return!J||i!==null&&i.l===null}function ut(t,n){var r={f:0,v:t,reactions:null,equals:mt,rv:0,wv:0};return r}function Xn(t){return an(ut(t))}function tr(t,n=!1){var e;const r=ut(t);return n||(r.equals=Tt),J&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function an(t){return u!==null&&!y&&(u.f&E)!==0&&(T===null?yn([t]):T.push(t)),t}function nr(t,n){return u!==null&&!y&&Q()&&(u.f&(E|st))!==0&&(T===null||!T.includes(t))&&nn(),sn(t,n)}function sn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Mt(),kt(t,D),Q()&&o!==null&&(o.f&w)!==0&&(o.f&(k|b))===0&&(x===null?En([t]):x.push(t))),n}function kt(t,n){var r=t.reactions;if(r!==null)for(var e=Q(),a=r.length,l=0;l<a;l++){var s=r[l],f=s.f;(f&D)===0&&(!e&&s===o||(A(s,n),(f&(w|d))!==0&&((f&E)!==0?kt(s,F):tt(s))))}}let S=!1;function rr(t){S=t}let g;function q(t){if(t===null)throw At(),xt;return g=t}function er(){return q(N(g))}function lr(t){if(S){if(N(g)!==null)throw At(),xt;g=t}}function ar(t=1){if(S){for(var n=t,r=g;n--;)r=N(r);g=r}}function sr(){for(var t=0,n=g;;){if(n.nodeType===8){var r=n.data;if(r===ln){if(t===0)return n;t-=1}else(r===rn||r===en)&&(t+=1)}var e=N(n);n.remove(),n=e}}var pt,un,Rt,Dt;function ur(){if(pt===void 0){pt=window,un=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;Rt=_t(n,"firstChild").get,Dt=_t(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return Rt.call(t)}function N(t){return Dt.call(t)}function or(t,n){if(!S)return rt(t);var r=rt(g);if(r===null)r=g.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),q(e),e}return q(r),r}function fr(t,n){if(!S){var r=rt(t);return r instanceof Comment&&r.data===""?N(r):r}return g}function ir(t,n=1,r=!1){let e=S?g:t;for(var a;n--;)a=e,e=N(e);if(!S)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var s=nt();return e===null?a==null||a.after(s):e.before(s),q(s),s}return q(e),e}function _r(t){t.textContent=""}function Ot(t){var n=E|D,r=u!==null&&(u.f&E)!==0?u:null;return o===null||r!==null&&(r.f&d)!==0?n|=d:o.f|=gt,{ctx:i,deps:null,effects:null,equals:mt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??o}}function cr(t){const n=Ot(t);return n.equals=Tt,n}function St(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)I(n[r])}}function on(t){for(var n=t.parent;n!==null;){if((n.f&E)===0)return n;n=n.parent}return null}function fn(t){var n,r=o;Z(on(t));try{St(t),n=Ut(t)}finally{Z(r)}return n}function It(t){var n=fn(t),r=(R||(t.f&d)!==0)&&t.deps!==null?F:w;A(t,r),t.equals(n)||(t.v=n,t.wv=Mt())}function Nt(t){o===null&&u===null&&Qt(),u!==null&&(u.f&d)!==0&&o===null&&Jt(),ot&&zt()}function _n(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function L(t,n,r,e=!0){var a=o,l={ctx:i,deps:null,nodes_start:null,nodes_end:null,f:t|D,first:null,fn:n,last:null,next:null,parent:a,prev:null,teardown:null,transitions:null,wv:0};if(r)try{ft(l),l.f|=Zt}catch(_){throw I(l),_}else n!==null&&tt(l);var s=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&(gt|U))===0;if(!s&&e&&(a!==null&&_n(l,a),u!==null&&(u.f&E)!==0)){var f=u;(f.effects??(f.effects=[])).push(l)}return l}function vr(t){Nt();var n=o!==null&&(o.f&k)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Pt(t);return e}}function pr(t){return Nt(),cn(t)}function hr(t){const n=L(b,t,!0);return(r={})=>new Promise(e=>{r.outro?hn(n,()=>{I(n),e(void 0)}):(I(n),e(void 0))})}function Pt(t){return L(yt,t,!1)}function cn(t){return L(at,t,!0)}function dr(t,n=[],r=Ot){const e=n.map(r);return vn(()=>t(...e.map(Dn)))}function vn(t,n=0){return L(at|st|n,t,!0)}function wr(t,n=!0){return L(at|k,t,!0,n)}function bt(t){var n=t.teardown;if(n!==null){const r=ot,e=u;dt(!0),K(null);try{n.call(null)}finally{dt(r),K(e)}}}function Ft(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;(r.f&b)!==0?r.parent=null:I(r,n),r=e}}function pn(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&k)===0&&I(n),n=r}}function I(t,n=!0){var r=!1;if((n||(t.f&$t)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,a=t.nodes_end;e!==null;){var l=e===a?null:N(e);e.remove(),e=l}r=!0}Ft(t,n&&!r),W(t,0),A(t,z);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();bt(t);var f=t.parent;f!==null&&f.first!==null&&Ct(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ct(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function hn(t,n){var r=[];qt(t,r,!0),dn(r,()=>{I(t),n&&n()})}function dn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var a of t)a.out(e)}else n()}function qt(t,n,r){if((t.f&P)===0){if(t.f^=P,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var a=e.next,l=(e.f&Et)!==0||(e.f&k)!==0;qt(e,n,l?r:!1),e=a}}}function yr(t){Yt(t,!0)}function Yt(t,n){if((t.f&P)!==0){t.f^=P,(t.f&w)===0&&(t.f^=w),j(t)&&(A(t,D),tt(t));for(var r=t.first;r!==null;){var e=r.next,a=(r.f&Et)!==0||(r.f&k)!==0;Yt(r,a?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let Y=[],et=[];function Lt(){var t=Y;Y=[],wt(t)}function wn(){var t=et;et=[],wt(t)}function Er(t){Y.length===0&&queueMicrotask(Lt),Y.push(t)}function ht(){Y.length>0&&Lt(),et.length>0&&wn()}let B=!1,V=!1,G=null,O=!1,ot=!1;function dt(t){ot=t}let C=[];let u=null,y=!1;function K(t){u=t}let o=null;function Z(t){o=t}let T=null;function yn(t){T=t}let c=null,h=0,x=null;function En(t){x=t}let jt=1,$=0,R=!1;function Mt(){return++jt}function j(t){var v;var n=t.f;if((n&D)!==0)return!0;if((n&F)!==0){var r=t.deps,e=(n&d)!==0;if(r!==null){var a,l,s=(n&H)!==0,f=e&&o!==null&&!R,_=r.length;if(s||f){var m=t,M=m.parent;for(a=0;a<_;a++)l=r[a],(s||!((v=l==null?void 0:l.reactions)!=null&&v.includes(m)))&&(l.reactions??(l.reactions=[])).push(m);s&&(m.f^=H),f&&M!==null&&(M.f&d)===0&&(m.f^=d)}for(a=0;a<_;a++)if(l=r[a],j(l)&&It(l),l.wv>t.wv)return!0}(!e||o!==null&&!R)&&A(t,w)}return!1}function gn(t,n){for(var r=n;r!==null;){if((r.f&U)!==0)try{r.fn(t);return}catch{r.f^=U}r=r.parent}throw B=!1,t}function mn(t){return(t.f&z)===0&&(t.parent===null||(t.parent.f&U)===0)}function X(t,n,r,e){if(B){if(r===null&&(B=!1),mn(n))throw t;return}r!==null&&(B=!0);{gn(t,n);return}}function Bt(t,n,r=!0){var e=t.reactions;if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];(l.f&E)!==0?Bt(l,n,!1):n===l&&(r?A(l,D):(l.f&w)!==0&&A(l,F),tt(l))}}function Ut(t){var it;var n=c,r=h,e=x,a=u,l=R,s=T,f=i,_=y,m=t.f;c=null,h=0,x=null,R=(m&d)!==0&&(y||!O||u===null),u=(m&(k|b))===0?t:null,T=null,vt(t.ctx),y=!1,$++;try{var M=(0,t.fn)(),v=t.deps;if(c!==null){var p;if(W(t,h),v!==null&&h>0)for(v.length=h+c.length,p=0;p<c.length;p++)v[h+p]=c[p];else t.deps=v=c;if(!R)for(p=h;p<v.length;p++)((it=v[p]).reactions??(it.reactions=[])).push(t)}else v!==null&&h<v.length&&(W(t,h),v.length=h);if(Q()&&x!==null&&!y&&v!==null&&(t.f&(E|F|D))===0)for(p=0;p<x.length;p++)Bt(x[p],t);return a!==null&&$++,M}finally{c=n,h=r,x=e,u=a,R=l,T=s,vt(f),y=_}}function Tn(t,n){let r=n.reactions;if(r!==null){var e=Vt.call(r,t);if(e!==-1){var a=r.length-1;a===0?r=n.reactions=null:(r[e]=r[a],r.pop())}}r===null&&(n.f&E)!==0&&(c===null||!c.includes(n))&&(A(n,F),(n.f&(d|H))===0&&(n.f^=H),St(n),W(n,0))}function W(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Tn(t,r[e])}function ft(t){var n=t.f;if((n&z)===0){A(t,w);var r=o,e=i,a=O;o=t,O=!0;try{(n&st)!==0?pn(t):Ft(t),bt(t);var l=Ut(t);t.teardown=typeof l=="function"?l:null,t.wv=jt;var s=t.deps,f}catch(_){X(_,t,r,e||t.ctx)}finally{O=a,o=r}}}function xn(){try{Xt()}catch(t){if(G!==null)X(t,G,null);else throw t}}function Ht(){var t=O;try{var n=0;for(O=!0;C.length>0;){n++>1e3&&xn();var r=C,e=r.length;C=[];for(var a=0;a<e;a++){var l=kn(r[a]);An(l)}}}finally{V=!1,O=t,G=null}}function An(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(z|P))===0)try{j(e)&&(ft(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ct(e):e.fn=null))}catch(a){X(a,e,null,e.ctx)}}}function tt(t){V||(V=!0,queueMicrotask(Ht));for(var n=G=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(b|k))!==0){if((r&w)===0)return;n.f^=w}}C.push(n)}function kn(t){for(var n=[],r=t;r!==null;){var e=r.f,a=(e&(k|b))!==0,l=a&&(e&w)!==0;if(!l&&(e&P)===0){if((e&yt)!==0)n.push(r);else if(a)r.f^=w;else{var s=u;try{u=r,j(r)&&ft(r)}catch(m){X(m,r,null,r.ctx)}finally{u=s}}var f=r.first;if(f!==null){r=f;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function Rn(t){var n;for(ht();C.length>0;)V=!0,Ht(),ht();return n}async function gr(){await Promise.resolve(),Rn()}function Dn(t){var n=t.f,r=(n&E)!==0;if(u!==null&&!y){T!==null&&T.includes(t)&&tn();var e=u.deps;t.rv<$&&(t.rv=$,c===null&&e!==null&&e[h]===t?h++:c===null?c=[t]:(!R||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var a=t,l=a.parent;l!==null&&(l.f&d)===0&&(a.f^=d)}return r&&(a=t,j(a)&&It(a)),t.v}function mr(t){var n=y;try{return y=!0,t()}finally{y=n}}const On=-7169;function A(t,n){t.f=t.f&On|n}function Tr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)lt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ct in r&&lt(r)}}}function lt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{lt(t[e],n)}catch{}const r=Kt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Gt(r);for(let a in e){const l=e[a].get;if(l)try{l.call(t)}catch{}}}}}export{ut as $,nt as A,wr as B,Jn as C,S as D,Qn as E,vn as F,Et as G,rn as H,Fn as I,I as J,fr as K,pr as L,wt as M,Dn as N,Cn as O,Tr as P,Ot as Q,dr as R,or as S,lr as T,ir as U,un as V,$n as W,Wn as X,ct as Y,Pn as Z,bn as _,mr as a,Bn as a0,zn as a1,nr as a2,_t as a3,Mn as a4,Kt as a5,en as a6,sr as a7,yr as a8,hn as a9,Pt as aa,cn as ab,Er as ac,jn as ad,qn as ae,cr as af,Gn as ag,Tt as ah,tr as ai,Kn as aj,Yn as ak,Vn as al,Hn as am,Zn as an,Rn as ao,Xn as ap,gr as aq,Wt as ar,Z as b,i as c,Nn as d,Un as e,u as f,o as g,ur as h,Sn as i,rt as j,N as k,J as l,xt as m,ar as n,rr as o,q as p,er as q,g as r,K as s,ln as t,vr as u,At as v,Ln as w,_r as x,In as y,hr as z};
