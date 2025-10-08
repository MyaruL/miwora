'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "d6acb6e3dadcf7aeaa939e8465b02608",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ed2fd76c9bd55333489f382dc75192ff",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b365dfb194d479a067b85edb7661be22",
".git/logs/refs/heads/main": "6715c07c26bd6cd41d2fcd470ace71b9",
".git/logs/refs/remotes/origin/main": "0a9ec1dee7f42c0e6560e52140a55ad7",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/03/f3c5a0f7e934ee6c1f8913529c53d0eec0f433": "ad21a64198e1b6437791a2c961fa5d21",
".git/objects/06/82d5893dffc282661e06fe83c98708c8e074a6": "ef7c7247ee2ea39b554db024915b83b5",
".git/objects/06/f15cd7d920470d310a66cdd8eb9e85cb03c8ae": "ed4f1c7e08f5fdbc13741af076dd2e5c",
".git/objects/0e/08534826e7520f1188dd9b0c235fb09d8a36f3": "846ad2a518bcfc74787a48eb01f1387d",
".git/objects/12/e2e0c6ce697c1b4cf9a403a2b8e942d33f4510": "4328155cf8795c5b9de329fff515164e",
".git/objects/19/9fa7c87ca4e639c22a870d6ae8baf4c03beb9c": "4a170b86656c2569611fd83f8b11e2ee",
".git/objects/1a/fd8ce1f4721990edc192c072b7e0ffff8fb138": "7c1da067c41424ef108319d4033fa293",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/23/b4e37a4d1eebe40752b3ed09526903377c67cc": "c7f50129875d1a6e431fd05ddd24bffa",
".git/objects/25/790e59567f339a6f25b807e8b969619f008c9d": "8314a2930f742621598dd5c00764ed90",
".git/objects/28/552a2a11991101a15981e5c0f4311e0a7ec90c": "d2dbdc0ef79371d70ac67200c977891a",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/29/f93f20ecf7a86be9877244259f222480dd1dda": "6dd2848dce23bb946ad61b04898e2563",
".git/objects/2a/3d478807365f612277ea8d74eff719682e791d": "da657b70e194c0b88ab9dacaebcfd3e9",
".git/objects/3a/309d311f95493ec171372e127491de1aa65a2d": "3dbfe463fea00a0238cdec6898280894",
".git/objects/4b/0150064efe40649dacaea8717b20107f565ea0": "21fef54408ed46461a5cf551722eca7a",
".git/objects/4b/d79e74c445278f094ab276ea61eecdda97922a": "c999d22950b53375d638a7d5223a7a6c",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4e/2f160e90b9f63868665f0442d3f136a807a7c1": "601dda79382a098353985688272b578c",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/52/6e721ccb5f30bcf0ee744657b0f2f21ac14613": "7879028e67d46e669fc9a0e5b507377c",
".git/objects/62/7ce7c6185ac01d6b3aa9e02ecf5adb543cba90": "babf0b4d06ee3f94fb8404268d20c6df",
".git/objects/62/d838b46b8cc51a000c50365c4d9532178def1d": "94c92d1af31eb2fe3a7812809c25b8b0",
".git/objects/66/4db12556df2b735917d50abe2f41fa9337e717": "72ccd1f17cb994f84e77a4d83c61e6e6",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/71/f3dd93c1451221a3d42ae22646211221da46dc": "d43974701b14ae362afe501b15019d90",
".git/objects/77/adaed0e1cd627af429d51e123f66cdf00878b2": "77cc067db69f9d86ea71b31403fc2414",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7d/83ac45f4ebc5b7763db62fd7f977c767542d66": "52a8a919bee30a33735467a99fc4b000",
".git/objects/84/d9c6adec3626a4971fc73edac2603cd19d8c01": "6a3a5efcc4399cd62383d52e5182f12d",
".git/objects/87/096feec0516ac33206db827b49865660e551f8": "b6a86bb3f5a65de4e27fdb0770a1d354",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3104ac9680a93b87a23221753845f9894b1297": "7edd55d2d78059514b612fced9a1a2ad",
".git/objects/91/29f8a7f1b52bc8a11d32aa2026308d0b0a18cb": "d720a5f288fe1808a3217ff2490fb927",
".git/objects/91/4387bf7a4d36cb0501c271f4943db599597e0e": "282b5c6c2beddf301d9c1dd7a76d5920",
".git/objects/92/c465e934ecdd9789d2ec7f476a6d1424b6fe84": "61278b167e3d9dcb11f530df5708ac44",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9d/fa4264da0d6edcf05d2b55fda84c8ed157c5f2": "4cfc0822778b157b5a3eece17512f1b4",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/9f/b7424fc5b96b6198343d9bb5f17d4eb9bdfa2b": "054bd3a2d85a77d3f4bf9f13123c56c7",
".git/objects/a4/cd3e6550110663bfe39a0964397028399326e1": "4d64ea14f24b7233967f9565afaaebd9",
".git/objects/ac/3bd6809b379ae11ab883dc22ed00646c128b4f": "c8fecf9fc49d07b0c3d0bf332d24fd31",
".git/objects/ac/be785dd2e1579c0e62cea009b4f50a27cac42c": "a26e0d4f1bff213800309b77662cd6f8",
".git/objects/b1/ccf875cbd4c9c8cc0c0cbca8cb511cc95ee420": "e9fa896615c2bb4a218737c27b571d7e",
".git/objects/b1/f59617286e2b6165d4c5f44892e507d6953b3a": "f520184f41683b40768286c4646ab97b",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/f8e8773dd2c86f29042560d83eff7fb15ed758": "93474a7f3ab6db794d6f775a205cefc3",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d2/4089b6db509ad5333be66529e1063dd91e1036": "842273172cb423639159a3fd214a3b1a",
".git/objects/d4/1902eb4a32bc00f9821663d23dee3c6e4074a7": "e9e298638dcc3a11284557d73b49daad",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/e3/2bd1721c94fbe5689fb4ff105e324efd246b7a": "ccd84f9274d246671869badc0c9b8826",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e5/f9ea841bb6da666d099b7eee35e6cc66666f6e": "f081261f6f4c817d9afd85fbbc7e8410",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/4187523ec7a4260c715f819ad66e2a8d97a443": "6abc3d5dfd0c245c278183d0f03cd84b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/486052b50c6fac7b8b5f7fc9555438a4493099": "44287e8384048d92eb914a85a42a39c2",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/ded73c3d1bf054ff209ec5b5e8832d6e71d76f": "c5653cfa93ca28bb91e0bb5161746d74",
".git/refs/heads/main": "941346c0ff50780e13244634ecc96f56",
".git/refs/remotes/origin/main": "941346c0ff50780e13244634ecc96f56",
"assets/AssetManifest.bin": "19d7fbf1fc165e5741ce9aac0e3e6444",
"assets/AssetManifest.bin.json": "72204b4b81d925fee7aa8d4605e264d5",
"assets/AssetManifest.json": "6e1a036a38ef5c8685b29e5e797b8425",
"assets/assets/fonts/MoreSugar-Regular.ttf": "0c2f66b3377085de6cb3df0ab6c0b333",
"assets/assets/fonts/POPPINS-BOLD.TTF": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/POPPINS-REGULAR.TTF": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/a1.jpeg": "aa318c3c70a9283857decde42e5dfc4e",
"assets/assets/images/a2.jpeg": "17942ec44275ff8bc04aab9ab3551b08",
"assets/assets/images/a3.jpeg": "125f3697c5bda3865be7e0f200efc938",
"assets/assets/images/artkpop.jpeg": "9693a7f8ebb9a9098f6e57e98bcfc002",
"assets/assets/images/bebek.jpeg": "ca7b9ae9c1253446a197a1f124a7acbb",
"assets/assets/images/d1.jpeg": "bc164bb8151e647427b96eec483e36eb",
"assets/assets/images/d2.jpeg": "e8da5ceeb4c44265e159a6cc0d4a5004",
"assets/assets/images/d3.jpeg": "fac0f9381bab02216efc3ba055251627",
"assets/assets/images/d4.jpeg": "ccf01159f6ff68c31301e5cd1204ff56",
"assets/assets/images/k1.jpeg": "d6c14f3f9c9f39e1fe59cf36de098307",
"assets/assets/images/k2.jpeg": "d5fc8e47b46ae0c650fc81e841971bf2",
"assets/assets/images/k3.jpeg": "aac93360340693d4272204a260426fdf",
"assets/assets/images/keyc.jpeg": "3db0c9d33d37455fdbda06c988db1c3c",
"assets/assets/images/miwora.png": "6d006f17f8d2ba843131ab9c03b1de94",
"assets/assets/images/miwora1.png": "eef949b172dc20ac011ea516d05d4388",
"assets/assets/images/miwora2.png": "7f0fb03f949506aaa7881373eeea5d39",
"assets/assets/images/miwora3.png": "744c69ae5d7fcc2a01904a740dea6e15",
"assets/assets/images/porto.jpeg": "54b3f0ba48002ba6492c16d5abb8d798",
"assets/assets/images/s1.jpeg": "b5d348bce36a45b18b2d6b7e4c609d8f",
"assets/assets/images/s2.jpg": "d14152c5b57e771ccff49830a807023a",
"assets/assets/images/s3.jpeg": "795d69ea0eb5632e8d191fc9c77bdddb",
"assets/assets/images/s4.jpg": "88e7c3b1ce203541b281d478d64ce7c1",
"assets/assets/images/s5.jpeg": "5e1e84f16daa9473cac7ca3cd3344c60",
"assets/FontManifest.json": "90c0a452ed375fc99326561b1f3dd569",
"assets/fonts/MaterialIcons-Regular.otf": "708a0a883f03b9adc373c91313edb935",
"assets/NOTICES": "fbc5c0fc82156fb126c88ba6da7cc454",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "58d02aeba19b7d95b0288f822e2a3e20",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f3e806cdb9ce781b698597e5d87fb644",
"/": "f3e806cdb9ce781b698597e5d87fb644",
"main.dart.js": "0c074c5eafedb9771eb9a3b0ae91718c",
"manifest.json": "071630c24bf9e26ea0614eff9c715d01",
"version.json": "6fe036454084ef7a0fef90d4990ef2a8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
