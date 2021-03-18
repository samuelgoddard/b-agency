import Link from 'next/link'
import Container from './container'

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="border-t-2 border-black pt-5 pb-8 md:pt-8 md:pb-16">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <span className="text-xl xl:text-2xl font-display mb-2 md:mb-3 xl:mb-5 block">Stay in touch</span>
            </div>
            <div className="w-full md:w-1/2">
              <nav>
                <span className="text-xl xl:text-2xl font-display mb-2 md:mb-3 xl:mb-5 block">Discover</span>
                <ul className="flex flex-wrap">
                  <li className="w-1/2">
                    <Link href="/">
                      <a aria-label="Navigate to Home page" className="text-base xl:text-lg block">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="w-1/2">
                    <Link href="/">
                      <a aria-label="Navigate to News page" className="text-base xl:text-lg block">
                        News
                      </a>
                    </Link>
                  </li>
                  <li className="w-1/2">
                    <Link href="/">
                      <a aria-label="Navigate to About page" className="text-base xl:text-lg block">
                        About
                      </a>
                    </Link>
                  </li>
                  <li className="w-1/2">
                    <Link href="/">
                      <a aria-label="Navigate to Contact page" className="text-base xl:text-lg block">
                        Contact
                      </a>
                    </Link>
                  </li>
                  <li className="w-1/2">
                    <Link href="/">
                      <a aria-label="Navigate to Services page" className="text-base xl:text-lg block">
                        Services
                      </a>
                    </Link>
                  </li>
                  <li className="w-1/2">
                    <Link href="/">
                      <a aria-label="Navigate to Diversity &amp; Inclusion page" className="text-base xl:text-lg block">
                        Diversity &amp; Inclusion
                      </a>
                    </Link>
                  </li>
                  <li className="w-1/2">
                    <Link href="/">
                      <a aria-label="Navigate to Jobs page" className="text-base xl:text-lg block">
                        Jobs
                      </a>
                    </Link>
                  </li>
                  <li className="w-1/2">
                    <Link href="/">
                      <a aria-label="Navigate to Privacy Policy page" className="text-base xl:text-lg block">
                        Privacy Policy
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}