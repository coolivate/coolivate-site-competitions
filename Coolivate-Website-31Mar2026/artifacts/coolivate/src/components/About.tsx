import React from 'react';
import { motion } from 'framer-motion';

const BASE = import.meta.env.BASE_URL;

export function About() {
  return (
    <section id="about" className="bg-white">
      {/* Intro Block with Dark Navy Background */}
      <div className="relative py-24 md:py-32 bg-[#0A0B1E] overflow-hidden">
        {/* Abstract Mesh SVG Background */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mesh" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M80 0 L0 80 M0 0 L80 80" stroke="#1DBDD7" strokeWidth="1" fill="none" />
              <circle cx="40" cy="40" r="1.5" fill="#ffffff" />
              <circle cx="0" cy="0" r="1.5" fill="#ffffff" />
              <circle cx="80" cy="0" r="1.5" fill="#ffffff" />
              <circle cx="0" cy="80" r="1.5" fill="#ffffff" />
              <circle cx="80" cy="80" r="1.5" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mesh)" />
        </svg>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1DBDD7]/10 text-[#1DBDD7] border border-[#1DBDD7]/20 text-sm font-bold tracking-wide uppercase mb-6">
                NTU Singapore
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Coolivate</h2>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-6">
                Coolivate was founded to commercialise breakthrough passive cooling technology developed at Nanyang Technological University, Singapore.
              </p>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8">
                Our FCPCM (Flexible Composite Phase Change Material) addresses the growing thermal management crisis in AI hardware, EVs, and battery energy storage systems, without the cost, complexity, or risk of liquid cooling systems.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 rounded-full bg-[#1DBDD7] text-[#0D0630] font-bold uppercase tracking-wider text-sm shadow-lg hover:bg-[#15a8c2] hover:scale-105 transition-all duration-300"
              >
                Learn More &rarr;
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl h-[340px] lg:h-[400px]"
            >
              <img
                src={`${BASE}images/bess-sunset.jpg`}
                alt="BESS battery energy storage system at sunset"
                className="w-full h-full object-cover object-[center_55%]"
              />
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}
