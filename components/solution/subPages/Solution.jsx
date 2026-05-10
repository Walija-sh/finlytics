"use client"
import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'

const Solution = ({
  title='',
  description=''
}) => {
const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })


  const bigCircleX = useTransform(scrollYProgress, [0, 0.4], [600, 0])
  
  const secondCircleX = useTransform(scrollYProgress, [0, 0.4], [-600, 0])

const thirdCircleX = useTransform(scrollYProgress, [0, 0.4], [-400, 0])

const thirdCircleY = useTransform(scrollYProgress, [0, 0.4], [400, 0])

const logoY = useTransform(scrollYProgress, [0, 0.4], [500, 0])

  return (
    <section  ref={sectionRef} className='solution-bg text-white p-[10%]   gap-[max(0.5px,0.0512827*(100vw-17px))] grid grid-rows-[2fr_1.4fr_1fr] md:grid-rows-[1.5fr_1fr] md:gap-0 md:grid-cols-[0.5000000000000001fr_0.49999999999999994fr] relative overflow-clip'>
      <div className="relative flex items-center justify-center w-full h-full  md:row-span-2 md:col-start-2 md:row-start-1">

  {/* BIG */}
  <motion.div
    style={{ x: bigCircleX }}
    className="absolute left-1/2 top-1/2
      -translate-x-1/2 -translate-y-1/2
      w-[72.48%] md:w-[82.14%] lg:w-[65.86%]
      aspect-square rounded-full bg-black/20"
  />

  {/* SECOND */}
  <motion.div
    style={{ x: secondCircleX }}
    className="absolute left-1/2 top-1/2
      -translate-x-1/2 -translate-y-1/2
      w-[51.31%] md:w-[61.80%] lg:w-[46.66%]
      aspect-square rounded-full bg-black/30"
  />

  {/* THIRD MOBILE */}
  <motion.div
    className="absolute md:hidden
      left-1/2 top-1/2
      -translate-x-1/2 -translate-y-1/2
      w-[28.22%]
      aspect-square rounded-full bg-black/40"
    style={{
      x: thirdCircleX,
      y: thirdCircleY,
    }}
  />

  {/* THIRD DESKTOP */}
  <motion.div
    className="absolute hidden md:block
      left-1/2 top-1/2
      -translate-x-1/2 -translate-y-1/2
      w-[28.90%] lg:w-[20.76%]
      aspect-square rounded-full bg-black/40"
    style={{
      y: thirdCircleY,
    }}
  />

  {/* LOGO */}
  <motion.div
    className="absolute left-1/2 top-1/2
      -translate-x-1/2 -translate-y-1/2
      w-[24.81%] md:w-[19.53%] lg:w-[10.14%]"
    style={{
      y: logoY,
    }}
  >
    <Link href="/" className="inline-block w-full">
      <Image
        src="/assets/logoMark.png"
        alt="logomark"
        width={82}
        height={126}
        className="w-full h-auto object-contain"
      />
    </Link>
  </motion.div>

</div>
{/* content */}
    <motion.div
    
    className="sticky top-[50%]     heading2 leading-[1] md:col-start-1 md:row-start-1 md:row-span-1">
        <h2 className="mb-[max(0.5px,0.0104058*(100vw-17px))] font-bold">Our Solution</h2>
        <p>{title}</p>
    </motion.div>
    <p className='md:pb-[max(0.5px,0.0312503*(100vw-17px))]   span4 md:col-start-1 md:row-start-2 mt-5 lg:mt-10 2xl:mt-20'>
       {description}
    </p>

    </section>
  )
}

export default Solution