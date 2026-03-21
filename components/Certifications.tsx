"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Google",
    link: "https://www.coursera.org/account/accomplishments/verify/A7IJ20A7MPM0?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    metric: "01",
    flareColor: "from-[#8A0303]/20",
    borderHover: "hover:border-[#8A0303] hover:shadow-[10px_10px_0_0_#8A0303]",
    textHover: "group-hover:text-[#8A0303]"
  },
  {
    title: "Computer Communications",
    issuer: "University of Colorado",
    link: "https://www.coursera.org/account/accomplishments/specialization/XB73O6FA5Y9I",
    metric: "02",
    flareColor: "from-[#8A0303]/20",
    borderHover: "hover:border-[#8A0303] hover:shadow-[10px_10px_0_0_#8A0303]",
    textHover: "group-hover:text-[#8A0303]"
  },
  {
    title: "Build Generative AI Apps and Solutions with No-Code Tools",
    issuer: "Infosys",
    link: "https://drive.google.com/file/d/1x52sOS3uP4ADTSiYEoycODx02kmKooj7/view?usp=drive_link",
    metric: "03",
    flareColor: "from-[#8A0303]/20",
    borderHover: "hover:border-[#8A0303] hover:shadow-[10px_10px_0_0_#8A0303]",
    textHover: "group-hover:text-[#8A0303]"
  },
  {
    title: "ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM",
    issuer: "Infosys",
    link: "https://drive.google.com/file/d/1patK3hUT2q-Tmb_mH0y0kTvdyP_-moUM/view?usp=drive_link",
    metric: "04",
    flareColor: "from-[#8A0303]/20",
    borderHover: "hover:border-[#8A0303] hover:shadow-[10px_10px_0_0_#8A0303]",
    textHover: "group-hover:text-[#8A0303]"
  }
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-32 bg-[#050505] relative overflow-hidden font-sans">

      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <span className="w-3 h-3 bg-[#8A0303] rounded-sm shadow-[0_0_10px_#8A0303]" />
              <h2 className="text-[#8A0303] font-mono text-sm md:text-base tracking-[0.2em] uppercase">
                // CERT_AUTHORITY
              </h2>
            </div>
            <h3 className="relative z-10 text-[10vw] md:text-[6vw] leading-[0.85] font-black tracking-tighter text-white uppercase mb-6">
              Certifications<br />
              <span className="text-[#333]">/ Verified.</span>
            </h3>
          </div>
          <div className="font-mono text-[#444] tracking-[0.22em] text-xs md:text-sm md:text-right border-l-2 md:border-l-0 md:border-r-2 border-[#8A0303] pl-4 md:pl-0 md:pr-4 py-2 relative z-10">
            CREDENTIALS_SECURED <br />
            [ACCESS_LEVEL: PRIME]
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 auto-rows-[280px]">
          {certifications.map((item, idx) => (
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
                         ${item.borderHover} transition-all duration-300 ease-out cursor-pointer block`}
            >
              {/* Internal Ambient Light Flare */}
              <div className={`absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-gradient-to-tl ${item.flareColor} to-transparent blur-[80px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              {/* Tactical Crosshairs */}
              <svg className="absolute top-4 left-4 w-4 h-4 text-white/10" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v20M2 12h20" strokeWidth="1.5" /></svg>
              <svg className="absolute top-4 right-4 w-4 h-4 text-white/10" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v20M2 12h20" strokeWidth="1.5" /></svg>

              <div className="flex justify-between items-start relative z-10 w-full mb-auto pb-4">
                <span className={`font-mono text-[#A3A3A3] text-sm md:text-base tracking-widest uppercase truncate max-w-[70%]`}>
                  {item.issuer}
                </span>
                <span className={`font-mono text-[#333] text-3xl leading-none ${item.textHover} transition-colors duration-500`}>
                  {item.metric}.
                </span>
              </div>

              <div className="relative z-10 pointer-events-none flex flex-col h-full justify-end">
                <h4 className={`text-xl md:text-2xl font-black text-white mb-2 tracking-tight uppercase group-hover:text-[#8A0303] transition-colors duration-500 leading-tight`}>
                  {item.title}
                </h4>

                {/* Execute Link Bullet */}
                <div className="mt-4 flex justify-end font-mono text-sm md:text-base border-t border-white/5 pt-6 shrink-0">
                  <span className={`text-gray-500 group-hover:text-[#8A0303] transition-colors flex items-center gap-4`}>
                    <span className="uppercase tracking-widest font-semibold">Verify Link</span>
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
        CERT_LOG
      </div>
    </section>
  );
};
