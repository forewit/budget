const s=location.pathname.split("/").slice(0,-1).join("/"),u=[s+"/app/immutable/entry/app.C4AjTBZt.js",s+"/app/immutable/nodes/0.B_-rb-3B.js",s+"/app/immutable/assets/0.pUmr5eNT.css",s+"/app/immutable/nodes/1.mS2Lg28w.js",s+"/app/immutable/nodes/2.HNrOkxvs.js",s+"/app/immutable/assets/2.BiCg8_Xo.css",s+"/app/immutable/nodes/3.CS8-DYj0.js",s+"/app/immutable/assets/3.BpcL6yKj.css",s+"/app/immutable/chunks/B566ikxh.js",s+"/app/immutable/chunks/BG9xkKa_.js",s+"/app/immutable/chunks/BNOYY_AH.js",s+"/app/immutable/chunks/BeC-iYn7.js",s+"/app/immutable/chunks/BulDJeAk.js",s+"/app/immutable/chunks/CV348XKW.js",s+"/app/immutable/chunks/CdDWol5w.js",s+"/app/immutable/chunks/ChepNg2m.js",s+"/app/immutable/chunks/DHlismzJ.js",s+"/app/immutable/chunks/b_ufBoOj.js",s+"/app/immutable/chunks/s7wCSDcb.js",s+"/app/immutable/entry/start.Dn58esrz.js"],o=[s+"/images/favicon.png",s+"/images/field-background.jpg",s+"/images/field-icon.png",s+"/images/galaxy.png",s+"/manifest.json"],l="1744317439772",c=`cache-${l}`,m=[...u,...o];self.addEventListener("install",a=>{async function n(){await(await caches.open(c)).addAll(m)}a.waitUntil(n())});self.addEventListener("activate",a=>{async function n(){for(const t of await caches.keys())t!==c&&await caches.delete(t)}a.waitUntil(n())});self.addEventListener("fetch",a=>{if(a.request.method!=="GET")return;async function n(){const t=new URL(a.request.url),i=await caches.open(c);if(m.includes(t.pathname)){const e=await i.match(t.pathname);if(e)return e}try{const e=await fetch(a.request);if(!(e instanceof Response))throw new Error("invalid response from fetch");return e.status===200&&i.put(a.request,e.clone()),e}catch(e){const p=await i.match(a.request);if(p)return p;throw e}}a.respondWith(n())});
