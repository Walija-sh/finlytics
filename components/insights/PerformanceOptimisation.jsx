"use client"
import InsightsHeader from './InsightsHeader'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { powerBiData } from './InsightsData'

const TipCard = ({ tip, index }) => {
  const cardRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start 50%"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div 
      ref={cardRef}
      style={{ opacity }}
      className="border-b border-secondary"
    >
      <h3 className='span4 font-bold mb-[5px] lg:mb-[10px]'>
        {index}. {tip.title}
      </h3>
      <p className='span5 mb-[6.96875px] md:mb-[10px]'>
        {tip.description}
      </p>
    </motion.div>
  )
}



const PerformanceOptimisation = () => {
  return (
    <section className={`bg-blue-2 text-white px-[10%] py-[5%] md:py-[2.5%] grid gap-[max(0.5px,0.0266667*(100vw-0px))]`}>
         <InsightsHeader 
        title='
Power BI Performance Optimisation'
        description='
The principle that fast dashboards are a sign of a well-designed data model is central to our BI work. Our approach to building high-performance Power BI solutions follows ten core commandments.'
        
      />
      <div className="grid gap-[10px] lg:gap-[30px]  text-white">
         {powerBiData.map((tip, index) => (
          <TipCard 
            key={tip.id} 
            tip={tip} 
            index={index + 1}
          />
        ))}
      </div>
    </section>
  )
}

export default PerformanceOptimisation