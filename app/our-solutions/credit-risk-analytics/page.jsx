"use client"
import React from 'react'
import SubPageHero from '../../../components/solution/subPages/SubPageHero'
import FixedBtnCta from '../../../components/common/FixedBtnCta'
import CTA from '../../../components/common/CTA'
import Problem from '../../../components/solution/subPages/Problem'
import { creditAccordion, creditbuildCards, creditRiskProblem, creditsDelivery } from '../../../components/solution/subPages/data'
import CreditRiskAnimatedImage from '../../../components/solution/subPages/CreditRiskAnimatedImage'
import Solution from '../../../components/solution/subPages/Solution'
import WhatWeBuild from '../../../components/solution/subPages/WhatWeBuild'
import Delivery from '../../../components/solution/subPages/Delivery'
import Returns from '../../../components/solution/subPages/Returns'

const page = () => {
  return (
    <main className='relative'>
      <SubPageHero 
  title="Credit Risk & Financial Analytics"
  subtitle="Make faster, smarter, and more profitable risk decisions"
  description="For organisations where credit and financial risk are core to the business, our solutions provide the specialised expertise required to build robust, compliant, and high-performing decisioning systems. We combine deep domain knowledge with advanced analytics to help you approve more creditworthy customers, reduce losses, and operate at the speed of modern business."
  imageUrl="/assets/solutions/creditRiskHero.jpg"
/>
<Problem
title={
    <>
      The problem: <br />
     Outdated risk practices are holding you back
    </>
  }
  subtitle='In the high-stakes world of lending and finance, legacy approaches to risk management create significant challenges.'
  cards={creditRiskProblem}
  AnimatedComponent={CreditRiskAnimatedImage}
/>
<Solution
title='Specialised expertise for mission-critical risk functions'
description=' We build and deploy complete credit and financial decisioning systems — from feature engineering to production monitoring — that are tailored to the unique demands of regulated financial environments.'
/>
<WhatWeBuild
cardsData={creditbuildCards}
/>
<Delivery
title='How we deliver specialised risk solutions'
subtitle='Our approach is tailored for the rigorous demands of financial services, ensuring that solutions are not only powerful but also transparent, auditable, and compliant.'
cardsData={creditsDelivery}
/>
<Returns
title='What you get: A durable competitive advantage in risk management'
accordianData={creditAccordion}

/>
<CTA 
  overlayOpacity="opacity-60"
  content={{
    heading: "Ready to transform your approach to credit risk?",
    description: "Let's discuss how our specialised expertise can help you build a more profitable and resilient portfolio. Schedule a 30-minute call to explore your specific needs.",
    button: {
      text: "Book a Credit Risk Scoping Call",
      link: "/contact-us"
    }
  }}
 
/>
<FixedBtnCta text='Book a Credit Risk Scoping Call' />
    </main>
  )
}

export default page