import React from 'react';
import { motion } from 'framer-motion';
import { ParticleCanvas } from './ParticleCanvas';
import { Logo } from './Logo';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20">
      <ParticleCanvas />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex justify-center"
        >
          <Logo className="text-[56px] md:text-[96px]" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          /* 1. REMOVED 'text-navy' here */
          className="text-[24px] sm:text-[32px] md:text-[48px] leading-[1.2] font-semibold mb-20 text-balance"
          /* 2. MOVED styles here to cover the whole headline */
          style={{
            background: 'linear-gradient(90deg, #0D0630 0%, #1DBDD7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline-block'
          }}
        >
          The World's First <br className="hidden md:block" />
          Flexible Passive Cooling Layer
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a 
            href="#technology" 
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1DBDD7] text-[#0D0630] font-bold uppercase tracking-wider text-sm shadow-lg shadow-cyan/30 hover:bg-[#15a8c2] hover:scale-105 transition-all duration-300"
          >
            Our Technology &rarr;
          </a>
          <a 
            href="#applications" 
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-navy text-white font-bold uppercase tracking-wider text-sm shadow-lg shadow-navy/20 hover:bg-navy/90 hover:scale-105 transition-all duration-300"
          >
            Applications &rarr;
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs uppercase tracking-widest text-slate mb-2 font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-slate/30 overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-cyan"
          />
        </div>
      </motion.div>
    </section>
  );
}
