import{a6 as S,a7 as W,a8 as X,a9 as g,aa as k,j as P,ab as b,a0 as I,ac as m,D as ee,ad as re,ae as ne,G as se,b as H,h as N,P as Z,E as $,K as ie,af as te,ag as ae,O as fe,N as M,ah as U,a as q,ai as j,c as V,aj as ue,ak as le,g as Y,z as ce,al as C,am as T,a1 as J,an as oe,ao as ve,o as G,ap as de,aq as Q,ar as _e,a3 as pe,as as be,at as he,f as Pe,au as we,av as ge}from"./TRalcB7t.js";function O(e,r=null,t){if(typeof e!="object"||e===null||S in e)return e;const i=ne(e);if(i!==W&&i!==X)return e;var s=new Map,u=se(e),p=g(0);u&&s.set("length",g(e.length));var h;return new Proxy(e,{defineProperty(c,n,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&re();var l=s.get(n);return l===void 0?(l=g(a.value),s.set(n,l)):I(l,O(a.value,h)),!0},deleteProperty(c,n){var a=s.get(n);if(a===void 0)n in c&&s.set(n,g(b));else{if(u&&typeof n=="string"){var l=s.get("length"),f=Number(n);Number.isInteger(f)&&f<l.v&&I(l,f)}I(a,b),z(p)}return!0},get(c,n,a){var d;if(n===S)return e;var l=s.get(n),f=n in c;if(l===void 0&&(!f||(d=m(c,n))!=null&&d.writable)&&(l=g(O(f?c[n]:b,h)),s.set(n,l)),l!==void 0){var o=P(l);return o===b?void 0:o}return Reflect.get(c,n,a)},getOwnPropertyDescriptor(c,n){var a=Reflect.getOwnPropertyDescriptor(c,n);if(a&&"value"in a){var l=s.get(n);l&&(a.value=P(l))}else if(a===void 0){var f=s.get(n),o=f==null?void 0:f.v;if(f!==void 0&&o!==b)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return a},has(c,n){var o;if(n===S)return!0;var a=s.get(n),l=a!==void 0&&a.v!==b||Reflect.has(c,n);if(a!==void 0||ee!==null&&(!l||(o=m(c,n))!=null&&o.writable)){a===void 0&&(a=g(l?O(c[n],h):b),s.set(n,a));var f=P(a);if(f===b)return!1}return l},set(c,n,a,l){var R;var f=s.get(n),o=n in c;if(u&&n==="length")for(var d=a;d<f.v;d+=1){var w=s.get(d+"");w!==void 0?I(w,b):d in c&&(w=g(b),s.set(d+"",w))}f===void 0?(!o||(R=m(c,n))!=null&&R.writable)&&(f=g(void 0),I(f,O(a,h)),s.set(n,f)):(o=f.v!==b,I(f,O(a,h)));var _=Reflect.getOwnPropertyDescriptor(c,n);if(_!=null&&_.set&&_.set.call(l,a),!o){if(u&&typeof n=="string"){var E=s.get("length"),A=Number(n);Number.isInteger(A)&&A>=E.v&&I(E,A+1)}z(p)}return!0},ownKeys(c){P(p);var n=Reflect.ownKeys(c).filter(f=>{var o=s.get(f);return o===void 0||o.v!==b});for(var[a,l]of s)l.v!==b&&!(a in c)&&n.push(a);return n},setPrototypeOf(){k()}})}function z(e,r=1){I(e,e.v+r)}function Ee(e,r,[t,i]=[0,0]){N&&t===0&&Z();var s=e,u=null,p=null,h=b,c=t>0?$:0,n=!1;const a=(f,o=!0)=>{n=!0,l(o,f)},l=(f,o)=>{if(h===(h=f))return;let d=!1;if(N&&i!==-1){if(t===0){const _=s.data;_===ie?i=0:_===te?i=1/0:(i=parseInt(_.substring(1)),i!==i&&(i=h?1/0:-1))}const w=i>t;!!h===w&&(s=ae(),fe(s),M(!1),d=!0,i=-1)}h?(u?U(u):o&&(u=q(()=>o(s))),p&&j(p,()=>{p=null})):(p?U(p):o&&(p=q(()=>o(s,[t+1,i]))),u&&j(u,()=>{u=null})),d&&M(!0)};H(()=>{n=!1,r(a),n||l(null,null)},c),N&&(s=V)}function Ae(e,r,t){N&&Z();var i=e,s,u;H(()=>{s!==(s=r())&&(u&&(j(u),u=null),s&&(u=q(()=>t(i,s))))},$),N&&(i=V)}function F(e,r){return e===r||(e==null?void 0:e[S])===r}function De(e={},r,t,i){return ue(()=>{var s,u;return le(()=>{s=u,u=[],Y(()=>{e!==t(...u)&&(r(e,...u),s&&F(t(...s),e)&&r(null,...s))})}),()=>{ce(()=>{u&&F(t(...u),e)&&r(null,...u)})}}),e}let L=!1;function Ie(e){var r=L;try{return L=!1,[e(),L]}finally{L=r}}const Re={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Te(e,r,t){return new Proxy({props:e,exclude:r},Re)}const ye={get(e,r){if(!e.exclude.includes(r))return P(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,t){return r in e.special||(e.special[r]=Se({get[r](){return e.props[r]}},r,Q)),e.special[r](t),C(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),C(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Ne(e,r){return new Proxy({props:e,exclude:r,special:{},version:g(0)},ye)}const Oe={get(e,r){let t=e.props.length;for(;t--;){let i=e.props[t];if(T(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i)return i[r]}},set(e,r,t){let i=e.props.length;for(;i--;){let s=e.props[i];T(s)&&(s=s());const u=m(s,r);if(u&&u.set)return u.set(t),!0}return!1},getOwnPropertyDescriptor(e,r){let t=e.props.length;for(;t--;){let i=e.props[t];if(T(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i){const s=m(i,r);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,r){if(r===S||r===J)return!1;for(let t of e.props)if(T(t)&&(t=t()),t!=null&&r in t)return!0;return!1},ownKeys(e){const r=[];for(let t of e.props){T(t)&&(t=t());for(const i in t)r.includes(i)||r.push(i)}return r}};function Le(...e){return new Proxy({props:e},Oe)}function Se(e,r,t,i){var B;var s=(t&ge)!==0,u=!Pe||(t&we)!==0,p=(t&be)!==0,h=(t&he)!==0,c=!1,n;p?[n,c]=Ie(()=>e[r]):n=e[r];var a=S in e||J in e,l=p&&(((B=m(e,r))==null?void 0:B.set)??(a&&r in e&&(v=>e[r]=v)))||void 0,f=i,o=!0,d=!1,w=()=>(d=!0,o&&(o=!1,h?f=Y(i):f=i),f);n===void 0&&i!==void 0&&(l&&u&&oe(),n=w(),l&&l(n));var _;if(u)_=()=>{var v=e[r];return v===void 0?w():(o=!0,d=!1,v)};else{var E=(s?G:de)(()=>e[r]);E.f|=ve,_=()=>{var v=P(E);return v!==void 0&&(f=void 0),v===void 0?f:v}}if((t&Q)===0)return _;if(l){var A=e.$$legacy;return function(v,y){return arguments.length>0?((!u||!y||A||c)&&l(y?_():v),v):_()}}var R=!1,x=pe(n),D=G(()=>{var v=_(),y=P(x);return R?(R=!1,y):x.v=v});return s||(D.equals=_e),function(v,y){if(arguments.length>0){const K=y?P(D):u&&p?O(v):v;return D.equals(K)||(R=!0,I(x,K),d&&f!==void 0&&(f=K),Y(()=>P(D))),v}return P(D)}}export{O as a,De as b,Ae as c,Ee as i,Ne as l,Se as p,Te as r,Le as s};
