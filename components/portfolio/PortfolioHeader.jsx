import React from 'react'

const PortfolioHeader = () => {
  return (
    <section className='bg-primary text-white p-[10%] pt-[5%] md:py-[5%] grid gap-5 lg:gap-[32px] xl:gap-[45px]'>
       <div className="grid gap-5 md:grid-cols-[1.1999836202513914fr_1.8000108638445722fr] lg:gap-[42px] xl:gap-[59px]  md:items-end">
         <h2 className="font-bold heading2 md:w-[96.39842649372991%]">Production implementations at the intersection of finance, risk, and technology</h2>
        <p className='p3'>
From enterprise data warehouses for major financial institutions to pioneering blockchain credit scoring models, our technical implementations are designed to deliver measurable, real-world impact at scale. Explore some examples of our work below.</p>
       </div>
<div className="w-full h-[2px] bg-secondary"></div>
    </section>
  )
}

export default PortfolioHeader