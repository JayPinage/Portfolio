import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, ArrowUpRight, Cpu } from "lucide-react";
import { PERSONAL_INFO } from "../../data/portfolioData";

const NAV_ITEMS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy detection
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#07090D]/85 backdrop-blur-xl border-b border-white/10 shadow-glass py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo / Wordmark */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="group flex items-center gap-3 cursor-pointer"
          aria-label="Jay Pinage Home"
        >
          {/* Cyber emblem */}
          <div className="relative w-9 h-9 rounded-xl bg-surface-subtle border border-cyan/30 flex items-center justify-center group-hover:border-cyan transition-colors shadow-cyan-sm">
            <Cpu className="w-5 h-5 text-cyan group-hover:scale-110 transition-transform" />
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan animate-ping" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg text-white tracking-tight group-hover:text-cyan transition-colors flex items-center gap-1.5">
              JAY PINAGE
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan/10 text-cyan border border-cyan/30">
                AI
              </span>
            </span>
            <span className="text-[10px] font-mono text-slate-400 tracking-wider">
              INTELLIGENT SYSTEMS
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-surface-subtle/80 backdrop-blur-lg border border-white/10 shadow-glass">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors rounded-full ${
                  isActive
                    ? "text-cyan font-semibold"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 rounded-full bg-cyan/10 border border-cyan/30 shadow-cyan-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Header Right Action: Status Pill & Contact CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open to AI Roles</span>
          </div>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold bg-gradient-to-r from-cyan to-sky-400 text-slate-950 hover:shadow-cyan-md hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="px-3 py-1.5 text-xs font-mono bg-cyan/10 text-cyan border border-cyan/30 rounded-lg"
          >
            Connect
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-surface-subtle border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0B0F17]/95 backdrop-blur-2xl border-b border-cyan/20 px-6 py-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-mono tracking-wider transition-colors ${
                      isActive
                        ? "bg-cyan/10 text-cyan border border-cyan/30"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{item.name}</span>
                    <span className="text-xs text-slate-500 font-mono">0{NAV_ITEMS.indexOf(item) + 1}</span>
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available 2026
                </span>
                <span className="text-slate-500">Jay Pinage Portfolio</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
