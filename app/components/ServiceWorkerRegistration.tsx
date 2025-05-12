"use client";

import { useEffect } from "react";

function ServiceWorkerRegistration() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const registerServiceWorker = async () => {
        try {
          const registration = await navigator.serviceWorker.register(
            "/service-worker.js"
          );
          console.log("Service Worker registered: ", registration);
        } catch (registrationError) {
          console.error(
            "Service Worker registration failed: ",
            registrationError
          );
        }
      };

      window.addEventListener("load", () => {
        registerServiceWorker();
      });
    }
  }, []);

  return null;
}

export default ServiceWorkerRegistration;
