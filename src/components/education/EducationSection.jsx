import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Calendar,
  Award,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from "lucide-react";
import SectionHeader from "../common/SectionHeader";
import { EDUCATION_DATA, EXPERIENCE_DATA, PERSONAL_INFO } from "../../data/portfolioData";

export default function EducationSection() {
  return (
    <section id="education" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeader
          tag="// 04. TRAJECTORY & CREDENTIALS"
          title="Education & Engineering Experience"
          subtitle="Academic rigor backed by verified performance, combined with dedicated independent building in applied AI."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ========================================================
              LEFT COLUMN: EDUCATION (B.Sc. IT - MVLU College 2026)
              ======================================================== */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-cyan/10 border border-cyan/30 text-cyan">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                Formal Academic Education
              </h3>
            </div>

            {EDUCATION_DATA.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5 }}
                className="glass-panel-cyan rounded-3xl p-7 sm:p-8 border border-cyan/25 shadow-cyan-sm relative overflow-hidden"
              >
                {/* Degree & Year */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-cyan/15 text-cyan text-xs font-mono border border-cyan/30 font-semibold">
                    {edu.status}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan" />
                    {edu.duration}
                  </span>
                </div>

                <h4 className="text-xl font-display font-bold text-white mb-1">
                  {edu.degree}
                </h4>

                <p className="text-sm font-sans text-cyan mb-4 font-medium">
                  {edu.institution}
                </p>

                {/* CGPA Display Pill */}
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#07090D] border border-cyan/30 mb-6">
                  <Award className="w-4 h-4 text-cyan" />
                  <span className="text-xs font-mono text-slate-300">Grade:</span>
                  <span className="text-sm font-mono font-bold text-cyan text-glow-cyan">
                    {edu.grade}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6">
                  {edu.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Key Academic Highlights:
                  </span>
                  {edu.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* ========================================================
              RIGHT COLUMN: EXPERIENCE & INDUSTRY READINESS
              ======================================================== */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2.5 rounded-xl bg-violet/10 border border-violet/30 text-violet">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">
                Engineering Experience & Availability
              </h3>
            </div>

            {EXPERIENCE_DATA.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel rounded-3xl p-7 sm:p-8 border border-white/10 hover:border-violet/40 transition-all relative overflow-hidden"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono text-violet font-semibold uppercase tracking-wider">
                    {exp.organization}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-slate-400 text-xs font-mono border border-white/10">
                    {exp.period}
                  </span>
                </div>

                <h4 className="text-lg font-display font-bold text-white mb-3">
                  {exp.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-4 border-t border-white/5">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-400 font-sans">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Note on Verified Experience */}
            <div className="p-4 rounded-2xl bg-surface-subtle border border-white/5 text-[11px] font-mono text-slate-500 flex items-center justify-between">
              <span>Notice for Recruiters:</span>
              <span className="text-slate-400">All dates & credentials strictly verified</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
