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
    "revision": "8e488d63b1702a14a954b91f061f1c09"
  },
  {
    "url": "assets/css/0.styles.3b79c169.css",
    "revision": "cd981936a3624dabe0a72f81324e5175"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Bold-Italic.a0475780.woff2",
    "revision": "a04757804840e4e870b5310e37fcbc37"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Bold.c318a45b.woff2",
    "revision": "c318a45b45be019ffdeb8c9ac6a41283"
  },
  {
    "url": "assets/fonts/JetBrainsMono-ExtraBold-Italic.045b7ab8.woff2",
    "revision": "045b7ab8d749812c052e9eca1ec5db07"
  },
  {
    "url": "assets/fonts/JetBrainsMono-ExtraBold.c3c08fc9.woff2",
    "revision": "c3c08fc9f418f827eb3eed1b0ebe48c8"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Italic.06bf2228.woff2",
    "revision": "06bf22283c831651e111b08000e502fc"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Medium-Italic.dd0da6de.woff2",
    "revision": "dd0da6de6c2340f4bf0aa4108f98a63f"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Medium.54b68275.woff2",
    "revision": "54b6827550ef145b4c1968518a96070f"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Regular.3eacd637.woff2",
    "revision": "3eacd63796de4b39bc102dae7b143ca5"
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
    "url": "assets/img/image-20210128185758372.87a9b1e3.png",
    "revision": "87a9b1e35a262f532c4bcb7a53c5b448"
  },
  {
    "url": "assets/img/image-20210128193827100.4a09a773.png",
    "revision": "4a09a77311cd1bd669068e384ee9b578"
  },
  {
    "url": "assets/img/image-20210130221129447.bb4a9714.png",
    "revision": "bb4a9714bcd74cc57d9c7867ce7e15b2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a5fe5243.js",
    "revision": "b6de83aca6eb3af47692e98b02edfcba"
  },
  {
    "url": "assets/js/11.75a6e144.js",
    "revision": "1ea8c200645c04585b8be9ac323d8cf5"
  },
  {
    "url": "assets/js/12.9eb57f89.js",
    "revision": "76af23569c88a53acc3a68995ec3e58d"
  },
  {
    "url": "assets/js/13.28ddef94.js",
    "revision": "9fc9d0af2244d49197fae82fa48d2616"
  },
  {
    "url": "assets/js/14.4eb8534a.js",
    "revision": "83bdacda9f50659bb4d98243b789a080"
  },
  {
    "url": "assets/js/15.e1ff430b.js",
    "revision": "05f90de8046f121dcc51a97587d0a278"
  },
  {
    "url": "assets/js/16.8b22a6d9.js",
    "revision": "888aa14cee98977a5f08e61eb968ae94"
  },
  {
    "url": "assets/js/17.fd3793cf.js",
    "revision": "6db584701aaffb2ae788e03d60f78e84"
  },
  {
    "url": "assets/js/18.d83fb366.js",
    "revision": "013d7f480e1d798e0284b438e8efec3c"
  },
  {
    "url": "assets/js/19.743a7ae7.js",
    "revision": "10a83f9fd336293e47147b03a28ca38a"
  },
  {
    "url": "assets/js/2.1785a680.js",
    "revision": "a04af02c7172502d322103ed64d905b5"
  },
  {
    "url": "assets/js/20.ea538512.js",
    "revision": "ef62235a7cb07c5c4c1621aa9f666e5d"
  },
  {
    "url": "assets/js/21.9916bf8c.js",
    "revision": "13661b9aa6ca12414cc5d5acaa81cd34"
  },
  {
    "url": "assets/js/22.cb8ec823.js",
    "revision": "0a23c404edc1afffef72b149ad67b808"
  },
  {
    "url": "assets/js/23.afb1df96.js",
    "revision": "14760ffc14d8d3f67d3b22aa6e970201"
  },
  {
    "url": "assets/js/24.b489bd15.js",
    "revision": "acaa319c8fef440391ee5b7fa2040178"
  },
  {
    "url": "assets/js/25.b4fdef55.js",
    "revision": "bfc786916b77b4746340903438af6007"
  },
  {
    "url": "assets/js/26.b7d73293.js",
    "revision": "1643be5e57be5d8d65ffb76192c16748"
  },
  {
    "url": "assets/js/27.35e01730.js",
    "revision": "676c60509216082f7d62a67c96d6bfb8"
  },
  {
    "url": "assets/js/28.3171cd0d.js",
    "revision": "a4c66b4008bd198806e852e05de08f8c"
  },
  {
    "url": "assets/js/29.34da9618.js",
    "revision": "a8c2351ddee730acafa29633a0db48fa"
  },
  {
    "url": "assets/js/3.38b10740.js",
    "revision": "3141bd5efa598f605743f1b9ac57fc31"
  },
  {
    "url": "assets/js/30.41dd37f2.js",
    "revision": "4971d4128d7a52309a285fd5107cdd09"
  },
  {
    "url": "assets/js/31.152d7a17.js",
    "revision": "4b00d16810c4325c33cd644532aad557"
  },
  {
    "url": "assets/js/32.8a83421b.js",
    "revision": "36b80b63ae401c2eba31ca9f3c348b35"
  },
  {
    "url": "assets/js/33.88b66638.js",
    "revision": "6ebd60f7b47fb668f7bdd9b1c257e0d2"
  },
  {
    "url": "assets/js/34.997504d4.js",
    "revision": "e7cd10ae6a4a6a2282538956154e79ef"
  },
  {
    "url": "assets/js/35.f7510073.js",
    "revision": "83edd68b1b3494fc89eb171aa75bf9f4"
  },
  {
    "url": "assets/js/36.1b8e9c0c.js",
    "revision": "7b6d4bf0dca789edde132ecd2907e112"
  },
  {
    "url": "assets/js/37.711e779c.js",
    "revision": "617f07c9762cd6726d03dd81eb2789bb"
  },
  {
    "url": "assets/js/38.d3a24e0f.js",
    "revision": "ccd7b22029665adb13f6459619a11bc4"
  },
  {
    "url": "assets/js/39.0512390c.js",
    "revision": "acb7fd0dea49d88f9d6cc3e8d2ef8698"
  },
  {
    "url": "assets/js/4.d24aef71.js",
    "revision": "8df8550028394ef80a191b9acec6760b"
  },
  {
    "url": "assets/js/5.1d99abcd.js",
    "revision": "3766cb1207a2352ebe3345e4afe029e8"
  },
  {
    "url": "assets/js/6.c181ef9e.js",
    "revision": "a0279dd782cad84958f3897b85b2a023"
  },
  {
    "url": "assets/js/7.53627aa4.js",
    "revision": "ee6732e2b7089a276ec5509686c4face"
  },
  {
    "url": "assets/js/8.631444bd.js",
    "revision": "51e1fad53d2a861dfdb404d81f622f18"
  },
  {
    "url": "assets/js/9.b8996793.js",
    "revision": "b9b8b5a587c7e185883c28aadabdcc07"
  },
  {
    "url": "assets/js/app.10e8207d.js",
    "revision": "5e4374e836edf158de13334b64d5122f"
  },
  {
    "url": "index.html",
    "revision": "ed6fa119f3926fe330d717d0ec8e9ca2"
  },
  {
    "url": "mlogo.svg",
    "revision": "ac847ef8c526f385e7288c4808a7b830"
  },
  {
    "url": "monitor-tuning/00.html",
    "revision": "debe7b095556e2172c8fb77bd9bf218d"
  },
  {
    "url": "monitor-tuning/01/01.html",
    "revision": "f50c07354488256b3ef259f50410ced4"
  },
  {
    "url": "monitor-tuning/01/02.html",
    "revision": "e6dbda4db0227e2fc59c8e1363f1eb69"
  },
  {
    "url": "monitor-tuning/01/03.html",
    "revision": "be255ebb4e9b14fab481c9401c84b34f"
  },
  {
    "url": "monitor-tuning/01/04.html",
    "revision": "e3b4d47751aa4da1fad60614d2ee5e94"
  },
  {
    "url": "monitor-tuning/01/05.html",
    "revision": "1f6879983aac3d457b98120a8707f8f3"
  },
  {
    "url": "monitor-tuning/01/index.html",
    "revision": "e6d414ef94016c0197c1b9c9fbe83f68"
  },
  {
    "url": "monitor-tuning/02/01.html",
    "revision": "9edc7b465572ec5c723025e1f75128f1"
  },
  {
    "url": "monitor-tuning/02/02.html",
    "revision": "d9275950cc0665566b067e120ed39e2f"
  },
  {
    "url": "monitor-tuning/02/index.html",
    "revision": "336a3bfb93420ac765cab1a38b88805c"
  },
  {
    "url": "monitor-tuning/03/01.html",
    "revision": "189db0c57d0eb72bef6bec4225828a68"
  },
  {
    "url": "monitor-tuning/03/02.html",
    "revision": "8e1d314ac3177bae2cc69ad501f0f495"
  },
  {
    "url": "monitor-tuning/03/index.html",
    "revision": "cdffa0d273710df1ad7dfeb88e4a0de9"
  },
  {
    "url": "monitor-tuning/04/01.html",
    "revision": "9b802a81f88911a35624d4f7fccbb80d"
  },
  {
    "url": "monitor-tuning/04/02.html",
    "revision": "c172ddcbc9d2d4549cd7de7a413fc32d"
  },
  {
    "url": "monitor-tuning/04/03.html",
    "revision": "3078e2302eac9a58882e7f7f4593126e"
  },
  {
    "url": "monitor-tuning/04/04.html",
    "revision": "bf28777b0b0750e75a367d9588537cac"
  },
  {
    "url": "monitor-tuning/04/index.html",
    "revision": "a45929d598f05755da7a923295fe2744"
  },
  {
    "url": "monitor-tuning/05/01.html",
    "revision": "05b3e01476c5a1559da63577c0d13f9c"
  },
  {
    "url": "monitor-tuning/05/02.html",
    "revision": "60348bd79c298ef595930def5b251c1d"
  },
  {
    "url": "monitor-tuning/05/03.html",
    "revision": "a6889e5198f3c54c4c93a491a3822c09"
  },
  {
    "url": "monitor-tuning/05/04.html",
    "revision": "5f3b384275803673c5c092540b30ed6b"
  },
  {
    "url": "monitor-tuning/05/index.html",
    "revision": "4b23735e35ac916f67a5f82d14c1977e"
  },
  {
    "url": "monitor-tuning/06/01.html",
    "revision": "10633eea1dfa86072da83b79abf74dfc"
  },
  {
    "url": "monitor-tuning/06/02.html",
    "revision": "d424e4edb6a88ba6db367210d3acd880"
  },
  {
    "url": "monitor-tuning/06/03.html",
    "revision": "762753e9049557c02a3cc718d04acdc1"
  },
  {
    "url": "monitor-tuning/06/04.html",
    "revision": "34f764565a09e58c47f9c0a202841000"
  },
  {
    "url": "monitor-tuning/06/05.html",
    "revision": "f44eb4fe88fd167e5774d73a4b0eff88"
  },
  {
    "url": "monitor-tuning/06/index.html",
    "revision": "b1144bad542f0aeea8cbd5b7559a0910"
  },
  {
    "url": "monitor-tuning/index.html",
    "revision": "ccaebf17c3f1ba386d2e70b82a8320be"
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
