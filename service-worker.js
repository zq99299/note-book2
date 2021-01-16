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
    "revision": "a527190db2e5e755c94ed155bf64fe96"
  },
  {
    "url": "assets/css/0.styles.2b7aa8da.css",
    "revision": "ff4e903845ab201c41420599590f6c90"
  },
  {
    "url": "assets/img/image-20210116223917540.775b6015.png",
    "revision": "775b601566496c572c720f8c37e1ce58"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bc7df9c0.js",
    "revision": "50f4a94640bf10a80e1be5e29cd37c4f"
  },
  {
    "url": "assets/js/11.ab41378e.js",
    "revision": "75347cc370bca1bd42e2ec720a7511af"
  },
  {
    "url": "assets/js/12.eedb7c13.js",
    "revision": "9faa69a10d87d77f8d3286bf7033fc56"
  },
  {
    "url": "assets/js/13.5f3ae146.js",
    "revision": "744e6ff4ca5bb328f8a50d7d9f3e92f3"
  },
  {
    "url": "assets/js/14.7ac79b4e.js",
    "revision": "903731f0149a7e044d0419662a434fd9"
  },
  {
    "url": "assets/js/15.ef0b0d18.js",
    "revision": "4e34f694d86cce3a112212ff992eeff9"
  },
  {
    "url": "assets/js/2.cbe00692.js",
    "revision": "d118259adcbc7b9186777bbfa010c4d5"
  },
  {
    "url": "assets/js/3.c37e9ddb.js",
    "revision": "be9bf8f02ccea0969e53aa0ce6005550"
  },
  {
    "url": "assets/js/4.21d3eb00.js",
    "revision": "747176f66642c036165c98839f32fe0c"
  },
  {
    "url": "assets/js/5.4538a764.js",
    "revision": "aa32173a8d67ca96568e8f60473e15c9"
  },
  {
    "url": "assets/js/6.89a0eb4c.js",
    "revision": "b9ea6748c00faaf9f62d5db90a0a04d2"
  },
  {
    "url": "assets/js/7.92e79c15.js",
    "revision": "2d3bacd5c1ebff8bd84268460a6fd398"
  },
  {
    "url": "assets/js/8.ae1be706.js",
    "revision": "d256a621d2cf36997db5eeb90ab92fcd"
  },
  {
    "url": "assets/js/9.9026fede.js",
    "revision": "64db3bf4425b97e1ce85757e76684f21"
  },
  {
    "url": "assets/js/app.07c3b1f6.js",
    "revision": "7d378ad5b2a03ab6f747f28b1333de5c"
  },
  {
    "url": "index.html",
    "revision": "4047133461296ba5f2e19465a84eb372"
  },
  {
    "url": "java-pmat/01.html",
    "revision": "a0e71ff59f627749cb0389a82bac1878"
  },
  {
    "url": "java-pmat/01/01.html",
    "revision": "ac752b6cffd7c92712c22bbeabd36677"
  },
  {
    "url": "java-pmat/01/02.html",
    "revision": "82dbb3e68de4dd72456ef4abfbbfd9be"
  },
  {
    "url": "java-pmat/01/03.html",
    "revision": "b8fd805fbda742e6a25cd33602605e19"
  },
  {
    "url": "java-pmat/01/index.html",
    "revision": "e736c7f97ce0a3e636e429913b37213e"
  },
  {
    "url": "java-pmat/index.html",
    "revision": "eecb4df4e07f0f185de511f16d89f3ef"
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
