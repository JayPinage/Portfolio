import React, { useEffect, useState } from "react";
import { ArrowUp, Cpu, Github, Linkedin, Mail, Heart } from "lucide-react";
import { PERSONAL_INFO } from "../../data/portfolioData";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone: "Asia/Kolkata",
        }) + " IST"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#05070A] py-12 text-slate-400 font-sans z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/5 items-center justify-between">
          
          {/* Brand */}
          <div className="md:col-span-6 flex flex-col items-start gap-2">
            <div className="flex items-center gap-2 text-white font-display font-bold text-lg">
              <Cpu className="w-5 h-5 text-cyan" />
              <span>JAY PINAGE</span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan/10 text-cyan border border-cyan/30">
                PORTFOLIO v2.6
              </span>
            </div>
            <p className="text-xs text-slate-400 font-sans max-w-md">
              AI Engineer & B.Sc. IT Graduate (2026). Specializing in autonomous multi-agent systems, RAG architectures, and production LLM integrations.
            </p>
          </div>

          {/* Real-time telemetry & back to top */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-4 text-xs font-mono">
            {/* System Clock */}
            <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              <span>SYS TIME: {time || "SYNCING..."}</span>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-surface-subtle hover:bg-white/10 border border-white/10 hover:border-cyan/40 text-slate-300 hover:text-cyan transition-all flex items-center gap-1.5"
              title="Return to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
              <span>TOP</span>
            </button>
          </div>

        </div>

        {/* Lower Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Jay Pinage. Built with React, Three.js & Tailwind CSS.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-cyan transition-colors"
            >
              Email
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
