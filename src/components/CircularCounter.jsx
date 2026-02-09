import React, { useEffect, useState, useRef } from "react";
// 1. Import the useInView hook
import { useInView } from "react-intersection-observer";
import Designation from "./Designation";
// Assuming Designation is a component that accepts a 'designation' prop (string)
// For this to work, make sure the path is correct:
// import Designation from "./Designation"; 

const CircularCounter = ({
  target = 80,
  duration = 2000,
  size = 170,
  stroke = 30,
  color = "",
  triggerOnce = true,
  threshold = 0.5,
  designation, // The text for the designation
}) => {
  const [displayedCount, setDisplayedCount] = useState(0);
  // State to drive the visual circle progress
  const [visualProgressValue, setVisualProgressValue] = useState(0); 
  const animationRef = useRef();

  // Intersection Observer hook
  const { ref: inViewRef, inView } = useInView({
    triggerOnce,
    threshold,
  });

  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  // Progress calculation for SVG
  const progressOffset = ((100 - visualProgressValue) / 100) * circumference;

  useEffect(() => {
    // Stop/Reset logic when out of view (if not triggerOnce)
    if (!inView) {
      if (!triggerOnce) {
        setVisualProgressValue(0);
        setDisplayedCount(0);
      }
      return;
    }

    // --- Animation Logic (Starts when inView is true) ---
    const endValue = Math.min(Math.max(0, parseInt(target)), 100);
    const totalDuration = parseInt(duration);
    const start = 0;
    const startTime = performance.now();

    // 1. Start CSS Transition (Visual Progress)
    const transitionTimeout = setTimeout(() => {
      setVisualProgressValue(endValue);
    }, 50);

    // 2. Animate the Displayed Number using requestAnimationFrame
    const animateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / totalDuration);
      const currentCount = Math.floor(start + (endValue - start) * progress);

      setDisplayedCount(currentCount);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animateCount);
      } else {
        setDisplayedCount(endValue);
      }
    };

    animationRef.current = requestAnimationFrame(animateCount);

    // Cleanup function
    return () => {
      clearTimeout(transitionTimeout);
      cancelAnimationFrame(animationRef.current);
    };
  }, [inView, target, duration, triggerOnce]);

  // We are wrapping the circle and the designation in a new, unified container.
  return (
<div
  ref={inViewRef}
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",          // responsive width
    maxWidth: "200px",     // max size limit
    minWidth: "120px",     // min size limit
    margin: "0 auto",      // center in parent
  }}
>
      {/* --- 1. Circular Counter SVG and Percentage --- */}
      <div
        style={{
          width: size,
          height: size,
          position: "relative",
          marginBottom: '1rem', // Add space between the circle and the Designation
        }}
      >
        <svg width={size} height={size}>
          {/* Background Circle */}
          <circle
            stroke="#e5e7eb"
            fill="transparent"
            strokeWidth={stroke}
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          {/* Progress Circle */}
          <circle
            stroke={color}
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={progressOffset}
            r={radius}
            cx={size / 2}
            cy={size / 2}
            style={{
              transition: `stroke-dashoffset ${duration}ms linear`,
              transform: "rotate(-90deg)",
              transformOrigin: "center center",
            }}
          />
        </svg>
        {/* Percentage Display (Centered) */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "2rem",
            fontWeight: "900",
            color: "white",
          }}
        >
          {displayedCount}%
        </div>
      </div>

      {/* --- 2. Designation Component (Below the Circle) --- */}
      {/* Assuming 'Designation' is a component that centers its text */}
      <Designation designation={designation} />
    </div>
  );
};

export default CircularCounter;