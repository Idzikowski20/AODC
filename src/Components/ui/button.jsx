import React from "react";
import cn from "classnames";

// Przykładowe warianty, możesz rozbudować wg potrzeb
const variants = {
  default: "bg-premium-purple text-white hover:bg-premium-purple/90",
  outline: "border border-premium-purple text-premium-purple bg-white hover:bg-premium-purple/10",
};

export const Button = React.forwardRef(
  (
    { className, variant = "default", type = "button", children, ...props },
    ref
  ) => {
    return (
      <button
        type={type}
        className={cn(
          "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-premium-purple focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button; 