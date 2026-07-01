import React, { useState } from 'react';
import { Copy, Check, Laptop, Smartphone, HelpCircle } from 'lucide-react';

export default function IPCard() {
  const [copiedType, setCopiedType] = useState<'java' | 'bedrock' | 'port' | null>(null);

  const copyToClipboard = (text: string, type: 'java' | 'bedrock' | 'port') => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedType(type);
      setTimeout(() => {
        setCopiedType(null);
      }, 2500);
    });
  };

  return (
    <section id="ip-server" className="py-20 relative overflow-hidden bg-dark/40">
      {/* Visual background details */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-secondary uppercase bg-secondary/10 px-4 py-2 rounded-full border border-secondary/20">
            🔌 Koneksi Server
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display mt-4 tracking-tight">
            🎮 Alamat IP Server
          </h2>
          <p className="text-custom-text-sec mt-3 max-w-lg mx-auto text-sm md:text-base">
            Salin alamat IP di bawah ini sesuai dengan platform Minecraft yang Anda gunakan (PC atau HP/Konsol).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Java Card */}
          <div className="bg-custom-card/50 backdrop-blur-lg border border-white/5 rounded-[24px] p-8 relative overflow-hidden flex flex-col justify-between group hover:border-primary/20 transition-all duration-300 shadow-xl">
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-300 pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <Laptop className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold font-display text-white text-lg">Minecraft Java Edition</h3>
                  <p className="text-xs text-custom-text-sec">Untuk PC / MacOS / Linux</p>
                </div>
              </div>

              <p className="text-sm text-custom-text-sec mb-6">
                Gunakan alamat IP ini di menu <strong className="text-white font-medium">Multiplayer &gt; Add Server</strong> pada Minecraft Java launcher Anda.
              </p>
            </div>

            <div className="bg-dark/60 rounded-2xl p-4 border border-white/5 flex items-center justify-between gap-4 mt-auto">
              <div className="overflow-hidden">
                <span className="text-xs text-custom-text-sec block font-mono uppercase tracking-wider">IP Server Java</span>
                <span className="text-white font-mono text-sm md:text-base select-all font-semibold block truncate">
                  play.everysmp.mineidhost.icu:19136
                </span>
              </div>
              <button
                id="copy-java-ip"
                onClick={() => copyToClipboard('play.everysmp.mineidhost.icu:19136', 'java')}
                className={`p-3 rounded-xl flex items-center justify-center transition-all duration-300 border cursor-pointer ${
                  copiedType === 'java'
                    ? 'bg-success-custom/20 text-success-custom border-success-custom/30 scale-95'
                    : 'bg-white/5 text-custom-text-sec border-white/5 hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg'
                }`}
                title="Salin IP Java"
                aria-label="Salin IP Java"
              >
                {copiedType === 'java' ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Bedrock Card */}
          <div className="bg-custom-card/50 backdrop-blur-lg border border-white/5 rounded-[24px] p-8 relative overflow-hidden flex flex-col justify-between group hover:border-secondary/20 transition-all duration-300 shadow-xl">
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-all duration-300 pointer-events-none" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-extrabold font-display text-white text-lg">Minecraft Bedrock Edition</h3>
                  <p className="text-xs text-custom-text-sec">Untuk HP Android / iOS / Win 10 / Konsol</p>
                </div>
              </div>

              <p className="text-sm text-custom-text-sec mb-6">
                Gunakan IP dan Port ini di menu <strong className="text-white font-medium">Play &gt; Servers &gt; Add Server</strong> pada Minecraft PE atau Bedrock Anda.
              </p>
            </div>

            <div className="space-y-3 mt-auto">
              {/* Bedrock IP */}
              <div className="bg-dark/60 rounded-2xl p-4 border border-white/5 flex items-center justify-between gap-4">
                <div className="overflow-hidden">
                  <span className="text-xs text-custom-text-sec block font-mono uppercase tracking-wider">IP Server Bedrock</span>
                  <span className="text-white font-mono text-sm md:text-base select-all font-semibold block truncate">
                    play.everysmp.mineidhost.icu
                  </span>
                </div>
                <button
                  id="copy-bedrock-ip"
                  onClick={() => copyToClipboard('play.everysmp.mineidhost.icu', 'bedrock')}
                  className={`p-3 rounded-xl flex items-center justify-center transition-all duration-300 border cursor-pointer ${
                    copiedType === 'bedrock'
                      ? 'bg-success-custom/20 text-success-custom border-success-custom/30 scale-95'
                      : 'bg-white/5 text-custom-text-sec border-white/5 hover:bg-secondary hover:text-white hover:scale-105'
                  }`}
                  title="Salin IP Bedrock"
                  aria-label="Salin IP Bedrock"
                >
                  {copiedType === 'bedrock' ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>

              {/* Bedrock Port */}
              <div className="bg-dark/60 rounded-2xl p-4 border border-white/5 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-custom-text-sec block font-mono uppercase tracking-wider">Port Bedrock</span>
                  <span className="text-white font-mono text-sm md:text-base select-all font-semibold block">
                    19136
                  </span>
                </div>
                <button
                  id="copy-bedrock-port"
                  onClick={() => copyToClipboard('19136', 'port')}
                  className={`p-3 rounded-xl flex items-center justify-center transition-all duration-300 border cursor-pointer ${
                    copiedType === 'port'
                      ? 'bg-success-custom/20 text-success-custom border-success-custom/30 scale-95'
                      : 'bg-white/5 text-custom-text-sec border-white/5 hover:bg-secondary hover:text-white hover:scale-105'
                  }`}
                  title="Salin Port Bedrock"
                  aria-label="Salin Port Bedrock"
                >
                  {copiedType === 'port' ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copy Notification Toast */}
        {copiedType && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-success-custom text-dark px-6 py-3.5 rounded-full shadow-2xl flex items-center gap-3 border border-white/10 font-medium transition-all duration-300 animate-bounce">
            <Check className="w-5 h-5 stroke-[3]" />
            <span>
              {copiedType === 'java' && 'IP Java berhasil disalin!'}
              {copiedType === 'bedrock' && 'IP Bedrock berhasil disalin!'}
              {copiedType === 'port' && 'Port Bedrock berhasil disalin!'}
            </span>
          </div>
        )}

        {/* Quick Connection Tip */}
        <div className="mt-8 text-center text-xs text-custom-text-sec flex items-center justify-center gap-2">
          <HelpCircle className="w-4 h-4 text-secondary" />
          <span>Bingung cara join? Masuk ke Grup WhatsApp atau Discord kami untuk panduan bergambar lengkap!</span>
        </div>
      </div>
    </section>
  );
}
