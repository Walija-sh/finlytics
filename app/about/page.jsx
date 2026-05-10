import React from 'react'
import Hero from '../../components/common/Hero'
import Gap from '../../components/about/Gap'
import Leadership from '../../components/about/Leadership'
import Methodology from '../../components/about/Methodology'
import OriginStory from '../../components/about/OriginStory'
import Values from '../../components/about/Values'
import WhoWeHelp from '../../components/about/WhoWeHelp'
import Footprint from '../../components/about/Footprint'
import Differences from '../../components/common/Differences'
import WhyClientsTrust from '../../components/about/WhyClientTrust'
import CTA from '../../components/common/CTA'
import FixedBtnCta from '../../components/common/FixedBtnCta'
const ABOUT_DIFFERENTIATORS = [
  {
    id: "outcomes-over-outputs",
    label: "Outcomes over outputs",
    body: "We measure our success by the impact on your key metrics — be it approval rates, decision TAT, or portfolio performance — not just by the number of dashboards delivered or models built.",
    Icon: '/assets/about/aboutDiff1.svg',
  },
  {
    id: "builders-not-advisors",
    label: "Builders, not just advisors",
    body: "We write the code, configure the platforms, and debug the pipelines. Our strategic recommendations come with implementation included.",
    Icon: '/assets/about/aboutDiff2.svg',
  },
  {
    id: "risk-native-tech-fluent",
    label: "Risk-native, tech-fluent",
    body: "We speak both languages fluently. We can explain population stability index (PSI) drift to your risk committee and event sourcing to your engineering team.",
    Icon: '/assets/about/aboutDiff3.svg',
  },
  {
    id: "fast-but-not-reckless",
    label: "Fast but not reckless",
    body: "We deliver in weeks, not quarters — but always with the proper controls, testing, and documentation required for enterprise systems.",
    Icon: '/assets/about/aboutDiff4.svg',
  },
  {
    id: "knowledge-transfer",
    label: "Knowledge transfer is standard",
    body: "We aim to build your capabilities, not create dependencies. Every engagement includes enablement, documentation, and upskilling for your team.",
    Icon: '/assets/about/aboutDiff5.svg',
  },
];
export const metadata = {
  title: "About Finlytics Hub | Experts in Credit Risk & Data"
}
const page = () => {
  return (
    <div className='relative'>
      <Hero/>
      <Gap/>
      <OriginStory/>
      <Leadership/>
      <Methodology/>
      <Differences DIFFERENTIATORS={ABOUT_DIFFERENTIATORS} />
      <Values/>
      <WhoWeHelp/>
      <Footprint/>
      <WhyClientsTrust/>
<CTA 
  overlayOpacity="opacity-90"
  content={{
    heading: "Ready to connect?",
    description: "If our approach and expertise resonate with you, the next step is a simple conversation. Let's discuss your specific challenges and explore how we can help you transform your data into a competitive advantage.",
    button: {
      text: "Book a Discovery Call",
      link: "/contact-us"
    }
  }}
  solutions={[
    {
      id: "portfolio",
      title: "View Our Technical Portfolio",
      link: "/technical-portfolio"
    },
    {
      id: "insights",
      title: "Read Our Insights & Frameworks",
      link: "/insights" 
    },
    {
      id: "solutions",
      title: "Explore Our Solutions",
      link: "/our-solutions" 
    }
  ]}
/>
<FixedBtnCta/>
    </div>
  )
}

export default page