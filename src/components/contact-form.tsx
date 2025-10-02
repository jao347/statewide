"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectItem } from "@/components/ui/select";

interface ContactFormProps {
  title?: string;
  className?: string;
}

export default function ContactForm({
  title = "GET SUPPORT OR SCHEDULE A SERVICE WITH STATE WIDE CHIMNEY",
  className = "",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    fullAddress: "",
    zip: "",
    service: "chimney-cleaning",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("✅ Thank you! Your request has been sent.");
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
        alert("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert("❌ Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={className}>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">{title}</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
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

        <Input
          type="text"
          placeholder="Full Address"
          value={formData.fullAddress}
          onChange={e =>
            setFormData({ ...formData, fullAddress: e.target.value })
          }
          required
        />

        <Input
          type="text"
          placeholder="ZIP"
          value={formData.zip}
          onChange={e => setFormData({ ...formData, zip: e.target.value })}
          required
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

        {/* 🆕 Message input */}
        <textarea
          placeholder="Your Message"
          value={formData.message}
          onChange={e => setFormData({ ...formData, message: e.target.value })}
          className="w-full border border-gray-300 rounded-md p-3 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
          required
        />

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold"
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
          , and authorize State Wide Chimney, its partner service providers, as
          well as third-party home improvement networks and lead{" "}
          <a href="/partners" className="text-red-600 hover:underline">
            partners
          </a>
          , to contact you with offers via email, phone, and text at the number
          you provided. You agree to be contacted even if your number is on any{" "}
          <a href="/do-not-call-list" className="text-red-600 hover:underline">
            Do Not Call list
          </a>
          . These communications may be delivered via automatic telephone
          dialing systems or pre-recorded voice messages. Your consent is not a
          condition of purchase and can be revoked at any time.{" "}
          <a
            href="/california-privacy-notice"
            className="text-red-600 hover:underline"
          >
            California Notice
          </a>
          .
        </div>
      </form>
    </div>
  );
}
