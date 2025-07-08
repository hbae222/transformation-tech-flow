"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "absolute inset-0 h-full w-full bg-background [mask-image:radial-gradient(circle_at_center,white,transparent)]",
        className
      )}
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-teal-500 opacity-0"></div>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-teal-500 opacity-0 animate-pulse"></div>
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute left-12 top-0 h-full w-px bg-gradient-to-b from-transparent via-teal-500/20 to-transparent"></div>
        <div className="absolute left-24 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute left-36 top-0 h-full w-px bg-gradient-to-b from-transparent via-teal-500/20 to-transparent"></div>
        <div className="absolute left-48 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute left-60 top-0 h-full w-px bg-gradient-to-b from-transparent via-teal-500/20 to-transparent"></div>
        <div className="absolute left-72 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute left-84 top-0 h-full w-px bg-gradient-to-b from-transparent via-teal-500/20 to-transparent"></div>
        <div className="absolute left-96 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-teal-500/20 to-transparent"></div>
        <div className="absolute right-12 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute right-24 top-0 h-full w-px bg-gradient-to-b from-transparent via-teal-500/20 to-transparent"></div>
        <div className="absolute right-36 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute right-48 top-0 h-full w-px bg-gradient-to-b from-transparent via-teal-500/20 to-transparent"></div>
        <div className="absolute right-60 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute right-72 top-0 h-full w-px bg-gradient-to-b from-transparent via-teal-500/20 to-transparent"></div>
        <div className="absolute right-84 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
        <div className="absolute right-96 top-0 h-full w-px bg-gradient-to-b from-transparent via-teal-500/20 to-transparent"></div>
      </div>
    </div>
  );
};