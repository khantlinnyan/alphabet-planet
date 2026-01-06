"use client";

import * as React from "react";

type ButtonVariant = "primary" | "secondary";
type ButtonSize = "md";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const base =
  "inline-flex items-center justify-center rounded-full text-sm font-semibold transition-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4f67ff] active:scale-[0.98]";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-[#0b1020] shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:-translate-y-0.5",
  secondary:
    "border border-white/40 bg-white/10 text-white hover:bg-white/15",
};

const sizes: Record<ButtonSize, string> = {
  md: "h-12 px-6",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", ...props }, ref) => {
    const classes = [base, variants[variant], sizes[size], className]
      .filter(Boolean)
      .join(" ");

    return <button ref={ref} className={classes} {...props} />;
  }
);

Button.displayName = "Button";

export { Button };
