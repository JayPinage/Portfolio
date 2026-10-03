import React, { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Terminal, Mail, ArrowUpRight, ShieldCheck, Cpu } from "lucide-react";
import RobotFallback from "./RobotFallback";
import { PERSONAL_INFO } from "../../data/portfolioData";

const RobotScene = lazy(() => import("../3d/RobotScene"));

export default function HeroSection() {
  const handleScrollTo = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 lg:pt-32 pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ========================================================
              LEFT COLUMN: HERO CONTENT (Reveals Line-by-Line)
              ======================================================== */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center z-20">
            
            {/* Top Status & Label Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              {/* Opportunity Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{PERSONAL_INFO.status}</span>
              </div>

              {/* Technical Specialty Label */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono font-medium tracking-wider">
                <Cpu className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.heroLabel}</span>
              </div>
            </motion.div>

            {/* Main Heading — Line by Line Cinematic Reveal */}
            <div className="overflow-hidden mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08]"
              >
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-sky-300 to-cyan text-glow-cyan">Intelligence.</span>
                <br />
                Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet via-purple-300 to-violet text-glow-violet">the Future.</span>
              </motion.h1>
            </div>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-base sm:text-lg md:text-xl text-slate-300 font-sans leading-relaxed max-w-2xl mb-8"
            >
              {PERSONAL_INFO.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              {/* Primary Button */}
              <button
                onClick={() => handleScrollTo("projects")}
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-mono text-sm uppercase tracking-wider font-bold bg-gradient-to-r from-cyan via-sky-400 to-cyan text-slate-950 shadow-cyan-md hover:shadow-cyan-lg hover:scale-[1.03] active:scale-[0.98] transition-all"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              {/* Secondary Button */}
              <button
                onClick={() => handleScrollTo("contact")}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-sm uppercase tracking-wider font-semibold text-slate-200 bg-surface-subtle/80 hover:bg-surface-card border border-white/10 hover:border-cyan/40 hover:text-cyan transition-all"
              >
                <Mail className="w-4 h-4 text-cyan group-hover:scale-110 transition-transform" />
                <span>Contact Me</span>
              </button>
            </motion.div>

            {/* Technical Highlights Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-mono text-slate-400"
            >
              <span className="text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan" /> Core Focus:
              </span>
              <span className="text-slate-300 hover:text-cyan transition-colors">LangGraph Multi-Agents</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300 hover:text-cyan transition-colors">Enterprise RAG</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300 hover:text-cyan transition-colors">Embeddable Voice AI</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-300 hover:text-cyan transition-colors">FastAPI Microservices</span>
            </motion.div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: REALISTIC 3D AI ROBOT (Signature Visual)
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-6 xl:col-span-5 relative flex items-center justify-center min-h-[450px]"
          >
            <Suspense fallback={<RobotFallback />}>
              <RobotScene />
            </Suspense>
          </motion.div>

        </div>
      </div>

      {/* Bottom Scroll Indicator Icon */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-[11px] font-mono text-slate-500 cursor-pointer hover:text-cyan transition-colors"
        onClick={() => handleScrollTo("about")}
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown className="w-3.5 h-3.5 text-cyan/70" />
      </motion.div>
    </section>
  );
}
