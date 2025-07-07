import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Brain, Target, Users, ArrowRight, Zap, MessageCircle, TrendingUp } from 'lucide-react';
import heroBrain from '@/assets/hero-brain.jpg';
import videoPreview from '@/assets/video-preview.jpg';

const Landing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Section 1: Fullscreen Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBrain} 
            alt="Neural network visualization" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-80" />
          <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
        </div>
        
        {/* Neural Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full neural-border" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <h1 className="hero-text mb-8 animate-fade-in">
            This is Coaching That Actually Works
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
            Weekly support from a real coach, enhanced with daily 10-minute voice check-ins with instant AI feedback.
          </p>
          
          {/* Pill Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-scale-in" style={{animationDelay: '0.4s'}}>
            <div className="pill-badge">
              <Target className="w-4 h-4 mr-2" />
              Daily Clarity
            </div>
            <div className="pill-badge">
              <Users className="w-4 h-4 mr-2" />
              Human Coach
            </div>
            <div className="pill-badge">
              <TrendingUp className="w-4 h-4 mr-2" />
              8X Effectiveness
            </div>
          </div>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            variant="hero"
            className="animate-scale-in group" 
            style={{animationDelay: '0.6s'}}
          >
            Get Early Access
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Section 2: Video Demo Preview */}
      <section className="py-24 bg-card/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-muted-foreground text-lg mb-8 animate-fade-in">
            See how it works in 60 seconds
          </p>
          
          <div className="relative group cursor-pointer animate-scale-in">
            <div className="relative overflow-hidden rounded-2xl shadow-card-dark hover:shadow-neural transition-all duration-500">
              <img 
                src={videoPreview} 
                alt="Product demo preview" 
                className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
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

      {/* Section 3: Differentiation Grid */}
      <section className="py-24 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-gradient-mesh" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            How We're Different
          </h2>
          
          {/* Neural Connection Lines */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-px opacity-20">
            <div className="neural-border" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-card-dark hover:shadow-neural transition-all duration-500 group animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">AI Daily Check-ins</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every day, talk to your AI coach for 10 minutes. Get instant feedback and stay on track with your goals.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-card-dark hover:shadow-neural transition-all duration-500 group animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Smart Insights</h3>
              <p className="text-muted-foreground leading-relaxed">
                AI listens, nudges, and keeps you on track - instantly analyzing your progress patterns.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-card border border-border rounded-2xl p-8 shadow-card-dark hover:shadow-neural transition-all duration-500 group animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Human Connection</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every week, fill in any gaps with a real human coach who understands your unique journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Waitlist Signup */}
      <section className="py-24 bg-card/30 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-neural" />
        </div>
        
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8 animate-fade-in">
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get Early Access
            </h2>
            <p className="text-xl text-muted-foreground">
              Be among the first to experience coaching that actually works.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-scale-in" style={{animationDelay: '0.2s'}}>
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="bg-input border-border text-foreground placeholder:text-muted-foreground"
            />
            <Button 
              variant="neural"
              className="whitespace-nowrap"
            >
              Join Waitlist
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6 animate-fade-in" style={{animationDelay: '0.4s'}}>
            Join 500+ professionals already transforming their lives.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Landing;