"use client";

import ContactForm from "@/components/contact-form";
import { callNow } from "@/lib/utils";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-100 py-16 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-gray-900 text-center">
            CONTACT US
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h2 className="text-xl font-bold text-red-600 mb-2">
                COMPANY NAME
              </h2>
              <p className="text-gray-600 text-lg">State Wide Chimney</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-red-600 mb-2">
                HEADQUARTERS
              </h2>
              <p className="text-gray-600 text-lg">
                560 Sylvan Ave Suite #3160, Englewood Cliffs, NJ 07632
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-red-600 mb-4">
                NATIONWIDE COVERAGE
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  While our <span className="font-semibold">headquarters</span>{" "}
                  is based in Englewood cliffs, NJ, we proudly offer service
                  across the{" "}
                  <span className="font-semibold text-green-600">
                    entire United States and Canada
                  </span>
                  . Here's what you can expect:
                </p>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✅</span>
                    <div>
                      <span className="font-semibold">Nationwide Service</span>{" "}
                      - We serve residential and commercial customers in every
                      U.S. state and across Canada.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✅</span>
                    <div>
                      <span className="font-semibold">Licensed & Insured</span>{" "}
                      - Fully licensed and insured in all states for your
                      protection and peace of mind.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✅</span>
                    <div>
                      <span className="font-semibold">Local Technicians</span> -
                      Our experienced, vetted pros are available near you — no
                      matter your location.
                    </div>
                  </div>

                  <div className="flex items-start">
                    <span className="text-green-600 mr-2">✅</span>
                    <div>
                      <span className="font-semibold">24/7 Availability</span> -
                      Emergency garage door support, day or night, wherever you
                      are.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-red-600 mb-2">PHONE</h2>
              <button
                onClick={callNow}
                className="text-gray-600 text-lg hover:text-red-600 transition-colors"
              >
                (888) 774-4288
              </button>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
}
