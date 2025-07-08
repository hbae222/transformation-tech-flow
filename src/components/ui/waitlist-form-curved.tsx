import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const WaitlistFormCurved = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Handle form submission here
  };

  return (
    <div className="w-full max-w-8xl mx-auto p-20 md:p-24">
      <div className="bg-white rounded-3xl shadow-neural border border-gray-100 p-24 md:p-40">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-6">
            Join the Waitlist
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl leading-relaxed">
            We are limiting the cohort spots to 50 max.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-16 px-6 text-xl rounded-2xl border-gray-200 focus:border-gray-400 focus:ring-0 text-center placeholder:text-center"
          />
          <Button 
            type="submit"
            className="relative group h-16 px-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg rounded-2xl w-full"
          >
            {/* Animated outline effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-primary to-primary rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt -z-10"></div>
            <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 animate-pulse-border group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Apply</span>
          </Button>
        </form>
      </div>
    </div>
  );
};