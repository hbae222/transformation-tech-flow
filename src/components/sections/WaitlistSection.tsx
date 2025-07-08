import React from 'react';
import { WaitlistFormCurved } from "@/components/ui/waitlist-form-curved";
import { motion } from "framer-motion";

export const WaitlistSection = () => {
  return (
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
  );
};