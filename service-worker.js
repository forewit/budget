const s=location.pathname.split("/").slice(0,-1).join("/"),l=[s+"/app/immutable/entry/app.CL_jylcr.js",s+"/app/immutable/nodes/0.Jk6iHGyb.js",s+"/app/immutable/assets/0.K-kqU5SV.css",s+"/app/immutable/nodes/1.CofGltNA.js",s+"/app/immutable/nodes/2.DkKMClxO.js",s+"/app/immutable/assets/2.O6fnhU5R.css",s+"/app/immutable/chunks/Bg_xyIND.js",s+"/app/immutable/chunks/BzEb0WiS.js",s+"/app/immutable/chunks/CNq6NB62.js",s+"/app/immutable/chunks/CWUyB4UI.js",s+"/app/immutable/chunks/CqVSIq5h.js",s+"/app/immutable/chunks/D5-8HoFR.js",s+"/app/immutable/chunks/DAECVo-H.js",s+"/app/immutable/chunks/_Gaa8_yd.js",s+"/app/immutable/chunks/zT4fjpJS.js",s+"/app/immutable/entry/start.ClGzWZXj.js"],u=[s+"/images/field-background.jpg",s+"/images/field-icon.png",s+"/manifest.json"],m="1742329280294",i=`cache-${m}`,o=[...l,...u];self.addEventListener("install",a=>{async function n(){await(await caches.open(i)).addAll(o)}a.waitUntil(n())});self.addEventListener("activate",a=>{async function n(){for(const t of await caches.keys())t!==i&&await caches.delete(t)}a.waitUntil(n())});self.addEventListener("fetch",a=>{if(a.request.method!=="GET")return;async function n(){const t=new URL(a.request.url),c=await caches.open(i);if(o.includes(t.pathname)){const e=await c.match(t.pathname);if(e)return e}try{const e=await fetch(a.request);if(!(e instanceof Response))throw new Error("invalid response from fetch");return e.status===200&&c.put(a.request,e.clone()),e}catch(e){const p=await c.match(a.request);if(p)return p;throw e}}a.respondWith(n())});
