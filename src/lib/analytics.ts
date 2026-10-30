// Utility for conversion tracking (Meta Pixel & GA4) with UTM parameter preservation
// Prepared for seamless integration without storing or transmitting personal data (PII).

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export type CtaPosition = "hero" | "sobre" | "final" | "header" | "footer";

export function getUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const params = new URLSearchParams(window.location.search);
    const utms: Record<string, string> = {};
    for (const [key, value] of params.entries()) {
      if (key.startsWith("utm_") || key === "src" || key === "ref") {
        utms[key] = value;
      }
    }
    return utms;
  } catch {
    return {};
  }
}

export function trackEvent(
  eventName:
    | "page_view"
    | "cta_click"
    | "form_open"
    | "form_start"
    | "form_validation_error"
    | "whatsapp_redirect",
  params: Record<string, any> = {}
) {
  if (typeof window === "undefined") return;

  const utms = getUtmParams();
  const eventPayload = {
    ...params,
    ...utms,
    timestamp: new Date().toISOString(),
  };

  // Google Analytics 4 / GTM
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventPayload);
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...eventPayload });
  }

  // Meta Pixel (Facebook)
  if (typeof window.fbq === "function") {
    if (eventName === "page_view") {
      window.fbq("track", "PageView");
    } else if (eventName === "whatsapp_redirect") {
      window.fbq("track", "Lead", {
        content_name: "Diagnostico Estrategico",
        content_category: "Form Lead",
      });
    } else {
      window.fbq("trackCustom", eventName, eventPayload);
    }
  }

  if (import.meta.env.DEV) {
    console.debug(`[Analytics Event] ${eventName}:`, eventPayload);
  }
}
