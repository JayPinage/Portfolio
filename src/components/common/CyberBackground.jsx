import React from "react";

/**
 * Subtle cybernetic background with fine grid lines, dark radial glows, and ambient neon atmosphere
 */
export default function CyberBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Fine technical grid */}
      <div className="absolute inset-0 cyber-grid opacity-60" />

      {/* Primary Radial Ambient Glows */}
      <div className="absolute -top-[25%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-radial from-cyan/10 via-cyan/2 to-transparent blur-[120px] rounded-full" />
      <div className="absolute top-[35%] -right-[15%] w-[700px] h-[700px] bg-gradient-radial from-violet/10 via-violet/2 to-transparent blur-[140px] rounded-full" />
      <div className="absolute top-[65%] -left-[15%] w-[600px] h-[600px] bg-gradient-radial from-cyan/8 via-cyan/2 to-transparent blur-[130px] rounded-full" />
      <div className="absolute -bottom-[10%] left-1/3 w-[800px] h-[500px] bg-gradient-radial from-violet/8 via-transparent to-transparent blur-[140px] rounded-full" />
    </div>
  );
}
