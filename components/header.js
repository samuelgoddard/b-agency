import Link from 'next/link'
import Container from './container'
import Logo from './logo'

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
            <a aria-label="Navigate to Home page" className={`nav-item text-base transition ease-in-out duration-200 lg:text-lg inline-block text-red`}>
              <Logo sizeClass="w-[19px] md:w-[22px] lg:w-[24px]" />
            </a>
          </Link>

          <div className="ml-auto hidden md:block">
            <Link href="/">
            <a aria-label="Navigate to Home page" className={`nav-item text-base transition ease-in-out duration-200 lg:text-lg font-display inline-block ml-5 ${textColor} ${active === 'home' ? 'is--active' : 'hover:text-opacity-50 focus:text-opacity-75'}`}>
                Home
              </a>
            </Link>
            <Link href="/about">
            <a aria-label="Navigate to About page" className={`nav-item text-base transition ease-in-out duration-200 lg:text-lg font-display inline-block ml-5 ${textColor} ${active === 'about' ? 'is--active' : 'hover:text-opacity-50 focus:text-opacity-75'}`}>
                About
              </a>
            </Link>
            <Link href="/case-studies">
            <a aria-label="Navigate to Case Studies page" className={`nav-item text-base transition ease-in-out duration-200 lg:text-lg font-display inline-block ml-5 ${textColor} ${active === 'case-studies' ? 'is--active' : 'hover:text-opacity-50 focus:text-opacity-75'}`}>
                Case Studies
              </a>
            </Link>
            <Link href="/services">
            <a aria-label="Navigate to Services page" className={`nav-item text-base transition ease-in-out duration-200 lg:text-lg font-display inline-block ml-5 ${textColor} ${active === 'services' ? 'is--active' : 'hover:text-opacity-50 focus:text-opacity-75'}`}>
                Services
              </a>
            </Link>
            <Link href="/news">
            <a aria-label="Navigate to News page" className={`nav-item text-base transition ease-in-out duration-200 lg:text-lg font-display inline-block ml-5 ${textColor} ${active === 'news' ? 'is--active' : 'hover:text-opacity-50 focus:text-opacity-75'}`}>
                News
              </a>
            </Link>
            <Link href="/contact">
            <a aria-label="Navigate to Contact page" className={`nav-item text-base transition ease-in-out duration-200 lg:text-lg font-display inline-block ml-5 ${textColor} ${active === 'contact' ? 'is--active' : 'hover:text-opacity-50 focus:text-opacity-75'}`}>
                Contact
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}