import Link from 'next/link'
import React from 'react'

const FixedBtnCta = () => {
  return (
    <Link href='/contact-us' className='w-fit  rounded-tl-[13px] transition-all duration-300 text-center text-[16px] md:text-[18px] inline-block fixed bottom-0 right-0 z-30 bg-linear-90 from-secondary to-[#ff5015] hover:from-[#ff5015] hover:to-secondary  text-white border-t border-l border-white py-2 px-10 min-w-[1.8em] lg:min-w-[340px] group'>
          Book a Discovery Call
    </Link>
  )
}

export default FixedBtnCta