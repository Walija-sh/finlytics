import React from 'react'
import SectionHeader from '../common/SectionHeader'
import Guide from './Guide'
import { creditDecisioningData } from './InsightsData'
import ScalingCreditBureau from './ScalingCreditBureau'

const CreditRisk = () => {
  return (
    <section className='bg-primary text-white'>
         <SectionHeader
          title="
Credit Risk & Decisioning"
  subtitle="This is our deepest area of domain expertise. We apply the principles of data engineering and MLOps to the specific, high-stakes challenges of credit and financial risk management.

"
className='bg-blue-2'

        />
        <ScalingCreditBureau/>
        <Guide data={creditDecisioningData}/>
        
    </section>
  )
}

export default CreditRisk