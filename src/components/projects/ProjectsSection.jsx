import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Sparkles, Code2, ExternalLink, ShieldCheck } from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import ProjectCard from "./ProjectCard";
import ProjectSimulatorModal from "./ProjectSimulatorModal";
import { FEATURED_PROJECTS, PERSONAL_INFO } from "../../data/portfolioData";

export default function ProjectsSection() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeader
          tag="// 03. ENGINEERING PORTFOLIO"
          title="Featured AI Systems & Applications"
          subtitle="Production-focused implementations spanning autonomous multi-agent workflows, vector retrieval pipelines, and embeddable speech interfaces."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className={idx === 0 ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <ProjectCard
                project={project}
                onInspect={(proj) => setActiveModalProject(proj)}
              />
            </div>
          ))}
        </div>

        {/* GitHub Repository Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl glass-panel border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="p-3.5 rounded-2xl bg-cyan/10 border border-cyan/30 text-cyan">
              <Github className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-display font-bold text-white">
                Explore More on GitHub
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 font-sans">
                Review open-source codebases, algorithmic benchmarks, and ongoing experiments on GitHub @JayPinage.
              </p>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-xs uppercase tracking-wider font-bold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-cyan/40 transition-all shadow-glass"
          >
            <span>Visit @JayPinage</span>
            <ExternalLink className="w-4 h-4 text-cyan" />
          </a>
        </motion.div>

        {/* Architecture Inspector Modal */}
        <ProjectSimulatorModal
          project={activeModalProject}
          isOpen={Boolean(activeModalProject)}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
}
