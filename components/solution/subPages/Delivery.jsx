"use client";

import { useRef,useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from "next/image";
export default function Delivery({
    title='',
    subtitle='',
    cardsData
}) {
  const sectionRef = useRef(null);
  const stepsContainerRef = useRef(null);
  const dividerRef = useRef(null);
const mobileCardRefs = useRef(cardsData.map(() => useRef(null)));
const [expandedCards, setExpandedCards] = useState({});

  const { scrollYProgress: stepsProgress } = useScroll({
    target: stepsContainerRef,
    offset: ["start 85%", "end 60%"]
  });

  const { scrollYProgress: dividerProgress } = useScroll({
    target: dividerRef,
    offset: ["start 85%", "end 20%"]
  });

const remainingCardsProgress = useTransform(stepsProgress, [0.2, 0.7], [0, 1]);

const cardProgresses = cardsData.map((_, i) => {
  if (i === 0) {
    return useTransform(() => 1);
  } else {
    return remainingCardsProgress;
  }
});

  const dividerWidth = useTransform(dividerProgress, [0, 0.3, 0.6], ["0%", "50%", "100%"]);
const toggleCard = (index) => {
  setExpandedCards((prev) => ({
    ...prev,
    [index]: !prev[index],
  }));
};
  return (
    <section ref={sectionRef} className="bg-blue-2 p-[10%] flex items-center">
      <div className="w-full text-white">
        {/* Header */}
        <h2 className="heading2 font-bold mb-[max(0.5px,0.0130208*(100vw-17px))] md:mb-[max(0.5px,0.0156249*(100vw-17px))] lg:leading-[1]">
         {title}
        </h2>
        <p className="p2 mb-[max(0.5px,0.051282*(100vw-17px))] md:mb-[max(0.5px,0.0208117*(100vw-17px))]">
      {subtitle}
        </p>

        
{/* Mobile */}
<div className="flex flex-col gap-4 md:hidden">
  {cardsData.map((step, index) => {
    const { scrollYProgress: cardProgress } = useScroll({
      target: mobileCardRefs.current[index],
      offset: ["start 90%", "start 50%"]
    });
    
    return (
      <motion.div
        ref={mobileCardRefs.current[index]}
        style={{ opacity: cardProgress }}
        transition={{ duration: 0.5 }}
        key={step.number} 
        className="flex flex-col gap-1 span4"
      >
        <div className="flex items-start gap-2 text-white">
          <Image
            src={step.icon}
            alt={`Step ${step.number}`}
            width={32}
            height={32}
            className="object-contain w-[6%] mt-[2%]"
          />
          <div className="flex flex-col">
             <span className="font-bold">
            {step.title}
          </span>
             <span className="font-bold">
            ({step.weeks})
          </span>
        <div  className={`text-[16px] ${
    !expandedCards[index] ? 'line-clamp-3' : ''
  }`}>
            <p className="">{step.description}</p>
            <br />
            <p>Deliverable: {step.deliverable}</p>
        </div>
       <button
  onClick={() => toggleCard(index)}
  className="text-[14px] mt-2.5 underline text-white hover:text-secondary w-fit cursor-pointer"
>
  {expandedCards[index] ? 'Show less' : 'Show more'}
</button>
          </div>
        </div>
         
      </motion.div>
    );
  })}
</div>

       {/* Desktop */}
<div ref={stepsContainerRef} className="hidden md:block">
  {/* Icons */}
  <div className="grid md:grid-cols-4 mb-3">
    {cardsData.map((step, index) => (
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
          className="object-contain w-[9.5%]"
        />
      </motion.div>
    ))}
  </div>

  {/* Headers */}
  <div className="grid md:grid-cols-4">
    {cardsData.map((step, index) => (
      <motion.h3
        key={step.number}
        style={{ opacity: index === 0 ? 1 : cardProgresses[index] }}
        transition={{ duration: 0.5 }}
        className="text-white font-bold flex flex-wrap span3 md:w-[87.51936429192052%]"
      >
        <span>{step.title} </span>
        <span>({step.weeks}) </span> 
      </motion.h3>
    ))}
  </div>

  
  <div ref={dividerRef} className="my-2 lg:my-[10px]">
    <motion.div 
      style={{ width: dividerWidth }}
      className="border-t border-white border-dashed"
      transition={{ duration: 0.8, ease: "easeOut" }}
    />
  </div>

  {/* Descriptions */}
  <div className="grid md:grid-cols-4">
    {cardsData.map((step, index) => (
      <motion.div
        key={step.number}
        style={{ opacity: index === 0 ? 1 : cardProgresses[index] }}
        transition={{ duration: 0.5 }}
        className="text-white  mr-[40px] xl:mr-[60px]"
      >
        <div className={`text-[16px] lg:text-[18px] ${
    !expandedCards[index] ? 'line-clamp-3' : ''
  }`}>
            <p className="">{step.description}</p>
            <br />
            <p>Deliverable: {step.deliverable}</p>
        </div>
      <button
  onClick={() => toggleCard(index)}
  className="text-[14px] lg:text-[16px] mt-2.5 underline text-white hover:text-secondary w-fit cursor-pointer"
>
  {expandedCards[index] ? 'Show less' : 'Show more'}
</button>
      </motion.div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}