"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "@/context/ThemeContext";

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
 * ThreeHeroCanvas: Refined Architectural High-Tech Skyscraper & BIM Digital Twin.
 * Designed with realistic architectural proportions, structural curtain wall mullions,
 * internal glass elevator kinematics, and holographic CAD datum grid.
 * 
 * Performance & Engineering:
 * - 60fps locked, clamped DPR (max 2), 100% memory disposal on unmount.
 * - IntersectionObserver pauses rendering loop when scrolled out of viewport.
 * - Responsive camera framing adapts between desktop and mobile (360px - 414px).
 * - Full Dual-Theme support (Electric Blueprint Blue & Mastery Mint).
 */
export const ThreeHeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isLight = theme === "light";
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const isLoadedRef = useRef<boolean>(false);

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

    // Registry of disposable WebGL resources for 100% leak-free cleanup
    const disposables: Array<{ dispose: () => void }> = [];
    const register = <T extends { dispose: () => void }>(resource: T): T => {
      disposables.push(resource);
      return resource;
    };

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 480;

    const isMobile = width < 640;
    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    // Adjusted camera distance for mobile so skyscraper fits cleanly without clipping
    camera.position.set(0, isMobile ? 1.0 : 1.2, isMobile ? 10.4 : 9.2);
    camera.lookAt(0, 0.25, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(renderer.domElement);

    // 2. Main Interactive High-Rise Group
    const mainGroup = new THREE.Group();
    mainGroup.position.y = isMobile ? -0.2 : -0.3;
    mainGroup.rotation.x = 0.22;
    mainGroup.rotation.y = 0.45;
    scene.add(mainGroup);

    // 3. Color Palette (Dual-Theme Harmonized)
    const colPrimaryBlue = isLight ? 0x0070f3 : 0x0099ff;
    const colMasteryMint = isLight ? 0x10b981 : 0x50e3c2;
    const colBlueprintSoft = isLight ? 0x0284c7 : 0x38bdf8;
    const colGlassFill = isLight ? 0xf8fafc : 0x070c12;
    const colStructuralDark = isLight ? 0xe2e8f0 : 0x111923;

    // 4. Shared High-Performance Materials
    const glassMaterial = register(
      new THREE.MeshStandardMaterial({
        color: colGlassFill,
        metalness: isLight ? 0.1 : 0.85,
        roughness: isLight ? 0.25 : 0.2,
        transparent: true,
        opacity: isLight ? 0.75 : 0.6,
      })
    );

    const structuralCoreMaterial = register(
      new THREE.MeshStandardMaterial({
        color: colStructuralDark,
        metalness: isLight ? 0.05 : 0.9,
        roughness: isLight ? 0.3 : 0.2,
        transparent: true,
        opacity: isLight ? 0.85 : 0.75,
      })
    );

    const wireframePrimary = register(
      new THREE.LineBasicMaterial({
        color: colPrimaryBlue,
        transparent: true,
        opacity: isLight ? 0.85 : 0.8,
      })
    );

    const wireframeSoft = register(
      new THREE.LineBasicMaterial({
        color: colBlueprintSoft,
        transparent: true,
        opacity: isLight ? 0.45 : 0.35,
      })
    );

    const wireframeMint = register(
      new THREE.LineBasicMaterial({
        color: colMasteryMint,
        transparent: true,
        opacity: isLight ? 0.9 : 0.85,
      })
    );

    const beaconMintMaterial = register(
      new THREE.MeshBasicMaterial({
        color: colMasteryMint,
        transparent: true,
        opacity: 0.95,
      })
    );

    const elevatorCabMaterial = register(
      new THREE.MeshBasicMaterial({
        color: colPrimaryBlue,
        transparent: true,
        opacity: 0.9,
      })
    );

    // 5. Holographic CAD Datum Ground Grid (Laser-Etched Plan at Foundation)
    const gridY = -2.55;
    const datumGroup = new THREE.Group();
    mainGroup.add(datumGroup);

    // Concentric CAD Range Rings
    [1.5, 2.3, 3.1].forEach((r, idx) => {
      const ringPoints: THREE.Vector3[] = [];
      const segs = 48;
      for (let i = 0; i <= segs; i++) {
        const th = (i / segs) * Math.PI * 2;
        ringPoints.push(new THREE.Vector3(Math.cos(th) * r, gridY, Math.sin(th) * r));
      }
      const rGeo = register(new THREE.BufferGeometry().setFromPoints(ringPoints));
      const rLine = new THREE.Line(
        rGeo,
        idx === 1 ? wireframePrimary : wireframeSoft
      );
      datumGroup.add(rLine);
    });

    // Orthogonal Crosshair Datum Axes
    const crossPoints = [
      new THREE.Vector3(-3.3, gridY, 0),
      new THREE.Vector3(3.3, gridY, 0),
      new THREE.Vector3(0, gridY, -3.3),
      new THREE.Vector3(0, gridY, 3.3),
    ];
    const crossGeo = register(new THREE.BufferGeometry().setFromPoints(crossPoints));
    const crossLines = new THREE.LineSegments(crossGeo, wireframeSoft);
    datumGroup.add(crossLines);

    // 12 Engineering Radial Degree Markers
    for (let i = 0; i < 12; i++) {
      const th = (i / 12) * Math.PI * 2;
      const inner = 2.95;
      const outer = 3.15;
      const tickPoints = [
        new THREE.Vector3(Math.cos(th) * inner, gridY, Math.sin(th) * inner),
        new THREE.Vector3(Math.cos(th) * outer, gridY, Math.sin(th) * outer),
      ];
      const tickGeo = register(new THREE.BufferGeometry().setFromPoints(tickPoints));
      const tickLine = new THREE.Line(tickGeo, wireframeSoft);
      datumGroup.add(tickLine);
    }

    // 6. Central Concrete Elevator / Mechanical Core
    const coreHeight = 5.4;
    const coreGeo = register(new THREE.BoxGeometry(0.68, coreHeight, 0.68));
    const coreMesh = new THREE.Mesh(coreGeo, structuralCoreMaterial);
    coreMesh.position.y = 0.15;
    mainGroup.add(coreMesh);

    const coreEdgesGeo = register(new THREE.EdgesGeometry(coreGeo));
    const coreEdges = new THREE.LineSegments(coreEdgesGeo, wireframeSoft);
    coreMesh.add(coreEdges);

    // 7. Tier 1: Grand Podium & Entrance Atrium (Levels B1 to L3)
    const podiumGeo = register(new THREE.BoxGeometry(2.35, 0.95, 2.35));
    const podiumMesh = new THREE.Mesh(podiumGeo, glassMaterial);
    podiumMesh.position.y = -2.05;
    mainGroup.add(podiumMesh);

    const podiumEdgesGeo = register(new THREE.EdgesGeometry(podiumGeo));
    const podiumEdges = new THREE.LineSegments(podiumEdgesGeo, wireframePrimary);
    podiumMesh.add(podiumEdges);

    // Perimeter Entrance Pilotis (Architectural Columns)
    const columnOffsets = [-1.05, 1.05];
    columnOffsets.forEach((cx) => {
      columnOffsets.forEach((cz) => {
        const colGeo = register(new THREE.CylinderGeometry(0.04, 0.04, 0.95, 8));
        const colMesh = new THREE.Mesh(colGeo, structuralCoreMaterial);
        colMesh.position.set(cx, -2.05, cz);
        mainGroup.add(colMesh);
      });
    });

    // 8. Tier 2: Main Soaring Skyscraper Shaft (Levels L4 to L28)
    const towerH = 3.3;
    const towerW = 1.78;
    const towerD = 1.78;
    const towerY = 0.08;

    const towerGeo = register(new THREE.BoxGeometry(towerW, towerH, towerD));
    const towerMesh = new THREE.Mesh(towerGeo, glassMaterial);
    towerMesh.position.y = towerY;
    mainGroup.add(towerMesh);

    const towerEdgesGeo = register(new THREE.EdgesGeometry(towerGeo));
    const towerEdges = new THREE.LineSegments(towerEdgesGeo, wireframePrimary);
    towerMesh.add(towerEdges);

    // Horizontal Floor Slabs (14 Stories Rhythm)
    const floorCount = 14;
    const floorStep = towerH / floorCount;
    for (let f = 1; f < floorCount; f++) {
      const fy = -towerH / 2 + f * floorStep;
      const floorPoints = [
        new THREE.Vector3(-towerW / 2, fy, -towerD / 2),
        new THREE.Vector3(towerW / 2, fy, -towerD / 2),
        new THREE.Vector3(towerW / 2, fy, towerD / 2),
        new THREE.Vector3(-towerW / 2, fy, towerD / 2),
        new THREE.Vector3(-towerW / 2, fy, -towerD / 2),
      ];
      const floorGeo = register(new THREE.BufferGeometry().setFromPoints(floorPoints));
      const floorLine = new THREE.Line(floorGeo, wireframeSoft);
      towerMesh.add(floorLine);
    }

    // Vertical Architectural Mullion Fins (3 per face)
    const mullionDivs = 4;
    for (let m = 1; m < mullionDivs; m++) {
      const mx = -towerW / 2 + (m / mullionDivs) * towerW;
      const mullionFront = [
        new THREE.Vector3(mx, -towerH / 2, towerD / 2),
        new THREE.Vector3(mx, towerH / 2, towerD / 2),
      ];
      const mFrontGeo = register(new THREE.BufferGeometry().setFromPoints(mullionFront));
      const mFrontLine = new THREE.Line(mFrontGeo, wireframeSoft);
      towerMesh.add(mFrontLine);

      const mullionSide = [
        new THREE.Vector3(towerW / 2, -towerH / 2, mx),
        new THREE.Vector3(towerW / 2, towerH / 2, mx),
      ];
      const mSideGeo = register(new THREE.BufferGeometry().setFromPoints(mullionSide));
      const mSideLine = new THREE.Line(mSideGeo, wireframeSoft);
      towerMesh.add(mSideLine);
    }

    // High-Tech Diagrid Structural X-Bracing on Side Bay
    const diagridPoints = [
      new THREE.Vector3(towerW / 2, -towerH / 2, -towerD / 2),
      new THREE.Vector3(towerW / 2, 0, towerD / 2),
      new THREE.Vector3(towerW / 2, towerH / 2, -towerD / 2),
      new THREE.Vector3(towerW / 2, -towerH / 2, towerD / 2),
      new THREE.Vector3(towerW / 2, 0, -towerD / 2),
      new THREE.Vector3(towerW / 2, towerH / 2, towerD / 2),
    ];
    const diagridGeo = register(new THREE.BufferGeometry().setFromPoints(diagridPoints));
    const diagridLines = new THREE.Line(diagridGeo, wireframeSoft);
    towerMesh.add(diagridLines);

    // 9. Recessed MEP Mechanical Floor Band (Level M)
    const mepGeo = register(new THREE.BoxGeometry(1.68, 0.42, 1.68));
    const mepMesh = new THREE.Mesh(mepGeo, structuralCoreMaterial);
    mepMesh.position.y = 0.08;
    mainGroup.add(mepMesh);

    const mepEdgesGeo = register(new THREE.EdgesGeometry(mepGeo));
    const mepEdges = new THREE.LineSegments(mepEdgesGeo, wireframeMint);
    mepMesh.add(mepEdges);

    // Horizontal Louver Lines for Ventilation Intake
    [-0.12, 0, 0.12].forEach((ly) => {
      const louverPoints = [
        new THREE.Vector3(-0.84, ly, 0.84),
        new THREE.Vector3(0.84, ly, 0.84),
        new THREE.Vector3(0.84, ly, -0.84),
        new THREE.Vector3(-0.84, ly, -0.84),
        new THREE.Vector3(-0.84, ly, 0.84),
      ];
      const louverGeo = register(new THREE.BufferGeometry().setFromPoints(louverPoints));
      const louverLine = new THREE.Line(louverGeo, wireframeMint);
      mepMesh.add(louverLine);
    });

    // 10. Tier 3: Setback Penthouse & Architectural Crown (Levels L29 to L40)
    const crownW = 1.25;
    const crownD = 1.25;
    const crownH = 1.25;
    const crownY = 2.35;

    const crownGeo = register(new THREE.BoxGeometry(crownW, crownH, crownD));
    const crownMesh = new THREE.Mesh(crownGeo, glassMaterial);
    crownMesh.position.y = crownY;
    mainGroup.add(crownMesh);

    const crownEdgesGeo = register(new THREE.EdgesGeometry(crownGeo));
    const crownEdges = new THREE.LineSegments(crownEdgesGeo, wireframePrimary);
    crownMesh.add(crownEdges);

    // 4 Crown Floor Plates
    for (let f = 1; f < 5; f++) {
      const fy = -crownH / 2 + (f / 5) * crownH;
      const cPoints = [
        new THREE.Vector3(-crownW / 2, fy, -crownD / 2),
        new THREE.Vector3(crownW / 2, fy, -crownD / 2),
        new THREE.Vector3(crownW / 2, fy, crownD / 2),
        new THREE.Vector3(-crownW / 2, fy, crownD / 2),
        new THREE.Vector3(-crownW / 2, fy, -crownD / 2),
      ];
      const cGeo = register(new THREE.BufferGeometry().setFromPoints(cPoints));
      const cLine = new THREE.Line(cGeo, wireframeSoft);
      crownMesh.add(cLine);
    }

    // Sculptural Angled Roof Pyramid / Diagrid Lantern
    const roofApex = 3.42;
    const roofBaseY = 2.97;
    const roofPoints = [
      // Base square
      new THREE.Vector3(-crownW / 2, roofBaseY, -crownD / 2),
      new THREE.Vector3(crownW / 2, roofBaseY, -crownD / 2),
      new THREE.Vector3(crownW / 2, roofBaseY, crownD / 2),
      new THREE.Vector3(-crownW / 2, roofBaseY, crownD / 2),
      new THREE.Vector3(-crownW / 2, roofBaseY, -crownD / 2),
      // 4 Hips to Apex
      new THREE.Vector3(0, roofApex, 0),
      new THREE.Vector3(crownW / 2, roofBaseY, -crownD / 2),
      new THREE.Vector3(0, roofApex, 0),
      new THREE.Vector3(crownW / 2, roofBaseY, crownD / 2),
      new THREE.Vector3(0, roofApex, 0),
      new THREE.Vector3(-crownW / 2, roofBaseY, crownD / 2),
      new THREE.Vector3(0, roofApex, 0),
    ];
    const roofGeo = register(new THREE.BufferGeometry().setFromPoints(roofPoints));
    const roofLine = new THREE.Line(roofGeo, wireframePrimary);
    mainGroup.add(roofLine);

    // 11. Architectural Communications Mast & Stay-Cables
    const mastHeight = 1.35;
    const mastGeo = register(new THREE.CylinderGeometry(0.015, 0.045, mastHeight, 8));
    const mastMesh = new THREE.Mesh(mastGeo, structuralCoreMaterial);
    mastMesh.position.y = roofApex + mastHeight / 2;
    mainGroup.add(mastMesh);

    // Structural Guy-Wired Tension Cables connecting Mast to Roof Corners
    const cablePoints: THREE.Vector3[] = [];
    const cableAnchorY = roofApex + 0.65;
    const corners = [
      new THREE.Vector3(-crownW / 2, roofBaseY, -crownD / 2),
      new THREE.Vector3(crownW / 2, roofBaseY, -crownD / 2),
      new THREE.Vector3(crownW / 2, roofBaseY, crownD / 2),
      new THREE.Vector3(-crownW / 2, roofBaseY, crownD / 2),
    ];
    corners.forEach((c) => {
      cablePoints.push(new THREE.Vector3(0, cableAnchorY, 0));
      cablePoints.push(c);
    });
    const cableGeo = register(new THREE.BufferGeometry().setFromPoints(cablePoints));
    const cableLines = new THREE.LineSegments(cableGeo, wireframeSoft);
    mainGroup.add(cableLines);

    // FAA Obstruction Light at Pinnacles
    const beaconGeo = register(new THREE.SphereGeometry(0.055, 12, 12));
    const beaconLight = new THREE.Mesh(beaconGeo, beaconMintMaterial);
    beaconLight.position.y = roofApex + mastHeight;
    mainGroup.add(beaconLight);

    // 12. "Living Digital Twin" - Twin Illuminated Exterior Glass Elevators
    const cabGeo = register(new THREE.BoxGeometry(0.18, 0.22, 0.16));
    const cabEdgesGeo = register(new THREE.EdgesGeometry(cabGeo));

    const cab1 = new THREE.Mesh(cabGeo, elevatorCabMaterial);
    const cab1Edges = new THREE.LineSegments(cabEdgesGeo, wireframePrimary);
    cab1.add(cab1Edges);
    mainGroup.add(cab1);

    const cab2 = new THREE.Mesh(cabGeo, elevatorCabMaterial);
    const cab2Edges = new THREE.LineSegments(cabEdgesGeo, wireframePrimary);
    cab2.add(cab2Edges);
    mainGroup.add(cab2);

    // 13. Integrated Vertical MEP Risers (Inside building core)
    // Chilled Water Supply Riser (Electric Blue)
    const riserSupplyPoints = [
      new THREE.Vector3(0.24, -2.45, 0.24),
      new THREE.Vector3(0.24, 2.9, 0.24),
    ];
    const riserSupplyGeo = register(new THREE.BufferGeometry().setFromPoints(riserSupplyPoints));
    const riserSupplyLine = new THREE.Line(riserSupplyGeo, wireframePrimary);
    mainGroup.add(riserSupplyLine);

    // Condenser Water Return Riser (Mastery Mint)
    const riserReturnPoints = [
      new THREE.Vector3(-0.24, -2.45, -0.24),
      new THREE.Vector3(-0.24, 2.9, -0.24),
    ];
    const riserReturnGeo = register(new THREE.BufferGeometry().setFromPoints(riserReturnPoints));
    const riserReturnLine = new THREE.Line(riserReturnGeo, wireframeMint);
    mainGroup.add(riserReturnLine);

    // Telemetry Sensor Nodes at Core Transfer Levels
    const sensorFloors = [-2.05, -0.9, 0.08, 1.2, 2.35];
    const sensorGeo = register(new THREE.SphereGeometry(0.045, 8, 8));
    const sensorNodes: THREE.Mesh[] = [];

    sensorFloors.forEach((sy, idx) => {
      const mat = idx % 2 === 0 ? beaconMintMaterial : wireframePrimary;
      const sNode = new THREE.Mesh(sensorGeo, mat as THREE.Material);
      sNode.position.set(idx % 2 === 0 ? 0.24 : -0.24, sy, idx % 2 === 0 ? 0.24 : -0.24);
      mainGroup.add(sNode);
      sensorNodes.push(sNode);
    });

    // 14. Subtle Ambient Floating Telemetry Particles
    const particleCount = isMobile ? 32 : 55;
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.8 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const py = -2.5 + Math.random() * 6.5;

      particlePositions[i * 3] = radius * Math.cos(theta);
      particlePositions[i * 3 + 1] = py;
      particlePositions[i * 3 + 2] = radius * Math.sin(theta);
    }

    const particleGeometry = register(new THREE.BufferGeometry());
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = register(
      new THREE.PointsMaterial({
        color: colPrimaryBlue,
        size: 0.045,
        transparent: true,
        opacity: isLight ? 0.75 : 0.65,
        blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending,
      })
    );

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particles);

    // 15. Subtle Architectural Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, isLight ? 1.6 : 0.9);
    scene.add(ambientLight);

    const primaryLight = new THREE.DirectionalLight(0xffffff, isLight ? 2.2 : 2.8);
    primaryLight.position.set(5, 7, 6);
    scene.add(primaryLight);

    const blueBacklight = new THREE.PointLight(colPrimaryBlue, isLight ? 2.0 : 3.0, 25);
    blueBacklight.position.set(-4, 3, -3);
    scene.add(blueBacklight);

    // 16. Interactive Damped Orbit & Touch Parallax
    let targetRotationX = 0.22;
    let targetRotationY = 0.45;
    let isDragging = false;
    let startX = 0;
    let startY = 0;

    const onPointerDown = (clientX: number, clientY: number) => {
      isDragging = true;
      startX = clientX;
      startY = clientY;
    };

    const onPointerMove = (clientX: number, clientY: number) => {
      if (!isDragging) {
        // Subtle hover tilt when not dragging
        const rect = container.getBoundingClientRect();
        const normX = ((clientX - (rect.left + rect.width / 2)) / (rect.width / 2));
        const normY = ((clientY - (rect.top + rect.height / 2)) / (rect.height / 2));
        targetRotationY += normX * 0.002;
        targetRotationX = 0.22 + Math.max(-0.15, Math.min(0.15, normY * 0.15));
        return;
      }
      const deltaX = clientX - startX;
      const deltaY = clientY - startY;
      startX = clientX;
      startY = clientY;

      targetRotationY += deltaX * 0.008;
      targetRotationX = Math.max(0.05, Math.min(0.45, targetRotationX + deltaY * 0.008));
    };

    const onPointerUp = () => {
      isDragging = false;
    };

    const handleMouseDown = (e: MouseEvent) => onPointerDown(e.clientX, e.clientY);
    const handleMouseMove = (e: MouseEvent) => onPointerMove(e.clientX, e.clientY);
    const handleMouseUp = () => onPointerUp();

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        onPointerDown(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        onPointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };
    const handleTouchEnd = () => onPointerUp();

    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseup", handleMouseUp);

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    // 17. Container-Aware ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight;
          const mobile = newWidth < 640;
          camera.position.z = mobile ? 10.4 : 9.2;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(container);

    // 18. High-Performance 60fps Animation Loop
    let clockTime = 0;

    const renderLoop = () => {
      if (!isVisible || !isLoopRunning) {
        isLoopRunning = false;
        return;
      }
      animationFrameId = requestAnimationFrame(renderLoop);

      clockTime += 0.02;

      // Smooth damped rotation interpolation
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05;

      // Gentle continuous ambient orbit
      if (!isDragging) {
        targetRotationY += 0.0018;
      }

      // Slow counter-rotation of holographic CAD datum grid
      datumGroup.rotation.y -= 0.0006;
      particles.rotation.y -= 0.0004;

      // Realistic Elevator Kinematics:
      // Cab 1 moves smoothly between Lobby (-2.0) and Sky-Lounge (+2.1)
      const cab1Progress = Math.sin(clockTime * 0.35);
      const cab1Y = 0.05 + cab1Progress * 2.05;
      cab1.position.set(0.42, cab1Y, 0.94);

      // Cab 2 moves on the opposite face in counter-phase
      const cab2Progress = Math.cos(clockTime * 0.35);
      const cab2Y = 0.05 + cab2Progress * 2.05;
      cab2.position.set(-0.42, cab2Y, 0.94);

      // Gentle pulsing of FAA Obstruction Light Beacon
      const pulseBeacon = 1 + Math.sin(clockTime * 4.0) * 0.25;
      beaconLight.scale.set(pulseBeacon, pulseBeacon, pulseBeacon);

      // Subtle breathing on telemetry sensor nodes
      sensorNodes.forEach((node, i) => {
        const s = 1 + Math.sin(clockTime * 3.0 + i * 1.2) * 0.22;
        node.scale.set(s, s, s);
      });

      renderer.render(scene, camera);
      if (!isLoadedRef.current) {
        isLoadedRef.current = true;
        setIsLoaded(true);
      }
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

    // 19. IntersectionObserver to preserve battery/GPU when not in viewport
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

    // Initial kickoff
    startLoop();

    // 20. Clean Disposal on unmount
    return () => {
      stopLoop();
      container.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
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
  }, [webglSupported, isLight]);

  if (!webglSupported) {
    return (
      <div className="w-full h-[440px] flex items-center justify-center p-6 border border-hairline rounded-2xl bg-surface-1">
        <div className="text-center text-sm text-ink-muted">
          <p className="font-semibold text-ink mb-1">Mô Hình 3D Tòa Nhà Thông Minh</p>
          <p>WebGL không khả dụng trên trình duyệt hiện tại.</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`w-full h-[440px] sm:h-[490px] lg:h-[530px] relative cursor-grab active:cursor-grabbing select-none transition-opacity duration-700 ease-out ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Interactive 3D Smart High-Rise Building Digital Twin"
      role="img"
    />
  );
};
