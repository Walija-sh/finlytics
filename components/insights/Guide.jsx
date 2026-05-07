import React from 'react'
import InsightsHeader from './InsightsHeader'
import InsightCard from './InsightCard';

const Guide = ({ 
  data,
  cardWrapperClassName = "flex flex-wrap gap-[10px] lg:gap-[24px]" 
}) => {
  return (
    <section className={`${data.bgColor} text-white px-[10%] py-[5%] md:py-[2.5%] grid gap-[max(0.5px,0.0266667*(100vw-0px))]`}>
      <InsightsHeader 
        title={data.header.title}
        description={data.header.description}
        className={data.header.className}
      />
      
      <div>
       
        {data.optionalSubtext && (
          <p className='mb-[max(0.5px,0.0677436*(100vw-0px))] lg:mb-[max(0.5px,0.0104058*(100vw-0px))] span2'>
            {data.optionalSubtext}
          </p>
        )}
        
        {/* cards */}
        <div className={cardWrapperClassName}>
          {data.cards.map((card) => (
            <InsightCard key={card.id} card={card} optionalIconWidth={data.optionalIconWidth} textColor={data.primary} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Guide