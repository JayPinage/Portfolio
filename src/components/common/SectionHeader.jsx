import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({
  tag,
  title,
  subtitle,
  align = "center",
}) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-3xl mb-12 sm:mb-16 ${
        isCenter ? "mx-auto text-center" : "text-left"
      }`}
    >
      {/* Category / Code Tag */}
      {tag && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-cyan/5 border border-cyan/20 text-cyan text-xs font-mono font-medium tracking-widest uppercase ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
          {tag}
        </div>
      )}

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
        {title}
      </h2>

      {/* Optional Subtitle */}
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 font-sans leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Technical accent rule */}
      <div
        className={`mt-6 h-[1px] w-24 bg-gradient-to-r from-transparent via-cyan/50 to-transparent ${
          isCenter ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
