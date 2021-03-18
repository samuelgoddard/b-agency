import Link from 'next/link'
import Container from './container'

export default function Header({ theme, active }) {
  let textColor = 'text-white'
  if (theme === 'white') {
    textColor = 'text-white'
  } else if (theme === 'black') {
    textColor = 'text-black'
  }
  return (
    <header className="pt-6 md:pt-10 absolute top-0 left-0 right-0 z-30">
      <Container>
        <div className="flex flex-wrap">
          <Link href="/">
          <a aria-label="Navigate to Home page" className={`nav-item text-sm lg:text-base inline-block text-red`}>
            <svg className="w-[19px] md:w-[22px] lg:w-[24px]" viewBox="0 0 24 35" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor" fillRule="evenodd"><path d="M8.767 18.761c-2.41 0-4.37-1.979-4.37-4.412 0-2.432 1.96-4.411 4.37-4.411s4.37 1.979 4.37 4.411c0 2.433-1.96 4.412-4.37 4.412zm0-12.65c-1.767 0-3.469.577-4.865 1.621V0H0v22.411h3.902v-1.444a8.125 8.125 0 004.865 1.621c4.507 0 8.174-3.696 8.174-8.239 0-4.542-3.667-8.238-8.174-8.238zM21.882 18.353a2.12 2.12 0 00-2.117 2.118 2.12 2.12 0 002.117 2.117A2.12 2.12 0 0024 20.471a2.12 2.12 0 00-2.118-2.118M0 34.588h24v-4.235H0z"/></g></svg>
            </a>
          </Link>

          <div className="ml-auto hidden md:block">
            <Link href="/">
            <a aria-label="Navigate to Home page" className={`nav-item text-sm lg:text-base font-display uppercase inline-block ml-5 ${textColor} ${active === 'home' ? 'is--active' : ''}`}>
                Home
              </a>
            </Link>
            <Link href="/about">
            <a aria-label="Navigate to About page" className={`nav-item text-sm lg:text-base font-display uppercase inline-block ml-5 ${textColor} ${active === 'about' ? 'is--active' : ''}`}>
                About
              </a>
            </Link>
            <Link href="/case-studies">
            <a aria-label="Navigate to Case Studies page" className={`nav-item text-sm lg:text-base font-display uppercase inline-block ml-5 ${textColor} ${active === 'case-studies' ? 'is--active' : ''}`}>
                Case Studies
              </a>
            </Link>
            <Link href="/services">
            <a aria-label="Navigate to Services page" className={`nav-item text-sm lg:text-base font-display uppercase inline-block ml-5 ${textColor} ${active === 'services' ? 'is--active' : ''}`}>
                Services
              </a>
            </Link>
            <Link href="/news">
            <a aria-label="Navigate to News page" className={`nav-item text-sm lg:text-base font-display uppercase inline-block ml-5 ${textColor} ${active === 'news' ? 'is--active' : ''}`}>
                News
              </a>
            </Link>
            <Link href="/contact">
            <a aria-label="Navigate to Contact page" className={`nav-item text-sm lg:text-base font-display uppercase inline-block ml-5 ${textColor} ${active === 'contact' ? 'is--active' : ''}`}>
                Contact
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}