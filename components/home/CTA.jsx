'use client';

import Button from '@/components/common/Button';

export default function CTA() {
  

  return (
    <section
      
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: "url('/assets/bg/cta-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      
      <div className="absolute inset-0 bg-primary/60 pointer-events-none" />

    

      <div className="relative z-10 p-[10%]">
        <div
         
          className=" border border-white p-5 md:p-8 lg:p-10 xl:p-13 bg-primary/30 backdrop-blur-[20px] rounded-lg"
        >
         <div className="flex flex-col items-center gap-5 text-center md:max-w-[73.046875%] mx-auto">
             {/* Heading */}
          <h2 className="font-bold heading2v2 text-balance text-white ">
            Ready to ship decisions, not just dashboards?
          </h2>
          {/* Description */}
          <p className="text-white p3">
            Let's discuss your specific challenge. A 30-minute discovery call is the best way to
            determine if we are the right partner to help you.
          </p>
          {/* Button */}
          <Button href="/contact-us" variant="primary">
            Book a Discovery Call
          </Button>
         </div>
        </div>
      </div>
    </section>
  );
}