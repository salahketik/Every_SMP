import React from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export default function ContactPurchaseSection() {
  const adminNumbers = [
    {
      name: "Admin Utama (Refan)",
      number: "089502655068",
      formatted: "0895-0265-5068",
      text: "Halo Admin EVERY SMP (Refan), saya tertarik untuk membeli rank server di EVERY SMP. Bagaimana langkah selanjutnya?"
    },
    {
      name: "Admin Alternatif (Reza)",
      number: "085370354823",
      formatted: "0853-7035-4823",
      text: "Halo Admin EVERY SMP (Reza), saya ingin melakukan donasi rank server EVERY SMP. Mohon dipandu prosedurnya."
    }
  ];

  return (
    <section id="contact-purchase" className="py-24 relative overflow-hidden bg-dark/40">
      {/* Visual separators and glows */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-br from-custom-card/80 to-dark/90 border border-white/10 rounded-[32px] p-8 md:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle background texture */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* CTA Copy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase bg-primary/10 px-4 py-2 rounded-full border border-primary/20 inline-block">
                🛒 Pembelian Rank Resmi
              </span>
              <h2 className="text-3xl md:text-5xl font-black font-display text-white tracking-tight leading-none">
                Beli Rank Server EVERY SMP
              </h2>
              <p className="text-custom-text-sec text-sm md:text-base leading-relaxed max-w-lg">
                Proses pembayaran instan, aman, dan langsung diproses oleh owner/staff utama kami. Kami mendukung transfer bank, e-wallet (Dana, Gopay, OVO, dll), dan Qris.
              </p>

              {/* Guarantees */}
              <div className="space-y-3.5 pt-2 hidden md:block">
                <div className="flex items-center gap-3 justify-center lg:justify-start text-sm">
                  <ShieldCheck className="w-5 h-5 text-success-custom flex-shrink-0" />
                  <span className="text-custom-text-sec">Aktivasi Rank Instant (Maksimal 10 Menit)</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start text-sm">
                  <ShieldCheck className="w-5 h-5 text-success-custom flex-shrink-0" />
                  <span className="text-custom-text-sec">Dukungan Bantuan Chat Aktif 24 Jam</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start text-sm">
                  <ShieldCheck className="w-5 h-5 text-success-custom flex-shrink-0" />
                  <span className="text-custom-text-sec">Donasi 100% untuk Biaya Upgrade Jaringan Server</span>
                </div>
              </div>
            </div>

            {/* Admin Contacts Card list */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-custom-text-sec block text-center lg:text-left mb-2">Hubungi Admin Via WhatsApp:</span>
              {adminNumbers.map((admin, idx) => (
                <div
                  key={idx}
                  className="bg-dark/60 rounded-[20px] p-5 border border-white/5 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1"
                >
                  <h4 className="text-xs text-custom-text-sec font-mono font-bold uppercase tracking-wide mb-1">
                    {admin.name}
                  </h4>
                  <div className="flex items-center justify-between gap-4 mt-2">
                    <span className="text-white font-mono text-base md:text-lg font-bold">
                      {admin.formatted}
                    </span>
                    <a
                      href={`https://wa.me/${admin.number.replace(/\D/g, '')}?text=${encodeURIComponent(admin.text)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-500 hover:bg-emerald-600 text-dark p-3 rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-emerald-500/20"
                      title={`Hubungi ${admin.name}`}
                      aria-label={`Hubungi ${admin.name}`}
                    >
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </a>
                  </div>
                </div>
              ))}

              <div className="text-center lg:text-left text-[11px] text-custom-text-sec flex items-center gap-2 justify-center lg:justify-start mt-2">
                <HelpCircle className="w-3.5 h-3.5 text-secondary" />
                <span>Pilihlah salah satu nomor untuk mempermudah antrean chat.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
