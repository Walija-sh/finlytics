"use client"
import React, { useRef } from 'react'
import SectionHeader from '../common/SectionHeader'
import Image from 'next/image'
import Button from '../common/Button'
import { motion, useScroll, useTransform } from 'motion/react'
import { contactCtaData } from './contactData'
import ContactForm from './ContactForm'

const ContactCard = ({ card, index }) => {
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
      className='lg:flex items-center'
    >
      <Image 
        alt='icon' 
        src={card.icon} 
        width={40} 
        height={40} 
        className='
          w-[8.019547647390514%]
          md:w-[4.031977754605492%]
          lg:w-[max(0.5px,0.0289036*(100vw-17px))]
          mb-[max(0.5px,0.0118579*(100vw-17px))]
          md:mb-[max(0.5px,0.010213*(100vw-17px))]
          lg:mb-0
          lg:mr-[max(0.5px,0.0118577*(100vw-17px))]
        '
      />
      <p>
        <span className="font-bold">{card.title}</span> {card.description}
      </p>
    </motion.div>
  )
}


const ContactCta = () => {
  return (
    <section className='bg-primary text-white'>
          <SectionHeader
          title="Your journey to data-driven excellence starts here"
  subtitle="Whether you're looking to modernise your data platform, enhance your risk decisioning capabilities, or deploy cutting-edge AI, our team brings the deep expertise and hands-on capability to make it happen."
  className='md:pb-[2.5%] md:pt-[12%]'
        />
        <div className="py-[5%] px-[10%] lg:pt-[2.5%] grid 
        gap-[max(0.5px,0.0533333*(100vw-17px))]
        md:gap-[max(0.5px,0.0158103*(100vw-17px))] 2xl:grid-cols-2
        ">
            {/* cta card */}
            <div className="rounded-[13px] bg-blue-bg text-primary
            py-[max(0.5px,0.1066667*(100vw-17px))]
            px-[max(0.5px,0.0533333*(100vw-17px))]
            md:py-[max(0.5px,0.0531208*(100vw-17px))]
            md:px-[max(0.5px,0.0265604*(100vw-17px))]
            lg:py-[max(0.5px,0.0316206*(100vw-17px))]
            lg:px-[max(0.5px,0.0233439*(100vw-17px))]
            ">
                {/* header */}
                <div className="mb-[max(0.5px,0.0533333*(100vw-17px))] md:mb-[max(0.5px,0.0233395*(100vw-17px))] lg:md:mb-[max(0.5px,0.0132802*(100vw-17px))]">
                    <h3 className='mb-[max(0.5px,0.016*(100vw-17px))] md:mb-[max(0.5px,0.005836*(100vw-17px))] heading6 font-bold'>Book a complimentary discovery call</h3>
                    <p className='p8'>The best way to start is a simple, no-obligation conversation. A 30-minute call allows us to understand your specific challenges and determine if we are the right partner to help you.</p>
                </div>
                <h3 className='p8 font-bold mb-[max(0.5px,0.0266667*(100vw-17px))] md:mb-[max(0.5px,0.0132802*(100vw-17px))] lg:md:mb-[max(0.5px,0.0118577*(100vw-17px))]'>What to expect:</h3>
                {/* cards */}
                <div className="grid span6
                gap-[max(0.5px,0.0266667*(100vw-17px))] 
                md:gap-[max(0.5px,0.06251*(100vw-17px))] 
                lg:gap-[max(0.5px,0.008754*(100vw-17px))] 
                mb-[max(0.5px,0.0533333*(100vw-17px))] 
                md:mb-[max(0.5px,0.0398406*(100vw-17px))] 
                lg:mb-[max(0.5px,0.0237154*(100vw-17px))] 
                
                ">
                    {contactCtaData.cards.map((card, index) => (
              <ContactCard key={card.id} card={card} index={index} />
            ))}
                </div>
                <Button external={true} variant='primary' href='https://calendar.app.google/bqWA2264BABWhw45A' className='w-full lg:py-[9px] 2xl:min-w-[50%] 2xl:w-fit'>
                    Schedule Your 30-Minute Call
                </Button>

            </div>
            <ContactForm/>
        </div>
    </section>
  )
}

export default ContactCta