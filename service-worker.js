const s=location.pathname.split("/").slice(0,-1).join("/"),u=[s+"/app/immutable/entry/app.CIpEO59u.js",s+"/app/immutable/nodes/0.Cw7f42kd.js",s+"/app/immutable/assets/0.fFJkyWXZ.css",s+"/app/immutable/nodes/1.lQtsx6mj.js",s+"/app/immutable/nodes/2.s2QGLIXL.js",s+"/app/immutable/assets/2.O6fnhU5R.css",s+"/app/immutable/chunks/8kOzyk0c.js",s+"/app/immutable/chunks/BPo8ACL9.js",s+"/app/immutable/chunks/C2Lf0Xpa.js",s+"/app/immutable/chunks/CCBRnCAp.js",s+"/app/immutable/chunks/CXcbEWrF.js",s+"/app/immutable/chunks/DNDF6wg3.js",s+"/app/immutable/chunks/Dt7vnTLg.js",s+"/app/immutable/chunks/Ip3zkSED.js",s+"/app/immutable/chunks/aBJrpkV5.js",s+"/app/immutable/entry/start.BDBhoydI.js"],m=[s+"/images/field-background.jpg",s+"/images/field-icon.png",s+"/manifest.json"],l="1742399088924",i=`cache-${l}`,o=[...u,...m];self.addEventListener("install",a=>{async function n(){await(await caches.open(i)).addAll(o)}a.waitUntil(n())});self.addEventListener("activate",a=>{async function n(){for(const t of await caches.keys())t!==i&&await caches.delete(t)}a.waitUntil(n())});self.addEventListener("fetch",a=>{if(a.request.method!=="GET")return;async function n(){const t=new URL(a.request.url),c=await caches.open(i);if(o.includes(t.pathname)){const e=await c.match(t.pathname);if(e)return e}try{const e=await fetch(a.request);if(!(e instanceof Response))throw new Error("invalid response from fetch");return e.status===200&&c.put(a.request,e.clone()),e}catch(e){const p=await c.match(a.request);if(p)return p;throw e}}a.respondWith(n())});
