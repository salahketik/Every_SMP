import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServerStatusWidget from './components/ServerStatusWidget';
import IPCard from './components/IPCard';
import RulesSection from './components/RulesSection';
import StaffSection from './components/StaffSection';
import RankSection from './components/RankSection';
import ContactPurchaseSection from './components/ContactPurchaseSection';
import OfficialLinksSection from './components/OfficialLinksSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-custom-bg text-white relative">
      {/* Dynamic Background Noise Texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-black/10 pointer-events-none z-30" />

      {/* Header / Navbar */}
      <Navbar />

      {/* Main Structural Sections */}
      <main>
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Server Status */}
        <ServerStatusWidget />

        {/* Section 3: IP Server */}
        <IPCard />

        {/* Section 4 & 5: Server & Group Rules */}
        <RulesSection />

        {/* Section 6: Staff members */}
        <StaffSection />

        {/* Section 7: Ranks and creators */}
        <RankSection />

        {/* Section 8: Purchase contacts */}
        <ContactPurchaseSection />

        {/* Section 9: Official Social and Vote links */}
        <OfficialLinksSection />
      </main>

      {/* Section 10: Footer */}
      <Footer />
    </div>
  );
}
