"use client";

import ContactForm from "@/components/contact-form";
import { Phone as PhoneIcon } from "@/components/icons";
import { callNow } from "@/lib/utils";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 via-white to-amber-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="relative overflow-hidden bg-gradient-to-br from-amber-600 via-amber-500 to-orange-600 text-white p-10 lg:p-12 rounded-2xl shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />

            <div className="relative z-10">
              <div className="bg-white text-amber-600 p-6 rounded-xl mb-8 inline-block shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="text-sm font-bold uppercase tracking-wide mb-1">
                  Limited Time Offer
                </div>
                <div className="text-4xl font-black mb-1">15% OFF</div>
                <div className="text-sm font-bold uppercase">All Services</div>
              </div>

              <div className="mb-8">
                <p className="text-lg font-semibold mb-4 text-amber-50">
                  Schedule Your Service Today!
                </p>
                <button
                  onClick={callNow}
                  className="group flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <PhoneIcon className="w-7 h-7 group-hover:rotate-12 transition-transform" />
                  (888) 774-4288
                </button>
              </div>

              <div className="space-y-3 text-amber-50">
                <div className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">
                    Professional certified technicians
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">Same-day service available</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm">100% satisfaction guaranteed</span>
                </div>
              </div>

              {/* Urgency indicator */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-sm font-semibold text-amber-100 flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Offer expires soon - Book now to save!
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Contact Form with enhanced styling */}
          <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-100">
            <ContactForm title="$79 Inspection Fee, $50 Off Chimney Sweep – Quick Validation Available!" />
          </div>
        </div>
      </div>
    </section>
  );
}
