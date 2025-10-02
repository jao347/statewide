"use client";

import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { callNow } from "@/lib/utils";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/cozy-fireplace-with-warm-flames-in-modern-living-r.jpg"
          alt="Cozy fireplace with warm flames"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-6 animate-fade-in">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm font-medium">
                Trusted by 1000+ homeowners
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight animate-slide-up">
              Professional
              <span className="text-red-400 block">Chimney Services</span>
              You Can Trust
            </h1>

            <p className="text-xl text-gray-200 mb-8 text-pretty leading-relaxed animate-slide-up animation-delay-200">
              Keep your family safe with expert chimney cleaning, inspection,
              and repair services. Fast response times and guaranteed
              satisfaction.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-up animation-delay-400">
              <Button
                onClick={callNow}
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now: (888) 774-4288
              </Button>
              {/* <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 backdrop-blur-sm bg-transparent transition-all duration-300"
              >
                Free Estimate
              </Button> */}
            </div>

            <div className="flex items-center space-x-6 text-sm animate-fade-in animation-delay-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>Licensed & Insured</span>
              </div>
              {/* <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span>24/7 Emergency Service</span>
              </div> */}
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20 animate-slide-up animation-delay-300">
            <div className="text-center">
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-xl mb-6 inline-block shadow-lg animate-pulse">
                <div className="text-2xl font-bold">LIMITED TIME OFFER</div>
                <div className="text-sm opacity-90">Save up to $129</div>
              </div>

              <div className="text-3xl font-bold text-gray-900 mb-6">
                (888) 774-4288
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <span className="text-gray-700">Chimney Inspection</span>
                  <div className="text-right">
                    <span className="text-gray-400 line-through text-sm">
                      $149
                    </span>
                    <span className="text-red-600 font-bold ml-2">$79</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  <span className="text-gray-700">Chimney Sweep</span>
                  <span className="text-red-600 font-bold">$50 OFF</span>
                </div>
              </div>

              <Button
                onClick={callNow}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="h-4 w-4 mr-2" />
                Claim This Offer Now
              </Button>

              <p className="text-xs text-gray-500 mt-4">
                *Offer valid for new customers only. Cannot be combined with
                other offers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
