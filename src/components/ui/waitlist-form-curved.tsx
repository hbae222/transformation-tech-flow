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
    <div className="w-full max-w-2xl mx-auto p-8">
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join our waitlist
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Be the first to access new features. Enter your email below to join the waitlist.
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
            className="h-14 px-8 bg-black hover:bg-gray-800 text-white font-semibold rounded-2xl whitespace-nowrap"
          >
            Join
          </Button>
        </form>
      </div>
    </div>
  );
};