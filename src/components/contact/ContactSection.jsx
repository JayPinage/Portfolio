import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  Terminal,
  ExternalLink,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowUpRight
} from "lucide-react";
import confetti from "canvas-confetti";
import SectionHeader from "../common/SectionHeader";
import { PERSONAL_INFO } from "../../data/portfolioData";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "AI Engineering & LLM Applications",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    const name = formData.name.trim();
    const senderEmail = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !senderEmail || !message) {
      setSubmitError("Please fill in your name, email, and message.");
      return;
    }

    setSubmitting(true);

    try {
      // FormSubmit sends the form to your inbox without requiring a custom backend.
      // The first submission may require you to confirm/activate the recipient email.
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(PERSONAL_INFO.email)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email: senderEmail,
            topic: formData.topic,
            message,
            _subject: `[Portfolio Contact] ${formData.topic} — ${name}`,
            _template: "table",
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || result.success === "false") {
        throw new Error(
          result.message || "The message could not be sent. Please try emailing directly."
        );
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        topic: "AI Engineering & LLM Applications",
        message: "",
      });

      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#00E5FF", "#8B5CF6", "#FFFFFF"],
      });
    } catch (error) {
      setSubmitError(
        error.message ||
          "Something went wrong. Please email directly using the address shown on this page."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeader
          tag="// 05. COLLABORATE & CONNECT"
          title="Let's Build Something Intelligent."
          subtitle="Looking to deploy LLM applications, autonomous agents, or high-throughput AI pipelines? Reach out to start a conversation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* ========================================================
              LEFT COLUMN: CONTACT INFO & SOCIAL HUBS
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 shadow-glass flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Open for Technical Roles</span>
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Let's discuss applied AI systems
              </h3>

              <p className="text-sm text-slate-300 font-sans leading-relaxed mb-8">
                I am actively considering opportunities as an <strong>AI Engineer</strong>, <strong>LLM Application Developer</strong>, or <strong>AI Systems Engineer</strong>. Whether you have an open position, an ambitious research project, or an engineering question, my inbox is open.
              </p>

              {/* Direct Email Card with Copy Interaction */}
              <div className="p-4 rounded-2xl bg-surface-subtle border border-cyan/20 mb-6">
                <span className="text-[11px] font-mono text-slate-400 block mb-1">
                  DIRECT EMAIL:
                </span>
                <div className="flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-sm sm:text-base text-cyan hover:underline truncate font-semibold"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="shrink-0 p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all"
                    title="Copy email to clipboard"
                    aria-label="Copy email"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-cyan" />
                    )}
                  </button>
                </div>
                {copied && (
                  <span className="text-[10px] font-mono text-emerald-400 block mt-1">
                    ✓ Email copied to clipboard
                  </span>
                )}
              </div>

              {/* Verified Links */}
              <div className="space-y-3">
                {/* GitHub */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan/40 transition-all text-slate-200 group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-cyan" />
                    <div className="text-left">
                      <span className="text-xs font-mono font-bold block text-white">
                        GitHub Profile
                      </span>
                      <span className="text-[11px] text-slate-400">
                        @JayPinage • Codebases & Commits
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan transition-colors" />
                </a>

                {/* LinkedIn */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet/40 transition-all text-slate-200 group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-violet-400" />
                    <div className="text-left">
                      <span className="text-xs font-mono font-bold block text-white">
                        LinkedIn Network
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Jay Pinage • Professional Profile
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-violet-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Clock className="w-3.5 h-3.5" />
                Typical Response: &lt; 24 Hours
              </span>
              <span className="text-slate-500">IST (UTC+5:30)</span>
            </div>
          </motion.div>

          {/* ========================================================
              RIGHT COLUMN: FUNCTIONAL MESSAGE COMPOSER
              ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel-cyan rounded-3xl p-8 sm:p-10 border border-cyan/25 shadow-cyan-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan" />
                  <span className="text-xs font-mono text-cyan uppercase tracking-wider font-semibold">
                    TRANSMISSION PROTOCOL
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  REAL-TIME DISPATCH
                </span>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-surface-subtle border border-emerald-500/30 text-center space-y-4 my-8">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white">
                    Transmission Formulated
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-md mx-auto leading-relaxed">
                    Your message client has been triggered with the prefilled inquiry. You can also copy your message or email directly at{" "}
                    <span className="text-cyan font-mono">{PERSONAL_INFO.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Dr. Alex Vance"
                        className="w-full px-4 py-3 rounded-xl bg-surface-subtle/90 border border-white/10 focus:border-cyan focus:outline-none text-sm text-white font-sans placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@company.ai"
                        className="w-full px-4 py-3 rounded-xl bg-surface-subtle/90 border border-white/10 focus:border-cyan focus:outline-none text-sm text-white font-sans placeholder:text-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Discussion Topic */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) =>
                        setFormData({ ...formData, topic: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-surface-subtle/90 border border-white/10 focus:border-cyan focus:outline-none text-sm text-white font-sans transition-colors"
                    >
                      <option value="AI Engineering & LLM Applications">
                        AI Engineering & LLM Applications
                      </option>
                      <option value="Autonomous Multi-Agent Architecture">
                        Autonomous Multi-Agent Architecture
                      </option>
                      <option value="Enterprise RAG System Design">
                        Enterprise RAG System Design
                      </option>
                      <option value="Full-Time / Internship Opportunity">
                        Full-Time / Internship Opportunity
                      </option>
                      <option value="Other Project Inquiry">
                        Other Project Inquiry
                      </option>
                    </select>
                  </div>

                  {/* Message Body */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                      Message / Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Hi Jay, we'd like to discuss an opportunity involving autonomous agent swarms and RAG knowledge bases..."
                      className="w-full px-4 py-3 rounded-xl bg-surface-subtle/90 border border-white/10 focus:border-cyan focus:outline-none text-sm text-white font-sans placeholder:text-slate-600 transition-colors resize-none"
                    />
                  </div>

                  {submitError && (
                    <p
                      role="alert"
                      className="text-sm text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-xl px-4 py-3"
                    >
                      {submitError} You can also contact{" "}
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="underline underline-offset-2"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                      .
                    </p>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 px-6 rounded-xl font-mono text-xs uppercase tracking-wider font-bold bg-gradient-to-r from-cyan via-sky-400 to-cyan text-slate-950 shadow-cyan-md hover:shadow-cyan-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <span>Formulating Transmission...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Dispatch Transmission to Jay Pinage</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] font-mono text-slate-500 text-center mt-2">
                      Sends your message securely through the contact form service.
                    </p>
                  </div>
                </form>
              )}
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Contact Form Submission</span>
              <span className="text-cyan">Encrypted in Transit</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
