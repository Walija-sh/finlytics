import React from 'react'
import SubPageHero from '../../../components/solution/subPages/SubPageHero'
import FixedBtnCta from '../../../components/common/FixedBtnCta'
import CTA from '../../../components/common/CTA'
import Problem from '../../../components/solution/subPages/Problem'
import { platformAccordian, platformbuildCards, platformDelivery, platformProblemsData } from '../../../components/solution/subPages/data'
import Solution from '../../../components/solution/subPages/Solution'
import WhatWeBuild from '../../../components/solution/subPages/WhatWeBuild'
import Delivery from '../../../components/solution/subPages/Delivery'
import Returns from '../../../components/solution/subPages/Returns'

const page = () => {
  return (
    <main className='relative'>
      <SubPageHero 
  title="Modern Data Platforms & Governance"
  subtitle="Transform your data from a liability into your most valuable asset"
  description="Stop drowning in spreadsheets, conflicting reports, and data quality issues. We design and build modern data platforms that deliver trusted, real-time insights with enterprise-grade governance, enabling your teams to make faster, smarter decisions."
  imageUrl="/assets/solutions/dataPlatformAndGovernanceHero.jpg"
/>
<Problem
title={
    <>
      The problem: <br />
     Data chaos is costing you more than you think
    </>
  }
  subtitle='Many organisations struggle with a chaotic data landscape that actively hinders growth and creates risk.'
  cards={platformProblemsData}
/>
<Solution
title='A unified platform for governed, real-time insights'
description=' We go beyond just technology implementation. We partner with you to build an end-to-end data ecosystem that transforms how your organisation works, with governance and business outcomes built-in from day one.'
/>
<WhatWeBuild
cardsData={platformbuildCards}
/>
<Delivery
title='How we deliver production-ready AI'
subtitle='Our agile, phased approach ensures we prove value quickly and build solutions that are ready for the complexities of a live production environment.'
cardsData={platformDelivery}
/>
<Returns
title='What we build for you'
accordianData={platformAccordian}

/>
<CTA 
  overlayOpacity="opacity-60"
  content={{
    heading: "Ready to build a data platform you can trust?",
    description: "Let's talk about turning your data chaos into clarity. A 30-minute call is the best way to understand your challenges and see if our approach is the right fit.",
    button: {
      text: "Book a Data Platform Scoping Call",
      link: "/contact-us"
    }
  }}
 
/>
<FixedBtnCta text='Book a Data Platform Scoping Call' />
    </main>
  )
}

export default page