import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Brain, Target, Users, ArrowRight, Zap, MessageCircle, TrendingUp } from 'lucide-react';
import heroBrain from '@/assets/hero-brain.jpg';
import videoPreview from '@/assets/video-preview.jpg';
const Landing = () => {
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
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
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 animate-fade-in text-slate-950">
            Build Better Focus in 30 Days
          </h1>
          
          <p style={{
          animationDelay: '0.2s'
        }} className="text-xl md:text-2xl mb-12 max-w-lg leading-relaxed animate-fade-in text-slate-400">
            Weekly coaching. Daily AI check-ins. A new hybrid system designed to help ADHD brains improve faster.
          </p>
          
          {/* Pill Badges */}
          <div className="flex flex-wrap justify-start gap-4 mb-12 animate-scale-in" style={{
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
          <Button size="lg" variant="hero" className="animate-scale-in group" style={{
          animationDelay: '0.6s'
        }}>
            Join Waitlist
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Section 2: Video Demo Preview */}
      <section className="py-24 bg-card/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">See How It Works</h2>
          <p className="text-muted-foreground text-lg mb-8 animate-fade-in">
            Watch how our proven method builds focus, habits, and clarity - in under 2 minutes.
          </p>
          
          <div className="relative group cursor-pointer animate-scale-in">
            <div className="relative overflow-hidden rounded-2xl shadow-card-dark hover:shadow-neural transition-all duration-500">
              <img src={videoPreview} alt="Product demo preview" className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-glow-primary animate-glow-pulse">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Why Hybrid Coaching Works Better */}
      <section className="w-full bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Hybrid Coaching Works Better</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            {/* Column 1 */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">🧠 Human Coaching</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Deep, personal insight</li>
                <li>Real accountability</li>
                <li>Tailored expert feedback</li>
                <li>Emotional motivation</li>
                <li>Strategic support</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">⚠️ Weekly-Only Limits</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Midweek momentum drops</li>
                <li>No daily tracking</li>
                <li>Slow course correction</li>
                <li>Motivation spikes, then fades</li>
                <li>Too spaced for ADHD support</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">🚀 Hybrid Coaching</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Daily check-ins = steady progress</li>
                <li>Instant feedback = fewer mistakes</li>
                <li>Routine reinforcement = faster learning</li>
                <li>Less slipping = more consistency</li>
                <li>Smarter coaching = better results</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Section 4: Waitlist Signup */}
      <section className="py-24 bg-white relative">
        
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Join the Waitlist
            </h2>
            <p className="text-xl text-muted-foreground">
              We limit each cohort to 50 people to keep coaching personal and effective.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-scale-in" style={{
          animationDelay: '0.2s'
        }}>
            <Input type="email" placeholder="Enter your email" className="bg-input border-border text-foreground placeholder:text-muted-foreground" />
            <Button variant="neural" className="whitespace-nowrap">
              Join Waitlist
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Landing;