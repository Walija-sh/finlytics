"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";

const AnimatedGlobe = ({ 
  className = "", 
  imageSrc = "/assets/globe.avif",
  logoHref = "/",
  logoSrc = "/assets/Logo.png",
  perspective = 580,
  maxTiltX = 12,  
  maxTiltY = 12,  
  transitionDuration = 0.5,
  transitionEase = "easeOut"
}) => {
  const globeRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!globeRef.current) return;
    
    // Get center of the screen instead of globe element
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const mouseX = (e.clientX - centerX) / (window.innerWidth / 2);
    const mouseY = (e.clientY - centerY) / (window.innerHeight / 2);

    const easedX = Math.pow(Math.abs(mouseX), 1.5) * (mouseX > 0 ? 1 : -1);
    const easedY = Math.pow(Math.abs(mouseY), 1.5) * (mouseY > 0 ? 1 : -1);

    const newRotateY = easedX * maxTiltY;
    const newRotateX = -easedY * maxTiltX;
    
    setRotateY(newRotateY);
    setRotateX(newRotateX);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  // Add event listener to window for mouse movement
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className={`flex items-center relative ${className}`}>
      <motion.div 
        ref={globeRef}
        className="w-full h-full aspect-square relative"
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        transition={{
          type: "tween",
          duration: transitionDuration,
          ease: transitionEase,
        }}
        style={{
          perspective: `${perspective}px`,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="w-full h-full relative"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <Image
            src={imageSrc}
            alt="Global presence globe"
            fill
            className="object-contain"
          />
        </motion.div>
      </motion.div>
      
      {logoHref && logoSrc && (
        <Link 
          href={logoHref} 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%]"
        >
          <Image
            src={logoSrc}
            alt="FinlyticsHub Logo"
            width={240}
            height={96}
            className="w-full h-auto object-contain"
          />
        </Link>
      )}
    </div>
  );
};

export default AnimatedGlobe;