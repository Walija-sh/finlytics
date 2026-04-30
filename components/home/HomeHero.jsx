"use client";
import { motion } from "motion/react";
import LogoMark from "@/components/common/LogoMark";
import Button from "@/components/common/Button";

export default function HomeHero() {
  return (
    <section className="relative w-full min-h-[426px] md:min-h-[776px] lg:min-h-screen overflow-hidden bg-primary flex items-center">
        {/* bg  */}
      <div className="fixed inset-0 z-0 opacity-[0.38]">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        
        >
          <source src="/assets/bg/bg-1.mp4" type="video/mp4" />
        </video>
      </div>
  
      {/* LogoMark*/}
      <div
        className="
          absolute w-[40%] lg:w-[30%] bottom-0 right-[10%] lg:right-0
          pointer-events-none select-none
          z-10
          opacity-100
        "
        aria-hidden="true"
      >
       
        <LogoMark fill="#0c0054" className="w-full h-auto" />
      </div>

      
      <div className="relative z-20 w-full  mx-auto p-[10%]">
        <div className="max-w-2xl flex flex-col gap-6">

          {/* Headline */}
          <h1 className="text-white font-extrabold leading-[1.1] tracking-tight text-[21.333px] md:text-[30px] lg:text-[40px] 2xl:text-[45px]">
            Transform Data Into Decisions
            <br />
            <span className="relative inline-block">
              That Drive 
              <span className="relative "> Revenue

  <span className="absolute left-0 -bottom-2">
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "fit-content" }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.3,
      }}
      className="overflow-hidden"
    >

                <svg

                className=" block  w-auto max-w-[83px] md:max-w-[136px] lg:max-w-[154px] xl:max-w-[210px] h-auto " preserveAspectRatio="xMidYMid meet" data-bbox="0 0.001 182.575 10.187" xmlns="http://www.w3.org/2000/svg" viewBox="0 0.001 182.575 10.187" height="11" width="183" data-type="shape" role="presentation" aria-hidden="true" aria-label="">
    <g>
        <path d="M36.49.974a1.5 1.5 0 0 1-.877 1.93c-.814.306-1.49.582-2.045.828h96.749c4.196 0 8.428-.055 12.676-.11 10.386-.134 20.878-.27 31.233.39 1.359.086 2.836.342 4.117.677 1.219.318 2.473.76 3.238 1.314.203.148.45.357.647.642.203.294.415.766.326 1.348-.089.58-.431.97-.72 1.198a3 3 0 0 1-.877.461c-1.052.367-2.882.536-5.582.536-21.429 0-42.86-.865-64.265-1.728l-.04-.001c-21.428-.864-42.83-1.727-64.235-1.727-.632 0-1.658.034-2.898.075-2.98.099-7.196.238-10.136.046-.46-.03-.91-.07-1.335-.12H1.5a1.5 1.5 0 1 1 0-3h27.369c.116-.399.343-.711.53-.92.31-.346.721-.645 1.159-.91.887-.54 2.208-1.134 4.002-1.807a1.5 1.5 0 0 1 1.93.878m106.146 5.654c10.919.335 21.831.56 32.739.56l.264-.001a18 18 0 0 0-1.603-.181c-10.235-.652-20.543-.519-30.881-.385z" clipRule="evenodd" fillRule="evenodd" fill="#ff914d"></path>
    </g>
</svg>
</motion.div>
</span>
              </span>
          
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-white text-[15.36px] md:text-[20px] lg:text-[24px] 2xl:text-[28.162px] max-w-[632px]">
            Your bridge between risk expertise and modern data engineering
          </p>

          {/* CTA */}
          <div className="pt-2">
            <Button
              href="/our-solutions"
              variant="primary"
             
             
             
            >
              View Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// anim svg in hero