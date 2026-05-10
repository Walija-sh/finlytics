"use client";

import Image from "next/image";

// Trust data
const trustItems = [
  {
    icon: "/assets/about/clientTrust1.svg",
    title: "Domain authority",
    body: "We have designed, built, and operated the very systems we now consult on, including national credit scoring programmes, bureau-grade data platforms, and production AI/ML systems at scale.",
  },
  {
    icon: "/assets/about/clientTrust2.svg",
    title: "Technical excellence",
    body: "We don't just recommend — we implement. Our teams write production code, configure cloud infrastructure, build data pipelines, and deploy machine learning models.",
  },
  {
    icon: "/assets/about/clientTrust3.svg",
    title: "Business impact",
    body: "Our work is designed to drive measurable outcomes, such as increased approval rates, reduced decisioning time, improved portfolio performance, and enhanced regulatory compliance.",
  },
];

export default function WhyClientsTrust() {
  return (
    <section className="relative w-full bg-primary overflow-hidden">
      <div className="p-[10%] py-[5%]">

       
      
        <h2 className="text-white heading2 font-bold leading-[1] mb-5 lg:mb-[30px]">
          Why clients trust us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 md:pb-[16px] ">
          {trustItems.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-2.5">
              {/* Icon */}
              <div className="w-[6.4%] md:w-[11.21723865236095%] lg:w-[6.223666112760383%] h-auto ">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={38}
                  height={38}
                  className="w-full h-auto"
                />
              </div>
              {/* Title */}
              <p className="heading3 font-bold text-white">{item.title}</p>
              {/* Body */}
              <p className="p2v2 text-white 2xl:w-[84.86492149638185%] ">{item.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}