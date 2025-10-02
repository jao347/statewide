"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

function Button({
  className,
  variant = "default",
  size = "default",
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "destructive":
        return "bg-red-600 text-white hover:bg-red-700 shadow-sm"
      case "outline":
        return "border border-gray-300 bg-transparent hover:bg-gray-100 text-gray-900"
      case "secondary":
        return "bg-gray-200 text-gray-900 hover:bg-gray-300 shadow-sm"
      case "ghost":
        return "hover:bg-gray-100 text-gray-900"
      case "link":
        return "text-blue-600 underline-offset-4 hover:underline"
      default:
        return "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
    }
  }

  const getSizeStyles = () => {
    switch (size) {
      case "sm":
        return "h-8 px-3 text-sm"
      case "lg":
        return "h-10 px-6 text-base"
      case "icon":
        return "h-9 w-9 p-0"
      default:
        return "h-9 px-4 py-2"
    }
  }

  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        getVariantStyles(),
        getSizeStyles(),
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export { Button }
