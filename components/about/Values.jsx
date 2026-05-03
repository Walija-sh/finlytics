"use client";

import { useRef,useState,useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

const values = [
  {
    id: 1,
    title: "Intellectual honesty",
    description: "We will tell you if AI/ML is not the right solution for your problem. We will recommend a simple business rule over a complex model when it's the more effective and pragmatic choice.",
    icon: "/assets/about/values1.svg",
    className:"md:row-start-1 md:col-start-1"
  },
  {
    id: 2,
    title: "Pragmatic innovation",
    description: "We use cutting-edge technology when it adds measurable value and proven patterns when they are the right tool for the job. We have no technology religion.",
    icon: "/assets/about/values2.svg",
     className:"md:row-start-2 md:col-start-2"
  },
  {
    id: 3,
    title: "Transparent delivery",
    description: "You can expect weekly demonstrations of working software and clear, comprehensive reporting. No surprises, just honest communication at every stage.",
    icon: "/assets/about/values3.svg",
    className:"md:row-start-3 md:col-start-3"
  },
  {
    id: 4,
    title: "Sustainable solutions",
    description: "We build solutions that last. Every project includes knowledge transfer, documentation, and internal capability building to ensure long-term success.",
    icon: "/assets/about/values4.svg",
    className:"md:row-start-4 md:col-start-4"
  },
];

function ValueCard({ item, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 30%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
 const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const media = window.matchMedia("(max-width: 767px)");

  const handleChange = () => setIsMobile(media.matches);

  handleChange(); 
  media.addEventListener("change", handleChange);

  return () => media.removeEventListener("change", handleChange);
}, []);

  return (
    <motion.div
      ref={ref}
     style={{ opacity: isMobile ? opacity : 1 }}
      className={`flex flex-col md:col-span-1 md:sticky top-[150px] ${item.className}`}
    >
      {/* Icon */}
      <div className="w-[9.615384615384615%] md:w-[13.628039691665602%] h-auto  relative mb-1">
        <Image
          src={item.icon}
          alt={item.title}
          width={30}
          height={32}
          className="object-contain"
        />
      </div>
      
      {/* Title */}
      <h3 className="text-white font-bold heading3">
        {item.title}
      </h3>
      
      {/* Description */}
      <p className="text-white p2">
        {item.description}
      </p>
    </motion.div>
  );
}

export default function Values() {

  return (
    <section  className="relative w-full bg-linear-to-b from-primary to-blue-3 py-[5%] px-[10%] ">
        {/* Header */}
          <h2 className="font-bold heading2 text-white mb-2 md:mb-5 lg:mb-[30px]">
            Our values
          </h2>
       

        {/*cards  */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-4 gap-5 lg:gap-y-0 ">
          {values.map((value, idx) => (
            <ValueCard key={value.id} item={value} index={idx} />
          ))}
        </div>
      
    </section>
  );
}