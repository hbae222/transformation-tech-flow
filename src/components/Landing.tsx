import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Brain, Target, Users, ArrowRight, Zap, MessageCircle, TrendingUp } from 'lucide-react';
import { SaveButton } from "@/components/ui/save-button";
import { WaitlistFormCurved } from "@/components/ui/waitlist-form-curved";
import { TestimonialSection } from "@/components/ui/testimonial-section";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import heroBrain from '@/assets/hero-brain.jpg';
import videoPreview from '@/assets/video-preview.jpg';
const Landing = () => {
  return <div className="min-h-screen bg-white text-foreground overflow-x-hidden">
      {/* Section 1: Fullscreen Hero */}
      <section className="relative min-h-screen flex items-center justify-start bg-white overflow-hidden">
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
            loading="lazy"
            title="Hero Background Video"
          />
        </div>
        
        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-left max-w-3xl mx-auto px-6 ml-12"
          style={{ y: 0 }}
          whileInView={{ y: -20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hero-text mb-6 text-black"
          >
            Build Better Focus in 30 Days
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="hero-subtitle mb-8 max-w-2xl text-slate-400"
          >
            Weekly coaching. Daily AI check-ins. A new hybrid system designed to help ADHD brains improve faster.
          </motion.p>
          
          {/* Pill Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
            className="flex flex-wrap justify-start gap-4 mb-8"
          >
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
          </motion.div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          >
            <SaveButton className="group min-w-fit px-8 whitespace-nowrap">
              Join Waitlist
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </SaveButton>
          </motion.div>
        </motion.div>
      </section>

      {/* Sections 2, 3, 4: Seamless Aurora Background */}
      <AuroraBackground className="py-24 md:py-32">
        <div className="relative z-10">
          {/* Section 2: Video Demo Preview */}
          <motion.div 
            className="max-w-4xl mx-auto px-6 text-center mb-32 md:mb-40"
            style={{ y: 0 }}
            whileInView={{ y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold text-black text-center mb-4"
              style={{
                textShadow: "0 0 20px rgba(139, 69, 19, 0.1)",
                filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"
              }}
            >
              See How It Works
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-muted-foreground text-lg mb-12"
            >
              Watch how our proven method builds focus, habits, and clarity - in under 2 minutes.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="video-container relative group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500">
                <img src={videoPreview} alt="Product demo preview" className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                  <div className="play-button w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-glow-primary">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Testimonial Section - placed below video */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="mt-12"
            >
              <TestimonialSection />
            </motion.div>
          </motion.div>

          {/* Section 3: Why Hybrid Coaching Works Better */}
          <motion.div 
            className="max-w-7xl mx-auto px-6 md:px-12 mb-32 md:mb-40"
            style={{ y: 0 }}
            whileInView={{ y: -40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-bold text-black text-center mb-16 leading-tight"
              style={{
                textShadow: "0 0 20px rgba(139, 69, 19, 0.1)",
                filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
                lineHeight: "1.1"
              }}
            >
              Why Hybrid Coaching Works Better
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              
              {/* Column 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="benefit-card"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="text-4xl">🧠</div>
                </div>
                <h3 className="text-xl font-semibold mb-6 text-foreground">Human Coaching</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {[
                    "Deep, personal insight",
                    "Real accountability", 
                    "Tailored expert feedback",
                    "Emotional motivation",
                    "Strategic support"
                  ].map((item, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Column 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="benefit-card"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="text-4xl">⚠️</div>
                </div>
                <h3 className="text-xl font-semibold mb-6 text-foreground">Weekly-Only Limits</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {[
                    "Midweek momentum drops",
                    "No daily tracking",
                    "Slow course correction", 
                    "Motivation spikes, then fades",
                    "Too spaced for ADHD support"
                  ].map((item, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Column 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="benefit-card"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="text-4xl">🚀</div>
                </div>
                <h3 className="text-xl font-semibold mb-6 text-foreground">Hybrid Coaching</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {[
                    "Daily check-ins = steady progress",
                    "Instant feedback = fewer mistakes",
                    "Routine reinforcement = faster learning",
                    "Less slipping = more consistency", 
                    "Smarter coaching = better results"
                  ].map((item, index) => (
                    <li 
                      key={index}
                      className="flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>
          </motion.div>

          {/* Section 4: Waitlist Signup */}
          <motion.div 
            className="py-8 md:py-12 flex items-center justify-center"
            style={{ y: 0 }}
            whileInView={{ y: -25 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <WaitlistFormCurved />
            </motion.div>
          </motion.div>
        </div>
      </AuroraBackground>
    </div>;
};
export default Landing;