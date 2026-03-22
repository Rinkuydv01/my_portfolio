"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer id="comms" className="bg-[#050505] pt-32 pb-16 px-6 relative overflow-hidden font-sans">

      <div className="max-w-7xl mx-auto flex flex-col relative z-10 w-full">

        {/* Top Huge Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <p className="font-mono text-[#8A0303] mb-8 flex items-center gap-3 tracking-[0.2em] text-xs font-bold uppercase">
            <span className="w-2 h-2 bg-[#8A0303] rounded-sm shadow-[0_0_10px_#8A0303]" />
            // MAIN_COMMS_CHANNEL
          </p>
          <h2 className="text-[14vw] md:text-[8vw] leading-[0.85] font-black tracking-tighter text-white uppercase mb-6">
            Establish <br />
            <span className="text-[#333]">Link.</span>
          </h2>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-12" />

        {/* Bottom Section: Contact & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8 w-full">

          {/* Left: Contact Info */}
          <div className="flex flex-col gap-8 md:gap-12">
            <div>
              <p className="font-mono text-[#666] text-xs font-bold tracking-widest uppercase mb-4">
                DROP A LINE
              </p>
              <a href="mailto:rxo.rinku@gmail.com" className="text-[#CCC] hover:text-white transition-colors text-lg md:text-xl font-medium">
                rxo.rinku@gmail.com
              </a>
            </div>
            <div>
              <p className="font-mono text-[#666] text-xs font-bold tracking-widest uppercase mb-4">
                GIVE A RING
              </p>
              <a href="tel:+917579409345" className="text-[#CCC] hover:text-white transition-colors text-lg md:text-xl font-medium">
                +91 75794 09345
              </a>
            </div>
          </div>

          {/* Right: Socials & Download Button */}
          <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto">
            <div className="flex flex-col items-start md:items-end gap-6 w-full">
              <p className="font-mono text-[#666] text-xs font-bold tracking-widest uppercase md:mr-4">
                SOCIALS
              </p>
              <div className="flex gap-4">
                <a href="https://linkedin.com/in/rinku-yadav" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#A3A3A3] hover:text-white hover:border-white transition-all duration-300 group">
                  <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://github.com/Rinkuydv01" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#A3A3A3] hover:text-white hover:border-white transition-all duration-300 group">
                  <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="https://instagram.com/raoxrinku" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#A3A3A3] hover:text-white hover:border-white transition-all duration-300 group">
                  <FaInstagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="mailto:rxo.rinku@gmail.com" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-[#A3A3A3] hover:text-white hover:border-white transition-all duration-300 group">
                  <FiMail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>

            <a href="/cv.pdf" download="Rinku_Yadav_CV.pdf" className="mt-8 px-8 py-4 backdrop-blur-[40px] border border-white/10 bg-black/40 rounded-full text-[#A3A3A3] hover:text-white hover:border-[#8A0303] hover:shadow-[0_0_20px_rgba(138,3,3,0.4)] transition-all duration-300 font-tactical uppercase tracking-widest text-xs md:text-sm w-full md:w-auto text-center flex items-center justify-center gap-3 group">
              DOWNLOAD RESUME <span className="w-1.5 h-1.5 rounded-full bg-[#222] group-hover:bg-[#8A0303] transition-colors shadow-[0_0_10px_rgba(138,3,3,0)] group-hover:shadow-[0_0_10px_#8A0303]" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};
