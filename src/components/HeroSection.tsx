import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Flame, Play, Shield } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero_bg.jpg"
          alt="EVERY SMP Floating Island Minecraft Theme"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover scale-105 select-none pointer-events-none brightness-[0.4] contrast-[1.1]"
        />
        {/* Soft dark radial gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1117]/30 via-[#171A22]/70 to-[#171A22]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#0F1117]/90" />
      </div>

      {/* Floating Animated Clouds */}
      <div className="absolute inset-x-0 bottom-10 z-10 pointer-events-none opacity-40 select-none">
        <div className="w-[300%] h-32 bg-repeat-x animate-[float_40s_linear_infinite]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&w=400&q=80')" }} />
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4 relative z-20 text-center flex flex-col items-center">
        {/* Glowing Logo Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative mb-6 group cursor-pointer"
          onClick={() => scrollToSection('ip-server')}
        >
          {/* Pulsing ring outer glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary via-secondary to-primary rounded-[32px] blur-xl opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500 animate-pulse-slow" />
          
          <div className="relative w-36 h-36 md:w-44 md:h-44 bg-dark/90 p-2.5 rounded-[28px] border-2 border-primary/50 shadow-2xl overflow-hidden group-hover:border-secondary transition-all duration-300">
            <img
              src="/every_smp_logo.jpg"
              alt="EVERY SMP Premium Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Micro Active Indicator */}
          <span className="absolute -bottom-2 right-1/2 translate-x-1/2 bg-success-custom text-dark font-black font-minecraft text-[8px] px-3 py-1 rounded-full border border-dark tracking-wider shadow-lg animate-bounce flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-dark rounded-full animate-ping" />
            ONLINE
          </span>
        </motion.div>

        {/* Small Tagline Block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
        >
          <Flame className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-[10px] md:text-xs font-bold text-custom-text-sec uppercase tracking-[0.15em] font-mono">
            Survival Economy Server Indonesia
          </span>
        </motion.div>

        {/* Big Cinematic Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl md:text-8xl font-black font-display text-white tracking-tight leading-none mb-4"
        >
          EVERY <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient">SMP</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-sm md:text-lg text-custom-text-sec max-w-2xl leading-relaxed mb-10 font-normal px-4"
        >
          Selamat Datang di <strong className="text-white font-semibold">EVERY SMP</strong>. Tempat Petualanganmu Menjadi Lebih Seru Dengan Berbagai Fitur Unik.
        </motion.p>

        {/* Action CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md px-4"
        >
          <button
            onClick={() => scrollToSection('ip-server')}
            className="w-full sm:w-auto bg-primary hover:bg-secondary text-white font-black font-display text-sm px-8 py-4 rounded-xl flex items-center justify-center gap-3.5 shadow-lg shadow-primary/20 hover:shadow-secondary/20 hover:scale-[1.04] transition-all duration-300 tracking-wider cursor-pointer border border-primary/30"
          >
            <Play className="w-4 h-4 fill-current" />
            GABUNG SEKARANG
          </button>
          
          <button
            onClick={() => scrollToSection('status-server')}
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white font-black font-display text-sm px-8 py-4 rounded-xl flex items-center justify-center gap-2.5 transition-all duration-300 tracking-wider border border-white/10 hover:border-white/20 cursor-pointer"
          >
            <Shield className="w-4 h-4" />
            LIHAT INFORMASI
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection('status-server')}
        >
          <span className="text-[10px] text-custom-text-sec font-mono uppercase tracking-[0.2em] group-hover:text-white transition-colors">
            Gulir Kebawah
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5 group-hover:border-primary transition-colors">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
