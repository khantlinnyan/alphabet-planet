"use client";

import * as React from "react";

type HeadingVariant = "hero";
type TextVariant = "eyebrow" | "subhead" | "body" | "trust";

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  variant?: HeadingVariant;
  as?: "h1" | "h2" | "h3";
};

type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  variant?: TextVariant;
  as?: "p" | "span";
};

const headingVariants: Record<HeadingVariant, string> = {
  hero: "font-semibold leading-tight text-4xl md:text-5xl lg:text-6xl",
};

const textVariants: Record<TextVariant, string> = {
  eyebrow: "text-[12px] uppercase tracking-[0.22em] text-white/70",
  subhead: "text-base text-white/80 md:text-lg",
  body: "text-sm text-white/80",
  trust: "text-xs text-white/60",
};

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Tag = "h2", variant = "hero", className = "", ...props }, ref) => {
    const classes = [headingVariants[variant], className]
      .filter(Boolean)
      .join(" ");

    return <Tag ref={ref} className={classes} {...props} />;
  }
);

Heading.displayName = "Heading";

const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ as: Tag = "p", variant = "body", className = "", ...props }, ref) => {
    const classes = [textVariants[variant], className]
      .filter(Boolean)
      .join(" ");

    return <Tag ref={ref} className={classes} {...props} />;
  }
);

Text.displayName = "Text";

export { Heading, Text };
