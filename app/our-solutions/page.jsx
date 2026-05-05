import React from 'react'
import Hero from '../../components/common/Hero'
import Solutions from '../../components/solution/Solutions'
import OurApproach from '../../components/solution/OurApproach'
import Differences from '../../components/common/Differences'
import CTA from '../../components/common/CTA'
import FixedBtnCta from '../../components/common/FixedBtnCta'
const SOLUTION_DIFFERENTIATORS = [
  {
    id: "build-not-advise",
    label: "We build, not just advise",
    body: "We provide hands-on implementation, not just theoretical strategy.",
    Icon: "/assets/solutions/solDiff1.svg",
  },
  {
    id: "risk-tech-dna",
    label: "Risk + Tech DNA",
    body: "Our solutions are informed by deep domain expertise combined with engineering excellence.",
    Icon: "/assets/solutions/solDiff2.svg",
  },
  {
    id: "production-first",
    label: "Production-first focus",
    body: "Everything we build is designed for real-world, scalable deployment.",
    Icon: "/assets/solutions/solDiff3.svg",
  },
  {
    id: "knowledge-transfer",
    label: "Knowledge transfer",
    body: "We build your team's capabilities, ensuring you own the solution long-term.",
    Icon: "/assets/solutions/solDiff4.svg",
  },
];
const page = () => {
  return (
    <div className='relative'>
      <Hero
      title = "From data chaos to decision clarity"
  subtitle = "We deliver focused solutions that bridge the gap between deep domain expertise and cutting-edge technical innovation. Our engagements are designed to deliver tangible value in weeks, not years, by focusing on the capabilities that matter most to your business."
  bgImage = "/assets/solutions/solutionsHero.jpg"
      />

<Solutions/>
<OurApproach/>
<Differences DIFFERENTIATORS={SOLUTION_DIFFERENTIATORS} />
<CTA 
  overlayOpacity="opacity-60"
  content={{
    heading: "Not sure where to start?",
    description: "Every transformation journey is unique. Let's discuss your specific challenges and goals.",
    button: {
      text: "Book a Discovery Call",
      link: "/contact-us"
    }
  }}
  solutionHeader="Or Explore our work:"
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
      id: "approach",
      title: "Learn About Our Approach",
      link: "/about" 
    }
  ]}
/>
<FixedBtnCta/>
    </div>
  )
}

export default page