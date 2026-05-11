'use client';

import Button from '@/components/common/Button';
import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";



function SolutionCard({ item, index }) {
  return (
    <div className="group cursor-pointer md:p-[20px] md:rounded-[13px] md:border md:border-white lg:p-0 lg:rounded-none lg:border-0">
      <Link href={item.link} className="flex items-center justify-between xl:justify-center gap-[10px] border-b border-white p-2">
        <span className="text-white text-[14px] md:text-[16px] 2xl:text-[18px] font-medium lg:text-center">
          {item.title}
        </span>
        <div
          
          className="inline-flex items-center gap-2 text-white transition-colors group-hover:gap-3"
        >
          <span className="rounded-full border border-secondary w-6 aspect-square flex items-center justify-center text-secondary relative overflow-hidden">
            <BsArrowRightShort className='text-[26px] -translate-y-[1px] -translate-x-[1px] group-hover:translate-x-full transition-all duration-300 group-hover:scale-50'/>
            <BsArrowRightCircleFill className='text-[26px] absolute inset-[-1px] text-secondary scale-0 group-hover:scale-100 transition-all origin-left duration-300'/>
          </span>
        </div>
      </Link>
    </div>
  );
}

export default function CTA({ 
  overlayOpacity = 'opacity-60',
  content = {
    heading: "Scale faster with data",
    description: "We help you build systems that actually work.",
    button: {
      text: "Get Started",
      link: "/contact"
    }
  },
  solutionHeader="Or explore our solutions:",
  solutions 
}) {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start 50%", "end 70%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={scrollRef}
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: "url('/assets/bg/cta-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className={`absolute inset-0 z-0 bg-primary ${overlayOpacity} pointer-events-none`} />

      <div className="relative z-10 p-[10%] xl:pt-[5%]">
        <div className="border 2xl:border-2 border-white p-5 md:p-8 lg:p-10 xl:p-14.5 2xl:p-[max(0.5px,0.0419507*(100vw-0px))] bg-primary/30 backdrop-blur-[20px] rounded-lg 2xl:rounded-[26px]">
          <div className="flex flex-col items-center text-center md:w-[73.046875%] mx-auto">
            {/* Heading */}
            <h2 className="font-bold heading2v2  md:leading-[1]  text-white mb-2.5 ">
              {content.heading}
            </h2>
            {/* Description */}
            <p className="text-white p3 mb-11 2xl:mb-[80px]">
              {content.description}
            </p>
            {/* Button */}
            <Button href={content.button.link} variant="primary" className=' leading-[1]'>
              {content.button.text}
            </Button>
          </div>
          
          {/* optional solution links */}
          {solutions && solutions.length > 0 && (
            <div 
               
              className="mt-5 md:mt-10 lg:mt-[44px] 2xl:mt-[80px]"
            >
              <p className="text-white p2 mb-5 lg:mb-[15px] xl:mb-[30px] 2xl:mb-[53px] text-center">
                {solutionHeader}
              </p>
              <motion.div style={{ opacity }} className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10 xl:gap-[71px] lg:items-end">
                {solutions.map((solution, i) => (
                  <SolutionCard key={solution.id} item={solution} index={i} />
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}