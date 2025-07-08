"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Input } from "@/components/ui/input";
import { SaveButton } from "@/components/ui/save-button";
import { ArrowRight } from "lucide-react";

function WaitlistFormNew() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    setSuccess(true);
    
    // Reset after showing success
    setTimeout(() => {
      setSuccess(false);
      setEmail("");
    }, 2000);
  };

  return (
    <div className="h-screen w-full rounded-md bg-background relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-bold">
          Join the Waitlist
        </h1>
        <p></p>
        <p className="text-muted-foreground max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          We limit each cohort to 50 people to keep coaching personal and effective.
        </p>
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-4 relative z-10"
            required
          />
          <SaveButton
            type="submit"
            loading={loading}
            success={success}
            className="w-full mt-4 relative z-10"
          >
            {success ? "Added to Waitlist!" : "Join Waitlist"}
            <ArrowRight className="w-5 h-5 ml-2" />
          </SaveButton>
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export { WaitlistFormNew };