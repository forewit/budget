import{X as O,Y as X,Z as W,_ as g,a0 as k,j as P,a1 as b,Q as R,a2 as m,J as ee,a3 as re,a4 as ne,a5 as se,b as G,h as N,y as $,E as z,H as ie,a6 as te,a7 as ae,x as fe,w as B,a8 as M,a as Y,a9 as j,c as J,aa as ue,ab as le,g as q,ac as ce,ad as C,ae as D,R as Q,af as oe,ag as de,o as H,ah as ve,ai as V,aj as _e,U as pe,ak as be,al as he,f as Pe,am as we,an as ge}from"./BDgDtLks.js";function S(e,r=null,t){if(typeof e!="object"||e===null||O in e)return e;const i=ne(e);if(i!==X&&i!==W)return e;var s=new Map,u=se(e),p=g(0);u&&s.set("length",g(e.length));var h;return new Proxy(e,{defineProperty(c,n,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&re();var l=s.get(n);return l===void 0?(l=g(a.value),s.set(n,l)):R(l,S(a.value,h)),!0},deleteProperty(c,n){var a=s.get(n);if(a===void 0)n in c&&s.set(n,g(b));else{if(u&&typeof n=="string"){var l=s.get("length"),f=Number(n);Number.isInteger(f)&&f<l.v&&R(l,f)}R(a,b),Z(p)}return!0},get(c,n,a){var v;if(n===O)return e;var l=s.get(n),f=n in c;if(l===void 0&&(!f||(v=m(c,n))!=null&&v.writable)&&(l=g(S(f?c[n]:b,h)),s.set(n,l)),l!==void 0){var o=P(l);return o===b?void 0:o}return Reflect.get(c,n,a)},getOwnPropertyDescriptor(c,n){var a=Reflect.getOwnPropertyDescriptor(c,n);if(a&&"value"in a){var l=s.get(n);l&&(a.value=P(l))}else if(a===void 0){var f=s.get(n),o=f==null?void 0:f.v;if(f!==void 0&&o!==b)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return a},has(c,n){var o;if(n===O)return!0;var a=s.get(n),l=a!==void 0&&a.v!==b||Reflect.has(c,n);if(a!==void 0||ee!==null&&(!l||(o=m(c,n))!=null&&o.writable)){a===void 0&&(a=g(l?S(c[n],h):b),s.set(n,a));var f=P(a);if(f===b)return!1}return l},set(c,n,a,l){var I;var f=s.get(n),o=n in c;if(u&&n==="length")for(var v=a;v<f.v;v+=1){var w=s.get(v+"");w!==void 0?R(w,b):v in c&&(w=g(b),s.set(v+"",w))}f===void 0?(!o||(I=m(c,n))!=null&&I.writable)&&(f=g(void 0),R(f,S(a,h)),s.set(n,f)):(o=f.v!==b,R(f,S(a,h)));var _=Reflect.getOwnPropertyDescriptor(c,n);if(_!=null&&_.set&&_.set.call(l,a),!o){if(u&&typeof n=="string"){var E=s.get("length"),A=Number(n);Number.isInteger(A)&&A>=E.v&&R(E,A+1)}Z(p)}return!0},ownKeys(c){P(p);var n=Reflect.ownKeys(c).filter(f=>{var o=s.get(f);return o===void 0||o.v!==b});for(var[a,l]of s)l.v!==b&&!(a in c)&&n.push(a);return n},setPrototypeOf(){k()}})}function Z(e,r=1){R(e,e.v+r)}function Ee(e,r,[t,i]=[0,0]){N&&t===0&&$();var s=e,u=null,p=null,h=b,c=t>0?z:0,n=!1;const a=(f,o=!0)=>{n=!0,l(o,f)},l=(f,o)=>{if(h===(h=f))return;let v=!1;if(N&&i!==-1){if(t===0){const _=s.data;_===ie?i=0:_===te?i=1/0:(i=parseInt(_.substring(1)),i!==i&&(i=h?1/0:-1))}const w=i>t;!!h===w&&(s=ae(),fe(s),B(!1),v=!0,i=-1)}h?(u?M(u):o&&(u=Y(()=>o(s))),p&&j(p,()=>{p=null})):(p?M(p):o&&(p=Y(()=>o(s,[t+1,i]))),u&&j(u,()=>{u=null})),v&&B(!0)};G(()=>{n=!1,r(a),n||l(null,null)},c),N&&(s=J)}function Ae(e,r,t){N&&$();var i=e,s,u;G(()=>{s!==(s=r())&&(u&&(j(u),u=null),s&&(u=Y(()=>t(i,s))))},z),N&&(i=J)}function F(e,r){return e===r||(e==null?void 0:e[O])===r}function Te(e={},r,t,i){return ue(()=>{var s,u;return le(()=>{s=u,u=[],q(()=>{e!==t(...u)&&(r(e,...u),s&&F(t(...s),e)&&r(null,...s))})}),()=>{ce(()=>{u&&F(t(...u),e)&&r(null,...u)})}}),e}let x=!1;function Re(e){var r=x;try{return x=!1,[e(),x]}finally{x=r}}const Ie={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function De(e,r,t){return new Proxy({props:e,exclude:r},Ie)}const ye={get(e,r){if(!e.exclude.includes(r))return P(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,t){return r in e.special||(e.special[r]=Oe({get[r](){return e.props[r]}},r,V)),e.special[r](t),C(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),C(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Ne(e,r){return new Proxy({props:e,exclude:r,special:{},version:g(0)},ye)}const Se={get(e,r){let t=e.props.length;for(;t--;){let i=e.props[t];if(D(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i)return i[r]}},set(e,r,t){let i=e.props.length;for(;i--;){let s=e.props[i];D(s)&&(s=s());const u=m(s,r);if(u&&u.set)return u.set(t),!0}return!1},getOwnPropertyDescriptor(e,r){let t=e.props.length;for(;t--;){let i=e.props[t];if(D(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i){const s=m(i,r);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,r){if(r===O||r===Q)return!1;for(let t of e.props)if(D(t)&&(t=t()),t!=null&&r in t)return!0;return!1},ownKeys(e){const r=[];for(let t of e.props){D(t)&&(t=t());for(const i in t)r.includes(i)||r.push(i)}return r}};function xe(...e){return new Proxy({props:e},Se)}function Oe(e,r,t,i){var U;var s=(t&ge)!==0,u=!Pe||(t&we)!==0,p=(t&be)!==0,h=(t&he)!==0,c=!1,n;p?[n,c]=Re(()=>e[r]):n=e[r];var a=O in e||Q in e,l=p&&(((U=m(e,r))==null?void 0:U.set)??(a&&r in e&&(d=>e[r]=d)))||void 0,f=i,o=!0,v=!1,w=()=>(v=!0,o&&(o=!1,h?f=q(i):f=i),f);n===void 0&&i!==void 0&&(l&&u&&oe(),n=w(),l&&l(n));var _;if(u)_=()=>{var d=e[r];return d===void 0?w():(o=!0,v=!1,d)};else{var E=(s?H:ve)(()=>e[r]);E.f|=de,_=()=>{var d=P(E);return d!==void 0&&(f=void 0),d===void 0?f:d}}if((t&V)===0)return _;if(l){var A=e.$$legacy;return function(d,y){return arguments.length>0?((!u||!y||A||c)&&l(y?_():d),d):_()}}var I=!1,L=pe(n),T=H(()=>{var d=_(),y=P(L);return I?(I=!1,y):L.v=d});return s||(T.equals=_e),function(d,y){if(arguments.length>0){const K=y?P(T):u&&p?S(d):d;return T.equals(K)||(I=!0,R(L,K),v&&f!==void 0&&(f=K),q(()=>P(T))),d}return P(T)}}export{S as a,Te as b,Ae as c,Ee as i,Ne as l,Oe as p,De as r,xe as s};
