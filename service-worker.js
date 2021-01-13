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
    "revision": "1fb3c8372fe70437da337428e37af956"
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
    "url": "assets/js/10.b6f4cf21.js",
    "revision": "66fc270acf4a4646111dfa00e5e4fda8"
  },
  {
    "url": "assets/js/11.80377e35.js",
    "revision": "f30d4ccd8434e72527c74679a53d1690"
  },
  {
    "url": "assets/js/2.9487f560.js",
    "revision": "8a43d3c6bfaafe769f880c4fa03174f3"
  },
  {
    "url": "assets/js/3.8bc5ab58.js",
    "revision": "1e3047717000d32544235f289c593836"
  },
  {
    "url": "assets/js/4.706544b4.js",
    "revision": "859c5210caaa10e0dce958d44fa04aa2"
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
    "url": "assets/js/app.b11efc0a.js",
    "revision": "487fd08eaa1fa2c61b3f9602ab98b5b5"
  },
  {
    "url": "index.html",
    "revision": "4a71979cc9d04657130234a24f951e2a"
  },
  {
    "url": "java-pmat/01.html",
    "revision": "c2a13a9af32f5ddaa3e1fe538398b40f"
  },
  {
    "url": "java-pmat/index.html",
    "revision": "0064ec9155bdabe18980b939bbcbeee1"
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
