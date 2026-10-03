import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Database,
  Bot,
  Server,
  Cpu,
  GraduationCap,
  Sparkles,
  Layers,
  ArrowRight,
  Code2,
  CheckCircle2
} from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import { PERSONAL_INFO, FOCUS_AREAS } from "../../data/portfolioData";

const ICON_MAP = {
  Brain: Brain,
  Database: Database,
  Bot: Bot,
  Server: Server,
  Cpu: Cpu,
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeader
          tag="// 01. SPECIALIZATION & BACKGROUND"
          title={PERSONAL_INFO.aboutHeading}
          subtitle="Transforming cutting-edge AI breakthroughs into resilient, scalable architectures that deliver tangible intelligence."
        />

        {/* Narrative & Academic Foundation Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Left: Bio Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 shadow-glass flex flex-col justify-between relative overflow-hidden"
          >
            {/* Ambient accent inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono mb-6">
                <Code2 className="w-3.5 h-3.5" />
                <span>AI Engineering Philosophy</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4 leading-snug">
                Bridging Foundation Models With Production-Grade Systems
              </h3>

              <p className="text-slate-300 font-sans leading-relaxed mb-5">
                {PERSONAL_INFO.aboutBio}
              </p>

              <p className="text-slate-400 font-sans leading-relaxed text-sm sm:text-base">
                Rather than treating AI models as black-box chat interfaces, I focus on the systemic layer: deterministic output schemas, hybrid vector retrieval with verifiable citation indices, dynamic memory management, and autonomous multi-agent state machines with self-healing feedback loops.
              </p>
            </div>

            {/* Core Values / Competencies List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 pt-6 border-t border-white/10 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan" />
                <span>Deterministic Structured Output</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan" />
                <span>Zero-Hallucination Grounding</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-violet" />
                <span>Autonomous Agent Orchestration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-violet" />
                <span>Low-Latency Streaming Pipelines</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Academic Snapshot & Quick Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-panel-cyan rounded-3xl p-8 sm:p-10 border border-cyan/25 shadow-cyan-sm flex flex-col justify-between relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono text-cyan tracking-widest uppercase">
                  ACADEMIC FOUNDATION
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan/15 text-cyan text-[11px] font-mono border border-cyan/30">
                  CLASS OF 2026
                </span>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="p-3.5 rounded-2xl bg-cyan/10 border border-cyan/30 text-cyan">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-lg font-display font-bold text-white">
                    {PERSONAL_INFO.degree}
                  </h4>
                  <p className="text-sm font-sans text-slate-300">
                    {PERSONAL_INFO.college}
                  </p>
                  <p className="text-xs font-mono text-cyan mt-1">
                    Graduated in {PERSONAL_INFO.graduationYear}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#07090D]/60 border border-white/10 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">Cumulative Performance</span>
                  <span className="text-xl font-mono font-bold text-cyan text-glow-cyan">
                    {PERSONAL_INFO.cgpa}
                  </span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full mt-2.5 overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan to-violet h-full rounded-full" style={{ width: "85.2%" }} />
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Rigorous grounding in computer science, algorithmic complexity, data structures, relational and non-relational database design, and applied machine intelligence.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Ready for full-time & research engineering</span>
              <a
                href="#education"
                className="text-cyan hover:underline flex items-center gap-1"
              >
                <span>View Timeline</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* 5 Focus Areas — Compact Animated Cards */}
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan" />
            Core Focus Areas
          </h3>
          <p className="text-sm text-slate-400 font-sans">
            Specialized engineering capabilities applied across current and upcoming AI initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FOCUS_AREAS.map((area, idx) => {
            const Icon = ICON_MAP[area.icon] || Cpu;
            const isSpan = idx === 3 || idx === 4;

            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`glass-panel rounded-2xl p-6 border border-white/10 hover:border-cyan/40 hover:shadow-cyan-sm transition-all flex flex-col justify-between group ${
                  isSpan && idx === 3 ? "lg:col-span-1" : ""
                }`}
              >
                <div>
                  {/* Card Header with Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-surface-subtle border border-cyan/20 group-hover:border-cyan/60 flex items-center justify-center text-cyan transition-colors">
                      <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-display font-bold text-white mb-2 group-hover:text-cyan transition-colors">
                    {area.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed mb-4">
                    {area.description}
                  </p>
                </div>

                {/* Sub-tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {area.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
