import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Technology', href: '#technology' },
    { name: 'Applications', href: '#applications' },
    { name: 'About', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "w-full max-w-5xl rounded-full transition-all duration-300 flex items-center justify-between px-6 py-3.5",
          scrolled 
            ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-black/10 py-3" 
            : "bg-navy shadow-xl"
        )}
      >
        <Link href="/" className="z-10 outline-none focus-visible:ring-2 focus-visible:ring-cyan rounded-sm">
          <Logo light className="text-2xl" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] uppercase tracking-[0.12em] font-semibold text-white/90 hover:text-white transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] uppercase tracking-[0.12em] font-semibold text-white/90 hover:text-white transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </a>
            )
          )}
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden text-white p-1 z-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-3 bg-navy rounded-3xl shadow-2xl flex flex-col p-6 space-y-4 md:hidden overflow-hidden border border-white/10"
            >
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white text-lg font-display uppercase tracking-widest py-3 border-b border-white/10 hover:text-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white text-lg font-display uppercase tracking-widest py-3 border-b border-white/10 hover:text-cyan transition-colors"
                  >
                    {link.name}
                  </a>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
