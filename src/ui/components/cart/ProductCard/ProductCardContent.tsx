import {
  BarChart3,
  Scroll,
  Shield,
  Sparkle,
  Sparkles,
  Swords,
  Wand2,
} from "lucide-react";
import type {
  KnowledgeProfile,
  Product,
} from "@/domain/cart/value-objects/Product/Product";
import { CardContent } from "@/ui/primitives/card";

interface ProductCardContentProps {
  product: Product;
  profile: KnowledgeProfile;
}

const STAT_ICONS: Record<string, typeof Swords> = {
  Power: Swords,
  Durability: Shield,
};

export function ProductCardContent({ product, profile }: ProductCardContentProps) {
  const description = product.describeProfile(profile);
  const effects = product.listProfileEffects(profile);
  const stats = product.listProfileStats(profile);

  return (
    <CardContent className="p-4 pt-2 flex flex-col">
      <p className="flex gap-1.5 text-sm text-gray-600 mb-3">
        <Scroll className="h-4 w-4 shrink-0 mt-0.5" aria-hidden="true" />
        <span>{description}</span>
      </p>

      {profile !== "beginner" && stats.length > 0 && (
        <div className="flex flex-col gap-1 mb-2">
          <h4 className="font-semibold flex items-center gap-1.5">
            <BarChart3 className="h-4 w-4" aria-hidden="true" />
            Stats:
          </h4>
          <ul className="text-sm list-none flex flex-col gap-1">
            {stats.map(({ label, value }) => {
              const StatIcon = STAT_ICONS[label] ?? Wand2;
              return (
                <li key={label} className="flex items-center gap-1.5">
                  <StatIcon
                    className="h-3.5 w-3.5 shrink-0 text-gray-500"
                    aria-hidden="true"
                  />
                  <strong>{label}:</strong> {value}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="flex flex-col gap-1">
        <h4 className="font-semibold flex items-center gap-1.5">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          Effects:
        </h4>
        <ul className="text-sm list-none flex flex-col gap-1">
          {effects.map((effect) => (
            <li key={effect} className="flex items-center gap-1.5">
              <Sparkle
                className="h-3.5 w-3.5 shrink-0 text-gray-500"
                aria-hidden="true"
              />
              {effect}
            </li>
          ))}
        </ul>
      </div>
    </CardContent>
  );
}
