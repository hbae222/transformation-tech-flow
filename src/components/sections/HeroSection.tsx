import React from 'react';
import { Users, MessageCircle, TrendingUp, ArrowRight } from 'lucide-react';
import { SaveButton } from "@/components/ui/save-button";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-start bg-white overflow-hidden">
      {/* Background Video with Parallax */}
      <div className="absolute inset-0 w-full h-full overflow-hidden parallax-slow">
        <iframe 
          src="https://player.cloudinary.com/embed/?cloud_name=djjokty1s&public_id=ADHD_Header_Video_2_dofrcn&profile=cld-default&autoplay=true&loop=true&muted=true&controls=false" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-110"
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
      
      {/* Hero Content with Enhanced Parallax */}
      <motion.div 
        className="relative z-10 text-left max-w-3xl mx-auto px-6 ml-12 parallax-medium"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileInView={{ 
          y: [0, -15, 0],
          transition: { 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }
        }}
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
            Join Limited Waitlist
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </SaveButton>
        </motion.div>
      </motion.div>
    </section>
  );
};