'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import LogoMark from '../common/LogoMark';

const STACK = [
  {
    id: "data-platforms",
    title: "Data Platforms",
    tools: "ClickHouse, Alteryx, Dataiku",
    icon: "/assets/technicalPortfolio/stack1.svg",
  },
  {
    id: "engineering",
    title: "Engineering",
    tools: "Python, SQL, dbt, Elixir",
    icon: "/assets/technicalPortfolio/stack2.svg",
  },
  {
    id: "ml-ai",
    title: "ML/AI",
    tools: "PyTorch, TensorFlow, XGBoost, LangChain, OpenAI, Hugging Face",
    icon: "/assets/technicalPortfolio/stack3.svg",
  },
  {
    id: "visualisation",
    title: "Visualisation",
    tools: "Power BI, Metabase, Tableau",
    icon: "/assets/technicalPortfolio/stack4.svg",
  },
  {
    id: "cloud",
    title: "Cloud",
    tools: "AWS, GCP",
    icon: "/assets/technicalPortfolio/stack5.svg",
  },
];

function StackCard({ item }) {
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
      className="  flex flex-col  transition-all duration-700 ease-out"
    >
      <div className="w-[11.524027937037424%] md:w-[6.354860948423824%] 2xl:w-[5%]  mb-2 lg:mb-[21px] h-auto ">
        <Image src={item.icon} alt={item.title} width={25} height={25} className='w-full h-auto object-contain' />
      </div>
      <h3 className="font-bold heading3 text-white lg:leading-[1] lg:mb-2 2xl:mb-[14px]">
        {item.title}
      </h3>
      <p className="p2 text-white">
        {item.tools}
      </p>
    </motion.div>
  );
}

export default function TechnicalStack() {
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
    <section ref={sectref} className="relative w-full bg-primary ">

      <div className="relative z-10 p-[10%] lg:py-[5%] flex flex-col gap-5 lg:gap-10 lg:grid lg:grid-cols-2 xl:gap-[43px]">
        {/* Header */}
        <div className="flex flex-col gap-20 xl:gap-28 relative lg:grid 2xl:grid-rows-[1fr_3.45fr]  ">

          <div className="flex flex-col lg:sticky lg:top-[150px] relative z-10 xl:max-w-[71.66549298634357%]">
            <h2 className="font-bold heading2 text-white ">
              Our technical stack
            </h2>
            <p className="p2 text-white">
              While we are technology-agnostic, we have deep expertise in a core set of modern, scalable tools.
            </p>
          </div>

          {/* scroll linked circles */}
          <div className="absolute inset-0 z-2 h-full hidden lg:inline-block grow-1">
              <motion.div style={{ scale: scale1, rotate: rotate1 }} className=" relative w-[36.54742017909568%] aspect-square mt-[calc(max(0.5px,0.1100264*(100vw-0px)))]  absolute top-0 right-0">
                <Image src='/assets/RotatingCircles.svg' alt='circle' width={100} height={100} className='w-full h-full aspect-square'/>
              </motion.div>

              <motion.div style={{ scale: scale2, rotate: rotate2 }} className="  absolute top-0 right-0 w-[64.09947054361706%] aspect-square mr-[calc(max(0.5px,0.1206003*(100vw-0px)))] mt-[calc(max(0.5px,0.2046244*(100vw-0px)))]">
                 <Image src='/assets/RotatingCircles.svg' alt='circle' width={100} height={100} className='w-full h-full aspect-square'/>
              </motion.div>
              {/* logo mark */}
              <div className="w-[62.03395565373863%] mb-[calc(max(0.5px,0.0283085 *(100vw-0px)))] absolute  left-0 bottom-0">
                <LogoMark fill='#0c0054' />
              </div>
            
          </div>

        </div>

      
        <div className="grid grid-cols-2 gap-4 lg:gap-[30px] 2xl:gap-[64px] lg:flex lg:flex-col ">
          {STACK.map((item) => (
            <StackCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}