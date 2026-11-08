// Compras Mercado — service worker (v2.3.0)
const C = "cm-v2.3.0", RT = "cm-runtime";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icons/icon-180.png", "icons/icon-192.png", "icons/icon-512.png", "icons/domdevlabs-logo.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(C).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== C && k !== RT).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const r = e.request; if (r.method !== "GET") return;
  const u = new URL(r.url);
  if (r.mode === "navigate") {
    e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(C).then(c => c.put("index.html", cp)); return res; })
      .catch(() => caches.match("index.html")));
    return;
  }
  if (u.origin === location.origin) { e.respondWith(caches.match(r).then(m => m || fetch(r))); return; }
  // leitor do cupom e fontes: guarda para funcionar offline depois do primeiro uso
  if (/jsdelivr|tessdata|fonts\.(googleapis|gstatic)/.test(u.host)) {
    e.respondWith(caches.open(RT).then(async c => {
      const m = await c.match(r);
      const f = fetch(r).then(res => { if (res.ok || res.type === "opaque") c.put(r, res.clone()); return res; }).catch(() => m);
      return m || f;
    }));
  }
});
