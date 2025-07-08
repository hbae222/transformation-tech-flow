import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Brain, Target, Users, ArrowRight, Zap, MessageCircle, TrendingUp } from 'lucide-react';
import { WaitlistForm } from "@/components/ui/waitlist-form-1";
import { TestimonialSection } from "@/components/ui/testimonial-section";
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
      <section className="w-full bg-warm-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-heading text-center mb-16 text-foreground">Why Hybrid Coaching Works Better</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            {/* Column 1 */}
            <div className="benefit-card">
              <div className="flex items-center justify-center mb-4">
                <div className="text-4xl">🧠</div>
              </div>
              <h3 className="text-xl font-semibold mb-6 text-foreground">Human Coaching</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Deep, personal insight</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Real accountability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Tailored expert feedback</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Emotional motivation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Strategic support</span>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="benefit-card">
              <div className="flex items-center justify-center mb-4">
                <div className="text-4xl">⚠️</div>
              </div>
              <h3 className="text-xl font-semibold mb-6 text-foreground">Weekly-Only Limits</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Midweek momentum drops</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>No daily tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Slow course correction</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Motivation spikes, then fades</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Too spaced for ADHD support</span>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="benefit-card">
              <div className="flex items-center justify-center mb-4">
                <div className="text-4xl">🚀</div>
              </div>
              <h3 className="text-xl font-semibold mb-6 text-foreground">Hybrid Coaching</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Daily check-ins = steady progress</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Instant feedback = fewer mistakes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Routine reinforcement = faster learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Less slipping = more consistency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Smarter coaching = better results</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Section 4: Waitlist Signup */}
      <section className="py-32 bg-warm-white-subtle relative">
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <WaitlistForm />
          </div>
        </div>
      </section>
    </div>;
};
export default Landing;