import React, { useState } from 'react';
import { ShieldAlert, BookOpen, MessageSquare, AlertTriangle, CheckSquare } from 'lucide-react';
import { rulesServer, rulesGrup } from '../data';

export default function RulesSection() {
  const [activeTab, setActiveTab] = useState<'server' | 'grup'>('server');

  return (
    <section id="rules" className="py-20 relative overflow-hidden bg-dark/20">
      {/* Light glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            📜 Regulasi Komunitas
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display mt-4 tracking-tight">
            🛡️ Aturan Komunitas
          </h2>
          <p className="text-custom-text-sec mt-3 max-w-lg mx-auto text-sm md:text-base">
            Demi menjaga kenyamanan dan keseruan bermain, seluruh anggota EVERY SMP wajib mematuhi seluruh peraturan berikut.
          </p>

          {/* Tab Selector */}
          <div className="flex justify-center mt-8">
            <div className="bg-dark/80 p-1.5 rounded-full border border-white/5 flex gap-2">
              <button
                onClick={() => setActiveTab('server')}
                className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                  activeTab === 'server'
                    ? 'bg-primary text-white shadow-lg shadow-primary/20'
                    : 'text-custom-text-sec hover:text-white hover:bg-white/5'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                Aturan Di Dalam Server
              </button>
              <button
                onClick={() => setActiveTab('grup')}
                className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                  activeTab === 'grup'
                    ? 'bg-secondary text-white shadow-lg shadow-secondary/20'
                    : 'text-custom-text-sec hover:text-white hover:bg-white/5'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                Aturan Grup Chat
              </button>
            </div>
          </div>
        </div>

        {/* Content Wrapper */}
        <div className="transition-all duration-500">
          {activeTab === 'server' ? (
            <div className="space-y-8 animate-fadeIn">
              {/* Timeline / Card grid of Server Rules */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rulesServer.map((rule, idx) => (
                  <div
                    key={rule.id}
                    className="bg-custom-card/40 backdrop-blur-md border border-white/5 rounded-[20px] p-6 flex gap-4 hover:border-primary/20 transition-all duration-300 group hover:bg-custom-card/60"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center font-minecraft text-primary text-sm font-bold group-hover:scale-110 transition-all duration-300 border border-primary/20">
                      {(idx + 1).toString().padStart(2, '0')}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-base md:text-lg mb-1 group-hover:text-primary transition-all duration-300">
                        Aturan #{rule.id}
                      </h4>
                      <p className="text-custom-text-sec text-sm leading-relaxed">
                        {rule.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Warning box server */}
              <div className="bg-gradient-to-r from-danger-custom/10 via-custom-card/50 to-danger-custom/10 border border-danger-custom/20 rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
                  <div className="p-4 bg-danger-custom/10 rounded-2xl text-danger-custom animate-pulse">
                    <ShieldAlert className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-white font-black font-display text-lg tracking-wider">
                      ⚠️ TIDAK PATUHI ATURAN?
                    </h4>
                    <p className="text-custom-text-sec text-sm mt-1 max-w-xl">
                      Setiap tindakan sabotase, kecurangan, atau ketidaksopanan akan diproses secara tegas oleh tim staff server.
                    </p>
                  </div>
                </div>
                <div className="bg-danger-custom text-dark font-black font-display text-sm md:text-base px-6 py-3 rounded-xl shadow-lg hover:shadow-danger-custom/30 transition-all tracking-wider text-center">
                  BAN 1 HARI / PERMANENT!
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-8 animate-fadeIn">
              {/* Group Rules Layout: Two Columns Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {rulesGrup.map((rule, idx) => (
                  <div
                    key={rule.id}
                    className="bg-custom-card/40 backdrop-blur-md border border-white/5 rounded-[20px] p-5 flex items-start gap-3.5 hover:border-secondary/20 transition-all duration-300 group"
                  >
                    <CheckSquare className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-all" />
                    <p className="text-custom-text-sec text-xs md:text-sm leading-relaxed group-hover:text-white transition-all">
                      {rule.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Warning box group */}
              <div className="bg-gradient-to-r from-warning-custom/10 via-custom-card/50 to-warning-custom/10 border border-warning-custom/20 rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
                  <div className="p-4 bg-warning-custom/10 rounded-2xl text-warning-custom animate-pulse">
                    <AlertTriangle className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-white font-black font-display text-lg tracking-wider">
                      ⚠️ SISTEM PERINGATAN GRUP
                    </h4>
                    <p className="text-custom-text-sec text-sm mt-1 max-w-xl">
                      Moderator berhak memperingatkan atau mengeluarkan anggota demi menjaga kedamaian grup obrolan.
                    </p>
                  </div>
                </div>
                <div className="bg-warning-custom text-dark font-black font-mono text-xs md:text-sm px-6 py-3 rounded-xl shadow-lg border border-warning-custom/30 text-center max-w-xs leading-snug">
                  LANGGAR = PERINGATAN ➡️ KICK DARI GRUP!
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
