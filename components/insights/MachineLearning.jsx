import React from 'react'
import SectionHeader from '../common/SectionHeader'
import Guide from './Guide'
import { featureStoreData } from './InsightsData'
import ModelToProduction from './ModelToProduction'

const MachineLearning = () => {
  return (
    <section className='bg-primary text-white'>
         <SectionHeader
          title="Machine Learning & MLOps"
  subtitle="A model in a notebook provides zero business value. Our focus is on MLOps — the discipline of reliably and efficiently getting models into production and keeping them there."

        />
        <ModelToProduction/>
        <Guide data={featureStoreData}/>
    </section>
  )
}

export default MachineLearning