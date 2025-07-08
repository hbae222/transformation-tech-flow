"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode, useEffect, useState } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  // Check user's motion preferences for performance
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <div
      className={cn(
        "relative flex flex-col h-full min-h-screen items-center justify-center bg-white dark:bg-zinc-900 text-slate-950 transition-bg gpu-accelerated will-change-transform",
        className
      )}
      {...props}
    >
      {/* Simplified aurora background for better performance */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `
            absolute -inset-[10px] opacity-60 pointer-events-none will-change-transform gpu-accelerated
            bg-gradient-to-br from-blue-100/30 via-indigo-100/20 to-violet-100/30
            dark:from-blue-900/20 dark:via-indigo-900/10 dark:to-violet-900/20
            `,
            !prefersReducedMotion && "animate-aurora",
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
          )}
        ></div>
        {/* Subtle animated overlay for movement effect */}
        {!prefersReducedMotion && (
          <div
            className={cn(
              `
              absolute -inset-[10px] opacity-30 pointer-events-none gpu-accelerated will-change-transform
              bg-gradient-to-tr from-transparent via-primary/5 to-transparent
              animate-pulse
              `,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
            )}
          ></div>
        )}
      </div>
      {children}
    </div>
  );
};