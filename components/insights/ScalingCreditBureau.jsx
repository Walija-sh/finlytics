"use client"
import Image from 'next/image'
import InsightsHeader from './InsightsHeader'
import InsightCard from './InsightCard'
import { creditBureauData } from './InsightsData'

const ScalingCreditBureau = () => {
 
  return (
    <section  className='bg-blue-2 text-white px-[10%] py-[5%] md:py-[2.5%] grid  gap-[max(0.5px,0.0266667*(100vw-0px))]'>
        
        <InsightsHeader 
          title="Playbook for Scaling a Modern Credit Bureau"
          description="Scaling a credit bureau is not merely a technical challenge — it's an ecosystem transformation. Success hinges on navigating the complex interplay of regulation, data sharing incentives, and commercial strategy."
        />
           <div className="
           flex 
           gap-[max(0.5px,0.025641*(100vw-0px))]
           md:gap-[max(0.5px,0.0101927*(100vw-0px))]
           lg:gap-[max(0.5px,0.0101985*(100vw-0px))]
           items-center
           ">
            <Image alt='key' width={50} height={50} src='/assets/insights/key.svg' className='
            w-[max(0.5px,0.0512821*(100vw-0px))]
            md:w-[max(0.5px,0.0260417*(100vw-0px))]
            lg:w-[max(0.5px,0.0186959*(100vw-0px))]
            
            '/>
             <p className=' span2'>
            
Our key principles for success:
          </p>
           </div>
            
        {/* cards */}
        <div className="flex flex-wrap gap-[10px] lg:gap-[24px]">
          {creditBureauData.map((card) => (
            <InsightCard variant='bordered' key={card.id} card={card} showIcon={false} />
          ))}
        </div>
        
    </section>
  )
}

export default ScalingCreditBureau