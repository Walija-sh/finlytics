import React from 'react'


const SubPageSectionHeader = ({ title, subtitle ,className='bg-primary' }) => {
  return (
      <section className={` text-white    ${className}`}>
       <div className="grid gap-5 lg:grid-cols-[1.4999929952493802fr_1.5000070047506195fr] lg:gap-[max(0.5px,0.0416233*(100vw-17px))]   p-[10%]  md:pb-[5%] lg:py-[5%] ">
         <h2 className="font-bold heading2 md:w-[96.39842649372991%]">{title}</h2>
        <p className='p3 lg:self-end'>{subtitle}</p>
       </div>

<div className="w-[80%] border-t-2 border-secondary mx-auto pb-[2.5%]"></div>


    </section> 
  )
}

export default SubPageSectionHeader