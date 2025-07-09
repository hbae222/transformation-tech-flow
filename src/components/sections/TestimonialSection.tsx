import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "College Senior",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&auto=format",
      quote: "The daily AI check-ins are a game changer! I used to forget my goals halfway through the week, but now I get gentle reminders that keep me on track. My coach Amelia helps me adjust when life gets chaotic - which is often with ADHD. I've actually completed 3 major projects this month!"
    },
    {
      name: "Mike R.",
      role: "Startup Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&auto=format",
      quote: "I was skeptical about AI coaching, but the combination is brilliant. The AI catches the small stuff I miss - like when I'm overcommitting - and my human coach helps me see the bigger strategic picture and focus my ADHD. I'm making better decisions faster and actually sleeping better knowing I'm not dropping balls."
    },
    {
      name: "Jessica T.",
      role: "Working Mom",
      image: "/lovable-uploads/4044d4b0-c90b-47eb-815d-c77ea65b79d0.png",
      quote: "Between kids and career, I need coaching that fits my chaotic schedule. The daily reminders feel like having a supportive friend who remembers what I'm working on. When I have my weekly call with my coach, we dive deep into what's really blocking me. It's personal attention when I need it most."
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
        What Our Members Say
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6, 
                ease: "easeOut",
                delay: index * 0.2
              }
            }}
            whileHover={{
              y: -10,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Card className="h-full shadow-card hover:shadow-hover transition-shadow duration-300 bg-white/80 backdrop-blur-sm border border-border/50">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover shadow-subtle ring-2 ring-white"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-foreground text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                
                <blockquote className="flex-1 text-muted-foreground leading-relaxed italic">
                  <span className="text-2xl text-muted-foreground font-serif leading-none">"</span>
                  <span className="text-base leading-relaxed">
                    {testimonial.quote}
                  </span>
                  <span className="text-2xl text-muted-foreground font-serif leading-none">"</span>
                </blockquote>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};