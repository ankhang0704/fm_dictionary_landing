"use client";

import React, { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

/**
 * AnimatedCounter: Smoothly animates numbers from 0 to target when scrolled into view.
 * Directly updates DOM textContent to avoid unnecessary React re-renders during 60fps animation.
 */
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  className = "",
  duration = 1200,
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef<boolean>(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Parse the numeric part and prefix/suffix
    const match = value.match(/^([^0-9.]*)([0-9.,]+)(.*)$/);
    if (!match) {
      el.textContent = value;
      return;
    }

    const prefix = match[1] || "";
    const rawNumberStr = match[2].replace(/,/g, "");
    const suffix = match[3] || "";
    const isDecimal = rawNumberStr.includes(".");
    const targetNum = parseFloat(rawNumberStr);

    if (isNaN(targetNum)) {
      el.textContent = value;
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();

          const updateCounter = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quad
            const easeProgress = 1 - (1 - progress) * (1 - progress);
            const currentNum = targetNum * easeProgress;

            let formatted: string;
            if (isDecimal) {
              formatted = currentNum.toFixed(1);
            } else if (targetNum >= 1000) {
              formatted = Math.floor(currentNum).toLocaleString("en-US");
            } else {
              formatted = Math.floor(currentNum).toString();
            }

            if (containerRef.current) {
              containerRef.current.textContent = `${prefix}${formatted}${suffix}`;
            }

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              if (containerRef.current) {
                containerRef.current.textContent = value;
              }
            }
          };

          requestAnimationFrame(updateCounter);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={containerRef} className={className}>
      {value}
    </span>
  );
};
