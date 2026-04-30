'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import { CreditRiskIcon, DataPlatformsIcon,ProduceAIMLIcon } from '@/components/common/Svg';

import { BsArrowRightCircleFill,BsArrowRightShort } from "react-icons/bs";
import LogoMark from '../common/LogoMark';

const CAPABILITIES = [
  {
    id: "credit-risk",
    title: "Credit Risk & Decision Intelligence",
    description: "From traditional scorecards to challenger models and IFRS 9 alignment, we bring risk expertise that's been tested at national scale.",
    buttonText: "Learn more about our Risk Solutions",
    buttonLink: "#",
    Icon: CreditRiskIcon,
  },
  {
    id: "data-platforms",
    title: "Modern Data Platforms & Governance",
    description: "We build modern data stacks with dbt, event streaming, and feature stores, delivering Power BI and Metabase solutions that become primary decision-making tools. Designed for governance without sacrificing velocity.",
    buttonText: "Explore our Data Platform Solutions",
    buttonLink: "#",
    Icon: DataPlatformsIcon,
  },
  {
    id: "data-science-ml",
    title: "Production AI/ML & Machine Learning",
    description: "We manage the end-to-end AI/ML lifecycle, from experimentation to production monitoring. We implement classical ML and GenAI with the robust guardrails required for regulated enterprises.",
    buttonText: "Discover our AI/ML Services",
    buttonLink: "#",
    Icon: ProduceAIMLIcon,
  },
];








function CapabilityCard({ item, index }) {
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
      className=" border-b border-white pr-[10%] md:pr-0  flex flex-col gap-3 transition-all duration-700 ease-out"
    >
      <div className="w-[29px] md:w-[25px] h-auto text-secondary fill-secondary stroke-secondary">
        <item.Icon />
      </div>
      <h3 className="font-bold text-[14.64px] md:text-[20px] text-white">
        {item.title}
      </h3>
      <p className="text-[13.0133px] md:text-[16px] lg:text-[18px] text-white">
        {item.description}
      </p>
      <Link
        href={item.buttonLink}
        className="inline-flex items-center gap-2 text-[14px] md:text-[16px] font-medium text-white/90 hover:text-white transition-colors group w-fit p-2"
      >
        <span>{item.buttonText}</span>
        <span className='inline-block rounded-full border border-secondary w-6 aspect-square flex items-center justify-center text-secondary relative overflow-hidden'>
            <BsArrowRightShort className='text-[26px] -translate-y-[1px] -translate-x-[1px] group-hover:translate-x-full transition-all  duration-300 group-hover:scale-50 '/>
            <BsArrowRightCircleFill className='text-[26px] absolute inset-[-1px] text-secondary scale-0 group-hover:scale-100 transition-all origin-left duration-300'/>
        </span>
        
      </Link>
    </motion.div>
  );
}

export default function CoreCapabilities() {
     const sectref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectref,
    offset: ["start 70%", "start -20%"],
  });
 const scale1 = useTransform(scrollYProgress, [0, 0.7], [1, 1.4]);
const rotate1 = useTransform(scrollYProgress, [0, 0.7], ['0deg', '-360deg']);
 const scale2 = useTransform(scrollYProgress, [0.1, 1], [1, 1.5]);
const rotate2 = useTransform(scrollYProgress, [0.1, 1], ['90deg', '360deg']);
  return (
    <section ref={sectref} className="relative w-full bg-primary overflow-hidden">
      

      <div className="relative z-10 py-[10%] pl-[10%] md:pr-[10%] flex flex-col gap-5 lg:gap-10 lg:grid lg:grid-cols-2">
         {/* Header */}
         <div className="flex flex-col gap-20 ">

            <h2 className="font-bold text-[16.2667px] md:text-[25px] lg:text-[30px] text-white">
              Our core capabilities
            </h2>
            {/* scroll linked circles */}
            <div className="relative w-full h-full  hidden lg:inline-block">
              <div className="lg:flex flex-col  w-[70%] xl:w-[280px]">

                <motion.div style={{scale:scale1,rotate:rotate1}} className="self-start relative w-[112px] h-[112px] ">
      
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-secondary/20"></div>

      {/* Mid layer */}
      <div className="absolute right-0 top-[50%] translate-y-[-50%] w-[85%] aspect-square rounded-full bg-secondary/30"></div>

      {/* Core */}
      <div className="absolute right-0 top-[50%] translate-y-[-50%] w-[60%] aspect-square rounded-full bg-secondary/40"></div>

    </motion.div>
                <motion.div style={{scale:scale2,rotate:rotate2}}  className="self-end relative w-[200px] h-[200px]">
      
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-secondary/20"></div>

      {/* Mid layer */}
      <div className="absolute right-0 top-[50%] translate-y-[-50%] w-[85%] aspect-square rounded-full bg-secondary/30"></div>

      {/* Core */}
      <div className="absolute right-0 top-[50%] translate-y-[-50%] w-[60%] aspect-square rounded-full bg-secondary/40"></div>

    </motion.div>
              </div>
    {/* logo mark */}
    <div className="w-[64.03395565373863%] absolute bottom-0 left-0 mb-[60px]">
      <LogoMark fill='#0c0054'/>
    </div>
            </div>
        
          
         </div>

          {/* Capabilities Cards */}
          <div className="flex flex-col gap-6 md:gap-8">
            {CAPABILITIES.map((item, i) => (
              <CapabilityCard key={item.id} item={item} index={i} />
            ))}
          </div>

         
      </div>
    </section>
  );
}