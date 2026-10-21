"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export const ThreeHeroCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for mouse interaction
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Outer Faceted Architectural Prism (Icosahedron)
    const outerGeometry = new THREE.IcosahedronGeometry(2.2, 0);
    const outerMaterial = new THREE.MeshStandardMaterial({
      color: 0x141414,
      metalness: 0.9,
      roughness: 0.2,
      wireframe: false,
      transparent: true,
      opacity: 0.85,
    });
    const outerMesh = new THREE.Mesh(outerGeometry, outerMaterial);
    mainGroup.add(outerMesh);

    // Wireframe Cage for the Prism
    const wireframeGeometry = new THREE.WireframeGeometry(outerGeometry);
    const wireframeMaterial = new THREE.LineBasicMaterial({
      color: 0x0099ff,
      transparent: true,
      opacity: 0.45,
      linewidth: 1,
    });
    const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
    outerMesh.add(wireframe);

    // 2. Inner Glowing Core (Octahedron)
    const innerGeometry = new THREE.OctahedronGeometry(1.2, 0);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x6a4cf5,
      wireframe: true,
      transparent: true,
      opacity: 0.8,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    mainGroup.add(innerMesh);

    // 3. Orbiting Data Nodes / Particles
    const particleCount = 90;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.8 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      scales[i] = Math.random() * 2 + 1;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x0099ff,
      size: 0.06,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particleSystem);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLightBlue = new THREE.PointLight(0x0099ff, 3, 50);
    pointLightBlue.position.set(5, 5, 5);
    scene.add(pointLightBlue);

    const pointLightViolet = new THREE.PointLight(0xd44df0, 2.5, 50);
    pointLightViolet.position.set(-5, -5, 3);
    scene.add(pointLightViolet);

    // Mouse Tracking for Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      mouseX = (x / rect.width) * 2;
      mouseY = (y / rect.height) * 2;

      targetRotationY = mouseX * 0.6;
      targetRotationX = mouseY * 0.6;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth inertia rotation
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05;

      // Passive idle spinning
      outerMesh.rotation.y += 0.003;
      outerMesh.rotation.x += 0.0015;
      innerMesh.rotation.y -= 0.005;
      particleSystem.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      outerGeometry.dispose();
      outerMaterial.dispose();
      wireframeGeometry.dispose();
      wireframeMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] flex items-center justify-center">
      {/* Background Soft Glow Spotlights */}
      <div className="absolute w-72 h-72 rounded-full bg-spotlight-violet/20 blur-[100px] pointer-events-none" />
      <div className="absolute w-60 h-60 rounded-full bg-accent-blue/15 blur-[90px] translate-x-12 translate-y-12 pointer-events-none" />

      {/* WebGL Canvas Mount Container */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />
    </div>
  );
};
