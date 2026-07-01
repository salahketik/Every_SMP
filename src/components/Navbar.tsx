import React, { useState, useEffect } from 'react';
import { Menu, X, Play, Shield } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Status', id: 'status-server' },
    { name: 'IP Server', id: 'ip-server' },
    { name: 'Aturan', id: 'rules' },
    { name: 'Staff', id: 'staff' },
    { name: 'Rank', id: 'ranks' },
    { name: 'Medsos', id: 'official-links' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      {/* Ran Dev Creator Banner (Watermark di bawah header / di bagian header atas) */}
      <div className="bg-gradient-to-r from-primary/30 via-dark/95 to-secondary/30 border-b border-white/5 py-2.5 px-4 text-center text-[10px] sm:text-xs text-custom-text-sec flex flex-wrap items-center justify-center gap-x-2 gap-y-1 relative z-50 backdrop-blur-md">
        <span className="inline-flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
          <strong className="text-white font-bold">🎨 Web Designer Portfolio:</strong>
        </span>
        <span>Website ini didesain secara profesional oleh <strong className="text-white">Ran Dev</strong>.</span>
        <span className="hidden sm:inline text-white/20">|</span>
        <span>Berminat membuat desain website berkualitas tinggi?</span>
        <a 
          href="https://wa.me/62895602592430?text=Halo%20Ran%20Dev,%20saya%20tertarik%20dengan%20desain%20website%20EVERY%20SMP%20dan%20ingin%20membuat%20desain%20website" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-primary/20 hover:bg-primary text-primary hover:text-white px-2.5 py-1 rounded-md text-[10px] font-black transition-all duration-300 flex items-center gap-1 border border-primary/30 hover:border-primary cursor-pointer hover:scale-105"
        >
          Hubungi Ran Dev (0895-6025-92430) ➡️
        </a>
      </div>

      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark/85 backdrop-blur-md py-4 border-b border-white/5 shadow-lg' 
          : 'bg-transparent py-6'
      }`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo and Branding */}
        <div 
          onClick={() => scrollToSection('hero')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <img
            src="/src/assets/images/every_smp_logo_new_1782911173416.jpg"
            alt="EVERY SMP Logo"
            referrerPolicy="no-referrer"
            className="w-10 h-10 rounded-xl border border-primary/30 group-hover:border-primary group-hover:scale-105 transition-all"
          />
          <span className="text-lg font-black tracking-wider text-white font-display">
            EVERY <span className="text-primary group-hover:text-secondary transition-colors">SMP</span>
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 p-1.5 rounded-full backdrop-blur-sm">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="px-4.5 py-2 rounded-full text-xs font-bold text-custom-text-sec hover:text-white hover:bg-white/5 transition-all duration-300 cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Action Button (Desktop) */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection('ip-server')}
            className="bg-primary hover:bg-secondary text-white text-xs font-black px-5 py-3 rounded-full flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-primary/10 border border-primary/20"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            PLAY NOW
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden fixed inset-y-0 right-0 w-72 bg-dark/95 border-l border-white/5 backdrop-blur-lg z-50 flex flex-col p-6 pt-24 shadow-2xl animate-fadeIn">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 cursor-pointer"
            aria-label="Close Menu"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex flex-col gap-3 mt-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="w-full text-left py-3.5 px-4 bg-white/5 border border-white/5 rounded-2xl text-sm font-bold text-custom-text-sec hover:text-white hover:border-primary/20 transition-all cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="mt-auto pb-6">
            <button
              onClick={() => scrollToSection('ip-server')}
              className="w-full bg-primary hover:bg-secondary text-white py-4 rounded-2xl font-black text-xs tracking-widest flex items-center justify-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              GABUNG SEKARANG
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
