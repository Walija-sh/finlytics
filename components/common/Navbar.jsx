"use client";

import { useState,useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { FiChevronDown } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { VscMenu } from "react-icons/vsc";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LogoMark from "./LogoMark.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Solutions", href: "/our-solutions", dropdown: true },
    { name: "Technical Portfolio", href: "/portfolio" },
    { name: "Insights", href: "/insights" },
    { name: "Contact Us", href: "/contact" },
  ];

  const sidebarVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
  };
const isActive = (href) => pathname === href;

const isSolutionsActive = pathname.startsWith("/our-solutions");

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 30); // threshold (tweak if needed)
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <>
      {/* Top bar */}
      <div className={`fixed top-0 left-0 w-full  flex items-center justify-between px-[10%] min-h-[100px] md:min-h-[150px] py-1 z-50 ${isScrolled ? "bg-primary" : "bg-primary/0"} transition-all duration-150 ease-out`}>
                  {/* Logo */}
          <Link href="/" className="inline-block w-[45%] relative md:max-w-[162px] lg:max-w-[138px] 2xl:max-w-[158px]  ">
            
              <Image
                src="/assets/Logo.png"
                alt="FinlyticsHub Logo"
                width={240}
                height={96}
                className=" w-full h-auto object-contain"
                priority
              />
            
          </Link>


        <button onClick={() => setOpen(true)} className="text-white transition-all ease-in duration-150 hover:text-secondary cursor-pointer text-[30px] md:text-[35px] lg:text-[30px] hover:scale-[1.18]">
          <VscMenu />
        </button>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {open && (
          <motion.aside
            className="fixed top-0 right-0 w-[95%] max-w-[393px] lg:max-w-[409px] h-full z-60 p-5 lg:p-10 text-white flex flex-col border-l border-secondary bg-linear-to-r from-blue-2 to-blue-2-grad"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
          >
            
              <button onClick={() => setOpen(false)} className="cursor-pointer hover:text-secondary transition-all duration-150 ease-in text-xl absolute top-[30px] right-[30px] lg:top-[50px] lg:right-[50px] hover:rotate-90">
                <TfiClose />
              </button>

            {/* Links */}
            <nav className="flex flex-col text-[16px] lg:text-[18px] gap-[14px] font-bold max-w-[287px] lg:font-normal">
              {navItems.map((item) => (
                <div key={item.name} className="py-2">
                  {!item.dropdown ? (
                    <Link href={item.href} onClick={() => setOpen(false)}  className="relative w-fit group" >
                      <span className={`absolute w-full -bottom-[2px] left-0 h-[1px] bg-white  ${isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} transition-transform duration-250 origin-left`}></span>
                      {item.name}
                    </Link>
                  ) : (
                    <div>
                      <div  className="flex items-center gap-2 w-full justify-between cursor-pointer ">

                      <Link href={item.href}
                        className="relative w-fit group"
                       
                      >
                        <span className={`absolute w-full -bottom-[2px] left-0 h-[1px] bg-white  ${isActive(item.href) || isSolutionsActive  ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} transition-transform duration-250 origin-left`}></span>
                        {item.name}
                      </Link>
                        <FiChevronDown  onClick={() => setSolutionsOpen(!solutionsOpen)} className={ `${solutionsOpen ? '-rotate-180 ' : ''} hover:text-secondary text-white transition-all duration-150 ease-in`} />
                      </div>

                      <AnimatePresence>
                        {solutionsOpen && (
                          <motion.div
                            className="mt-3 flex flex-col gap-3 text-[15px] font-normal"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                          >
                            <Link  href="/our-solutions/modern-data-platforms-governance" className="py-1 relative w-fit group" onClick={() => setOpen(false)}>
                              Modern Data Platforms & Governance
                              <span className="absolute w-full bottom-1 left-0 h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 origin-left"></span>
                            </Link>
                            <Link href="/our-solutions/credit-risk-analytics" className="py-1 relative w-fit group"   onClick={() => setOpen(false)}>
                              Credit Risk Analytics
                              <span className="absolute w-full bottom-1 left-0 h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 origin-left"></span>
                            </Link>
                            <Link href="/our-solutions/data-science-ml" className="py-1 relative w-fit group" onClick={() => setOpen(false)}>
                              Data Science & ML
                              <span className="absolute w-full bottom-1 left-0 h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-250 origin-left"></span>
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              ))}
            </nav>
            {/* logomark */}
           <div className="absolute bottom-[20px] right-[20px] lg:bottom-[40px] lg:right-[40px] w-[50%] opacity-[0.14]">
  <LogoMark />
</div>
        
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}