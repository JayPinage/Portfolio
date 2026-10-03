import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Code2,
  Cpu,
  Database,
  Bot,
  Mail,
  Film,
  CheckCircle2,
  Copy,
  Check,
  Terminal,
  Play,
  ArrowRight,
  ExternalLink,
  ShieldCheck
} from "lucide-react";
import { PROJECT_DEMOS } from "../../data/architectureDemos";

export default function ProjectSimulatorModal({ project, isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState("architecture");

  if (!isOpen || !project) return null;

  const demoData = PROJECT_DEMOS[project.id];

  const handleCopySnippet = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#07090D]/85 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#0B0F17] rounded-3xl border border-cyan/30 shadow-2xl p-6 sm:p-8 z-10 my-8 overflow-hidden"
        >
          {/* Top Header */}
          <div className="flex items-start justify-between border-b border-white/10 pb-5 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                <span className="text-xs font-mono text-cyan uppercase tracking-wider">
                  SYSTEM ARCHITECTURE & PIPELINE INSPECTOR
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-0.5">
                Category: {project.category}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-3">
            <button
              onClick={() => setActiveTab("architecture")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors ${
                activeTab === "architecture"
                  ? "bg-cyan/15 text-cyan border border-cyan/40 font-semibold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Pipeline Architecture
            </button>
            <button
              onClick={() => setActiveTab("dataflow")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-colors ${
                activeTab === "dataflow"
                  ? "bg-cyan/15 text-cyan border border-cyan/40 font-semibold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Interactive Dataflow & Schemas
            </button>
          </div>

          {/* Content Area */}
          <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
            {activeTab === "architecture" && demoData && (
              <div className="space-y-6">
                {/* Step by Step Pipeline */}
                <div>
                  <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300 mb-4 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyan" />
                    Execution Pipeline
                  </h4>

                  <div className="space-y-3">
                    {demoData.architectureSteps.map((step) => (
                      <div
                        key={step.step}
                        className="flex items-start gap-4 p-4 rounded-xl bg-surface-subtle/80 border border-white/5 hover:border-cyan/25 transition-all"
                      >
                        <span className="text-xs font-mono text-cyan font-bold px-2 py-1 rounded bg-cyan/10 border border-cyan/20">
                          {step.step}
                        </span>
                        <div>
                          <h5 className="text-sm font-semibold text-white">
                            {step.name}
                          </h5>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Problem & Engineering Solution recap */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20">
                    <span className="text-[11px] font-mono text-red-400 uppercase tracking-wider block mb-1">
                      Problem Statement
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan/20">
                    <span className="text-[11px] font-mono text-cyan uppercase tracking-wider block mb-1">
                      Engineered Solution
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "dataflow" && (
              <div className="space-y-6">
                {/* Specific project dataflow preview */}
                {project.id === "voice-assistant-saas" && demoData?.mockSnippet && (
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-cyan uppercase">
                        Embeddable Client Snippet
                      </span>
                      <button
                        onClick={() => handleCopySnippet(demoData.mockSnippet)}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300 hover:text-white hover:bg-white/10"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Snippet</span>
                          </>
                        )}
                      </button>
                    </div>

                    <pre className="p-4 rounded-xl bg-slate-950 border border-white/10 text-xs font-mono text-cyan overflow-x-auto leading-relaxed">
                      <code>{demoData.mockSnippet}</code>
                    </pre>

                    <div className="mt-4 p-4 rounded-xl bg-surface-subtle border border-white/5">
                      <h5 className="text-xs font-mono text-slate-300 mb-2">
                        Supported Audio Specifications:
                      </h5>
                      <ul className="text-xs text-slate-400 space-y-1 list-disc pl-4">
                        <li>SpeechRecognition: Native Webkit Speech API (0ms server latency)</li>
                        <li>SpeechSynthesis: Client-side browser voice models (no server audio bandwidth cost)</li>
                        <li>LLM Gateway: Streamed chunk response with persona prompt conditioning</li>
                      </ul>
                    </div>
                  </div>
                )}

                {project.id === "rag-document-assistant" && demoData?.sampleResponse && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-950 border border-white/10">
                      <span className="text-[11px] font-mono text-slate-400 block mb-1">
                        INPUT USER QUERY:
                      </span>
                      <p className="text-xs font-mono text-cyan">
                        "{demoData.sampleQuery}"
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-subtle border border-cyan/20">
                      <span className="text-[11px] font-mono text-emerald-400 block mb-2">
                        GROUNDED RAG SYNTHESIS:
                      </span>
                      <p className="text-xs text-slate-200 leading-relaxed font-sans mb-3">
                        {demoData.sampleResponse.text}
                      </p>

                      <div className="border-t border-white/10 pt-3">
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                          VERIFIED RETRIEVAL CITATIONS:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {demoData.sampleResponse.citations.map((c, i) => (
                            <span
                              key={i}
                              className="px-2.5 py-1 rounded bg-cyan/10 border border-cyan/30 text-cyan text-[11px] font-mono"
                            >
                              [{c.doc} • {c.page} • {c.score}]
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {project.id === "multi-agent-research" && demoData?.agents && (
                  <div className="space-y-3">
                    <h5 className="text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      LangGraph Autonomous Swarm Nodes:
                    </h5>
                    {demoData.agents.map((ag) => (
                      <div
                        key={ag.name}
                        className="flex items-center justify-between p-3.5 rounded-xl bg-surface-subtle border border-white/5"
                      >
                        <div className="flex items-center gap-2.5">
                          <Bot className="w-4 h-4 text-cyan" />
                          <span className="text-xs font-mono font-semibold text-white">
                            {ag.name}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-cyan bg-cyan/10 px-2 py-0.5 rounded border border-cyan/20">
                          {ag.status}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {project.id === "ai-email-assistant" && demoData?.sampleEmail && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-950 border border-white/10 text-xs font-mono">
                      <div className="text-slate-400 mb-1">
                        FROM: {demoData.sampleEmail.from}
                      </div>
                      <div className="text-slate-400 mb-2">
                        SUBJECT: {demoData.sampleEmail.subject}
                      </div>
                      <div className="text-slate-300 border-t border-white/10 pt-2 font-sans">
                        "{demoData.sampleEmail.body}"
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-subtle border border-violet/30">
                      <span className="text-[11px] font-mono text-violet-300 uppercase tracking-wider block mb-2">
                        AI CLASSIFICATION & ACTION EXTRACTION:
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono mb-3">
                        <div className="bg-white/5 p-2 rounded">
                          <span className="text-slate-400 block text-[10px]">CATEGORY:</span>
                          <span className="text-cyan font-bold">{demoData.sampleEmail.aiTriage.category}</span>
                        </div>
                        <div className="bg-white/5 p-2 rounded">
                          <span className="text-slate-400 block text-[10px]">PRIORITY:</span>
                          <span className="text-emerald-400 font-bold">{demoData.sampleEmail.aiTriage.urgency}</span>
                        </div>
                      </div>
                      <div className="p-2.5 rounded bg-cyan/10 border border-cyan/20 text-xs font-mono text-cyan">
                        <strong>EXTRACTED TASK:</strong> {demoData.sampleEmail.aiTriage.extractedAction}
                      </div>
                    </div>
                  </div>
                )}

                {project.id === "movie-recommendation-system" && demoData?.recommendations && (
                  <div className="space-y-4">
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-between text-xs font-mono">
                      <span className="text-slate-400">SEED MOVIE:</span>
                      <span className="text-cyan font-bold">{demoData.sampleSeed}</span>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                        TOP SIMILARITY MATCHES (COSINE SCORING):
                      </span>
                      {demoData.recommendations.map((rec, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-3 rounded-xl bg-surface-subtle border border-white/5"
                        >
                          <div>
                            <span className="text-xs font-bold text-white block">
                              {rec.title}
                            </span>
                            <div className="flex gap-1.5 mt-1">
                              {rec.tags.map((t) => (
                                <span
                                  key={t}
                                  className="text-[10px] font-mono text-slate-400 px-1.5 py-0.2 rounded bg-white/5"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                          <span className="text-xs font-mono font-bold text-cyan bg-cyan/10 px-2.5 py-1 rounded border border-cyan/20">
                            {rec.score}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-between pt-5 mt-6 border-t border-white/10">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-200 hover:text-white hover:bg-white/10 hover:border-cyan/40 transition-colors"
            >
              <span>View Source on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-cyan" />
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono uppercase tracking-wider hover:bg-cyan/20 transition-colors font-semibold"
            >
              Done
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
