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
    "revision": "f3905a553412f4a4b8f25692063f1a66"
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
    "url": "assets/img/image-20210207150551614.dd0f34e1.png",
    "revision": "dd0f34e174efb65866780f9fde873c57"
  },
  {
    "url": "assets/img/image-20210207150813253.ee006454.png",
    "revision": "ee0064540260c051e90753153f785d16"
  },
  {
    "url": "assets/img/image-20210207151320765.9c0b7272.png",
    "revision": "9c0b7272e449ed717960cbd5f0813801"
  },
  {
    "url": "assets/img/image-20210207174523696.89d963c1.png",
    "revision": "89d963c18c11b72117c23ecad918589e"
  },
  {
    "url": "assets/img/image-20210207174547162.286a2810.png",
    "revision": "286a2810e9f6ba68b0a8755f6b4822f9"
  },
  {
    "url": "assets/img/image-20210207174628514.c1bb25d7.png",
    "revision": "c1bb25d756ad3f449c04ae0596c30808"
  },
  {
    "url": "assets/img/image-20210207174722054.3257f54b.png",
    "revision": "3257f54bda2875d3614b15113bc972ae"
  },
  {
    "url": "assets/img/image-20210207174747794.c69cb785.png",
    "revision": "c69cb7858d16944583331f63591fb6db"
  },
  {
    "url": "assets/img/image-20210207174830081.0ecf59e8.png",
    "revision": "0ecf59e81ec8055d4fda2f564c2fe91d"
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
    "url": "assets/js/10.6f78a396.js",
    "revision": "964bb477e692f530b87e8bea34b45e86"
  },
  {
    "url": "assets/js/11.d8e06710.js",
    "revision": "d328e80cc26a8e1d4337971262c5107f"
  },
  {
    "url": "assets/js/12.06bb3b77.js",
    "revision": "bc92455a87d20a725f4838732d6a7383"
  },
  {
    "url": "assets/js/13.adfd115e.js",
    "revision": "004bdc249e4477605ca50ee66b3f55e9"
  },
  {
    "url": "assets/js/14.e3c94296.js",
    "revision": "3f14ff6d03bfd166cd2e2bb0dcfede00"
  },
  {
    "url": "assets/js/15.83ad52bb.js",
    "revision": "694c444e67a69f2e5e331b620f6cf4bf"
  },
  {
    "url": "assets/js/16.19f43142.js",
    "revision": "e36a1165847a079959f59beea03ecc1c"
  },
  {
    "url": "assets/js/17.9b4aa030.js",
    "revision": "71fe9b01ef35e6231e0135adf07e6ed7"
  },
  {
    "url": "assets/js/18.48fa7d25.js",
    "revision": "c2b0c4fb6f065d9dec737f3238bd6ba9"
  },
  {
    "url": "assets/js/19.111dddd5.js",
    "revision": "eeb557c2006809621114183d3207614a"
  },
  {
    "url": "assets/js/2.17946364.js",
    "revision": "d24f60a5ed06ece3cc5125e45236add8"
  },
  {
    "url": "assets/js/20.c3c7ad6c.js",
    "revision": "a466f02d33dff370685ee6b8b2f36279"
  },
  {
    "url": "assets/js/21.275987b2.js",
    "revision": "325e509da917d149c03dca266e708129"
  },
  {
    "url": "assets/js/22.589055fc.js",
    "revision": "342bf0a129d7ee0199dd803a401e77d3"
  },
  {
    "url": "assets/js/23.a327d7ec.js",
    "revision": "a5daaa7254675008ea7450cbb9faa868"
  },
  {
    "url": "assets/js/24.755cf9f3.js",
    "revision": "5a92f5d319d1964224185ae4aed0430a"
  },
  {
    "url": "assets/js/25.e83c8895.js",
    "revision": "a387f54a69847a7d528d46a1c0cc293c"
  },
  {
    "url": "assets/js/26.6b3f5d2d.js",
    "revision": "6401ea8f83b201ab4c40a78a75881332"
  },
  {
    "url": "assets/js/27.5987330d.js",
    "revision": "68fa39c63bb5dc0332af1f32c476b6ce"
  },
  {
    "url": "assets/js/28.71680a6c.js",
    "revision": "1ea81e1b66767265c5fdd2bbda8f361c"
  },
  {
    "url": "assets/js/29.a39248ac.js",
    "revision": "a81528634c82a1f93115de4e45b37aa4"
  },
  {
    "url": "assets/js/3.f5f60e05.js",
    "revision": "caca3b9d5d42aaf4dc5fbc6073376765"
  },
  {
    "url": "assets/js/30.95e8c19e.js",
    "revision": "61bf27907ff8d3577a61ed5b7e83e9c7"
  },
  {
    "url": "assets/js/31.f8c35485.js",
    "revision": "ea4b223909a223cc22de050c5a98557c"
  },
  {
    "url": "assets/js/32.107fc6e9.js",
    "revision": "217d628f3548e3c18009ecc751dd3c29"
  },
  {
    "url": "assets/js/33.c5000889.js",
    "revision": "f0797dd3253c4c01e8b01184c45265fe"
  },
  {
    "url": "assets/js/34.1e5fe0f6.js",
    "revision": "f841bf6b0f5f428460277a3a658580f8"
  },
  {
    "url": "assets/js/35.62b29ba3.js",
    "revision": "695e98591a1b79d92a51a7c98560d213"
  },
  {
    "url": "assets/js/36.45cb7a14.js",
    "revision": "8627c670113736fb849805d76205ce04"
  },
  {
    "url": "assets/js/37.78ec8ce5.js",
    "revision": "a1e5b721237650a35d7cc68dfc4e8332"
  },
  {
    "url": "assets/js/38.568f1911.js",
    "revision": "89bd654a21d16ee5924b8c54c6b8e467"
  },
  {
    "url": "assets/js/39.6444a4b6.js",
    "revision": "e569e41067de52c8e507d8dfc887dbb7"
  },
  {
    "url": "assets/js/4.37826a5a.js",
    "revision": "07bb50e372f0053cc49e289d9574a218"
  },
  {
    "url": "assets/js/40.0b92faa0.js",
    "revision": "e5844daa161ecf203acd9f11c0d3b315"
  },
  {
    "url": "assets/js/41.3f894b7b.js",
    "revision": "d85722c072be8e0f096203b50261da48"
  },
  {
    "url": "assets/js/42.53d256f0.js",
    "revision": "6f05406e3ea94668164070a99a667db2"
  },
  {
    "url": "assets/js/43.f63936b7.js",
    "revision": "067dad5a271becbf93befd393e0a5222"
  },
  {
    "url": "assets/js/5.3b4f87d2.js",
    "revision": "8ba939b8b56bcb77b6aa540f265095b1"
  },
  {
    "url": "assets/js/6.c84ea63d.js",
    "revision": "ed1ae95c97699b028147034a6280fb24"
  },
  {
    "url": "assets/js/7.39a93d7e.js",
    "revision": "efa388354bcf7ba561d40c3cb6107ce0"
  },
  {
    "url": "assets/js/8.cce800c5.js",
    "revision": "e66a4d49e14be13b7934d6893236b860"
  },
  {
    "url": "assets/js/9.b93909da.js",
    "revision": "c87f55dad0b697a13c42cbdd2416f5ae"
  },
  {
    "url": "assets/js/app.d776a77a.js",
    "revision": "19b33e9aa72598e39421d8ecf569854a"
  },
  {
    "url": "index.html",
    "revision": "94f93193b3aaeb47fb47e90ba45d9efd"
  },
  {
    "url": "mlogo.svg",
    "revision": "ac847ef8c526f385e7288c4808a7b830"
  },
  {
    "url": "monitor-tuning/00.html",
    "revision": "e2441a4efab52846301e2620a0384a33"
  },
  {
    "url": "monitor-tuning/01/01.html",
    "revision": "c4e308afe476061d1a61ecb2bce26be6"
  },
  {
    "url": "monitor-tuning/01/02.html",
    "revision": "e5ba0907726227f475505dbe028ba054"
  },
  {
    "url": "monitor-tuning/01/03.html",
    "revision": "c07a4f2b2d33e1510bbc199fb1768716"
  },
  {
    "url": "monitor-tuning/01/04.html",
    "revision": "0c2bb9fe1765285be4e4ba44f5c71d9e"
  },
  {
    "url": "monitor-tuning/01/05.html",
    "revision": "1f2ed3f3b235b9b64454de5d5fe62707"
  },
  {
    "url": "monitor-tuning/01/index.html",
    "revision": "334ebf2ac1b2a1a3a49c4690cb845b2a"
  },
  {
    "url": "monitor-tuning/02/01.html",
    "revision": "262075b7d4e69de834c614d119a2c043"
  },
  {
    "url": "monitor-tuning/02/02.html",
    "revision": "014280afb77aa7d21aaa413ceaa010ce"
  },
  {
    "url": "monitor-tuning/02/index.html",
    "revision": "ac2eb0bbf11a01d8acfac8ba3b9d38ab"
  },
  {
    "url": "monitor-tuning/03/01.html",
    "revision": "546e3204eded77c76decfe6c68ea7617"
  },
  {
    "url": "monitor-tuning/03/02.html",
    "revision": "3a08f50f23b5402bb1406585d2139972"
  },
  {
    "url": "monitor-tuning/03/index.html",
    "revision": "22fc74f251041c5bffb2783c1574e1e8"
  },
  {
    "url": "monitor-tuning/04/01.html",
    "revision": "bfdcfdab777fbd9520758341d4945ce8"
  },
  {
    "url": "monitor-tuning/04/02.html",
    "revision": "c70feb58a6ef091f41b59c8dc6480a8d"
  },
  {
    "url": "monitor-tuning/04/03.html",
    "revision": "850aaedec2348fae76faed48318a4cd8"
  },
  {
    "url": "monitor-tuning/04/04.html",
    "revision": "5b204f8a2dff150292d1a64452ebc23d"
  },
  {
    "url": "monitor-tuning/04/index.html",
    "revision": "260e5de41442abc40864494085b13817"
  },
  {
    "url": "monitor-tuning/05/01.html",
    "revision": "ef278fd69c44d3e4301bf8cc06e04001"
  },
  {
    "url": "monitor-tuning/05/02.html",
    "revision": "d4261679d61939618befe77ffc3e4a5c"
  },
  {
    "url": "monitor-tuning/05/03.html",
    "revision": "19341d8a46d5c76c8841897beb0b4690"
  },
  {
    "url": "monitor-tuning/05/04.html",
    "revision": "585a8be438ae4910d29ae54c30b37163"
  },
  {
    "url": "monitor-tuning/05/index.html",
    "revision": "defa4ece5197e0093b23e194c4adae3c"
  },
  {
    "url": "monitor-tuning/06/01.html",
    "revision": "a9d8c8fa619853869b58db429dcb8c3d"
  },
  {
    "url": "monitor-tuning/06/02.html",
    "revision": "7cb86786867ee6e3f4055e0c1d016187"
  },
  {
    "url": "monitor-tuning/06/03.html",
    "revision": "c64019eea3da185a3b036c0673f2beb2"
  },
  {
    "url": "monitor-tuning/06/04.html",
    "revision": "05fd44d0c95b536d39f4b5b311081472"
  },
  {
    "url": "monitor-tuning/06/05.html",
    "revision": "143ee89b029753380855e058b13277dd"
  },
  {
    "url": "monitor-tuning/06/index.html",
    "revision": "a4829b27e8af8dd68b36c456c7872ad3"
  },
  {
    "url": "monitor-tuning/07/01.html",
    "revision": "79483b350de531af14e485d2e333561f"
  },
  {
    "url": "monitor-tuning/07/02.html",
    "revision": "92ffbabb84863a4aac74314878789569"
  },
  {
    "url": "monitor-tuning/07/03.html",
    "revision": "08a858121c1c5a59bc27812f46ade65b"
  },
  {
    "url": "monitor-tuning/07/index.html",
    "revision": "579fa38741b4b185f9f00046d3e9bef6"
  },
  {
    "url": "monitor-tuning/index.html",
    "revision": "7e336a0b83639709846ea75eb62d89cc"
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
