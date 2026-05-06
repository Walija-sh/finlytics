"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { HomeArrowSvg } from "@/components/common/Svg";
import Image from "next/image";




function DifferentiatorCard({ item, index }) {
 const ref = useRef(null);

const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start 80%", "start 30%"], 
});

const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  return (
    <motion.div
      
      ref={ref}
  style={{ opacity }}
      className="rounded-[13px] border border-white text-white  bg-primary/30 p-4 lg:p-10 xl:py-11 xl:px-11.5 flex flex-col  transition-all duration-700 ease-out"
     
    >
      {/* Icon */}
      <div className="w-[33px] md:w-[38px] lg:w-[35px] h-auto fill-white stroke-white mb-0.5 mb-1.5 xl:mb-[12px] ">
        <Image src={item.Icon} alt={item.label} width={35} height={35} className="w-full h-auto object-contain" />
      </div>

      {/* Title */}
      <h3 className=" font-bold heading3">
        {item.label}
      </h3>

      {/* Body */}
      <p className=" p2 md:font-bold lg:font-normal">
        {item.body}
      </p>
    </motion.div>
  );
}


export default function Differences({DIFFERENTIATORS}) {
  return (
    <section className="relative w-full bg-primary ">
      {/* bg*/}
      <div className="absolute inset-0 z-2 overflow-hidden ">
        <video
          className="w-full h-full object-cover opacity-10 "
          autoPlay
          loop
          muted
          playsInline
          
        >
          <source src="/assets/bg/bg-2.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 z-1 bg-primary/10" />
      </div>
     
      <div className="relative z-10 p-[10%]">
        <div className=" flex flex-col gap-[15px] lg:grid lg:grid-cols-[40%_1fr]">
            <div className="w-full  lg:sticky lg:top-[160px]  2xl:top-[10%] h-fit">

            <div className="w-fit flex flex-col gap-2 xl:gap-[30px]">
                <h2 className="w-fit relative font-bold heading2"> What makes us different

            </h2>
                <motion.div
                animate={{ scale: [1, 0.9, 1] }}
  transition={{
    duration: 1.2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
                className="hidden lg:inline-block w-[100px] xl:w-[123px] scale-y-[-1] fill-secondary self-end ">
            <HomeArrowSvg/>
            </motion.div>
            </div>
            
            </div>
          
          <div className="flex flex-col gap-[15px] lg:gap-10">
            {DIFFERENTIATORS.map((item, i) => (
              <DifferentiatorCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
}



