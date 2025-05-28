import React, { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const cursorRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile(); // Use the hook to detect mobile

  const colors = [
    "#0078ff",
    "#094ce8",
    "#ff9100",
    "#ff2601",
    "#da0614",
    "#fe0094",
    "#ffcc01",
  ];

  useEffect(() => {
    if (isMobile) {
      // If on mobile, do not attach event listeners and ensure cursor is not visible
      setIsVisible(false);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    // Re-added mouseleave to ensure proper cleanup and behavior when cursor leaves the document area
    document.addEventListener("mouseleave", handleMouseLeave);
    
    // Set up interval for cycling colors
    const colorInterval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 20000); // Change color every 20 seconds

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave); // Ensure cleanup
      clearInterval(colorInterval);
    };
  }, [colors.length, isMobile]); // Add isMobile to dependency array

  if (isMobile) {
    return null; // Do not render the cursor follower on mobile
  }

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] rounded-full transition-opacity duration-300 ease-out"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isVisible ? 0.75 : 0,
        transform: "translate(-50%, -50%)",
        width: "9.6px", // Increased size by 20% (8px * 1.2 = 9.6px)
        height: "9.6px", // Increased size by 20% (8px * 1.2 = 9.6px)
        backgroundColor: colors[currentColorIndex],
        transition: "background-color 2s ease-in-out, opacity 0.3s ease-out",
      }}
    />
  );
};

export default CursorFollower;
