declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function trackConversion(
  conversionId?: string,
  params: Record<string, any> = {},
  redirectUrl?: string
) {
  if (typeof window === "undefined") {
    console.warn("⚠️ trackConversion() called on server — ignored.");
    return false;
  }

  if (typeof window.gtag !== "function") {
    console.warn("⚠️ gtag not initialized yet — event not sent.");
    return false;
  }

  try {
    const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-17637526458";
    const defaultConversion =
      process.env.NEXT_PUBLIC_GOOGLE_CONVERSION_ID || "bBWACITKxqobELqXndpB";

    const sendTo = conversionId || `${adsId}/${defaultConversion}`;

    const callback = () => {
      if (redirectUrl) window.location.href = redirectUrl;
    };

    window.gtag("event", "conversion", {
      send_to: sendTo,
      event_callback: callback,
      ...params,
    });

    console.log("✅ Conversion sent to:", sendTo, params);
    return true;
  } catch (error) {
    console.error("❌ Failed to track conversion:", error);
    return false;
  }
}
