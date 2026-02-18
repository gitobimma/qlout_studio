import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-[#1f1f1f] text-white hover:bg-[#333]",
    secondary: "border border-[#1f1f1f] text-[#1f1f1f] hover:bg-[#1f1f1f] hover:text-white",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
