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
    "revision": "920a0fb6f346025d6b0c9304d0267c87"
  },
  {
    "url": "assets/css/0.styles.1e5a53e3.css",
    "revision": "e1675fee86bc6d1e693787c4d261d0d3"
  },
  {
    "url": "assets/img/3table.98bb1ea3.jpg",
    "revision": "98bb1ea3eb55d48dc6391a174bfb4d3d"
  },
  {
    "url": "assets/img/delete.c853dc60.png",
    "revision": "c853dc60c60eef30e1b15d575b4dbe9a"
  },
  {
    "url": "assets/img/get1.85c7acb7.png",
    "revision": "85c7acb7b36b3356abe5716418e99e6b"
  },
  {
    "url": "assets/img/get2.ad32c440.png",
    "revision": "ad32c440ce29f3ee6c6cabc0af6c82b2"
  },
  {
    "url": "assets/img/get3.e3aa0b84.png",
    "revision": "e3aa0b84ca15802d769c1d9d4b25b16f"
  },
  {
    "url": "assets/img/post.6321c044.png",
    "revision": "6321c044efd8535787cc5f5b7cff4f12"
  },
  {
    "url": "assets/img/put.5a5caa24.png",
    "revision": "5a5caa24c5fca8ac1e94d1530d7b7b6e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.89da07d1.js",
    "revision": "567ded55b5ecf06a5ec89928a9414836"
  },
  {
    "url": "assets/js/10.3d3c97ce.js",
    "revision": "86fd54a9b9468e82e289df749a0ba3ab"
  },
  {
    "url": "assets/js/13.23b0e7ce.js",
    "revision": "d3c0266ba68bdf070cff297f0c5009db"
  },
  {
    "url": "assets/js/14.38905ced.js",
    "revision": "11f98910966b665869bd4ddd84acd4de"
  },
  {
    "url": "assets/js/15.3cfbe4cb.js",
    "revision": "c331f6242226113348b13a2e99196c1d"
  },
  {
    "url": "assets/js/16.062027e8.js",
    "revision": "5e15088b1052543c457ac99b8937df6e"
  },
  {
    "url": "assets/js/17.fa9aeaa8.js",
    "revision": "e1e1c4989e3555fcba1f1d2cd520bb4b"
  },
  {
    "url": "assets/js/18.5d2d95fc.js",
    "revision": "3f1ceffc5e826677a6bcd0c4a18755e4"
  },
  {
    "url": "assets/js/19.ae0a40dc.js",
    "revision": "a533ff7eee1fb4577c2ae9eb6ed2359a"
  },
  {
    "url": "assets/js/2.b59035b7.js",
    "revision": "d06c4108d8c9f0a4654c87a0582c81e4"
  },
  {
    "url": "assets/js/20.57449be8.js",
    "revision": "cb6fc23e80a2c2b584c7abf1f60f2747"
  },
  {
    "url": "assets/js/21.b34e2f1a.js",
    "revision": "5051edacfd19d3f1d4dc116f1d14a6fd"
  },
  {
    "url": "assets/js/22.9ced3a47.js",
    "revision": "ad86a51272401b639103c8f988d515c4"
  },
  {
    "url": "assets/js/23.34e4d295.js",
    "revision": "a7f6a3ed4f9f2dd311771ed5a678f35c"
  },
  {
    "url": "assets/js/24.c959a3f2.js",
    "revision": "9602b4d7e4edfda56d72bc6cb7908b3c"
  },
  {
    "url": "assets/js/25.590cc8fc.js",
    "revision": "8535f926ecfd4a0f08d8317a2d8bf578"
  },
  {
    "url": "assets/js/26.ad41f3f5.js",
    "revision": "69c5c687ea9306a29a3f5028b5c49d95"
  },
  {
    "url": "assets/js/27.45757d7f.js",
    "revision": "9da055e8ddbcefecaf6bc91c9af25eb7"
  },
  {
    "url": "assets/js/28.cdd4ca5a.js",
    "revision": "684d6f8f367dac5b51e555f601f59b28"
  },
  {
    "url": "assets/js/29.ccfd7e77.js",
    "revision": "7b07b88a6c4b7483ebcee6f1d7759e2e"
  },
  {
    "url": "assets/js/3.39341a22.js",
    "revision": "c3ca928fb0625cfbb0df863e85a1c7c5"
  },
  {
    "url": "assets/js/30.9f90c4df.js",
    "revision": "f8e736d8bec49914eda174b396f62032"
  },
  {
    "url": "assets/js/31.0608a08b.js",
    "revision": "6ff431f876439132272d7d4422e02b31"
  },
  {
    "url": "assets/js/32.466df834.js",
    "revision": "210c493a5d65c7eaef4308300dc2f4b9"
  },
  {
    "url": "assets/js/33.5e1363ea.js",
    "revision": "cfab702f787ac6543229b5f3cc62c8bb"
  },
  {
    "url": "assets/js/34.7f4ff78f.js",
    "revision": "f2d6abd8b86f3b15b443ef9cca721a77"
  },
  {
    "url": "assets/js/35.bb6536ec.js",
    "revision": "b6d21218fb1b60cf4c792e0478d97c30"
  },
  {
    "url": "assets/js/36.7a3ba8b2.js",
    "revision": "47dbfd573a835188608e390f205696fd"
  },
  {
    "url": "assets/js/37.9e5cfb9c.js",
    "revision": "515adee7eeeb908397862fc1b69db341"
  },
  {
    "url": "assets/js/38.1e2ab512.js",
    "revision": "be345e518ce55328d946e819dc76621a"
  },
  {
    "url": "assets/js/39.44044954.js",
    "revision": "801a27ee9c77093a6979306acbf6c86f"
  },
  {
    "url": "assets/js/4.1efc253c.js",
    "revision": "47a298bb06b167ff08bf5349367fecf2"
  },
  {
    "url": "assets/js/41.e4305d7f.js",
    "revision": "088ea98ae2f8644fa8a1b2851bc8b79a"
  },
  {
    "url": "assets/js/5.ac96ee62.js",
    "revision": "618ba99320475c8bba749a0a771853ef"
  },
  {
    "url": "assets/js/6.f82fa461.js",
    "revision": "dc0de87c18d66075cc1c1badebde188d"
  },
  {
    "url": "assets/js/7.55ef4a79.js",
    "revision": "d6e90f9bff247612b4b6aa99c123c854"
  },
  {
    "url": "assets/js/8.ba305a67.js",
    "revision": "40cb876abd1279d29e924f76048073e4"
  },
  {
    "url": "assets/js/9.747caef5.js",
    "revision": "9471790a37289ad866d6c93125d47e53"
  },
  {
    "url": "assets/js/app.3f58d9d0.js",
    "revision": "83b278242507adcdfe295b41bd5aacdb"
  },
  {
    "url": "assets/js/vendors~docsearch.e3370f81.js",
    "revision": "780850f89105536ab88d23525dc96015"
  },
  {
    "url": "conclusion/index.html",
    "revision": "e5d8b64f9aa1c522b09810bd8d80580f"
  },
  {
    "url": "design/index.html",
    "revision": "37a809f7beb52f8744965e8f81cfe29a"
  },
  {
    "url": "index.html",
    "revision": "ae08de9b3534e61ac94381a2fd16c5bc"
  },
  {
    "url": "intro/index.html",
    "revision": "8bdac4336da259f2ba23a4ebf8f3d1fe"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "ca2c5848304710954ccc2fb404131804"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "4371dc90837974300946332d2f47cf68"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "d92a5da9be5691463524b6ce10656f12"
  },
  {
    "url": "software/index.html",
    "revision": "2710d188506bf91ce55a282cbf63b9e3"
  },
  {
    "url": "test/index.html",
    "revision": "a39fcfdf6e31ac6095ed7389f173f7cc"
  },
  {
    "url": "use cases/index.html",
    "revision": "0b50fa49e2fa80624b94fab273cc5e5a"
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
