"use client";

import Image from "next/image";
import LogoMark from "@/components/common/LogoMark";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef,useState,useEffect } from "react";

export default function HomeChallenge() {
    const ref = useRef(null);

const { scrollYProgress } = useScroll({
  target: ref,
  offset: ["start end", "end start"],
});
const [isDesktop, setIsDesktop] = useState(false);

useEffect(() => {
  const check = () => setIsDesktop(window.innerWidth >= 1024);

  check(); // run once on mount
  window.addEventListener("resize", check);

  return () => window.removeEventListener("resize", check);
}, []);
const lgY = useTransform(scrollYProgress, [0, 1], ["-14%", "20%"]);
const smY = useTransform(scrollYProgress, [0, 1], ["-15rem", "8rem"]);
  return (
    <section ref={ref} className="relative w-full bg-linear-180 from-primary to-blue-3 overflow-hidden">
   {/* Illustration */}
            <motion.div style={{ y:isDesktop ? lgY : smY }} className="absolute  w-full max-w-[30.074711892305125%] lg:max-w-[39.14601247257567%] aspect-[1.3380667663178873] bottom-[10%] right-0 flex items-center justify-end">
              <Image
                src="/assets/home/challenge-illustration.png"
                alt="AI data engineering visualization"
                
                className="object-contain "
                width={542}
                height={687}
              />
            </motion.div>

      <div className="relative z-10  mx-auto py-[10%] pl-[10%]">
        {/* top */}
        <div className="mb-2 lg:mb-10 text-white text-[13.0133px] md:text-[16px] lg:text-[18px] md:max-w-[62%] pr-[10%]">
              <h2 className=" font-bold text-[16.2667px] md:text-[25px] lg:text-[30px]  mb-2">
                The challenge you face
              </h2>

              <p className="   mb-[18px]">
                Enterprises are caught in a paradox: risk and compliance teams
                demand bulletproof governance, while business and data teams
                demand velocity.
              </p>

              <p className=" font-bold  mb-[18px]">
                Traditional consultancies understand risk but can't build.
                Technology vendors can build but don't understand your domain's
                complexity.
              </p>

              <p className="">
                The result? Projects that never reach production, data platforms
                nobody trusts, and millions spent on "digital transformation"
                that doesn't transform the bottom line.
              </p>
            </div>
         {/* bottom card */}
         
            <div className=" bg-black/30 backdrop-blur-[20px] p-[10px] md:p-[25px] lg:p-[26px] md:flex items-center md:justify-between rounded-tl-xl rounded-bl-xl md:gap-8">
            <div className="w-full max-w-[86.74696787951483%] md:max-w-[72%] lg:max-w-[66.88368055555556%] ml-[12px] md:ml-[32px] lg:ml-[53px] text-white ">

              {/* Card header */}
              <div className="flex items-center mb-1.5">
                {/* LogoMark badge */}
                <div className="flex-shrink-0 w-10 md:w-[26px] lg:w-11 h-auto relative">
                    <Image src='/assets/finlytics-white.avif' alt='logomark' width={53} height={60} className="object-contain"/>
                  
                </div>
                <span className="font-bold text-[13px] md:text-[18px] lg:text-[20px] uppercase">
                  We Bridge Both Worlds
                </span>
              </div>

              {/* Card body */}
              <p className=" text-[13.0133px] md:text-[16px] lg:text-[18px]">
                <span className="font-bold">Finlytics Hub</span>{" "}
                combines deep domain expertise in regulated &amp; data-intensive
                industries with hands-on data engineering and AI/ML capabilities.
                We don't just advise — we build, deploy, and ensure your team
                adopts the solution.
              </p>
            </div>
            <div
              className="relative w-full max-w-[16.177726613404165%] hidden md:inline-block aspect-square"
              aria-hidden="true"
            >
              <LogoMark fill="#0C0054" className="w-full h-auto opacity-60" />
            </div>
            </div>

            
         
        
      </div>
    </section>
  );
}