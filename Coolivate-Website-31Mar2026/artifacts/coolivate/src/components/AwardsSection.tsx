import React from 'react';
import { Trophy, Medal, Award } from 'lucide-react';

const achievements = [
  {
    title: "Oxford University Innovation Pitch",
    award: "NTU Top 3",
    date: "Mar 2026",
    description: "Showcasing scalable solutions to global investors",
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: "NUS Women in Business x BLOCK 71",
    award: "1st Place",
    date: "Mar 2026",
    description: "Greenlane to Pitch for Incubation at BLOCK71 - THE HANGAR",
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: "Singapore x Korea Youth Impact Startup Exchange",
    award: "3rd Place",
    date: "Jan 2026",
    description: "Awarded for cross-border startup impact and sustainable technology",
    icon: <Medal className="w-8 h-8 text-stone-400" />,
  },
  {
    title: "SDG OpenHack!",
    award: "National Champion",
    date: "Oct 2025",
    description: "Selected to represent Singapore in 2026 SDG Olympiad Geneva",
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: "ASEAN-China-India Youth Leadership Summit",
    award: "Singapore Grand Finalist",
    date: "Oct 2025",
    description: "Represented Singapore and leading regional sustainable ideas",
    icon: <Award className="w-8 h-8 text-blue-500" />,
  },
  
];

export function AwardsSection() {
  return (
    <section id="awards" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
            Competitions & Awards
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate mx-auto">
            A timeline of Coolivate's recognition in sustainability, innovation, and business development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate/10 p-8 flex flex-col items-center text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-light-cyan rounded-full mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>

              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-800 mb-3">
                {item.award}
              </span>

              <p className="text-sm text-slate font-medium mb-4 uppercase tracking-wider">{item.date}</p>

              <p className="text-slate leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
