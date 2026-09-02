import { ProductCatalog } from "@/data/products.ts";
import type { Locale } from "@/i18n/Locale.ts";
import type { Messages } from "@/i18n/messages/en.ts";
import { en } from "@/i18n/messages/en.ts";
import { fr } from "@/i18n/messages/fr.ts";

const MESSAGES: Record<Locale, Messages> = { en, fr };

export interface PageSeoMeta {
  title: string;
  description: string;
}

export function getHomeSeoMeta(locale: Locale): PageSeoMeta {
  const t = MESSAGES[locale];
  return { title: t.home.title, description: t.seo.homeDescription };
}

export function getShopSeoMeta(locale: Locale): PageSeoMeta {
  const t = MESSAGES[locale];
  return { title: t.shop.title, description: t.seo.shopDescription };
}

export interface SeoProduct {
  name: string;
  image: string;
}

export function listProductsForSeo(locale: Locale): SeoProduct[] {
  return ProductCatalog.forLocale(locale)
    .all()
    .map((product) => ({
      name: product.displayName(),
      image: product.displayImage(),
    }));
}
