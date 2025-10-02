"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Flame } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { callNow } from "@/lib/utils";
import Logo from "./logo";

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
          <Logo imageSrc="logo.png" />

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
              <a
                href="/#gallery"
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                Gallery
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            </div>
          </div>

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

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-6 space-y-1 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg">
            <Link
              href="/"
              className="text-gray-700 hover:text-red-600 hover:bg-red-50 block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-red-600 hover:bg-red-50 block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-red-600 hover:bg-red-50 block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <a
              href="/#gallery"
              className="text-gray-700 hover:text-red-600 hover:bg-red-50 block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </a>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-red-600 hover:bg-red-50 block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
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
