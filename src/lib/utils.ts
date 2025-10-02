import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const DEFAULT_NUMBER = "8887744288";

export function callNow() {
  if (typeof window !== "undefined") {
    window.location.href = `tel:${DEFAULT_NUMBER}`;
  }
}
