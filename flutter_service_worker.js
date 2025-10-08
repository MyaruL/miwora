'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "19d7fbf1fc165e5741ce9aac0e3e6444",
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
"flutter_bootstrap.js": "d7fb33246e30556f996008eaed53e549",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "294d5bb6ca23a910896321bb102c333f",
"/": "294d5bb6ca23a910896321bb102c333f",
"main.dart.js": "6a7af350e2ba5830728c574f77ef8f09",
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
