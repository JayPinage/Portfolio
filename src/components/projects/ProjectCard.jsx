import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  ExternalLink,
  Code2,
  Terminal,
  Cpu,
  Mic,
  FileText,
  Bot,
  Mail,
  Film,
  Sparkles,
  ArrowUpRight,
  Activity,
  Layers
} from "lucide-react";

/**
 * Custom Visual Previews for each specific project
 */
function ProjectVisualPreview({ type, accent }) {
  switch (type) {
    case "voice-saas":
      return (
        <div className="relative w-full h-48 bg-[#07090D] rounded-2xl p-4 border border-cyan/20 overflow-hidden flex flex-col justify-between font-mono">
          <div className="flex items-center justify-between text-[11px] text-cyan border-b border-white/5 pb-2">
            <span className="flex items-center gap-1.5">
              <Mic className="w-3.5 h-3.5 text-cyan animate-pulse" />
              VOICE_SYNTHESIS_GATEWAY
            </span>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              CLIENT_AUDIO: 0ms
            </span>
          </div>

          {/* Audio Waveform visualization */}
          <div className="my-auto flex items-center justify-center gap-1.5 py-3">
            {[35, 60, 90, 45, 100, 75, 40, 85, 95, 50, 70, 30].map((h, i) => (
              <motion.div
                key={i}
                animate={{ height: [`${h * 0.3}%`, `${h}%`, `${h * 0.4}%`] }}
                transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.08, ease: "easeInOut" }}
                className="w-1.5 rounded-full bg-gradient-to-t from-cyan to-sky-300"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>

          <div className="p-2 rounded bg-surface-subtle text-[10px] text-slate-400 flex items-center justify-between">
            <span className="text-cyan truncate">{"<script src=\".../voice-agent.js\"></script>"}</span>
            <span className="text-slate-500 shrink-0 ml-2">EMBED READY</span>
          </div>
        </div>
      );

    case "rag-assistant":
      return (
        <div className="relative w-full h-48 bg-[#07090D] rounded-2xl p-4 border border-violet/20 overflow-hidden flex flex-col justify-between font-mono">
          <div className="flex items-center justify-between text-[11px] text-violet-300 border-b border-white/5 pb-2">
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-violet-400" />
              VECTOR_SIMILARITY_SEARCH
            </span>
            <span className="text-[10px] text-cyan bg-cyan/10 px-2 py-0.5 rounded border border-cyan/20">
              TOP_K = 3
            </span>
          </div>

          <div className="space-y-2 my-auto">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-300 flex items-center gap-1">
                <FileText className="w-3 h-3 text-cyan" /> sys_arch.pdf §3
              </span>
              <span className="text-cyan font-bold">94.2% Cosine</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-violet to-cyan h-full w-[94%]" />
            </div>

            <div className="flex items-center justify-between text-[11px] pt-1">
              <span className="text-slate-400 flex items-center gap-1">
                <FileText className="w-3 h-3 text-violet-400" /> indexing_bench.md
              </span>
              <span className="text-violet-300 font-bold">89.5% Cosine</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-violet to-cyan h-full w-[89%]" />
            </div>
          </div>

          <div className="text-[10px] text-emerald-400 flex items-center gap-1.5 pt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Grounded Source Citations Attached</span>
          </div>
        </div>
      );

    case "multi-agent":
      return (
        <div className="relative w-full h-48 bg-[#07090D] rounded-2xl p-4 border border-cyan/20 overflow-hidden flex flex-col justify-between font-mono">
          <div className="flex items-center justify-between text-[11px] text-cyan border-b border-white/5 pb-2">
            <span className="flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5 text-cyan" />
              LANGGRAPH_SWARM_STATE
            </span>
            <span className="text-[10px] text-slate-400">CYCLIC GRAPH</span>
          </div>

          {/* Node graph flow */}
          <div className="grid grid-cols-4 gap-1.5 my-auto items-center text-center">
            {[
              { label: "PLANNER", color: "cyan" },
              { label: "SEARCH", color: "violet" },
              { label: "VERIFY", color: "cyan" },
              { label: "SYNTHESIS", color: "emerald" },
            ].map((node, i) => (
              <div
                key={i}
                className="p-2 rounded-lg bg-surface-subtle border border-white/10 flex flex-col items-center gap-1"
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    node.color === "cyan"
                      ? "bg-cyan shadow-cyan-sm"
                      : node.color === "violet"
                      ? "bg-violet"
                      : "bg-emerald-400"
                  } animate-pulse`}
                />
                <span className="text-[9px] font-bold text-slate-300 truncate w-full">
                  {node.label}
                </span>
              </div>
            ))}
          </div>

          <div className="text-[10px] text-slate-400 flex items-center justify-between">
            <span className="text-cyan">State: PARALLEL_SEARCH</span>
            <span>4 Active Workers</span>
          </div>
        </div>
      );

    case "email-assistant":
      return (
        <div className="relative w-full h-48 bg-[#07090D] rounded-2xl p-4 border border-violet/20 overflow-hidden flex flex-col justify-between font-mono">
          <div className="flex items-center justify-between text-[11px] text-violet-300 border-b border-white/5 pb-2">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-violet-400" />
              TRIAGE_PIPELINE
            </span>
            <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              URGENCY: P1
            </span>
          </div>

          <div className="my-auto space-y-1.5 text-[11px]">
            <div className="p-2 rounded bg-surface-subtle border border-white/5 text-slate-300">
              <span className="text-slate-500 text-[10px] block">DETECTED INTENT:</span>
              <span className="text-cyan font-semibold">Technical Collaboration Inquiry</span>
            </div>
            <div className="p-2 rounded bg-surface-subtle border border-white/5 text-slate-300 flex items-center justify-between">
              <span className="text-slate-500 text-[10px]">ACTION EXTRACTION:</span>
              <span className="text-violet-300 font-semibold">Sync Scheduled (Thu 4 PM)</span>
            </div>
          </div>

          <div className="text-[10px] text-slate-400 flex items-center justify-between">
            <span className="text-cyan">Auto-Draft: READY</span>
            <span className="text-slate-500">FastAPI Worker</span>
          </div>
        </div>
      );

    case "movie-recommender":
    default:
      return (
        <div className="relative w-full h-48 bg-[#07090D] rounded-2xl p-4 border border-cyan/20 overflow-hidden flex flex-col justify-between font-mono">
          <div className="flex items-center justify-between text-[11px] text-cyan border-b border-white/5 pb-2">
            <span className="flex items-center gap-1.5">
              <Film className="w-3.5 h-3.5 text-cyan" />
              CONTENT_SIMILARITY_MATRIX
            </span>
            <span className="text-[10px] text-slate-400">VECTOR SPACE</span>
          </div>

          <div className="my-auto space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-300">Target: Interstellar</span>
              <span className="text-slate-500 text-[10px]">TF-IDF + Metadata</span>
            </div>

            <div className="grid grid-cols-2 gap-1.5 text-[10px]">
              <div className="p-1.5 rounded bg-surface-subtle border border-white/5 flex items-center justify-between">
                <span className="text-slate-300 truncate">Contact</span>
                <span className="text-cyan font-bold">94.2%</span>
              </div>
              <div className="p-1.5 rounded bg-surface-subtle border border-white/5 flex items-center justify-between">
                <span className="text-slate-300 truncate">Arrival</span>
                <span className="text-violet-300 font-bold">92.8%</span>
              </div>
            </div>
          </div>

          <div className="text-[10px] text-slate-400 flex items-center justify-between">
            <span className="text-cyan">Metrics: Cosine Similarity</span>
            <span className="text-slate-500">NumPy / Pandas</span>
          </div>
        </div>
      );
  }
}

export default function ProjectCard({ project, onInspect }) {
  const isCyan = project.accent === "cyan";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`glass-panel rounded-3xl p-6 sm:p-7 border ${
        isCyan
          ? "border-cyan/20 hover:border-cyan/50 hover:shadow-cyan-md"
          : "border-violet/20 hover:border-violet/50 hover:shadow-violet-sm"
      } transition-all flex flex-col justify-between group relative overflow-hidden`}
    >
      {/* Background ambient lighting */}
      <div
        className={`absolute top-0 right-0 w-36 h-36 ${
          isCyan ? "bg-cyan/5" : "bg-violet/5"
        } rounded-full blur-3xl pointer-events-none`}
      />

      <div>
        {/* Custom Visual Preview (Specific to this project) */}
        <div className="mb-6">
          <ProjectVisualPreview type={project.previewType} accent={project.accent} />
        </div>

        {/* Category & Badge */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-mono text-cyan tracking-wider uppercase">
            {project.category}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 text-[10px] font-mono border border-white/10">
            {project.badge}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-cyan transition-colors">
          {project.title}
        </h3>

        {/* Subtitle */}
        <p className="text-xs font-mono text-slate-400 mb-4">
          {project.subtitle}
        </p>

        {/* Problem Statement */}
        <div className="p-3.5 rounded-xl bg-[#07090D]/60 border border-white/5 mb-3">
          <span className="text-[10px] font-mono text-red-400 uppercase tracking-wider block mb-1">
            Problem:
          </span>
          <p className="text-xs text-slate-400 font-sans leading-relaxed line-clamp-2">
            {project.problem}
          </p>
        </div>

        {/* Solution */}
        <div className="p-3.5 rounded-xl bg-surface-subtle/80 border border-white/5 mb-5">
          <span className="text-[10px] font-mono text-cyan uppercase tracking-wider block mb-1">
            Engineered Solution:
          </span>
          <p className="text-xs text-slate-300 font-sans leading-relaxed line-clamp-3">
            {project.solution}
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg bg-surface-subtle border border-white/10 text-slate-300 text-[11px] font-mono hover:border-cyan/30 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
        {/* Interactive Architecture Inspector Button */}
        <button
          onClick={() => onInspect(project)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold bg-cyan/10 hover:bg-cyan/20 border border-cyan/30 text-cyan hover:border-cyan/60 transition-all shadow-cyan-sm"
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>Inspect Architecture</span>
        </button>

        {/* GitHub Source Button (Real link to https://github.com/JayPinage) */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-surface-subtle border border-white/10 text-slate-300 hover:text-white hover:border-cyan/40 hover:bg-white/5 transition-all"
          aria-label={`View ${project.title} on GitHub`}
          title="View Source on GitHub"
        >
          <Github className="w-4 h-4" />
        </a>

        {/* Live Demo button only if valid URL */}
        {project.hasLiveDemo && project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 transition-all"
            aria-label={`Live Demo of ${project.title}`}
            title="Launch Live Demo"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
