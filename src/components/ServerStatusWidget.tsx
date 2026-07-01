import React, { useState, useEffect } from 'react';
import { Activity, Layers, Coins, Terminal, Shield } from 'lucide-react';
import { ServerStatus } from '../types';

export default function ServerStatusWidget() {
  const [status, setStatus] = useState<ServerStatus>({
    season: '4',
    theme: 'Economy & Survival',
    status: 'Online',
    version: '1.21.6+',
    playersOnline: 148,
    playersMax: 300,
  });

  // Simple player counter simulation for micro-interaction
  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(prev => {
        const delta = Math.floor(Math.random() * 7) - 3; // Change players slightly
        const newPlayers = Math.max(120, Math.min(prev.playersOnline + delta, 290));
        return {
          ...prev,
          playersOnline: newPlayers
        };
      });
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="status-server" className="py-20 relative overflow-hidden">
      {/* Light glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            📊 Statistik Real-time
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display mt-4 tracking-tight">
            🔮 Status Server
          </h2>
          <p className="text-custom-text-sec mt-3 max-w-lg mx-auto text-sm md:text-base">
            Periksa status dan informasi teknis EVERY SMP yang sedang berjalan saat ini.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card Season */}
          <div className="bg-custom-card/40 backdrop-blur-md border border-white/5 rounded-[24px] p-6 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-custom-text-sec font-mono uppercase tracking-wider">Masa Aktif</span>
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Layers className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-custom-text-sec text-sm font-medium">Season</h3>
            <div className="text-4xl font-extrabold font-display mt-1 text-white flex items-baseline gap-2">
              <span>{status.season}</span>
              <span className="text-xs text-primary font-mono font-normal">Active</span>
            </div>
            <p className="text-xs text-custom-text-sec mt-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Reset & Update berkala
            </p>
          </div>

          {/* Card Tema */}
          <div className="bg-custom-card/40 backdrop-blur-md border border-white/5 rounded-[24px] p-6 hover:border-secondary/30 transition-all duration-300 group hover:-translate-y-1 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-custom-text-sec font-mono uppercase tracking-wider">Gameplay</span>
              <div className="p-2.5 rounded-xl bg-secondary/10 text-secondary">
                <Coins className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-custom-text-sec text-sm font-medium">Tema Server</h3>
            <div className="text-2xl font-extrabold font-display mt-2 text-white capitalize">
              Economy
            </div>
            <p className="text-xs text-custom-text-sec mt-5">
              Ekonomi seimbang, pasar pemain, job, & perdagangan aktif.
            </p>
          </div>

          {/* Card Status */}
          <div className="bg-custom-card/40 backdrop-blur-md border border-white/5 rounded-[24px] p-6 hover:border-success-custom/30 transition-all duration-300 group hover:-translate-y-1 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-custom-text-sec font-mono uppercase tracking-wider">Status Jaringan</span>
              <div className="p-2.5 rounded-xl bg-success-custom/10 text-success-custom">
                <Activity className="w-5 h-5 animate-pulse" />
              </div>
            </div>
            <h3 className="text-custom-text-sec text-sm font-medium">Status Server</h3>
            <div className="mt-2 flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-success-custom/10 text-success-custom border border-success-custom/20">
                <span className="w-2 h-2 rounded-full bg-success-custom animate-ping" />
                {status.status}
              </span>
            </div>
            <p className="text-xs text-custom-text-sec mt-5 font-mono">
              Online 24/7 tanpa gangguan ddos protection.
            </p>
          </div>

          {/* Card Versi */}
          <div className="bg-custom-card/40 backdrop-blur-md border border-white/5 rounded-[24px] p-6 hover:border-accent-custom/30 transition-all duration-300 group hover:-translate-y-1 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-custom-text-sec font-mono uppercase tracking-wider">Dukungan Game</span>
              <div className="p-2.5 rounded-xl bg-accent-custom/10 text-accent-custom">
                <Terminal className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-custom-text-sec text-sm font-medium">Versi Game</h3>
            <div className="text-2xl font-extrabold font-display mt-2 text-white font-mono">
              {status.version}
            </div>
            <p className="text-xs text-custom-text-sec mt-5">
              Mendukung Java & Bedrock Edition terbaru.
            </p>
          </div>
        </div>

        {/* Live Active Player Count Alert */}
        <div className="mt-8 bg-gradient-to-r from-primary/10 via-custom-card/50 to-secondary/10 border border-white/5 rounded-2xl p-4 md:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl backdrop-blur-md">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3 bg-white/5 rounded-xl text-primary hidden md:block animate-pulse">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="text-white font-bold text-lg md:text-xl font-display">
                🔥 Komunitas Semakin Ramai!
              </div>
              <div className="text-xs md:text-sm text-custom-text-sec">
                Ayo gabung sekarang dan jalin pertemanan baru dengan pemain bertalenta lainnya.
              </div>
            </div>
          </div>
          <div className="bg-dark/60 border border-white/5 px-6 py-2.5 rounded-xl flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-success-custom animate-ping" />
            <span className="font-mono text-sm text-custom-text-sec">
              Pemain Online: <strong className="text-white text-base ml-1">{status.playersOnline}</strong> / {status.playersMax}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
