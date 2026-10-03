import React from "react";
import { motion } from "framer-motion";
import { Activity, Cpu, ShieldCheck, Zap } from "lucide-react";

/**
 * Restrained holographic UI telemetry elements around the 3D robot
 */
export default function HolographicHUD() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 select-none">
      
      {/* Top Right HUD Badge: Neural Pipeline Status */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="hidden sm:flex absolute top-6 right-6 items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B0F17]/80 backdrop-blur-md border border-cyan/25 shadow-cyan-sm text-[11px] font-mono text-cyan"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-ping" />
        <span className="font-semibold tracking-wide">NEURAL SYNC // 99.8%</span>
        <Activity className="w-3.5 h-3.5 ml-1 text-cyan/80" />
      </motion.div>

      {/* Mid-Left HUD Badge: Vector Engine */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="hidden md:flex absolute top-1/3 left-4 flex-col gap-1 p-2.5 rounded-xl bg-[#0B0F17]/80 backdrop-blur-md border border-violet/25 shadow-violet-sm text-[10px] font-mono"
      >
        <div className="flex items-center gap-1.5 text-violet-400 font-semibold">
          <Cpu className="w-3 h-3" />
          <span>INFERENCE ENGINE</span>
        </div>
        <div className="text-slate-400 flex items-center justify-between gap-3 text-[9px]">
          <span>STATUS:</span>
          <span className="text-emerald-400 font-bold">NOMINAL</span>
        </div>
        <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden mt-0.5">
          <div className="h-full bg-gradient-to-r from-violet to-cyan w-4/5 animate-pulse" />
        </div>
      </motion.div>

      {/* Bottom Right HUD Badge: Latency / Agent Core */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden sm:flex absolute bottom-6 right-8 flex-col gap-1 px-3 py-2 rounded-xl bg-[#0B0F17]/85 backdrop-blur-md border border-cyan/20 text-[11px] font-mono text-slate-300 shadow-glass"
      >
        <div className="flex items-center gap-2 text-cyan">
          <Zap className="w-3 h-3 text-cyan" />
          <span className="text-[10px] uppercase font-bold tracking-wider">Cognitive Core</span>
        </div>
        <div className="flex items-center gap-3 text-[10px]">
          <span className="text-slate-400">RAG + AGENTS</span>
          <span className="text-cyan font-semibold">ACTIVE</span>
        </div>
      </motion.div>

      {/* Subtle Corner Brackets */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-cyan/30" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-cyan/30" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-violet/30" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-violet/30" />
    </div>
  );
}
