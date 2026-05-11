"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Hero({ 
  title = "About Finlytics Hub",
  subtitle = "Where domain expertise meets deep technical knowledge",
  bgImage = "/assets/about/aboutHeroBg.jpg",
  showSubtitle = true,
  className = "",
  overlayOpacity = 0.6
}) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const bgX = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section 
      ref={sectionRef}
      className={`relative  min-h-[392px] md:min-h-[491px] lg:min-h-[316px] xl:min-h-[446px] 2xl:min-h-[40vh] bg-primary overflow-hidden flex items-end p-[10%] md:py-[5%] ${className}`}
    >
    <div className="absolute inset-0 z-1 overflow-hidden">
        <motion.div
          className="relative w-[120%] left-[-10%] h-full"
          style={{ x: bgX }}
          initial={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={bgImage}
            alt="Hero background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
           
          />
        </motion.div>
      </div>
      
      {/* Overlay */}
      <div 
        className="bg-primary w-full h-full absolute inset-0 z-5"
        style={{ opacity: overlayOpacity }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-white w-full mr-[max(0.5px,0.1142041*(100vw-17px)))]">
        <h1 className="hero-h font-bold uppercase leading-[1] 2xl:mb-[26px]">
          {title}
        </h1>
        {showSubtitle && (
          <p className="text-white text-[max(0.5px,0.048*(100vw-17px))] md:text-[max(0.5px,0.0265604*(100vw-17px))] lg:text-[max(0.5px,0.015625*(100vw-17px))] 2xl:text-[max(0.5px,0.0130073*(100vw-17px))]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}