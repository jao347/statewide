"use client";

import { Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  textColor?: string;
  imageSrc?: string;
  imageAlt?: string;
  showTagline?: boolean;
}

export default function Logo({
  className = "",
  textColor = "text-gray-900",
  imageSrc,
  imageAlt = "Company Logo",
  showTagline = true,
}: LogoProps) {
  return (
    <Link href="/" className={`flex items-center space-x-3 ${className}`}>
      {imageSrc ? (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={160}
            height={40}
            priority
            className="h-12 w-auto object-contain shadow-lg rounded-xl"
          />
          <div>
            <div className={`text-2xl font-bold tracking-tight ${textColor}`}>
              Statewide
            </div>
            {showTagline && (
              <div className="text-sm font-medium text-red-600 -mt-1 tracking-wide">
                CHIMNEY SERVICES
              </div>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="bg-gradient-to-br from-red-600 to-red-700 p-2 rounded-xl shadow-lg">
            <Flame className="h-8 w-8 text-white" />
          </div>
          <div>
            <div className={`text-2xl font-bold tracking-tight ${textColor}`}>
              Statewide
            </div>
            {showTagline && (
              <div className="text-sm font-medium text-red-600 -mt-1 tracking-wide">
                CHIMNEY SERVICES
              </div>
            )}
          </div>
        </>
      )}
    </Link>
  );
}
