
import React from 'react';
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { HybridCoachingSection } from "@/components/sections/HybridCoachingSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";
import { FooterSection } from "@/components/sections/FooterSection";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white text-foreground overflow-x-hidden">
      {/* Section 1: Fullscreen Hero */}
      <HeroSection />

      {/* Section 2: Features */}
      <FeaturesSection />

      {/* Sections 3, 4, 5: Direct content */}
      <div className="py-24 md:py-32 bg-white">
        {/* Section 3: Video Demo Preview */}
        <VideoSection />

        {/* Section 4: Why Hybrid Coaching Works Better */}
        <HybridCoachingSection />

        {/* Section 5: Testimonials */}
        <TestimonialSection />

        {/* Section 6: Waitlist Signup */}
        <WaitlistSection />
      </div>
      
      {/* Footer */}
      <FooterSection />
    </div>
  );
};
export default Landing;
