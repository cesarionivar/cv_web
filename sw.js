const CAHCHE_NAME = 'cv Cesario Nivar';
const URLsToCache = [
    './',
    './index.html',
    './css/style.css',
    './img/me.png',
    './img/tech-circle.png',
    './js/fontawesome.js',
    './js/app.js',
    'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,500&display=swap',
    'https://ka-f.fontawesome.com/releases/v5.15.1/css/free.min.css',
    'https://ka-f.fontawesome.com/releases/v5.15.1/css/free-v4-shims.min.css',
    'https://ka-f.fontawesome.com/releases/v5.15.1/css/free-v4-font-face.min.css',
    'https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2',
    'https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3gnD_g.woff2',
    'https://fonts.gstatic.com/s/montserrat/v15/JTUPjIg1_i6t8kCHKm459WxZOg3z_PZw.woff2',
    'https://ka-f.fontawesome.com/releases/v5.15.1/webfonts/free-fa-solid-900.woff2',
    'https://ka-f.fontawesome.com/releases/v5.15.1/webfonts/free-fa-brands-400.woff2',
    'https://ka-f.fontawesome.com/releases/v5.15.1/webfonts/free-fa-regular-400.woff2'

];



self.addEventListener('install', e => {
 
    const toCache = caches.open(CAHCHE_NAME)
        .then(cache => {
            return cache.addAll(URLsToCache);
        });
 
    e.waitUntil( toCache );
});


self.addEventListener('fetch', e=> {

    const response = caches.match(e.request)
        .then(res => {
            
            if(res) return res;

            fetch(e.request).then(res => res);

        });

    e.respondWith( response );

});