"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: "-100%", opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none px-6"
    >
      <nav
        className={cn(
          "pointer-events-auto flex items-center justify-between px-8 py-4 backdrop-blur-[40px] border border-white/10 bg-black/40 rounded-full w-full max-w-4xl transition-all duration-300 group/nav hover:border-[#8A0303] hover:shadow-[0_0_30px_rgba(138,3,3,0.15)]"
        )}
      >
        <Link href="/" className="text-xl font-black tracking-tighter text-white group/logo flex items-baseline relative">
          RY<span className="text-[#8A0303] transition-colors duration-300">.</span>
          {/* Subtle logo glow */}
          <span className="absolute inset-0 bg-[#8A0303] blur-md opacity-0 group-hover/logo:opacity-50 transition-opacity" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 font-tactical text-xs md:text-sm">
          <Link href="#about" className="text-[#A3A3A3] hover:text-white transition-colors relative group">
            ABOUT
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#E50000] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#E50000]" />
          </Link>
          <Link href="#projects" className="text-[#A3A3A3] hover:text-white transition-colors relative group">
            PROJECTS
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#E50000] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#E50000]" />
          </Link>
          <Link href="#education" className="text-[#A3A3A3] hover:text-white transition-colors relative group">
            EDUCATION
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#8A0303] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#8A0303]" />
          </Link>
          <Link href="#skills" className="text-[#A3A3A3] hover:text-white transition-colors relative group">
            ARSENAL
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#8A0303] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#8A0303]" />
          </Link>
          <Link href="#profiles" className="text-[#A3A3A3] hover:text-white transition-colors relative group">
            PROFILES
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#8A0303] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#8A0303]" />
          </Link>
          <Link href="#certifications" className="text-[#A3A3A3] hover:text-white transition-colors relative group">
            CERTS
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#8A0303] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#8A0303]" />
          </Link>
          
          <div className="w-px h-4 bg-white/10 mx-1" />
          
          <Link href="#comms" className="text-[#A3A3A3] hover:text-[#8A0303] hover:drop-shadow-[0_0_5px_#8A0303] transition-colors relative group">
            COMMS
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-[#8A0303] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#8A0303]" />
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center">
            <span className="font-tactical text-[#8A0303] text-[10px] drop-shadow-[0_0_2px_#8A0303]">// MENU</span>
        </div>
      </nav>
    </motion.div>
  );
};
