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
    "revision": "ea6f943b874bbf4815d4711de507ea2a"
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
    "url": "assets/img/image-20210117210523984.f22790f8.png",
    "revision": "f22790f8d74d0b3e9cebf2bfaedab582"
  },
  {
    "url": "assets/img/image-20210117211938381.6194c592.png",
    "revision": "6194c592a519f5a84b35d6cf53b9fdd6"
  },
  {
    "url": "assets/img/image-20210117215032826.a96a5f61.png",
    "revision": "a96a5f61dac9fb384f07d8a692287c03"
  },
  {
    "url": "assets/img/image-20210117215231403.fd55617f.png",
    "revision": "fd55617f3b2fc812a92b9beea91aa420"
  },
  {
    "url": "assets/img/image-20210117215523473.d6b116d8.png",
    "revision": "d6b116d8a83ef893f64dacd012805e55"
  },
  {
    "url": "assets/img/image-20210117215848221.5074f91f.png",
    "revision": "5074f91fb6d300a1bd453d729905902f"
  },
  {
    "url": "assets/img/image-20210117220016498.f482f6c0.png",
    "revision": "f482f6c09ed76d3d8439910b3292f579"
  },
  {
    "url": "assets/img/image-20210117220446231.dda0edff.png",
    "revision": "dda0edffb5eaca709cc1a0a10e467dec"
  },
  {
    "url": "assets/img/image-20210117221101215.ac8b15fa.png",
    "revision": "ac8b15fa86dbe8d39f93b2715c6f50ab"
  },
  {
    "url": "assets/img/image-20210117221114887.57521261.png",
    "revision": "57521261b95c4beb5f059e4cd1a0f2f7"
  },
  {
    "url": "assets/img/image-20210117221823485.d8b63745.png",
    "revision": "d8b637453b480593204566d8c5b7d4d1"
  },
  {
    "url": "assets/img/image-20210117223134434.2164c1c2.png",
    "revision": "2164c1c22b7adbdc35f44bc4042922c5"
  },
  {
    "url": "assets/img/image-20210117223157306.f0ddf327.png",
    "revision": "f0ddf327c02f68f9312a0a1f49097eb6"
  },
  {
    "url": "assets/img/image-20210117223254593.a4eaae41.png",
    "revision": "a4eaae417d0186dddac879c006b2e694"
  },
  {
    "url": "assets/img/image-20210117231350994.5e7d4564.png",
    "revision": "5e7d45640ff594ccd22698b3e70e1e8e"
  },
  {
    "url": "assets/img/image-20210117232009897.bae2ec5e.png",
    "revision": "bae2ec5e3f3021afa4828ca88d1c78c5"
  },
  {
    "url": "assets/img/image-20210125114833479.154b4cec.png",
    "revision": "154b4cec4319147aeb5475708272ac9c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8e00eca0.js",
    "revision": "d822fdebc7453e31621416ae979774d9"
  },
  {
    "url": "assets/js/11.38077544.js",
    "revision": "353dc51fba2aaea54bee7dc22d9d2eaa"
  },
  {
    "url": "assets/js/12.9a2aacf4.js",
    "revision": "883558dfb6ad80cc79ba1c0e4f37f9aa"
  },
  {
    "url": "assets/js/13.b651d33c.js",
    "revision": "95b7f09c0fd695b692348d979d6b9393"
  },
  {
    "url": "assets/js/14.d1073f59.js",
    "revision": "b536ec5e0b4053af8195db3612aff1fe"
  },
  {
    "url": "assets/js/15.2dcd7efa.js",
    "revision": "4366200fcbd8474f3607d236277029f0"
  },
  {
    "url": "assets/js/16.ecb0b8a5.js",
    "revision": "8fa87e30a60f7fd31d6a4fc025550fb5"
  },
  {
    "url": "assets/js/17.cafc5c30.js",
    "revision": "1de9ca3b6fe2b220b45e8e2f06ea9c72"
  },
  {
    "url": "assets/js/18.77d27828.js",
    "revision": "37308b9c968b6bfc81e347373cbcea9d"
  },
  {
    "url": "assets/js/19.8ac1624d.js",
    "revision": "566261c066d6566b45c5c7764c3b20e8"
  },
  {
    "url": "assets/js/2.9c4199c4.js",
    "revision": "67997f80afa427c45f9b4416644182c3"
  },
  {
    "url": "assets/js/20.a6b69016.js",
    "revision": "9e8e6a0641bb7ecde62cbfc69fa14790"
  },
  {
    "url": "assets/js/21.0beb937d.js",
    "revision": "7aae52f42aa8fdd8a7e7cb2105997ece"
  },
  {
    "url": "assets/js/22.2800d5c0.js",
    "revision": "2d8228e06402533cd6fd9b214db2f224"
  },
  {
    "url": "assets/js/23.db01aec3.js",
    "revision": "7b58cdf0b4b81545074ff88c46c0c0b8"
  },
  {
    "url": "assets/js/3.626be486.js",
    "revision": "5dcd433df4b4e8827c1fe1bdecd2fc12"
  },
  {
    "url": "assets/js/4.50ac5aa6.js",
    "revision": "df98cc92a840696fbf816208ae9f456e"
  },
  {
    "url": "assets/js/5.4b980ff4.js",
    "revision": "31f908ded0064279f34be61d54409b6b"
  },
  {
    "url": "assets/js/6.7d47b17e.js",
    "revision": "58b9acf3f0e3cafcf85686bc3fca04e9"
  },
  {
    "url": "assets/js/7.4fc128bb.js",
    "revision": "f55c899aa821aee68e8e5a84901a8803"
  },
  {
    "url": "assets/js/8.0ceb967a.js",
    "revision": "4f6d6b709a5b243707348896abc2aa13"
  },
  {
    "url": "assets/js/9.60bf0915.js",
    "revision": "a062f93699e8d3b63ba8ef86b6241ff3"
  },
  {
    "url": "assets/js/app.9c2cc234.js",
    "revision": "058f91f18838de8933e0235b2db787c2"
  },
  {
    "url": "index.html",
    "revision": "732877bfd0cba08070f28c12600fcfb2"
  },
  {
    "url": "monitor-tuning/00.html",
    "revision": "2f0420f8a439919f4307f1f07134a794"
  },
  {
    "url": "monitor-tuning/01/01.html",
    "revision": "2535748cb5e782efab40b342d934caa5"
  },
  {
    "url": "monitor-tuning/01/02.html",
    "revision": "02a3b5f0862725785bec56656511407d"
  },
  {
    "url": "monitor-tuning/01/03.html",
    "revision": "f3e7d5034dde1308ee79e1d4ea4407a9"
  },
  {
    "url": "monitor-tuning/01/04.html",
    "revision": "23c8330bea94d70caa31a9371eb374d9"
  },
  {
    "url": "monitor-tuning/01/05.html",
    "revision": "a21f9d1517eee4a265ce94c7dfaf9e35"
  },
  {
    "url": "monitor-tuning/01/index.html",
    "revision": "0a8c6034b274c052e8b698e3e7489f4d"
  },
  {
    "url": "monitor-tuning/02/01.html",
    "revision": "5455ee7c19e5252326d8f200dad26319"
  },
  {
    "url": "monitor-tuning/02/02.html",
    "revision": "6d40404063b2a1e870b52beaa3535dc1"
  },
  {
    "url": "monitor-tuning/02/index.html",
    "revision": "823c2ffe493cc2d5ca495d5d3f20a979"
  },
  {
    "url": "monitor-tuning/03/01.html",
    "revision": "96dd3c5c17dbe818d0070146e0282974"
  },
  {
    "url": "monitor-tuning/03/02.html",
    "revision": "8a103ecaa4b3ac4facf28b6e72840715"
  },
  {
    "url": "monitor-tuning/03/index.html",
    "revision": "4af075135af3722c92d55e3c5dfc31e7"
  },
  {
    "url": "monitor-tuning/index.html",
    "revision": "468a7ea1466e01d4f133e9e3e09fed38"
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
