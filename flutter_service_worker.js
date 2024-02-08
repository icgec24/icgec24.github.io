'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "32c6752de5f90590e4d8b46794852cfa",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fbe0d36e9c83cb62df4288c97b974a09",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c565547ee7a5185526e49d5112c4f34c",
".git/logs/refs/heads/main": "e2092fe8d4239a4900e63051f55b034b",
".git/logs/refs/remotes/origin/main": "ca9944973854f6ca33d5a9807f278aa8",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/1b/f662e80d9b344de1921cacf5594e7cb186dd81": "edebae00a794b670c5e02ad63abb8e92",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/da877303c5b3a60996f00cf20714af2bdeb2f4": "755d9187229bfc7e0d889ba7ec49cd48",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/48a5f2b7e56e95ef27fff1093ad8c0ee3d8742": "0ee55252048ab18ae827e27c58d5c671",
".git/objects/2f/eda500a3b449f383472a85697ec2e11bbd8936": "3594e8a10ab85cc417e79d039ac40405",
".git/objects/32/1ddfbd3c35e4097058fadbfabd1f9e512b7011": "3970020573795288a466cc69c51a37d4",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/42/24bc9203bdb75f5c8ed7144d7e0dc58e3c9ca2": "00dfe31ed195dc7c7f2d6833b41445e1",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/1b03043bc686efe77a9146c0de660a2fb95bbf": "c2492f5a881f73daacda1b8c95d55f02",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/bc64d040240d4d0415de2baae55b8d08c45daa": "219aa42e91a03ae742df953e7330de1d",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/bc029451008784ea63ecc68a40d2db66d8c8ee": "02ce4af5748786beefef68eaacd20d4a",
".git/objects/5e/05e25a36119060ddcf9d32c2c92833b23ea2de": "4db8d082dd8515a711164e5de902d7e0",
".git/objects/60/d599dd05b3df64214fe20e2cd989ce1db374ab": "3a8de94fb41e5d25be3893e2710728ee",
".git/objects/68/4ebd569fbeb890b1d8d3ce73cfdf3bb4d78022": "5426d825b86be5392670df2e71e30aa0",
".git/objects/6f/cfd2c2ff99c52c5e7fccfc4516d3bbef225a4a": "41e46c4a0b5539c4fb6ece6112509ca9",
".git/objects/72/7c3cb721dd33abd674a8f166628de3f7617646": "f9e1694120b51f1cd6c02d79fc667ab7",
".git/objects/7a/57d75f87e3269a7d961247a544ea281c461cf3": "d0cf2244f80a470836486b08818297f8",
".git/objects/7d/043ba4a6dac3e54688ef20a7aac45a024be976": "e2775d80ce14d936b94f578d39e4ce18",
".git/objects/7d/100c16b1d986aaf5df660dd1c63763a3e62faf": "acee2e0b724e241becfe3879e1ca1c25",
".git/objects/82/f74dd2edf8303fde29ef60a4af9d20a32bf020": "4178dabcb6f97cd9dbf1b89ee5daa188",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/8f417ff2b42f09d1d4aebbec2cab21650c188f": "839bc75fd375a9281e248b1f37a022a9",
".git/objects/8d/a482349df073758b1ca15bf08d9cba2b71b1a2": "efe79f7e05c065eaaa026b5eec65ee5a",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/95/eef67c5c51ae268d8373100c27c40b2d997fe3": "6aec8692e68ae308aa750d042a70383d",
".git/objects/97/b6eee463de5e4fcf79c6570e4173f50eca81d5": "b58977ec52e0607f13c5710fd432ef21",
".git/objects/a4/c9b3c5025af7574018bb450ad5afcf068ef81e": "f841e0f63f10e452b425ae1d2a590533",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bd/660f85599e4a531d6fe80ee17037b6ffdd07d0": "1f87a847167ec79b8eb44123aebedc56",
".git/objects/d0/f1a6d0303958c6e74438b179ec647e38571554": "993583cea1113485f119d714073bb208",
".git/objects/d6/400c05df1665f307027fb0417ef90ce3389c61": "8388866f49f5e6be984691b0e578413d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/e0/94cf7a28eac668bd98b5cc8ea0af1646cff47a": "3de2ec81c746c2b96fef2137c3e70049",
".git/objects/e0/c3af421279b0ba8a718c8be48aa1cce450d961": "1962ec581294c3462bbb3b41822f47ac",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e6/d1d7307238bbbd8c01073cced9b6f4789421c3": "e045ab76f3caddc1ed07d9b1ed1ae2cc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/5b533415783cc252b4af138fd00a704a8c2ad3": "6657e74d6a7bf310f13d2ade362add84",
".git/objects/f5/f914cfbda4c3cac73f43858842deb0e7de5310": "e6a47308dacd9fa969573f43966f6cec",
".git/objects/f6/1bad7820ba7f7e3d095e8b0dfc6596bdfb26dc": "2dc40de51ec426cc251b71a8d4b0d599",
".git/objects/f8/344880a1a8e716cec5f5974e1fde40889c0649": "3204868069b7f62bb4c6b95e16d9d722",
".git/objects/fd/204ec57069a97fdf5ac3ab3bdc2f672c80c20d": "ec3bc34c7a069981f5d6b76fa2b1454e",
".git/refs/heads/main": "eeae9512edd34afaf934656e70ef8050",
".git/refs/remotes/origin/main": "eeae9512edd34afaf934656e70ef8050",
"assets/AssetManifest.bin": "1f44ff12d628db1e96a12d2350b2fec1",
"assets/AssetManifest.bin.json": "3f6774d93bb40d250308b9cc96aa3679",
"assets/AssetManifest.json": "2e44aab91baa1a2cf395e7f8fa070b5f",
"assets/assets/images/aoshima1.jpg": "5b7ec77432bb3a6f430e3bb6c28bc9e4",
"assets/assets/images/matsurihanabi.jpg": "cd26a29be77fadfef08b23245028f0dc",
"assets/assets/images/miyazaki19.jpg": "fdbf4ba188d4aca40e6381a3c7ff3ef9",
"assets/assets/images/miyazaki_202009.jpg": "14a984c96c78f0eb7e70e9a00d094aef",
"assets/assets/images/miyazaki_kentyou_01.jpg": "7aa32d8366a1188896e798b791168b2e",
"assets/assets/images/nichinan_202029.jpg": "8ee87b54e5da16655aece3e50ceba974",
"assets/assets/images/r_kodomonokuni_2022_03.jpg": "f36607597659c4e0e6f0eff80a030e25",
"assets/assets/images/udojingu_03.jpg": "241192a37a25c6640a9c489d3bf9a2fd",
"assets/assets/pdf/call_for_paper.pdf": "02206212e41fc48a19c94814972c628b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6f74526e4f688bcb271f8931091a7ba0",
"assets/NOTICES": "c37c47246c033ea9570af66dc563793e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "54b735e6f04ef3172f0ab2b2cbcef814",
"/": "54b735e6f04ef3172f0ab2b2cbcef814",
"main.dart.js": "9365b7ac668bb0a981c46e2f6406d2f4",
"manifest.json": "e843167973bcba28b8acda3dd282038b",
"version.json": "d0ae970d4837dae28bedd048fa5487c1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
