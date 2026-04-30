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
    buttonLink: '#',
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
    buttonLink: '#',
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
      className="rounded-[13px] border border-white bg-primary p-4 xl:p-6 xl:py-10 flex flex-col gap-2 transition-all duration-700 ease-out lg:grid lg:grid-rows-[auto_auto_auto] lg:gap-4 " >
      <h3 className="font-bold text-[14.64px] md:text-[20px] text-white ">
        {item.title}
      </h3>
      <p className="text-[12px] md:text-[16px] lg:text-[18px]">
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
     

      <div className="relative z-10 mx-auto p-[10%] ">
          {/* Header */}
            <h2 className="font-bold text-[16.2667px] md:text-[25px] lg:text-[30px] text-white mb-2">
              Featured Resources
            </h2>
         

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3  gap-4 md:gap-6">
            {FEATURED_RESOURCES.map((item, i) => (
              <ResourceCard key={item.id} item={item} index={i} />
            ))}
          </div>
        
      </div>
    </section>
  );
}