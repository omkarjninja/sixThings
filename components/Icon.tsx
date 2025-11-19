// components/Icon.tsx
import * as Lucide from "lucide-react";

const ION_TO_LUCIDE: Record<string, string> = {
  barbell: "Dumbbell",
  bulb: "Lightbulb",
  "shield-checkmark": "ShieldCheck",
  "color-palette": "Palette",
  "cash-outline": "Coins",
  sparkles: "Sparkles",
  "infinite-outline": "Infinity",
};

type IconProps = {
  name: string;
  size?: number;
  color?: string;
  className?: string;
  strokeWidth?: number;
  [key: string]: any;
};

export default function Icon({
  name,
  size = 22,
  color = "#fff",
  strokeWidth,
  className,
  ...rest
}: IconProps) {
  const mapped = ION_TO_LUCIDE[name];
  const LucideComp = (Lucide as any)[mapped];

  if (!LucideComp) {
    console.warn(`Icon "${name}" not found. Add it to the ION_TO_LUCIDE map.`);
    return null;
  }

  return (
    <LucideComp
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      {...rest}
    />
  );
}
