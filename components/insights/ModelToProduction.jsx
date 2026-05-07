"use client"
import Image from 'next/image'
import InsightsHeader from './InsightsHeader'
import { modelToProductionData } from './InsightsData'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const ModelToProductCard=({card})=>{
   const cardRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start 40%"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1 ])
  return(
  <motion.article ref={cardRef}  style={{opacity}} key={card.id} className="border border-white rounded-[13px] 
              py-[calc(max(0.5px,0.0384615*(100vw-17px)))]
              px-[calc(max(0.5px,0.0512821*(100vw-17px)))]
              md:py-[calc(max(0.5px,0.0208112*(100vw-17px)))]
              md:px-[calc(max(0.5px,0.0325521*(100vw-17px)))]
              lg:p-[calc(max(0.5px,0.0208117*(100vw-17px)))]
            ">
              <div className="flex flex-col md:flex-row items-start  mb-[max(0.5px,0.0156087*(100vw-17px))]">
                <Image 
                  src={card.icon} 
                  alt='' 
                  width={50} 
                  height={50} 
                  className='h-auto aspect-square object-contain 
                    w-[7.467257824577779%] 
                    mb-[max(0.5px,0.0195308*(100vw-17px))] 
                    md:w-[max(0.5px,0.0390625*(100vw-17px))] 
                    lg:w-[max(0.5px,0.0256691*(100vw-17px))] 
                    md:mb-0
                    md:mr-[max(0.5px,0.0195313*(100vw-17px))]
                    lg:mr-[max(0.5px,0.0078044*(100vw-17px))]
                    lg:mt-[max(0.5px,0.0046743*(100vw-17px))]
                  '
                />
                <div className="flex flex-col">
                  <h3 className='font-bold p2 whitespace-pre-line'>{card.title}</h3>
                  <p className='p6 text-blue-bg'>{card.subtitle}</p>
                </div>
              </div>
              
              {/* content */}
                  <p className='p6'>{card.description}</p>
              
            </motion.article>
  )
}
const ModelToProduction = () => {
 
  return (
    <section  className='bg-primary text-white px-[10%] py-[5%] md:py-[2.5%] grid  gap-[max(0.5px,0.0266667*(100vw-0px))]'>
        {/* insights Header */}
        <InsightsHeader 
          title="Playbook for Shipping Challenger Models to Production"
          description="Our 8-week framework is designed to get high-performing, compliant models into production quickly and safely."
        />
        
        {/* cards */}
        <div className="grid gap-[max(0.5px,0.0104063*(100vw-0px))] lg:grid-cols-2">
          {modelToProductionData.map((card) => (
            <ModelToProductCard key={card.id} card={card} />
          ))}
        </div>
    </section>
  )
}

export default ModelToProduction