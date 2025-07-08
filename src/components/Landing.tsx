import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Brain, Target, Users, ArrowRight, Zap, MessageCircle, TrendingUp } from 'lucide-react';
import { BackgroundBeamsDemo } from "@/components/ui/waitlist-background-beams";
import { TestimonialSection } from "@/components/ui/testimonial-section";
import { Feature } from "@/components/ui/feature-with-image-comparison";
import heroBrain from '@/assets/hero-brain.jpg';
import videoPreview from '@/assets/video-preview.jpg';
const Landing = () => {
  return <div className="min-h-screen gradient-background text-foreground overflow-x-hidden">
      {/* Section 1: Fullscreen Hero */}
      <section className="relative min-h-screen flex items-center justify-start bg-black overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe 
            src="https://player.cloudinary.com/embed/?cloud_name=djjokty1s&public_id=ADHD_Header_Video_2_dofrcn&profile=cld-default&autoplay=true&loop=true&muted=true&controls=false" 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: '100vw',
              height: '56.25vw',
              minHeight: '100vh',
              minWidth: '177.78vh'
            }}
            allow="autoplay; muted" 
            frameBorder="0" 
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-left max-w-2xl mx-auto px-6 ml-12">
          <h1 className="hero-text mb-6 animate-fade-in text-slate-950">
            Build Better Focus in 30 Days
          </h1>
          
          <p className="hero-subtitle mb-8 max-w-lg animate-fade-in text-slate-400" style={{
            animationDelay: '0.2s'
          }}>
            Weekly coaching. Daily AI check-ins. A new hybrid system designed to help ADHD brains improve faster.
          </p>
          
          {/* Pill Badges */}
          <div className="flex flex-wrap justify-start gap-4 mb-8 animate-scale-in" style={{
            animationDelay: '0.4s'
          }}>
            <div className="pill-badge">
              <Users className="w-4 h-4 mr-2" />
              Weekly Coaching
            </div>
            <div className="pill-badge">
              <MessageCircle className="w-4 h-4 mr-2" />
              Daily AI Nudges
            </div>
            <div className="pill-badge">
              <TrendingUp className="w-4 h-4 mr-2" />
              10X Effective
            </div>
          </div>
          
          {/* CTA Button */}
          <button className="cta-button animate-scale-in group" style={{
            animationDelay: '0.6s'
          }}>
            Join Waitlist
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Section 2: Video Demo Preview */}
      <section className="py-32 bg-warm-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="section-heading mb-4 animate-fade-in">See How It Works</h2>
          <p className="text-muted-foreground text-lg mb-12 animate-fade-in">
            Watch how our proven method builds focus, habits, and clarity - in under 2 minutes.
          </p>
          
          <div className="video-container relative group cursor-pointer animate-scale-in">
            <div className="relative overflow-hidden rounded-2xl shadow-card-dark hover:shadow-hover transition-all duration-500">
              <img src={videoPreview} alt="Product demo preview" className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                <div className="play-button w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-glow-primary">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <TestimonialSection />
        </div>
      </section>

      {/* Section 3: Why Hybrid Coaching Works Better */}
      <Feature />

      {/* Section 4: Waitlist Signup */}
      <section className="py-32 bg-warm-white-subtle relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <BackgroundBeamsDemo />
          </div>
        </div>
      </section>
    </div>;
};
export default Landing;