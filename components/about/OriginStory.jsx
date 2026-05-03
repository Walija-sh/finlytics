"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import LogoMark from '../common/LogoMark';
import VideoLogo from "../common/VideoLogo";

export default function OriginStory() {
  const ref = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const lgY = useTransform(scrollYProgress, [0, 1], ["-14%", "20%"]);
  const smY = useTransform(scrollYProgress, [0, 1], ["-15rem", "8rem"]);

  return (
    <section ref={ref} className="relative w-full bg-gradient-to-b from-primary  to-blue-3 overflow-hidden p-[10%] pt-[5%] grid gap-5 md:gap-[22px] md:grid-cols-[1.79998874864829fr_1.2000057354476736fr] lg:gap-[30px]">
     
      <div
      
        className=" flex items-center justify-end z-1 md:order-2 w-[42.408899593351215%] md:w-[83.3870072947138%] lg:w-[66.4645369652501%] md:mx-auto"
      >
        <VideoLogo/>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto text-white md:order-1 grid gap-2 md:gap-5 lg:gap-[22px]">
          {/* Heading */}
          <h2 className="font-bold heading2  leading-[1] ">
            Our origin story
          </h2>
          {/* Paragraph 1 */}
          <p className=" span2  ">
            Finlytics Hub was founded on a simple observation:{" "}
            <span className="font-bold text-white">
              the best solutions emerge when deep domain expertise is fused with
              hands-on technical capability.
            </span>
          </p>
          {/* Paragraph 2 */}
          <p className=" p2 ">
            Our founding team has not only advised on but has actively built and
            scaled a national credit bureau from the ground up—processing
            millions of records weekly, achieving industry-leading Gini scores
            of 0.85, and implementing robust data privacy and governance
            frameworks.
          </p>
          {/* Paragraph 3 */}
          <p className=" p2 ">
            We have presented in boardrooms to regulators and debugged dbt
            models in terminals at 2 AM.
            <br />
            This dual perspective is the foundation of our firm and shapes
            everything we do.
          </p>
       
      </div>
    </section>
  );
}