
import React from 'react';
import { Users, MessageCircle, TrendingUp } from 'lucide-react';
import { motion } from "framer-motion";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Weekly Expert Coaching",
      description: "We match you with a weekly expert ADHD coach to guide your progress and provide personalized feedback."
    },
    {
      icon: MessageCircle,
      title: "Daily AI Check-ins",
      description: "You have the option to add on a daily AI coach, to accelerate your learning journey with real-time support."
    },
    {
      icon: TrendingUp,
      title: "Consistent Progress Tracking",
      description: "Help users stay motivated and measure improvement week over week with structured accountability."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="section-heading text-black mb-4">Features</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut" 
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center group transition-hover hover:scale-105"
            >
              {/* Icon Container */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white border border-border flex items-center justify-center group-hover:shadow-pink transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-black mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
