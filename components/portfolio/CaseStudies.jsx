"use client"
import React from 'react'
import CaseStudiesSection from './CaseStudiesSection'
import sectionsData from './casesData'





const CaseStudies = () => {
  
  return(
    <>
      {sectionsData.map((section) => (
        <CaseStudiesSection key={section.id} data={section} />
      ))}
    </>
  )
     
};

export default CaseStudies;