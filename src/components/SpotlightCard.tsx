"use client";

import React, { useRef, useCallback } from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

/**
 * SpotlightCard component (React Bits inspired).
 * Tracks cursor position and creates an interactive radial illumination highlight.
 * Optimized with direct DOM manipulation to prevent re-rendering child component trees on every mousemove.
 */
export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(0, 153, 255, 0.12)",
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || !spotlightRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spotlightRef.current.style.background = `radial-gradient(550px circle at ${x}px ${y}px, ${spotlightColor}, transparent 70%)`; /* taste-skill-ignore */
    },
    [spotlightColor]
  );

  const handleMouseEnter = useCallback(() => {
    if (spotlightRef.current) {
      spotlightRef.current.style.opacity = "1";
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (spotlightRef.current) {
      spotlightRef.current.style.opacity = "0";
    }
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Interactive Radial Spotlight Layer: z-10 overlays background fills; pointer-events-none ensures unblocked clicks */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute -inset-px z-10 opacity-0 transition-opacity duration-300"
        aria-hidden="true"
      />
      {children}
    </div>
  );
};
