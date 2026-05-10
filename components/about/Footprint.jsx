"use client";

import Image from "next/image";
import AnimatedGlobe from "../common/AnimatedGlobe"; 

function SectionLabel({ children }) {
  return (
    <p className="text-white span1 uppercase">
      {children}
    </p>
  );
}

export default function OurFootprint() {


  return (
    <section className="relative w-full bg-primary overflow-hidden px-[10%] py-[5%]">
      {/* header */}
      <h2 className="text-white heading2 font-bold leading-[1] mb-1 lg:mb-[15px]">
        Our Footprint
      </h2>
      <p className="text-white span2 
      mb-[max(0.5px,0.0209744*(100vw-17px))]
      md:mb-[max(0.5px,0.0509754*(100vw-17px))]
      ">
        Geographic Presence
      </p>
      
      {/* grid */}
      <div className="grid grid-cols-1 md:grid-cols-[0.39998917765794867fr_0.6000108223420513fr] gap-[max(0.5px,0.0209744*(100vw-17px))] md:gap-[max(0.5px,0.0052438*(100vw-17px))] items-center">
        
         {/* Animated Globe */}
        <AnimatedGlobe 
          className="w-[63.834635416666664%] md:w-[89.67026226647717%] lg:w-[83.33673556915899%] mx-auto"
          imageSrc="/assets/globe.avif"
          logoHref="/"
          logoSrc="/assets/Logo.png"
          perspective={580}
          maxTiltX={16}
          maxTiltY={12}
          transitionDuration={0.5}
          transitionEase="easeOut"
        />
        {/* Info items */}
        <div className="flex flex-col gap-[max(0.5px,0.031463*(100vw-17px))] lg:w-[79.33021934459435%]">
          {/* Global Reach */}
          <div className="flex flex-row gap-[11px]">
            <div className="w-[max(0.5px,calc(0.0209754*100vw))] h-auto aspect-square shrink-0 mt-[2%] lg:mt-[1%]">
              <Image src="/assets/globalReach.png" alt="Global Reach Icon" width={40} height={40} className="w-full h-auto" />
            </div>
            <div className="flex flex-col gap-[max(0.5px,0.0082918*(100vw-17px))]">
              <SectionLabel>Global Reach</SectionLabel>
              <p className="p2v2 text-white">
                We have successfully delivered projects globally through our remote-first model,
                with on-site sprints for critical project phases
              </p>
            </div>
          </div>
          
          {/* Primary Hubs */}
          <div className="flex flex-row gap-[11px]">
            <div className="w-[max(0.5px,calc(0.0209754*100vw))] h-auto aspect-square shrink-0 mt-[2%] lg:mt-[1%]">
              <Image src="/assets/primaryHub.png" alt="Primary Hubs Icon" width={40} height={40} className="w-full h-auto" />
            </div>
            <div className="flex flex-col gap-[7px]">
              <SectionLabel>Primary Hubs</SectionLabel>
              <p className="text-[13.6553px] md:text-[18px] lg:text-[14.4px] xl:text-[20.25px] text-white">
                Australia (APAC)
                <br />
                KSA (MENA)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}