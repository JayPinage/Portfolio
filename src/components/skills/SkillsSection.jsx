import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Terminal,
  Database,
  Layout,
  Cpu,
  Network,
  Cloud,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import { SKILL_CATEGORIES } from "../../data/portfolioData";

const ICON_MAP = {
  Sparkles,
  Terminal,
  Database,
  Layout,
  Cpu,
  Network,
  Cloud,
  Wrench,
};

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Automatically create filter tabs from your skill categories
  const categories = [
    { id: "all", label: "All Specializations" },
    ...SKILL_CATEGORIES.map((category) => ({
      id: category.category,
      label: category.category,
    })),
  ];

  const filteredCategories =
    selectedCategory === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter(
          (category) => category.category === selectedCategory
        );

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <SectionHeader
          tag="// 02. TECHNICAL PROFICIENCY"
          title="Engineered Skill Matrix"
          subtitle="A practical engineering stack spanning AI systems, backend architecture, data infrastructure, DevOps, and modern application development."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? "bg-cyan/15 text-cyan border border-cyan/40 shadow-cyan-sm font-semibold"
                    : "bg-surface-subtle text-slate-400 hover:text-white border border-white/5 hover:border-white/20"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((group) => {
              const isCyan = group.accent === "cyan";

              // Get category-specific icon
              const Icon = ICON_MAP[group.icon] || Cpu;

              return (
                <motion.div
                  key={group.category}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className={`glass-panel rounded-3xl p-7 sm:p-8 border ${
                    isCyan
                      ? "border-cyan/25 hover:border-cyan/50 hover:shadow-cyan-sm"
                      : "border-violet/25 hover:border-violet/50 hover:shadow-violet-sm"
                  } transition-all relative overflow-hidden flex flex-col justify-between`}
                >

                  {/* Decorative Corner Glow */}
                  <div
                    className={`absolute top-0 right-0 w-24 h-24 ${
                      isCyan ? "bg-cyan/5" : "bg-violet/5"
                    } rounded-full blur-2xl pointer-events-none`}
                  />

                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">

                        {/* Dynamic Category Icon */}
                        <div
                          className={`p-2.5 rounded-xl ${
                            isCyan
                              ? "bg-cyan/10 text-cyan border border-cyan/30"
                              : "bg-violet/10 text-violet border border-violet/30"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>

                        <h3 className="text-xl font-display font-bold text-white">
                          {group.category}
                        </h3>
                      </div>

                      <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">
                        {group.skills.length} SKILLS
                      </span>
                    </div>

                    {/* Category Description */}
                    <p className="text-xs sm:text-sm text-slate-400 font-sans mb-6">
                      {group.description}
                    </p>

                    {/* Skills */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {group.skills.map((skill) => (
                        <motion.div
                          key={skill.name}
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.15 }}
                          className="p-3 rounded-xl bg-surface-subtle/80 border border-white/5 hover:border-cyan/30 hover:bg-surface-card transition-all group"
                        >
                          <div className="flex items-center justify-between mb-1">

                            <span className="text-sm font-mono font-semibold text-slate-200 group-hover:text-cyan transition-colors">
                              {skill.name}
                            </span>

                            <div
                              className={`w-1.5 h-1.5 rounded-full ${
                                isCyan ? "bg-cyan" : "bg-violet"
                              } opacity-70 group-hover:opacity-100 group-hover:scale-125 transition-all`}
                            />
                          </div>

                          <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                            {skill.role}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">

                    <span className="flex items-center gap-1.5 text-slate-400">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 ${
                          isCyan ? "text-cyan" : "text-violet"
                        }`}
                      />

                      Practical implementation in verified projects
                    </span>

                    <span className="text-slate-500 uppercase">
                      Production-Ready
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}