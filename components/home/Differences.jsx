"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { HomeArrowSvg,DecisionIcon,PractitionerIcon,ProductionIcon,RiskIcon } from "@/components/common/Svg";


const DIFFERENTIATORS = [
  {
    id: "decision-first",
    label: "Decision-first approach",
    body: "We start with the commercial or risk decision you need to improve, then work backwards to the data, models, and infrastructure required. Not the other way around.",
    Icon: DecisionIcon,
  },
  {
    id: "practitioner",
    label: "Practitioner's mindset",
    body: "Our leadership has built and scaled national-level data programmes, shipped production machine learning models with industry-leading performance (Gini 0.85), and implemented robust data governance frameworks from the ground up.",
    Icon: PractitionerIcon,
  },
  {
    id: "production",
    label: "Production-grade from day one",
    body: "We build for reality. Our experience deploying event-sourced architectures for real-time decisions, enforcing 200+ data quality rules to maintain a 95.6% DQI, and delivering C-suite BI solutions informs every project we undertake.",
    Icon: ProductionIcon,
  },
  {
    id: "dna",
    label: "Risk + engineering DNA",
    body: "Our team is equally comfortable advising a board on risk strategy and in a terminal writing the dbt models, Python pipelines, and SQL queries to execute it.",
    Icon: RiskIcon,
  },
];

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
      className="rounded-[13px] border border-white text-white  bg-primary/30 p-4 xl:p-10 flex flex-col gap-[1px] transition-all duration-700 ease-out"
     
    >
      {/* Icon */}
      <div className="w-[33px] md:w-[38px] lg:w-[35px] h-auto fill-white stroke-white mb-0.5 mb-1.5">
        <item.Icon className="w-full h-auto" />
      </div>

      {/* Title */}
      <h3 className=" font-bold text-[14.64px] md:text-[20px]">
        {item.label}
      </h3>

      {/* Body */}
      <p className=" text-[13.0133px] md:text-[16px] lg:text-[18px] md:font-bold lg:font-normal">
        {item.body}
      </p>
    </motion.div>
  );
}


export default function Differences() {
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
            <div className="w-full  lg:sticky top-[110px] h-fit">

            <div className="w-fit flex flex-col gap-2">
                <h2 className="w-fit relative font-bold text-[16.2667px] md:text-[25px] lg:text-[30px]"> What makes us different

            </h2>
                <motion.div
                animate={{ scale: [1, 0.9, 1] }}
  transition={{
    duration: 1.2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
                className="hidden lg:inline-block w-[100px] fill-secondary self-end ">
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



