import React from "react";
import { Cpu, ShieldCheck, Zap, Activity } from "lucide-react";

/**
 * RobotFallback — A cinematic cybernetic illustration and telemetry display
 * Rendered when WebGL is unsupported, loading, or when prefers-reduced-motion is active.
 */
export default function RobotFallback() {
  return (
    <div className="relative w-full h-[450px] lg:h-[580px] flex items-center justify-center select-none">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan/15 via-violet/5 to-transparent blur-3xl pointer-events-none" />
      
      {/* Central Cybernetic Robot Bust Silhouette / Vector Frame */}
      <div className="relative z-10 w-full max-w-[420px] aspect-[4/5] glass-panel-cyan rounded-3xl p-6 flex flex-col items-center justify-between border border-cyan/30 shadow-cyan-lg backdrop-blur-xl overflow-hidden">
        
        {/* Animated Scan Line */}
        <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent animate-scanline opacity-60 pointer-events-none" />

        {/* Top Header Diagnostics */}
        <div className="w-full flex items-center justify-between text-[11px] font-mono border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan animate-ping" />
            <span className="text-cyan tracking-wider font-semibold">NEURAL UNIT 01</span>
          </div>
          <span className="text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
            ONLINE // 99.8%
          </span>
        </div>

        {/* Realistic Stylized Cybernetic Bust Illustration */}
        <div className="relative my-auto flex flex-col items-center">
          {/* Holographic Ring Outer */}
          <div className="absolute -inset-6 rounded-full border border-cyan/20 border-dashed animate-spin" style={{ animationDuration: "24s" }} />
          <div className="absolute -inset-12 rounded-full border border-violet/20 border-dotted" />

          {/* SVG Robot Bust */}
          <svg className="w-56 h-56 drop-shadow-[0_0_25px_rgba(0,229,255,0.4)]" viewBox="0 0 200 200" fill="none">
            <defs>
              <linearGradient id="metalArm" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="50%" stopColor="#0F172A" />
                <stop offset="100%" stopColor="#090D16" />
              </linearGradient>
              <linearGradient id="chromePlate" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="50%" stopColor="#94A3B8" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
              <linearGradient id="cyanVisor" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00E5FF" />
                <stop offset="100%" stopColor="#38BDF8" />
              </linearGradient>
              <radialGradient id="reactorGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00E5FF" stopOpacity="1" />
                <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#07090D" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Shoulders / Torso Base */}
            <path d="M40 180 L70 145 L130 145 L160 180 L140 195 L60 195 Z" fill="url(#metalArm)" stroke="#334155" strokeWidth="1.5" />
            
            {/* Pectoral Plates */}
            <path d="M68 148 L95 152 L95 185 L65 178 Z" fill="#111827" stroke="rgba(0,229,255,0.3)" strokeWidth="1.2" />
            <path d="M132 148 L105 152 L105 185 L135 178 Z" fill="#111827" stroke="rgba(139,92,246,0.3)" strokeWidth="1.2" />
            
            {/* Arc Reactor Core */}
            <circle cx="100" cy="165" r="14" fill="#07090D" stroke="#00E5FF" strokeWidth="2" />
            <circle cx="100" cy="165" r="8" fill="url(#reactorGlow)" />
            <circle cx="100" cy="165" r="3" fill="#FFFFFF" />

            {/* Neck Hydraulics */}
            <rect x="92" y="118" width="16" height="24" rx="3" fill="url(#chromePlate)" stroke="#1E293B" strokeWidth="1" />
            <line x1="86" y1="122" x2="86" y2="140" stroke="#00E5FF" strokeWidth="2" opacity="0.8" />
            <line x1="114" y1="122" x2="114" y2="140" stroke="#8B5CF6" strokeWidth="2" opacity="0.8" />

            {/* Head Armor Silhouette */}
            <path d="M72 65 L100 48 L128 65 L124 110 L100 122 L76 110 Z" fill="url(#metalArm)" stroke="#475569" strokeWidth="1.5" />
            
            {/* Cranial Armor Crown */}
            <path d="M80 56 L100 44 L120 56 L112 68 L88 68 Z" fill="#0B0F17" stroke="rgba(0,229,255,0.4)" strokeWidth="1" />

            {/* Ear Comm Servos */}
            <rect x="68" y="78" width="6" height="22" rx="2" fill="#334155" stroke="#00E5FF" strokeWidth="1" />
            <rect x="126" y="78" width="6" height="22" rx="2" fill="#334155" stroke="#00E5FF" strokeWidth="1" />

            {/* Glowing Cyan Optical Visor */}
            <path d="M80 82 Q100 85 120 82 L118 90 Q100 93 82 90 Z" fill="url(#cyanVisor)" filter="drop-shadow(0 0 8px #00E5FF)" />

            {/* Optical Sensor Pupil Beams */}
            <circle cx="92" cy="86" r="2.5" fill="#FFFFFF" />
            <circle cx="108" cy="86" r="2.5" fill="#FFFFFF" />

            {/* Faceplate Ventilation & Seams */}
            <line x1="90" y1="104" x2="110" y2="104" stroke="#00E5FF" strokeWidth="1.5" opacity="0.7" />
            <line x1="93" y1="108" x2="107" y2="108" stroke="#8B5CF6" strokeWidth="1" opacity="0.6" />
          </svg>

          {/* Core Status Label */}
          <div className="mt-3 text-center">
            <p className="text-xs font-mono text-cyan tracking-wider font-semibold">CYBERNETIC COGNITION UNIT</p>
            <p className="text-[11px] text-slate-400">Autonomous Reasoning Subsystem</p>
          </div>
        </div>

        {/* Bottom Real-time Telemetry Grid */}
        <div className="w-full grid grid-cols-3 gap-2 pt-3 border-t border-white/10 text-center font-mono">
          <div className="bg-white/5 rounded-lg p-2 border border-white/5">
            <span className="text-[10px] text-slate-400 block">LATENCY</span>
            <span className="text-xs text-cyan font-bold">14ms</span>
          </div>
          <div className="bg-white/5 rounded-lg p-2 border border-white/5">
            <span className="text-[10px] text-slate-400 block">CORE TEMP</span>
            <span className="text-xs text-emerald-400 font-bold">34.2°C</span>
          </div>
          <div className="bg-white/5 rounded-lg p-2 border border-white/5">
            <span className="text-[10px] text-slate-400 block">RAG SYNC</span>
            <span className="text-xs text-violet-300 font-bold">100%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
