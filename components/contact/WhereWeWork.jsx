"use client";

import Image from "next/image";
import AnimatedGlobe from "../common/AnimatedGlobe"; 
import Link from "next/link";



export default function WhereWeWork() {


  return (
    <section className="relative w-full bg-primary overflow-hidden px-[10%] py-[5%]">
      
      
      {/* grid */}
      <div className="grid grid-cols-1 md:grid-cols-[0.5999974674576005fr_0.4000025325423995fr] gap-[max(0.5px,0.0209755*(100vw-0px))] md:gap-[max(0.5px,0.005244*(100vw-0px))] items-center">
         <div className="">
            {/* header */}
      <h2 className="text-white heading2 font-bold leading-[1]  mb-[max(0.5px,0.0104877*(100vw-0px))] lg:mb-[15px] capitalize">
        Where we work
      </h2>
      <p className="text-white span2 
      mb-[max(0.5px,0.0209755*(100vw-0px))]
      
      ">
       Global reach, local expertise
      </p>
          <div className="flex flex-col lg:flex-row gap-[max(0.5px,0.0131*(100vw-0px))] md:gap-[max(0.5px,0.0131094*(100vw-0px))] lg:gap-[max(0.5px,0.0131087*(100vw-0px))] md:w-[90%]">
            <div className="w-[9.613940213309299%] md:w-[6.831184356587824%] lg:w-[max(0.5px,0.0219904*(100vw-0px))] h-auto aspect-square shrink-0 mt-[2%] lg:mt-[1%]">
              <Image src="/assets/globalReach.png" alt="Global Reach Icon" width={40} height={40} className="w-full h-auto" />
            </div>
            <div className="flex flex-col ">
              
              <p className="text-[13.6553px] md:text-[18px] lg:text-[14.4px] xl:text-[20.25px] 2xl:text-[26px] text-white">
               We operate a remote-first model, allowing us to serve clients globally. Our primary hubs are in Australia (for APAC) and KSA (for MENA), but we have successfully delivered projects globally.
              </p>
              <br />
              <p className="text-[13.6553px] md:text-[18px] lg:text-[14.4px] xl:text-[20.25px] text-white">
            We are available for on-site workshops and sprints for critical project phases, such as discovery, launch, and training.
              </p>
            </div>
          </div>
         </div>
         
        
       
           {/* Animated Globe */}
         <div className="relative flex items-center justify-center w-full">
            <AnimatedGlobe 
         className="w-full md:w-[89.67026226647717%] lg:w-[83.33141640328931%]"
          perspective={580}
          maxTiltX={16}
          maxTiltY={12}
          transitionDuration={0.5}
          transitionEase="easeOut"
        />
          <Link 
          href='/'
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[52.36654721389747%] md:w-[65.2410288326101%] lg:w-[51.20458449773063%]"
        >
          <Image
            src='/assets/Logo.png'
            alt="FinlyticsHub Logo"
            width={240}
            height={96}
            className="w-full h-auto object-contain"
          />
        </Link>
         </div>
       
      </div>
    </section>
  );
}