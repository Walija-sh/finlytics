
import React from 'react'
import SubPageHero from '../../../components/solution/subPages/SubPageHero'
import FixedBtnCta from '../../../components/common/FixedBtnCta'
import CTA from '../../../components/common/CTA'
import { dataScienceAndMlProblem, dsAndMlAccordion, dsAndMlbuildCards, dsAndMlDelivery } from '../../../components/solution/subPages/data'
import Problem from '../../../components/solution/subPages/Problem'
import DsAndMlAnimatedImage from '../../../components/solution/subPages/DsAndMlAnimatedImage'
import Solution from '../../../components/solution/subPages/Solution'
import WhatWeBuild from '../../../components/solution/subPages/WhatWeBuild'
import Delivery from '../../../components/solution/subPages/Delivery'
import Returns from '../../../components/solution/subPages/Returns'
export const metadata = {
  title: 'Data Science & Machine Learning Solutions | Finlytics Hub',
}
const page = () => {
  return (
    <main className='relative'>
      <SubPageHero 
  title="Data Science & Machine Learning Solutions"
  subtitle="From predictive insights to intelligent automation"
  description="Transform your business with custom machine learning models and AI solutions that actually reach production. We help you move beyond experimental models to build, deploy, and manage scalable, high-impact AI systems that drive measurable commercial value."
  imageUrl="/assets/solutions/DsAndMlHero.jpg"
/>
<Problem
title={
    <>
      The problem: <br />
     Your models are stuck in the lab
    </>
  }
  subtitle='Many businesses invest heavily in data science but fail to see a return. Promising models developed in notebooks often never make it into production, a phenomenon known as the "model graveyard."'
  cards={dataScienceAndMlProblem}
  AnimatedComponent={<DsAndMlAnimatedImage/>}
/>
<Solution
title='Production-grade AI, governed and scaled'
description=' We build and deploy complete, end-to-end data science solutions — from feature engineering to production monitoring — that are designed for impact, governance, and long-term value.'
/>
<WhatWeBuild
cardsData={dsAndMlbuildCards}
/>
<Delivery
title='How we deliver production-ready AI'
subtitle='Our agile, phased approach ensures we prove value quickly and build solutions that are ready for the complexities of a live production environment.'
cardsData={dsAndMlDelivery}
/>
<Returns
title='What you get: Measurable impact from your AI investment'
accordianData={dsAndMlAccordion}

/>
<CTA 
  overlayOpacity="opacity-60"
  content={{
    heading: "Ready to get your models out of the lab and into production?",
    description: "Let's discuss how to turn your data science investments into tangible business results. Schedule a 30-minute call to explore your use case.",
    button: {
      text: "Book a DS & ML Scoping Call",
      link: "/contact-us"
    }
  }}
 
/>
<FixedBtnCta text='Book a DS & ML Scoping Call' />
    </main>
  )
}

export default page