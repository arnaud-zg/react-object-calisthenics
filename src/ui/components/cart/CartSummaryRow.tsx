import { motion } from "motion/react";
import type { ReactNode } from "react";

interface CartSummaryRowProps {
  label: string;
  value: ReactNode;
  emphasized?: boolean;
  live?: boolean;
}

export function CartSummaryRow({
  label,
  value,
  emphasized = false,
  live = false,
}: CartSummaryRowProps) {
  return (
    <div className="flex items-center justify-between">
      <span className={emphasized ? "font-semibold" : "text-sm text-muted-foreground"}>
        {label}
      </span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }}
        aria-live={live ? "polite" : undefined}
        className={emphasized ? "font-bold" : "text-sm font-medium"}
      >
        {value}
      </motion.span>
    </div>
  );
}
