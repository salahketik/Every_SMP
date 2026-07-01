import React from 'react';
import { ShieldCheck, Code, User, Heart, Settings } from 'lucide-react';
import { staffMembers } from '../data';

export default function StaffSection() {
  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'Owner':
        return (
          <span className="px-2.5 py-1 rounded-md text-[10px] font-minecraft bg-red-500/10 text-red-400 border border-red-500/20 shadow-sm">
            👑 {role}
          </span>
        );
      case 'Co Owner':
        return (
          <span className="px-2.5 py-1 rounded-md text-[10px] font-minecraft bg-orange-500/10 text-orange-400 border border-orange-500/20 shadow-sm">
            ⚡ {role}
          </span>
        );
      case 'Developer':
        return (
          <span className="px-2.5 py-1 rounded-md text-[10px] font-minecraft bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-sm">
            💻 {role}
          </span>
        );
      case 'Admin':
        return (
          <span className="px-2.5 py-1 rounded-md text-[10px] font-minecraft bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 shadow-sm">
            🛡️ {role}
          </span>
        );
      case 'Helper':
        return (
          <span className="px-2.5 py-1 rounded-md text-[10px] font-minecraft bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm">
            🤝 {role}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section id="staff" className="py-20 relative overflow-hidden bg-dark/40">
      {/* Background divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-secondary uppercase bg-secondary/10 px-4 py-2 rounded-full border border-secondary/20">
            👥 Tim Administrasi
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display mt-4 tracking-tight">
            👮 Staff Server Kami
          </h2>
          <p className="text-custom-text-sec mt-3 max-w-lg mx-auto text-sm md:text-base">
            Bertemu dengan jajaran staff profesional dan bersahabat yang mengelola EVERY SMP setiap hari.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {staffMembers.map((member, idx) => (
            <div
              key={idx}
              className="bg-custom-card/30 backdrop-blur-md border border-white/5 rounded-[24px] p-5 flex flex-col items-center text-center hover:bg-custom-card/50 hover:border-white/10 transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-xl relative overflow-hidden"
            >
              {/* Radial background representing role color */}
              <div className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${member.colorClass} opacity-10 rounded-full blur-xl group-hover:scale-125 transition-all`} />

              {/* Avatar block with border representing role color */}
              <div className="relative mb-4 mt-2">
                <div className={`w-20 h-20 rounded-2xl bg-dark/80 p-1 border-2 bg-gradient-to-tr ${member.colorClass} shadow-md group-hover:scale-105 transition-all duration-300 overflow-hidden`}>
                  <img
                    src={`https://mc-heads.net/avatar/${member.avatarSeed}/120`}
                    alt={`Avatar ${member.name}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-xl pixelated bg-custom-card"
                    onError={(e) => {
                      // Fallback avatar if api fails
                      e.currentTarget.src = `https://minotar.net/helm/${member.avatarSeed}/120`;
                    }}
                  />
                </div>
                {/* Micro badge of Minecraft Head shape */}
                <span className="absolute -bottom-1 -right-1 bg-dark/90 text-[8px] font-mono p-1 rounded-md text-custom-text-sec border border-white/5">
                  128px
                </span>
              </div>

              <h3 className="text-white font-extrabold font-display text-sm md:text-base tracking-wide group-hover:text-primary transition-colors">
                {member.name}
              </h3>

              <div className="mt-2.5">
                {getRoleBadge(member.role)}
              </div>

              {/* Decorative line */}
              <div className="w-8 h-[2px] bg-white/5 group-hover:bg-primary/20 transition-all mt-4 mb-2" />

              <span className="text-[10px] text-custom-text-sec font-mono uppercase tracking-wider">
                Active Staff
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
