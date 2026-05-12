import React from 'react'
import Hero from '../../components/common/Hero'
import InsightsNote from '../../components/insights/InsightsNote'
import DataStrategyAndGovernance from '../../components/insights/DataStrategyAndGovernance'
import ModernDataEngineering from '../../components/insights/ModernDataEngineering'
import MachineLearning from '../../components/insights/MachineLearning'
import CreditRisk from '../../components/insights/CreditRisk'
import FixedBtnCta from '../../components/common/FixedBtnCta'
import CTA from '../../components/common/CTA'
export const metadata = {
  title: 'Credit Risk & Data Governance Insights, Frameworks & Guides | Finlytics Hub',
}
const page = () => {
  return (
    <div className='relative'>
      <Hero 
          title = "Our library of practical wisdom from the front lines of data and risk"
            showSubtitle={false}
        bgImage = "/assets/insights/insightsHero.jpg"
      />
      <InsightsNote/>
      <DataStrategyAndGovernance/>
      <ModernDataEngineering/>
      <MachineLearning/>
      <CreditRisk/>
      <CTA 
  overlayOpacity="opacity-60"
  content={{
    heading: "Put our expertise to work",
    description:(
      <>
       These frameworks and insights are the starting point for our client engagements. They represent the depth of expertise we bring to every project.<br /> <br />
        If you are facing challenges in data, risk, or AI/ML, the next step is a complimentary discovery call to discuss how these principles can be applied to solve your specific problems.
      </>
    ),
    button: {
      text: "Book a Discovery Call",
      link: "/contact-us"
    }
  }}
  solutionHeader="Explore our solutions in depth"
  solutions={[
    {
      id: "credit-risks",
      title: "Credit Risk & Financial Analytics",
      link: "/our-solutions/credit-risk-analytics"
    },
    {
      id: "modern-data",
      title: "Modern Data Platforms & Governance",
      link: "/our-solutions/modern-data-platforms-governance" 
    },
    {
      id: "data-science-and-ml",
      title: "Data Science & Machine Learning",
      link: "/our-solutions/data-science-ml" 
    }
  ]}
/>
<FixedBtnCta/>
    </div>
  )
}

export default page
