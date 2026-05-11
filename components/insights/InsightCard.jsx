"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'

const InsightCard = ({ 
  card, 
  variant = 'default', 
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
const iconWidth = optionalIconWidth ?? '14.393048811653463%';
  

  const variantStyles = {
    default: {
      container: "rounded-[13px] p-5 md:p-10 bg-blue-bg flex-1 min-w-[250px] lg:min-w-[185px]",
      titleColor: textColor ? "text-primary" : "text-blue-2",
      descriptionColor: textColor ? "text-primary" : "text-black"
    },
    bordered: {
      container: "rounded-[13px] p-5 md:p-10 border border-white text-white flex-1 min-w-[250px] lg:min-w-[185px]",
      titleColor: "text-white",
      descriptionColor: "text-white"
    }
  }

  const styles = variantStyles[variant] || variantStyles.default

  return (
    <motion.article 
      ref={cardRef} 
      style={{ opacity }} 
      className={styles.container}
    >
     
      {showIcon && card.icon && (
        <Image 
          alt='' 
          src={card.icon} 
          width={50} 
          height={50} 
          style={{ width: iconWidth }}
          className={` mb-[10px]`}
        />
      )}
      
      <h3 className={`${styles.titleColor} mb-[10px] font-bold span4`}>
        {card.title}
      </h3>
      
      <p className={`${styles.descriptionColor} span5`}>
        {card.description}
      </p>
    </motion.article>
  )
}

export default InsightCard