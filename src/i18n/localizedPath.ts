import type { Locale } from "@/i18n/Locale";

/**
 * Maps the current (basepath-relative) pathname to its equivalent under another locale.
 * French routes are English routes prefixed with /fr, that's the only rule.
 */
export function localizedPath(pathname: string, targetLocale: Locale): string {
  const isCurrentlyFrench = pathname === "/fr" || pathname.startsWith("/fr/");
  const englishPath = isCurrentlyFrench ? pathname.replace(/^\/fr/, "") || "/" : pathname;

  if (targetLocale === "en") return englishPath;
  return englishPath === "/" ? "/fr/" : `/fr${englishPath}`;
}
