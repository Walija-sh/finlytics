"use client";

import { EnterpriseWarehouseIcon, OnChainOffChainIcon, GenAIWorkflowsIcon, EventSourcedIcon, SingleSourceIcon } from "@/components/common/Svg";

function ImpactCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl h-full border text-primary bg-blue-bg  p-4 flex flex-col justify-center   ${className}`}
    >
      {children}
    </div>
  );
}

function StatCard({ stat, label, description, className = "" }) {
  return (
    <ImpactCard className={className}>
      <p className=" font-extrabold font-[arial] text-[25px] leading-none tracking-tight text-blue-2">
        {stat}
      </p>
      <p className="font-bold  text-[13px] md:text-[18px] uppercase leading-tight">
        {label}
      </p>
      <p className=" text-[14px] md:text-[16px] leading-tight">
        {description}
      </p>
    </ImpactCard>
  );
}

function IconCard({ icon: Icon, label, description, direction="col", className = "" }) {
  return (
    <ImpactCard className={` items-center ${direction === "col" ? " gap-2 flex-col" : " gap-4 flex-row"}  ${className}`}>
      <div className={`flex-shrink-0   fill-primary stroke-primary mt-0.5 self-center ${direction === "col" ? " h-auto w-[30px] md:w-[45px] lg:w-[33px]" : " h-[29px] lg:h-[43px] w-auto"} `}>
        <Icon className="w-full h-full" />
      </div>
      <div className="flex flex-col gap-2">
        <p className={` font-bold  text-[13px] ${direction==='col' ? 'md:text-[18px]' : ' md:text-[20px]'} uppercase leading-tight`}>
          {label}
        </p>
        <p className="  text-[14px] md:text-[16px] leading-tight">
          {description}
        </p>
      </div>
    </ImpactCard>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="text-white  span1 tracking-widest uppercase mb-1">
      {children}
    </p>
  );
}

export default function ProvenImpact() {
  return (
    <section className="relative w-full bg-radial from-primary to-blue-2-grad overflow-hidden">
      
      <div className="relative z-10 p-[10%]">
        <h2 className="text-white font-bold heading2 mb-2 md:mb-10">
          Proven Impact
        </h2>

        {/*cards */}
        <div className="flex flex-col lg:grid grid-cols-1  lg:grid-cols-2 lg:grid-row-[auto_1fr_1fr_1fr] gap-2 gap-x-5 ">

            <SectionLabel className="col-span-1">For Risk &amp; Finance Leaders</SectionLabel>

<div className="grid grid-cols-2 gap-2 row-start-2 col-start-1 col-span-1">

             <StatCard
                  stat=">$10M"
                  label={"Annual\nRevenue"}
                  description="National-scale credit scoring programme built and scaled"
                  className="text-center col-span-1"
                />
                <StatCard
                  stat="0.85"
                  label={"Gini\nCoefficient"}
                  description="on a production ML model for corporate credit risk assessment."
                  className="text-center col-span-1"
                />
</div>
              
              
              <IconCard
                icon={EnterpriseWarehouseIcon}
                label={"Enterprise Data\nWarehouse"}
                description="Designed and delivered, processing millions of weekly records from over 50 providers"
                direction="row"
                className="col-span-1 row-start-3"
              />

              <div className="grid grid-cols-2 gap-2 row-start-4 col-start-1 col-span-1">

                <StatCard
                  stat="+12%"
                  label={"Approval\nRate"}
                  description="on previously declined segments using challenger models"
                  className="text-center col-span-1"
                  
                />
                <StatCard
                  stat="95.6%"
                  label={"Data Quality\nIndex"}
                  description="through a fully automated DQ framework"
                  className="text-center col-span-1"
                />
              </div>
          

            <SectionLabel className="row-start-5 lg:col-span-2 lg:row-start-1">For Data &amp; Technology Leaders</SectionLabel>
  <StatCard
                stat="90 min→15 min"
                label={"Reduction in\nDecision TAT"}
                description="via an event-streaming architecture"
                className="text-center items-center row-start-2 col-start-2 "
              />
<div className="grid grid-cols-2 gap-2 row-start-6  lg:row-start-3 lg:col-start-2 col-span-1">

                <IconCard
                  icon={SingleSourceIcon}
                  label={"Single Source\nof Truth"}
                  description="datasets delivered, fully audited to the General Ledger"
                  className="col-span-1 text-center"
                  
                />
                <IconCard
                  icon={EventSourcedIcon}
                  label={"Event-Sourced\nAnalytics Platforms"}
                  description="built with dbt, ClickHouse and realtime processing"
                  className="col-span-1 text-center"
                />
             
</div>
<div className="grid grid-cols-2 gap-2 row-start-7 lg:row-start-4 lg:col-start-2 col-span-1">
     <IconCard
                  icon={GenAIWorkflowsIcon}
                  label={"Generative AI\nWorkflows"}
                  description="deployed for trading and research, optimised for cost and latency"
                  className="col-span-1 text-center"
                />
                <IconCard
                  icon={OnChainOffChainIcon}
                  label={"Onchain/Offchain\nData Integration"}
                  description="for protocol risk and investor reporting"
                  className="col-span-1 text-center"
                />
</div>
            


               
              
         

        </div>
      </div>
    </section>
  );
}