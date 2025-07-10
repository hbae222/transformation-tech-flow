
import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const WaitlistSection = () => {
  const handleJoinWaitlist = () => {
    window.open('https://tally.so/r/nr9vN5', '_blank');
  };

  return (
    <motion.div 
      data-section="waitlist"
      className="py-4 md:py-6 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        y: -30,
        transition: { duration: 0.8, ease: "easeOut" }
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-pink border border-gray-100"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-bold text-black text-center mb-4"
          style={{
            textShadow: "0 0 20px rgba(139, 69, 19, 0.1)",
            filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"
          }}
        >
          Join the Waitlist
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-muted-foreground max-w-lg mx-auto my-6 text-lg text-center relative z-10"
        >
          We limit each cohort to 50 people to keep coaching personal and effective.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center pt-4"
        >
          <button
            onClick={handleJoinWaitlist}
            className="inline-flex items-center px-12 py-4 rounded-lg text-primary-foreground font-semibold text-lg transition-hover hover:shadow-hover hover:scale-105 relative z-10"
            style={{
              background: "linear-gradient(135deg, hsl(330 85% 55%) 0%, hsl(15 85% 60%) 100%)"
            }}
          >
            Join Waitlist
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
