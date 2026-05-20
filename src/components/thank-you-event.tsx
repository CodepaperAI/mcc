"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: Record<string, string>
    ) => void;
    __thankYouTracked?: boolean;
  }
}

export default function ThankYouEvent() {
  useEffect(() => {
    let timeoutId: number | undefined;
    let attempts = 0;

    const conversionParams = {
      send_to: "AW-18125449559/9NHBCM63lbAcENfS8cJD"
    };

    const trackThankYou = () => {
      if (window.__thankYouTracked) {
        return;
      }

      if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", conversionParams);
        window.__thankYouTracked = true;
        return;
      }

      attempts += 1;
      if (attempts <= 20) {
        timeoutId = window.setTimeout(trackThankYou, 250);
      }
    };

    trackThankYou();

    return () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  return null;
}
