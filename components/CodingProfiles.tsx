"use client";

import { motion } from "framer-motion";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const profiles = [
  {
    title: "LeetCode",
    metric: "01",
    link: "https://leetcode.com/u/rrxo",
    containerHover: "hover:border-[#FFA116] hover:shadow-[10px_10px_0_0_#FFA116]",
    flareColor: "from-[#FFA116]/15",
    textHover: "group-hover:text-[#FFA116]",
    icon: (
      <div className="w-12 h-12 mb-6 bg-[#080808] border border-white/5 rounded-xl flex items-center justify-center group-hover:border-[#FFA116]/30 transition-all duration-500">
        <SiLeetcode className="w-7 h-7 text-[#FFA116] drop-shadow-[0_0_8px_rgba(255,161,22,0.4)] group-hover:drop-shadow-[0_0_15px_rgba(255,161,22,0.8)] transition-all duration-300" />
      </div>
    )
  },
  {
    title: "CODE360",
    metric: "02",
    link: "https://www.naukri.com/code360/profile/Rinkuydv",
    containerHover: "hover:border-[#F05A28] hover:shadow-[10px_10px_0_0_#F05A28]",
    flareColor: "from-[#F05A28]/15",
    textHover: "group-hover:text-[#F05A28]",
    icon: (
      <div className="w-12 h-12 mb-6 flex items-center justify-center">
        <svg className="w-12 h-12 drop-shadow-[0_0_10px_rgba(246,108,59,0.4)] group-hover:drop-shadow-[0_0_15px_rgba(240,90,40,0.8)] transition-all duration-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" fill="#3D3D3D" />
          <path d="M72 35H44c-8.28 0-15 6.72-15 15s6.72 15 15 15h28v-10H44c-2.76 0-5-2.24-5-5s2.24-5 5-5h28V35z" fill="#F05A28" />
          <path d="M42 47l5 3h-5zm12 0l-5 3h5z" fill="#FFF" />
        </svg>
      </div>
    )
  },
  {
    title: "GeeksForGeeks",
    metric: "03",
    link: "https://www.geeksforgeeks.org/profile/rinkuyadaoze0",
    containerHover: "hover:border-[#2F8D46] hover:shadow-[10px_10px_0_0_#2F8D46]",
    flareColor: "from-[#2F8D46]/15",
    textHover: "group-hover:text-[#2F8D46]",
    icon: (
      <div className="w-12 h-12 mb-6 flex items-center justify-center">
        <SiGeeksforgeeks className="w-12 h-12 text-[#2F8D46] drop-shadow-[0_0_10px_rgba(47,141,70,0.4)] group-hover:drop-shadow-[0_0_15px_rgba(47,141,70,0.8)] transition-all duration-300" />
      </div>
    )
  }
];

export const CodingProfiles = () => {
  return (
    <section id="profiles" className="py-32 px-6 bg-[#050505] relative overflow-hidden font-sans">

      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-3 h-3 bg-[#FFA116] rounded-sm shadow-[0_0_10px_#FFA116]" />
              <span className="w-3 h-3 bg-[#F05A28] rounded-sm shadow-[0_0_10px_#F05A28] -ml-2" />
              <span className="w-3 h-3 bg-[#2F8D46] rounded-sm shadow-[0_0_10px_#2F8D46] -ml-2" />
              <h2 className="text-[#8A0303] font-mono text-sm md:text-base tracking-[0.2em] uppercase ml-2">
                // EXTERNAL_DATA_LOGS
              </h2>
            </div>
            <h3 className="text-[10vw] md:text-[6vw] leading-[0.85] font-black tracking-tighter text-white uppercase mb-6">
              Coding <br />
              <span className="text-[#333]">/ Profiles.</span>
            </h3>
          </div>
          <div className="font-mono text-[#444] tracking-[0.22em] text-xs md:text-sm md:text-right border-l-2 md:border-l-0 md:border-r-2 border-[#8A0303] pl-4 md:pl-0 md:pr-4 py-2">
            CODING_RECORDS_ACTIVE <br />
            [ACCESS_GRANTED: SYS_VER_5.0]
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {profiles.map((item, idx) => (
            <motion.a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-[1rem] p-8 md:p-10 flex flex-col justify-between group overflow-hidden 
                         backdrop-blur-[40px] border border-white/10 bg-black/40
                         ${item.containerHover} transition-all duration-300 ease-out cursor-pointer block`}
            >
              {/* Internal Ambient Light Flare */}
              <div className={`absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-gradient-to-tl ${item.flareColor} to-transparent blur-[80px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              {/* Tactical Crosshairs */}
              <svg className="absolute top-4 left-4 w-4 h-4 text-white/10" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v20M2 12h20" strokeWidth="1.5" /></svg>
              <svg className="absolute top-4 right-4 w-4 h-4 text-white/10" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v20M2 12h20" strokeWidth="1.5" /></svg>

              <div className="flex justify-between items-start relative z-10 w-full mb-auto pb-6">
                {item.icon}
                <span className={`font-mono text-[#333] text-3xl leading-none ${item.textHover} transition-colors duration-500`}>
                  {item.metric}.
                </span>
              </div>

              <div className="relative z-10 pointer-events-none flex flex-col h-full justify-end">
                <h4 className={`text-2xl md:text-3xl font-black text-white mb-2 tracking-tight uppercase ${item.textHover} transition-colors duration-500`}>
                  {item.title}
                </h4>

                {/* Execute Link Bullet */}
                <div className="mt-4 flex justify-end font-mono text-sm md:text-base border-t border-white/5 pt-6 shrink-0">
                  <span className={`text-gray-500 ${item.textHover} transition-colors flex items-center gap-4`}>
                    <span className="uppercase tracking-widest font-semibold">Execute Link</span>
                    {/* Sniper Bullet SVG */}
                    <svg width="48" height="14" viewBox="0 0 50 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-4 transition-transform duration-300 ease-out shrink-0">
                      <rect x="0" y="1" width="3" height="12" />
                      <rect x="4" y="2" width="2" height="10" />
                      <path d="M7 2.5 L 30 2.5 L 30 11.5 L 7 11.5 Z" />
                      <path d="M31 2.5 Q 45 2.5 50 7 Q 45 11.5 31 11.5 Z" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Structural Decoration */}
      <div className="absolute top-0 right-0 p-12 opacity-10 font-mono text-[10vw] leading-none text-white pointer-events-none select-none italic font-black">
        CODE_SYNC
      </div>
    </section>
  );
};
