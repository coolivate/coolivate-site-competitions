import React from 'react';
import { motion } from 'framer-motion';

export function ContactCTA() {
  return (
    <section id="contact" className="py-32 bg-[#EAFD6F] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-navy mb-6 tracking-tight">
            Interested in our technology?
          </h2>
          <p className="text-xl md:text-2xl text-navy/80 mb-12 font-medium max-w-2xl mx-auto">
            Reach out to explore partnerships, pilots, or investment.
          </p>
          <a 
            href="mailto:coolivate@gmail.com"
            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-transparent border-2 border-navy text-navy font-bold uppercase tracking-widest text-sm hover:bg-navy hover:text-[#EAFD6F] hover:-translate-y-1 transition-all duration-300"
          >
            Get in Touch &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
