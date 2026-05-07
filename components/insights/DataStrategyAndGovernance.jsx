import React from 'react'
import SectionHeader from '../common/SectionHeader'
import TransformationRoadmap from './TransformationRoadmap'
import BusinessCase from './BusinessCase'
import Guide from './Guide'
import { practicalGuideData } from './InsightsData'

const DataStrategyAndGovernance = () => {
  return (
    <section className='bg-primary text-white'>
        <SectionHeader
          title="Data Strategy & Governance"
  subtitle="A successful data programme is built on a solid strategic foundation. Technology is only an enabler; the real work lies in defining the business case, establishing robust governance, and ensuring the organisation can trust its data."
        />
        <TransformationRoadmap/>
        <BusinessCase/>
        <Guide data={practicalGuideData}/>
    </section>
  )
}

export default DataStrategyAndGovernance