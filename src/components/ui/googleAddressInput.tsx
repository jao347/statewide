"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface GoogleAddressInputProps {
  value: string;
  onSelect: (place: google.maps.places.PlaceResult) => void;
  country?: string; // optional, default 'us'
  placeholder?: string;
}

export default function GoogleAddressInput({
  value,
  onSelect,
  country = "us",
  placeholder = "Full Address",
}: GoogleAddressInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);

  const loadGoogleMapsScript = useCallback(() => {
    if (window.google?.maps?.places) {
      setIsLoaded(true);
      return;
    }

    const existingScript = document.getElementById("google-maps-script");
    if (existingScript) {
      existingScript.addEventListener("load", () => setIsLoaded(true));
      return;
    }

    const script = document.createElement("script");
    script.id = "google-maps-script";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => setIsLoaded(true);
    document.body.appendChild(script);
  }, []);

  /** Initialize Autocomplete once script is ready */
  useEffect(() => {
    if (!isLoaded || !inputRef.current || !window.google?.maps?.places) return;

    const ac = new window.google.maps.places.Autocomplete(inputRef.current, {
      types: ["address"],
      componentRestrictions: { country },
      fields: ["address_components", "formatted_address", "geometry"],
    });

    ac.addListener("place_changed", () => {
      const place = ac.getPlace();
      if (place) onSelect(place);
    });

    setAutocomplete(ac);

    return () => {
      if (ac) google.maps.event.clearInstanceListeners(ac);
    };
  }, [isLoaded, country, onSelect]);

  return (
    <div className="flex flex-col gap-1">
      <input
        ref={inputRef}
        type="text"
        defaultValue={value}
        placeholder={placeholder}
        onFocus={loadGoogleMapsScript}
        className="w-full border border-gray-300 rounded-md p-3 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
      />
    </div>
  );
}
