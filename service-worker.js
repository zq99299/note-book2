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
    "revision": "22bd616d979e819e98a4fc4f01bdd999"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5aaa80f0.js",
    "revision": "bd43022ebd234cc67b8472f26265303b"
  },
  {
    "url": "assets/js/11.dcf748ff.js",
    "revision": "a6ad270ff483df421e99131f828a12ee"
  },
  {
    "url": "assets/js/12.20e621d0.js",
    "revision": "62c425625d0f8a7e8a1ff2070883aee9"
  },
  {
    "url": "assets/js/13.7d8dbc4d.js",
    "revision": "34bf68ab0356372592e58153dce72539"
  },
  {
    "url": "assets/js/14.8b1be0da.js",
    "revision": "044e381fba645de844047729620353e4"
  },
  {
    "url": "assets/js/15.104d0041.js",
    "revision": "1fc454cf809fa4fed99d844469f296d3"
  },
  {
    "url": "assets/js/16.0d097bdc.js",
    "revision": "266ce75b9862803810328ae854eeeb2d"
  },
  {
    "url": "assets/js/17.c404482f.js",
    "revision": "01aece9a87622a90b8608622e785d2cd"
  },
  {
    "url": "assets/js/18.4f485715.js",
    "revision": "a687ceae244395eb22d35cabcb4520d8"
  },
  {
    "url": "assets/js/19.c6ed8b08.js",
    "revision": "806e1115f0ce49847c213096585686b6"
  },
  {
    "url": "assets/js/2.5c0f4065.js",
    "revision": "ef6176b266dc56b53c8df853823aabea"
  },
  {
    "url": "assets/js/20.4371ca69.js",
    "revision": "9a70bed2ac9674fe5bf154c4176906b9"
  },
  {
    "url": "assets/js/3.d02ec281.js",
    "revision": "3004e6a08aca84e362ef0fdf084460f0"
  },
  {
    "url": "assets/js/4.01399da4.js",
    "revision": "89446da608d1107ad4811ef30a7d802e"
  },
  {
    "url": "assets/js/5.ab111297.js",
    "revision": "085dbe49fb44129c04235e938ef11005"
  },
  {
    "url": "assets/js/6.28a0115b.js",
    "revision": "2e0582b266ca40d9959686de2fbc0978"
  },
  {
    "url": "assets/js/7.2d12723d.js",
    "revision": "3db4bf2e42fcfc88dc0832fb1b58554a"
  },
  {
    "url": "assets/js/8.bd59a746.js",
    "revision": "6cbd8f5dfe55890ae1b5b8295ba4f6ad"
  },
  {
    "url": "assets/js/9.6d6bf398.js",
    "revision": "6a88a566d602e70709b701b60f20a5a3"
  },
  {
    "url": "assets/js/app.5d569d57.js",
    "revision": "5fa71142c0af19ec37c43f766df20426"
  },
  {
    "url": "index.html",
    "revision": "0b5af8a4428646c7a5eaddf8e8127b1f"
  },
  {
    "url": "monitor-tuning/00.html",
    "revision": "050b18f282b1f3e7653bfd27e7f0dea1"
  },
  {
    "url": "monitor-tuning/01/01.html",
    "revision": "8d186d6f4041f01dfe76d2aa0970f4b6"
  },
  {
    "url": "monitor-tuning/01/02.html",
    "revision": "dab1d5708ae2f78a4ccd02e792c76658"
  },
  {
    "url": "monitor-tuning/01/03.html",
    "revision": "fd57606661c22d2de57bf03ba8c64fb1"
  },
  {
    "url": "monitor-tuning/01/04.html",
    "revision": "076117a86134cb2c4a3b94941159ba64"
  },
  {
    "url": "monitor-tuning/01/05.html",
    "revision": "bf9e400d02841a26e31156aec0fef5d9"
  },
  {
    "url": "monitor-tuning/01/index.html",
    "revision": "f36e5cd823b323a105ecdf0a7061feaf"
  },
  {
    "url": "monitor-tuning/02/01.html",
    "revision": "a9308c917aafe74b07baa6ec4d15421f"
  },
  {
    "url": "monitor-tuning/02/02.html",
    "revision": "269ae32cf858800af52a640df6cca486"
  },
  {
    "url": "monitor-tuning/02/index.html",
    "revision": "8e55432c0782875e314f9593f2046749"
  },
  {
    "url": "monitor-tuning/index.html",
    "revision": "e5e5207781352fca6fc8954585ff0f50"
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
