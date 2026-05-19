/**
 * Tracking helpers — enviam eventos para GA4 e Meta Pixel quando carregados.
 * No-op silencioso quando os scripts não estão presentes (env vazia).
 */

type GtagFn = (
  command: "event" | "config" | "set" | "js",
  eventName: string,
  params?: Record<string, unknown>,
) => void;

type FbqFn = (
  command: "track" | "trackCustom" | "init",
  eventName: string,
  params?: Record<string, unknown>,
) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    fbq?: FbqFn;
    dataLayer?: unknown[];
  }
}

export function trackWhatsAppClick(origin: string): void {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click", { origin });
  }

  if (typeof window.fbq === "function") {
    window.fbq("track", "Contact", { origin });
  }
}
