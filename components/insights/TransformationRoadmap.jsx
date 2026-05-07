"use client"
import Image from 'next/image'
import InsightsHeader from './InsightsHeader'
import { roadmapData } from './InsightsData'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const RoadmapCard=({card})=>{
   const cardRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start 13%"]
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
              <div className="flex items-center mb-[max(0.5px,0.0252219*(100vw-17px))]">
                <Image 
                  src={card.icon} 
                  alt='' 
                  width={50} 
                  height={50} 
                  className='h-auto aspect-square object-contain 
                    w-[max(0.5px,0.0512821*(100vw-17px))] 
                    md:w-[max(0.5px,0.0390625*(100vw-17px))] 
                    lg:w-[max(0.5px,0.0256691*(100vw-17px))] 
                    mr-[max(0.5px,0.0195313*(100vw-17px))]
                    lg:mr-[max(0.5px,0.0078044*(100vw-17px))]
                  '
                />
                <div className="flex flex-col">
                  <h3 className='font-bold p2 whitespace-pre-line'>{card.title}</h3>
                  <p className='p6 text-blue-bg'>{card.weeks}</p>
                </div>
              </div>
              
              {/* content */}
              <div className="grid gap-[max(0.5px,0.0145113*(100vw-17px))]">
                {card.sections.map((section, idx) => (
                  <div key={idx}>
                    <h4 className='font-bold text-secondary span4'>{section.title}</h4>
                    <p className='p6'>{section.content}</p>
                  </div>
                ))}
              </div>
            </motion.article>
  )
}
const TransformationRoadmap = () => {
 
  return (
    <section  className='bg-primary text-white px-[10%] py-[5%] md:py-[2.5%] grid gap-[max(0.5px,0.0266667*(100vw-0px))]'>
        {/* insights Header */}
        <InsightsHeader 
          title="The 90-Day Data Transformation Roadmap"
          description="We deliver value incrementally to build momentum and ensure alignment. Our standard engagement follows a proven, week-by-week pattern."
        />
        
        {/* cards */}
        <div className="grid gap-y-[max(0.5px,0.0266667*(100vw-0px))] gap-x-[max(0.5px,0.0104063*(100vw-0px))] lg:grid-cols-3">
          {roadmapData.map((card) => (
            <RoadmapCard key={card.id} card={card} />
          ))}
        </div>
    </section>
  )
}

export default TransformationRoadmap