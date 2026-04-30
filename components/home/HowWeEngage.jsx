'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import LogoMark from '../common/LogoMark';

const ENGAGEMENT_STEPS = [
  {
    id: 'discovery',
    title: 'Discovery & roadmap',
    description: 'A rapid assessment of your current state, pain points, and highest-impact opportunities. We map your decisions, data, models, and systems.',
    deliverable: 'A prioritised 90-day roadmap with clear quick wins.',
  },
  {
    id: 'proof',
    title: 'Proof of value',
    description: 'We build the smallest functional slice that proves the business case—a challenger model, a critical data pipeline, a decisioning application. Real code, real data, real results.',
    deliverable: 'A working solution in a production environment and an adoption playbook.',
  },
  {
    id: 'scale',
    title: 'Scale & sustain',
    description: 'We expand successful pilots across new segments, products, and regions, building your team\'s capabilities to create independence, not dependency.',
    deliverable: 'Full implementation with monitoring, runbooks, and comprehensive knowledge transfer.',
  },
];

const AccordionIcon = ({ isOpen ,className=''}) => (
  <svg
    viewBox="0 0 16 11"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} ${className}`}
    fill="currentColor"
  >
    <path d="M0.191928 1.49603L1.47573 0.198644C1.53857 0.135675 1.61321 0.0857166 1.69539 0.0516304C1.77756 0.0175441 1.86565 0 1.95461 0C2.04357 0 2.13166 0.0175441 2.21383 0.0516304C2.296 0.0857166 2.37065 0.135675 2.43349 0.198644L7.99662 5.81612L13.5598 0.198644C13.6226 0.135675 13.6972 0.0857166 13.7794 0.0516304C13.8616 0.0175441 13.9497 0 14.0386 0C14.1276 0 14.2157 0.0175441 14.2979 0.0516304C14.38 0.0857166 14.4547 0.135675 14.5175 0.198644L15.8013 1.49603C16.0662 1.76094 16.0662 2.20246 15.8013 2.46737L8.4789 9.8713C8.41606 9.93427 8.34141 9.98423 8.25924 10.0183C8.17707 10.0524 8.08898 10.07 8.00002 10.07C7.91106 10.07 7.82297 10.0524 7.7408 10.0183C7.65863 9.98423 7.58398 9.93427 7.52114 9.8713L0.198722 2.46737C0.0713654 2.3378 0 2.16338 0 1.9817C0 1.80002 0.0713654 1.6256 0.198722 1.49603H0.191928Z" />
  </svg>
);



function AccordionItem({ item, isOpen, onToggle, index }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-secondary ">
      <button
        onClick={() => onToggle(item.id)}
        className="w-full flex justify-between cursor-pointer items-center py-2 text-left group"
        aria-expanded={isOpen}
      >
        <h3 className=" text-[18px] md:text-[20px] lg:text-[25px] text-white group-hover:text-secondary transition-colors">
          {item.title}
        </h3>
        <div className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors `}>
          <AccordionIcon isOpen={isOpen} className='stroke-secondary fill-secondary group-hover:stroke-blue-3 group-hover:fill-blue-3' />
        </div>
      </button>

      <motion.div
        animate={{ height }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div ref={contentRef} className="pb-5  space-y-5">
          <p className="text-[14px] md:text-[16px] lg:text-[18px] text-white">
            {item.description}
          </p>
          <div>
            <h4 className=" text-[16px] lg:text-[18px]  text-secondary mb-1">
              Deliverable
            </h4>
            <p className="text-[13.0133px] md:text-[16px] lg:text-[18px] text-white">
              {item.deliverable}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function HowWeEngage() {
  const [openId, setOpenId] = useState(null);
  const sectionRef = useRef(null);
  

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-90%', '85%']);

  const handleToggle = (id) => {
    if (openId === id) {
      
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-linear-180 from-blue-3 to-primary overflow-hidden"
    >
    
      {/* Illustration */}
                  <motion.div style={{ y }} className="absolute hidden lg:inline-block  w-full max-w-[163px]  aspect-[1.3380667663178873] top-[50%]
                  translate-y-[-50%] right-0 flex items-center justify-end">
                    <Image
                      src="/assets/home/challenge-illustration.png"
                      alt="AI data engineering visualization"
                      
                      className="object-contain "
                      width={542}
                      height={687}
                    />
                  </motion.div>
     

      <div className="relative z-10 mx-auto p-[10%] ">
        <div className="max-w-[841px] ">
          {/* Header */}
          <div className="mb-8 flex flex-col gap-1">
            <div className="w-[24px] h-auto">

            <LogoMark className='w-full' fill='#ff914d'/>
            </div>
            <h2 className="font-bold text-[16.2667px] md:text-[25px] lg:text-[30px]">
              How we engage
            </h2>
            
          </div>

          {/* Accordion */}
          <div className="max-w-[841px] ">
            {ENGAGEMENT_STEPS.map((step, idx) => (
              <AccordionItem
                key={step.id}
                item={step}
                isOpen={openId === step.id}
                onToggle={handleToggle}
                index={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}