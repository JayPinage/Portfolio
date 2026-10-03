import React, { Suspense, useState, useEffect, Component } from "react";
import { Canvas } from "@react-three/fiber";
import FuturisticRobot from "./FuturisticRobot";
import ParticleField from "./ParticleField";
import HolographicHUD from "./HolographicHUD";
import RobotFallback from "../hero/RobotFallback";
import * as THREE from "three";

/**
 * Error boundary for WebGL crashes or context loss
 */
class WebGLErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("WebGL Scene error caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <RobotFallback />;
    }
    return this.props.children;
  }
}

/**
 * Check if WebGL is supported by the client browser
 */
function isWebGLAvailable() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export default function RobotScene() {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 1. Verify WebGL support
    if (!isWebGLAvailable()) {
      setHasWebGL(false);
      return;
    }

    // 2. Check prefers-reduced-motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);
    const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener("change", handleMotionChange);

    // 3. Check mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      motionQuery.removeEventListener("change", handleMotionChange);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Gracefully fallback to the cybernetic card if WebGL is unavailable or reduced motion is active
  if (!hasWebGL || prefersReducedMotion) {
    return <RobotFallback />;
  }

  return (
    <div className="relative w-full h-[450px] sm:h-[520px] lg:h-[620px] select-none">
      {/* Background radial atmosphere */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan/10 via-violet/5 to-transparent blur-3xl pointer-events-none" />
      
      {/* Holographic HUD UI overlay */}
      <HolographicHUD />

      {/* 3D WebGL Canvas */}
      <WebGLErrorBoundary fallback={<RobotFallback />}>
        <Suspense fallback={<RobotFallback />}>
          <Canvas
            className="w-full h-full cursor-grab active:cursor-grabbing"
            camera={{ position: [0, 0.1, 3.8], fov: 42 }}
            dpr={[1, isMobile ? 1.2 : 1.8]}
            gl={{
              antialias: true,
              alpha: true,
              toneMapping: THREE.ACESFilmicToneMapping,
              toneMappingExposure: 1.15,
            }}
          >
            {/* Ambient Lighting */}
            <ambientLight intensity={0.55} color="#A0AEC0" />

            {/* Key Light (Cool White / Neutral) */}
            <directionalLight
              position={[-2.5, 4, 3]}
              intensity={2.0}
              color="#F8FAFC"
            />

            {/* Signature Electric Cyan Rim Light (Brilliant edge glow on metallic armor) */}
            <directionalLight
              position={[3.2, 1.2, -2]}
              intensity={3.8}
              color="#00E5FF"
            />

            {/* Soft Violet Secondary Fill Light */}
            <directionalLight
              position={[-3, -2, 1]}
              intensity={1.6}
              color="#8B5CF6"
            />

            {/* Chest Core Point Light */}
            <pointLight
              position={[0, -0.3, 0.4]}
              intensity={2.2}
              distance={3}
              color="#00E5FF"
            />

            {/* Atmospheric Cyber Particles */}
            <ParticleField count={isMobile ? 60 : 130} />

            {/* Realistic Procedural Humanoid AI Robot */}
            <FuturisticRobot isMobile={isMobile} />
          </Canvas>
        </Suspense>
      </WebGLErrorBoundary>
    </div>
  );
}
