import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Atmospheric floating cyber particles surrounding the 3D robot
 */
export default function ParticleField({ count = 120 }) {
  const pointsRef = useRef();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const cyan = new THREE.Color("#00E5FF");
    const violet = new THREE.Color("#8B5CF6");
    const white = new THREE.Color("#E2E8F0");

    for (let i = 0; i < count; i++) {
      // Spread in a cylinder/sphere around the robot
      const radius = 2.5 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 5.0;

      pos[i * 3] = Math.cos(theta) * radius;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(theta) * radius;

      // Color distribution: mix of cyan, violet, and soft white
      const choice = Math.random();
      const c = choice < 0.6 ? cyan : choice < 0.85 ? violet : white;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
      pointsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
