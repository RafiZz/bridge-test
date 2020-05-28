'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "129e45d68192076fd73a8d5b0acbe8ed",
"/": "129e45d68192076fd73a8d5b0acbe8ed",
"main.dart.js": "e477bdbda15b93c36606c4dc3c58cab2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ca5a0d45f8ddcdbba69c7465a5aa4191",
"assets/LICENSE": "0e9aedf5fc421b9182c8c4e790bec560",
"assets/AssetManifest.json": "a6c23403823bbf22fca60d4403cc4e28",
"assets/FontManifest.json": "29fd216e7e1d3f1863d120c395bb90f4",
"assets/packages/sappui/fonts/SFProDisplay-RegularItalic.ttf": "455c86e27c39de3f9d3a21610492f03d",
"assets/packages/sappui/fonts/SFProDisplay-Regular.ttf": "6987bcc482500f459516dc0342836ee5",
"assets/packages/sappui/fonts/SFProDisplay-Bold.ttf": "368636f1b6e330a4806185cdf6bb44bc",
"assets/packages/sappui/assets/icons/search.svg": "3914a437b61e3018756fd5a9a394d980",
"assets/packages/sappui/assets/icons/contact.svg": "324329acd1e14605851e1f8a6a1c1d4b",
"assets/packages/sappui/assets/icons/sign.svg": "3bd896225cb2642e818b648e08601d4f",
"assets/packages/sappui/assets/icons/red_circle_user_verified.svg": "b4c33e96dc0e9fdf967f87b530e78733",
"assets/packages/sappui/assets/icons/cog.svg": "8dcbd4d9034148f8bfc9efb94e295149",
"assets/packages/sappui/assets/icons/red_circle_contact.svg": "9cb3b2f526c56df636248746de188112",
"assets/packages/sappui/assets/icons/empty_file.svg": "c776919260bb54c77c8658a2bc282930",
"assets/packages/sappui/assets/icons/user_add.svg": "086dfd2f6ab850284d4e19c8e9b7db73",
"assets/packages/sappui/assets/icons/right-arrow.svg": "37156b6f22045a2efdb4dea09bfe2edc",
"assets/packages/sappui/assets/icons/chat_outline.svg": "7a928c1274e9790663f0bbe0f8fafb02",
"assets/packages/sappui/assets/icons/user.svg": "adc463b0779b8b758eb79ca65597d0c5",
"assets/packages/sappui/assets/icons/rec_circle_cam.svg": "e74a27fd0edd0ee8c63d2e15ab648947",
"assets/packages/sappui/assets/icons/theme.svg": "1900c0e1b246c6d8a7e3469803d4040c",
"assets/packages/sappui/assets/icons/pinned.svg": "7a894529e9cc5d25a3eddbd300be6b41",
"assets/packages/sappui/assets/icons/file.svg": "29dfaf8fb689b4d532fd366bfd0ae556",
"assets/packages/sappui/assets/icons/trash_bold.svg": "e8700ad357ab039dfa927e1a47535299",
"assets/packages/sappui/assets/icons/lock.svg": "bf06af6eedb3abb10a36a8fe01b8190d",
"assets/packages/sappui/assets/icons/file_text_outline.svg": "8d3330e737d1ce557029191cae1be1b3",
"assets/packages/sappui/assets/icons/server.svg": "4e650389dd0f7498981eb9504595bed9",
"assets/packages/sappui/assets/icons/radio.svg": "09809542821306839422df351bf0042c",
"assets/packages/sappui/assets/icons/user_verified.svg": "6cb5d2b2be6364c29291e68ad571c60d",
"assets/packages/sappui/assets/icons/stop.svg": "92072165795a1c1c578aeb69edf7ed3e",
"assets/packages/sappui/assets/icons/user_outline.svg": "0acc04a1346567794c6e65eacd68950f",
"assets/packages/sappui/assets/icons/plus.svg": "4c731c60ecde8d4c699cdab1f24bb9b9",
"assets/packages/sappui/assets/icons/contact_outline.svg": "f5e9566132373f94a3499fb9819d8594",
"assets/packages/sappui/assets/icons/mic.svg": "082304ae0038a764655c18c6a9d4ee75",
"assets/packages/sappui/assets/icons/volume_x.svg": "3fbd2e7a15f6219cc9399974ba37af6d",
"assets/packages/sappui/assets/icons/paperclip.svg": "67caf9aa9ab03222345065edbda59487",
"assets/packages/sappui/assets/icons/sticker.svg": "04228dae826441efb1e9f4115348b6b2",
"assets/packages/sappui/assets/icons/chat.svg": "b7c9e8014484521eddf244c47316ddfd",
"assets/packages/sappui/assets/icons/send.svg": "95e654b606adf11ea27a20e848704d3b",
"assets/packages/sappui/assets/icons/volume_x_outline.svg": "4406cdbeb4b9186baf1fad60e9f7896c",
"assets/packages/sappui/assets/icons/file_text.svg": "f3c729192902279444a39179f6a9b099",
"assets/packages/sappui/assets/icons/unlock.svg": "e1143acf735d83f8c881286ad1e35114",
"assets/packages/sappui/assets/icons/language.svg": "58f08f984c04e01c5e11d20e7b1806fc",
"assets/packages/sappui/assets/icons/exit.svg": "323cc8165f8de8164eb38c414e798595",
"assets/packages/sappui/assets/icons/pinned_outline.svg": "6f4c3ac72e25725e45aa88d4dc868405",
"assets/packages/sappui/assets/icons/contact_dark_red.svg": "5ddbdbcb4931c89bbfd0e8d7c01eea4c",
"assets/packages/sappui/assets/icons/qr_code.svg": "6455c511f7c73f58d3e71b53f9c564df",
"assets/packages/sappui/assets/icons/arrow-up.svg": "06564b7c0ad8ad6eefaae9e942c1b3e9",
"assets/packages/sappui/assets/icons/trash_outline.svg": "aee40444cd7af89c73489136ae8216f3",
"assets/packages/sappui/assets/icons/lock_outline.svg": "492005fadc1be51fda417808ae347c99",
"assets/packages/sappui/assets/icons/mic_outline.svg": "06282b9dac766e84a8722d9bb82bc0b3",
"assets/packages/sappui/assets/icons/red_circle_mail.svg": "3a26b3f88e19f414805f4afd0b149085",
"assets/packages/sappui/assets/icons/rec_circle_radar.svg": "f9c5194dd7e502bcb0f2089af1c73b41",
"assets/packages/sappui/assets/icons/folder.svg": "235aac8ab2b794156178a532b84bc423",
"assets/packages/sappui/assets/icons/red_circle_lock.svg": "8dfcbe8ebb34a3ff40dd54362a9166b4",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/circle_user.png": "5dd9e169f555d838978e2d62af8c3506",
"assets/assets/images/fire.png": "dd07d592a6f71c23e89e3832ea81a111",
"assets/assets/images/2.0x/circle_user.png": "5dd9e169f555d838978e2d62af8c3506",
"assets/assets/images/2.0x/fire.png": "dd07d592a6f71c23e89e3832ea81a111",
"assets/assets/images/3.0x/circle_user.png": "5dd9e169f555d838978e2d62af8c3506",
"assets/assets/images/3.0x/fire.png": "dd07d592a6f71c23e89e3832ea81a111",
"assets/assets/icons/TNIcon.ttf": "457a35ed3055ab22fde6e302a58b949e",
"assets/assets/fonts/ProximaNova-Light.ttf": "0188899cd3ec92cdcaa4c97ca0c75247",
"assets/assets/fonts/ProximaNova-Bold.ttf": "926a08fb27e3303c7452b0bdd2d5e5ab",
"assets/assets/fonts/ProximaNova-Semibold.ttf": "df8c626474a73ab7a8b511655597c7c4",
"assets/assets/fonts/ProximaNova-Extrabld.ttf": "51563919fd1af7376fac14b1194a8e4e",
"assets/assets/fonts/ProximaNova-Regular.ttf": "7ce6760d17685c466ba04d1b2c63c38b",
"assets/assets/fonts/ProximaNova-Black.ttf": "a0606c5fef28b9e57f501db027063141"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"/",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(CORE);
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
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

