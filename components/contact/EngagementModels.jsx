"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'

const engagementModelData = [
    {
      id: 1,
      icon: '/assets/RotatingCircles.svg',
      bg:"/assets/bg/patternBg1.avif",
      title: 'Project-Based',
      description: 'A fixed scope, timeline, and price for a specific outcome, such as deploying a challenger model or building a data warehouse.'
    },
    {
      id: 2,
      icon: '/assets/retainerBased.svg',
       bg:"/assets/bg/patternBg2.avif",
      title: 'Retainer-Based',
      description: 'Ongoing access to our expertise for continuous improvement, strategic advisory, or fractional leadership roles (e.g., CDO, Head of Risk).'
    },
    {
      id: 3,
      icon: '/assets/teamAugmentation.svg',
       bg:"/assets/bg/patternBg1.avif",
      title: 'Team Augmentation',
      description: 'We can embed our specialists within your team to fill a capability gap or accelerate a critical project.'
    }
  ]
const EngagementModelCard = ({ 
  card, 
  optionalIconWidth = null,
  textColor = false,
  showIcon = true 
}) => {
  const cardRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start 30%"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])


  const styles = 'rounded-[13px] p-[max(0.5px,0.0520846*(100vw-17px))] md:p-[max(0.5px,0.0520833*(100vw-17px))] lg:p-[max(0.5px,0.0208117*(100vw-17px))] border border-white text-white  bg-center bg-cover bg-norepeat '

  return (
    <motion.article 
      ref={cardRef} 
      style={{ opacity ,backgroundImage:`url(${card.bg})`}} 
      className={styles}
      
    >
     
      {showIcon && card.icon && (
        <Image 
          alt='' 
          src={card.icon} 
          width={50} 
          height={50} 
          className={`w-[22.98544307517486%] md:w-[13.927425058484305%] lg:w-[22.98544307517486%] mb-[max(0.5px,0.010666*(100vw-17px))]`}
        />
      )}
      
      <h3 className={`${styles.titleColor} mb-[max(0.5px,0.0089953*(100vw-17px))] font-bold heading4`}>
        {card.title}
      </h3>
      
      <p className={`${styles.descriptionColor} span3`}>
        {card.description}
      </p>
    </motion.article>
  )
}


const EngagementModels = () => {
  return (
    <section className='engagementModel-bg relative w-full  overflow-hidden px-[10%] py-[5%] grid gap-[max(0.5px,0.026041*(100vw-17px))]'>
<div className='' >
     <h2 className="text-white heading2 font-bold leading-[1]  mb-[max(0.5px,0.025641*(100vw-17px))] md:mb-[max(0.5px,0.0130208*(100vw-17px))] ">
        Our engagement models
      </h2>
      <p className="text-white span2 
     
      
      ">
  
We offer flexible engagement models to suit your specific needs.
      </p>
</div>
{/* cards */}
        <div className="grid gap-[max(0.5px,0.026041*(100vw-0px))] md:gap-[max(0.5px,0.0208103*(100vw-0px))] md:grid-cols-3">
         {engagementModelData.map((card)=>(
            <EngagementModelCard key={card.id} card={card} />
         ))}
        </div>

    </section>
  )
}

export default EngagementModels