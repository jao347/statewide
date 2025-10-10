"use client";

/// <reference types="@types/google.maps" />

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem } from "@/components/ui/select";
import { getUTMs } from "@/lib/utm";
import { trackConversion } from "@/lib/gtag";
import { Loader } from "@googlemaps/js-api-loader";

interface ContactFormProps {
  title?: string;
  className?: string;
}

export default function ContactForm({
  title = "GET SUPPORT OR SCHEDULE A SERVICE WITH STATE WIDE CHIMNEY",
  className = "",
}: ContactFormProps) {
  const searchParams = useSearchParams();
  const defaultService = searchParams.get("service") || "chimney-cleaning";

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    fullAddress: "",
    zip: "",
    service: defaultService,
    message: "",
  });

  const [utmData, setUtmData] = useState<Record<string, string> | null>(null);
  const [loading, setLoading] = useState(false);
  const [autocompleteError, setAutocompleteError] = useState(false);

  const fullNameRef = useRef<HTMLInputElement | null>(null);
  const addressRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    (window as any).focusFullNameInput = () => {
      fullNameRef.current?.focus();
    };
  }, []);

  useEffect(() => {
    const data = getUTMs();
    if (data) setUtmData(data);
  }, []);

  useEffect(() => {
    setFormData(prev => ({ ...prev, service: defaultService }));
  }, [defaultService]);

  useEffect(() => {
    if (!addressRef.current) return;

    const initAutocomplete = async () => {
      try {
        // ✅ Load Maps dynamically using new functional API
        (await window.google?.maps?.importLibrary?.("places")) ??
          new Promise<void>((resolve, reject) => {
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
            script.async = true;
            script.defer = true;
            script.onload = () => resolve();
            script.onerror = () =>
              reject(new Error("Google Maps failed to load"));
            document.body.appendChild(script);
          });

        // ✅ Initialize Autocomplete
        if (window.google?.maps?.places && addressRef.current) {
          const autocomplete = new window.google.maps.places.Autocomplete(
            addressRef.current,
            {
              types: ["address"],
              componentRestrictions: { country: "us" },
            }
          );

          autocomplete.addListener("place_changed", () => {
            const place = autocomplete.getPlace();
            if (!place.address_components) return;

            const zipComponent = place.address_components.find(
              (c: google.maps.GeocoderAddressComponent) =>
                c.types.includes("postal_code")
            );
            const zip = zipComponent ? zipComponent.long_name : "";

            setFormData(prev => ({
              ...prev,
              fullAddress: place.formatted_address || "",
              zip,
            }));
          });

          console.log(
            "✅ Google Autocomplete initialized successfully (new API)"
          );
        }
      } catch (error) {
        console.error("❌ Google Autocomplete failed:", error);
        setAutocompleteError(true);
      }
    };

    initAutocomplete();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.email) {
      alert("⚠️ Please fill out all required fields (Name, Phone, Email).");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        ...formData,
        utms: {
          ...(utmData || {}),
          source: window?.location?.hostname.replace(/^www\./, ""),
        },
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        alert("✅ Thank you! Your request has been sent successfully.");

        trackConversion(
          undefined,
          process.env.NEXT_PUBLIC_GOOGLE_CONVERSION_ID!,
          {
            value: 1.0,
            currency: "USD",
            event_label: formData.service,
          }
        );

        setFormData({
          fullName: "",
          phone: "",
          email: "",
          fullAddress: "",
          zip: "",
          service: "chimney-cleaning",
          message: "",
        });
      } else {
        alert(`❌ Failed to send: ${data.error || "Please try again."}`);
      }
    } catch (error) {
      console.error("❌ Submission error:", error);
      alert("❌ An unexpected error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-2 ${className}`}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-8">{title}</h2>

      <Input
        ref={fullNameRef}
        type="text"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
        required
      />

      <Input
        type="tel"
        placeholder="Phone"
        value={formData.phone}
        onChange={e => setFormData({ ...formData, phone: e.target.value })}
        required
      />

      <Input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={e => setFormData({ ...formData, email: e.target.value })}
        required
      />

      <div className="flex flex-col gap-1">
        <Input
          ref={addressRef}
          type="text"
          placeholder="Full Address"
          value={formData.fullAddress}
          onChange={e =>
            setFormData({ ...formData, fullAddress: e.target.value })
          }
          required
          className="text-black placeholder-gray-500"
        />
        {autocompleteError && (
          <p className="text-xs text-yellow-600">
            ⚠️ Address autocomplete unavailable — please enter manually.
          </p>
        )}
      </div>

      <Input
        type="text"
        placeholder="ZIP"
        value={formData.zip}
        onChange={e => setFormData({ ...formData, zip: e.target.value })}
        required
        className="text-black placeholder-gray-500"
      />

      <Select
        value={formData.service}
        onChange={e =>
          setFormData({ ...formData, service: e.target.value as string })
        }
        required
      >
        <SelectItem value="chimney-cleaning">Chimney Cleaning</SelectItem>
        <SelectItem value="chimney-inspection">Chimney Inspection</SelectItem>
        <SelectItem value="chimney-repair">Chimney Repair</SelectItem>
        <SelectItem value="fireplace-installation">
          Fireplace Installation
        </SelectItem>
        <SelectItem value="masonry-repair">Masonry Repair</SelectItem>
        <SelectItem value="emergency-service">Emergency Service</SelectItem>
      </Select>

      <textarea
        placeholder="Your Message"
        value={formData.message}
        onChange={e => setFormData({ ...formData, message: e.target.value })}
        className="w-full border border-gray-300 rounded-md p-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-black placeholder-gray-500"
      />

      <Button
        type="submit"
        disabled={loading}
        className={`w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold transition-all ${
          loading ? "opacity-75 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Sending..." : "Submit"}
      </Button>

      <div className="text-xs text-gray-500 leading-relaxed">
        By submitting this request, you agree to State Wide Chimney{" "}
        <a href="/terms-of-use" className="text-red-600 hover:underline">
          Terms of Use
        </a>
        ,{" "}
        <a href="/privacy-policy" className="text-red-600 hover:underline">
          Privacy Policy
        </a>
        , and authorize State Wide Chimney and its partners to contact you.{" "}
        <a
          href="/california-privacy-notice"
          className="text-red-600 hover:underline"
        >
          California Notice
        </a>
        .
      </div>
    </form>
  );
}
