import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const SkillBar = ({
  skill,
  percentage,
  color = "bg-yellow-500", // Tailwind class for color
  duration = 1000, // Smooth animation duration
  thickness = "h-3", // Tailwind class for height (default is thicker)
}) => {
  const [width, setWidth] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const animationRef = useRef();

  useEffect(() => {
    // Reset width when out of view and prevent animation if not in view
    if (!inView) {
      setWidth(0);
      return;
    }
    
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);
      
      // Animate the width smoothly
      setWidth(progress * percentage);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, [inView, percentage, duration]);

  // The percentage displayed during the animation
  const displayedPercentage = Math.min(percentage, Math.ceil(width));

  return (
    <div ref={ref} className="mb-6">
      {/* Skill Name and Percentage */}
      <div className="flex justify-between mb-1 text-white font-medium tracking-wide">
        <span className="text-lg">{skill}</span>
        <span className="text-lg text-yellow-500 font-bold">{displayedPercentage}%</span>
      </div>
      
      {/* Skill Bar Track */}
      <div
        className={`bg-gray-700 rounded-full ${thickness} w-full overflow-hidden shadow-inner shadow-gray-900/50`}
      >
        {/* Animated Skill Bar (Glow effect applied via inline style) */}
        <div
          className={`${color} ${thickness} rounded-full transition-all duration-100 ease-out`}
          style={{
            width: `${width}%`,
            // Subtle, moving glow effect
            boxShadow: `0 0 10px 1px rgba(255, 215, 0, 0.5)`, 
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;