var Nt=Object.defineProperty;var ut=r=>{throw TypeError(r)};var Et=(r,e,t)=>e in r?Nt(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var k=(r,e,t)=>Et(r,typeof e!="symbol"?e+"":e,t),ft=(r,e,t)=>e.has(r)||ut("Cannot "+t);var d=(r,e,t)=>(ft(r,e,"read from private field"),t?t.call(r):e.get(r)),P=(r,e,t)=>e.has(r)?ut("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),Te=(r,e,t,s)=>(ft(r,e,"write to private field"),s?s.call(r,t):e.set(r,t),t);import"../chunks/CWj6FrbW.js";import{ar as It,as as At,k as N,i as c,v as _e,l as ne,p as R,c as E,at as K,r as I,t as j,a as H,f as p,$ as at,s as ue,au as zt,av as st,q as Ft}from"../chunks/DKtOAOCR.js";import{t as T,a as l,c as x,o as Ae,e as Kt,b as Rt,s as Ht,d as Bt}from"../chunks/DAROW0Av.js";import{I as Lt,s as S,c as J,a as G,b as Gt,w as ze,e as yt,i as _t,d as Vt,u as it,f as Wt,g as M,m as we,h as jt,o as qt,C as xt,j as wt,k as Yt,l as Pt,n as Xt,p as Ut,q as ot,F as Zt,P as Jt,r as Qt,t as ht,v as $t,x as Ct,D as er,y as he,z as ve,A as tr,B as rr,E as ar,G as Ee,H as Ot,J as Tt,K as sr,L as vt}from"../chunks/Bdof2YbL.js";import{a as De,p as f,b as ie,r as X,i as $,s as Y,c as ae,l as pe}from"../chunks/BZEHbhZa.js";import"../chunks/69_IOA4Y.js";import{i as or}from"../chunks/3Smb4vgc.js";import{b as Ie}from"../chunks/CpVoDjcp.js";import{p as nr}from"../chunks/DGtFgPfD.js";const ir=!0,lr="always",Xa=Object.freeze(Object.defineProperty({__proto__:null,prerender:ir,trailingSlash:lr},Symbol.toStringTag,{value:"Module"})),dr="sidebar:state",cr=60*60*24*7,ur="16rem",fr="18rem",hr="3rem",vr="b";var Fe,Me,Pe,Ke;class pr{constructor(e){k(this,"props");P(this,Fe,N(()=>this.props.open()));P(this,Me,_e(!1));k(this,"setOpen");P(this,Pe);P(this,Ke,N(()=>this.open?"expanded":"collapsed"));k(this,"handleShortcutKeydown",e=>{e.key===vr&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),this.toggle())});k(this,"setOpenMobile",e=>{this.openMobile=e});k(this,"toggle",()=>d(this,Pe).current?this.openMobile=!this.openMobile:this.setOpen(!this.open));this.setOpen=e.setOpen,Te(this,Pe,new Lt),this.props=e}get open(){return c(d(this,Fe))}get openMobile(){return c(d(this,Me))}set openMobile(e){ne(d(this,Me),De(e))}get state(){return c(d(this,Ke))}get isMobile(){return d(this,Pe).current}}Fe=new WeakMap,Me=new WeakMap,Pe=new WeakMap,Ke=new WeakMap;const Dt="scn-sidebar";function gr(r){return At(Symbol.for(Dt),new pr(r))}function lt(){return It(Symbol.for(Dt))}var br=T("<div><!></div>");function mr(r,e){R(e,!0);let t=f(e,"ref",15,null),s=X(e,["$$slots","$$events","$$legacy","ref","class","children"]);var a=br();let i;var o=E(a);S(o,()=>e.children??K),I(a),ie(a,n=>t(n),()=>t()),j(n=>i=G(a,i,{"data-sidebar":"content",class:n,...s}),[()=>J("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",e.class)]),l(r,a),H()}var yr=T("<div><!></div>");function _r(r,e){R(e,!0);let t=f(e,"ref",15,null),s=X(e,["$$slots","$$events","$$legacy","ref","class","children"]);var a=yr();let i;var o=E(a);S(o,()=>e.children??K),I(a),ie(a,n=>t(n),()=>t()),j(n=>i=G(a,i,{"data-sidebar":"footer",class:n,...s}),[()=>J("flex flex-col gap-2 p-2",e.class)]),l(r,a),H()}var xr=T("<div><!></div>");function wr(r,e){R(e,!0);let t=f(e,"ref",15,null),s=X(e,["$$slots","$$events","$$legacy","ref","class","children"]);var a=xr();let i;var o=E(a);S(o,()=>e.children??K),I(a),ie(a,n=>t(n),()=>t()),j(n=>i=G(a,i,{"data-sidebar":"group-content",class:n,...s}),[()=>J("w-full text-sm",e.class)]),l(r,a),H()}var Pr=T("<div><!></div>");function Cr(r,e){R(e,!0);let t=f(e,"ref",15,null),s=X(e,["$$slots","$$events","$$legacy","ref","children","child","class"]);const a=N(()=>({class:J("text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-none transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0","group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",e.class),"data-sidebar":"group-label",...s}));var i=x(),o=p(i);{var n=u=>{var v=x(),y=p(v);S(y,()=>e.child,()=>({props:c(a)})),l(u,v)},h=u=>{var v=Pr();let y;var g=E(v);S(g,()=>e.children??K),I(v),ie(v,b=>t(b),()=>t()),j(()=>y=G(v,y,{...c(a)})),l(u,v)};$(o,u=>{e.child?u(n):u(h,!1)})}l(r,i),H()}var Or=T("<div><!></div>");function Tr(r,e){R(e,!0);let t=f(e,"ref",15,null),s=X(e,["$$slots","$$events","$$legacy","ref","class","children"]);var a=Or();let i;var o=E(a);S(o,()=>e.children??K),I(a),ie(a,n=>t(n),()=>t()),j(n=>i=G(a,i,{"data-sidebar":"group",class:n,...s}),[()=>J("relative flex w-full min-w-0 flex-col p-2",e.class)]),l(r,a),H()}function Dr(r){const e=N(()=>r.enabled()),t=Gt(!1,300,o=>{var n;c(e)&&((n=r.setIsPointerInTransit)==null||n.call(r,o))});let s=_e(null);function a(){ne(s,null),t.current=!1}function i(o,n){const h=o.currentTarget;if(!Vt(h))return;const u={x:o.clientX,y:o.clientY},v=Mr(u,h.getBoundingClientRect()),y=Sr(u,v),g=kr(n.getBoundingClientRect()),b=Er([...y,...g]);ne(s,De(b)),t.current=!0}return ze([r.triggerNode,r.contentNode,r.enabled],([o,n,h])=>{if(!o||!n||!h)return;const u=y=>{i(y,n)},v=y=>{i(y,o)};return yt(Ae(o,"pointerleave",u),Ae(n,"pointerleave",v))}),ze(()=>c(s),()=>Ae(document,"pointermove",n=>{var g,b;if(!c(s))return;const h=n.target;if(!_t(h))return;const u={x:n.clientX,y:n.clientY},v=((g=r.triggerNode())==null?void 0:g.contains(h))||((b=r.contentNode())==null?void 0:b.contains(h)),y=!Nr(u,c(s));v?a():y&&(a(),r.onPointerExit())})),{isPointerInTransit:t}}function Mr(r,e){const t=Math.abs(e.top-r.y),s=Math.abs(e.bottom-r.y),a=Math.abs(e.right-r.x),i=Math.abs(e.left-r.x);switch(Math.min(t,s,a,i)){case i:return"left";case a:return"right";case t:return"top";case s:return"bottom";default:throw new Error("unreachable")}}function Sr(r,e,t=5){const s=t*1.5;switch(e){case"top":return[{x:r.x-t,y:r.y+t},{x:r.x,y:r.y-s},{x:r.x+t,y:r.y+t}];case"bottom":return[{x:r.x-t,y:r.y-t},{x:r.x,y:r.y+s},{x:r.x+t,y:r.y-t}];case"left":return[{x:r.x+t,y:r.y-t},{x:r.x-s,y:r.y},{x:r.x+t,y:r.y+t}];case"right":return[{x:r.x-t,y:r.y-t},{x:r.x+s,y:r.y},{x:r.x-t,y:r.y+t}]}}function kr(r){const{top:e,right:t,bottom:s,left:a}=r;return[{x:a,y:e},{x:t,y:e},{x:t,y:s},{x:a,y:s}]}function Nr(r,e){const{x:t,y:s}=r;let a=!1;for(let i=0,o=e.length-1;i<e.length;o=i++){const n=e[i].x,h=e[i].y,u=e[o].x,v=e[o].y;h>s!=v>s&&t<(u-n)*(s-h)/(v-h)+n&&(a=!a)}return a}function Er(r){const e=r.slice();return e.sort((t,s)=>t.x<s.x?-1:t.x>s.x?1:t.y<s.y?-1:t.y>s.y?1:0),Ir(e)}function Ir(r){if(r.length<=1)return r.slice();const e=[];for(let s=0;s<r.length;s++){const a=r[s];for(;e.length>=2;){const i=e[e.length-1],o=e[e.length-2];if((i.x-o.x)*(a.y-o.y)>=(i.y-o.y)*(a.x-o.x))e.pop();else break}e.push(a)}e.pop();const t=[];for(let s=r.length-1;s>=0;s--){const a=r[s];for(;t.length>=2;){const i=t[t.length-1],o=t[t.length-2];if((i.x-o.x)*(a.y-o.y)>=(i.y-o.y)*(a.x-o.x))t.pop();else break}t.push(a)}return t.pop(),e.length===1&&t.length===1&&e[0].x===t[0].x&&e[0].y===t[0].y?e:e.concat(t)}var Ar=T("<button><!></button>");function zr(r,e){R(e,!0);let t=f(e,"id",19,it),s=f(e,"ref",15,null),a=f(e,"disabled",3,!1),i=X(e,["$$slots","$$events","$$legacy","children","child","id","ref","disabled"]);const o=Wt({variant:M.with(()=>"close"),id:M.with(()=>t()),ref:M.with(()=>s(),g=>s(g)),disabled:M.with(()=>!!a())}),n=N(()=>we(i,o.props));var h=x(),u=p(h);{var v=g=>{var b=x(),w=p(b);S(w,()=>e.child,()=>({props:c(n)})),l(g,b)},y=g=>{var b=Ar();let w;var D=E(b);S(D,()=>e.children??K),I(b),j(()=>w=G(b,w,{...c(n)})),l(g,b)};$(u,g=>{e.child?g(v):g(y,!1)})}l(r,h),H()}function nt(r,e,t={}){const{immediate:s=!0}=t,a=M(!1);let i;function o(){i&&(clearTimeout(i),i=null)}function n(){a.current=!1,o()}function h(...u){o(),a.current=!0,i=setTimeout(()=>{a.current=!1,i=null,r(...u)},e)}return s&&(a.current=!0,jt&&h()),qt(()=>{n()}),{isPending:M.readonly(a),start:h,stop:n}}const Fr="data-tooltip-content",Kr="data-tooltip-trigger",Mt=new Ut("bits.tooltip.open",{bubbles:!1,cancelable:!1});var Se,Ce,Re,He;class Rr{constructor(e){k(this,"opts");P(this,Se,_e(!0));k(this,"isPointerInTransit",M(!1));P(this,Ce);P(this,Re,()=>{d(this,Ce).start()});P(this,He,()=>{d(this,Ce).stop()});k(this,"onOpen",()=>{d(this,He).call(this),this.isOpenDelayed=!1});k(this,"onClose",()=>{d(this,Re).call(this)});this.opts=e,Te(this,Ce,nt(()=>{this.isOpenDelayed=!0},this.opts.skipDelayDuration.current,{immediate:!1}))}get isOpenDelayed(){return c(d(this,Se))}set isOpenDelayed(e){ne(d(this,Se),De(e))}}Se=new WeakMap,Ce=new WeakMap,Re=new WeakMap,He=new WeakMap;var Be,Le,Ge,Ve,We,ke,Ne,me,ce,je,qe;class Hr{constructor(e,t){k(this,"opts");k(this,"provider");P(this,Be,N(()=>this.opts.delayDuration.current??this.provider.opts.delayDuration.current));P(this,Le,N(()=>this.opts.disableHoverableContent.current??this.provider.opts.disableHoverableContent.current));P(this,Ge,N(()=>this.opts.disableCloseOnTriggerClick.current??this.provider.opts.disableCloseOnTriggerClick.current));P(this,Ve,N(()=>this.opts.disabled.current??this.provider.opts.disabled.current));P(this,We,N(()=>this.opts.ignoreNonKeyboardFocus.current??this.provider.opts.ignoreNonKeyboardFocus.current));P(this,ke,_e(null));P(this,Ne,_e(null));P(this,me,_e(!1));P(this,ce);P(this,je,N(()=>this.opts.open.current?c(d(this,me))?"delayed-open":"instant-open":"closed"));k(this,"handleOpen",()=>{d(this,ce).stop(),ne(d(this,me),!1),this.opts.open.current=!0});k(this,"handleClose",()=>{d(this,ce).stop(),this.opts.open.current=!1});P(this,qe,()=>{d(this,ce).start()});k(this,"onTriggerEnter",()=>{d(this,qe).call(this)});k(this,"onTriggerLeave",()=>{this.disableHoverableContent?this.handleClose():d(this,ce).stop()});this.opts=e,this.provider=t,Te(this,ce,nt(()=>{ne(d(this,me),!0),this.opts.open.current=!0},this.delayDuration??0,{immediate:!1})),ze(()=>this.delayDuration,()=>{this.delayDuration!==void 0&&Te(this,ce,nt(()=>{ne(d(this,me),!0),this.opts.open.current=!0},this.delayDuration,{immediate:!1}))}),ze(()=>this.opts.open.current,s=>{this.provider.onClose&&(s?(this.provider.onOpen(),Mt.dispatch(document)):this.provider.onClose())})}get delayDuration(){return c(d(this,Be))}get disableHoverableContent(){return c(d(this,Le))}get disableCloseOnTriggerClick(){return c(d(this,Ge))}get disabled(){return c(d(this,Ve))}get ignoreNonKeyboardFocus(){return c(d(this,We))}get contentNode(){return c(d(this,ke))}set contentNode(e){ne(d(this,ke),De(e))}get triggerNode(){return c(d(this,Ne))}set triggerNode(e){ne(d(this,Ne),De(e))}get stateAttr(){return c(d(this,je))}}Be=new WeakMap,Le=new WeakMap,Ge=new WeakMap,Ve=new WeakMap,We=new WeakMap,ke=new WeakMap,Ne=new WeakMap,me=new WeakMap,ce=new WeakMap,je=new WeakMap,qe=new WeakMap;var ye,Oe,re,Ye,Xe,Ue,Ze,Je,Qe,$e,et;class Br{constructor(e,t){k(this,"opts");k(this,"root");P(this,ye,M(!1));P(this,Oe,_e(!1));P(this,re,N(()=>this.opts.disabled.current||this.root.disabled));k(this,"handlePointerUp",()=>{d(this,ye).current=!1});P(this,Ye,()=>{c(d(this,re))||(d(this,ye).current=!1)});P(this,Xe,()=>{c(d(this,re))||(d(this,ye).current=!0,document.addEventListener("pointerup",()=>{this.handlePointerUp()},{once:!0}))});P(this,Ue,e=>{c(d(this,re))||e.pointerType!=="touch"&&(c(d(this,Oe))||this.root.provider.isPointerInTransit.current||(this.root.onTriggerEnter(),ne(d(this,Oe),!0)))});P(this,Ze,()=>{c(d(this,re))||(this.root.onTriggerLeave(),ne(d(this,Oe),!1))});P(this,Je,e=>{d(this,ye).current||c(d(this,re))||this.root.ignoreNonKeyboardFocus&&!Yt(e.currentTarget)||this.root.handleOpen()});P(this,Qe,()=>{c(d(this,re))||this.root.handleClose()});P(this,$e,()=>{this.root.disableCloseOnTriggerClick||c(d(this,re))||this.root.handleClose()});P(this,et,N(()=>{var e;return{id:this.opts.id.current,"aria-describedby":this.root.opts.open.current?(e=this.root.contentNode)==null?void 0:e.id:void 0,"data-state":this.root.stateAttr,"data-disabled":Pt(c(d(this,re))),"data-delay-duration":`${this.root.delayDuration}`,[Kr]:"",tabindex:c(d(this,re))?void 0:0,disabled:this.opts.disabled.current,onpointerup:d(this,Ye),onpointerdown:d(this,Xe),onpointermove:d(this,Ue),onpointerleave:d(this,Ze),onfocus:d(this,Je),onblur:d(this,Qe),onclick:d(this,$e)}}));this.opts=e,this.root=t,wt({...e,onRefChange:s=>{this.root.triggerNode=s}})}get props(){return c(d(this,et))}}ye=new WeakMap,Oe=new WeakMap,re=new WeakMap,Ye=new WeakMap,Xe=new WeakMap,Ue=new WeakMap,Ze=new WeakMap,Je=new WeakMap,Qe=new WeakMap,$e=new WeakMap,et=new WeakMap;var tt,rt;class Lr{constructor(e,t){k(this,"opts");k(this,"root");k(this,"onInteractOutside",e=>{var t;if(_t(e.target)&&((t=this.root.triggerNode)!=null&&t.contains(e.target))&&this.root.disableCloseOnTriggerClick){e.preventDefault();return}this.opts.onInteractOutside.current(e),!e.defaultPrevented&&this.root.handleClose()});k(this,"onEscapeKeydown",e=>{var t,s;(s=(t=this.opts.onEscapeKeydown).current)==null||s.call(t,e),!e.defaultPrevented&&this.root.handleClose()});k(this,"onOpenAutoFocus",e=>{e.preventDefault()});k(this,"onCloseAutoFocus",e=>{e.preventDefault()});P(this,tt,N(()=>({open:this.root.opts.open.current})));P(this,rt,N(()=>({id:this.opts.id.current,"data-state":this.root.stateAttr,"data-disabled":Pt(this.root.disabled),style:{pointerEvents:"auto",outline:"none"},[Fr]:""})));k(this,"popperProps",{onInteractOutside:this.onInteractOutside,onEscapeKeydown:this.onEscapeKeydown,onOpenAutoFocus:this.onOpenAutoFocus,onCloseAutoFocus:this.onCloseAutoFocus});this.opts=e,this.root=t,wt({...e,onRefChange:s=>{this.root.contentNode=s},deps:()=>this.root.opts.open.current}),Dr({triggerNode:()=>this.root.triggerNode,contentNode:()=>this.root.contentNode,enabled:()=>this.root.opts.open.current&&!this.root.disableHoverableContent,onPointerExit:()=>{this.root.handleClose()},setIsPointerInTransit:s=>{this.root.provider.isPointerInTransit.current=s}}),Xt(()=>yt(Ae(window,"scroll",s=>{const a=s.target;a&&a.contains(this.root.triggerNode)&&this.root.handleClose()}),Mt.listen(window,this.root.handleClose)))}get snippetProps(){return c(d(this,tt))}get props(){return c(d(this,rt))}}tt=new WeakMap,rt=new WeakMap;const St=new xt("Tooltip.Provider"),dt=new xt("Tooltip.Root");function Gr(r){return St.set(new Rr(r))}function Vr(r){return dt.set(new Hr(r,St.get()))}function Wr(r){return new Br(r,dt.get())}function jr(r){return new Lr(r,dt.get())}function qr(r,e){R(e,!0);let t=f(e,"open",15,!1),s=f(e,"onOpenChange",3,ot);Vr({open:M.with(()=>t(),a=>{t(a),s()(a)}),delayDuration:M.with(()=>e.delayDuration),disableCloseOnTriggerClick:M.with(()=>e.disableCloseOnTriggerClick),disableHoverableContent:M.with(()=>e.disableHoverableContent),ignoreNonKeyboardFocus:M.with(()=>e.ignoreNonKeyboardFocus),disabled:M.with(()=>e.disabled)}),Zt(r,{children:(a,i)=>{var o=x(),n=p(o);S(n,()=>e.children??K),l(a,o)},$$slots:{default:!0}}),H()}var Yr=T("<div><div><!></div></div>"),Xr=T("<div><div><!></div></div>");function Ur(r,e){R(e,!0);let t=f(e,"id",19,it),s=f(e,"ref",15,null),a=f(e,"side",3,"top"),i=f(e,"sideOffset",3,0),o=f(e,"align",3,"center"),n=f(e,"avoidCollisions",3,!0),h=f(e,"arrowPadding",3,0),u=f(e,"sticky",3,"partial"),v=f(e,"hideWhenDetached",3,!1),y=f(e,"collisionPadding",3,0),g=f(e,"onInteractOutside",3,ot),b=f(e,"onEscapeKeydown",3,ot),w=f(e,"forceMount",3,!1),D=X(e,["$$slots","$$events","$$legacy","children","child","id","ref","side","sideOffset","align","avoidCollisions","arrowPadding","sticky","hideWhenDetached","collisionPadding","onInteractOutside","onEscapeKeydown","forceMount"]);const m=jr({id:M.with(()=>t()),ref:M.with(()=>s(),_=>s(_)),onInteractOutside:M.with(()=>g()),onEscapeKeydown:M.with(()=>b())}),O=N(()=>({side:a(),sideOffset:i(),align:o(),avoidCollisions:n(),arrowPadding:h(),sticky:u(),hideWhenDetached:v(),collisionPadding:y()})),z=N(()=>we(D,c(O),m.props));var B=x(),q=p(B);{var F=_=>{Jt(_,Y(()=>c(z),()=>m.popperProps,{get enabled(){return m.root.opts.open.current},get id(){return t()},trapFocus:!1,loop:!1,preventScroll:!1,forceMount:!0,popper:(L,C)=>{let Q=()=>C==null?void 0:C().props,U=()=>C==null?void 0:C().wrapperProps;var W=x();const fe=N(()=>we(Q(),{style:ht("tooltip")}));var le=p(W);{var ge=te=>{var se=x(),oe=p(se),Z=at(()=>({props:c(fe),wrapperProps:U(),...m.snippetProps}));S(oe,()=>e.child,()=>c(Z)),l(te,se)},xe=te=>{var se=Yr();let oe;var Z=E(se);let ee;var de=E(Z);S(de,()=>e.children??K),I(Z),I(se),j(()=>{oe=G(se,oe,{...U()}),ee=G(Z,ee,{...c(fe)})}),l(te,se)};$(le,te=>{e.child?te(ge):te(xe,!1)})}l(L,W)},$$slots:{popper:!0}}))},A=(_,V)=>{{var L=C=>{Qt(C,Y(()=>c(z),()=>m.popperProps,{get present(){return m.root.opts.open.current},get id(){return t()},trapFocus:!1,loop:!1,preventScroll:!1,forceMount:!1,popper:(U,W)=>{let fe=()=>W==null?void 0:W().props,le=()=>W==null?void 0:W().wrapperProps;var ge=x();const xe=N(()=>we(fe(),{style:ht("tooltip")}));var te=p(ge);{var se=Z=>{var ee=x(),de=p(ee),be=at(()=>({props:c(xe),wrapperProps:le(),...m.snippetProps}));S(de,()=>e.child,()=>c(be)),l(Z,ee)},oe=Z=>{var ee=Xr();let de;var be=E(ee);let ct;var kt=E(be);S(kt,()=>e.children??K),I(be),I(ee),j(()=>{de=G(ee,de,{...le()}),ct=G(be,ct,{...c(xe)})}),l(Z,ee)};$(te,Z=>{e.child?Z(se):Z(oe,!1)})}l(U,ge)},$$slots:{popper:!0}}))};$(_,C=>{w()||C(L)},V)}};$(q,_=>{w()?_(F):_(A,!1)})}l(r,B),H()}var Zr=T("<button><!></button>");function Jr(r,e){R(e,!0);let t=f(e,"id",19,it),s=f(e,"disabled",3,!1),a=f(e,"type",3,"button"),i=f(e,"ref",15,null),o=X(e,["$$slots","$$events","$$legacy","children","child","id","disabled","type","ref"]);const n=Wr({id:M.with(()=>t()),disabled:M.with(()=>s()??!1),ref:M.with(()=>i(),u=>i(u))}),h=N(()=>we(o,n.props,{type:a()}));$t(r,{get id(){return t()},children:(u,v)=>{var y=x(),g=p(y);{var b=D=>{var m=x(),O=p(m);S(O,()=>e.child,()=>({props:c(h)})),l(D,m)},w=D=>{var m=Zr();let O;var z=E(m);S(z,()=>e.children??K),I(m),j(()=>O=G(m,O,{...c(h)})),l(D,m)};$(g,D=>{e.child?D(b):D(w,!1)})}l(u,y)},$$slots:{default:!0}}),H()}function Qr(r,e){R(e,!0);let t=f(e,"delayDuration",3,700),s=f(e,"disableCloseOnTriggerClick",3,!1),a=f(e,"disableHoverableContent",3,!1),i=f(e,"disabled",3,!1),o=f(e,"ignoreNonKeyboardFocus",3,!1),n=f(e,"skipDelayDuration",3,300);Gr({delayDuration:M.with(()=>t()),disableCloseOnTriggerClick:M.with(()=>s()),disableHoverableContent:M.with(()=>a()),disabled:M.with(()=>i()),ignoreNonKeyboardFocus:M.with(()=>o()),skipDelayDuration:M.with(()=>n())});var h=x(),u=p(h);S(u,()=>e.children??K),l(r,h),H()}function $r(r,e){R(e,!0);let t=f(e,"ref",15,null),s=f(e,"sideOffset",3,4),a=X(e,["$$slots","$$events","$$legacy","ref","class","sideOffset"]);var i=x(),o=p(i);const n=N(()=>J("bg-popover text-popover-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden rounded-md border px-3 py-1.5 text-sm shadow-md",e.class));ae(o,()=>Ur,(h,u)=>{u(h,Y({get sideOffset(){return s()},get class(){return c(n)}},()=>a,{get ref(){return t()},set ref(v){t(v)}}))}),l(r,i),H()}const ea=qr,ta=Jr,ra=Qr,aa=Ct({base:"peer/menu-button ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-none transition-[width,height,padding] focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:font-medium group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",variants:{variant:{default:"hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",outline:"bg-background hover:bg-sidebar-accent hover:text-sidebar-accent-foreground shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"},size:{default:"h-8 text-sm",sm:"h-7 text-xs",lg:"h-12 text-sm group-data-[collapsible=icon]:!p-0"}},defaultVariants:{variant:"default",size:"default"}});var sa=T("<button><!></button>"),oa=T("<!> <!>",1);function pt(r,e){R(e,!0);const t=(w,D)=>{let m=()=>D==null?void 0:D().props;var O=x();const z=N(()=>we(c(u),m()));var B=p(O);{var q=A=>{var _=x(),V=p(_);S(V,()=>e.child,()=>({props:c(z)})),l(A,_)},F=A=>{var _=sa();let V;var L=E(_);S(L,()=>e.children??K),I(_),ie(_,C=>s(C),()=>s()),j(()=>V=G(_,V,{...c(z)})),l(A,_)};$(B,A=>{e.child?A(q):A(F,!1)})}l(w,O)};let s=f(e,"ref",15,null),a=f(e,"variant",3,"default"),i=f(e,"size",3,"default"),o=f(e,"isActive",3,!1),n=X(e,["$$slots","$$events","$$legacy","ref","class","children","child","variant","size","isActive","tooltipContent","tooltipContentProps"]);const h=lt(),u=N(()=>({class:J(aa({variant:a(),size:i()}),e.class),"data-sidebar":"menu-button","data-size":i(),"data-active":o(),...n}));var v=x(),y=p(v);{var g=w=>{t(w,()=>({}))},b=w=>{var D=x(),m=p(D);ae(m,()=>ea,(O,z)=>{z(O,{children:(B,q)=>{var F=oa(),A=p(F);ae(A,()=>ta,(L,C)=>{C(L,{child:(U,W)=>{let fe=()=>W==null?void 0:W().props;t(U,()=>({props:fe()}))},$$slots:{child:!0}})});var _=ue(A,2);const V=N(()=>h.state!=="collapsed"||h.isMobile);ae(_,()=>$r,(L,C)=>{C(L,Y({side:"right",align:"center",get hidden(){return c(V)},get children(){return e.tooltipContent}},()=>e.tooltipContentProps))}),l(B,F)},$$slots:{default:!0}})}),l(w,D)};$(y,w=>{e.tooltipContent?w(b,!1):w(g)})}l(r,v),H()}var na=T("<li><!></li>");function gt(r,e){R(e,!0);let t=f(e,"ref",15,null),s=X(e,["$$slots","$$events","$$legacy","ref","class","children"]);var a=na();let i;var o=E(a);S(o,()=>e.children??K),I(a),ie(a,n=>t(n),()=>t()),j(n=>i=G(a,i,{"data-sidebar":"menu-item",class:n,...s}),[()=>J("group/menu-item relative",e.class)]),l(r,a),H()}var ia=T("<ul><!></ul>");function bt(r,e){R(e,!0);let t=f(e,"ref",15,null),s=X(e,["$$slots","$$events","$$legacy","ref","class","children"]);var a=ia();let i;var o=E(a);S(o,()=>e.children??K),I(a),ie(a,n=>t(n),()=>t()),j(n=>i=G(a,i,{"data-sidebar":"menu",class:n,...s}),[()=>J("flex w-full min-w-0 flex-col gap-1",e.class)]),l(r,a),H()}var la=T("<div><!></div>");function da(r,e){R(e,!0);let t=f(e,"ref",15,null),s=f(e,"open",15,!0),a=f(e,"onOpenChange",3,()=>{}),i=X(e,["$$slots","$$events","$$legacy","ref","open","onOpenChange","class","style","children"]);const o=gr({open:()=>s(),setOpen:u=>{s(u),a()(u),document.cookie=`${dr}=${s()}; path=/; max-age=${cr}`}});var n=x();Kt("keydown",zt,function(...u){var v;(v=o.handleShortcutKeydown)==null||v.apply(this,u)});var h=p(n);ae(h,()=>ra,(u,v)=>{v(u,{delayDuration:0,children:(y,g)=>{var b=la();let w;var D=E(b);S(D,()=>e.children??K),I(b),ie(b,m=>t(m),()=>t()),j(m=>w=G(b,w,{style:`--sidebar-width: ${ur}; --sidebar-width-icon: ${hr}; ${e.style??""}`,class:m,...i}),[()=>J("group/sidebar-wrapper has-[[data-variant=inset]]:bg-sidebar flex min-h-svh w-full",e.class)]),l(y,b)},$$slots:{default:!0}})}),l(r,n),H()}function ca(r,e){R(e,!0);let t=f(e,"ref",15,null),s=f(e,"class",7),a=X(e,["$$slots","$$events","$$legacy","ref","class"]);var i=x(),o=p(i);const n=N(()=>J("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0  fixed inset-0 z-50 bg-black/80",s()));return ae(o,()=>er,(h,u)=>{u(h,Y({get class(){return c(n)}},()=>a,{get ref(){return t()},set ref(v){t(v)}}))}),l(r,i),H({get class(){return s()},set class(h){s(h)}})}function ua(r,e){const t=pe(e,["children","$$slots","$$events","$$legacy"]);he(r,Y({name:"x"},()=>t,{iconNode:[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]],children:(a,i)=>{var o=x(),n=p(o);ve(n,e,"default",{}),l(a,o)},$$slots:{default:!0}}))}const fa=Ct({base:"bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 gap-4 p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",variants:{side:{top:"data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 border-b",bottom:"data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 border-t",left:"data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",right:"data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm"}},defaultVariants:{side:"right"}});var ha=T('<!> <span class="sr-only">Close</span>',1),va=T("<!> <!>",1),pa=T("<!> <!>",1);function ga(r,e){R(e,!0);let t=f(e,"ref",15,null),s=f(e,"side",3,"right"),a=X(e,["$$slots","$$events","$$legacy","ref","class","side","portalProps","children"]);var i=x(),o=p(i);ae(o,()=>tr,(n,h)=>{h(n,Y(()=>e.portalProps,{children:(u,v)=>{var y=pa(),g=p(y);ca(g,{});var b=ue(g,2);const w=N(()=>J(fa({side:s()}),e.class));ae(b,()=>rr,(D,m)=>{m(D,Y({get class(){return c(w)}},()=>a,{get ref(){return t()},set ref(O){t(O)},children:(O,z)=>{var B=va(),q=p(B);S(q,()=>e.children??K);var F=ue(q,2);ae(F,()=>zr,(A,_)=>{_(A,{class:"ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none",children:(V,L)=>{var C=ha(),Q=p(C);ua(Q,{class:"size-4"}),st(2),l(V,C)},$$slots:{default:!0}})}),l(O,B)},$$slots:{default:!0}}))}),l(u,y)},$$slots:{default:!0}}))}),l(r,i),H()}const ba=ar;var ma=T("<div><!></div>"),ya=T('<div class="flex h-full w-full flex-col"><!></div>'),_a=T('<div class="text-sidebar-foreground group peer hidden md:block"><div></div> <div><div data-sidebar="sidebar" class="bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow"><!></div></div></div>');function xa(r,e){R(e,!0);let t=f(e,"ref",15,null),s=f(e,"side",3,"left"),a=f(e,"variant",3,"sidebar"),i=f(e,"collapsible",3,"offcanvas"),o=X(e,["$$slots","$$events","$$legacy","ref","side","variant","collapsible","class","children"]);const n=lt();var h=x(),u=p(h);{var v=g=>{var b=ma();let w;var D=E(b);S(D,()=>e.children??K),I(b),ie(b,m=>t(m),()=>t()),j(m=>w=G(b,w,{class:m,...o}),[()=>J("bg-sidebar text-sidebar-foreground flex h-full w-[--sidebar-width] flex-col",e.class)]),l(g,b)},y=(g,b)=>{{var w=m=>{var O=x(),z=p(O),B=()=>n.openMobile,q=F=>n.setOpenMobile(F);ae(z,()=>ba,(F,A)=>{A(F,Y({get open(){return B()},set open(_){q(_)}},()=>o,{children:(_,V)=>{var L=x(),C=p(L);ae(C,()=>ga,(Q,U)=>{U(Q,{"data-sidebar":"sidebar","data-mobile":"true",class:"bg-sidebar text-sidebar-foreground w-[--sidebar-width] p-0 [&>button]:hidden",style:`--sidebar-width: ${fr};`,get side(){return s()},children:(W,fe)=>{var le=ya(),ge=E(le);S(ge,()=>e.children??K),I(le),l(W,le)},$$slots:{default:!0}})}),l(_,L)},$$slots:{default:!0}}))}),l(m,O)},D=m=>{var O=_a(),z=E(O),B=ue(z,2);let q;var F=E(B),A=E(F);S(A,()=>e.children??K),I(F),I(B),I(O),ie(O,_=>t(_),()=>t()),j((_,V)=>{Ee(O,"data-state",n.state),Ee(O,"data-collapsible",n.state==="collapsed"?i():""),Ee(O,"data-variant",a()),Ee(O,"data-side",s()),Ot(z,1,Tt(_)),q=G(B,q,{class:V,...o})},[()=>J("relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear","group-data-[collapsible=offcanvas]:w-0","group-data-[side=right]:rotate-180",a()==="floating"||a()==="inset"?"group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]":"group-data-[collapsible=icon]:w-[--sidebar-width-icon]"),()=>J("fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex",s()==="left"?"left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]":"right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",a()==="floating"||a()==="inset"?"p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]":"group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",e.class)]),l(m,O)};$(g,m=>{n.isMobile?m(w):m(D,!1)},b)}};$(u,g=>{i()==="none"?g(v):g(y,!1)})}l(r,h),H()}function wa(r,e){const t=pe(e,["children","$$slots","$$events","$$legacy"]);he(r,Y({name:"scale"},()=>t,{iconNode:[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{d:"M7 21h10"}],["path",{d:"M12 3v18"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"}]],children:(a,i)=>{var o=x(),n=p(o);ve(n,e,"default",{}),l(a,o)},$$slots:{default:!0}}))}function Pa(r,e){const t=pe(e,["children","$$slots","$$events","$$legacy"]);he(r,Y({name:"piggy-bank"},()=>t,{iconNode:[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1"}],["path",{d:"M16 11h.01"}]],children:(a,i)=>{var o=x(),n=p(o);ve(n,e,"default",{}),l(a,o)},$$slots:{default:!0}}))}function Ca(r,e){const t=pe(e,["children","$$slots","$$events","$$legacy"]);he(r,Y({name:"wallpaper"},()=>t,{iconNode:[["circle",{cx:"8",cy:"9",r:"2"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"}],["path",{d:"M8 21h8"}],["path",{d:"M12 17v4"}]],children:(a,i)=>{var o=x(),n=p(o);ve(n,e,"default",{}),l(a,o)},$$slots:{default:!0}}))}function Oa(r,e){const t=pe(e,["children","$$slots","$$events","$$legacy"]);he(r,Y({name:"settings"},()=>t,{iconNode:[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}],["circle",{cx:"12",cy:"12",r:"3"}]],children:(a,i)=>{var o=x(),n=p(o);ve(n,e,"default",{}),l(a,o)},$$slots:{default:!0}}))}function Ta(r,e){const t=pe(e,["children","$$slots","$$events","$$legacy"]);he(r,Y({name:"panel-left-close"},()=>t,{iconNode:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m16 15-3-3 3-3"}]],children:(a,i)=>{var o=x(),n=p(o);ve(n,e,"default",{}),l(a,o)},$$slots:{default:!0}}))}function Da(r,e){const t=pe(e,["children","$$slots","$$events","$$legacy"]);he(r,Y({name:"panel-left-open"},()=>t,{iconNode:[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}],["path",{d:"m14 9 3 3-3 3"}]],children:(a,i)=>{var o=x(),n=p(o);ve(n,e,"default",{}),l(a,o)},$$slots:{default:!0}}))}function mt(r,e){const t=pe(e,["children","$$slots","$$events","$$legacy"]);he(r,Y({name:"menu"},()=>t,{iconNode:[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]],children:(a,i)=>{var o=x(),n=p(o);ve(n,e,"default",{}),l(a,o)},$$slots:{default:!0}}))}var Ma=T("<a><!> <span> </span></a>"),Sa=T("<!> <!>",1),ka=T("<!> <span>Close sidebar</span>",1),Na=T("<!> <!>",1),Ea=T("<!> <!>",1);function Ia(r,e){R(e,!1);const t=[{title:"Our Money",url:`${Ie}/money/`,icon:Pa},{title:"Our Legal",url:`${Ie}/`,icon:wa},{title:"Our Digital Life",url:`${Ie}/`,icon:Ca},{title:"Settings",url:`${Ie}/`,icon:Oa}],s=lt();or();var a=Ea(),i=p(a);xa(i,{collapsible:"offcanvas",children:(u,v)=>{var y=Na(),g=p(y);mr(g,{children:(w,D)=>{Tr(w,{children:(m,O)=>{var z=Sa(),B=p(z);Cr(B,{children:(F,A)=>{st();var _=Rt("Application");l(F,_)},$$slots:{default:!0}});var q=ue(B,2);wr(q,{children:(F,A)=>{bt(F,{children:(_,V)=>{var L=x(),C=p(L);sr(C,1,()=>t,Q=>Q.title,(Q,U)=>{gt(Q,{children:(W,fe)=>{const le=at(()=>c(U).url==nr.url.pathname);pt(W,{get isActive(){return c(le)},child:(xe,te)=>{let se=()=>te==null?void 0:te().props;var oe=Ma();let Z;var ee=E(oe);c(U).icon(ee,{});var de=ue(ee,2),be=E(de,!0);I(de),I(oe),j(()=>{Z=G(oe,Z,{href:c(U).url,...se()}),Ht(be,c(U).title)}),l(xe,oe)},$$slots:{child:!0}})},$$slots:{default:!0}})}),l(_,L)},$$slots:{default:!0}})},$$slots:{default:!0}}),l(m,z)},$$slots:{default:!0}})},$$slots:{default:!0}});var b=ue(g,2);_r(b,{children:(w,D)=>{bt(w,{children:(m,O)=>{gt(m,{children:(z,B)=>{pt(z,{onclick:()=>{s.isMobile?s.setOpenMobile(!1):s.setOpen(!s.open)},children:(q,F)=>{var A=x(),_=p(A);{var V=C=>{var Q=ka(),U=p(Q);Ta(U,{}),st(2),l(C,Q)},L=C=>{Da(C,{})};$(_,C=>{s.open||s.openMobile?C(V):C(L,!1)})}l(q,A)},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}})},$$slots:{default:!0}}),l(u,y)},$$slots:{default:!0}});var o=ue(i,2);{var n=u=>{vt(u,{class:"fixed bottom-4 left-4 z-50",variant:"outline",onclick:()=>{s.setOpenMobile(!0)},children:(v,y)=>{mt(v,{})},$$slots:{default:!0}})},h=(u,v)=>{{var y=g=>{vt(g,{class:"fixed bottom-4 left-4 z-50",variant:"outline",onclick:()=>{s.setOpen(!0)},children:(b,w)=>{mt(b,{})},$$slots:{default:!0}})};$(u,g=>{s.open||g(y)},v)}};$(o,u=>{s.isMobile?u(n):u(h,!1)})}l(r,a),H()}var Aa=T('<meta name="viewport" content="width=device-width, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover">'),za=T("<div><!></div>");function Fa(r,e){R(e,!0);let t=f(e,"class",3,"");function s(){if(!screen)throw new Error("Cannot update safe areas: screen is not defined");const o=document.documentElement;switch(screen.orientation.type){case"portrait-primary":o.style.setProperty("--safe-area-top","env(safe-area-inset-top)"),o.style.setProperty("--safe-area-left","0px"),o.style.setProperty("--safe-area-right","0px");break;case"landscape-primary":o.style.setProperty("--safe-area-top","0px"),o.style.setProperty("--safe-area-left","env(safe-area-inset-left)"),o.style.setProperty("--safe-area-right","0px");break;case"landscape-secondary":o.style.setProperty("--safe-area-top","0px"),o.style.setProperty("--safe-area-left","0px"),o.style.setProperty("--safe-area-right","env(safe-area-inset-right)");break}}Ft(()=>(s(),screen.orientation.addEventListener("change",s),()=>{screen.orientation.removeEventListener("change",s)}));var a=za();Bt(o=>{var n=Aa();l(o,n)});var i=E(a);S(i,()=>e.children),I(a),j(()=>Ot(a,1,Tt(t()))),l(r,a),H()}var Ka=T('<!> <main class="flex-auto"><!></main>',1);function Ua(r,e){Fa(r,{class:"h-full ml-[var(--safe-area-left)] mr-[var(--safe-area-right)]",children:(t,s)=>{var a=x(),i=p(a);ae(i,()=>da,(o,n)=>{n(o,{open:!1,children:(h,u)=>{var v=Ka(),y=p(v);Ia(y,{});var g=ue(y,2),b=E(g);S(b,()=>e.children??K),I(g),l(h,v)},$$slots:{default:!0}})}),l(t,a)},$$slots:{default:!0}})}export{Ua as component,Xa as universal};
