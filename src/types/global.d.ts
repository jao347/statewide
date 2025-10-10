export {};

declare global {
  interface Window {
    google: typeof google;
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    "gmpx-place-autocomplete": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      ref?: React.Ref<any>;
      value?: string;
      placeholder?: string;
      "aria-label"?: string;
      autocomplete?: string;
      disabled?: boolean;
      style?: React.CSSProperties;
    };
  }
}
