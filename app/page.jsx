import React from 'react'
import HomeHero from '@/components/home/HomeHero.jsx';
import HomeChallenge from '@/components/home/HomeChallenge.jsx';
import Differences from '@/components/common/Differences.jsx';
import ProvenImpact from '@/components/home/ProvenImpact.jsx';
import CoreCapabilities from '@/components/home/CoreCapabilities.jsx';
import HowWeEngage from '@/components/home/HowWeEngage.jsx';
import FeaturedResources from '@/components/home/FeaturedResources.jsx';
import TrustedByLeaders from '@/components/home/TrustedByLeaders.jsx';
import CTA from '@/components/common/CTA.jsx';
import FixedBtnCta from '@/components/common/FixedBtnCta.jsx';

const differ = [
  {
    id: "decision-first",
    label: "Decision-first approach",
    body: "We start with the commercial or risk decision you need to improve, then work backwards to the data, models, and infrastructure required. Not the other way around.",
    Icon: '/assets/home/homeDiff1.svg',
  },
  {
    id: "practitioner",
    label: "Practitioner's mindset",
    body: "Our leadership has built and scaled national-level data programmes, shipped production machine learning models with industry-leading performance (Gini 0.85), and implemented robust data governance frameworks from the ground up.",
    Icon: '/assets/home/homeDiff2.svg',
  },
  {
    id: "production",
    label: "Production-grade from day one",
    body: "We build for reality. Our experience deploying event-sourced architectures for real-time decisions, enforcing 200+ data quality rules to maintain a 95.6% DQI, and delivering C-suite BI solutions informs every project we undertake.",
    Icon: '/assets/home/homeDiff3.svg',
  },
  {
    id: "dna",
    label: "Risk + engineering DNA",
    body: "Our team is equally comfortable advising a board on risk strategy and in a terminal writing the dbt models, Python pipelines, and SQL queries to execute it.",
    Icon: '/assets/home/homeDiff4.svg',
  },
];
const page = () => {

  return (
    <div className='relative'>
      <HomeHero/>
    <HomeChallenge/>
    <Differences DIFFERENTIATORS={differ} />
    <ProvenImpact/>
    <CoreCapabilities/>
    <HowWeEngage/>
    <FeaturedResources/>
    <TrustedByLeaders/>
   <CTA 
  overlayOpacity="opacity-60"
  content={{
    heading: "Ready to ship decisions, not just dashboards?",
    description: "Let's discuss your specific challenge. A 30-minute discovery call is the best way to determine if we are the right partner to help you.",
    button: {
      text: "Book a Discovery Call",
      link: "/contact-us"
    }
  }}
/>
    <FixedBtnCta/>
    </div>
  )
}

export default page