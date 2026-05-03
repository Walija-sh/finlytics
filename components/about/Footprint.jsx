"use client";

import Image from "next/image";
import Link from "next/link";


function SectionLabel({ children }) {
  return (
    <p className="text-white span1  uppercase ">
      {children}
    </p>
  );
}

export default function OurFootprint() {
  return (
    <section className="relative w-full bg-primary overflow-hidden px-[10%] py-[5%]">
        {/* header */}
        <h2 className="text-white heading2 font-bold leading-[1] mb-1 lg:mb-[15px] ">
          Our Footprint
        </h2>
        <p className="text-white span2 mb-4 lg:mb-[36px] xl:mb-[77px]">
          Geographic Presence
        </p>
        {/*grid */}
        <div className="grid grid-cols-1 md:grid-cols-[0.39998917765794867fr_0.6000108223420513fr] gap-[4px] items-center ">

          {/* Globe */}
          <div className="flex  items-center relative ">
            <div className=" aspect-square relative w-[63.834635416666664%] md:w-[89.67026226647717%]  lg:w-[83.33673556915899%]">
              <Image
                src="/assets/about/globe.avif"
                alt="Global presence globe"
                fill
                className="object-contain"
              />
            </div>
            <Link href='/' className="inline-block   w-[69.61119088160545%] md:w-[65.2410288326101%] lg:w-[51.20458449773063%] absolute top-[50%] translate-y-[-50%] ml-[15%] ">
               <Image
                src="/assets/Logo.png"
                alt="FinlyticsHub Logo"
                width={240}
                height={96}
                className=" w-full h-auto object-contain"
                
              />
            </Link>
          </div>

          {/* Info items */}
          <div className="flex flex-col gap-8 lg:w-[79.33021934459435%] ">
            {/* Global Reach */}
            <div className="flex flex-row gap-[11px]">

              <div className="w-[max(0.5px,calc(0.0209754*100vw))] h-auto aspect-square shrink-0  mt-[2%] lg:mt-[1%]">

              <Image src="/assets/about/globalReach.png" alt="Global Reach Icon" width={40} height={40} className="w-full h-auto" />
              </div>
              <div className="flex flex-col gap-[7px]">
                <SectionLabel>Global Reach</SectionLabel>
              <p className="text-[13.6553px] md:text-[18px] lg:text-[14.4px] xl:text-[20.25px] text-white">
                We have successfully delivered projects globally through our remote-first model,
                with on-site sprints for critical project phases
              </p>
              </div>
            <div >

            </div>
            </div>
           {/* Primary Hubs */}
            <div className="flex flex-row gap-[11px]">
              
               <div className="w-[max(0.5px,calc(0.0209754*100vw))] h-auto aspect-square shrink-0 mt-[2%] lg:mt-[1%] ">

              <Image src="/assets/about/primaryHub.png" alt="Global Reach Icon" width={40} height={40} className="w-full h-auto" />
              </div>

              <div className="flex flex-col gap-[7px]">
                <SectionLabel>Primary Hubs</SectionLabel>
              <p className="text-[13.6553px] md:text-[18px] lg:text-[14.4px] xl:text-[20.25px] text-white">
                Australia (APAC)
                <br />
                KSA (MENA)
              </p>
              </div>
            <div>
             
            </div>
            </div>
            </div>
            </div>
     
      
    </section>
  );
}