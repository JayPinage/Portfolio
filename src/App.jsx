import React from "react";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero/HeroSection";
import AboutSection from "./components/about/AboutSection";
import SkillsSection from "./components/skills/SkillsSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import EducationSection from "./components/education/EducationSection";
import ContactSection from "./components/contact/ContactSection";
import Footer from "./components/footer/Footer";
import ScrollProgress from "./components/common/ScrollProgress";
import CyberBackground from "./components/common/CyberBackground";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#07090D] text-slate-100 font-sans selection:bg-cyan/30 selection:text-cyan overflow-x-hidden">
      {/* Slim Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Atmospheric Background Grids and Neon Gradients */}
      <CyberBackground />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="relative z-10 flex flex-col">
        {/* 1. Hero Section with Signature 3D AI Robot */}
        <HeroSection />

        {/* 2. About Section & 5 Core Focus Areas */}
        <AboutSection />

        {/* 3. Technical Skills Matrix */}
        <SkillsSection />

        {/* 4. Featured AI Projects & Architecture Simulators */}
        <ProjectsSection />

        {/* 5. Education & Verified Experience Timeline */}
        <EducationSection />

        {/* 6. Contact & Transmission Protocol */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
