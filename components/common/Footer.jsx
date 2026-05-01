'use client';

import Link from 'next/link';
import LogoMark from '@/components/common/LogoMark';

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer
 
      className="relative z-10 w-full bg-blue-2  px-[10%] pt-[5%] pb-0 md:pb-[5%]"
    >
        <div className="flex flex-col  gap-5">
         

            {/* Footer Links */}
          <div className="flex flex-col gap-2 md:max-w-[62.500056743692824%]">
          <div className="flex flex-wrap items-center  text-[18px] text-white">
            <Link
              href="/privacy-policy"
              className='p-2'
              
            >
              Privacy Policy
            </Link>
            <span >|</span>
            <Link
              href="/terms-of-service"
              className='p-2'
              
            >
              Terms of Service
            </Link>
          </div>

          {/* Copyright Text */}
          <p className="text-white p2">
            © {currentYear} Finlytics Hub. Where domain expertise meets deep technical knowledge.
          </p>
          </div>

          <div className="w-[18.008917949241507%] md:w-[10.561988349576712%] lg:max-w-[121px]  h-auto md:absolute bottom-0 right-[10%]">
            <LogoMark fill="#0c0054" className="w-full h-full " />
          </div>
        </div>
      
    </footer>
  );
}