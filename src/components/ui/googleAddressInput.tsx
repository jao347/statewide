"use client";

import { useState, useRef, useEffect } from "react";
import { APIProvider, useMapsLibrary } from "@vis.gl/react-google-maps";

interface GoogleAddressInputProps {
  value: string;
  onSelect: (place: google.maps.places.PlaceResult) => void;
  placeholder?: string;
  country?: string;
}

export default function GoogleAddressInput({
  value,
  onSelect,
  placeholder = "Enter your address",
  country = "us",
}: GoogleAddressInputProps) {
  const [autocomplete, setAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const places = useMapsLibrary("places");

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options: google.maps.places.AutocompleteOptions = {
      fields: ["geometry", "name", "formatted_address", "address_components"],
      componentRestrictions: { country },
      types: ["address"],
    };

    const instance = new places.Autocomplete(inputRef.current, options);
    setAutocomplete(instance);
  }, [places]);

  useEffect(() => {
    if (!autocomplete) return;
    const listener = autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place) onSelect(place);
    });
    return () => listener.remove();
  }, [autocomplete, onSelect]);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        defaultValue={value}
        className="w-full border border-gray-300 rounded-md p-3 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </APIProvider>
  );
}
