import React, { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

/* ------------------------------------------------------------------ */
/* Procedural textures (no assets needed)                              */
/* ------------------------------------------------------------------ */
function makeBrushedTexture(size = 256) {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const g = c.getContext("2d");
  g.fillStyle = "#808080";
  g.fillRect(0, 0, size, size);
  for (let i = 0; i < 1400; i++) {
    const v = 90 + Math.random() * 110;
    g.strokeStyle = `rgba(${v},${v},${v},${0.15 + Math.random() * 0.25})`;
    g.lineWidth = Math.random() * 1.2;
    const y = Math.random() * size;
    g.beginPath();
    g.moveTo(0, y);
    g.lineTo(size, y + (Math.random() - 0.5) * 2);
    g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.NoColorSpace;
  return t;
}

function makeCarbonTexture(size = 128) {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const g = c.getContext("2d");
  const s = size / 8;
  for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
      const horiz = (x + y) % 2 === 0;
      const grad = horiz
        ? g.createLinearGradient(0, y * s, 0, (y + 1) * s)
        : g.createLinearGradient(x * s, 0, (x + 1) * s, 0);
      grad.addColorStop(0, "#3a3a3a");
      grad.addColorStop(0.5, "#b0b0b0");
      grad.addColorStop(1, "#3a3a3a");
      g.fillStyle = grad;
      g.fillRect(x * s, y * s, s, s);
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(3, 3);
  t.colorSpace = THREE.NoColorSpace;
  return t;
}

/* ------------------------------------------------------------------ */
/* Small reusable parts                                                */
/* ------------------------------------------------------------------ */
const Bolt = ({ position, rotation = [0, 0, 0], r = 0.014, mat }) => (
  <mesh position={position} rotation={rotation} material={mat}>
    <cylinderGeometry args={[r, r, 0.02, 6]} />
  </mesh>
);

const Cable = ({ points, radius = 0.014, mat }) => {
  const curve = useMemo(
    () => new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p))),
    [points]
  );
  return (
    <mesh material={mat}>
      <tubeGeometry args={[curve, 24, radius, 6, false]} />
    </mesh>
  );
};

// Hydraulic piston: fixed sleeve + sliding rod (rod ref animated by parent)
const Piston = React.forwardRef(function Piston(
  { position, length = 0.3, mats },
  rodRef
) {
  return (
    <group position={position}>
      <mesh material={mats.rubber}>
        <cylinderGeometry args={[0.045, 0.045, length * 0.6, 12]} />
      </mesh>
      <mesh ref={rodRef} position={[0, length * 0.3, 0]} material={mats.chrome}>
        <cylinderGeometry args={[0.022, 0.022, length * 0.7, 10]} />
      </mesh>
    </group>
  );
});

/* ------------------------------------------------------------------ */
/**
 * FuturisticRobot — high-fidelity procedural humanoid bust.
 * Needs <Environment /> in the Canvas for metal reflections.
 * Optional: @react-three/postprocessing <Bloom /> makes the glow read as light.
 */
export default function FuturisticRobot({ isMobile = false }) {
  const rootGroup = useRef();
  const torsoGroup = useRef();
  const headGroup = useRef();
  const eyeGroup = useRef();
  const eyeL = useRef();
  const eyeR = useRef();
  const reactorGlow = useRef();
  const reactorRingA = useRef();
  const reactorRingB = useRef();
  const reactorLight = useRef();
  const scanRing1Ref = useRef();
  const scanRing2Ref = useRef();
  const pistonL = useRef();
  const pistonR = useRef();
  const blink = useRef({ next: 2.5, t: -1 });

  const seg = isMobile ? 12 : 32;

  const { mats, textures } = useMemo(() => {
    const brushed = makeBrushedTexture();
    const carbon = makeCarbonTexture();

    const mats = {
      armor: new THREE.MeshPhysicalMaterial({
        color: "#0c121d",
        metalness: 0.88,
        roughness: 0.32,
        roughnessMap: brushed,
        bumpMap: carbon,
        bumpScale: 0.6,
        clearcoat: 1,
        clearcoatRoughness: 0.12,
        envMapIntensity: 1.4,
      }),
      titanium: new THREE.MeshPhysicalMaterial({
        color: "#8593a8",
        metalness: 1,
        roughness: 0.28,
        roughnessMap: brushed,
        anisotropy: 0.6,
        envMapIntensity: 1.6,
      }),
      chrome: new THREE.MeshStandardMaterial({
        color: "#d5dde8",
        metalness: 1,
        roughness: 0.08,
        envMapIntensity: 1.8,
      }),
      chassis: new THREE.MeshStandardMaterial({
        color: "#060a11",
        metalness: 0.9,
        roughness: 0.55,
        roughnessMap: brushed,
      }),
      rubber: new THREE.MeshStandardMaterial({
        color: "#0a0a0c",
        metalness: 0.1,
        roughness: 0.85,
      }),
      glass: new THREE.MeshPhysicalMaterial({
        color: "#031219",
        metalness: 0.3,
        roughness: 0.04,
        clearcoat: 1,
        clearcoatRoughness: 0.02,
        emissive: "#00E5FF",
        emissiveIntensity: 0.06,
        envMapIntensity: 2.2,
      }),
      cyan: new THREE.MeshStandardMaterial({
        color: "#00E5FF",
        emissive: "#00E5FF",
        emissiveIntensity: 3,
        toneMapped: false,
      }),
      violet: new THREE.MeshStandardMaterial({
        color: "#8B5CF6",
        emissive: "#8B5CF6",
        emissiveIntensity: 2,
        toneMapped: false,
      }),
      reactor: new THREE.MeshStandardMaterial({
        color: "#9ff6ff",
        emissive: "#00E5FF",
        emissiveIntensity: 3.5,
        toneMapped: false,
      }),
      holoCyan: new THREE.MeshBasicMaterial({
        color: "#00E5FF",
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      }),
      holoViolet: new THREE.MeshBasicMaterial({
        color: "#8B5CF6",
        wireframe: true,
        transparent: true,
        opacity: 0.22,
      }),
    };
    return { mats, textures: [brushed, carbon] };
  }, []);

  useEffect(
    () => () => {
      Object.values(mats).forEach((m) => m.dispose());
      textures.forEach((t) => t.dispose());
    },
    [mats, textures]
  );

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const { x: mx, y: my } = state.mouse;
    const d = THREE.MathUtils.damp;

    // Idle float + breathing
    if (rootGroup.current) {
      rootGroup.current.position.y = -0.3 + Math.sin(t * 1.6) * 0.05;
      const b = 1 + Math.sin(t * 2.2) * 0.01;
      rootGroup.current.scale.setScalar(b);
    }

    // Head: slower, heavier follow (mass feel)
    const h = headGroup.current;
    if (h) {
      h.rotation.y = d(h.rotation.y, mx * 0.5, 3.2, delta);
      h.rotation.x = d(h.rotation.x, -my * 0.3, 3.2, delta);
      h.rotation.z = d(h.rotation.z, -mx * 0.07, 3.2, delta);
    }

    // Eyes lead the head: faster, small independent offset
    if (eyeGroup.current) {
      eyeGroup.current.position.x = d(eyeGroup.current.position.x, mx * 0.035, 9, delta);
      eyeGroup.current.position.y = d(eyeGroup.current.position.y, my * 0.015, 9, delta);
    }

    // Blink
    const bl = blink.current;
    if (t > bl.next && bl.t < 0) bl.t = t;
    let sy = 1;
    if (bl.t >= 0) {
      const p = (t - bl.t) / 0.16;
      sy = p < 0.5 ? 1 - p * 2 * 0.92 : 0.08 + (p - 0.5) * 2 * 0.92;
      if (p >= 1) {
        sy = 1;
        bl.t = -1;
        bl.next = t + 2 + Math.random() * 4;
      }
    }
    [eyeL, eyeR].forEach((r) => r.current && (r.current.scale.y = Math.max(sy, 0.08)));

    // Torso lag
    const tg = torsoGroup.current;
    if (tg) {
      tg.rotation.y = d(tg.rotation.y, mx * 0.16, 2.2, delta);
      tg.rotation.x = d(tg.rotation.x, -my * 0.08, 2.2, delta);
    }

    // Neck pistons compress/extend with head tilt
    const ext = (h ? h.rotation.x : 0) * 0.35;
    if (pistonL.current) pistonL.current.position.y = 0.1 + ext + Math.sin(t * 2.2) * 0.004;
    if (pistonR.current) pistonR.current.position.y = 0.1 - ext + Math.sin(t * 2.2) * 0.004;

    // Reactor
    const pulse = 3 + Math.sin(t * 3.2) * 1.1 + Math.sin(t * 9) * 0.15;
    mats.reactor.emissiveIntensity = pulse;
    if (reactorLight.current) reactorLight.current.intensity = 0.8 + pulse * 0.25;
    if (reactorRingA.current) reactorRingA.current.rotation.z += delta * 0.9;
    if (reactorRingB.current) reactorRingB.current.rotation.z -= delta * 1.4;
    if (reactorGlow.current) {
      const s = 1 + Math.sin(t * 3.2) * 0.08;
      reactorGlow.current.scale.set(s, s, 1);
    }

    // Holo rings
    if (scanRing1Ref.current) {
      scanRing1Ref.current.rotation.z += delta * 0.25;
      scanRing1Ref.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.8) * 0.1;
    }
    if (scanRing2Ref.current) {
      scanRing2Ref.current.rotation.z -= delta * 0.18;
      scanRing2Ref.current.rotation.y = Math.PI / 4 + Math.cos(t * 0.6) * 0.1;
    }
  });

  const RB = (props) => <RoundedBox smoothness={isMobile ? 2 : 4} {...props} />;

  return (
    <group ref={rootGroup} position={[0, -0.3, 0]}>
      {/* Lighting that sells the glow on nearby metal */}
      <pointLight position={[0, 0.9, 1]} color="#00E5FF" intensity={1.2} distance={3} />
      <pointLight position={[-1.5, 1.2, -1.2]} color="#8B5CF6" intensity={2} distance={5} />
      <pointLight position={[1.5, 0.2, -1]} color="#00E5FF" intensity={1.2} distance={5} />

      {/* Holographic rings */}
      <group position={[0, 0.3, 0]}>
        <mesh ref={scanRing1Ref} material={mats.holoCyan}>
          <torusGeometry args={[1.75, 0.015, 12, 64]} />
        </mesh>
        <mesh ref={scanRing2Ref} material={mats.holoViolet}>
          <torusGeometry args={[1.9, 0.012, 10, 56]} />
        </mesh>
      </group>

      {/* ============================ TORSO ============================ */}
      <group ref={torsoGroup}>
        {/* Inner chassis */}
        <RB args={[0.9, 1.2, 0.62]} radius={0.06} position={[0, -0.4, -0.04]} material={mats.chassis} />

        {/* Spine vertebrae */}
        {[-0.1, -0.33, -0.56, -0.79].map((y, i) => (
          <group key={i} position={[0, y, -0.38]}>
            <mesh rotation={[0, 0, 0]} material={mats.titanium}>
              <cylinderGeometry args={[0.12, 0.14, 0.15, 10]} />
            </mesh>
            <mesh position={[0, 0, -0.09]} material={mats.cyan}>
              <boxGeometry args={[0.07, 0.05, 0.02]} />
            </mesh>
          </group>
        ))}
        <Cable
          mat={mats.rubber}
          radius={0.016}
          points={[[-0.2, 0.3, -0.3], [-0.26, 0, -0.45], [-0.2, -0.5, -0.42], [-0.12, -0.95, -0.3]]}
        />
        <Cable
          mat={mats.rubber}
          radius={0.016}
          points={[[0.2, 0.3, -0.3], [0.26, 0, -0.45], [0.2, -0.5, -0.42], [0.12, -0.95, -0.3]]}
        />

        {/* Collar */}
        <RB args={[1.35, 0.15, 0.55]} radius={0.06} position={[0, 0.22, 0.08]} material={mats.armor} />
        <mesh position={[0, 0.26, 0.355]} material={mats.violet}>
          <boxGeometry args={[0.9, 0.018, 0.012]} />
        </mesh>

        {/* Pectoral plates */}
        {[-1, 1].map((s) => (
          <group key={s} position={[s * 0.34, -0.05, 0.26]} rotation={[0.08, -s * 0.12, s * 0.05]}>
            <RB args={[0.55, 0.42, 0.16]} radius={0.05} material={mats.armor} />
            <mesh position={[0, -0.17, 0.085]} material={mats.titanium}>
              <boxGeometry args={[0.46, 0.025, 0.02]} />
            </mesh>
            <mesh position={[-s * 0.15, 0.05, 0.082]} material={mats.cyan}>
              <boxGeometry args={[0.014, 0.25, 0.006]} />
            </mesh>
            <Bolt position={[s * 0.22, 0.15, 0.085]} rotation={[Math.PI / 2, 0, 0]} mat={mats.chrome} />
            <Bolt position={[s * 0.22, -0.12, 0.085]} rotation={[Math.PI / 2, 0, 0]} mat={mats.chrome} />
          </group>
        ))}

        {/* Sternum arc reactor */}
        <group position={[0, -0.05, 0.3]}>
          <mesh rotation={[Math.PI / 2, 0, 0]} material={mats.titanium}>
            <cylinderGeometry args={[0.2, 0.2, 0.08, seg]} />
          </mesh>
          <mesh position={[0, 0, 0.045]} material={mats.chassis}>
            <torusGeometry args={[0.17, 0.018, 10, seg]} />
          </mesh>
          <mesh ref={reactorRingA} position={[0, 0, 0.05]} material={mats.chrome}>
            <torusGeometry args={[0.135, 0.012, 8, seg]} />
          </mesh>
          <mesh ref={reactorRingB} position={[0, 0, 0.055]} material={mats.violet}>
            <torusGeometry args={[0.105, 0.008, 8, 6]} />
          </mesh>
          <mesh ref={reactorGlow} position={[0, 0, 0.05]} rotation={[Math.PI / 2, 0, 0]} material={mats.reactor}>
            <cylinderGeometry args={[0.085, 0.085, 0.03, seg]} />
          </mesh>
          <mesh position={[0, 0, 0.075]} material={mats.glass}>
            <sphereGeometry args={[0.1, seg, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
          </mesh>
          <pointLight ref={reactorLight} position={[0, 0, 0.25]} color="#00E5FF" distance={2.2} />
        </group>

        {/* Abdominal slats */}
        {[-0.38, -0.56, -0.74].map((y, i) => (
          <group key={i} position={[0, y, 0.22]}>
            <RB args={[0.78 - i * 0.08, 0.12, 0.18]} radius={0.04} material={mats.armor} />
            <mesh position={[0, 0, 0.092]} material={mats.titanium}>
              <boxGeometry args={[0.7 - i * 0.08, 0.02, 0.01]} />
            </mesh>
          </group>
        ))}

        {/* ======================== SHOULDERS ======================== */}
        {[-1, 1].map((s) => (
          <group key={s} position={[s * 0.85, 0.15, 0]}>
            <mesh material={mats.titanium}>
              <sphereGeometry args={[0.22, seg, seg]} />
            </mesh>
            {/* joint ring */}
            <mesh rotation={[0, Math.PI / 2, 0]} material={mats.rubber}>
              <torusGeometry args={[0.225, 0.025, 8, seg]} />
            </mesh>
            {/* Pauldron */}
            <RB
              args={[0.42, 0.32, 0.46]}
              radius={0.09}
              position={[s * 0.14, 0.12, 0.04]}
              rotation={[0, 0, -s * 0.25]}
              material={mats.armor}
            />
            <mesh position={[s * 0.3, 0.17, 0.04]} rotation={[0, 0, -s * 0.25]} material={mats.cyan}>
              <boxGeometry args={[0.012, 0.16, 0.32]} />
            </mesh>
            {/* Bicep */}
            <mesh position={[s * 0.1, -0.32, 0]} material={mats.chassis}>
              <cylinderGeometry args={[0.13, 0.115, 0.45, 16]} />
            </mesh>
            {[-0.18, -0.3, -0.42].map((y, i) => (
              <mesh key={i} position={[s * 0.1, y, 0]} rotation={[Math.PI / 2, 0, 0]} material={mats.titanium}>
                <torusGeometry args={[0.125 - i * 0.005, 0.01, 6, 20]} />
              </mesh>
            ))}
            <Piston
              position={[s * 0.2, -0.3, 0.09]}
              length={0.36}
              mats={mats}
            />
          </group>
        ))}

        {/* ============================ NECK ============================ */}
        <group position={[0, 0.42, 0.02]}>
          {[0.1, 0.03, -0.04, -0.11].map((y, i) => (
            <mesh key={i} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]} material={i % 2 ? mats.titanium : mats.chassis}>
              <torusGeometry args={[0.17 + i * 0.012, 0.04, 10, seg]} />
            </mesh>
          ))}
          <Piston ref={pistonL} position={[-0.15, -0.02, 0.1]} length={0.3} mats={mats} />
          <Piston ref={pistonR} position={[0.15, -0.02, 0.1]} length={0.3} mats={mats} />
          <RB args={[0.2, 0.26, 0.08]} radius={0.03} position={[0, 0, -0.17]} material={mats.armor} />
          <Cable
            mat={mats.rubber}
            radius={0.012}
            points={[[-0.08, -0.14, -0.1], [-0.1, 0, -0.2], [-0.06, 0.18, -0.12]]}
          />
          <Cable
            mat={mats.rubber}
            radius={0.012}
            points={[[0.08, -0.14, -0.1], [0.1, 0, -0.2], [0.06, 0.18, -0.12]]}
          />
        </group>
      </group>

      {/* ============================ HEAD ============================ */}
      <group ref={headGroup} position={[0, 0.85, 0.06]}>
        {/* Cranium */}
        <RB args={[0.62, 0.64, 0.65]} radius={0.12} position={[0, 0.08, -0.02]} material={mats.armor} />
        {/* Crown */}
        <RB
          args={[0.46, 0.16, 0.58]}
          radius={0.06}
          position={[0, 0.44, -0.06]}
          rotation={[-0.15, 0, 0]}
          material={mats.armor}
        />
        <mesh position={[0, 0.525, -0.04]} rotation={[-0.15, 0, 0]} material={mats.cyan}>
          <boxGeometry args={[0.05, 0.012, 0.5]} />
        </mesh>

        {/* Temple plates */}
        {[-1, 1].map((s) => (
          <group key={s}>
            <RB args={[0.07, 0.45, 0.55]} radius={0.025} position={[s * 0.335, 0.1, -0.02]} material={mats.titanium} />
            {/* Ear pod */}
            <group position={[s * 0.385, 0.06, -0.04]}>
              <mesh rotation={[0, 0, Math.PI / 2]} material={mats.chassis}>
                <cylinderGeometry args={[0.13, 0.13, 0.07, seg]} />
              </mesh>
              <mesh position={[s * 0.04, 0, 0]} rotation={[0, 0, Math.PI / 2]} material={mats.titanium}>
                <torusGeometry args={[0.1, 0.012, 8, seg]} />
              </mesh>
              <mesh position={[s * 0.04, 0, 0]} material={mats.cyan}>
                <sphereGeometry args={[0.03, 12, 12]} />
              </mesh>
            </group>
          </group>
        ))}

        {/* Jaw */}
        <RB
          args={[0.46, 0.28, 0.32]}
          radius={0.07}
          position={[0, -0.22, 0.14]}
          rotation={[0.35, 0, 0]}
          material={mats.armor}
        />
        <RB args={[0.22, 0.1, 0.12]} radius={0.03} position={[0, -0.33, 0.22]} material={mats.titanium} />
        {[-0.17, -0.22, -0.27].map((y, i) => (
          <mesh key={i} position={[0, y, 0.305 - i * 0.02]} rotation={[0.35, 0, 0]} material={mats.chassis}>
            <boxGeometry args={[0.18 - i * 0.03, 0.014, 0.012]} />
          </mesh>
        ))}

        {/* ======================= VISOR / EYES ======================= */}
        <group position={[0, 0.06, 0.3]}>
          {/* Recessed bezel */}
          <RB args={[0.54, 0.18, 0.06]} radius={0.04} material={mats.chassis} />
          {/* Eye sockets + eyes (track faster than head) */}
          <group ref={eyeGroup} position={[0, 0, 0.025]}>
            {[-1, 1].map((s) => (
              <group key={s} ref={s < 0 ? eyeL : eyeR} position={[s * 0.14, 0, 0]}>
                <mesh rotation={[Math.PI / 2, 0, 0]} material={mats.titanium}>
                  <torusGeometry args={[0.052, 0.008, 8, 24]} />
                </mesh>
                <mesh position={[0, 0, 0.002]} rotation={[Math.PI / 2, 0, 0]} material={mats.cyan}>
                  <cylinderGeometry args={[0.042, 0.042, 0.012, 24]} />
                </mesh>
                <mesh position={[0, 0, 0.012]} rotation={[Math.PI / 2, 0, 0]} material={mats.chassis}>
                  <cylinderGeometry args={[0.016, 0.016, 0.01, 16]} />
                </mesh>
                <mesh position={[0.012, 0.012, 0.016]}>
                  <sphereGeometry args={[0.005, 8, 8]} />
                  <meshBasicMaterial color="#ffffff" />
                </mesh>
              </group>
            ))}
            {/* thin glow strip between eyes */}
            <mesh position={[0, 0, 0.004]} material={mats.cyan}>
              <boxGeometry args={[0.12, 0.012, 0.006]} />
            </mesh>
          </group>
          {/* Glass cover */}
          <RB args={[0.5, 0.14, 0.02]} radius={0.01} position={[0, 0, 0.06]} material={mats.glass} />
        </group>

        {/* Forehead sensors */}
        <group position={[0, 0.24, 0.31]}>
          {[-0.12, 0, 0.12].map((x, i) => (
            <mesh key={i} position={[x, 0, 0]} rotation={[Math.PI / 2, 0, 0]} material={mats.violet}>
              <cylinderGeometry args={[0.014, 0.014, 0.025, 10]} />
            </mesh>
          ))}
        </group>
      </group>
    </group>
  );
}
