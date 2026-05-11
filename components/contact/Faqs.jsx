"use client"
import React, { useState ,useRef,useEffect} from 'react'
import { motion, useScroll, useTransform } from 'motion/react';
import Link from 'next/link'
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";



const ENGAGEMENT_STEPS = [
  {
    id: '1',
    title: 'What makes you different from a large consulting firm?',
    description: 'We are practitioners, not just advisors. We build and deploy production systems. Our senior experts are deeply involved in the day-to-day work, ensuring you get the best of our expertise directly.'
  },
  {
    id: '2',
    title: 'How quickly can you start an engagement?',
    description: 'Typically, we can begin a new project within 1-2 weeks for urgent needs and 2-4 weeks for planned initiatives.'
  },
  {
    id: '3',
    title: 'Do you offer training for our internal teams?',
    description: 'Yes. Knowledge transfer is a core part of every engagement. We are committed to building your team\'s capabilities, not creating long-term dependencies.'
  },
  {
    id: '4',
    title: 'Who will be on the project team?',
    description: 'You will work directly with our senior practitioners. We do not employ a junior-heavy consulting model. The experts you meet during the sales process are the same experts who will be building your solution.'
  },
  {
    id: '5',
    title: 'How do you measure the success of a project?',
    description: 'Success is defined by your business outcomes. Before we begin, we work with you to define clear, measurable KPIs—such as a target increase in approval rates, a reduction in decision time, or a specific data quality score. Our success is tied to yours.'
  },
  {
    id: '6',
    title: 'Are you vendor-agnostic?',
    description: 'Yes. We are technology-agnostic and recommend the best tools for your specific challenge and context. We have deep expertise in the modern data stack (e.g., dbt, ClickHouse, Power BI), but we are not resellers and our advice is always independent.'
  }
];
const EXPLORE_LINKS = [
  {
    id: '1',
    title: 'Learn About Our Approach',
    link: '/about'
  },
  {
    id: '2',
    title: 'View Our Technical Portfolio',
    link: '/technical-portfolio'
  },
  {
    id: '3',
    title: 'Read Our Insights & Frameworks',
    link: '/insights'
  },
  {
    id: '4',
    title: 'Explore All Solutions',
    link: '/our-solutions'
  }
];
const AccordionIcon = ({ isOpen ,className=''}) => (
  <svg
    viewBox="0 0 16 11"
    xmlns="http://www.w3.org/2000/svg"
    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} ${className}`}
    fill="currentColor"
  >
    <path d="M0.191928 1.49603L1.47573 0.198644C1.53857 0.135675 1.61321 0.0857166 1.69539 0.0516304C1.77756 0.0175441 1.86565 0 1.95461 0C2.04357 0 2.13166 0.0175441 2.21383 0.0516304C2.296 0.0857166 2.37065 0.135675 2.43349 0.198644L7.99662 5.81612L13.5598 0.198644C13.6226 0.135675 13.6972 0.0857166 13.7794 0.0516304C13.8616 0.0175441 13.9497 0 14.0386 0C14.1276 0 14.2157 0.0175441 14.2979 0.0516304C14.38 0.0857166 14.4547 0.135675 14.5175 0.198644L15.8013 1.49603C16.0662 1.76094 16.0662 2.20246 15.8013 2.46737L8.4789 9.8713C8.41606 9.93427 8.34141 9.98423 8.25924 10.0183C8.17707 10.0524 8.08898 10.07 8.00002 10.07C7.91106 10.07 7.82297 10.0524 7.7408 10.0183C7.65863 9.98423 7.58398 9.93427 7.52114 9.8713L0.198722 2.46737C0.0713654 2.3378 0 2.16338 0 1.9817C0 1.80002 0.0713654 1.6256 0.198722 1.49603H0.191928Z" />
  </svg>
);



function FaqItem({ item, isOpen, onToggle, index }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-secondary ">
      <button
        onClick={() => onToggle(item.id)}
        className="w-full flex justify-between cursor-pointer items-center py-2 text-left group"
        aria-expanded={isOpen}
      >
        <h3 className=" font-bold md:font-normal text-[18px] md:text-[20px] 2xl:text-[30px] text-white group-hover:text-secondary transition-colors leading-[1]">
          {item.title}
        </h3>
        <div className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors `}>
          <AccordionIcon isOpen={isOpen} className='stroke-secondary fill-secondary group-hover:stroke-blue-3 group-hover:fill-blue-3' />
        </div>
      </button>

      <motion.div
        animate={{ height }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div ref={contentRef} className="py-[max(0.5px,0.0512821*(100vw-17px))] md:py-[max(0.5px,0.0260417*(100vw-17px))] lg:py-[max(0.5px,0.015625*(100vw-17px))]">
          <p className="text-[16px] md:text-[18px] 2xl:text-[20px] text-white">
            {item.description}
          </p>
         
        </div>
      </motion.div>
    </div>
  );
}



function LinkCard({ item, index }) {
  return (
      <Link href={item.link} className="flex items-center justify-between md:justify-start gap-[10px] border-b border-white p-2 w-full max-w-[365px] group">
        <span className="text-white text-[14px] md:text-[16px] 2xl:text-[18px] font-medium lg:text-center">
          {item.title}
        </span>
        <div
          
          className="inline-flex items-center gap-2 text-white transition-colors group-hover:gap-3"
        >
          <span className="rounded-full border border-secondary w-6 aspect-square flex items-center justify-center text-secondary relative overflow-hidden">
            <BsArrowRightShort className='text-[26px] -translate-y-[1px] -translate-x-[1px] group-hover:translate-x-full transition-all duration-300 group-hover:scale-50'/>
            <BsArrowRightCircleFill className='text-[26px] absolute inset-[-1px] text-secondary scale-0 group-hover:scale-100 transition-all origin-left duration-300'/>
          </span>
        </div>
      </Link>
   
  );
}
const Faqs = () => {
     const [openId, setOpenId] = useState(null);
     const handleToggle = (id) => {
    if (openId === id) {
      
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };
  return (
    <section className='relative w-full bg-primary overflow-hidden p-[10%] grid gap-[max(0.5px,0.0512821*(100vw-17px))] md:gap-[max(0.5px,0.0260417*(100vw-17px))] lg:gap-[max(0.5px,0.0208117*(100vw-17px))]'>
        {/*accordian  */}
           <h2 className="text-white heading2 font-bold leading-[1]  mb-[max(0.5px,0.0512821*(100vw-17px))]  md:mt-0 md:mb-0  lg:mt-[max(0.5px,0.0003967*(100vw-17px))] 2xl:mt-[max(0.5px,0.0002764*(100vw-17px))]  ">
        Frequently asked questions
      </h2>
       <div className=" grid gap-5 ">
            {ENGAGEMENT_STEPS.map((step, idx) => (
              <FaqItem
                key={step.id}
                item={step}
                isOpen={openId === step.id}
                onToggle={handleToggle}
                index={idx}
              />
            ))}
          </div>
          <div className="mt-[max(0.5px,0.0256406*(100vw-17px))] md:mt-[max(0.5px,0.0130208*(100vw-17px))] lg:mt-[max(0.5px,0.0104058*(100vw-17px))]">
           <div className=" lg:flex lg:flex-col-reverse">
             <h2 className='mb-[15px] md:mb-[20px] lg:mb-[max(0.5px,0.0104058*(100vw-17px))] p4 text-secondary font-bold'>Explore more about our work</h2>
            <p className='mb-[max(0.5px,0.0512821*(100vw-17px))] md:mb-[max(0.5px,0.0260417*(100vw-17px))] lg:mb-[40px] p3'>
              We are selective about the clients we partner with, focusing on projects where our unique blend of domain and technical expertise can deliver exceptional value. If your challenge lies at the intersection of data, risk, and technology, we would be delighted to hear from you.
            </p>
           </div>
             <div className="flex flex-col 2xl:flex-row  gap-2.5">
          {EXPLORE_LINKS.map((link, idx) => (
            <LinkCard key={link.id} item={link} index={idx} />
          ))}
        </div>

          </div>
       
        
    </section>
  )
}

export default Faqs