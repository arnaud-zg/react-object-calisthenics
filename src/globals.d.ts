interface Umami {
  track: (eventName: string, props?: Record<string, unknown>) => void;
}

declare global {
  interface Window {
    // Set by the Umami script tag in index.html, absent if it hasn't loaded yet, is
    // blocked, or failed to load: always access it through `window.umami?.`, never as a
    // bare `umami` identifier, which throws ReferenceError when the script never ran.
    umami?: Umami;
  }
}

export {};
