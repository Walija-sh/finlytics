"use client"
import React from 'react'
import InsightsHeader from './InsightsHeader'

const BusinessCase = () => {
  return (
    <section className='bg-primary text-white px-[10%] py-[5%] md:py-[2.5%] grid gap-[max(0.5px,0.0512821*(100vw-0px))] relative grid md:grid-cols-[0.6659970760494696fr_1.3340029239505304fr] gap-y-[max(0.5px,0.0208112*(100vw-0px))] gap-x-[max(0.5px,0.0104049*(100vw-0px))] md:items-center'>
        <InsightsHeader 
          title='The Business Case for Data Quality'
          description='Poor data quality is not an IT problem; it is a business problem with a direct financial impact. Based on our analysis across over 50 implementations, every $1 invested in proactive data quality prevention saves an average of $10 in remediation costs, opportunity loss, and regulatory fines down the line. A robust DQ framework is not a cost centre; it is a value driver that unlocks reliable analytics, AI, and regulatory compliance. Our approach focuses on automated, preventative controls built directly into your data pipelines, not manual, reactive clean-up.'
          className='gap-[max(0.5px,0.0130208*(100vw-17px))] lg:gap-[max(0.5px,0.015625*(100vw-17px))] md:order-2 md:ml-[max(0.5px,0.0440058*(100vw-0px))] lg:ml-[max(0.5px,0.0843687*(100vw-17px))]'
        />
        
        <div className="relative w-full h-auto aspect-[1/1.2] border-white border overflow-hidden rounded-[13px] bg-primary md:order-1 md:aspect-[1/2.5] lg:aspect-[1/1.35] 2xl:aspect-[1/1.1] ">
          <div className="absolute inset-0 overflow-hidden rounded-[13px]">
            <div 
              className="absolute  bg-fixed bg-no-repeat bg-cover top-[-5%] bottom-[-5%] left-[-10%] right-[-10%] md:top-[-2.5%] md:bottom-[-2.5%]"
              style={{ 
                backgroundImage: "url('/assets/insights/BusinessCase.jpg')",
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
               
              }}
            ></div>
          </div>
        </div>
    </section>
  )
}

export default BusinessCase