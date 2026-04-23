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

    const eventName = "form_submit";
    const eventParams = {
      form_name: "wedding_quote",
      lead_source: "wedding-lp-google-ads",
      page_path: "/thank-you"
    };

    const trackThankYou = () => {
      if (window.__thankYouTracked) {
        return;
      }

      if (typeof window.gtag === "function") {
        window.gtag("event", eventName, eventParams);
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
