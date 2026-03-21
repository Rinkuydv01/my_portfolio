"use client";

import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 text-center overflow-hidden bg-black selection:bg-[#55FF00]/40 selection:text-white">

      {/* Heavy Topo base */}
      <div className="absolute inset-0 topo-bg opacity-40 pointer-events-none" />

      {/* Massive subtle background RY - Rebellious overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[45vw] font-extrabold text-white/[0.02] pointer-events-none select-none tracking-tighter leading-none whitespace-nowrap z-0">
        RY.
      </div>

      {/* Intensive central dark gradient to pop the glowing text */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/90 to-black z-0 pointer-events-none" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(20px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 mt-12 relative"
      >
        <h1 className="text-[14vw] md:text-[10vw] leading-[0.85] font-extrabold tracking-tighter text-white mb-6 uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
          Rinku <br className="md:hidden" /> Yadav
        </h1>
        {/* The Neon Text Glow Layer (Monster Green accent logic) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0.4, 1] }}
          transition={{ duration: 2, delay: 1, times: [0, 0.1, 0.2, 1] }}
          className="absolute inset-0 z-[-1] text-[14vw] md:text-[10vw] leading-[0.85] font-extrabold tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-t from-[#55FF00]/40 to-transparent blur-[2px] opacity-0"
        >
          Rinku <br className="md:hidden" /> Yadav
        </motion.div>
      </motion.div>

      {/* Subtitle - stark, tactical monospace contrasting the massive header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="z-10"
      >
        <p className="text-sm md:text-base text-[#A3A3A3] max-w-xl mx-auto font-medium tracking-tight font-tactical px-6">
          AI/ML ENGINEER AND JAVA DEVELOPER. <br className="hidden md:block" />
          <span className="text-white mt-2 inline-block tracking-[0.2em] opacity-80 border-b border-[#55FF00]/30 pb-1">BUILDING UNCOMPROMISING SYSTEMS.</span>
        </p>
      </motion.div>

      {/* Cyber/Tactical CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="z-10 mt-12"
      >
        <a
          href="#about"
          className="inline-flex items-center gap-3 px-8 py-4 vault-glass rounded-full font-tactical text-[#A3A3A3] neon-hover-green group overflow-hidden relative"
        >
          {/* Internal neon sweep */}
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#55FF00]/10 to-transparent -translate-x-[200%] group-hover:animate-[sweep_1s_ease-out_infinite]" />

          <span className="w-2 h-2 rounded-full bg-[#55FF00] group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_#55FF00]" />
          ACCESS MAINFRAME
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 0.3, height: 100 }}
        transition={{ duration: 1.5, delay: 1.5, ease: "anticipate" }}
        className="absolute bottom-0 z-10 w-[1px] bg-gradient-to-t from-[#E50000] via-[#E50000]/50 to-transparent"
      />

    </section>
  );
};
