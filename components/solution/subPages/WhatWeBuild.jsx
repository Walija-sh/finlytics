import React from 'react'
import Image from 'next/image'

const BuildCard = ({ 
  card,
  className,
   isWide = false
}) => {

  const bgStyle = card.bg 
    ? { backgroundImage: `url(${card.bg})` }
    : {}

  return (
    <article 
       style={bgStyle} 
      className={  `rounded-[13px]   border text-white border-white text-white  bg-center bg-cover bg-no-repeat h-full ${card.bgColor || ''} ${className}`}
      
    >
        <div className={`
             mx-auto  mt-[max(0.5px,0.0871795*(100vw-17px))] mb-[max(0.5px,0.0358974*(100vw-17px))] md:mr-0 md:my-[max(0.5px,0.0173047*(100vw-17px))] md:ml-[max(0.5px,0.0132381*(100vw-17px))]
        ${isWide 
          ? 'w-[80%] md:w-[88%] lg:w-[43.997875354107656%]' 
          : 'w-[80%] md:w-[88%] lg:w-[80%]'
        }`}>
    <h3 className={` mb-[max(0.5px,0.0441613*(100vw-17px))] md:mb-[max(0.5px,0.0232981*(100vw-17px))] lg:mb-[max(0.5px,0.011706*(100vw-17px))]  font-bold  text-[18px] lg:text-[20px] 2xl:text-[25px]`}>
        {card.title}
      </h3>
      
      <p className={` text-[16px] lg:text-[18px] 2xl:text-[20px] mb-[max(0.5px,0.0588814*(100vw-17px))] md:mb-[max(0.5px,0.0779407*(100vw-17px))] lg:mb-[max(0.5px,0.0155994*(100vw-17px))]`}>
        {card.description}
      </p>

       <Image 
          alt='' 
          src={card.icon} 
          width={50} 
          height={50} 
          className={`aspect-square w-12 lg:w-14`}
        />
        </div>
     
      
      
  
    </article>
  )
}

const WhatWeBuild = ({cardsData}) => {
  return (
    <section className='bg-primary text-white p-[10%] lg:pb-[5%] grid gap-[max(0.5px,0.0187513*(100vw-17px))] lg:gap-[max(0.5px,0.008754*(100vw-17px))]'>
<h2 className="
mb-[max(0.5px,0.0512821*(100vw-17px))]
md:mb-[max(0.5px,0.0208117*(100vw-17px))]

heading2 font-bold">What we build for you</h2>
{/* cards */}
<div className={`grid gap-[max(0.5px,0.0187513*(100vw-17px))] lg:gap-[max(0.5px,0.008754*(100vw-17px))]

   grid-cols-1 md:grid-cols-4
    `}>
     {cardsData.map((card, index) => {
    
    const isWideCard = cardsData.length === 5 && (index === 1 || index === 2)
    
    return (
      <div 
        key={card.id} 
        className={`${isWideCard ? 'md:col-span-1 ' : 'md:col-span-2  ' } sticky top-[100px] md:top-[150px] 2xl:top-[20%]`}
      >
        <BuildCard card={card} isWide={!isWideCard} />
      </div>
    )
  })}
</div>
    </section>
  )
}

export default WhatWeBuild