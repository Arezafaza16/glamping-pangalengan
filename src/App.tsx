/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Features } from './components/Features';
import { Packages } from './components/Packages';
import { Gallery } from './components/Gallery';
import { VisionMission } from './components/VisionMission';
import { TeamSection } from './components/TeamSection';
import { ClientSection } from './components/ClientSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PackageItem } from './types';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);

  const handleSelectPackage = (pkg: PackageItem) => {
    setSelectedPackage(pkg);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#209eb6]/20 selection:text-[#126374]">
      {/* Sticky Navigation */}
      <Navbar />

      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Us Section */}
        <About />

        {/* 3. Experience / Why Choose Us */}
        <Features />

        {/* 4. Packages Section */}
        <Packages onSelectPackage={handleSelectPackage} />

        {/* 5. Adventure Gallery */}
        <Gallery />

        {/* 6. Vision & Mission */}
        <VisionMission />

        {/* 7. Team Members */}
        <TeamSection />

        {/* 8. Clients Section */}
        <ClientSection />

        {/* 8. Call-to-Action Section */}
        <CtaSection />

        {/* 8. Contact & Inquiry Section */}
        <ContactSection selectedPackage={selectedPackage} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent WhatsApp Floating Button */}
      <FloatingWhatsApp />
    </div>
  );
}
