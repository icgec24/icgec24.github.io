'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"android-chrome-192x192.png": "4ed69957143063a4538f6d3a1680e51a",
"android-chrome-512x512.png": "b9b745a6da8db43a9e3875b83839a80b",
"apple-touch-icon.png": "9d4885bd5f33f64ffd7d36f714e18ccf",
"assets/AssetManifest.bin": "7c1ecf1f4e56716258af5cb0d91a1c7b",
"assets/AssetManifest.bin.json": "58a8cf9e2cff53aa928de1e0623d0d7f",
"assets/AssetManifest.json": "32c1306e7b54ca5d3387dfb632b5c9a2",
"assets/assets/datas/LaTex_Package.zip": "1da76a0e29eebe12bf8c44fcabe55823",
"assets/assets/datas/sitemap.xml": "330d2ffb78f888d0620d14f56d1eb1ff",
"assets/assets/datas/Word_Template.zip": "3f5cf55d4bc99bde2c366aa64b74f515",
"assets/assets/images/aoshima1.jpg": "5b7ec77432bb3a6f430e3bb6c28bc9e4",
"assets/assets/images/conference_registration_fee.PNG": "dc01c4d11385e38f92c71b4a29c01d0f",
"assets/assets/images/jeng_shyang_pan.jpg": "75e3403f1c3baa1198506af86c1bd1ba",
"assets/assets/images/matsurihanabi.jpg": "cd26a29be77fadfef08b23245028f0dc",
"assets/assets/images/miyazaki19.jpg": "fdbf4ba188d4aca40e6381a3c7ff3ef9",
"assets/assets/images/miyazaki_202009.jpg": "14a984c96c78f0eb7e70e9a00d094aef",
"assets/assets/images/miyazaki_kentyou_01.jpg": "7aa32d8366a1188896e798b791168b2e",
"assets/assets/images/ms_site_setting-sitelogo_navtop-1872.png": "b263419c13380384b0745b4dafd4d270",
"assets/assets/images/nichinan_202029.jpg": "8ee87b54e5da16655aece3e50ceba974",
"assets/assets/images/NKUST.png": "2228816143979a4fb7029407331770e2",
"assets/assets/images/Osaka%2520Metropolitan%2520University.svg": "54402120e2135a0d830e84fed8a7602b",
"assets/assets/images/PSU_Official_Color.png": "36344bee54d4d1961f926435c71d0030",
"assets/assets/images/Shandong_University_of_Science_and_Technology_logo.png": "f3b65a0291eb6742783821ae66143775",
"assets/assets/images/springer-logo-transparent.png": "bf877eaaadd9a9c04d44c253f853019a",
"assets/assets/images/tsuyomu_ikenoue.png": "5ce3c11750c2c2923fa57023db426161",
"assets/assets/images/udojingu_03.jpg": "241192a37a25c6640a9c489d3bf9a2fd",
"assets/assets/images/UOM.png": "82e2cd1947949f0e8ecdcaf7d8136cb7",
"assets/assets/images/Vellore_Institute_of_Technology_seal_2017.png": "9281ce993d11709424cddd4d345f8e19",
"assets/assets/lottie_animation/coming_soon.gif": "6daa2ba15cefffed917eb6dedb58df73",
"assets/assets/pdf/AccesstoMiyazaki.pdf": "7b60d595a60dc8d61d90457baf4cd8a1",
"assets/assets/pdf/CallforPaper.pdf": "ab75ad7e9a1343a72a7d2ff9587f4c7f",
"assets/assets/pdf/ICGEC-2024-Copyright_Form.docx": "463f8bd7b89a7e21834404799c7b4cb2",
"assets/assets/pdf/ICGEC-2024-IS-CFP-template.docx": "e1cf5605e2f4b8087789b7519138385b",
"assets/assets/pdf/ICGEC-2024-Registration_Form.doc": "ac8507483f4cc915b34ef273b6054010",
"assets/assets/pdf/ICGEC-2024-SS-CFP-template.docx": "da3c9b28c36c72dcc9f8f67fd574fcb9",
"assets/assets/pdf/ICGEC-2024-SS01-CFP.pdf": "2172e085145920ef7570b4bbfc544913",
"assets/assets/pdf/ICGEC-2024-SS02-CFP.pdf": "dc31b852ac2a53e6e18379aeccd5417c",
"assets/assets/pdf/ICGEC-2024-SS03-CFP.pdf": "50498927617693ea95a6a202e90f7073",
"assets/assets/pdf/ICGEC-2024-SS04-CFP.pdf": "e06c4f90938f406ce386450b9aaeec82",
"assets/assets/pdf/ICGEC-2024-SS05-CFP.pdf": "27cc6051b29ed3cfad588c7474ca7134",
"assets/assets/pdf/ICGEC-2024-SS06-CFP.pdf": "dceaddbf4f90f7ab4fb2c51022295f9e",
"assets/assets/pdf/ICGEC-2024-SS07-CFP.pdf": "7d6e1a77ad5cc68ed068ed0ce326b053",
"assets/assets/pdf/ICGEC-2024-SS08-CFP.pdf": "1efc64ea2fe7429bc7214ecc5eec73ca",
"assets/assets/pdf/ICGEC-2024-SS09-CFP.pdf": "c07d69a4ccbe6be296de605a3afcd902",
"assets/assets/pdf/ICGEC2024_Accepted_Paper.pdf": "3a6ed5a6fb2c7529569f314257ad0d05",
"assets/assets/pdf/ICGEC2024_Conference_Program.pdf": "d49d351cf79951ffe3ae198dac391371",
"assets/assets/pdf/Paper-submission-guideline-for-ICGCE-2024.pdf": "f2b4e6e894fc305b7ffc3d0e870af3c9",
"assets/assets/pdf/poster-template-ICGEC2024.pptx": "08f95ef39f07409a811fef175621a3cd",
"assets/assets/pdf/Visa-application-form_ICGEC2024.docx": "4dcda269875a1cf1de0d333eabfff82e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "23874a98002e693186d655c05b38c92f",
"assets/NOTICES": "43a95834cfa0fb9fdaffeba9610fd90d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/syncfusion_flutter_pdfviewer/assets/highlight.png": "7384946432b51b56b0990dca1a735169",
"assets/packages/syncfusion_flutter_pdfviewer/assets/squiggly.png": "c9602bfd4aa99590ca66ce212099885f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/strikethrough.png": "cb39da11cd936bd01d1c5a911e429799",
"assets/packages/syncfusion_flutter_pdfviewer/assets/underline.png": "c94a4441e753e4744e2857f0c4359bf0",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon-16x16.png": "856327429d9ee555dab8af1e74a0f8ef",
"favicon-32x32.png": "afe4207be0838046e1cd7b37145236d9",
"favicon.ico": "5b37cb3b0841e05a765f52dd03a507cf",
"favicon.png": "6a1ba0fa8ff9641f7220ba8a8f68f4f6",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "5a23a0fbee69fc561751563d1d14d488",
"google5fcc2479959944ed.html": "eca43ce9eaff169bbf12f21d662e4bee",
"icons/android-chrome-192x192.png": "4ed69957143063a4538f6d3a1680e51a",
"icons/android-chrome-512x512.png": "b9b745a6da8db43a9e3875b83839a80b",
"icons/apple-touch-icon.png": "9d4885bd5f33f64ffd7d36f714e18ccf",
"icons/favicon-16x16.png": "856327429d9ee555dab8af1e74a0f8ef",
"icons/favicon-32x32.png": "afe4207be0838046e1cd7b37145236d9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "771ff9729c775538d05a851bacb2e58b",
"/": "771ff9729c775538d05a851bacb2e58b",
"main.dart.js": "7d93b215bdc9ff20ee754fe3faf7dcb5",
"manifest.json": "9dade1e6089f70a04fcafed11e91567a",
"robots.txt": "5a0fae405071279dace671919e34f0be",
"site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"sitemap.xml": "330d2ffb78f888d0620d14f56d1eb1ff",
"version.json": "d0ae970d4837dae28bedd048fa5487c1"};
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
