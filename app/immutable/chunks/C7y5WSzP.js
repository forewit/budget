import{S as D,T as F,U as G,V as g,W as V,I as h,X as b,Y as I,Z as S,t as W,_ as X,$ as J,a0 as Q,z as k,r as K,h as ee,E as re,H as ne,a1 as se,a2 as ie,c as te,s as q,a3 as U,o as j,A as B,d as ae,a4 as fe,a5 as ue,L as M,a6 as le,a7 as $,a8 as ce,a9 as oe,y as C,aa as de,ab as z,x as ve,ac as _e,ad as pe,ae as be,af as T,ag as H}from"./CKfz4YwK.js";function y(e,r=null,f){if(typeof e!="object"||e===null||D in e)return e;const s=J(e);if(s!==F&&s!==G)return e;var i=new Map,o=Q(e),p=g(0);o&&i.set("length",g(e.length));var P;return new Proxy(e,{defineProperty(l,n,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&X();var u=i.get(n);return u===void 0?(u=g(t.value),i.set(n,u)):I(u,y(t.value,P)),!0},deleteProperty(l,n){var t=i.get(n);if(t===void 0)n in l&&i.set(n,g(b));else{if(o&&typeof n=="string"){var u=i.get("length"),a=Number(n);Number.isInteger(a)&&a<u.v&&I(u,a)}I(t,b),Z(p)}return!0},get(l,n,t){var v;if(n===D)return e;var u=i.get(n),a=n in l;if(u===void 0&&(!a||(v=S(l,n))!=null&&v.writable)&&(u=g(y(a?l[n]:b,P)),i.set(n,u)),u!==void 0){var c=h(u);return c===b?void 0:c}return Reflect.get(l,n,t)},getOwnPropertyDescriptor(l,n){var t=Reflect.getOwnPropertyDescriptor(l,n);if(t&&"value"in t){var u=i.get(n);u&&(t.value=h(u))}else if(t===void 0){var a=i.get(n),c=a==null?void 0:a.v;if(a!==void 0&&c!==b)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return t},has(l,n){var c;if(n===D)return!0;var t=i.get(n),u=t!==void 0&&t.v!==b||Reflect.has(l,n);if(t!==void 0||W!==null&&(!u||(c=S(l,n))!=null&&c.writable)){t===void 0&&(t=g(u?y(l[n],P):b),i.set(n,t));var a=h(t);if(a===b)return!1}return u},set(l,n,t,u){var m;var a=i.get(n),c=n in l;if(o&&n==="length")for(var v=t;v<a.v;v+=1){var w=i.get(v+"");w!==void 0?I(w,b):v in l&&(w=g(b),i.set(v+"",w))}a===void 0?(!c||(m=S(l,n))!=null&&m.writable)&&(a=g(void 0),I(a,y(t,P)),i.set(n,a)):(c=a.v!==b,I(a,y(t,P)));var _=Reflect.getOwnPropertyDescriptor(l,n);if(_!=null&&_.set&&_.set.call(u,t),!c){if(o&&typeof n=="string"){var O=i.get("length"),A=Number(n);Number.isInteger(A)&&A>=O.v&&I(O,A+1)}Z(p)}return!0},ownKeys(l){h(p);var n=Reflect.ownKeys(l).filter(a=>{var c=i.get(a);return c===void 0||c.v!==b});for(var[t,u]of i)u.v!==b&&!(t in l)&&n.push(t);return n},setPrototypeOf(){V()}})}function Z(e,r=1){I(e,e.v+r)}function Re(e,r,[f,s]=[0,0]){K&&f===0&&ee();var i=e,o=null,p=null,P=b,l=f>0?re:0,n=!1;const t=(a,c=!0)=>{n=!0,u(c,a)},u=(a,c)=>{if(P===(P=a))return;let v=!1;if(K&&s!==-1){if(f===0){const _=i.data;_===ne?s=0:_===se?s=1/0:(s=parseInt(_.substring(1)),s!==s&&(s=P?1/0:-1))}const w=s>f;!!P===w&&(i=ie(),te(i),q(!1),v=!0,s=-1)}P?(o?U(o):c&&(o=j(()=>c(i))),p&&B(p,()=>{p=null})):(p?U(p):c&&(p=j(()=>c(i,[f+1,s]))),o&&B(o,()=>{o=null})),v&&q(!0)};k(()=>{n=!1,r(t),n||u(null,null)},l),K&&(i=ae)}let N=!1;function Pe(e){var r=N;try{return N=!1,[e(),N]}finally{N=r}}const he={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function ye(e,r,f){return new Proxy({props:e,exclude:r},he)}const we={get(e,r){if(!e.exclude.includes(r))return h(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,f){return r in e.special||(e.special[r]=Ie({get[r](){return e.props[r]}},r,$)),e.special[r](f),H(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),H(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Se(e,r){return new Proxy({props:e,exclude:r,special:{},version:g(0)},we)}const ge={get(e,r){let f=e.props.length;for(;f--;){let s=e.props[f];if(T(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s)return s[r]}},set(e,r,f){let s=e.props.length;for(;s--;){let i=e.props[s];T(i)&&(i=i());const o=S(i,r);if(o&&o.set)return o.set(f),!0}return!1},getOwnPropertyDescriptor(e,r){let f=e.props.length;for(;f--;){let s=e.props[f];if(T(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s){const i=S(s,r);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,r){if(r===D||r===z)return!1;for(let f of e.props)if(T(f)&&(f=f()),f!=null&&r in f)return!0;return!1},ownKeys(e){const r=[];for(let f of e.props){T(f)&&(f=f());for(const s in f)r.includes(s)||r.push(s)}return r}};function Oe(...e){return new Proxy({props:e},ge)}function Ie(e,r,f,s){var Y;var i=(f&pe)!==0,o=!ve||(f&_e)!==0,p=(f&de)!==0,P=(f&be)!==0,l=!1,n;p?[n,l]=Pe(()=>e[r]):n=e[r];var t=D in e||z in e,u=p&&(((Y=S(e,r))==null?void 0:Y.set)??(t&&r in e&&(d=>e[r]=d)))||void 0,a=s,c=!0,v=!1,w=()=>(v=!0,c&&(c=!1,P?a=C(s):a=s),a);n===void 0&&s!==void 0&&(u&&o&&fe(),n=w(),u&&u(n));var _;if(o)_=()=>{var d=e[r];return d===void 0?w():(c=!0,v=!1,d)};else{var O=(i?M:le)(()=>e[r]);O.f|=ue,_=()=>{var d=h(O);return d!==void 0&&(a=void 0),d===void 0?a:d}}if((f&$)===0)return _;if(u){var A=e.$$legacy;return function(d,R){return arguments.length>0?((!o||!R||A||l)&&u(R?_():d),d):_()}}var m=!1,L=oe(n),E=M(()=>{var d=_(),R=h(L);return m?(m=!1,R):L.v=d});return i||(E.equals=ce),function(d,R){if(arguments.length>0){const x=R?h(E):o&&p?y(d):d;return E.equals(x)||(m=!0,I(L,x),v&&a!==void 0&&(a=x),C(()=>h(E))),d}return h(E)}}export{y as a,Re as i,Se as l,Ie as p,ye as r,Oe as s};
