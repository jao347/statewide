"use client";

import { useRouter, usePathname } from "next/navigation";
import { callNow } from "@/lib/utils";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import Logo from "./logo";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    if (pathname !== "/") {
      if (id === "html") {
        router.push("/");
      } else {
        router.push(`/#${id.replace("#", "")}`);
      }
      return;
    }

    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleServiceClick = (serviceValue: string) => {
    if (typeof window === "undefined") return;

    const currentParams = new URLSearchParams(window.location.search);
    currentParams.set("service", serviceValue);

    const newUrl = `/contact?${currentParams.toString()}`;
    router.push(newUrl);
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Logo
                imageSrc="logo.jpeg"
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

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  onClick={e => handleSmoothScroll(e, "html")}
                  className="text-gray-300 hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={e => handleSmoothScroll(e, "#about")}
                  className="text-gray-300 hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={e => handleSmoothScroll(e, "#services")}
                  className="text-gray-300 hover:text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={e => handleSmoothScroll(e, "#contact")}
                  className="text-gray-300 hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleServiceClick("chimney-cleaning")}
                  className="text-gray-300 hover:text-white cursor-pointer text-left"
                >
                  Chimney Cleaning
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("chimney-inspection")}
                  className="text-gray-300 hover:text-white cursor-pointer text-left"
                >
                  Chimney Inspection
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("chimney-repair")}
                  className="text-gray-300 hover:text-white cursor-pointer text-left"
                >
                  Chimney Repair
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("fireplace-installation")}
                  className="text-gray-300 hover:text-white cursor-pointer text-left"
                >
                  Fireplace Installation
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick("emergency-service")}
                  className="text-gray-300 hover:text-white cursor-pointer text-left"
                >
                  Emergency Services
                </button>
              </li>
            </ul>
          </div>

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

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
              <a
                href="/contact"
                className="text-gray-400 hover:text-white text-sm"
              >
                Contact Us
              </a>
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:text-white text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-use"
                className="text-gray-400 hover:text-white text-sm"
              >
                Terms of Use
              </a>
              <a
                href="/partners"
                className="text-gray-400 hover:text-white text-sm"
              >
                Partners
              </a>
              <a
                href="/do-not-call-list"
                className="text-gray-400 hover:text-white text-sm"
              >
                Do Not Call List
              </a>
              <a
                href="/california-privacy-notice"
                className="text-gray-400 hover:text-white text-sm"
              >
                California Privacy Notice
              </a>
            </div>
            <p className="text-gray-400 text-sm">© 2025 State Wide Chimney</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
