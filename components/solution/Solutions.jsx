"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";

const SolutionCard = ({ 
  bgColor = "bg-primary",
  imageSrc = "/assets/solutions/solution1.jpg",
  imageAlt = "Solution image",
  title = "Modern Data Platforms & Governance",
  subtitle = "Build a foundation for scalable, trusted insights",
  description = "Transform fragmented, siloed data into a unified, governed platform that powers real-time decisions, ensures regulatory compliance, and creates a durable competitive advantage.",
  keyCapabilities = [
    "Enterprise data warehouse design with a single source of truth.",
    "Real-time analytics and self-service BI enablement.",
    "Robust data quality and data governance frameworks.",
    "Event-driven architectures for instant, actionable insights."
  ],
  solutionFor = [
    "You are making critical decisions based on spreadsheets and manual reports.",
    "You need a scalable, regulatory-compliant data management foundation.",
    "Your teams require real-time visibility into operational performance."
  ],
  linkText = "Learn more about our Data Platform solutions",
  linkHref = "#",
  iconSrc = "/assets/solutions/solIco1.svg"
}) => {
const cardsContainerRef = useRef(null);
const listContainerRef = useRef(null);

const { scrollYProgress: cardsScrollProgress } = useScroll({
  target: cardsContainerRef,
  offset: ["start 85%", "end 20%"]
});

const { scrollYProgress: listScrollProgress } = useScroll({
  target: listContainerRef,
  offset: ["start 85%", "end 20%"]
});

const cardsOpacity = useTransform(cardsScrollProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 1]);
const listOpacity = useTransform(listScrollProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 1]);

const firstRowProgress = useTransform(cardsScrollProgress, [0, 0.5], [0, 1]);
const secondRowProgress = useTransform(cardsScrollProgress, [0.2, 0.7], [0, 1]);
  return (
    
    <section    className={`p-[10%] lg:py-[5%]  ${bgColor} text-white grid lg:grid-cols-2 gap-5 md:gap-8 lg:gap-10 xl:gap-[87px] 2xl:gap-[6.250052029136317%]`}>
        <div className="w-full h-full aspect-square md:aspect-auto  md:max-h-[198px] lg:max-h-none rounded-[13px] overflow-hidden lg:order-2">
            <Image src={imageSrc} alt={imageAlt} width={462} height={305} className='w-full h-full object-cover object-center' />
        </div>
        {/* content */}
        <div className="grid gap-5 lg:mt-0 lg:gap-0">
            <h2 className=' text-[max(0px,min(500px,max(0.5px,0.0512821*(100vw-17px))))]
  md:text-[max(0px,min(500px,max(0.5px,0.0325521*(100vw-17px))))]
  lg:text-[max(0px,min(500px,max(0.5px,0.0273438*(100vw-17px))))]
  2xl:text-[max(0px,min(500px,max(0.5px,0.0182102*(100vw-17px))))] font-bold lg:mb-[18px] lg:leading-[1]'>
{title}</h2>
<p className="text-secondary font-bold span4 lg:mb-[34px]">{subtitle}</p>
<p className='span4 lg:mb-[15px] 2xl:mb-[30px]'>{description}</p>
<p className='span4 lg:mb-[7px] 2xl:mb-[16px]'>Key capabilities:</p>
{/* cards */}
<motion.div ref={cardsContainerRef} style={{ opacity: cardsOpacity }} className="grid grid-cols-2 grid-rows-[1fr_1fr] gap-2 lg:gap-[9px] 2xl:gap-4.5 text-primary span5">
  {keyCapabilities.map((capability, index) => {
    const isFirstRow = index === 0 || index === 1;
    const rowOpacity = isFirstRow ? firstRowProgress : secondRowProgress;
    
    return (
      <motion.div
        key={index}
        style={{ 
          opacity: rowOpacity,
        }}
        transition={{ duration: 0.5 }}
        className="bg-blue-bg rounded-[13px] p-5 lg:p-[30px] 2xl:p-[60px]"
      >
        <div className="w-[17.796315606534584%] md:w-[12.89487004208723%]  lg:mb-[7px] aspect-square 2xl:mb-4">
          <Image src={iconSrc} alt="Solution icon" width={16} height={16} className='w-full h-full object-contain' />
        </div>
        <p className=''>{capability}</p>
      </motion.div>
    );
  })}
</motion.div>
<p className='span4 lg:mt-[30px] lg:mb-[15px] 2xl:mt-[60px] 2xl:mb-[30px]'>This solution is for you if:</p>
<motion.ul
 ref={listContainerRef}
  style={{ opacity: listOpacity }}
className='grid lg:gap-[9px] 2xl:gap-[18px] mb-[22px] 2xl:mb-[61px]'>
    {solutionFor.map((item, index) => {
     
   
        return(
        
        <li 
         
        key={index} className='flex gap-2'>
            <Image src='/assets/solutions/check.svg' alt="Check icon" width={16} height={16} className='w-[4%] h-auto aspect-square object-contain' />
            <p className='span5'>{item}</p>
        </li>
    )
    })}
</motion.ul>
  <Link href={linkHref} className="group flex items-center justify-between gap-[10px] border-b border-white p-2 2xl:max-w-[708.7421875px] md:justify-start">
        <span className="text-white text-[14px] md:text-[16px] 2xl:text-[18px] font-medium">
       {linkText}
      </span>
      <div
        
        className="inline-flex items-center gap-2 text-white transition-colors"
      >
        <span className="rounded-full border border-secondary w-6 aspect-square flex items-center justify-center text-secondary relative overflow-hidden">
          <BsArrowRightShort className='text-[26px] -translate-y-[1px] -translate-x-[1px] group-hover:translate-x-full transition-all duration-300 group-hover:scale-50'/>
          <BsArrowRightCircleFill className='text-[26px] absolute inset-[-1px] text-secondary scale-0 group-hover:scale-100 transition-all origin-left duration-300'/>
        </span>
      </div>
      </Link>
        </div>

    </section>
  );
};

// Main Solutions Component
const Solutions = () => {
  const solutionsData = [
    {
      bgColor: "bg-primary",
      imageSrc: "/assets/solutions/solution1.jpg",
      imageAlt: "Modern Data Platforms",
      title: "Modern Data Platforms & Governance",
      subtitle: "Build a foundation for scalable, trusted insights",
      description: "Transform fragmented, siloed data into a unified, governed platform that powers real-time decisions, ensures regulatory compliance, and creates a durable competitive advantage.",
      keyCapabilities: [
        "Enterprise data warehouse design with a single source of truth.",
        "Real-time analytics and self-service BI enablement.",
        "Robust data quality and data governance frameworks.",
        "Event-driven architectures for instant, actionable insights."
      ],
      solutionFor: [
        "You are making critical decisions based on spreadsheets and manual reports.",
        "You need a scalable, regulatory-compliant data management foundation.",
        "Your teams require real-time visibility into operational performance."
      ],
      linkText: "Learn more about our Data Platform solutions",
      linkHref: "/data-platform"
    },
    {
      bgColor: "bg-blue-2",
      imageSrc: "/assets/solutions/solution2.jpg",
      imageAlt: "Credit Risk & Financial Analytics",
      title: "Credit Risk & Financial Analytics",
      subtitle: "Make smarter, faster, and more profitable risk decisions",
      description: "Implement advanced credit and financial decisioning capabilities that approve more creditworthy customers, reduce losses, and operate at the speed of modern digital business.",
      keyCapabilities: [
        "Development of traditional credit scorecards and challenger models.",
        "ML-powered decisioning systems for enhanced predictive accuracy.",
        "Feature engineering, model validation, and production deployment.",
        "Comprehensive risk and governance frameworks for regulatory alignment."
      ],
      solutionFor: [
        "You are declining potentially good customers due to outdated models.",
        "You need to move from manual, inconsistent rules to automated, model-driven decisions.",
        "You want to reduce decision times from days to seconds."
      ],
      linkText: "Learn more about our Credit Risk solutions",
      linkHref: "/credit-risk"
    },
    {
      bgColor: "bg-primary",
      imageSrc: "/assets/solutions/solution3.jpg",
      imageAlt: "Data Science & Machine Learning",
      title: "Data Science & Machine Learning",
      subtitle: "Turn your data into a predictive powerhouse",
      description: "Deploy production-grade AI and machine learning solutions that solve complex business problems, from predicting customer behaviour to optimising operational processes, all within a robust governance framework.",
      keyCapabilities: [
        "End-to-end ML model development, from ideation to production monitoring.",
        "Generative AI implementation with enterprise-grade safety guardrails.",
        "Intelligent automation using AI agents to streamline complex workflows.",
        "MLOps frameworks to ensure scalable and repeatable results."
      ],
      solutionFor: [
        "You are exploring AI and ML but are concerned about the risks.",
        "You need to extract predictive value from your data assets.",
        "You want to automate complex processes that go beyond simple RPA."
      ],
      linkText: "Learn more about our DS & ML solutions",
      linkHref: "/data-science"
    }
  ];

  return (
    <>
      {solutionsData.map((solution, index) => (
        <SolutionCard key={index} {...solution} />
      ))}
    </>
  );
};

export default Solutions;

