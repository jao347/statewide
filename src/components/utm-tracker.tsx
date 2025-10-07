"use client";

import { useEffect } from "react";
import { captureUTMs } from "@/lib/utm";

export default function UTMTracker() {
  useEffect(() => {
    captureUTMs();
  }, []);

  return null;
}
