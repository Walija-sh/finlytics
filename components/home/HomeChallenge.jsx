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
            <motion.div style={{ y:isDesktop ? lgY : smY }} className="absolute  w-[30.074711892305125%] lg:w-[39.14601247257567%]  bottom-[10%] right-0 flex items-center justify-end">
              <Image
                src="/assets/home/challenge-illustration.png"
                alt="AI data engineering visualization"
                
                className="object-contain w-full h-auto "
                width={542}
                height={687}
              />
            </motion.div>

      <div className="relative z-10  mx-auto py-[10%] pl-[10%]">
        {/* top */}
        <div className="mb-2 lg:mb-10 xl:mb-14 text-white  pr-[10%]">
          <div className=" w-full md:max-w-[62%] ">
 <h2 className=" font-bold heading2  mb-2 xl:mb-[17px] 2xl:mb-[40px]">
                The challenge you face
              </h2>

              <p className="p2   mb-[18px] xl:mb-[27px] 2xl:mb-[40px]">
                Enterprises are caught in a paradox: risk and compliance teams
                demand bulletproof governance, while business and data teams
                demand velocity.
              </p>

              <p className="p2 font-bold  mb-[18px] 2xl:mb-[40px]">
                Traditional consultancies understand risk but can't build.
                Technology vendors can build but don't understand your domain's
                complexity.
              </p>

              <p className="p2">
                The result? Projects that never reach production, data platforms
                nobody trusts, and millions spent on "digital transformation"
                that doesn't transform the bottom line.
              </p>
          </div>
             
            </div>
         {/* bottom card */}
         
            <div className=" bg-black/30 backdrop-blur-[20px] p-[10px] md:p-[25px] lg:p-[26px] xl:py-[33px] md:flex items-center md:justify-between rounded-tl-xl rounded-bl-xl md:gap-8">
            <div className="w-full max-w-[86.74696787951483%] md:max-w-[72%] lg:max-w-[66.88368055555556%] xl:max-w-[70%]  ml-[12px] md:ml-[32px] lg:ml-[53px] xl:ml-[63px] 2xl:ml-[max(0.5px,0.0425476*(100vw-0px))] text-white ">

              {/* Card header */}
              <div className="flex items-center gap-[12px] mb-1.5 xl:mb-[11px]">
                {/* LogoMark badge */}
                <div className="flex-shrink-0 w-10 md:w-[26px] lg:w-11 2xl:w-[91.23px] h-auto relative">
                    <Image src='/assets/finlytics-white.avif' alt='logomark' width={53} height={60} className="object-contain w-full h-full"/>
                  
                </div>
                <h3 className="font-bold span2 uppercase">
                  We Bridge Both Worlds
                </h3>
              </div>

              {/* Card body */}
              <p className=" p2">
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