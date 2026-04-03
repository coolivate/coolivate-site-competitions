import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { VideoShowcase } from '@/components/VideoShowcase';
import { Technology } from '@/components/Technology';
import { Applications } from '@/components/Applications';
import { About } from '@/components/About';
import { AwardsSection } from '@/components/AwardsSection';
import { ContactCTA } from '@/components/ContactCTA';
import { Footer } from '@/components/Footer';

export default function LandingFull() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-cyan selection:text-navy">
      <Navbar showAwards />
      <main>
        <Hero />
        <VideoShowcase />
        <Technology />
        <Applications />
        <About showTeam />
        <AwardsSection />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
