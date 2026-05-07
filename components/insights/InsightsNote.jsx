import React from 'react'
import VideoLogo from '../common/VideoLogo'

const InsightsNote = () => {
  return (
    <section className='bg-primary px-[10%] py-[5%]'>
        <div className="bg-blue-bg 
  p-[max(0.5px,0.0641026*(100vw-17px))]
  lg:p-[max(0.5px,0.0312175*(100vw-17px))]
  rounded-[13px]
  md:flex md:items-center
">
    <div className="w-[18.060955725573812%] md:w-[max(0.5px,0.0790891*(100vw-17px))] shrink-0 mb-[max(0.5px,0.043416*(100vw-17px))] md:mb-0 md:mr-[max(0.5px,0.043416*(100vw-17px))]">

    <VideoLogo/>
    </div>
    <div className="grid gap-[18px] lg:gap-[30px] text-primary p3">
        <p>This page is our knowledge centre of field-tested insights, frameworks, and technical guides, drawn from our experience building and scaling production-grade decisioning systems. We believe in sharing our expertise openly.</p>
        <p>Below are the core methodologies and best practices that inform every client engagement.</p>
    </div>
</div>
    </section>
  )
}

export default InsightsNote