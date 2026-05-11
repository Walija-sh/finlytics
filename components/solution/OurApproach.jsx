"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from "next/image";
  const steps = [
    {
      number: 1,
      icon: "/assets/1.png",
      weeks: "Weeks 1-2",
      description: "Assessment and quick win identification.",
    },
    {
      number: 2,
      icon: "/assets/2.png",
      weeks: "Weeks 3-6",
      description: "Core solution implementation.",
    },
    {
      number: 3,
      icon: "/assets/3.png",
      weeks: "Weeks 7-8",
      description: "Production deployment and user enablement.",
    },
    {
      number: 4,
      icon: "/assets/4.png",
      weeks: "Weeks 9+",
      description: "Optimisation, scaling, and knowledge transfer.",
    },
  ];
export default function OurApproach() {
  const sectionRef = useRef(null);
  const stepsContainerRef = useRef(null);
  const dividerRef = useRef(null);
const mobileCardRefs = useRef(steps.map(() => useRef(null)));


  const { scrollYProgress: stepsProgress } = useScroll({
    target: stepsContainerRef,
    offset: ["start 85%", "end 60%"]
  });

  const { scrollYProgress: dividerProgress } = useScroll({
    target: dividerRef,
    offset: ["start 85%", "end 20%"]
  });

const remainingCardsProgress = useTransform(stepsProgress, [0.2, 0.7], [0, 1]);

const cardProgresses = steps.map((_, i) => {
  if (i === 0) {
    return useTransform(() => 1);
  } else {
    return remainingCardsProgress;
  }
});

  const dividerWidth = useTransform(dividerProgress, [0, 0.3, 0.6], ["0%", "50%", "100%"]);

  return (
    <section ref={sectionRef} className="bg-blue-2 p-[10%] md:py-[5%] flex items-center">
      <div className="w-full text-white">
        {/* Header */}
        <h2 className="heading2 font-bold lg:mb-[22px] lg:leading-[1]">
          Our approach
        </h2>
        <p className="span2 mb-5 lg:mb-[30px] 2xl:mb-[54px]">
          Fast time-to-value
        </p>

        
{/* Mobile */}
<div className="flex flex-col gap-4 md:hidden">
  {steps.map((step, index) => {
    const { scrollYProgress: cardProgress } = useScroll({
      target: mobileCardRefs.current[index],
      offset: ["start 90%", "end 50%"]
    });
    
    return (
      <motion.div
        ref={mobileCardRefs.current[index]}
        style={{ opacity: cardProgress }}
        transition={{ duration: 0.5 }}
        key={step.number} 
        className="flex flex-col gap-1 span4"
      >
        <div className="flex items-center gap-2 text-white">
          <Image
            src={step.icon}
            alt={`Step ${step.number}`}
            width={32}
            height={32}
            className="object-contain w-[6%]"
          />
          <span className="font-bold">
            {step.weeks}
          </span>
        </div>
        <p className="">{step.description}</p>
      </motion.div>
    );
  })}
</div>

       {/* Desktop */}
<div ref={stepsContainerRef} className="hidden md:block">
  {/* Icons */}
  <div className="grid md:grid-cols-4 mb-3">
    {steps.map((step, index) => (
      <motion.div
        key={step.number}
        style={{ opacity: index === 0 ? 1 : cardProgresses[index] }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={step.icon}
          alt={`Step ${step.number}`}
          width={36}
          height={36}
          className="object-contain w-[9.5%] 2xl:w-[7.805036687737555%]"
        />
      </motion.div>
    ))}
  </div>

  {/* Headers */}
  <div className="grid md:grid-cols-4">
    {steps.map((step, index) => (
      <motion.h3
        key={step.number}
        style={{ opacity: index === 0 ? 1 : cardProgresses[index] }}
        transition={{ duration: 0.5 }}
        className="text-white font-bold span3"
      >
        {step.weeks}
      </motion.h3>
    ))}
  </div>

  {/* Divider */}
  <div ref={dividerRef} className="my-2 lg:my-[10px]">
    <motion.div 
      style={{ width: dividerWidth }}
      className="border-t border-white border-dashed"
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  </div>

  {/* Descriptions */}
  <div className="grid md:grid-cols-4">
    {steps.map((step, index) => (
      <motion.p
        key={step.number}
        style={{ opacity: index === 0 ? 1 : cardProgresses[index] }}
        transition={{ duration: 0.5 }}
        className="text-white p2v2 max-w-[83.61198910170441%] lg:max-w-[67.78480352990125%]"
      >
        {step.description}
      </motion.p>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}