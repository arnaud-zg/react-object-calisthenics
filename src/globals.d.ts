interface Umami {
  track: (eventName: string, props?: Record<string, unknown>) => void;
}

declare const umami: Umami | undefined;
