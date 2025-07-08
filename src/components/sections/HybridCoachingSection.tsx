import React from 'react';
import { motion } from "framer-motion";

export const HybridCoachingSection = () => {
  const benefits = [
    {
      emoji: "🧠",
      title: "Human Coaching",
      items: [
        "Deep, personal insight",
        "Real accountability", 
        "Tailored expert feedback",
        "Emotional motivation",
        "Strategic support"
      ]
    },
    {
      emoji: "⚠️",
      title: "Weekly-Only Limits",
      items: [
        "Midweek momentum drops",
        "No daily tracking",
        "Slow course correction", 
        "Motivation spikes, then fades",
        "Too spaced for ADHD support"
      ]
    },
    {
      emoji: "🚀",
      title: "Hybrid Human + AI Coaching",
      items: [
        "Daily check-ins = steady progress",
        "Instant feedback = fewer mistakes",
        "Routine reinforcement = faster learning",
        "Less slipping = more consistency", 
        "Smarter coaching = better results"
      ]
    }
  ];

  return (
    <motion.div 
      className="max-w-7xl mx-auto px-6 md:px-12 mb-32 md:mb-40"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { duration: 1, ease: "easeOut" }
      }}
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
        
        {benefits.map((benefit, index) => (
          <motion.div 
            key={benefit.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * (index + 1), ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className={`benefit-card ${index === 2 ? 'shadow-pink' : ''}`}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="text-4xl">{benefit.emoji}</div>
            </div>
            <h3 className="text-xl font-semibold mb-6 text-foreground">{benefit.title}</h3>
            <ul className="space-y-3 text-muted-foreground">
              {benefit.items.map((item, itemIndex) => (
                <li 
                  key={itemIndex}
                  className="flex items-start gap-2"
                >
                  <span className="text-primary mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

      </div>
    </motion.div>
  );
};