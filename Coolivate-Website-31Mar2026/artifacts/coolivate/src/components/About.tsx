import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const BASE = import.meta.env.BASE_URL;

const founders = [
  { name: "Neha Murukesan", role: "Co-founder & CEO", photo: `${BASE}images/team/NM.png`, objectPos: "center top", linkedin: "https://www.linkedin.com/in/neha-murukesan-09b79b27a/" },
  { name: "Lim Wei Xun",    role: "Co-founder & COO", photo: `${BASE}images/team/WX.png`, objectPos: "center top", linkedin: "https://www.linkedin.com/in/weixun1/" },
  { name: "Lee Chun Sum",   role: "Co-founder & CFO", photo: `${BASE}images/team/CS.png`, objectPos: "center top", linkedin: "https://www.linkedin.com/in/lee-chun-sum-64341b372/" }
];

const advisors = [
  {
    name: "Girish Kumar (PhD)",
    title: "Lead Researcher",
    experience: "5 years in Thermal and Fluid Engineering",
    photo: `${BASE}images/team/GK.png`,
    objectPos: "center 15%"
  },
  {
    name: "Prof. Shancheng Wang",
    title: "Technical Advisor",
    experience: "8 years in Material Science & Engineering",
    photo: `${BASE}images/team/SW.png`,
    objectPos: "center 15%"
  },
  {
    name: "Rajesh Kumar (PhD)",
    title: "Commercialisation Advisor",
    experience: "P&G Principal Scientist",
    photo: `${BASE}images/team/RK.png`,
    objectPos: "center 15%"
  },
  {
    name: "Jay Teo (BSocSc, PLE)",
    title: "Business Advisor",
    experience: "4 years in VC & cross-border strategy",
    photo: `${BASE}images/team/JT.png`,
    objectPos: "center 15%"
  },
  {
    name: "Raffles Ng (MBA)",
    title: "Logistics Mentor",
    experience: "Associate Director at HVAC Carrier",
    photo: `${BASE}images/team/RN.png`,
    objectPos: "center 15%"
  }
];

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

      <div className="pt-12 pb-24 md:pt-16 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">

          {/* Team Section */}
          <div className="text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-navy mb-12"
            >
              Our Team
            </motion.h3>

            {/* Founders */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-3xl mx-auto mb-20">
              {founders.map((person, i) => (
                <motion.div
                  key={person.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="text-center group"
                >
                  <div className="transform group-hover:-translate-y-2 transition-transform duration-300 mb-4">
                    <div className="w-28 h-28 rounded-full overflow-hidden mx-auto border-[3px] border-white shadow-lg ring-2 ring-[#1DBDD7]/20">
                      <img
                        src={person.photo}
                        alt={person.name}
                        className="w-full h-full object-cover object-[center_25%]"
                      />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-navy mb-1">{person.name}</h4>
                  <p className="text-[#1DBDD7] font-bold uppercase text-sm tracking-wide mb-3">{person.role}</p>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1DBDD7]/10 text-[#1DBDD7] border border-[#1DBDD7]/20 text-xs font-semibold hover:bg-[#1DBDD7] hover:text-white hover:border-[#1DBDD7] transition-all duration-200"
                    aria-label={`${person.name} on LinkedIn`}
                  >
                    <Linkedin size={12} />
                    LinkedIn
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Advisors */}
            <div className="pt-12 border-t border-slate/10">
              <h4 className="text-sm font-bold uppercase tracking-widest text-slate mb-10">Management & Advisory</h4>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-10 max-w-5xl mx-auto">
                {advisors.map((person, i) => (
                  <motion.div
                    key={person.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33%-1.5rem)] text-center group"
                  >
                    <div className="transform group-hover:-translate-y-1 transition-transform duration-300 mb-4">
                      <div className="w-20 h-20 rounded-full overflow-hidden mx-auto border-[3px] border-white shadow-md ring-2 ring-[#1DBDD7]/15">
                        <img
                          src={person.photo}
                          alt={person.name}
                          className="w-full h-full object-cover object-[center_20%]"
                        />
                      </div>
                    </div>
                    <h5 className="text-[15px] font-bold text-navy leading-tight mb-1">{person.name}</h5>
                    <p className="text-xs font-bold text-[#1DBDD7] uppercase tracking-wide mb-1">{person.title}</p>
                    <p className="text-[12px] text-slate px-3 leading-snug">{person.experience}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
