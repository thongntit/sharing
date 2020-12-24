
const cacheName = "day-la-ten-cache"
const assets = [
    "/",
    "/index.html",
    "/js/app.js",
    "/statics/con_meof.jpg",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(cacheName).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            console.log(res, fetchEvent);
            return res || fetch(fetchEvent.request)
        })
    )
})