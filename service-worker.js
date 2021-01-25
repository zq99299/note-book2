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
    "revision": "757b622630bd43a4126045c775174dd0"
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
    "url": "assets/img/image-20210125194927728.40a3d724.png",
    "revision": "40a3d72478f18c2eb6961f88595de234"
  },
  {
    "url": "assets/img/image-20210125214202463.f30930bd.png",
    "revision": "f30930bdc1f053eeff3069a28826dfbd"
  },
  {
    "url": "assets/img/image-20210125214524106.d87f3508.png",
    "revision": "d87f350876517350f94eea9dd203c089"
  },
  {
    "url": "assets/img/image-20210125221436472.c8a327c9.png",
    "revision": "c8a327c9e3997f779736a87cd83d3394"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3b4611eb.js",
    "revision": "7c00edb7955b63a1fe7364daeca82ebc"
  },
  {
    "url": "assets/js/11.516779b6.js",
    "revision": "199af6be12433c2627987e2a1987dc55"
  },
  {
    "url": "assets/js/12.5f14fe84.js",
    "revision": "9753054e5a66620732201ada6abf4b84"
  },
  {
    "url": "assets/js/13.3805043a.js",
    "revision": "c182585c0169469e56505d78facc181a"
  },
  {
    "url": "assets/js/14.bc8a7272.js",
    "revision": "f1c26837b6ff171855a1ca9a110a290e"
  },
  {
    "url": "assets/js/15.98dd8465.js",
    "revision": "09a1348009563713af874ab06fc6fd2d"
  },
  {
    "url": "assets/js/16.ee287751.js",
    "revision": "94853571ced3971579d60bfa9dac7bd5"
  },
  {
    "url": "assets/js/17.f52fec4d.js",
    "revision": "9489cca06e4c21452db872dae658af73"
  },
  {
    "url": "assets/js/18.24f8b72b.js",
    "revision": "a34847bec524eb096cbb2a2b4119a58c"
  },
  {
    "url": "assets/js/19.503479d5.js",
    "revision": "fafe1c073c2bd8c6c7630c4ae0ab4d4c"
  },
  {
    "url": "assets/js/2.5d4861b4.js",
    "revision": "6bad29fe72fe6d95dea073081d046912"
  },
  {
    "url": "assets/js/20.18865b1c.js",
    "revision": "358c5a6fdd040562917a59dd9ec15774"
  },
  {
    "url": "assets/js/21.0e347637.js",
    "revision": "73f24108ecfee660f28a0bf130a9d2a3"
  },
  {
    "url": "assets/js/22.081da631.js",
    "revision": "ce76cb35416178012e33a64b6bb13845"
  },
  {
    "url": "assets/js/23.14f5ced5.js",
    "revision": "b8daa2728855322c9ea75b47c8e97ad5"
  },
  {
    "url": "assets/js/24.188d0166.js",
    "revision": "1cd2309d69048eb71c966c7f6c9cc45f"
  },
  {
    "url": "assets/js/25.68297131.js",
    "revision": "53b33262d70ddcdbb2aff842ff18832d"
  },
  {
    "url": "assets/js/26.084c93be.js",
    "revision": "b11c0bc07df195775b52554d227cb78e"
  },
  {
    "url": "assets/js/27.30828bda.js",
    "revision": "530be76579095b1cc83f2dc8a9df8a39"
  },
  {
    "url": "assets/js/28.8193b3e7.js",
    "revision": "664d68c717eaac6a42633d6eab1b548b"
  },
  {
    "url": "assets/js/3.f27fd4e5.js",
    "revision": "48f3e7981e6d25b8e3940cb9f2232904"
  },
  {
    "url": "assets/js/4.0fb2f151.js",
    "revision": "6ab2e2f2f8c05c6a594a9d6c74a2a4c2"
  },
  {
    "url": "assets/js/5.7aed23a3.js",
    "revision": "cf09ffb67dac6da0489470f5aaf82552"
  },
  {
    "url": "assets/js/6.cb14315d.js",
    "revision": "169999b7caace79693096feb0c0faed8"
  },
  {
    "url": "assets/js/7.e58ceb7a.js",
    "revision": "4ba4785f226347e3196c6ba59eeafc40"
  },
  {
    "url": "assets/js/8.0c60198f.js",
    "revision": "f76b18cded8c68637df3cb31e4a0f5f8"
  },
  {
    "url": "assets/js/9.337547fa.js",
    "revision": "6407548da8af3dca438b64984a09d698"
  },
  {
    "url": "assets/js/app.e8c9ca99.js",
    "revision": "cd596372698a8b70012e33d052254465"
  },
  {
    "url": "index.html",
    "revision": "e935ab84e121ebfa64bc8653efd23eaa"
  },
  {
    "url": "monitor-tuning/00.html",
    "revision": "805bb353ea0500b7cddbdd179457042b"
  },
  {
    "url": "monitor-tuning/01/01.html",
    "revision": "ecc9da918b0441506cc29ed6d2618608"
  },
  {
    "url": "monitor-tuning/01/02.html",
    "revision": "8c94fa4dd90015b408aee0024e14f9a8"
  },
  {
    "url": "monitor-tuning/01/03.html",
    "revision": "4cf53707f22fcf8c3837643498b3f21a"
  },
  {
    "url": "monitor-tuning/01/04.html",
    "revision": "70a2a31a367987cd8ca1e3fc51cd0d94"
  },
  {
    "url": "monitor-tuning/01/05.html",
    "revision": "9f193133bc5df39481bdea8c0cb78a2c"
  },
  {
    "url": "monitor-tuning/01/index.html",
    "revision": "fd01bde5b97a514788025699901f4196"
  },
  {
    "url": "monitor-tuning/02/01.html",
    "revision": "bae19ba98110a2e188040321b1aea56b"
  },
  {
    "url": "monitor-tuning/02/02.html",
    "revision": "3386f744a20be924e3886cc590c5ffd4"
  },
  {
    "url": "monitor-tuning/02/index.html",
    "revision": "e7dd3c479034daa6a3bb8a9fb420f0cd"
  },
  {
    "url": "monitor-tuning/03/01.html",
    "revision": "e1ba668f607ee838206bf49906164400"
  },
  {
    "url": "monitor-tuning/03/02.html",
    "revision": "c2e959d14037e5ef05a274c958476be0"
  },
  {
    "url": "monitor-tuning/03/index.html",
    "revision": "a04269da69c0f620ede6472e983f0041"
  },
  {
    "url": "monitor-tuning/04/01.html",
    "revision": "e04fd27f5e3b1edc1ef6d289d24c5913"
  },
  {
    "url": "monitor-tuning/04/02.html",
    "revision": "029fe7fca5375a91c40b35bf1db01d77"
  },
  {
    "url": "monitor-tuning/04/03.html",
    "revision": "b784be3cb7d5ba290883ea9dc3a75cd3"
  },
  {
    "url": "monitor-tuning/04/04.html",
    "revision": "eb27e673d16a7aa168d8d7c67ddd2e75"
  },
  {
    "url": "monitor-tuning/04/index.html",
    "revision": "71b5fc3cd6307df5f51d25575a51e0b2"
  },
  {
    "url": "monitor-tuning/index.html",
    "revision": "a0e9122b7c419a9d23b8214186de6afc"
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
