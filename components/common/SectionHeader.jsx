import React from 'react'
import Button from './Button'

const SectionHeader = ({ title, subtitle ,className='bg-primary' }) => {
  return (
      <section className={` text-white p-[10%] pt-[5%] md:py-[5%] grid gap-5 lg:gap-[32px] xl:gap-[45px] ${className}`}>
       <div className="grid gap-5 md:grid-cols-[1.1999836202513914fr_1.8000108638445722fr] lg:gap-[42px] xl:gap-[59px]  md:items-end">
         <h2 className="font-bold heading2 md:w-[96.39842649372991%]">{title}</h2>
        <p className='p3'>{subtitle}</p>
       </div>
<div className="w-full h-[2px] bg-secondary"></div>
    </section> 
  )
}

export default SectionHeader