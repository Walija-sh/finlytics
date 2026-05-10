import React from 'react'
import Hero from '../../components/common/Hero'
import ContactCta from '../../components/contact/ContactCta'
import WhereWeWork from '../../components/contact/WhereWeWork'
import EngagementModels from '../../components/contact/EngagementModels'
import Faqs from '../../components/contact/Faqs'
export const metadata = {
  title: 'Book a Free Discovery Call | Finlytics Hub',
}
const page = () => {
  return (
    <main className='relative'>
        <Hero
      title = "Let's Build Something Exceptional Together"
  showSubtitle={false}
  bgImage = "/assets/contact/contactHero.jpg"
      />
      <ContactCta/>
      <WhereWeWork/>
      <EngagementModels/>
      <Faqs/>
    </main>
  )
}

export default page