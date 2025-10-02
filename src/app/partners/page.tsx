"use client";

import { callNow } from "@/lib/utils";
import Image from "next/image";

export default function Partners() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Partners</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            State Wide Chimney works with a trusted network of pre-screened and
            licensed professionals across the chimney and fireplace industry.
          </p>
        </div>
      </div>

      {/* Partners Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Trusted Network
            </h2>
            <p className="text-gray-600 mb-6">
              Our partners include, but are not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Independent chimney sweep contractors</li>
              <li>
                Licensed masonry and general contractors with chimney
                specialization
              </li>
              <li>
                Certified technicians for chimney cleaning, inspections, liners,
                and waterproofing
              </li>
              <li>
                Chimney supply centers providing high-quality materials and
                parts
              </li>
              <li>
                Fireplace and chimney consultants and project coordinators
              </li>
              <li>
                Local chimney companies with decades of residential service
                experience
              </li>
              <li>
                Regional service providers with proven track records and
                verified credentials
              </li>
            </ul>
            <p className="text-gray-600 mt-6">
              We continuously review and update our network to ensure every
              partner meets our strict standards for safety, quality
              workmanship, customer satisfaction, and compliance with state and
              local regulations. Partner availability may vary based on location
              and service needs.
            </p>
          </div>
          <div className="relative h-96">
            <Image
              src="/professional-chimney-service-owner-portrait.jpg"
              alt="Professional chimney service partners"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-red-600 text-white rounded-lg p-8 mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Interested in Partnering with Us?
          </h2>
          <p className="mb-6">
            We're always looking for quality partners who share our commitment
            to excellence and customer satisfaction.
          </p>
          <button
            onClick={callNow}
            className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
}
