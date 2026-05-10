"use client"
import React, { useRef } from 'react'
import SubPageSectionHeader from './SubPageSectionHeader'
import Image from 'next/image'
import { motion, time, useScroll, useTransform } from 'motion/react'
import { platformProblemsData } from './data'
import DataPlatformAnimatedImage from './DataPlatformAnimatedImage'

const ProblemCard = ({ 
  card, 
}) => {
  const cardRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start 30%"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  const styles = 'rounded-[13px] p-[max(0.5px,0.0512821*(100vw-17px))] md:p-[max(0.5px,0.0104058*(100vw-17px))] border border-white text-white flex-1 min-w-[250px] lg:min-w-[185px] text-white'

  return (
    <motion.article 
      ref={cardRef} 
      style={{ opacity }} 
      className={styles}
    >

      <h3 className={` font-bold p7`}>
        {card.title}
      </h3>
      
      <p className={` span3`}>
        {card.description}
      </p>
    </motion.article>
  )
}


const Problem = ({title,subtitle,cards,AnimatedComponent = DataPlatformAnimatedImage,}) => {
  return (
    <section className='bg-primary text-white'>
         <SubPageSectionHeader
          title={title}
  subtitle={subtitle}
 
        />
        {/* problems */}
<div className="px-[10%] pb-[5%] pt-[2.5%] grid gap-[max(0.5px,0.051282*(100vw-17px))] md:gap-[max(0.5px,0.0416233*(100vw-17px))] md:grid-cols-[0.9999946670447428fr_1.0000053329552574fr] bg-linear-180 from-primary to-blue-3">
  {/* image */}
  <AnimatedComponent />
  {/* cards */}
  <div className="grid gap-[max(0.5px,0.025641*(100vw-17px))] md:gap-[max(0.5px,0.0062503*(100vw-17px))]">
    {cards.map((card,index)=>(
      <ProblemCard key={index} card={card}/>
    ))}
  </div>
</div>
    </section>
  )
}

export default Problem