"use client";
import React from "react";
import { Input } from "@/components/ui/input";

function WaitlistFormNew() {
  return (
    <div className="h-full w-full rounded-md bg-transparent relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-bold">
          Join the Waitlist
        </h1>
        <p></p>
        <p className="text-muted-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          We limit each cohort to 50 people to keep coaching personal and effective.
        </p>
        <Input
          type="email"
          placeholder="Enter your email address"
          className="w-full mt-4 relative z-10"
        />
      </div>
    </div>
  );
}

export { WaitlistFormNew };