"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { callNow } from "@/lib/utils";

const testimonials = [
  {
    name: "SARAH MITCHELL",
    location: "Springfield, MA",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    timeAgo: "2 Weeks Ago",
    text: "David and his team from Statewide Chimney were amazing! They cleaned our chimney, repaired some loose bricks, and explained everything they were doing. The whole process was done quickly, the price was fair, and they left the area spotless. I'll definitely be calling them again next season.",
  },
  {
    name: "MIKE JOHNSON",
    location: "Boston, MA",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    timeAgo: "1 Month Ago",
    text: "Professional service from start to finish. They arrived on time, completed a thorough inspection, and provided detailed recommendations. The team was courteous and cleaned up after themselves. Highly recommend Statewide Chimney!",
  },
  {
    name: "LISA CHEN",
    location: "Worcester, MA",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    timeAgo: "3 Weeks Ago",
    text: "Excellent work! Our chimney was in rough shape but they restored it beautifully. The pricing was transparent and fair. David explained everything clearly and the work was completed faster than expected. Very satisfied!",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      prev => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-sm font-bold text-red-600 mb-4 tracking-wider uppercase">
            CUSTOMER SATISFACTION
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Why Customers Give Us 5 Stars
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
          <Button
            onClick={callNow}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            (888) 774-4288
          </Button>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto animate-slide-up">
          <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-2xl border border-gray-100">
            <Quote className="h-12 w-12 text-red-600 mb-6 opacity-20" />

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="text-sm text-gray-500 ml-2">
                  Reviewed {testimonials[currentIndex].timeAgo}
                </span>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevTestimonial}
                  className="p-2 hover:bg-red-50 hover:border-red-200 transition-colors duration-200 bg-transparent"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextTestimonial}
                  className="p-2 hover:bg-red-50 hover:border-red-200 transition-colors duration-200 bg-transparent"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-6 mb-6">
              <Image
                src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                alt={`${testimonials[currentIndex].name} profile photo`}
                width={80}
                height={80}
                className="rounded-full object-cover flex-shrink-0"
                sizes="80px"
              />
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-500 text-sm mb-4">
                  {testimonials[currentIndex].location}
                </p>
                <p className="text-gray-700 leading-relaxed text-lg italic">
                  "{testimonials[currentIndex].text}"
                </p>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-red-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
