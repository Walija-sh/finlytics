"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";


export default function Gap({ 
  className = "" 
}) {
  const sectionRef = useRef(null);
  const bannerRef = useRef(null);
  
  const { scrollYProgress: bannerScrollProgress } = useScroll({
    target: bannerRef,
    offset: ["start 80%", "start 20%"],
  });
  
  const bannerOpacity = useTransform(bannerScrollProgress, [0, 0.7], [0, 1]);
  const globeX1 = useTransform(bannerScrollProgress, [0, 1], ['-150%', '0%']);
  const globeX2 = useTransform(bannerScrollProgress, [0, 1], ['150%', '0%']);

  return (
    <section ref={sectionRef} className={`relative overflow-clip  w-full bg-primary text-white p-[10%] pb-[5%] ${className}`}>
      <div className="">
        {/* Heading */}
        <h2 className=" font-bold heading2 mb-1 lg:mb-5.5 leading-[1]">
          The gap we fill
        </h2>

        {/* Subtitle */}
        <p className=" p2 mb-5 lg:mb-11 2xl:mb-[80px]">
          In today&apos;s data-driven landscape, financial enterprises often find themselves at a crossroads:
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 grid-rows-[1fr_1fr_1fr]  gap-3 md:grid-rows-[1fr_1fr_1fr_1fr_1fr] md:grid-cols-2  md:gap-10">
            <div 
              
              className={` rounded-[6px] 2xl:rounded-[17px] bg-primary p-6 md:p-8 lg:p-[60px] lg:pb-[30px] 2xl:p-[106px] 2xl:pb-[53px] text-white border border-white  transition-all duration-300  md:row-start-1 md:row-span-1  md:col-span-1 sticky top-[160px] `}
            >
              <div className="w-[13.469817%] md:w-[8.946356805871046%] lg:w-[7.4667786683466915%] h-auto mb-2 md:mb-[22px] 2xl:mb-[39px]">
                <Image src='/assets/about/domainFocusedAdvisors.svg' alt='Domain-focused advisors' width={60} height={60} className="w-full h-auto" />
              </div>
              <p className=" p2 text-secondary font-semibold md:hidden ">
               Domain-focused advisors
              </p>
              <p className=" p2v2 ">
                 <span className="font-bold text-secondary hidden md:inline">Domain-focused advisors </span> understand
        your business deeply, but often struggle to translate strategy into scalable, production-ready
        data and analytics solutions, governance frameworks, and technology implementations.
              </p>
            </div>
            <div 
            
              className={` rounded-[6px] 2xl:rounded-[17px] p-6 md:p-8 lg:p-[60px] lg:pb-[30px] 2xl:p-[106px] 2xl:pb-[53px] bg-primary text-white border border-white  transition-all duration-300  md:row-start-3 md:row-span-1 md:col-start-2 md:col-span-1 sticky top-[160px] `}
            >
              <div className="w-[13.469817%] md:w-[8.946356805871046%] lg:w-[7.4667786683466915%] h-auto mb-1 md:mb-[22px] 2xl:mb-[39px]">
                <Image src='/assets/about/technologyCentric.svg' alt='Technology-centric consultancies' width={60} height={60} className="w-full h-auto" />
              </div>
              <p className=" p2 text-secondary font-semibold md:hidden">
              Technology-centric consultancies
              </p>
              <p className=" p2v2 ">
               <span className="font-bold text-secondary hidden md:inline">Technology-centric consultancies</span> can build
        sophisticated platforms and cutting-edge AI/ML models, but they often lack a deep understanding
        of your specific regulatory constraints and commercial realities.
              </p>
            </div>
          
        {/* Neither/Both Banner */}
        <div
          ref={bannerRef}
          
          className="relative rounded-[6px] 2xl:rounded-[17px]   py-16 px-8 2xl:p-[53px] flex flex-col items-center justify-center text-center min-h-[200px] gap-bg md:row-start-5 md:col-span-2 sticky top-[160px]"
        >
          {/* animated globes */}
          <motion.div className="w-[41.63872251726501%] lg:w-[22.504074265988276%] xl:w-[16.681442224520193%] aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " style={{ x: globeX1 }}>
            <Image src='/assets/about/globe.avif' alt='Globes' width={100} height={100} className="w-full h-auto" />
          </motion.div>
          <motion.div className="w-[41.63872251726501%] lg:w-[22.504074265988276%] xl:w-[16.681442224520193%] aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " style={{ x: globeX2 }}>
            <Image src='/assets/about/globe.avif' alt='Globes' width={100} height={100} className="w-full h-auto" />
          </motion.div>
          
          
          {/* Content */}
          <motion.p style={{opacity:bannerOpacity}} className="relative z-10 text-white hero-h font-bold tracking-wider uppercase">
            WE ARE NEITHER. WE ARE{" "}
            <span className="text-secondary">BOTH.</span>
          </motion.p>
        </div>
        </div>

      </div>
    </section>
  );
}