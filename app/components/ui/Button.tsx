"use client";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function Button({ children, variant = "primary", size = "md", className = "", href, onClick }: ButtonProps) {
  const base = "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 cursor-pointer rounded-lg";
  
  const variants = {
    primary: "bg-blue text-white hover:bg-blue-deep shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]",
    secondary: "border border-border text-foreground hover:border-blue/40 hover:text-blue",
    ghost: "text-muted hover:text-foreground",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return <a href={href} className={cls}>{children}</a>;
  }
  return <button onClick={onClick} className={cls}>{children}</button>;
}
