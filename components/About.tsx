"use client";

import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-6 py-32 bg-black">
      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* Operator Profile Terminal Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="w-3 h-3 bg-[#E50000] rounded-sm shadow-[0_0_10px_#E50000]" />
            <h2 className="text-[#E50000] font-tactical text-sm md:text-base tracking-[0.2em] drop-shadow-[0_0_5px_#E50000]">
              // OPERATOR_PROFILE
            </h2>
          </div>

          <h3 className="text-[10vw] md:text-[6vw] leading-[0.9] font-bold tracking-tighter text-white uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Background <br className="hidden md:block" />
            <span className="text-[#333]">Data.</span>
          </h3>
        </motion.div>

        {/* Content encased in Vault Glass */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="vault-glass p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden group hover:border-[#E50000]/50 hover:shadow-[0_0_40px_rgba(229,0,0,0.15)] transition-all duration-700"
        >
          {/* Subtle flare inside glass */}
          <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-br from-[#E50000]/[0.05] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="space-y-8 text-2xl md:text-3xl lg:text-4xl text-[#A3A3A3] font-medium leading-tight tracking-tight max-w-5xl relative z-10 group-hover:text-white transition-colors duration-500 text-pretty">
            <p>
              I’m <span className="text-white">Rinku Yadav</span>, an <span className="text-[#E50000]">AI/ML enthusiast</span> and <span className="text-[#E50000]">Java developer</span> focused on building intelligent, scalable systems.
            </p>
            <p>
              My work spans machine learning, real-time applications, and efficient system design—driven by strong problem-solving and a focus on clarity.
            </p>
            <p>
              I aim to build solutions that are <span className="text-white italic">simple, effective, and built to scale</span>.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10">
            <div className="flex items-center gap-3 font-tactical text-[#55FF00] border border-[#55FF00]/30 px-6 py-3 rounded-full bg-black/60 backdrop-blur-md shadow-[0_0_15px_rgba(85,255,0,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#55FF00] animate-pulse shadow-[0_0_5px_#55FF00]" />
              STATUS: UNDERGRAD
            </div>
            <div className="flex items-center gap-3 font-tactical text-[#E50000] border border-[#E50000]/30 px-6 py-3 rounded-full bg-black/60 backdrop-blur-md shadow-[0_0_15px_rgba(229,0,0,0.1)]">
              <span className="w-1.5 h-1.5 bg-[#E50000] shadow-[0_0_5px_#E50000]" />
              CGPA: 8.34
            </div>
          </div>
        </motion.div>

      </div>

      {/* Background ambient lighting - Heist Red */}
      <div className="absolute top-1/2 left-0 w-[50vw] h-[50vh] bg-[#E50000]/[0.03] blur-[150px] -translate-y-1/2 rounded-full pointer-events-none" />
    </section>
  );
};
