"use client";

import { cn } from "@/lib/utils";
import { Check, Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, forwardRef, useState } from "react";

export interface SaveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  success?: boolean;
  children: React.ReactNode;
}

const SaveButton = forwardRef<HTMLButtonElement, SaveButtonProps>(
  ({ className, loading = false, success = false, children, onClick, ...props }, ref) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
      if (loading || success) return;
      
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200);
      
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all duration-200 ease-in-out",
          "bg-primary text-primary-foreground hover:bg-primary/90",
          "transform active:scale-95",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          isClicked && "scale-95",
          className
        )}
        onClick={handleClick}
        disabled={loading || success}
        {...props}
      >
        <span className={cn(
          "flex items-center gap-2 transition-all duration-200",
          (loading || success) && "opacity-0"
        )}>
          {children}
        </span>
        
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="h-5 w-5 animate-spin" />
          </div>
        )}
        
        {success && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Check className="h-5 w-5 text-primary-foreground" />
          </div>
        )}
      </button>
    );
  }
);

SaveButton.displayName = "SaveButton";

export { SaveButton };