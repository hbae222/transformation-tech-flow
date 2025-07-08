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
    <div className="w-full max-w-7xl mx-auto p-16">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-20 md:p-32">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-4">
            Join the Waitlist
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are limiting the cohort spots to 50 max.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 h-14 px-6 text-lg rounded-2xl border-gray-200 focus:border-gray-400 focus:ring-0"
          />
          <Button 
            type="submit"
            className="relative group h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-2xl whitespace-nowrap overflow-hidden"
          >
            {/* Animated outline effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-primary to-primary rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt -z-10"></div>
            <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 animate-pulse-border group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">Join</span>
          </Button>
        </form>
      </div>
    </div>
  );
};