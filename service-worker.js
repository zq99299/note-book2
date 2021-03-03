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
    "revision": "0bff911f0fe4565865d4b23b755a92ca"
  },
  {
    "url": "assets/css/0.styles.912b239d.css",
    "revision": "07ba485d407863dfba2e6b5e9f563ca9"
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
    "url": "assets/js/10.28fec782.js",
    "revision": "95a13d0af0ed776763a695febafec0c8"
  },
  {
    "url": "assets/js/11.fa8c066a.js",
    "revision": "9f54e685c7fe2cc61a2f27e39a345f10"
  },
  {
    "url": "assets/js/12.5fb233f5.js",
    "revision": "d4bd9c9734c1d665929ee6fa2ff7cf74"
  },
  {
    "url": "assets/js/13.90d5cee4.js",
    "revision": "75bb1872ced4cc2ba9e903bf57dd71ba"
  },
  {
    "url": "assets/js/14.ec79c9c2.js",
    "revision": "e90c22672316448d8a7c3fffd2c8febf"
  },
  {
    "url": "assets/js/15.b2777247.js",
    "revision": "5669a15a2cf84c40bc2c292b19909547"
  },
  {
    "url": "assets/js/16.2317ae3e.js",
    "revision": "c3d52fdb86937b382d30dfaa10767360"
  },
  {
    "url": "assets/js/17.c4e15d0f.js",
    "revision": "ec600dfd10ebf432cfe39180801bdf9f"
  },
  {
    "url": "assets/js/18.4374b9d7.js",
    "revision": "4e82fc64e36dbcb36a5f2fe6e575c9b1"
  },
  {
    "url": "assets/js/19.dc818ed7.js",
    "revision": "4c630c35714df984d08724d49cc1516f"
  },
  {
    "url": "assets/js/2.0bd9e28d.js",
    "revision": "a8f8620796ec78ce84c3ac67eb8cc2f2"
  },
  {
    "url": "assets/js/20.38e6a562.js",
    "revision": "149c96f6543d567ad8cbcd20be57f8ce"
  },
  {
    "url": "assets/js/21.9884c227.js",
    "revision": "325e509da917d149c03dca266e708129"
  },
  {
    "url": "assets/js/22.620f14d4.js",
    "revision": "342bf0a129d7ee0199dd803a401e77d3"
  },
  {
    "url": "assets/js/23.6cf6a837.js",
    "revision": "a070de46f952d2773805fd232c176da7"
  },
  {
    "url": "assets/js/24.b77dcbd6.js",
    "revision": "98e6ff8df2f3512a4d5c9d318edb41c9"
  },
  {
    "url": "assets/js/25.bc0d7a1a.js",
    "revision": "8bea7553b86ee98d429c413523f80942"
  },
  {
    "url": "assets/js/26.e13c1b19.js",
    "revision": "83558da769136afee3ae432cd1a3cf85"
  },
  {
    "url": "assets/js/27.c0e03bae.js",
    "revision": "8791f69788466cc9bb62706d04685298"
  },
  {
    "url": "assets/js/28.9f8fb38d.js",
    "revision": "838c1d62c522b9de73214a039b518153"
  },
  {
    "url": "assets/js/29.ec710f8f.js",
    "revision": "0f87eb33bcf8e7f2801c53019d6e1a8f"
  },
  {
    "url": "assets/js/3.a75eac4f.js",
    "revision": "82ec8e772a2b188f68fe09f1b40db894"
  },
  {
    "url": "assets/js/30.192a4762.js",
    "revision": "32ded8f1c5d477245b5faab50cd14835"
  },
  {
    "url": "assets/js/31.754b5a3b.js",
    "revision": "37193ffc1417e310fe750d8aeaa88404"
  },
  {
    "url": "assets/js/32.d4c23998.js",
    "revision": "418e5ca64d6aedccd7f1d3173008eb38"
  },
  {
    "url": "assets/js/33.eff411c2.js",
    "revision": "6613b9955239adc9f66321a064b65390"
  },
  {
    "url": "assets/js/34.d0d82676.js",
    "revision": "aec30703b2f55fd05f52409d44c13dbf"
  },
  {
    "url": "assets/js/35.b0323cb3.js",
    "revision": "6f5c02355e9f02e001a7ba3361662748"
  },
  {
    "url": "assets/js/36.3b285adf.js",
    "revision": "1ac4663ba4095c39e5b377286af4ee04"
  },
  {
    "url": "assets/js/37.2134f7c4.js",
    "revision": "66acfb699201c01bbe72e3b646caf4eb"
  },
  {
    "url": "assets/js/38.ac13d94f.js",
    "revision": "eeb34bcfbe1bc28561de8341368e0fa6"
  },
  {
    "url": "assets/js/39.4c0bef92.js",
    "revision": "a389a7cd1efc5efd8335cfd78e37679f"
  },
  {
    "url": "assets/js/4.889d5303.js",
    "revision": "c6189f8757ca04e42d6438562cc21a98"
  },
  {
    "url": "assets/js/40.0bc31dcd.js",
    "revision": "396033f98e8832090b8d211cbc5cb343"
  },
  {
    "url": "assets/js/41.ffd2a062.js",
    "revision": "0c8e8de51331a993acee3a7f552fe3c3"
  },
  {
    "url": "assets/js/42.c4b014d4.js",
    "revision": "3b7cc4ecb25fdc8e31bd4354a9685aa2"
  },
  {
    "url": "assets/js/43.761d2311.js",
    "revision": "abface3268bd45be2ebcbfcdfccb3600"
  },
  {
    "url": "assets/js/44.a6984957.js",
    "revision": "f5cdca9b0f6c63f0b044e38ed48c1eb5"
  },
  {
    "url": "assets/js/45.5f37d9bb.js",
    "revision": "d67f592ebadfba2267a4b970ee8b1065"
  },
  {
    "url": "assets/js/46.c9ba721c.js",
    "revision": "f60e76aef7fd1b6b692b5137292bbc97"
  },
  {
    "url": "assets/js/47.cfc77dc0.js",
    "revision": "cda21afd91e696a1a15a78ff8e574106"
  },
  {
    "url": "assets/js/48.45b0d1ce.js",
    "revision": "68006d4aee2a2046ef5542b1a925b109"
  },
  {
    "url": "assets/js/49.c3b3ec7d.js",
    "revision": "312b3b52ffdfe753b452d43fa9ce0b5b"
  },
  {
    "url": "assets/js/5.020e6b4a.js",
    "revision": "4a1775d00ad9e2d2a4c9cf3c7338ec1c"
  },
  {
    "url": "assets/js/50.ae73d466.js",
    "revision": "3053b6398fe1cfefff1c3351e8e494cf"
  },
  {
    "url": "assets/js/51.8f580fb7.js",
    "revision": "734bfecf2e6d4313dff8164b864913e3"
  },
  {
    "url": "assets/js/52.421c9b15.js",
    "revision": "ddf869b5009c5a14da7c336d74fa4176"
  },
  {
    "url": "assets/js/53.451ca1fb.js",
    "revision": "a06a1e0a57b254624836b6fb95cb2617"
  },
  {
    "url": "assets/js/54.ea8ee088.js",
    "revision": "fcf694d062b24493426abe12f08863bc"
  },
  {
    "url": "assets/js/55.0fb39370.js",
    "revision": "c2112fd2c36b3647cd1a0a265e8acc52"
  },
  {
    "url": "assets/js/56.6d66443b.js",
    "revision": "5f1eb40b87d9009b386c0ee720f21eae"
  },
  {
    "url": "assets/js/57.db6ec3ea.js",
    "revision": "e5e069baa95738ac2721fa1788274b9e"
  },
  {
    "url": "assets/js/58.2f459109.js",
    "revision": "dcf12c908234fbc50d5dcad61fbe8665"
  },
  {
    "url": "assets/js/59.9c052ddb.js",
    "revision": "bf2a69e41198395c7016f130cb0e9d9d"
  },
  {
    "url": "assets/js/6.47c213d1.js",
    "revision": "0fa3178d691b6f7aee9570c67cf00148"
  },
  {
    "url": "assets/js/60.47b010e5.js",
    "revision": "835e2177b23c406b9a021c5be16ccf8f"
  },
  {
    "url": "assets/js/61.5dffea6d.js",
    "revision": "fae0a390c8d756c28aa512d37eb385b7"
  },
  {
    "url": "assets/js/62.6e7bff9e.js",
    "revision": "88d4e1fb5969cac294d3e6e3eb4d4411"
  },
  {
    "url": "assets/js/63.cb3778d8.js",
    "revision": "dd8a1f1908df4185d86efa63b718e7f5"
  },
  {
    "url": "assets/js/64.5bda3dad.js",
    "revision": "bb4f7900ff827460894d17fddfdf34ce"
  },
  {
    "url": "assets/js/65.64d281ab.js",
    "revision": "6ee32ec17fc0f3f8f34b44842d8143ff"
  },
  {
    "url": "assets/js/66.28a30deb.js",
    "revision": "a6925c63d7de84b5a35d8f488c98f528"
  },
  {
    "url": "assets/js/67.95cbeec8.js",
    "revision": "d83328f65fee7dc1eb93c935bc45a45f"
  },
  {
    "url": "assets/js/68.03b40fa2.js",
    "revision": "4b409bffe73530a620607786ba740186"
  },
  {
    "url": "assets/js/69.d8e91d5b.js",
    "revision": "aee865d929193cd6deed8149c3e9eec3"
  },
  {
    "url": "assets/js/7.3fa58338.js",
    "revision": "a095ca79e8f1389dee9ff0425e9e8737"
  },
  {
    "url": "assets/js/70.dcf5e206.js",
    "revision": "4d670bb746098a5ceb453dc960c07821"
  },
  {
    "url": "assets/js/71.b7b9e98e.js",
    "revision": "78eeac46c5892a6fcd1ae2490b69724b"
  },
  {
    "url": "assets/js/72.d62a6907.js",
    "revision": "87d69d0e4d1e35e7036989b3304eb3a0"
  },
  {
    "url": "assets/js/73.35d000ee.js",
    "revision": "2c45abd8dc058d738f905742240981b2"
  },
  {
    "url": "assets/js/74.3a175386.js",
    "revision": "7807ea2aa36f9d8a0100f47d9fd92a15"
  },
  {
    "url": "assets/js/75.bb8175a9.js",
    "revision": "632fa8a5688a58d1be47b2deff3adcb7"
  },
  {
    "url": "assets/js/76.3a0caaa3.js",
    "revision": "c2e2b868ea6e76426cdde42080f2b75d"
  },
  {
    "url": "assets/js/77.25e0c811.js",
    "revision": "6ca17fb0613b28b61cebf946c2672a2d"
  },
  {
    "url": "assets/js/78.8141b406.js",
    "revision": "3ad9b9cb26ad1e485c3fb1a1ae448385"
  },
  {
    "url": "assets/js/79.b7c5a4fe.js",
    "revision": "ea3f8655612c7e92dea7875de842e210"
  },
  {
    "url": "assets/js/8.f3ed4154.js",
    "revision": "e66a4d49e14be13b7934d6893236b860"
  },
  {
    "url": "assets/js/80.85c24fa5.js",
    "revision": "d9e7a748f2814833f6cf456a291eff57"
  },
  {
    "url": "assets/js/81.68b80f31.js",
    "revision": "4fc5067f3859d8a626ce160560219523"
  },
  {
    "url": "assets/js/82.20554702.js",
    "revision": "3e727e58e91ce6e32ad181157772fbb9"
  },
  {
    "url": "assets/js/83.208deffb.js",
    "revision": "fdd29a114083f6ea56a9792ae8f9cc6f"
  },
  {
    "url": "assets/js/84.08790d27.js",
    "revision": "b5616fc8b06124fddbaaffb148a6f442"
  },
  {
    "url": "assets/js/85.ee296bb0.js",
    "revision": "ed01de4441501f871ef0e43e46c39187"
  },
  {
    "url": "assets/js/86.86bdbe71.js",
    "revision": "3997196e12ab2f019138775ec5d4a95f"
  },
  {
    "url": "assets/js/87.99d7fd78.js",
    "revision": "32f7434752fe4303aac3f56e21cfec82"
  },
  {
    "url": "assets/js/88.34955c07.js",
    "revision": "038cf2b7cd7cb560e310e545e9d3e611"
  },
  {
    "url": "assets/js/89.0cfea839.js",
    "revision": "f403459a930ca6a0046ac242ac429dab"
  },
  {
    "url": "assets/js/9.4d5e8173.js",
    "revision": "e567068fb00260c63c6cd829dbd29290"
  },
  {
    "url": "assets/js/app.04dc58a0.js",
    "revision": "e667b7da2003046ce27057518bffe13d"
  },
  {
    "url": "http-protocol/01/index.html",
    "revision": "8e79c7709c3c3722a196f27a8a9b16c7"
  },
  {
    "url": "http-protocol/02/01.html",
    "revision": "bdcc2de138d5434716e9892c908eb9ca"
  },
  {
    "url": "http-protocol/02/02.html",
    "revision": "21dcc148a3a2a0e5b65a39a9af57db5f"
  },
  {
    "url": "http-protocol/02/03.html",
    "revision": "019bbf0cee47d9492680ff4422229c88"
  },
  {
    "url": "http-protocol/02/04.html",
    "revision": "6b8ba817f75b07f6241faf73c4fbe03f"
  },
  {
    "url": "http-protocol/02/05.html",
    "revision": "81dbb32cb285d8fbf2b5eaab746bcd38"
  },
  {
    "url": "http-protocol/02/06.html",
    "revision": "08c8e86f4d23d70b48e05fe290f54710"
  },
  {
    "url": "http-protocol/02/index.html",
    "revision": "ebd4c613bec136f95d8822a737294123"
  },
  {
    "url": "http-protocol/03/01.html",
    "revision": "d0cd6444b795775795eec705c74eabd8"
  },
  {
    "url": "http-protocol/03/02.html",
    "revision": "2d45c54c29c0a13bce8d5442708e8829"
  },
  {
    "url": "http-protocol/03/03.html",
    "revision": "3b669b9594eb83385f9a365f206e62e2"
  },
  {
    "url": "http-protocol/03/04.html",
    "revision": "b6fd071daaef0a5d12750186e531b897"
  },
  {
    "url": "http-protocol/03/05.html",
    "revision": "2a2b03c53f01e8ddde0397910de5c792"
  },
  {
    "url": "http-protocol/03/06.html",
    "revision": "2f8fff1199db3cfe2babb7d28cdc904d"
  },
  {
    "url": "http-protocol/03/07.html",
    "revision": "810dbe92fd078c4731c2dfdd899cd5f2"
  },
  {
    "url": "http-protocol/03/index.html",
    "revision": "3ac091a9abb00e1220f5b7892f64db2f"
  },
  {
    "url": "http-protocol/04/01.html",
    "revision": "5b395ce24f2c598c40d48e9feff340f8"
  },
  {
    "url": "http-protocol/04/02.html",
    "revision": "c8360ac0a35e9072c757d87b32b059b8"
  },
  {
    "url": "http-protocol/04/03.html",
    "revision": "36119c2856b3be4ae6db9880f2a97b6e"
  },
  {
    "url": "http-protocol/04/04.html",
    "revision": "e660e36009303682e5bfacbf6a17fb56"
  },
  {
    "url": "http-protocol/04/05.html",
    "revision": "c7af0b491ef349b82e836f5ebf7f938d"
  },
  {
    "url": "http-protocol/04/06.html",
    "revision": "bbb57c72378aec0deba44e50a9c51ce3"
  },
  {
    "url": "http-protocol/04/07.html",
    "revision": "d74353f725743eb5df9f13b548c84412"
  },
  {
    "url": "http-protocol/04/08.html",
    "revision": "ba174cf2fb38585a043fe13a0445839c"
  },
  {
    "url": "http-protocol/04/index.html",
    "revision": "7161f4dcec6331f43eb18eeb4ec57fbb"
  },
  {
    "url": "http-protocol/05/01.html",
    "revision": "e0a57e0744301501959fad4c0ca19248"
  },
  {
    "url": "http-protocol/05/02.html",
    "revision": "54656aa90e0161b2d251e76d448a3a2d"
  },
  {
    "url": "http-protocol/05/03.html",
    "revision": "50f374484487d36e6b257f9bbeb1c27a"
  },
  {
    "url": "http-protocol/05/04.html",
    "revision": "1bc34518a774fd784d0f208e0c25b5f4"
  },
  {
    "url": "http-protocol/05/05.html",
    "revision": "b0becd9aa577305cbf0e638d054a06d6"
  },
  {
    "url": "http-protocol/05/06.html",
    "revision": "e17b780a53d2e8737fa6c3abadcfb949"
  },
  {
    "url": "http-protocol/05/07.html",
    "revision": "04b7f9e7fa66bca4bf133fc1796c4fdd"
  },
  {
    "url": "http-protocol/05/index.html",
    "revision": "fbac5315d4350a6c4e94a8e1128f7e45"
  },
  {
    "url": "http-protocol/06/01.html",
    "revision": "4c7a0751225d6a15110f945d49263e5d"
  },
  {
    "url": "http-protocol/06/02.html",
    "revision": "0cb077d572d5113db3fc8d49bef141a7"
  },
  {
    "url": "http-protocol/06/03.html",
    "revision": "6f040132b0f35a8145d8d1395c9fed9f"
  },
  {
    "url": "http-protocol/06/04.html",
    "revision": "949888b0ddaad4be7b189340521dab37"
  },
  {
    "url": "http-protocol/06/index.html",
    "revision": "2eb90555c036c9154fce1b1659e6039a"
  },
  {
    "url": "http-protocol/07/01.html",
    "revision": "e0b311add4df82fdab1f94c8eb0953e7"
  },
  {
    "url": "http-protocol/07/02.html",
    "revision": "59bcaaf700f0d196c739e7a2371162b9"
  },
  {
    "url": "http-protocol/07/03.html",
    "revision": "0436f5675bf59e97640238a3079c0bae"
  },
  {
    "url": "http-protocol/07/04.html",
    "revision": "417bb4bb4272188494820d2d03bc3e2c"
  },
  {
    "url": "http-protocol/07/05.html",
    "revision": "120d3204c572fb7f1feda29c1a53fba0"
  },
  {
    "url": "http-protocol/07/index.html",
    "revision": "389e8ac115fa47cf6c1cb7a68d9f5917"
  },
  {
    "url": "http-protocol/08/index.html",
    "revision": "d8c766d6004cd2bcf1a09e23848038cc"
  },
  {
    "url": "http-protocol/index.html",
    "revision": "7eaa25126ef77f6997c1d970e84093e4"
  },
  {
    "url": "index.html",
    "revision": "64e769babb43c0e99f393449316e4342"
  },
  {
    "url": "mlogo.svg",
    "revision": "ac847ef8c526f385e7288c4808a7b830"
  },
  {
    "url": "monitor-tuning/00.html",
    "revision": "a01d8b0050f8b159b056707d22932013"
  },
  {
    "url": "monitor-tuning/01/01.html",
    "revision": "4415760cea0242a647811cbd429a3607"
  },
  {
    "url": "monitor-tuning/01/02.html",
    "revision": "84e724a0ac5d7b177633d6cacf99fd8c"
  },
  {
    "url": "monitor-tuning/01/03.html",
    "revision": "c6f0a7c33f578e2b49c7ad5943041bef"
  },
  {
    "url": "monitor-tuning/01/04.html",
    "revision": "e287de86733859fc97c2e25bbfacc0de"
  },
  {
    "url": "monitor-tuning/01/05.html",
    "revision": "bff89513ddd2fb8d068ea484c6dc1127"
  },
  {
    "url": "monitor-tuning/01/index.html",
    "revision": "30c86da9afb764ba86507c09ef4083f7"
  },
  {
    "url": "monitor-tuning/02/01.html",
    "revision": "da6e29d64d414652cd8fb9e9be2c18f4"
  },
  {
    "url": "monitor-tuning/02/02.html",
    "revision": "e81340b4ed5856f9d19ae668c3e5c4b2"
  },
  {
    "url": "monitor-tuning/02/index.html",
    "revision": "76f52c370415b3568de6994070219f6e"
  },
  {
    "url": "monitor-tuning/03/01.html",
    "revision": "7f60e12b2fefd712d234ee9d55447850"
  },
  {
    "url": "monitor-tuning/03/02.html",
    "revision": "17ee2c3e3119fc9d6220ba8db7a90717"
  },
  {
    "url": "monitor-tuning/03/index.html",
    "revision": "fe5d14dd9e6bceda2cb07504a3dfd864"
  },
  {
    "url": "monitor-tuning/04/01.html",
    "revision": "998ec8736cb2653e32f7590442350aa0"
  },
  {
    "url": "monitor-tuning/04/02.html",
    "revision": "edbe09e549d20ed12ab18aba0db538da"
  },
  {
    "url": "monitor-tuning/04/03.html",
    "revision": "91336c240e828def9cf5b01f58e3b4d6"
  },
  {
    "url": "monitor-tuning/04/04.html",
    "revision": "caf8d9d4504a81dfcf3d974c38ae096d"
  },
  {
    "url": "monitor-tuning/04/index.html",
    "revision": "f3154d247b6b23c95c9e703778e5627e"
  },
  {
    "url": "monitor-tuning/05/01.html",
    "revision": "c34e7ba9cbd1b07b77194085ebb58492"
  },
  {
    "url": "monitor-tuning/05/02.html",
    "revision": "39aca803ea34c8623751ba6351d97b7a"
  },
  {
    "url": "monitor-tuning/05/03.html",
    "revision": "c154f04c3c0a11e2b062e988d705a753"
  },
  {
    "url": "monitor-tuning/05/04.html",
    "revision": "41ee48e8161e2b0b0f63cfe2018a814f"
  },
  {
    "url": "monitor-tuning/05/index.html",
    "revision": "9767f10455a6a3e653e938350c74590c"
  },
  {
    "url": "monitor-tuning/06/01.html",
    "revision": "aa20d83a4c9270608c97f6c302717c61"
  },
  {
    "url": "monitor-tuning/06/02.html",
    "revision": "f1bde8962510873d7a87a92e77f50b0f"
  },
  {
    "url": "monitor-tuning/06/03.html",
    "revision": "9e7f35116fa703f25a1986d9e6220310"
  },
  {
    "url": "monitor-tuning/06/04.html",
    "revision": "986754bcef13c2a485b2f1d64eee1ee3"
  },
  {
    "url": "monitor-tuning/06/05.html",
    "revision": "43eb1f635af79aedd73f6cc45ce408d5"
  },
  {
    "url": "monitor-tuning/06/index.html",
    "revision": "263f953c3fb2c4d9f8605e01359e8cd9"
  },
  {
    "url": "monitor-tuning/07/01.html",
    "revision": "4f6f0878bf11e16d1eaa65cb0f07a72e"
  },
  {
    "url": "monitor-tuning/07/02.html",
    "revision": "bcb2d7f0892706426d3ae3fa8e618ba7"
  },
  {
    "url": "monitor-tuning/07/03.html",
    "revision": "fb147942e73df5809f203235d056ed9b"
  },
  {
    "url": "monitor-tuning/07/index.html",
    "revision": "5871c7fc51b3fb1956ca8aebef39d5d7"
  },
  {
    "url": "monitor-tuning/index.html",
    "revision": "6ae226a40f1df89f90ecdf79bcac73b8"
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
