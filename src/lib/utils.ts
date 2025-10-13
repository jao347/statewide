import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { trackConversion } from "@/lib/gtag";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const DEFAULT_NUMBER = "8887744288";

export function callNow() {
  if (typeof window === "undefined") return;

  try {
    trackConversion(
      `${process.env.NEXT_PUBLIC_GOOGLE_TAG_ID}/${process.env.NEXT_PUBLIC_GOOGLE_CONVERSION_ID}`,
      {
        value: 1.0,
        currency: "USD",
        event_label: "Phone Call",
      }
    );

    window.location.href = `tel:${DEFAULT_NUMBER}`;
  } catch (error) {
    console.error("❌ Failed to trigger call conversion:", error);
    window.location.href = `tel:${DEFAULT_NUMBER}`;
  }
}
