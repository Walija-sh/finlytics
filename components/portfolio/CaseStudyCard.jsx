"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const CaseStudyCard = ({ data }) => {
  const swiperRef = useRef(null);

  return (
    <div className="border border-white rounded-[13px] caseStudy-bg grid lg:grid-cols-[35%_5%_60%] lg:sticky top-[100px] lg:rounded-[5px]">
      {/* top */}
      <div className="
        pt-[calc(max(0.5px,_0.1025641_*_(100vw_-_17px)))]
        pr-[calc(max(0.5px,_0.0410256_*_(100vw_-_17px)))]
        pl-[calc(max(0.5px,_0.0416231_*_(100vw_-_17px)))]
        pb-[calc(max(0.5px,_0.0416231_*_(100vw_-_17px)))]
        lg:pt-[calc(max(0.5px,_0.0416233_*_(100vw_-_17px)))]
        lg:pr-[calc(max(0.5px,_0.0208117_*_(100vw_-_17px)))]
        lg:pl-[calc(max(0.5px,_0.0416233_*_(100vw_-_17px)))]
        lg:pb-[calc(max(0.5px,_0.0416233_*_(100vw_-_17px)))]
      ">
        <Image 
          width={30} 
          height={30} 
          alt={data.iconAlt || ''} 
          src={data.icon} 
          className='w-[7.725759837828213%] lg:w-[12.04601819442081%]  mb-4 h-auto object-contain lg:mb-[calc(max(0.5px,0.0951361*(100vw_-_17px))))]'
        />
        <h4 className='heading4 font-bold text-blue-bg mb-2'>
          {data.title}
        </h4>
       {data.subtitle && <p className='p7'>{data.subtitle}</p>}
      </div>
      
      <div className="w-full h-[1px] bg-white/50 lg:w-[1px] lg:h-full lg:place-self-center"></div>
      
      {/* bottom slider */}
      <div className="
        pt-[calc(max(0.5px,_0.1025641_*_(100vw_-_17px)))]
        pr-[calc(max(0.5px,_0.0410256_*_(100vw_-_17px)))]
        pl-[calc(max(0.5px,_0.0416231_*_(100vw_-_17px)))]
        pb-[calc(max(0.5px,_0.0416231_*_(100vw_-_17px)))]
        lg:pt-[calc(max(0.5px,_0.0416233_*_(100vw_-_17px)))]
        lg:pl-[calc(max(0.5px,_0.0208117_*_(100vw_-_17px)))]
        lg:pr-[calc(max(0.5px,_0.0416233_*_(100vw_-_17px)))]
        lg:pb-[calc(max(0.5px,_0.0416233_*_(100vw_-_17px)))]
        relative
      ">
        {/* nav icons */}
        <div className="flex gap-2 items-center absolute top-[calc(max(0.5px,0.0416667*(100vw_-_17px))))] left-[calc(max(0.5px,0.0416667*(100vw_-_17px))))] lg:bottom-[calc(max(0.5px,0.0416237*(100vw_-_17px))))] lg:left-[calc(max(0.5px,0.0208112*(100vw_-_17px))))] lg:items-end z-20">
          <FaChevronCircleLeft className={`custom-prev-${data.id} text-secondary text-[25px] cursor-pointer`}/>
          <FaChevronCircleRight className={`custom-next-${data.id} text-secondary text-[25px] cursor-pointer`}/>
        </div>
        
        {/* slider */}
        <div className="mt-[calc(max(0.5px,0.1025641*(100vw_-_17px))))] lg:mt-0 w-full overflow-hidden grid">
          <Swiper 
            ref={swiperRef} 
            navigation={true} 
            modules={[Navigation]}
            navigation={{
              prevEl: `.custom-prev-${data.id}`,
              nextEl: `.custom-next-${data.id}`,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={20}
            className="mySwiper w-full"
          >
            {data.slides.map((slide, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                {slide.type === 'challenge' && (
                  <div className="grid lg:grid-cols-2 lg:gap-5 xl:gap-[60px] lg:items-start">
                    <div className="">
                      <h3 className='mb-2 lg:mb-[11px] heading4 font-bold uppercase'>{slide.title}</h3>
                      <p className='mb-[15px] p3'>{slide.description}</p>
                    </div>
                    <Image 
                      src={slide.image} 
                      alt='' 
                      width={744} 
                      height={393} 
                      className='object-cover rounded-[13px] w-full h-auto aspect-[1.1257275902211874] md:aspect-[2/1] lg:aspect-[1.1/1]'
                    />
                  </div>
                )}
                
                {slide.type === 'solution' && (
                  <div className="grid lg:grid-cols-[42%_1fr] lg:gap-5 xl:gap-[30px] lg:items-start">
                    <div className="">
                      <h3 className='mb-2 lg:mb-[11px] heading4 font-bold uppercase'>{slide.title}</h3>
                      <p className='mb-[15px] p3'>{slide.description}</p>
                    </div>
                    <div className="grid gap-2 span5 text-primary">
                      {slide.solutionItems.map((item, idx) => (
                        <div key={idx} className="rounded-[13px] bg-blue-bg p-[12px] md:p-5 lg:p-[11px] xl:p-[14px]">
                          <p><span className='font-bold'>{item.label}:</span> {item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {slide.type === 'impact' && (
                  <div className="text-[16px] leading-[1] grid gap-2 lg:gap-[15px]">
                    <h3 className='mb-2 lg:mb-[11px] heading4 font-bold uppercase lg:mb-[19px]'>{slide.title}</h3>
                    {slide.impacts.map((impact, idx) => (
                      <div key={idx}>
                        <h4 className='font-arial font-extrabold text-[25px] lg:mb-[5px]'>{impact.metric}</h4>
                        <p>{impact.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard