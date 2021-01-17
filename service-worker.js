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
    "revision": "a3aae14bb5ac4487b1f0bd79dc80252b"
  },
  {
    "url": "assets/css/0.styles.2b7aa8da.css",
    "revision": "ff4e903845ab201c41420599590f6c90"
  },
  {
    "url": "assets/img/640.4a7495af.png",
    "revision": "4a7495afe68ab682404796c9d96825aa"
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
    "url": "assets/img/image-20210117181557059.cc29c24a.png",
    "revision": "cc29c24a58fb0c89dcbf46bc2c0e4d9f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.171cb577.js",
    "revision": "9d0e6cd1c4a235b2d842479aba614cd3"
  },
  {
    "url": "assets/js/11.c522581f.js",
    "revision": "88faac53deb11390e9642d263ef69539"
  },
  {
    "url": "assets/js/12.446e1ef2.js",
    "revision": "03412bf9b33828bbab3cf889153254d0"
  },
  {
    "url": "assets/js/13.c278413e.js",
    "revision": "aa781ac8c809b4bb03489330b4ca8013"
  },
  {
    "url": "assets/js/14.ff7049ae.js",
    "revision": "0bb1edec0f1976824c77c60379e4eabc"
  },
  {
    "url": "assets/js/15.13099645.js",
    "revision": "d78056917a81a4639b55d9c8e9b69569"
  },
  {
    "url": "assets/js/16.42d78434.js",
    "revision": "1a44bbb76eeee5023c5b8d285474f3bf"
  },
  {
    "url": "assets/js/17.46c754d9.js",
    "revision": "96a3e9577da6deb94574f632f276e1db"
  },
  {
    "url": "assets/js/2.4d7fe3e9.js",
    "revision": "110d7a6f3d401173fbace9f1dc04c93b"
  },
  {
    "url": "assets/js/3.4cc70c84.js",
    "revision": "8261bda30a1a48e9dc4a3955f2b8af54"
  },
  {
    "url": "assets/js/4.e21cbfb4.js",
    "revision": "f3b704e75d18af73d1442714e3e8be54"
  },
  {
    "url": "assets/js/5.4d82bb45.js",
    "revision": "b62845ea1660435467492155a5c40159"
  },
  {
    "url": "assets/js/6.9da1c6ce.js",
    "revision": "a0901c605e3e9f503d936ee59605bf3d"
  },
  {
    "url": "assets/js/7.6853f5c3.js",
    "revision": "fdcbdd18497ac791e18470d9e349e8bf"
  },
  {
    "url": "assets/js/8.45f6adc6.js",
    "revision": "d874bd52fd4c2daea8110409a7958675"
  },
  {
    "url": "assets/js/9.2edc9a62.js",
    "revision": "78a19dde87bda176c11cd0e9eb409528"
  },
  {
    "url": "assets/js/app.46e360bd.js",
    "revision": "1fd9c05bac0dec38f098a2036aea036a"
  },
  {
    "url": "index.html",
    "revision": "5706eb2c59d78ba797fbaeef47b47ec5"
  },
  {
    "url": "monitor-tuning/01.html",
    "revision": "865e41ac619f9afc06c90ac4975a3f4a"
  },
  {
    "url": "monitor-tuning/01/01.html",
    "revision": "dbff5a337ba290141b51f8572575be47"
  },
  {
    "url": "monitor-tuning/01/02.html",
    "revision": "0efe6801721e4a86b094f145ad4893fa"
  },
  {
    "url": "monitor-tuning/01/03.html",
    "revision": "4eda67b0ed0556b3876e9fa009284c9c"
  },
  {
    "url": "monitor-tuning/01/04.html",
    "revision": "ef51ccf0861cd6b245ac8fe43ccab10f"
  },
  {
    "url": "monitor-tuning/01/05.html",
    "revision": "aa43c4a03a2d71254cffbe2f58d30e86"
  },
  {
    "url": "monitor-tuning/01/index.html",
    "revision": "ce728434adcf661d1bfc2b06c93d6216"
  },
  {
    "url": "monitor-tuning/index.html",
    "revision": "81cf0dab28ca4bfae5fcf78925f1aa04"
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
