import React from 'react'
import Hero from '../../components/common/Hero'
import CaseStudies from '../../components/portfolio/CaseStudies'
import TechnicalStack from '../../components/portfolio/TechnicalStack'
import FixedBtnCta from '../../components/common/FixedBtnCta'
import CTA from '../../components/common/CTA'
import SectionHeader from '../../components/common/SectionHeader'

const page = () => {
  return (
    <div className='relative'>
        <Hero
            title = "Our Work: Case Studies in Data & Risk"
            showSubtitle={false}
        bgImage = "/assets/technicalPortfolio/technicalPortfolioHero.jpg"
            />
            <SectionHeader 
            title='Production implementations at the intersection of finance, risk, and technology'
            subtitle='From enterprise data warehouses for major financial institutions to pioneering blockchain credit scoring models, our technical implementations are designed to deliver measurable, real-world impact at scale. Explore some examples of our work below.'
            />
            <CaseStudies/>
            <TechnicalStack/>
            <CTA 
  overlayOpacity="opacity-60"
  content={{
    heading: "Have a similar challenge?",
    description: "If these case studies resonate with the challenges you are facing, let's connect.",
    button: {
      text: "Book a Discovery Call",
      link: "/contact-us"
    }
  }}
  solutionHeader='Explore related resources:'
  solutions={[
    {
      id: "insights",
      title: "Read Our Insights & Frameworks",
      link: "/insights" 
    },
    {
      id: "about",
      title: "Learn About Our Approach",
      link: "/about"
    },
    {
      id: "solutions",
      title: "View All Solutions",
      link: "/our-solutions" 
    }
  ]}
/>

<FixedBtnCta/>
      
    </div>
    
  )
}

export default page