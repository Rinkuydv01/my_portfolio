"use client";

import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: ["C", "C++", "Python", "Java", "Kotlin"],
  },
  {
    category: "Data Science & Machine Learning",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn", "TensorFlow"],
  },
  {
    category: "Backend & Databases",
    items: ["Spring", "Spring Boot", "Flask", "MySQL", "PostgreSQL"],
  },
  {
    category: "Tools & Environments",
    items: ["Git", "GitHub", "Linux", "Google Colab", "Android Studio", "Jupyter Notebook", "Kaggle"],
  },
  {
    category: "Soft Skills",
    items: ["Problem Solving", "Adaptability", "Goal Oriented"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-[#050505] relative overflow-hidden font-sans">

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-20 flex flex-col justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <span className="w-3 h-3 bg-[#8A0303] rounded-sm shadow-[0_0_10px_#8A0303]" />
              <h2 className="text-[#8A0303] font-mono text-sm md:text-base tracking-[0.2em] uppercase">
                // SYS_CAPABILITIES
              </h2>
            </div>

            <h3 className="relative z-10 text-[10vw] md:text-[6vw] leading-[0.85] font-black tracking-tighter text-white uppercase mb-6">
              Technical <br />
              <span className="text-[#333]">/ Arsenal.</span>
            </h3>
          </div>
        </motion.div>

        {/* Skill Groups */}
        <div className="space-y-14">
          {skills.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Category heading with subtle line */}
              <h3 className="text-white font-semibold text-base md:text-lg tracking-wide mb-5 pb-3 border-b border-white/[0.06]">
                {group.category}
              </h3>

              {/* Pill tags */}
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] 
                               text-sm text-[#C0C0C0] font-medium tracking-wide
                               hover:border-[#8A0303]/60 hover:text-white hover:bg-[#8A0303]/10 
                               transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Structural Decoration */}
      <div className="absolute top-0 right-0 p-12 opacity-10 font-mono text-[10vw] leading-none text-white pointer-events-none select-none italic font-black">
        SKILLS_LOG
      </div>
    </section>
  );
};
