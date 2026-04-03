import React from 'react';
import { Logo } from './Logo';
import { Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-navy pt-20 pb-8 text-white/70">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 mb-16">
          
          {/* Col 1 */}
          <div>
            <Logo light className="text-3xl mb-4" />
            <p className="text-lg font-medium text-white/90">Passive. Powerful. Proven.</p>
            <p className="mt-4 text-sm max-w-xs text-white/50">
              Advanced thermal management solutions engineered for the next generation of hardware.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase text-sm mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Technology', 'Applications', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-cyan transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-white font-bold tracking-widest uppercase text-sm mb-6">Connect</h4>
            <div className="flex items-center gap-4">
              <a 
                href="mailto:coolivate@gmail.com"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan hover:text-navy hover:border-cyan transition-all duration-300"
                aria-label="Email us"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/company/coolivate"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan hover:text-navy hover:border-cyan transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>

            <div className="mt-6 space-y-2 text-sm">
              <p>
                <a href="mailto:coolivate@gmail.com" className="hover:text-white transition-colors">
                  coolivate@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+6587330611" className="hover:text-white transition-colors">
                  +65 8733 0611
                </a>
              </p>
            </div>
          </div>
          
        </div>

        <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-wide">
          <p>&copy; 2026 Coolivate &middot; All rights reserved</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
