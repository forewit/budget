const s=location.pathname.split("/").slice(0,-1).join("/"),u=[s+"/app/immutable/entry/app.DEVBE9i-.js",s+"/app/immutable/nodes/0.BxkuLPg6.js",s+"/app/immutable/assets/0.CSvyO5r7.css",s+"/app/immutable/nodes/1.CA0OV7ei.js",s+"/app/immutable/nodes/2.BUuA1rIN.js",s+"/app/immutable/assets/2.DyboXUWQ.css",s+"/app/immutable/chunks/BRiMxwO1.js",s+"/app/immutable/chunks/CPKVG_k7.js",s+"/app/immutable/chunks/CnhYCp-O.js",s+"/app/immutable/chunks/Cx2R7hbr.js",s+"/app/immutable/chunks/D0Ya28xz.js",s+"/app/immutable/chunks/D4HKobG0.js",s+"/app/immutable/chunks/DNvYhIwd.js",s+"/app/immutable/chunks/T3hY7Wuc.js",s+"/app/immutable/chunks/iZVvzZCm.js",s+"/app/immutable/entry/start.j2jEQ3ql.js"],m=[s+"/images/field-background.jpg",s+"/images/field-icon.png",s+"/manifest.json"],l="1743186035370",c=`cache-${l}`,o=[...u,...m];self.addEventListener("install",e=>{async function n(){await(await caches.open(c)).addAll(o)}e.waitUntil(n())});self.addEventListener("activate",e=>{async function n(){for(const t of await caches.keys())t!==c&&await caches.delete(t)}e.waitUntil(n())});self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;async function n(){const t=new URL(e.request.url),i=await caches.open(c);if(o.includes(t.pathname)){const a=await i.match(t.pathname);if(a)return a}try{const a=await fetch(e.request);if(!(a instanceof Response))throw new Error("invalid response from fetch");return a.status===200&&i.put(e.request,a.clone()),a}catch(a){const p=await i.match(e.request);if(p)return p;throw a}}e.respondWith(n())});
