var Fn=Array.isArray,$t=Array.prototype.indexOf,Mn=Array.from,qn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,Zt=Object.getOwnPropertyDescriptors,Ln=Object.prototype,Yn=Array.prototype,zt=Object.getPrototypeOf;function Hn(t){return typeof t=="function"}const jn=()=>{};function Bn(t){return t()}function wt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,yt=4,st=8,ut=16,k=32,O=64,U=128,E=256,V=512,w=1024,D=2048,P=4096,b=8192,Q=16384,Jt=32768,gt=65536,Un=1<<17,Qt=1<<19,mt=1<<20,vt=Symbol("$state"),Vn=Symbol("legacy props"),Gn=Symbol("");function Tt(t){return t===this.v}function Wt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Kn(t,n){return t!==n}function At(t){return!Wt(t,this.v)}function Xt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function tn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function nn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function rn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function $n(){throw new Error("https://svelte.dev/e/hydration_failed")}function Zn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function zn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Jn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function en(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let W=!1;function Qn(){W=!0}const Wn=1,Xn=2,tr=4,nr=8,rr=16,er=1,ar=2,lr=4,sr=8,ur=16,or=1,fr=2,ln="[",sn="[!",un="]",xt={},ir=Symbol(),_r="http://www.w3.org/2000/svg";function kt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function on(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let o=null;function pt(t){o=t}function cr(t){return tt().get(t)}function vr(t,n){return tt().set(t,n),n}function pr(t){return tt().has(t)}function hr(){return tt()}function dr(t,n=!1,r){o={p:o,c:null,e:null,m:!1,s:t,x:null,l:null},W&&!n&&(o.l={s:null,u:null,r1:[],r2:ot(!1)})}function Er(t){const n=o;if(n!==null){t!==void 0&&(n.x=t);const s=n.e;if(s!==null){var r=f,e=u;n.e=null;try{for(var l=0;l<s.length;l++){var a=s[l];Z(a.effect),$(a.reaction),bt(a.fn)}}finally{Z(r),$(e)}}o=n.p,n.m=!0}return t||{}}function X(){return!W||o!==null&&o.l===null}function tt(t){return o===null&&on(),o.c??(o.c=new Map(fn(o)||void 0))}function fn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function ot(t,n){var r={f:0,v:t,reactions:null,equals:Tt,rv:0,wv:0};return r}function wr(t){return _n(ot(t))}function yr(t,n=!1){var e;const r=ot(t);return n||(r.equals=At),W&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function _n(t){return u!==null&&!d&&(u.f&y)!==0&&(T===null?kn([t]):T.push(t)),t}function cn(t,n){return u!==null&&!d&&X()&&(u.f&(y|ut))!==0&&(T===null||!T.includes(t))&&an(),vn(t,n)}function vn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Bt(),It(t,D),X()&&f!==null&&(f.f&w)!==0&&(f.f&(k|O))===0&&(A===null?In([t]):A.push(t))),n}function gr(t,n=1){var r=Kt(t),e=n===1?r++:r--;return cn(t,r),e}function It(t,n){var r=t.reactions;if(r!==null)for(var e=X(),l=r.length,a=0;a<l;a++){var s=r[a],i=s.f;(i&D)===0&&(!e&&s===f||(x(s,n),(i&(w|E))!==0&&((i&y)!==0?It(s,P):rt(s))))}}let C=!1;function mr(t){C=t}let g;function q(t){if(t===null)throw kt(),xt;return g=t}function Tr(){return q(N(g))}function Ar(t){if(C){if(N(g)!==null)throw kt(),xt;g=t}}function xr(t=1){if(C){for(var n=t,r=g;n--;)r=N(r);g=r}}function kr(){for(var t=0,n=g;;){if(n.nodeType===8){var r=n.data;if(r===un){if(t===0)return n;t-=1}else(r===ln||r===sn)&&(t+=1)}var e=N(n);n.remove(),n=e}}var ht,pn,hn,Rt,Dt;function Ir(){if(ht===void 0){ht=window,pn=document,hn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;Rt=ct(n,"firstChild").get,Dt=ct(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function et(t=""){return document.createTextNode(t)}function at(t){return Rt.call(t)}function N(t){return Dt.call(t)}function Rr(t,n){if(!C)return at(t);var r=at(g);if(r===null)r=g.appendChild(et());else if(n&&r.nodeType!==3){var e=et();return r==null||r.before(e),q(e),e}return q(r),r}function Dr(t,n){if(!C){var r=at(t);return r instanceof Comment&&r.data===""?N(r):r}return g}function Sr(t,n=1,r=!1){let e=C?g:t;for(var l;n--;)l=e,e=N(e);if(!C)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var s=et();return e===null?l==null||l.after(s):e.before(s),q(s),s}return q(e),e}function Cr(t){t.textContent=""}function St(t){var n=y|D,r=u!==null&&(u.f&y)!==0?u:null;return f===null||r!==null&&(r.f&E)!==0?n|=E:f.f|=mt,{ctx:o,deps:null,effects:null,equals:Tt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f}}function Or(t){const n=St(t);return n.equals=At,n}function Ct(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)R(n[r])}}function dn(t){for(var n=t.parent;n!==null;){if((n.f&y)===0)return n;n=n.parent}return null}function En(t){var n,r=f;Z(dn(t));try{Ct(t),n=Vt(t)}finally{Z(r)}return n}function Ot(t){var n=En(t),r=(I||(t.f&E)!==0)&&t.deps!==null?P:w;x(t,r),t.equals(n)||(t.v=n,t.wv=Bt())}function Nt(t){f===null&&u===null&&nn(),u!==null&&(u.f&E)!==0&&f===null&&tn(),ft&&Xt()}function wn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var l=f,a={ctx:o,deps:null,nodes_start:null,nodes_end:null,f:t|D,first:null,fn:n,last:null,next:null,parent:l,prev:null,teardown:null,transitions:null,wv:0};if(r)try{it(a),a.f|=Jt}catch(_){throw R(a),_}else n!==null&&rt(a);var s=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(mt|U))===0;if(!s&&e&&(l!==null&&wn(a,l),u!==null&&(u.f&y)!==0)){var i=u;(i.effects??(i.effects=[])).push(a)}return a}function Nr(){return u!==null&&!d}function br(t){Nt();var n=f!==null&&(f.f&k)!==0&&o!==null&&!o.m;if(n){var r=o;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=bt(t);return e}}function Pr(t){return Nt(),yn(t)}function Fr(t){const n=F(O,t,!0);return()=>{R(n)}}function Mr(t){const n=F(O,t,!0);return(r={})=>new Promise(e=>{r.outro?Tn(n,()=>{R(n),e(void 0)}):(R(n),e(void 0))})}function bt(t){return F(yt,t,!1)}function yn(t){return F(st,t,!0)}function qr(t,n=[],r=St){const e=n.map(r);return gn(()=>t(...e.map(Kt)))}function gn(t,n=0){return F(st|ut|n,t,!0)}function Lr(t,n=!0){return F(st|k,t,!0,n)}function Pt(t){var n=t.teardown;if(n!==null){const r=ft,e=u;Et(!0),$(null);try{n.call(null)}finally{Et(r),$(e)}}}function Ft(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;(r.f&O)!==0?r.parent=null:R(r,n),r=e}}function mn(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&k)===0&&R(n),n=r}}function R(t,n=!0){var r=!1;if((n||(t.f&Qt)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var a=e===l?null:N(e);e.remove(),e=a}r=!0}Ft(t,n&&!r),J(t,0),x(t,Q);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Pt(t);var i=t.parent;i!==null&&i.first!==null&&Mt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Mt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Tn(t,n){var r=[];qt(t,r,!0),An(r,()=>{R(t),n&&n()})}function An(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function qt(t,n,r){if((t.f&b)===0){if(t.f^=b,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var l=e.next,a=(e.f&gt)!==0||(e.f&k)!==0;qt(e,n,a?r:!1),e=l}}}function Yr(t){Lt(t,!0)}function Lt(t,n){if((t.f&b)!==0){t.f^=b,(t.f&w)===0&&(t.f^=w),H(t)&&(x(t,D),rt(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&gt)!==0||(r.f&k)!==0;Lt(r,l?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const xn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let L=[],Y=[];function Yt(){var t=L;L=[],wt(t)}function Ht(){var t=Y;Y=[],wt(t)}function Hr(t){L.length===0&&queueMicrotask(Yt),L.push(t)}function jr(t){Y.length===0&&xn(Ht),Y.push(t)}function dt(){L.length>0&&Yt(),Y.length>0&&Ht()}let B=!1,G=!1,K=null,S=!1,ft=!1;function Et(t){ft=t}let M=[];let u=null,d=!1;function $(t){u=t}let f=null;function Z(t){f=t}let T=null;function kn(t){T=t}let c=null,h=0,A=null;function In(t){A=t}let jt=1,z=0,I=!1;function Bt(){return++jt}function H(t){var v;var n=t.f;if((n&D)!==0)return!0;if((n&P)!==0){var r=t.deps,e=(n&E)!==0;if(r!==null){var l,a,s=(n&V)!==0,i=e&&f!==null&&!I,_=r.length;if(s||i){var m=t,j=m.parent;for(l=0;l<_;l++)a=r[l],(s||!((v=a==null?void 0:a.reactions)!=null&&v.includes(m)))&&(a.reactions??(a.reactions=[])).push(m);s&&(m.f^=V),i&&j!==null&&(j.f&E)===0&&(m.f^=E)}for(l=0;l<_;l++)if(a=r[l],H(a)&&Ot(a),a.wv>t.wv)return!0}(!e||f!==null&&!I)&&x(t,w)}return!1}function Rn(t,n){for(var r=n;r!==null;){if((r.f&U)!==0)try{r.fn(t);return}catch{r.f^=U}r=r.parent}throw B=!1,t}function Dn(t){return(t.f&Q)===0&&(t.parent===null||(t.parent.f&U)===0)}function nt(t,n,r,e){if(B){if(r===null&&(B=!1),Dn(n))throw t;return}r!==null&&(B=!0);{Rn(t,n);return}}function Ut(t,n,r=!0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];(a.f&y)!==0?Ut(a,n,!1):n===a&&(r?x(a,D):(a.f&w)!==0&&x(a,P),rt(a))}}function Vt(t){var _t;var n=c,r=h,e=A,l=u,a=I,s=T,i=o,_=d,m=t.f;c=null,h=0,A=null,I=(m&E)!==0&&(d||!S||u===null),u=(m&(k|O))===0?t:null,T=null,pt(t.ctx),d=!1,z++;try{var j=(0,t.fn)(),v=t.deps;if(c!==null){var p;if(J(t,h),v!==null&&h>0)for(v.length=h+c.length,p=0;p<c.length;p++)v[h+p]=c[p];else t.deps=v=c;if(!I)for(p=h;p<v.length;p++)((_t=v[p]).reactions??(_t.reactions=[])).push(t)}else v!==null&&h<v.length&&(J(t,h),v.length=h);if(X()&&A!==null&&!d&&v!==null&&(t.f&(y|P|D))===0)for(p=0;p<A.length;p++)Ut(A[p],t);return l!==null&&z++,j}finally{c=n,h=r,A=e,u=l,I=a,T=s,pt(i),d=_}}function Sn(t,n){let r=n.reactions;if(r!==null){var e=$t.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&(n.f&y)!==0&&(c===null||!c.includes(n))&&(x(n,P),(n.f&(E|V))===0&&(n.f^=V),Ct(n),J(n,0))}function J(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Sn(t,r[e])}function it(t){var n=t.f;if((n&Q)===0){x(t,w);var r=f,e=o,l=S;f=t,S=!0;try{(n&ut)!==0?mn(t):Ft(t),Pt(t);var a=Vt(t);t.teardown=typeof a=="function"?a:null,t.wv=jt;var s=t.deps,i}catch(_){nt(_,t,r,e||t.ctx)}finally{S=l,f=r}}}function Cn(){try{rn()}catch(t){if(K!==null)nt(t,K,null);else throw t}}function Gt(){var t=S;try{var n=0;for(S=!0;M.length>0;){n++>1e3&&Cn();var r=M,e=r.length;M=[];for(var l=0;l<e;l++){var a=Nn(r[l]);On(a)}}}finally{G=!1,S=t,K=null}}function On(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(Q|b))===0)try{H(e)&&(it(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mt(e):e.fn=null))}catch(l){nt(l,e,null,e.ctx)}}}function rt(t){G||(G=!0,queueMicrotask(Gt));for(var n=K=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(O|k))!==0){if((r&w)===0)return;n.f^=w}}M.push(n)}function Nn(t){for(var n=[],r=t;r!==null;){var e=r.f,l=(e&(k|O))!==0,a=l&&(e&w)!==0;if(!a&&(e&b)===0){if((e&yt)!==0)n.push(r);else if(l)r.f^=w;else{var s=u;try{u=r,H(r)&&it(r)}catch(m){nt(m,r,null,r.ctx)}finally{u=s}}var i=r.first;if(i!==null){r=i;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function bn(t){var n;for(dt();M.length>0;)G=!0,Gt(),dt();return n}async function Br(){await Promise.resolve(),bn()}function Kt(t){var n=t.f,r=(n&y)!==0;if(u!==null&&!d){T!==null&&T.includes(t)&&en();var e=u.deps;t.rv<z&&(t.rv=z,c===null&&e!==null&&e[h]===t?h++:c===null?c=[t]:(!I||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&(a.f&E)===0&&(l.f^=E)}return r&&(l=t,H(l)&&Ot(l)),t.v}function Ur(t){var n=d;try{return d=!0,t()}finally{d=n}}const Pn=-7169;function x(t,n){t.f=t.f&Pn|n}function Vr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)lt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&vt in r&&lt(r)}}}function lt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{lt(t[e],n)}catch{}const r=zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Zt(r);for(let l in e){const a=e[l].get;if(a)try{a.call(t)}catch{}}}}}export{pn as $,at as A,Cr as B,$ as C,Z as D,gt as E,u as F,f as G,qn as H,Fn as I,Ir as J,ln as K,N as L,xt as M,mr as N,q as O,Tr as P,un as Q,kt as R,$n as S,Mn as T,Mr as U,et as V,Qt as W,hn as X,or as Y,fr as Z,cn as _,Lr as a,Vn as a0,bn as a1,yr as a2,wr as a3,Br as a4,vt as a5,Ln as a6,Yn as a7,ot as a8,Jn as a9,Xn as aA,nr as aB,Wn as aC,vn as aD,qt as aE,An as aF,rr as aG,_r as aH,Gn as aI,jr as aJ,Zt as aK,Nr as aL,pr as aM,cr as aN,vr as aO,hr as aP,Fr as aQ,xr as aR,ir as aa,ct as ab,zn as ac,zt as ad,sn as ae,kr as af,Yr as ag,Tn as ah,bt as ai,yn as aj,gr as ak,Hn as al,Zn as am,Un as an,Or as ao,lr as ap,At as aq,sr as ar,ur as as,ar as at,er as au,X as av,Kn as aw,Wt as ax,tr as ay,b as az,gn as b,g as c,R as d,o as e,W as f,Ur as g,C as h,Pr as i,Kt as j,Bn as k,on as l,Vr as m,jn as n,St as o,Qn as p,Dr as q,wt as r,dr as s,qr as t,br as u,Er as v,Rr as w,Ar as x,Sr as y,Hr as z};
