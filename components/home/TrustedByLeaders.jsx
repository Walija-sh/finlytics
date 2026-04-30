'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const TRUSTED_CATEGORIES = [
  'BANKS',
  'CREDIT BUREAUS',
  'FINTECHS',
  'DIGITAL LENDERS',
  'PAYMENT PROVIDERS',
  'BLOCKCHAIN PROTOCOLS',
];

function TrustedBadge({ text, index }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'start 50%'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
 

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      
      className="group"
    >
      <div className="rounded-[13px] border border-white  px-6 py-3.5 md:px-8 md:py-4.5 lg:py-6 text-center ">
        <span className="text-[13.0133px] md:text-[16px] lg:text-[18px] text-white uppercase">
          {text}
        </span>
      </div>
    </motion.div>
  );
}

export default function TrustedByLeaders() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 90%', 'start 25%'],
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-primary overflow-hidden  z-10  p-[10%] "
    >
     
        {/* Header */}
        <h2 className="font-bold text-[16.2667px] md:text-[25px] lg:text-[30px] text-white mb-3">
            Trusted by leaders
          </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {TRUSTED_CATEGORIES.map((category, i) => (
            <TrustedBadge key={category} text={category} index={i} />
          ))}
        </div>

        {/* Footer Text */}
       <p className="text-[13.0133px] md:text-[16px] lg:text-[18px] text-white mt-5">Operating across the APAC, MENA, and Global markets with a remote-first delivery model and on-site support where it matters most.</p>
    </section>
  );
}