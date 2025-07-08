import React from 'react';
import { AuroraBackground } from "@/components/ui/aurora-background";
import { HeroSection } from "@/components/sections/HeroSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { HybridCoachingSection } from "@/components/sections/HybridCoachingSection";
import { WaitlistSection } from "@/components/sections/WaitlistSection";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white text-foreground overflow-x-hidden">
      {/* Section 1: Fullscreen Hero */}
      <HeroSection />

      {/* Sections 2, 3, 4: Seamless Aurora Background */}
      <AuroraBackground className="py-24 md:py-32">
        <div className="relative z-10">
          {/* Section 2: Video Demo Preview */}
          <VideoSection />

          {/* Section 3: Why Hybrid Coaching Works Better */}
          <HybridCoachingSection />

          {/* Section 4: Waitlist Signup */}
          <WaitlistSection />
        </div>
      </AuroraBackground>
    </div>
  );
};
export default Landing;