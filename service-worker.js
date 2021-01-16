/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0ca31c93e4fc8840b14e504896986094"
  },
  {
    "url": "assets/css/0.styles.2b7aa8da.css",
    "revision": "ff4e903845ab201c41420599590f6c90"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3d5c4a5a.js",
    "revision": "0837a95386d65206e5a26e7e79f1d961"
  },
  {
    "url": "assets/js/11.a16572a8.js",
    "revision": "f79e9ab5decf5c9d0c57e38a2561200c"
  },
  {
    "url": "assets/js/12.793bc5d6.js",
    "revision": "1a23dad9a4be0cdaf6a8a259095f306c"
  },
  {
    "url": "assets/js/13.143b3435.js",
    "revision": "35dc9b7a7b45d44a37dbb0584859ead1"
  },
  {
    "url": "assets/js/14.03326d76.js",
    "revision": "20679c770d4d2e9f47a392608326e072"
  },
  {
    "url": "assets/js/2.9487f560.js",
    "revision": "8a43d3c6bfaafe769f880c4fa03174f3"
  },
  {
    "url": "assets/js/3.cf5f66e5.js",
    "revision": "d3a01838023eb9b7fdc9b8ee84de22c1"
  },
  {
    "url": "assets/js/4.9a9475ba.js",
    "revision": "f76c0d4dd788497629d3cdb15a2b1bc8"
  },
  {
    "url": "assets/js/5.9dc543e5.js",
    "revision": "3a6b28d01710ed1007ab1d2ed60ad9dd"
  },
  {
    "url": "assets/js/6.681b9c9a.js",
    "revision": "a8858bc79102b34988aad33f0196cced"
  },
  {
    "url": "assets/js/7.62e07670.js",
    "revision": "cd64ab7eb6d4bbe49983476aa4a23a39"
  },
  {
    "url": "assets/js/8.2e83bd93.js",
    "revision": "38109951f8297c336782b79d634a8ce6"
  },
  {
    "url": "assets/js/9.b67b75c9.js",
    "revision": "75b0bf68bf67412f9daa00a7b6f58fe5"
  },
  {
    "url": "assets/js/app.fa6a1a1b.js",
    "revision": "ee0f4b65a78fc751f9507b99a653f62c"
  },
  {
    "url": "index.html",
    "revision": "ccb793a64333f085385ae2229f9a0d69"
  },
  {
    "url": "java-pmat/01.html",
    "revision": "8e2681161734519edb0d6ad0664357c3"
  },
  {
    "url": "java-pmat/01/01.html",
    "revision": "f0adc48e72122ace7b400bc761d521d3"
  },
  {
    "url": "java-pmat/01/02.html",
    "revision": "dfbc41ead11ac9573937d48197933583"
  },
  {
    "url": "java-pmat/01/index.html",
    "revision": "53f4e06a717db005f24b4f9f476e96cd"
  },
  {
    "url": "java-pmat/index.html",
    "revision": "4d748a8ad742f291c8ac5f1b22ceb8d1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
