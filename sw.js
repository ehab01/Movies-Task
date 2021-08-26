const staticCacheName ='site-static-v1';
const dynamicCache ='site-static-v2';
const assets =[
    '/',
    '/assets/js/app.js',
    '/assets/js/main.js',
    '/assets/styles/styles.css',
    '/fallback.html'

]

self.addEventListener('install',evt=>
{
    evt.waitUntil( caches.open(staticCacheName).then(cache =>{
        console.log("caching all assets")
                cache.addAll(assets)
            }));
   
}
);
self.addEventListener('activate',evt=>
{
    evt.waitUntil( caches.keys().then(keys =>{
        
        return Promise.all(keys
            .filter(key=>key !==staticCacheName && key !== dynamicCache )
            .map(key=>caches.delete(key)))
            }));
}
);

self.addEventListener('fetch',evt=>
{
   evt.respondWith(
      caches.match(evt.request).then(cacheRes =>{
          return cacheRes || fetch(evt.request).then(fetchRes =>{
              return caches.open(dynamicCache).then(cache=>{
                  cache.put(evt.request.url, fetchRes.clone());
                  return fetchRes;
              })
          });
      }).catch(()=> caches.match('/fallback.html'))
   )
}
);