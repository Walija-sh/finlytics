
"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import InsightsHeader from './InsightsHeader'
import { bestPracticesData, modelsData } from './InsightsData'
import InsightCard from './InsightCard'


const ModelCard = ({ model, className = "" }) => {
  const cardRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start 30%"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.article 
      ref={cardRef} 
      style={{ opacity }} 
      className={`mt-[max(0.5px,0.0002683*(100vw-17px))] flex ${className}`}
    >
      <p className='
        w-[max(0.5px,0.3654046*(100vw-17px))]
        mr-[max(0.5px,0.0051683*(100vw-17px))]
        mt-[max(0.5px,0.0014022*(100vw-17px))]
        md:w-[max(0.5px,0.2180888*(100vw-17px))]
        md:mr-[max(0.5px,0.0051982*(100vw-17px))]
        md:mt-[max(0.5px,0.000651*(100vw-17px))]
        lg:w-[max(0.5px,0.155072*(100vw-17px))]
        lg:mr-[max(0.5px,0.0052031*(100vw-17px))]
        lg:mt-[max(0.5px,0.000415*(100vw-17px))]
        shrink-0
      '>
        {model.prefix}{model.name}
      </p>
      <p>{model.description}</p>
    </motion.article>
  )
}



const BestPractices = () => {
  return (
    <section className={`bg-blue-2 text-white px-[10%] py-[5%] md:py-[2.5%] grid gap-[max(0.5px,0.0266667*(100vw-0px))]`}>
      <InsightsHeader 
        title='Best Practices and Project Structure'
        description={
          <>
          The principle of separating data transformation logic is key to building trust and maintainability. In our <span className="font-bold">dbt</span> projects, we enforce a clear, three-tiered structure.
          </>
        }
        
      />
      <div className="span2 text-white">
        <p>models/</p>
        {/* cards */}
         <div className="grid p6">
          {modelsData.map((model) => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </div>
      
      <div>
       
        <div className="">
          <p className='mb-[max(0.5px,0.0677436*(100vw-0px))] lg:mb-[max(0.5px,0.0104058*(100vw-0px))] span2'>
           Our key principles for dbt:
          </p>
          
        
        {/* cards */}
        <div className='flex flex-wrap gap-[10px] lg:gap-[24px]'>
          {bestPracticesData.map((card) => (
            <InsightCard variant='bordered' key={card.id} card={card} />
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

export default BestPractices