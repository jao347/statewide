"use client";

import { useEffect, useRef } from "react";
import { APIProvider } from "@vis.gl/react-google-maps";

interface GoogleAddressInputProps {
  value: string;
  onSelect: (place: google.maps.places.PlaceResult) => void;
}

export default function GoogleAddressInput({
  value,
  onSelect,
}: GoogleAddressInputProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    let autocomplete: google.maps.places.Autocomplete | null = null;

    async function initAutocomplete() {
      // Load Google Maps script manually if not present
      if (!window.google?.maps?.places) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = initAutocomplete;
        document.body.appendChild(script);
        return;
      }

      if (inputRef.current && window.google?.maps?.places) {
        autocomplete = new window.google.maps.places.Autocomplete(
          inputRef.current,
          {
            types: ["address"],
            componentRestrictions: { country: "us" },
            fields: ["address_components", "formatted_address", "geometry"],
          }
        );

        autocomplete.addListener("place_changed", () => {
          const place = autocomplete?.getPlace();
          if (place) onSelect(place);
        });

        console.log("✅ Google Autocomplete initialized");
      }
    }

    initAutocomplete();

    return () => {
      if (autocomplete) {
        google.maps.event.clearInstanceListeners(autocomplete);
      }
    };
  }, [onSelect]);

  return (
    <div className="flex flex-col gap-1">
      <input
        ref={inputRef}
        type="text"
        defaultValue={value}
        placeholder="Full Address"
        className="w-full border border-gray-300 rounded-md p-3 text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 h-10"
        required
      />
    </div>
  );
}
