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
    "revision": "90633aa61e45599e67a7df7189e24a5f"
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
    "url": "assets/img/image-20210202221029440.debb7132.png",
    "revision": "debb713283446d0911e0468eb31798d7"
  },
  {
    "url": "assets/img/jsgct_dt_004_grbg_frst_hp.efdc1cd9.png",
    "revision": "efdc1cd961410c569c8297e6bc71fc7f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.91a8bc7b.js",
    "revision": "b4372153c0f44f1380c2d7c01ce5d74f"
  },
  {
    "url": "assets/js/11.fc7705cf.js",
    "revision": "015372042d6b3bf9716ffbaddb2aa8eb"
  },
  {
    "url": "assets/js/12.cdde345a.js",
    "revision": "9f3ad3a6f0158e001566753b412417cc"
  },
  {
    "url": "assets/js/13.97a0eefa.js",
    "revision": "cd9dbc7cb8ec49e0accf9c5170a67f9e"
  },
  {
    "url": "assets/js/14.de8cb23a.js",
    "revision": "b7a7d8fea5a6860982356aaaf2fae493"
  },
  {
    "url": "assets/js/15.f63861d2.js",
    "revision": "5b828cd063ff5b5ca6459c6388d44513"
  },
  {
    "url": "assets/js/16.c688361c.js",
    "revision": "7b82051687d327e5e64cbc86b05aadc5"
  },
  {
    "url": "assets/js/17.e827349b.js",
    "revision": "94103d34bb41c5fe582897fe30a90b73"
  },
  {
    "url": "assets/js/18.cad26187.js",
    "revision": "3c4fa702006ced05b5cbe0a2b87aa13d"
  },
  {
    "url": "assets/js/19.8b1d975b.js",
    "revision": "2d01053f9b5176974381c36e2b659879"
  },
  {
    "url": "assets/js/2.b36503aa.js",
    "revision": "f9a2d7b0d250e5f8597bfead6ca5bbec"
  },
  {
    "url": "assets/js/20.96bb9f6c.js",
    "revision": "0c54ee621034455c6bf8a704fddde04b"
  },
  {
    "url": "assets/js/21.c6ae2893.js",
    "revision": "10609b8b5988d504471674dfd1354495"
  },
  {
    "url": "assets/js/22.222ee422.js",
    "revision": "efa5db5d86b8c1ef9d5b35998a4d875e"
  },
  {
    "url": "assets/js/23.6e9d5eae.js",
    "revision": "51fee354a3c913182001dceb617c2b2b"
  },
  {
    "url": "assets/js/24.83512455.js",
    "revision": "8207148b77b61060022423d1799fdee9"
  },
  {
    "url": "assets/js/25.7f1b10b5.js",
    "revision": "d2dcb00ac2690db91329b29f7bf24483"
  },
  {
    "url": "assets/js/26.69e301e7.js",
    "revision": "32c2105e849a9f2fb092f7fa5ccf5a3c"
  },
  {
    "url": "assets/js/27.5d11abb4.js",
    "revision": "0cce80da93f7ef78732c8dcca72125e9"
  },
  {
    "url": "assets/js/28.b8ad40af.js",
    "revision": "7a3d9d347e52878ca31ff32275ac909a"
  },
  {
    "url": "assets/js/29.6ac79fbd.js",
    "revision": "33ff52bcf37f53e6d55b6911500a96ac"
  },
  {
    "url": "assets/js/3.1e8bd9f3.js",
    "revision": "930362c48ff7d8b3216eeb4c64127a80"
  },
  {
    "url": "assets/js/30.bf630311.js",
    "revision": "d4542c6200f90b571f6aabcba481ed2f"
  },
  {
    "url": "assets/js/31.98449529.js",
    "revision": "a733a05a43fab4ba964d62ff9a207bee"
  },
  {
    "url": "assets/js/32.3c5cb4a5.js",
    "revision": "f31422037ec70f1b1a7a914bc45fdbf4"
  },
  {
    "url": "assets/js/33.5d337ece.js",
    "revision": "b858b2ae925d73634050992e8d3e66e5"
  },
  {
    "url": "assets/js/34.6088f175.js",
    "revision": "b3ae547bc4fa2ef928e41c6a525e7b9d"
  },
  {
    "url": "assets/js/35.b9615e52.js",
    "revision": "12f1e6fa3b2e61d11ef76b6b097ce42a"
  },
  {
    "url": "assets/js/36.1c5f2282.js",
    "revision": "d050cad150acdb56459f7f07cd1bac2b"
  },
  {
    "url": "assets/js/37.c7713fa5.js",
    "revision": "8125c7c65f2c9935ac2ea6abf34e93d5"
  },
  {
    "url": "assets/js/38.efa8dff0.js",
    "revision": "c465011558a2fa17ad073d558a16691c"
  },
  {
    "url": "assets/js/39.58bd1805.js",
    "revision": "7e0fc2359787127f0db5a018bb864267"
  },
  {
    "url": "assets/js/4.22252fb0.js",
    "revision": "872cb6f11741641b4acda5595c3c3d78"
  },
  {
    "url": "assets/js/5.7caa4543.js",
    "revision": "a22531370e6df512ea0e995159eb0d5f"
  },
  {
    "url": "assets/js/6.f5b4afec.js",
    "revision": "9dd017fa151abe3e77c7c54a22feec18"
  },
  {
    "url": "assets/js/7.a84645fa.js",
    "revision": "f6b7ec06381530416bb11746e36c4433"
  },
  {
    "url": "assets/js/8.98a7d916.js",
    "revision": "8737f244ae6d15c145e3372c6a7ca7c7"
  },
  {
    "url": "assets/js/9.8e35a014.js",
    "revision": "5864bfab8abed277a6968841b51f2a74"
  },
  {
    "url": "assets/js/app.866360e4.js",
    "revision": "e3e1168051229409610140de9493694f"
  },
  {
    "url": "index.html",
    "revision": "b1edbffa054fe4adff6c155a775c4d97"
  },
  {
    "url": "mlogo.svg",
    "revision": "ac847ef8c526f385e7288c4808a7b830"
  },
  {
    "url": "monitor-tuning/00.html",
    "revision": "bfae62312dfa299b02d50e13813c4858"
  },
  {
    "url": "monitor-tuning/01/01.html",
    "revision": "52dc4c0ffd35d09995ff06be7af0d1e9"
  },
  {
    "url": "monitor-tuning/01/02.html",
    "revision": "879b4f6b1babf16c983d631caf325ae1"
  },
  {
    "url": "monitor-tuning/01/03.html",
    "revision": "7a6dd821b5512de08157efa54fdbc928"
  },
  {
    "url": "monitor-tuning/01/04.html",
    "revision": "044d931fed23192ba4c4dd436ced3789"
  },
  {
    "url": "monitor-tuning/01/05.html",
    "revision": "38b20f57bc522612c864ca2745ad62e6"
  },
  {
    "url": "monitor-tuning/01/index.html",
    "revision": "11d6981feeec7e326b563fb1c87f1b7c"
  },
  {
    "url": "monitor-tuning/02/01.html",
    "revision": "958393ede312929671ec327d40422c2a"
  },
  {
    "url": "monitor-tuning/02/02.html",
    "revision": "2ddc37afe65089cc05eeb1b10cb53c3e"
  },
  {
    "url": "monitor-tuning/02/index.html",
    "revision": "91f50f9a1b5f5c4a76239120f36cb13a"
  },
  {
    "url": "monitor-tuning/03/01.html",
    "revision": "97e707eb75f3d07d3a52dee47bf8279b"
  },
  {
    "url": "monitor-tuning/03/02.html",
    "revision": "eb36412c30542467f4f893413af4f9c3"
  },
  {
    "url": "monitor-tuning/03/index.html",
    "revision": "3ff01a1d796a82bf535fe5631d8e6a2c"
  },
  {
    "url": "monitor-tuning/04/01.html",
    "revision": "b16f1c70bb7b3b6cae4d0be8ddc06659"
  },
  {
    "url": "monitor-tuning/04/02.html",
    "revision": "70d1ebbe0fae36cb9ff3ccf9bb20ceb4"
  },
  {
    "url": "monitor-tuning/04/03.html",
    "revision": "2a425214dc15a4ce6a36a1e06555eec3"
  },
  {
    "url": "monitor-tuning/04/04.html",
    "revision": "d300570009a60d571b35ebfee781ac24"
  },
  {
    "url": "monitor-tuning/04/index.html",
    "revision": "fc928462f14d39ef98da067901347222"
  },
  {
    "url": "monitor-tuning/05/01.html",
    "revision": "ab0a88bbc0188a45fe96295d5f00ee57"
  },
  {
    "url": "monitor-tuning/05/02.html",
    "revision": "4fff57cd5fe6f1f82f320338f5e78a92"
  },
  {
    "url": "monitor-tuning/05/03.html",
    "revision": "0f847d7413e0b85bdfc2082f0ff99074"
  },
  {
    "url": "monitor-tuning/05/04.html",
    "revision": "2c9d3d61d8e4b7dd04111f8e13573cfb"
  },
  {
    "url": "monitor-tuning/05/index.html",
    "revision": "096e9e662f6e50d7ce2f3136cf7f7f54"
  },
  {
    "url": "monitor-tuning/06/01.html",
    "revision": "1401236b9f0ab59605a8df60c76b3b79"
  },
  {
    "url": "monitor-tuning/06/02.html",
    "revision": "46bd12a202b375164553b3800629ea12"
  },
  {
    "url": "monitor-tuning/06/03.html",
    "revision": "a9cef97112ca2dbb7e492d47462b05f0"
  },
  {
    "url": "monitor-tuning/06/04.html",
    "revision": "6468dc3c5e779ec3b6ce268b05816e5c"
  },
  {
    "url": "monitor-tuning/06/05.html",
    "revision": "f87cf1f8ffa52faf472149e434094383"
  },
  {
    "url": "monitor-tuning/06/index.html",
    "revision": "c0dbc9ad5bb7b5646128fe994c1f1ad5"
  },
  {
    "url": "monitor-tuning/index.html",
    "revision": "e9d60c5e8b1113a2580bb3ac5217d195"
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
