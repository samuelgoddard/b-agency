import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'
import Logo from './logo'
import Arrow from './arrow'
import { useRouter } from 'next/router'

export default function mobileMenu({active}) {

  const router = useRouter();
  let currentPath = router.pathname;

  //State management for mobile menu
  const [open, setOpen] = useState(false);

  const container = {
      hidden: { opacity: 0 },
      show: {
      opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
  };

  return (
    <>
      <button open={open} onClick={() => setOpen(!open)} className={`btn-mobile-menu md:hidden ${open ? 'open text-white' : 'text-red'}`}>
        <span />
        <span />
        <span />
      </button>

      {/* Mobile Menu */}
      <div open={open} className={`fixed text-white top-0 left-0 z-0 w-full h-full transition-all duration-200 mobile-menu md:hidden ${open ? 'block z-40' : 'hidden'}`}>

        <div className={`bg-red transition-all duration-200 h-full w-full p-6 ${open ? 'opacity-100' : 'opacity-0'}`}>
          
          <motion.div className="" variants={container} initial="hidden" animate={open ? 'show' : ''}>

            <Link href="/">
              <a aria-label="Navigate to Home page" className={`nav-item text-base transition ease-in-out duration-200 lg:text-lg inline-block text-white`}>
                <Logo sizeClass="w-[19px] md:w-[22px] lg:w-[24px]" />
              </a>
            </Link>

            <Link href="/">
              <a aria-label="Navigate to Home page" className={`nav-item text-3xl text-white transition ease-in-out duration-200 lg:text-3xl font-display flex items-center mb-1 mt-8`}>
                {active === 'home' && (
                  <Arrow sizeClass="w-4 md:w-5 xl:w-6 transform -rotate-90 mr-3" />
                )}
                <span className="block -mt-1">Home</span>
              </a>
            </Link>

            <Link href="/about">
              <a aria-label="Navigate to About page" className={`nav-item text-3xl text-white transition ease-in-out duration-200 lg:text-3xl font-display flex items-center mb-1`}>
                {active === 'about' && (
                  <Arrow sizeClass="w-4 transform -rotate-90 mr-3 opacity-50" />
                )}
                <span className="block -mt-1">About</span>
              </a>
            </Link>

            <Link href="/case-studies">
              <a aria-label="Navigate to About page" className={`nav-item text-3xl text-white transition ease-in-out duration-200 lg:text-3xl font-display flex items-center mb-1`}>
                {active === 'case-studies' && (
                  <Arrow sizeClass="w-4 transform -rotate-90 mr-3 opacity-50" />
                )}
                <span className="block -mt-1">Case Studies</span>
              </a>
            </Link>

            <Link href="/services">
              <a aria-label="Navigate to About page" className={`nav-item text-3xl text-white transition ease-in-out duration-200 lg:text-3xl font-display flex items-center mb-1`}>
                {active === 'services' && (
                  <Arrow sizeClass="w-4 transform -rotate-90 mr-3 opacity-50" />
                )}
                <span className="block -mt-1">Services</span>
              </a>
            </Link>

            <Link href="/news">
              <a aria-label="Navigate to About page" className={`nav-item text-3xl text-white transition ease-in-out duration-200 lg:text-3xl font-display flex items-center mb-1`}>
                {active === 'news' && (
                  <Arrow sizeClass="w-4 transform -rotate-90 mr-3 opacity-50" />
                )}
                <span className="block -mt-1">News</span>
              </a>
            </Link>

            <Link href="/contact">
              <a aria-label="Navigate to About page" className={`nav-item text-3xl text-white transition ease-in-out duration-200 lg:text-3xl font-display flex items-center mb-1`}>
                {active === 'contact' && (
                  <Arrow sizeClass="w-4 transform -rotate-90 mr-3 opacity-50" />
                )}
                <span className="block -mt-1">Contact</span>
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  )
}