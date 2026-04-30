import React from 'react'
import HomeHero from '@/components/home/HomeHero.jsx';
import HomeChallenge from '@/components/home/HomeChallenge.jsx';
import Differences from '@/components/home/Differences.jsx';
import ProvenImpact from '@/components/home/ProvenImpact.jsx';
import CoreCapabilities from '@/components/home/CoreCapabilities.jsx';
import HowWeEngage from '@/components/home/HowWeEngage.jsx';
import FeaturedResources from '@/components/home/FeaturedResources.jsx';
import TrustedByLeaders from '@/components/home/TrustedByLeaders.jsx';
import CTA from '@/components/home/CTA.jsx';
import FixedBtnCta from '@/components/home/FixedBtnCta.jsx';
const page = () => {
  return (
    <div className='relative'>
      <HomeHero/>
    <HomeChallenge/>
    <Differences/>
    <ProvenImpact/>
    <CoreCapabilities/>
    <HowWeEngage/>
    <FeaturedResources/>
    <TrustedByLeaders/>
    <CTA/>
    <FixedBtnCta/>
    </div>
  )
}

export default page