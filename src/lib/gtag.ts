declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function trackConversion(
  url?: string,
  sendTo: string = `${
    process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-17637526458"
  }/${process.env.NEXT_PUBLIC_GOOGLE_CONVERSION_ID || "bBWACITKxqobELqXndpB"}`,
  params: Record<string, any> = {}
) {
  if (typeof window === "undefined") {
    console.warn("trackConversion() called on server — ignored.");
    return false;
  }

  if (typeof window.gtag !== "function") {
    console.warn("⚠️ gtag not initialized yet — event not sent.");
    return false;
  }

  try {
    const callback = () => {
      if (url) {
        window.location.href = url;
      }
    };

    window.gtag("event", "conversion", {
      send_to: sendTo,
      event_callback: callback,
      ...params,
    });

    return true;
  } catch (error) {
    console.error("❌ Failed to track conversion:", error);
    return false;
  }
}
