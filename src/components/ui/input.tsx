"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", onFocus, ...props }, ref) => {
    const localRef = React.useRef<HTMLInputElement | null>(null);
    React.useImperativeHandle(ref, () => localRef.current as HTMLInputElement);

    React.useEffect(() => {
      const el = localRef.current;
      if (!el) return;

      const ensureEditable = () => {
        if (el.hasAttribute("readonly")) {
          el.removeAttribute("readonly");
          el.readOnly = false;
        }
      };

      ensureEditable();

      const observer = new MutationObserver(ensureEditable);
      observer.observe(el, { attributes: true, attributeFilter: ["readonly"] });

      const interval = setInterval(ensureEditable, 500);

      return () => {
        observer.disconnect();
        clearInterval(interval);
      };
    }, []);

    return (
      <input
        ref={localRef}
        type={type}
        onFocus={e => {
          if (e.currentTarget.readOnly) e.currentTarget.readOnly = false;
          onFocus?.(e);
        }}
        className={cn(
          "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm",
          "text-black placeholder:text-gray-400",
          "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "transition-colors",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
