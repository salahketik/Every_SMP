import React from 'react';
import { Heart, ShieldCheck, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F1117] pt-20 pb-10 relative overflow-hidden">
      {/* Separator Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Logo and Slogan */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <div className="flex items-center gap-3">
              <img
                src="/src/assets/images/every_smp_logo_new_1782911173416.jpg"
                alt="EVERY SMP Logo"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-xl border border-primary/20"
              />
              <span className="text-xl font-black tracking-wider text-white font-display">
                EVERY <span className="text-primary">SMP</span>
              </span>
            </div>
            <p className="text-sm font-medium italic text-primary mt-1 font-display tracking-wide">
              "Bangun, Bertahan, Berkembang Bersama."
            </p>
          </div>

          {/* Quick statement */}
          <div className="text-center md:text-right max-w-sm">
            <p className="text-xs text-custom-text-sec leading-relaxed">
              EVERY SMP adalah server Minecraft independen dan tidak memiliki afiliasi resmi dengan Mojang Studios, Microsoft, atau Minecraft secara langsung.
            </p>
          </div>
        </div>

        {/* Footer Bottom Metadata */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 text-xs text-custom-text-sec">
          <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
            <div>
              &copy; 2026 <strong>EVERY SMP</strong>. Semua Hak Dilindungi.
            </div>
            {/* Ran Dev Credit Watermark di Footer */}
            <div className="text-white/40 text-[11px] flex flex-wrap items-center justify-center md:justify-start gap-1.5 mt-1 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
              <span>🖥️ Website didesain oleh <strong className="text-white">Ran Dev</strong></span>
              <span className="text-white/20">|</span>
              <span>Berminat membuat desain website?</span>
              <a
                href="https://wa.me/62895602592430?text=Halo%20Ran%20Dev,%20saya%20tertarik%20dengan%20desain%20website%20EVERY%20SMP%20dan%20ingin%20membuat%20desain%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary font-black underline transition-colors"
              >
                Hubungi Ran Dev (0895-6025-92430)
              </a>
            </div>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-primary hover:text-white rounded-full transition-all duration-300 font-bold border border-white/5 hover:border-primary cursor-pointer group"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
