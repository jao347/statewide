"use client";

import { useState } from "react";
import Image from "next/image";

const galleryImages = [
  {
    src: "/professional-chimney-cleaning-service-in-action.jpg",
    alt: "Professional chimney cleaning service in action",
    category: "Cleaning",
  },
  {
    src: "/brick-chimney-repair-and-restoration-work.jpg",
    alt: "Brick chimney repair and restoration work",
    category: "Repair",
  },
  {
    src: "/modern-fireplace-installation-in-living-room.jpg",
    alt: "Modern fireplace installation in living room",
    category: "Installation",
  },
  {
    src: "/chimney-inspection-with-professional-equipment.jpg",
    alt: "Chimney inspection with professional equipment",
    category: "Inspection",
  },
  {
    src: "/before-and-after-chimney-masonry-repair.jpg",
    alt: "Before and after chimney masonry repair",
    category: "Repair",
  },
  {
    src: "/chimney-cap-and-damper-installation.jpg",
    alt: "Chimney cap and damper installation",
    category: "Installation",
  },
  {
    src: "/4-men-1-chimney.png",
    alt: "Wood burning stove installation service",
    category: "Installation",
  },
  {
    src: "/chimney-waterproofing-and-leak-repair.jpg",
    alt: "Chimney waterproofing and leak repair",
    category: "Repair",
  },
];

const categories = ["All", "Cleaning", "Repair", "Installation", "Inspection"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
            Our Work Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty leading-relaxed">
            See the quality craftsmanship and professional results we deliver
            for our customers
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 shadow-sm hover:shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium bg-red-600 px-2 py-1 rounded-full mb-1">
                    {image.category}
                  </div>
                  <div className="text-xs opacity-90">{image.alt}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
