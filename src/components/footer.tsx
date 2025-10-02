"use client";

import { callNow } from "@/lib/utils";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Flame,
} from "lucide-react";
import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ✅ Consistent Company Info */}
          <div>
            <div className="mb-4">
              <Logo
                imageSrc="logo.png"
                imageAlt="logo"
                textColor="text-white"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Professional chimney services with decades of experience. Your
              safety is our priority.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Chimney Cleaning</li>
              <li className="text-gray-300">Chimney Inspection</li>
              <li className="text-gray-300">Chimney Repair</li>
              <li className="text-gray-300">Fireplace Installation</li>
              <li className="text-gray-300">Emergency Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-600" />
                <button
                  onClick={callNow}
                  className="text-gray-300 hover:text-white"
                >
                  (888) 774-4288
                </button>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-600" />
                <span className="text-gray-300">info@statewidechimney.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-red-600" />
                <span className="text-gray-300">Serving Statewide Areas</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white text-sm"
              >
                Contact Us
              </Link>
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-white text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-use"
                className="text-gray-400 hover:text-white text-sm"
              >
                Terms of Use
              </Link>
              <Link
                href="/partners"
                className="text-gray-400 hover:text-white text-sm"
              >
                Partners
              </Link>
              <Link
                href="/do-not-call-list"
                className="text-gray-400 hover:text-white text-sm"
              >
                Do Not Call List
              </Link>
              <Link
                href="/california-privacy-notice"
                className="text-gray-400 hover:text-white text-sm"
              >
                California Privacy Notice
              </Link>
            </div>
            <p className="text-gray-400 text-sm">© 2025 State Wide Chimney</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
