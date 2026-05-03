"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";

const METHODOLOGY_STEPS = [
  {
    id: 1,
    number: "1",
    title: "Discovery and roadmap",
    period: "(Weeks 1-2)",
    description: "We don't start with data or technology. We start with the decision you need to improve. We rapidly map your landscape, identify quick wins, and assess technical readiness. Deliverable: A 90-day roadmap with a week-by-week execution plan.",
    image: "/assets/about/1.png",
  },
  {
    id: 2,
    number: "2",
    title: "Proof of value",
    period: "(Weeks 3-10)",
    description: "We build the smallest thing that proves the concept and delivers tangible value, whether it's a challenger model for a specific segment, a governed pipeline for a critical dataset, or a single decisioning application that gets used immediately. Key principle: We ship working, production-ready code every week, not PowerPoint presentations.",
    image: "/assets/about/2.png",
  },
  {
    id: 3,
    number: "3",
    title: "Scale and sustain",
    period: "(Weeks 11+)",
    description: "We make it real with the critical, unglamorous work: monitoring, alerting, runbooks, documentation, and knowledge transfer. We then systematically expand the solution and help you build the internal capabilities to own and operate it.",
    image: "/assets/about/3.png",
  },
];

const SOLUTIONS = [
  {
    id: "credit-risk",
    title: "Credit Risk & Financial Analytics",
    link: "#",
  },
  {
    id: "data-platforms",
    title: "Modern Data Platforms & Governance",
    link: "#",
  },
  {
    id: "data-science-ml",
    title: "Data Science & Machine Learning",
    link: "#",
  },
];

function MethodologyStep({ item, index }) {


  return (
    <div
      className="grid grid-cols-[1.0000711382113823fr_5.00035569105691fr_14.000995934959349fr] gap-[10px] text-white"
    >
      {/* Step Number with Image */}
      <div className="flex flex-col grow  items-center">

      <div className=" w-[102%] md:w-[65.04065040650407%] aspect-square relative">
        <Image
          src={item.image}
          alt={`Step ${item.number}`}
          fill
          className="object-contain"
        />
      </div>
      <div className={`bg-white w-[2px] h-full grow ${index < METHODOLOGY_STEPS.length - 1 ? 'block' : 'hidden'}`}></div>
      </div>
      
      {/* Step Content */}
        <div className="flex flex-col grow">
          <h3 className="font-bold p5 ">
             {item.title}
          </h3>
          <span className="  p6">
            {item.period}
          </span>
        </div>
        <p className=" p5 mb-2 md:mb-5 lg:mb-[30px] ">
          {item.description}
        </p>
      
    </div>
  );
}

function SolutionCard({ item, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100%", "start 80%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="  group cursor-pointer md:p-[20px] md:rounded-[13px] md:border md:border-white lg:p-0  lg:rounded-none lg:border-0"
    >
      <div className="flex items-center justify-between gap-[10px] border-b border-white p-2">
        <span className="text-white text-[14px] md:text-[16px] font-medium">
        {item.title}
      </span>
      <Link
        href={item.link}
        className="inline-flex items-center gap-2 text-white  transition-colors group-hover:gap-3"
      >
        <span className="rounded-full border border-secondary w-6 aspect-square flex items-center justify-center text-secondary relative overflow-hidden">
          <BsArrowRightShort className='text-[26px] -translate-y-[1px] -translate-x-[1px] group-hover:translate-x-full transition-all duration-300 group-hover:scale-50'/>
          <BsArrowRightCircleFill className='text-[26px] absolute inset-[-1px] text-secondary scale-0 group-hover:scale-100 transition-all origin-left duration-300'/>
        </span>
      </Link>
      </div>
    </motion.div>
  );
}

export default function Methodology() {


  return (
    <section  className="relative w-full bg-primary py-[5%] px-[10%] overflow-hidden">
      {/* bg*/}
      <div className="absolute inset-0 z-2 overflow-hidden ">
        <video
          className="w-full h-full object-cover opacity-10 "
          autoPlay
          loop
          muted
          playsInline
          
        >
          <source src="/assets/bg/method-bg.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 z-1 bg-primary/10" />
      </div>
       <div className="relative z-10">
         {/* Header */}
        <div
        
          className="mb-5 lg:mb-[59px] text-white"
        >
          <h2 className="font-bold heading2 lg:leading-[1] lg:mb-[22px] ">
            Our methodology: The Finlytics Framework
          </h2>
          <p className=" p2 ">
            Our approach ensures we deliver value quickly, safely, and sustainably.
          </p>
        </div>

        {/* Methodology Steps */}
        <div className="mb-5 lg:mb-[58px]">
          {METHODOLOGY_STEPS.map((step, i) => (
            <MethodologyStep key={step.id} item={step} index={i} />
          ))}
        </div>

        {/* Explore our solutions section */}
        <div className="">
          <p className="text-white  p2 mb-5 lg:mb-[15px]">
            Explore our solutions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10">
            {SOLUTIONS.map((solution, i) => (
              <SolutionCard key={solution.id} item={solution} index={i} />
            ))}
          </div>
        </div>
       </div>
      
    </section>
  );
}