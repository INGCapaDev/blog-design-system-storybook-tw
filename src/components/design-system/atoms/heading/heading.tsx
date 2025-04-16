import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

export default function Heading({
  className,
  level,
  variant = "default",
  size = "base",
  align = "left",
  children,
}: HeadingProps) {
  const Heading = level;

  return (
    <Heading
      className={cn(
        headingVariants({ variant, size, align }),
        className,
        "font-normal",
      )}
    >
      {children}
    </Heading>
  );
}

const baseClasses = "font-normal";
const headingVariants = cva(baseClasses, {
  variants: {
    variant: {
      default: "text-secondary",
      accent: "text-accent",
    },
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    size: "base",
    align: "left",
    variant: "default",
  },
});

export type HeadingProps = {
  children: React.ReactNode;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
} & VariantProps<typeof headingVariants>;

export { Heading };
