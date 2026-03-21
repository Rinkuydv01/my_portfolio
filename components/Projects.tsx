"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: "01",
    title: "Career Path Classifier",
    subtitle: "Python, Scikit-Learn, Flask, Pandas",
    description: "Built a Machine Learning-based system to predict suitable career roles from user skill inputs. Implemented and compared multiple classification models (Random Forest, SVM, Logistic Regression), applying cross-validation and hyperparameter tuning for better accuracy.",
    link: "https://github.com/Rinkuydv01/Career-Path-Classifier",
  },
  {
    id: "02",
    title: "Real Time System Monitor Dashboard",
    subtitle: "Python, Flask, psutil, Streamlit, SQLite",
    description: "Formulated a real-time system monitoring dashboard to continuously track and display CPU, memory, disk, and network usage statistics. Integrated efficient data logging mechanisms and threshold-based alert systems to proactively monitor performance.",
    link: "https://github.com/Rinkuydv01/Real-Time-System-Monitor-Dashboard",
  },
  {
    id: "03",
    title: "Aircraft Fleet Management System",
    subtitle: "Oracle SQL, PL/SQL, React.js, Python",
    description: "Engineered well-structured and normalized database schemas to efficiently manage aircraft records and maintenance logs. Designed stored procedures, triggers, and automated scheduling mechanisms to streamline maintenance tracking and ensure accurate fleet management.",
    link: "https://github.com/Rinkuydv01/Aircraft-Fleet-Management-System",
  }
];

export const Projects = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);
  // Cinematic Apple-scale pinning effect
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.95, 0.9]);

  return (
    <section ref={targetRef} id="projects" className="relative h-[300vh] bg-[#050505] font-sans">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

        {/* Main Section Background Environment */}
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="px-8 md:px-24 mb-6 md:mb-12 relative z-10">
          <p className="font-tactical text-gray-500 flex items-center gap-3 md:mb-6 tracking-[0.2em] text-sm">
            <span className="w-2 h-2 bg-gray-500 rounded-sm" />
            // INITIATE_ARCHIVE
          </p>
          <h2 className="text-[10vw] md:text-[6vw] leading-[0.85] font-extrabold tracking-tighter text-white shrink-0 uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            Projects <br className="hidden md:block" /><span className="text-[#333]">/ Lore.</span>
          </h2>
        </div>

        {/* The horizontal scrolling track */}
        <motion.div style={{ x, scale }} className="flex w-[300vw] items-center relative z-20">
          {projects.map((project, idx) => (
            <div key={project.id} className="w-screen flex items-center justify-center px-6 md:px-32 shrink-0">

              {/* Card Container Core: Uniform Tactical Black Glass */}
              <div
                className="relative w-full max-w-6xl h-[650px] md:h-[580px] lg:h-[540px] rounded-[1rem] p-8 md:px-14 md:py-10 flex flex-col overflow-hidden group 
                           backdrop-blur-[40px] border border-white/10 bg-black/40
                           hover:border-[#8A0303] hover:shadow-[10px_10px_0_0_#8A0303] transition-colors duration-200 ease-out"
              >

                {/* Internal Ambient Gradient Flares */}
                <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[60%] bg-gradient-to-br from-purple-900/40 to-transparent blur-[80px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -bottom-[30%] -right-[10%] w-[50%] h-[60%] bg-gradient-to-tl from-[#8A0303]/40 to-transparent blur-[80px] pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Crosshairs inside card corners */}
                <svg className="absolute top-6 left-6 w-6 h-6 text-white/10" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v20M2 12h20" strokeWidth="1" /></svg>
                <svg className="absolute top-6 right-6 w-6 h-6 text-white/10" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v20M2 12h20" strokeWidth="1" /></svg>
                <svg className="absolute bottom-6 left-6 w-6 h-6 text-white/10" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v20M2 12h20" strokeWidth="1" /></svg>
                <svg className="absolute bottom-6 right-6 w-6 h-6 text-white/10" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2v20M2 12h20" strokeWidth="1" /></svg>

                {/* Content Overlay */}
                <div className="relative z-10 flex justify-between items-start mb-6 lg:mb-8">
                  <span className="font-mono tracking-widest px-4 py-2 rounded-sm border border-white/10 text-xs md:text-sm bg-black/40 text-gray-400 uppercase">
                    ARCHIVE_{project.id}
                  </span>
                  <span className="font-mono text-gray-600 text-3xl md:text-4xl">
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                <div className="relative z-10 max-w-4xl">
                  <h3 className="text-3xl md:text-5xl lg:text-5xl font-black text-white mb-4 lg:mb-6 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-base md:text-xl text-[#A3A3A3] leading-relaxed font-medium max-w-3xl text-pretty">
                    {project.description}
                  </p>
                </div>

                <div className="relative z-10 flex flex-col xl:flex-row xl:items-end justify-between gap-6 mt-auto pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-3 font-mono text-xs md:text-sm text-gray-400 max-w-2xl">
                    {project.subtitle.split(', ').map(tool => (
                      <span
                        key={tool}
                        className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:border-[#8A0303] hover:shadow-[0_0_15px_rgba(138,3,3,0.5)] hover:text-white cursor-default uppercase tracking-wider"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 font-mono text-sm md:text-base mt-auto shrink-0">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group text-gray-500 hover:text-[#8A0303] transition-colors flex items-center gap-4"
                    >
                      <span className="uppercase tracking-widest font-semibold">Execute Link</span>
                      {/* Sniper Bullet SVG */}
                      <svg width="48" height="14" viewBox="0 0 50 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-4 transition-transform duration-300 ease-out">
                        {/* Bullet Rim & Groove */}
                        <rect x="0" y="1" width="3" height="12" />
                        <rect x="4" y="2" width="2" height="10" />
                        {/* Casing Body */}
                        <path d="M7 2.5 L 30 2.5 L 30 11.5 L 7 11.5 Z" />
                        {/* Pointy Spitzer Bullet Tip */}
                        <path d="M31 2.5 Q 45 2.5 50 7 Q 45 11.5 31 11.5 Z" />
                      </svg>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
