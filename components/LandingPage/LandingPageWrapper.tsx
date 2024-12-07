"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import LandingPageSecOne from "./LandingPageSecOne";
import LandingPageSecTwo from "./LandingPageSecTwo";

const LandingPageWrapper = () => {
  const [currentSection, setCurrentSection] = useState(0); // 0: SecOne, 1: SecTwo
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Scroll event listener to switch between sections
  useEffect(() => {
    const handleScroll = (e: { deltaY: number }) => {
      if (isTransitioning) return; // Prevent multiple transitions

      const scrollDirection = e.deltaY > 0 ? 1 : -1; // Scroll down = 1, scroll up = -1
      setIsTransitioning(true);

      // Switch between sections
      setCurrentSection((prev) => {
        const newSection = prev + scrollDirection;
        return Math.max(0, Math.min(newSection, 1)); // Clamp to 0 or 1
      });
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isTransitioning]);

  // Reset transition state after animation
  useEffect(() => {
    if (isTransitioning) {
      setTimeout(() => {
        setIsTransitioning(false); // Reset after 500ms (transition duration)
      }, 500); // Match with your transition duration
    }
  }, [isTransitioning]);

  return (
    <div>
      <div className="hidden md:flex relative h-screen overflow-hidden">
        {currentSection === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and translateY 50
            animate={{ opacity: 1, y: 0 }} // Fade in and slide up
            exit={{ opacity: 0, y: -50 }} // Fade out and slide up
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <LandingPageSecOne />
          </motion.div>
        )}

        {currentSection === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and translateY 50
            animate={{ opacity: 1, y: 0 }} // Fade in and slide up
            exit={{ opacity: 0, y: -50 }} // Fade out and slide up
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <LandingPageSecTwo />
          </motion.div>
        )}
      </div>

      <div className="md:hidden flex">
        <LandingPageSecOne />
      </div>

      <div className="sm:hidden flex">
        <LandingPageSecTwo />
      </div>
    </div>
  );
};

export default LandingPageWrapper;
