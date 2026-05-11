'use client';

import { useRef} from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { BsArrowRightShort, BsArrowRightCircleFill } from 'react-icons/bs';
import Link from 'next/link';

const FEATURED_RESOURCES = [
  {
    id: 'zero-to-bureau',
    title: 'From zero to bureau score',
    description: 'How we built a national credit scoring system with a Gini of 0.85 from fragmented data sources.',
    buttonText: 'Read Case Study',
    buttonLink: '/technical-portfolio',
  },
  {
    id: 'challenger-model',
    title: 'The challenger model playbook',
    description: 'A step-by-step guide to shipping a challenger model in under 30 days.',
    buttonText: 'Download Guide',
    buttonLink: '#',
  },
  {
    id: 'event-sourcing',
    title: 'Event-sourcing for risk decisions',
    description: 'Architectural patterns for real-time decisioning with full auditability.',
    buttonText: 'View Technical Brief',
    buttonLink: '/insights',
  },
];

function ResourceCard({ item, index }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'start 30%'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="rounded-[13px] border border-white bg-primary p-4 xl:p-5.5 xl:py-10.5 2xl:p-[max(0.5px,0.0156249*(100vw-17px))]  2xl:pt-[max(0.5px,0.0312503*(100vw-17px))]  flex flex-col  transition-all duration-700 ease-out lg:grid lg:grid-rows-[auto_auto_auto]  " >
      <h3 className="font-bold heading3 2xl:text-[40px]! text-white mb-2 xl:mb-[19px]">
        {item.title}
      </h3>
      <p className="p2v2 mb-4 xl:mb-12.5 2xl:mt-[13px] 2xl:mb-18">
        {item.description}
      </p>
      <Link
        href={item.buttonLink}
        className="inline-flex items-center justify-center gap-2 text-[14px] lg:text-[18px] font-medium text-white/90 hover:text-white transition-colors group w-fit py-2"
      >
        <span>{item.buttonText}</span>
        <span className="inline-block rounded-full border border-secondary w-6 aspect-square flex items-center justify-center text-secondary relative overflow-hidden">
          <BsArrowRightShort className="text-[26px] -translate-y-[1px] -translate-x-[1px] group-hover:translate-x-full transition-all duration-300 group-hover:scale-50" />
          <BsArrowRightCircleFill className="text-[26px] absolute inset-[-1px] text-secondary scale-0 group-hover:scale-100 transition-all origin-left duration-300" />
        </span>
      </Link>
    </motion.div>
  );
}

export default function FeaturedResources() {



  return (
    <section
      
      className="relative w-full bg-primary overflow-hidden"
    >
     

      <div className="relative z-10 mx-auto p-[10%] xl:pt-[5%] xl:pb-[2%] ">
          {/* Header */}
            <h2 className="font-bold heading2 text-white mb-2 xl:mb-12.5 2xl:mb-[79px]">
              Featured Resources
            </h2>
         

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3  gap-4 md:gap-6 xl:gap-11 2xl:gap-[79px]">
            {FEATURED_RESOURCES.map((item, i) => (
              <ResourceCard key={item.id} item={item} index={i} />
            ))}
          </div>
        
      </div>
    </section>
  );
}