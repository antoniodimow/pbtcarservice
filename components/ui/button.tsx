import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gold text-primary hover:bg-gold-light shadow-md hover:shadow-lg hover:scale-105",
        outline:
          "border-2 border-gold text-gold hover:bg-gold hover:text-primary",
        ghost: "hover:bg-gold/10 text-gold",
        link: "text-gold underline-offset-4 hover:underline",
        primary:
          "bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg",
      },
      size: {
        default: "h-11 px-8 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    if (asChild) {
      // When asChild is true, render as a div wrapper for Link or other components
      // Pass through all props including style
      return (
        <div
          className={cn(buttonVariants({ variant, size, className }))}
          {...(props as any)}
        >
          {children}
        </div>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
