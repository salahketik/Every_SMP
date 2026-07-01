import React, { useState } from 'react';
import { Award, Check, Sparkles, Star, Zap, Video, Flame } from 'lucide-react';
import { rankList } from '../data';

export default function RankSection() {
  const [filter, setFilter] = useState<'all' | 'premium' | 'creator'>('all');

  const filteredRanks = rankList.filter(rank => {
    if (filter === 'premium') return rank.isPremium && !rank.isCreator;
    if (filter === 'creator') return rank.isCreator;
    return true; // Show all
  });

  return (
    <section id="ranks" className="py-20 relative overflow-hidden bg-dark/20">
      {/* Light glow effects */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            👑 Hak Istimewa
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display mt-4 tracking-tight">
            💎 Rank & Perk Server
          </h2>
          <p className="text-custom-text-sec mt-3 max-w-lg mx-auto text-sm md:text-base">
            Dukung kestabilan server kami dan nikmati berbagai keuntungan premium eksklusif di dalam EVERY SMP!
          </p>

          {/* Dynamic Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer ${
                filter === 'all'
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-white/5 text-custom-text-sec hover:bg-white/10 hover:text-white'
              }`}
            >
              🚀 Semua Rank ({rankList.length})
            </button>
            <button
              onClick={() => setFilter('premium')}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer ${
                filter === 'premium'
                  ? 'bg-secondary text-white shadow-lg shadow-secondary/20'
                  : 'bg-white/5 text-custom-text-sec hover:bg-white/10 hover:text-white'
              }`}
            >
              💎 Rank Premium ({rankList.filter(r => r.isPremium && !r.isCreator).length})
            </button>
            <button
              onClick={() => setFilter('creator')}
              className={`px-5 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-300 cursor-pointer ${
                filter === 'creator'
                  ? 'bg-cyan-500 text-dark shadow-lg shadow-cyan-500/20'
                  : 'bg-white/5 text-custom-text-sec hover:bg-white/10 hover:text-white'
              }`}
            >
              🎥 Kreator Gratis ({rankList.filter(r => r.isCreator).length})
            </button>
          </div>
        </div>

        {/* Rank Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRanks.map((rank, idx) => {
            const isEvery = rank.name === 'EVERY';
            return (
              <div
                key={idx}
                className={`bg-custom-card/40 backdrop-blur-md border rounded-[24px] p-8 flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 relative group overflow-hidden shadow-xl ${
                  isEvery 
                    ? 'border-primary shadow-primary/10 ring-1 ring-primary/30' 
                    : rank.isPopular 
                      ? 'border-secondary/40 shadow-secondary/5' 
                      : 'border-white/5'
                }`}
              >
                {/* Header Accents for popular/special cards */}
                {rank.isPopular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-secondary to-primary text-white font-black font-display text-[9px] uppercase tracking-widest px-4 py-1.5 rounded-bl-xl shadow-md flex items-center gap-1">
                    <Zap className="w-3 h-3 fill-current animate-bounce" />
                    Terpopuler
                  </div>
                )}
                {rank.isCreator && (
                  <div className="absolute top-0 right-0 bg-cyan-500 text-dark font-black font-display text-[9px] uppercase tracking-widest px-4 py-1.5 rounded-bl-xl shadow-md flex items-center gap-1">
                    <Video className="w-3 h-3 animate-pulse" />
                    Kreator
                  </div>
                )}
                {isEvery && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary text-white font-black font-display text-[10px] text-center py-1.5 uppercase tracking-widest shadow-md flex items-center justify-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 animate-bounce fill-current" />
                    👑 REKOMENDASI TERBAIK 👑
                  </div>
                )}

                <div className={isEvery ? 'mt-4' : ''}>
                  {/* Rank Header */}
                  <div className="mb-6">
                    <span className="text-xs text-custom-text-sec uppercase tracking-wider font-mono font-medium">Rank Tier</span>
                    <h3 className="text-2xl font-black font-display text-white tracking-wide mt-1 group-hover:text-primary transition-colors flex items-center gap-2">
                      {rank.name}
                      {rank.isPremium && <Star className="w-4 h-4 text-warning-custom fill-warning-custom" />}
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="mb-6 bg-dark/40 rounded-2xl p-4 border border-white/5 flex items-baseline gap-2">
                    <span className="text-3xl font-black text-white font-display">
                      {rank.price === 'Free' ? 'GRATIS' : rank.price}
                    </span>
                    {rank.price !== 'Free' && (
                      <span className="text-xs text-custom-text-sec font-mono">/ Selamanya (Permanen)</span>
                    )}
                    {rank.price === 'Free' && (
                      <span className="text-xs text-cyan-400 font-mono font-semibold">Syarat Khusus</span>
                    )}
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-3.5">
                    <span className="text-xs font-bold text-white uppercase tracking-wider block mb-2 font-display">Fasilitas & Keuntungan:</span>
                    {rank.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5">
                        <div className={`p-0.5 rounded-full mt-0.5 flex-shrink-0 ${isEvery ? 'bg-primary/20 text-primary' : 'bg-white/5 text-custom-text-sec'}`}>
                          <Check className="w-4 h-4 stroke-[2.5]" />
                        </div>
                        <span className="text-xs md:text-sm text-custom-text-sec leading-relaxed group-hover:text-white transition-colors">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Purchase Action Button */}
                <div className="mt-8">
                  <a
                    href="#contact-purchase"
                    className={`w-full py-3.5 rounded-xl text-center text-xs md:text-sm font-black tracking-widest uppercase transition-all duration-300 block border ${
                      isEvery
                        ? 'bg-primary text-white border-primary hover:bg-transparent hover:text-primary hover:scale-[1.02] shadow-lg shadow-primary/20'
                        : rank.isPopular
                          ? 'bg-secondary text-white border-secondary hover:bg-transparent hover:text-secondary hover:scale-[1.02]'
                          : rank.isCreator
                            ? 'bg-transparent text-cyan-400 border-cyan-500/30 hover:bg-cyan-500 hover:text-dark hover:scale-[1.02]'
                            : 'bg-white/5 text-white border-white/10 hover:bg-primary hover:border-primary hover:scale-[1.02]'
                    }`}
                  >
                    {rank.isCreator ? '💬 AJUKAN RANK KREATOR' : '🛒 PESAN SEKARANG'}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
