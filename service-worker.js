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
    "revision": "7f623b17f5a87968f861fc9ce7301bdd"
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
    "url": "assets/img/image-20210117115238694.21e58900.png",
    "revision": "21e589005bb54cb72786708393215997"
  },
  {
    "url": "assets/img/image-20210117131339185.4786a191.png",
    "revision": "4786a191356ac6e0e10d12c1bb56d3d6"
  },
  {
    "url": "assets/img/image-20210117132304567.4bfbd129.png",
    "revision": "4bfbd129fcf1eb39b2502fb66ef89cd0"
  },
  {
    "url": "assets/img/image-20210117134007388.263bd9af.png",
    "revision": "263bd9af6e3fc14c0acacfeca802df56"
  },
  {
    "url": "assets/img/image-20210117134137828.46c87d3f.png",
    "revision": "46c87d3f602f159d0852bbb23e117585"
  },
  {
    "url": "assets/img/image-20210117135326331.dd23dacf.png",
    "revision": "dd23dacfabf994301071e13010af0e21"
  },
  {
    "url": "assets/img/image-20210117140732191.e66c3fe6.png",
    "revision": "e66c3fe65a278027793fe4443f41e72e"
  },
  {
    "url": "assets/img/image-20210117141354222.26f3b8eb.png",
    "revision": "26f3b8eb93f85301f702f832f95351d9"
  },
  {
    "url": "assets/img/image-20210117141644864.dcff55fa.png",
    "revision": "dcff55fa361bd91e7870f0360bd1e23f"
  },
  {
    "url": "assets/img/image-20210117142021701.c888dace.png",
    "revision": "c888dacebe0262b47cb5551eacf99d75"
  },
  {
    "url": "assets/img/image-20210117142252417.e462b0c5.png",
    "revision": "e462b0c5fe5748c0f3f5bdae9f63b410"
  },
  {
    "url": "assets/img/image-20210117143023843.93aabda8.png",
    "revision": "93aabda8b668b12a2ce8e8a3e67d3854"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.12a2b007.js",
    "revision": "5729e77aa121b71c759e81db47b0c616"
  },
  {
    "url": "assets/js/11.13af4aba.js",
    "revision": "21bb026d725182a136fbdaaf5ef98fcf"
  },
  {
    "url": "assets/js/12.1ee7a5a4.js",
    "revision": "91441e74135b0d1c84dad4684f2f5674"
  },
  {
    "url": "assets/js/13.c18dd0ba.js",
    "revision": "adde3a180d9d31b42cc3eacfa4cd885e"
  },
  {
    "url": "assets/js/14.948fefcb.js",
    "revision": "7492afd7e901545db3f04edd0e7f0a38"
  },
  {
    "url": "assets/js/15.19617a67.js",
    "revision": "86ace4d838757de367c0e11879b4bc4f"
  },
  {
    "url": "assets/js/16.435a7109.js",
    "revision": "00607922cf3f8e3a800f80ad5304333b"
  },
  {
    "url": "assets/js/2.bf99bb95.js",
    "revision": "1fc743df9e57bf51157a5eda113b9c17"
  },
  {
    "url": "assets/js/3.b2d7a4fe.js",
    "revision": "3226759b5aa945a70802a0be49dc10b7"
  },
  {
    "url": "assets/js/4.1a3dde88.js",
    "revision": "a26146833afbe199e264b706f461bf3b"
  },
  {
    "url": "assets/js/5.d1d0efdd.js",
    "revision": "a17ed631b205b2a70f61743176106ba8"
  },
  {
    "url": "assets/js/6.1f5b1453.js",
    "revision": "2f04d3aa247985181c4d6f587f51d7a1"
  },
  {
    "url": "assets/js/7.02b14672.js",
    "revision": "698d73cda685af90819c65f1f4af1f79"
  },
  {
    "url": "assets/js/8.7fbc7558.js",
    "revision": "89e0822895265cabe8ceddb018c8195b"
  },
  {
    "url": "assets/js/9.873d4e1b.js",
    "revision": "4f52912b35cdcef77f4713f7124e55af"
  },
  {
    "url": "assets/js/app.dc2fec05.js",
    "revision": "38583db2507e255b6d43eaf355c035c8"
  },
  {
    "url": "index.html",
    "revision": "1e764a1ea564e2cee74aa0440fc03eae"
  },
  {
    "url": "monitor-tuning/01.html",
    "revision": "b837a96bd11677cc97ceb3442e54130d"
  },
  {
    "url": "monitor-tuning/01/01.html",
    "revision": "23620d9e86cfb3a45477f222e154d959"
  },
  {
    "url": "monitor-tuning/01/02.html",
    "revision": "97d1f24a02e58a1f3dae35a932f89fb5"
  },
  {
    "url": "monitor-tuning/01/03.html",
    "revision": "04f01b64726aff209c4c8ad41d215370"
  },
  {
    "url": "monitor-tuning/01/04.html",
    "revision": "e714ca25ae91728ff6cb3ff0ea7195b3"
  },
  {
    "url": "monitor-tuning/01/index.html",
    "revision": "59ac0c3d9734c8d593e5062ffc75e853"
  },
  {
    "url": "monitor-tuning/index.html",
    "revision": "a7755d3547a2ebe11f04a0995934ede2"
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
