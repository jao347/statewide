"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Logo from "./logo";
import { callNow } from "@/lib/utils";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Logo imageSrc="logo.jpeg" />

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a
                href="/"
                onClick={e => handleSmoothScroll(e, "html")}
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="#about"
                onClick={e => handleSmoothScroll(e, "#about")}
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="#services"
                onClick={e => handleSmoothScroll(e, "#services")}
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium relative group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="#gallery"
                onClick={e => handleSmoothScroll(e, "#gallery")}
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium relative group"
              >
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a
                href="#contact"
                onClick={e => handleSmoothScroll(e, "#contact")}
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            </div>
          </div>

          {/* Call Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <Button
              onClick={callNow}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              <Phone className="h-4 w-4 mr-2" />
              (888) 774-4288
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600 p-2 rounded-lg transition-colors duration-200"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-6 space-y-1 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg">
            <a
              href="/"
              onClick={e => handleSmoothScroll(e, "html")}
              className="block px-4 py-3 text-base font-medium rounded-lg text-gray-700 hover:text-red-600 hover:bg-red-50"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={e => handleSmoothScroll(e, "#about")}
              className="block px-4 py-3 text-base font-medium rounded-lg text-gray-700 hover:text-red-600 hover:bg-red-50"
            >
              About
            </a>
            <a
              href="#services"
              onClick={e => handleSmoothScroll(e, "#services")}
              className="block px-4 py-3 text-base font-medium rounded-lg text-gray-700 hover:text-red-600 hover:bg-red-50"
            >
              Services
            </a>
            <a
              href="#gallery"
              onClick={e => handleSmoothScroll(e, "#gallery")}
              className="block px-4 py-3 text-base font-medium rounded-lg text-gray-700 hover:text-red-600 hover:bg-red-50"
            >
              Gallery
            </a>
            <a
              href="#contact"
              onClick={e => handleSmoothScroll(e, "#contact")}
              className="block px-4 py-3 text-base font-medium rounded-lg text-gray-700 hover:text-red-600 hover:bg-red-50"
            >
              Contact
            </a>
            <div className="pt-4">
              <Button
                onClick={callNow}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white w-full shadow-lg"
              >
                <Phone className="h-4 w-4 mr-2" />
                (888) 774-4288
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
