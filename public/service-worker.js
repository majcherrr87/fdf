const CACHE_NAME = "fdf-cache-v1"; // Nazwij swój cache
const urlsToCache = [
  "/",
  "/manifest.json",
  "/favicon.ico",
  "/globals.css",
  // Dodaj inne statyczne zasoby, które chcesz cache'ować
  "/web-app-manifest-192x192.png",
  "/web-app-manifest-512x512.png",
];

// Instalacja Service Workera
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Otwarto cache", CACHE_NAME);
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error("Błąd podczas dodawania do cache", error);
      })
  );
});

// Obsługa żądań fetch
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Zwróć z cache, jeśli znaleziono
      if (response) {
        return response;
      }

      // W przeciwnym razie, pobierz z sieci
      return fetch(event.request).then((response) => {
        // Sprawdź, czy odpowiedź jest poprawna
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        // Sklonuj odpowiedź (bo jest Stream)
        const responseToCache = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});

// Aktywacja Service Workera
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
