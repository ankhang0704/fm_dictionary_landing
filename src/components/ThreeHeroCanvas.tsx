"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function isWebGLAvailable(): boolean {
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

/**
 * ThreeHeroCanvas: Stylized Smart Building (Tòa cao ốc thông minh wireframe)
 * Represents modern high-rise architecture with tiered floor plates,
 * central technical shaft, and glowing MEP/BMS telemetry network lines.
 * Strictly adheres to threejs-optimiser rules: 60fps, clamped DPR,
 * IntersectionObserver viewport pause without loop multiplication,
 * and complete WebGL memory disposal.
 */
export const ThreeHeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglSupported] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    return isWebGLAvailable();
  });

  useEffect(() => {
    if (!webglSupported) return;

    const container = containerRef.current;
    if (!container) return;

    let isVisible = true;
    let isLoopRunning = false;
    let animationFrameId: number | null = null;

    // Registry of disposable WebGL resources for leak-free cleanup
    const disposables: Array<{ dispose: () => void }> = [];
    const register = <T extends { dispose: () => void }>(resource: T): T => {
      disposables.push(resource);
      return resource;
    };

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 450;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 7.8);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    // threejs-optimiser: Clamp pixel ratio to 2 to avoid Retina GPU thermal throttling
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    // 2. Main Interactive High-Rise Tower Group
    const mainGroup = new THREE.Group();
    // Tilt slightly for dramatic architectural perspective
    mainGroup.rotation.x = 0.12;
    scene.add(mainGroup);

    // Materials Palette
    const glassMaterial = register(
      new THREE.MeshStandardMaterial({
        color: 0x101418,
        metalness: 0.85,
        roughness: 0.2,
        transparent: true,
        opacity: 0.65,
      })
    );

    const wireframeBlueMaterial = register(
      new THREE.LineBasicMaterial({
        color: 0x0099ff,
        transparent: true,
        opacity: 0.65,
      })
    );

    const wireframeSoftMaterial = register(
      new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.35,
      })
    );

    const mepLineMaterial = register(
      new THREE.LineBasicMaterial({
        color: 0x0099ff,
        transparent: true,
        opacity: 0.85,
      })
    );

    const telemetryGreenMaterial = register(
      new THREE.MeshBasicMaterial({
        color: 0x22c55e,
        transparent: true,
        opacity: 0.9,
      })
    );

    const telemetryCyanMaterial = register(
      new THREE.MeshBasicMaterial({
        color: 0x0099ff,
        transparent: true,
        opacity: 0.9,
      })
    );

    // 3. Central Technical & Elevator Core Shaft
    const coreHeight = 4.8;
    const coreGeo = register(new THREE.BoxGeometry(0.55, coreHeight, 0.55));
    const coreMaterial = register(
      new THREE.MeshStandardMaterial({
        color: 0x0d0d0d,
        metalness: 0.9,
        roughness: 0.3,
        transparent: true,
        opacity: 0.85,
      })
    );
    const coreMesh = new THREE.Mesh(coreGeo, coreMaterial);
    coreMesh.position.y = -0.2;
    mainGroup.add(coreMesh);

    const coreWireGeo = register(new THREE.WireframeGeometry(coreGeo));
    const coreWire = new THREE.LineSegments(coreWireGeo, wireframeSoftMaterial);
    coreMesh.add(coreWire);

    // 4. Tiered Building Volumes (Podium, Mid Tower, High Tower)
    interface TierConfig {
      w: number;
      d: number;
      h: number;
      y: number;
      floors: number;
    }

    const tiers: TierConfig[] = [
      { w: 2.3, d: 2.3, h: 1.3, y: -1.95, floors: 4 }, // Podium / Substation base
      { w: 1.7, d: 1.7, h: 1.8, y: -0.4, floors: 6 },  // Mid-rise commercial levels
      { w: 1.2, d: 1.2, h: 1.5, y: 1.25, floors: 5 },  // High-rise executive suites
      { w: 0.8, d: 0.8, h: 0.45, y: 2.22, floors: 2 }, // Rooftop Chiller/MEP penthouse
    ];

    tiers.forEach((tier) => {
      // Tier Glass Volume
      const tierGeo = register(new THREE.BoxGeometry(tier.w, tier.h, tier.d));
      const tierMesh = new THREE.Mesh(tierGeo, glassMaterial);
      tierMesh.position.y = tier.y;
      mainGroup.add(tierMesh);

      // Outer Structural Wireframe Edges
      const edgesGeo = register(new THREE.EdgesGeometry(tierGeo));
      const edges = new THREE.LineSegments(edgesGeo, wireframeBlueMaterial);
      tierMesh.add(edges);

      // Floor Slabs (Horizontal Architectural Rings)
      const floorStep = tier.h / tier.floors;
      for (let f = 1; f < tier.floors; f++) {
        const floorY = -tier.h / 2 + f * floorStep;
        const floorPoints = [
          new THREE.Vector3(-tier.w / 2, floorY, -tier.d / 2),
          new THREE.Vector3(tier.w / 2, floorY, -tier.d / 2),
          new THREE.Vector3(tier.w / 2, floorY, tier.d / 2),
          new THREE.Vector3(-tier.w / 2, floorY, tier.d / 2),
          new THREE.Vector3(-tier.w / 2, floorY, -tier.d / 2),
        ];
        const floorGeo = register(new THREE.BufferGeometry().setFromPoints(floorPoints));
        const floorLine = new THREE.Line(floorGeo, wireframeSoftMaterial);
        tierMesh.add(floorLine);
      }
    });

    // 5. Crown BMS Telemetry Spire / Antenna
    const spireGeo = register(new THREE.CylinderGeometry(0.015, 0.04, 0.9, 8));
    const spireMat = register(new THREE.MeshBasicMaterial({ color: 0x0099ff }));
    const spireMesh = new THREE.Mesh(spireGeo, spireMat);
    spireMesh.position.y = 2.9;
    mainGroup.add(spireMesh);

    // Spire Beacon Signal Light (Pulsing green)
    const beaconGeo = register(new THREE.SphereGeometry(0.06, 12, 12));
    const beaconMesh = new THREE.Mesh(beaconGeo, telemetryGreenMaterial);
    beaconMesh.position.y = 3.35;
    mainGroup.add(beaconMesh);

    // 6. Glowing MEP & BMS Technical Conduits (Risers & Loops)
    const mepPoints = [
      // Chiller loop from rooftop down to podium
      new THREE.Vector3(0.45, 2.2, 0.45),
      new THREE.Vector3(0.65, 2.0, 0.65),
      new THREE.Vector3(0.65, 0.5, 0.65),
      new THREE.Vector3(0.9, 0.5, 0.9),
      new THREE.Vector3(0.9, -1.3, 0.9),
      new THREE.Vector3(1.18, -1.3, 1.18),
      new THREE.Vector3(1.18, -2.5, 1.18),
      // Loop around mechanical basement
      new THREE.Vector3(-1.18, -2.5, 1.18),
      new THREE.Vector3(-1.18, -2.5, -1.18),
      new THREE.Vector3(-0.9, -1.3, -0.9),
      new THREE.Vector3(-0.9, 0.5, -0.9),
      new THREE.Vector3(-0.65, 0.5, -0.65),
      new THREE.Vector3(-0.65, 2.0, -0.65),
      new THREE.Vector3(-0.45, 2.2, -0.45),
    ];
    const mepGeo = register(new THREE.BufferGeometry().setFromPoints(mepPoints));
    const mepConduit = new THREE.Line(mepGeo, mepLineMaterial);
    mainGroup.add(mepConduit);

    // 7. Telemetry Sensor Signal Nodes (BMS Data Points)
    const nodePositions = [
      new THREE.Vector3(0.45, 2.2, 0.45),   // Rooftop Chiller & Cooling Tower
      new THREE.Vector3(-0.45, 2.2, -0.45), // Rooftop Emergency Generator
      new THREE.Vector3(0.65, 0.5, 0.65),   // Mid-rise AHU Mechanical Room
      new THREE.Vector3(-0.65, 0.5, -0.65), // Mid-rise Fire Pump Loop
      new THREE.Vector3(1.18, -2.1, 1.18),  // Substation MSB Transformer Vault
      new THREE.Vector3(-1.18, -2.1, 1.18), // Domestic Water Booster Pump
      new THREE.Vector3(0, -0.3, 0.9),      // Building Operations Centre (BOC)
    ];

    const sensorNodes: THREE.Mesh[] = [];
    const nodeSphereGeo = register(new THREE.SphereGeometry(0.045, 8, 8));

    nodePositions.forEach((pos, idx) => {
      const mat = idx % 2 === 0 ? telemetryGreenMaterial : telemetryCyanMaterial;
      const node = new THREE.Mesh(nodeSphereGeo, mat);
      node.position.copy(pos);
      mainGroup.add(node);
      sensorNodes.push(node);
    });

    // 8. Ground Site Boundary Loop (Smooth circular perimeter)
    const ringRadius = 2.25;
    const ringPoints: THREE.Vector3[] = [];
    const segments = 48;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      ringPoints.push(
        new THREE.Vector3(Math.cos(theta) * ringRadius, -2.62, Math.sin(theta) * ringRadius)
      );
    }
    const groundGridGeo = register(new THREE.BufferGeometry().setFromPoints(ringPoints));
    const groundGrid = new THREE.Line(groundGridGeo, wireframeSoftMaterial);
    mainGroup.add(groundGrid);

    // 9. Floating Telemetry Particles (Adaptive Budget for Mobile)
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const particleCount = isMobile ? 35 : 65;
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.8 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const y = -2.5 + Math.random() * 5.5;

      particlePositions[i * 3] = radius * Math.cos(theta);
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = radius * Math.sin(theta);
    }

    const particleGeometry = register(new THREE.BufferGeometry());
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = register(
      new THREE.PointsMaterial({
        color: 0x0099ff,
        size: 0.05,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
      })
    );

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particles);

    // 10. Cinematic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const blueLight = new THREE.PointLight(0x0099ff, 3.2, 35);
    blueLight.position.set(4, 4, 4);
    scene.add(blueLight);

    const greenLight = new THREE.PointLight(0x22c55e, 1.8, 30);
    greenLight.position.set(-4, -2, 3);
    scene.add(greenLight);

    // 11. Interactive Tracking (Parallax with Boundary Clamping)
    let targetRotationX = 0.12;
    let targetRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);

      const normX = Math.max(-1.2, Math.min(1.2, x / (rect.width / 2)));
      const normY = Math.max(-1.2, Math.min(1.2, y / (rect.height / 2)));

      targetRotationY = normX * 0.45;
      targetRotationX = 0.12 + normY * 0.25;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 0) return;
      const touch = event.touches[0];
      const rect = container.getBoundingClientRect();
      const x = touch.clientX - (rect.left + rect.width / 2);
      const y = touch.clientY - (rect.top + rect.height / 2);

      const normX = Math.max(-1.2, Math.min(1.2, x / (rect.width / 2)));
      const normY = Math.max(-1.2, Math.min(1.2, y / (rect.height / 2)));

      targetRotationY = normX * 0.5;
      targetRotationX = 0.12 + normY * 0.3;
    };

    const handleTouchEnd = () => {
      targetRotationY = 0;
      targetRotationX = 0.12;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    // 12. Container-Aware ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(container);

    // 13. Single 60fps Animation Loop with Concurrency Protection
    let clockTime = 0;

    const renderLoop = () => {
      if (!isVisible || !isLoopRunning) {
        isLoopRunning = false;
        return;
      }
      animationFrameId = requestAnimationFrame(renderLoop);

      clockTime += 0.02;

      // Smooth inertia rotation
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.045;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.045;

      // Passive idle spinning
      mainGroup.rotation.y += 0.002;
      particles.rotation.y -= 0.0008;

      // Pulsing telemetry signals
      const pulseScale = 1 + Math.sin(clockTime * 2.5) * 0.25;
      beaconMesh.scale.set(pulseScale, pulseScale, pulseScale);

      sensorNodes.forEach((node, i) => {
        const s = 1 + Math.sin(clockTime * 3 + i) * 0.3;
        node.scale.set(s, s, s);
      });

      renderer.render(scene, camera);
    };

    const startLoop = () => {
      if (isLoopRunning) return;
      isLoopRunning = true;
      renderLoop();
    };

    const stopLoop = () => {
      isLoopRunning = false;
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    };

    // 14. Visibility Awareness via IntersectionObserver
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          startLoop();
        } else {
          stopLoop();
        }
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    // Initial loop kickoff
    startLoop();

    // 15. Complete WebGL Disposal
    return () => {
      stopLoop();
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      disposables.forEach((item) => {
        try {
          item.dispose();
        } catch {
          // ignore already disposed
        }
      });

      renderer.dispose();
    };
  }, [webglSupported]);

  if (!webglSupported) {
    return (
      <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center bg-surface-1 rounded-2xl">
        <div className="text-center p-6">
          <div className="w-20 h-20 mx-auto mb-4 rounded-2xl border border-hairline flex items-center justify-center text-accent-blue bg-surface-2">
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="4" y="2" width="16" height="20" rx="2" />
              <path d="M9 22v-4h6v4" />
              <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
              <path d="M12 2v-1" />
            </svg>
          </div>
          <p className="text-sm font-semibold text-ink">Smart Building MEP Wireframe</p>
          <p className="text-xs text-ink-muted mt-1">
            BMS Telemetry & High-Rise Operations
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center">
      {/* WebGL Canvas Mount Container */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />
    </div>
  );
};
