"use client";

import type * as React from "react";
import { cn } from "@/lib/utils";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  displayEmpty?: boolean;
}

function Select({ className, children, displayEmpty, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm",
        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "transition-colors",
        className
      )}
      {...props}
    >
      {displayEmpty && (
        <option value="" disabled hidden>
          {/* could show empty or placeholder */}
        </option>
      )}
      {children}
    </select>
  );
}

interface SelectItemProps
  extends React.OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode;
}

function SelectItem({ children, ...props }: SelectItemProps) {
  return <option {...props}>{children}</option>;
}

export { Select, SelectItem };
