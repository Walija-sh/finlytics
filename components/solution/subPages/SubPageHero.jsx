"use client";
import Image from "next/image";
import React from 'react';
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const SubPageHero = ({
  title = "",
  subtitle = "",
  description="",
  imageUrl = "/assets/solutions/dataPlatformAndGovernanceHero.jpg",
  className = ""
}) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
 

  return (
    <section 
      ref={sectionRef}
      className={`relative min-h-[90vh] 2xl:min-h-screen bg-primary overflow-hidden flex items-end p-[10%] md:py-[7.8125%] lg:pt-[10%] lg:pb-[5%] ${className}`}
    >
      
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="relative w-[120%] left-[-10%] h-full"
          style={{ 
            y: bgY,
           
          }}
          initial={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </div>
      
      {/* Overlay */}
      <div 
        className="bg-primary w-full h-full absolute inset-0 z-5 opacity-60"
      />
      
      {/* Content Card */}
      <div 
        className="border border-white/50 mt-[60px] rounded-[13px] p-10 lg:p-[60px] text-white relative z-10 backdrop-blur-[20px] lg:w-[55.991363525390625%] 2xl:w-[42.32014294912234%]"

      >
        <h1 className="mb-[9.984375px] hero-h font-bold leading-[1] capitalize">
          {title}
        </h1>
        <p className="text-secondary mb-5 lg:mb-[19.9921875px]
          text-[max(0.5px,0.0461538*(100vw-0px))] md:text-[max(0.5px,0.0234375*(100vw-0px))] lg:text-[max(0.5px,0.015625*(100vw-17px))] 2xl:text-[max(0.5px,0.0130073*(100vw-17px))]
        ">
          {subtitle}
        </p>
        <p className="text-[16px] lg:text-[18px] 2xl:text-[20px]">
          {description}
        </p>
      </div>
    </section>
  );
};

export default SubPageHero;