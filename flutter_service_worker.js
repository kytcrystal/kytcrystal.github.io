'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "f393d3c16b631f36852323de8e583132",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "ace26d0c71a6ddf01f5f72671a426a89",
"index.html": "43c46ab136aecb16f81746e9db76c64e",
"/": "43c46ab136aecb16f81746e9db76c64e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "12d7e1ddcaa470ea5e68560bad843ac4",
"assets/assets/media/projects/thesis_flowchart.png": "4a4fb3168d39e253a85b4294dfb5493f",
"assets/assets/media/projects/rtbdp_frontend.png": "2b12989f7e4a6c0df2ed474f879064fd",
"assets/assets/media/projects/microservice_architecture.png": "18344788093a9eaafd8fd981574874e6",
"assets/assets/media/about_me/nus.png": "0dc3a5cc613dfce874da7e8553de29e9",
"assets/assets/media/about_me/nanyang.png": "f6965b901d5e6610c21ddf9c73d81f84",
"assets/assets/media/about_me/iras.png": "f515822c6208475722cdb5e357138dca",
"assets/assets/media/about_me/noi.png": "ec1e2d8196b2ed8f57512631df1a7d40",
"assets/assets/media/about_me/hwachong.png": "ddc1fdf764bd8a52294652a923349d2a",
"assets/assets/media/about_me/unibz.png": "3cbd113339a44aaff2ebc78884e71284",
"assets/assets/media/about_me/lta.png": "f665fbb5fdae2bd9d779bc6fd63cbe66",
"assets/assets/media/about_me/jgc.png": "1a65a3506355d74c1b402de11cf2cbb2",
"assets/assets/media/about_me/profile.png": "51efce0e7664191b0c5e1d4ebfa16875",
"assets/assets/media/about_me/accenture.png": "39ef6c059cac1cda346e583fa6c7ec34",
"assets/assets/media/about_me/crystalkwok.jpg": "bcbd37c5a21d901ef215b1ad55569164",
"assets/assets/media/post/250409_second_version.png": "ee3a0255bfc611269dee5fdfb7bcc9c2",
"assets/assets/media/post/250409_first_version.png": "13a270a5355e88beb8c82319412e012d",
"assets/assets/media/post/250403_four_quadrant_todo.png": "ac9d911727508a813da17f40cf3638eb",
"assets/assets/media/post/250501_back_to_running.png": "e9527ef1def23e10bbc1e28e5466d5a2",
"assets/assets/fonts/times/times.ttf": "fcb8965acd0e90c50138958a2a7e0421",
"assets/assets/blog_posts/progressive-workouts.md": "0547e980f32dd4504b31df2ffd34d194",
"assets/assets/blog_posts/dealing-with-dependencies.md": "a93561b47cb3619be4049245bb005e38",
"assets/assets/blog_posts/xp2025_reflections.md": "a655db663f720d535b7b07dbc5aa6518",
"assets/assets/blog_posts/interesting-way-of-using-ai.md": "4357b8fef128b6c42d19faecb4883c07",
"assets/assets/blog_posts/posts_index.json": "c250aac9d83aeb5a44f9f09fb9420551",
"assets/assets/blog_posts/importance-of-planning.md": "1a40da57c287509f36dbee6fab45ec4d",
"assets/fonts/MaterialIcons-Regular.otf": "2247d490ce4e3e7afdd66282ddb078ff",
"assets/NOTICES": "c64df4cb0a2dcb177d5a222b82a17cda",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/pdfs/xp_2025_notes.pdf": "f314524ddc8f1bbf27f15ed830a8b61c",
"assets/FontManifest.json": "a3b0e0948118cc463730b20c7b38f6c3",
"assets/AssetManifest.bin": "2b7f398eef7acd32ce046de5022b2599",
"assets/AssetManifest.json": "2d473f0857cc8715f78efe53a412f841",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"favicon.png": "28220c9b52b9aa816abe9a3824c666b7",
"flutter_bootstrap.js": "2a2037e70c6edf57165606e14ebfa932",
"version.json": "36d1e650ed1e41b6486786b5da0f6f51",
"main.dart.js": "64229852242060e412f57cdcedba4aab"};
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
