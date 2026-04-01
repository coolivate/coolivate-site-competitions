import React from 'react';
import { motion } from 'framer-motion';

const BASE = import.meta.env.BASE_URL;

const apps = [
  {
    category: "AI INFRASTRUCTURE",
    title: "Data Centers",
    desc: "Passive cooling for high-density server racks. No pumps, no maintenance, no single point of failure.",
    img: `${BASE}images/app-data-center.png`
  },
  {
    category: "ELECTRIC VEHICLES",
    title: "EV Battery Packs",
    desc: "Thermal regulation for lithium-ion cells to extend cycle life and prevent thermal runaway.",
    img: `${BASE}images/app-ev-battery.png`
  },
  {
    category: "BESS",
    title: "Battery Energy Storage Systems",
    desc: "Prevent thermal propagation and extend the lifespan of grid-scale storage containers while reducing HVAC energy consumption.",
    img: `${BASE}images/app-bess.png`
  },
  {
    category: "BUILDING MATERIALS",
    title: "Ceiling & Interiors",
    desc: "Integrate into building materials to flatten the diurnal temperature curve, absorbing heat during the day and releasing it at night.",
    img: `${BASE}images/app-ceiling.png`
  }
];

export function Applications() {
  return (
    <section id="applications" className="py-24 md:py-32 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 max-w-2xl text-balance">
            Engineered for High-Density Thermal Environments
          </h2>
          <p className="text-xl text-slate max-w-2xl">
            Our material scales across industries, solving thermal bottlenecks where conventional cooling fails.
          </p>
        </motion.div>

        {/* 2×2 card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {apps.map((app, i) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
              style={{ minHeight: '420px' }}
            >
              {/* Text content */}
              <div className="relative p-7 flex flex-col flex-1">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#1DBDD7] mb-3">
                  {app.category}
                </p>
                <h3 className="text-[22px] font-bold text-navy leading-snug mb-2 max-w-[80%]">
                  {app.title}
                </h3>
                <p className="text-slate text-sm leading-relaxed mt-auto pt-4">
                  {app.desc}
                </p>

                {/* Circular arrow button — top right */}
                <div className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#1DBDD7] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 13L13 1M13 1H4M13 1V10" stroke="#0D0630" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Image — fills bottom, zooms on hover */}
              <div className="overflow-hidden" style={{ height: '230px', flexShrink: 0 }}>
                <img
                  src={app.img}
                  alt={app.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
