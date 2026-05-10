"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const tabs = [
  {
    id: "experience",
    label: "Professional experience",
    content: [
      {
        title: "Chief Data Officer, Bayan Credit Bureau",
        period: "(2018–2025)",
        bullets: [
          "Led a team of 15+, managing data from 50+ providers and millions of weekly records.",
          "Achieved a 95.6% data quality index through 200+ automated DQ rules.",
          "Delivered a production ML bureau score with a Gini of 0.85 covering all corporate entities.",
          "Implemented a comprehensive AI model to enhance credit scoring accuracy.",
          "Pioneered the use of Generative AI agent workflows for trading and research.",
          "Integrated on-chain and off-chain data for holistic analysis.",
        ],
      },
      {
        title: "Lead Data Scientist, Spectral Labs",
        period: "(2021–Present)",
        bullets: [
          "Designed and built an event-sourced analytics stack using dbt, ClickHouse, and Python.",
          "Shipped production ML models for credit scoring and complex risk assessment.",
          "Pioneered the use of Generative AI agent workflows for trading and research.",
          "Integrated on-chain and off-chain data for holistic analysis.",
        ],
      },
      {
        title: "Credit Ratings Leadership, Equifax Australia",
        period: "(2013–2017)",
        bullets: [
          "Served as lead analyst and committee chair for 100+ entities.",
          "Developed advanced rating methodologies incorporating rigorous stress testing.",
          "Gained deep sector expertise in telco, utilities, property, transport, and construction.",
        ],
      },
    ],
  },
  {
    id: "credentials",
    label: "Professional credentials",
    content: [
      {
        items: [
          { label: "Finance & Risk:", value: "FCA (ICAP), FCMA (CIMA), CPA (Aus)" },
          { label: "Data & AI/ML:", value: "Chief Data Officer, Lead Data Scientist, PGD in ML and AI" },
          { label: "Domain Expertise:", value: "Credit risk, data governance, data engineering, analytics, AI/ML" },
        ],
      },
    ],
  },
  {
  id: "technical",
  label: "Technical depth",
  content: [
    {
      description: "Equally comfortable presenting to executive committees and writing production-ready code.",
      items: [
        { label: "Languages:", value: "Python, SQL, Elixir" },
        { label: "Data Platforms:", value: "dbt, ClickHouse, Alteryx, Dataiku" },
        { label: "AI/ML:", value: "Scikit-learn, XGBoost, PyTorch, LangChain, OpenAI, Hugging Face" },
        { label: "BI Tools:", value: "Power BI, Metabase, Tableau" },
        { label: "Engineering:", value: "Event streaming, CDC, feature stores, CI/CD, MLOps" },
      ],
    },
  ],
},
];

export default function Leadership() {
  const [activeTab, setActiveTab] = useState("experience");

  const currentTab = tabs.find((t) => t.id === activeTab);

  return (
    <section className="relative w-full bg-primary text-white  p-[10%] lg:py-[5%] overflow-hidden">
      <div className=" mx-auto">
        
        <div className="grid grid-cols-1  gap-4 lg:gap-12 2xl:gap-[53px]">
          
         
          <div className="text-white">
            <h2 className="heading2 font-bold mb-3 2xl:mb-[53px]">
              Leadership &amp; expertise
            </h2>
            <p className=" heading3">
              Asad Mumtaz
            </p>
            <p className="p2 text-secondary 2xl:mb-4">
              Founder &amp; Principal Consultant
            </p>
            <p className=" p2v2 ">
              A rare blend of financial domain expert and data leader who has operated at the
              intersection of risk, data, and technology for over 15 years.
            </p>
          </div>

          
          <div>
        {/* Tab Headers */}
<div className="border-b border-white bg-white rounded-t-[5px]">
  <div className="flex flex-wrap  gap-[5px] md:gap-0 w-full text-center">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        className={`p-[14px] md:px-[45px] grow text-[18px] lg:text-[20px] font-medium whitespace-nowrap border-b-2 transition-all duration-300 cursor-pointer  ${
          activeTab === tab.id
            ? "border-secondary text-secondary"
            : "border-transparent text-primary hover:text-secondary hover:border-secondary"
        }`}
      >
        {tab.label}
      </button>
    ))}
  </div>
</div>

            {/* Tab Content with animation */}
              <div
                key={activeTab}
               
                className={`bg-[#E3EAF4] py-10 px-5 md:px-10 rounded-b-[5px] ${activeTab === "experience"?"md:grid-cols-3 grid gap-10":""} `}
              >
                {activeTab === "experience" &&
                  currentTab?.content.map((item, idx) => (
                    <div key={idx} className="">
                      <span className=" w-[4.348490767950264%] aspect-square rounded-full bg-secondary flex items-center justify-center mb-1 lg:mb-2.5">
                        <span className="inline-block aspect-square rounded-full bg-white w-[50%]"></span>
                      </span>
                      
                      <div className="mb-[18px] lg:mb-[31px]">
                        <h3 className="font-bold text-primary span3 leading-[1]">
                          {item.title}
                        </h3>
                        <p className="font-semibold text-primary span3">
                          {item.period}
                        </p>
                      </div>
                      
                      {/* Bullet points */}
                      <ul className="pl-[24px] list-disc ">

                        {item.bullets.map((b, i) => (
                          <li key={i} className=" text-primary span3">
                           
                            {b}
                          </li>
                        ))}
                      </ul>
                      
                      
                    </div>
                  ))}
                
                {(activeTab === "credentials" || activeTab === "technical") &&
  currentTab?.content[0]?.description && (
     <p className="span3 font-bold text-primary mb-[18px] lg:mb-[34px]">{currentTab.content[0].description}</p>
  )}

                {(activeTab === "credentials" || activeTab === "technical") &&
                  currentTab?.content[0]?.items?.map((item, i) => (
                    <ul key={i} className="ml-[24px] lg:ml-[36px] list-disc  text-primary span3 mb-1  ">
                     
                     <li className="">
                       <span className="font-bold span3  ">
                        {item.label}
                      </span>
                      <span className="span3">{item.value}</span>
                     </li>
                    </ul>
                  ))}
              </div>
           
          </div>
        </div>
      </div>
    </section>
  );
}