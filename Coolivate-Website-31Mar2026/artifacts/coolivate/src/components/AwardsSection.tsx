import React from 'react';
import { Trophy, Medal, Award } from 'lucide-react';

const achievements = [
  {
    title: "SDG OpenHack!",
    award: "National Champions",
    date: "October 2025",
    description: "Recognized for innovative solutions in sustainable cooling infrastructure with Coolivate.",
    icon: <Trophy className="w-8 h-8 text-yellow-500" />,
  },
  {
    title: "ASEAN China India Youth Leadership Summit",
    award: "Singapore Grand Finalist",
    date: "October 2025",
    description: "Represented Singapore showcasing sustainable business development and leadership.",
    icon: <Award className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "Singapore x Korea Youth Impact Startup Exchange",
    award: "3rd Place",
    date: "2025",
    description: "Awarded for cross-border startup impact and sustainable technology.",
    icon: <Medal className="w-8 h-8 text-stone-400" />,
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
