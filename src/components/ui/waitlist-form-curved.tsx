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
    <div className="w-full max-w-6xl mx-auto p-12">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-16 md:p-24">
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
            className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-2xl whitespace-nowrap"
          >
            Join
          </Button>
        </form>
      </div>
    </div>
  );
};