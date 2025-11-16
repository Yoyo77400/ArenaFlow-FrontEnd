// app/components/ui/Button.tsx
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full text-sm font-medium " +
    "transition-colors focus:outline-none focus-visible:ring-2 " +
    "focus-visible:ring-emerald-500/70 disabled:opacity-60 disabled:cursor-not-allowed";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-emerald-600 hover:bg-emerald-500 px-4 py-1.5 text-white",
    ghost: "bg-transparent hover:bg-slate-800 px-3 py-1.5 text-slate-200",
  };

  const classes = `${base} ${variants[variant]} ${className}`.trim();

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
