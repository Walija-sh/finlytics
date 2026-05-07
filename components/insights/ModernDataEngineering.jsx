import React from 'react'
import SectionHeader from '../common/SectionHeader'
import Guide from './Guide'
import { eventSourcingData } from './InsightsData'
import BestPractices from './BestPractices'
import PerformanceOptimisation from './PerformanceOptimisation'

const ModernDataEngineering = () => {
  return (
    <section className='bg-blue-2 text-white'>
         <SectionHeader
          title="
Modern Data Engineering"
  subtitle="Strategy is meaningless without execution. We build robust, scalable data platforms using best-in-class tools and methodologies from the modern data stack."
  className='bg-blue-2'
        />
        <BestPractices/>
        <PerformanceOptimisation/>
        <Guide data={eventSourcingData}/>
        
    </section>

  )
}

export default ModernDataEngineering