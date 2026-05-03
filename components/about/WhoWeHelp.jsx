"use client";

const primaryIndustries = [
  {
    icon: "/assets/about/industry1.svg",
    title: "Banking & Financial Services",
    desc: "Retail, commercial, and digital-native banks",
  },
  {
    icon: "/assets/about/industry2.svg",
    title: "Non-Bank & FinTech Lenders",
    desc: "BNPL providers, digital lenders, and microfinance institutions",
  },
  {
    icon: "/assets/about/industry3.svg",
    title: "Data & Credit Infrastructure",
    desc: "Credit bureaus, rating agencies, and RegTech providers",
  },
  {
    icon: "/assets/about/industry4.svg",
    title: "Other Regulated Sectors",
    desc: "Insurance, utilities, and telecommunications",
  },
];

const keyRoles = [
  "Chief Data & Analytics Officers (CDO/CDAO)",
  "Chief Risk Officers (CRO) & Heads of Credit",
  "Chief Information & Technology Officers (CIO/CTO)",
  "Heads of Data Engineering & Enterprise Architects",
];

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-[13px] bg-blue-bg text-primary p-10 ${className}`}>
      {children}
    </div>
  );
}

import Image from "next/image";

function IndustryCard({ icon, title, desc }) {
  return (
    <Card className="flex flex-col ">
      
      <div className="w-[14.393048811653463%]  mb-[10px] h-auto relative">
        <Image
          src={icon}
          alt={title}
          width={30}
          height={30}
          className="object-contain"
        />
      </div>

      <p className="font-bold text-[13.6553px] md:text-[18px] lg:text-[14.4px] xl:text-[20.25px] text-blue-2 mb-[10px]">
        {title}
      </p>

      <p className="p6 text-black">
        {desc}
      </p>
    </Card>
  );
}
function RoleCard({ title }) {
  return (
    <Card className=" flex items-center  text-blue-2 lg:px-[44px]">
      <p className="font-semibold text-[13.6553px] md:text-[18px] lg:text-[14.4px] xl:text-[20.25px]">
        {title}
      </p>
    </Card>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="text-white span1 tracking-widest uppercase mb-4 lg:mb-[30px]">
      {children}
    </p>
  );
}

export default function WhoWeHelp() {
  return (
    <section className="relative w-full bg-radial from-primary to-blue-2-grad overflow-hidden">
      <div className="p-[10%]">
        
        {/* Heading */}
        <h2 className="text-white heading2 font-bold lg:mb-[15px] lg:leading-[1] ">
          Who We Help
        </h2>

        <p className="text-white span2 mb-6 lg:mb-[30px] xl:mb-[53px]">
          We partner with data and risk leaders in complex, regulated, or data-intensive industries to solve critical challenges.
        </p>

        {/* INDUSTRIES */}
        <SectionLabel>Primary Industries</SectionLabel>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 mb-5 lg:mb-[30px] lg:gap-6">
          {primaryIndustries.map((item, i) => (
            <IndustryCard key={i} {...item} />
          ))}
        </div>

        {/* ROLES */}
        <SectionLabel>Key Roles We Support</SectionLabel>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 lg:gap-6">
          {keyRoles.map((role, i) => (
            <RoleCard key={i} title={role} />
          ))}
        </div>

      </div>
    </section>
  );
}