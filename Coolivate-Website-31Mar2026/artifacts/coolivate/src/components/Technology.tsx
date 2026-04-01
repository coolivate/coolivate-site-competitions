import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Zap, Maximize } from 'lucide-react';

const hotspots = [
  { id: 'A', top: '45%', left: '30%', label: 'Internal Core' },
  { id: 'B', top: '60%', left: '55%', label: 'Thermal Interface' },
  { id: 'C', top: '25%', left: '80%', label: 'External System' },
];

const panelData = {
  A: {
    header: 'Kinetic Heat Management',
    metrics: [
      { value: '+91.8%', label: 'Heat Diffusion Efficiency' },
      { value: '−18°C', label: 'Peak Temp Reduction' },
    ],
    summary: 'Stabilizes internal chemistry even under extreme 10C discharge rates.',
  },
  B: {
    header: 'Thermal Equilibrium',
    metrics: [
      { value: '12×', label: 'Faster Thermal Transfer' },
      { value: '<5°C', label: 'Temperature Gradient' },
    ],
    summary: 'Outperforms standard paraffin to ensure uniform cooling across all cells.',
  },
  C: {
    header: 'Payload Optimization',
    metrics: [
      { value: '53.1%', label: 'Gravimetric Efficiency' },
      { value: 'Zero-Leak', label: 'Form Stability' },
    ],
    summary: 'Eliminates heavy enclosures, maximizing the cell-to-pack ratio for high-performance EVs.',
  },
};

function ThermalVideoOverlay() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoEnded, setVideoEnded] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);

  const activeData = activeHotspot ? panelData[activeHotspot as keyof typeof panelData] : null;

  return (
    <div className="max-w-3xl mx-auto px-4">
      {/* Stack vertically on mobile, side-by-side on md+ */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">

        {/* Video — full width on mobile, 70% on md+ */}
        <div className="relative w-full md:flex-none" style={{ flex: '0 0 70%' }}>
          <video
            ref={videoRef}
            className="w-full rounded-2xl block"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={() => setVideoEnded(true)}
          >
            <source src={`${import.meta.env.BASE_URL}videos/application-bess.mp4`} type="video/mp4" />
          </video>

          <AnimatePresence>
            {videoEnded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 pointer-events-none"
              >
                {hotspots.map((hs) => (
                  <div
                    key={hs.id}
                    className="absolute pointer-events-auto"
                    style={{ top: hs.top, left: hs.left, transform: 'translate(-50%, -50%)' }}
                  >
                    <button
                      onMouseEnter={() => setActiveHotspot(hs.id)}
                      onMouseLeave={() => setActiveHotspot(null)}
                      onClick={() => setActiveHotspot(prev => (prev === hs.id ? null : hs.id))}
                      className="relative w-8 h-8 rounded-full flex items-center justify-center focus:outline-none"
                      aria-label={hs.label}
                    >
                      <span className="absolute inset-0 rounded-full bg-[#1DBDD7] opacity-25 animate-ping" />
                      <span className="relative w-7 h-7 rounded-full bg-[#1DBDD7] border-2 border-white shadow-lg flex items-center justify-center text-white font-bold text-xs">
                        +
                      </span>
                    </button>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Specs panel — full width on mobile (below video), 30% on md+ */}
        <div className="relative w-full md:flex-none" style={{ flex: '0 0 30%' }}>
          <AnimatePresence mode="wait">
            {activeData && (
              <motion.div
                key={activeHotspot}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="w-full rounded-2xl border border-slate/10 bg-white shadow-xl p-4 text-left"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#1DBDD7] mb-2">
                  Technical Specs
                </p>
                <h4 className="text-[14px] font-bold text-navy mb-4 leading-snug">
                  {activeData.header}
                </h4>

                <div className="flex flex-row md:flex-col gap-6 md:gap-0 md:space-y-4 mb-4">
                  {activeData.metrics.map((m) => (
                    <div key={m.label} className="flex-1 md:flex-none">
                      <p className="text-[24px] font-black text-navy leading-none">{m.value}</p>
                      <p className="text-[11px] text-slate mt-0.5 leading-snug">{m.label}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate/10">
                  <p className="text-[11px] text-slate/80 leading-relaxed">{activeData.summary}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

export function Technology() {
  const cards = [
    {
      icon: Lock,
      title: "100% Leak-Proof",
      description: "Encapsulated phase change material. No liquid pathways, no risk of hardware damage."
    },
    {
      icon: Zap,
      title: "6× Faster Cooling",
      description: "Absorbs and dissipates heat faster than conventional thermal interface materials."
    },
    {
      icon: Maximize,
      title: "Zero Air Gap",
      description: "Conforms perfectly to surfaces, eliminating the thermal resistance of trapped air."
    }
  ];

  return (
    <section id="technology" className="py-14 md:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-0"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">What is FCPCM?</h2>
          <p className="text-xl md:text-2xl text-cyan font-medium mb-6">Phase Change. Zero Leak. Maximum Cooling.</p>

          <ThermalVideoOverlay />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white p-8 rounded-3xl border border-slate/10 shadow-lg shadow-black/[0.03] hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan/10 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-light-cyan flex items-center justify-center text-cyan mb-6 group-hover:scale-110 transition-transform duration-300">
                <card.icon strokeWidth={1.5} size={32} />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">{card.title}</h3>
              <p className="text-slate text-lg leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-navy rounded-[2rem] p-8 md:p-16 text-center md:text-left relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-cyan/20 blur-[100px] rounded-full pointer-events-none" />

          <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed md:leading-normal font-light relative z-10 text-balance">
            FCPCM maintains hardware temperatures within safe thresholds even under sustained peak loads, <span className="text-cyan font-semibold">outperforming traditional heat sinks and liquid cooling</span> in form factor, safety, and longevity.
          </p>
          <div className="mt-8 pt-8 border-t border-white/10 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-300 text-sm tracking-wide">
              Based on peer-reviewed research
            </p>
            <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-semibold inline-flex items-center gap-2 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cyan"></span>
              NTU Singapore
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
