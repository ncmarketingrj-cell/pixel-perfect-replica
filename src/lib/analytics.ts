// Utility for conversion tracking (Meta Pixel & GA4 / GTM) with UTM preservation.
// STRICT PRIVACY COMPLIANCE: NEVER transmits personal data (name, email, phone, PII).

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
  }
}

export type CtaPosition =
  | "hero"
  | "header"
  | "sobre"
  | "final"
  | "footer"
  | "ecossistema"
  | "metodo"
  | "header_phone"
  | "footer_phone";

export type AnalyticsEvent =
  | "page_view"
  | "cta_click"
  | "form_open"
  | "form_step_complete"
  | "form_validation_error"
  | "generate_lead"
  | "whatsapp_click"
  | "whatsapp_redirect";

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
  eventName: AnalyticsEvent,
  params: Record<string, any> = {}
) {
  if (typeof window === "undefined") return;

  const utms = getUtmParams();
  // Safe sanitized payload: only non-PII operational tags
  const eventPayload = {
    ...params,
    ...utms,
    timestamp: new Date().toISOString(),
  };

  // 1. Google Analytics 4 (GA4) / Google Tag Manager (GTM)
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventPayload);
  } else if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: eventName, ...eventPayload });
  }

  // 2. Meta Pixel (Facebook Ads)
  if (typeof window.fbq === "function") {
    if (eventName === "page_view") {
      window.fbq("track", "PageView");
    } else if (eventName === "generate_lead" || eventName === "whatsapp_redirect") {
      window.fbq("track", "Lead", {
        content_name: "Diagnostico Comercial NC",
        content_category: "Form Lead",
      });
      window.fbq("trackCustom", "generate_lead", eventPayload);
    } else if (eventName === "form_open") {
      window.fbq("trackCustom", "form_open", eventPayload);
    } else if (eventName === "cta_click") {
      window.fbq("trackCustom", "cta_click", eventPayload);
    } else {
      window.fbq("trackCustom", eventName, eventPayload);
    }
  }

  if (import.meta.env.DEV) {
    console.debug(`[Analytics Event] ${eventName}:`, eventPayload);
  }
}
