"use client";

import { motion } from "framer-motion";

export const TechnicalArsenal = () => {
  return (
    <section id="education" className="py-32 bg-[#050505] relative overflow-hidden font-sans">
      
      {/* Background Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-3 h-3 bg-[#8A0303] rounded-sm shadow-[0_0_10px_#8A0303]" />
            <h2 className="text-[#8A0303] font-mono text-sm md:text-base tracking-[0.2em] uppercase">
              // EDUCATION_LOG
            </h2>
          </div>
          
          <h3 className="text-[10vw] md:text-[6vw] leading-[0.85] font-black tracking-tighter text-white uppercase mb-6">
            Education<span className="text-[#333]">.</span>
          </h3>
          <p className="text-xl md:text-2xl text-[#A3A3A3] max-w-2xl font-medium">
            Academic milestones and credentials that built the foundation for engineering intelligent systems.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[1rem] p-8 md:p-10 flex flex-col justify-between group overflow-hidden 
                       backdrop-blur-[40px] border border-white/10 bg-black/40
                       hover:border-[#8A0303] hover:shadow-[10px_10px_0_0_#8A0303] transition-all duration-300 ease-out cursor-default"
          >
            {/* Internal Ambient Pulse */}
            <div className="absolute -top-[50%] -right-[20%] w-[70%] h-[100%] bg-gradient-to-br from-[#8A0303]/10 to-transparent blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Tactical Crosshairs */}
            <svg className="absolute top-4 left-4 w-4 h-4 text-white/10" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v20M2 12h20" strokeWidth="1.5"/></svg>
            <svg className="absolute bottom-4 right-4 w-4 h-4 text-white/10" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v20M2 12h20" strokeWidth="1.5"/></svg>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-3 h-3 bg-[#8A0303] rounded-sm shadow-[0_0_10px_#8A0303]" />
                <h3 className="text-[#8A0303] font-mono text-xs md:text-sm tracking-[0.2em] uppercase">
                  // DEGREE_PROTOCOL
                </h3>
              </div>
              <h4 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight uppercase group-hover:text-[#8A0303] transition-colors duration-500">
                B.Tech CSE
              </h4>
              <p className="text-[#A3A3A3] font-mono text-xs md:text-sm tracking-widest leading-relaxed uppercase border-t border-white/5 pt-4">
                (Specialisation in AIML)
              </p>
              <p className="text-white mt-4 font-bold text-lg md:text-xl uppercase tracking-wider">Lovely Professional University</p>
            </div>
            
            <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-6 font-mono relative z-10">
              <span className="text-gray-500 uppercase tracking-widest font-semibold text-xs md:text-sm">METRIC_EVAL</span>
              <span className="text-white group-hover:text-[#8A0303] transition-colors duration-300 font-bold text-lg md:text-xl">CGPA - <span className="text-white">8.34</span></span>
            </div>
            
            {/* Ambient Background Gradient */}
            <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-gradient-to-tl from-white/[0.03] to-transparent blur-[80px] pointer-events-none group-hover:from-[#8A0303]/10 transition-colors duration-700" />
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-[1rem] p-8 md:p-10 flex flex-col justify-between group overflow-hidden 
                       backdrop-blur-[40px] border border-white/10 bg-black/40
                       hover:border-[#8A0303] hover:shadow-[10px_10px_0_0_#8A0303] transition-all duration-300 ease-out cursor-default"
          >
            {/* Internal Ambient Pulse */}
            <div className="absolute -top-[50%] -right-[20%] w-[70%] h-[100%] bg-gradient-to-br from-[#8A0303]/10 to-transparent blur-[100px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Tactical Crosshairs */}
            <svg className="absolute top-4 left-4 w-4 h-4 text-white/10" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v20M2 12h20" strokeWidth="1.5"/></svg>
            <svg className="absolute bottom-4 right-4 w-4 h-4 text-white/10" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v20M2 12h20" strokeWidth="1.5"/></svg>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-3 h-3 bg-[#8A0303] rounded-sm shadow-[0_0_10px_#8A0303]" />
                <h3 className="text-[#8A0303] font-mono text-xs md:text-sm tracking-[0.2em] uppercase">
                  // PREV_MILESTONE
                </h3>
              </div>
              <h4 className="text-2xl md:text-3xl font-black text-white mb-3 tracking-tight uppercase group-hover:text-[#8A0303] transition-colors duration-500">
                Intermediate
              </h4>
              <p className="text-[#A3A3A3] font-mono text-xs md:text-sm tracking-widest leading-relaxed uppercase border-t border-white/5 pt-4">
                Secondary Education
              </p>
              <p className="text-white mt-4 font-bold text-lg md:text-xl uppercase tracking-wider">RPS Sr Sec School</p>
            </div>
            
            <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-6 font-mono relative z-10">
              <span className="text-gray-500 uppercase tracking-widest font-semibold text-xs md:text-sm">METRIC_EVAL</span>
              <span className="text-white group-hover:text-[#8A0303] transition-colors duration-300 font-bold text-lg md:text-xl">Percentage - <span className="text-white">80.2%</span></span>
            </div>
            
            {/* Ambient Background Gradient */}
            <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-gradient-to-tl from-white/[0.03] to-transparent blur-[80px] pointer-events-none group-hover:from-[#8A0303]/10 transition-colors duration-700" />
          </motion.div>
        </div>
      </div>
      
      {/* Structural Decoration */}
      <div className="absolute top-0 right-0 p-12 opacity-10 font-mono text-[10vw] leading-none text-white pointer-events-none select-none italic font-black">
        EDU_LOG
      </div>
    </section>
  );
};
