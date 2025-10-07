export function captureUTMs() {
  if (typeof window === "undefined") return;

  const params = new URLSearchParams(window.location.search);
  const utmData: Record<string, string> = {};

  [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "gclid",
  ].forEach(key => {
    const value = params.get(key);
    if (value) utmData[key] = value;
  });

  if (Object.keys(utmData).length > 0) {
    localStorage.setItem("utm_params", JSON.stringify(utmData));
  }
}

export function getUTMs(): Record<string, string> | null {
  if (typeof window === "undefined") return null;
  const data = localStorage.getItem("utm_params");
  return data ? JSON.parse(data) : null;
}
