'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import { CreditRiskIcon, DataPlatformsIcon,ProduceAIMLIcon } from '@/components/common/Svg';
import Image from 'next/image'
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
      <h3 className="font-bold heading3 text-white">
        {item.title}
      </h3>
      <p className="p2 text-white">
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
    offset: ["start 70%", "start -30%"],
  });

  const scale1 = useTransform(scrollYProgress, [0, 0.7], [0.8, 1]);
  const rotate1 = useTransform(scrollYProgress, [0, 0.7], ['45deg', '-360deg']);
  const scale2 = useTransform(scrollYProgress, [0.4, 1], [0.8, 1]);
  const rotate2 = useTransform(scrollYProgress, [0.4, 1], ['90deg', '360deg']);
  return (
    <section ref={sectref} className="relative w-full bg-primary overflow-hidden">
      

      <div className="relative z-10 py-[10%] pl-[10%] md:pr-[10%] flex flex-col gap-5 lg:gap-10 lg:grid lg:grid-cols-2 xl:gap-[43px]">
         {/* Header */}
         <div className="flex flex-col gap-20  xl:gap-28 relative ">

            <h2 className="font-bold heading2 text-white">
              Our core capabilities
            </h2>
            {/* scroll linked circles */}
         
          <div className="absolute inset-0 z-2 h-full hidden lg:inline-block grow-1">
              <motion.div style={{ scale: scale1, rotate: rotate1 }} className=" relative w-[36.54742017909568%] aspect-square mt-[calc(max(0.5px,0.1100264*(100vw-0px)))]  absolute top-0 right-0">
                <Image src='/assets/RotatingCircles.svg' alt='circle' width={100} height={100} className='w-full h-full aspect-square'/>
              </motion.div>

              <motion.div style={{ scale: scale2, rotate: rotate2 }} className="  absolute top-0 right-0 w-[64.09947054361706%] aspect-square mr-[calc(max(0.5px,0.1206003*(100vw-0px)))] mt-[calc(max(0.5px,0.2046244*(100vw-0px)))]">
                 <Image src='/assets/RotatingCircles.svg' alt='circle' width={100} height={100} className='w-full h-full aspect-square'/>
              </motion.div>
              {/* logo mark */}
              <div className="w-[64.03395565373863%] mb-[calc(max(0.5px,0.0283085 *(100vw-0px)))] absolute  left-0 bottom-0">
                <LogoMark fill='#0c0054' />
              </div>
            
          </div>
        
          
         </div>

          {/* Capabilities Cards */}
          <div className="flex flex-col gap-6 md:gap-8 xl:gap-11">
            {CAPABILITIES.map((item, i) => (
              <CapabilityCard key={item.id} item={item} index={i} />
            ))}
          </div>

         
      </div>
    </section>
  );
}