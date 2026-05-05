"use client"
import React from 'react'
import Button from '../common/Button'
import CaseStudyCard from './CaseStudyCard'
const CaseStudiesSection = ({ data }) => {
  return (
    <section  className={`${data.bgColor} text-white`}>
      {/* header card */}
      <div className="py-[5%] px-[10%] md:pt-[2.5%] md:pb-[1%]">
        <div className="border border-white rounded-[13px] py-[max(0.5px,7.69231vw)] px-[max(0.5px,5.20846vw)] md:py-[max(0.5px,5.20846vw)] lg:py-[max(0.5px,2.08117vw)] lg:px-[max(0.5px,4.16233vw)] flex flex-col">
          <h3 className="heading3 font-bold md:max-w-[50%] leading-[1] mb-2 lg:mb-[13px]">
            {data.header.title}
          </h3>
          <p className='p3'>
            {data.header.description}
          </p>
          <Button href={data.header.buttonLink} className='self-end md:self-start mt-[20px]'>
            {data.header.buttonText}
          </Button>
        </div>
      </div>
      
      {/* case studies */}
      <div className="pt-[1%] px-[10%] pb-[5%] grid text-white gap-[calc(max(0.5px,0.0208117*(100vw-17px)))]">
        {data.caseStudies.map((caseStudy, index) => (
          <CaseStudyCard key={index} data={caseStudy} />
        ))}
      </div>
    </section>
  );
};


export default CaseStudiesSection