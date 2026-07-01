import React from 'react';
import { MessageCircle, MessageSquare, Award, Video, Youtube, ExternalLink } from 'lucide-react';
import { officialLinks } from '../data';

export default function OfficialLinksSection() {
  const getIcon = (platform: string) => {
    switch (platform) {
      case 'WhatsApp':
        return <MessageCircle className="w-8 h-8 text-emerald-400" />;
      case 'Discord':
        return <MessageSquare className="w-8 h-8 text-indigo-400" />;
      case 'Vote':
        return <Award className="w-8 h-8 text-amber-400" />;
      case 'TikTok':
        return <Video className="w-8 h-8 text-pink-400" />;
      case 'YouTube':
        return <Youtube className="w-8 h-8 text-red-500" />;
      default:
        return <ExternalLink className="w-8 h-8 text-primary" />;
    }
  };

  return (
    <section id="official-links" className="py-20 relative overflow-hidden bg-dark/20">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            🔗 Hubungan Komunitas
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display mt-4 tracking-tight">
            🌐 Tautan Resmi Server
          </h2>
          <p className="text-custom-text-sec mt-3 max-w-lg mx-auto text-sm md:text-base">
            Bergabunglah dengan jejaring sosial resmi kami untuk mendapatkan informasi tercepat, event, dan berkomunikasi dengan pemain lain.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {officialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-custom-card/30 backdrop-blur-md border border-white/5 rounded-[24px] p-6 hover:border-primary/30 transition-all duration-300 group flex flex-col justify-between hover:scale-[1.03] shadow-lg ${link.colorClass}`}
            >
              <div>
                <div className="p-3 bg-dark/50 rounded-2xl w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(link.platform)}
                </div>
                <h3 className="text-white font-extrabold font-display text-lg tracking-wide group-hover:text-primary transition-colors">
                  {link.name}
                </h3>
                <p className="text-xs text-custom-text-sec mt-3 leading-relaxed">
                  {link.description}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider mt-6 group-hover:translate-x-1.5 transition-transform duration-300">
                <span>Kunjungi</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
