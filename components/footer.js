import Link from 'next/link'
import Container from './container'

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="border-t-2 border-black pt-5 pb-12 md:pt-8 md:pb-16 xl:pb-20">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <span className="text-xl xl:text-2xl font-display mb-2 md:mb-3 xl:mb-5 block">Stay in touch</span>

              <form className="newsletter-form md:max-w-xs w-full relative validate mb-3 md:mb-5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
                  <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL" className="sr-only">Email Address</label>
                    <input name="EMAIL" type="email" id="mce-EMAIL" className="bg-transparent border border-black border-opacity-25 appearance-none xl:text-lg block py-3 xl:py-2 w-full pl-3 pr-24 focus:border-opacity-100 focus:outline-none required email uppercase" placeholder="Enter Email" />
                  </div>

                  <div id="mce-responses" className="clear">
                    <div className="response" id="mce-error-response" className="hidden"></div>
                    <div className="response" id="mce-success-response" className="hidden"></div>
                  </div>

                  <div className="sr-only" aria-hidden="true">
                    <input type="text" name="b_0707fd5fce6636484cfe36669_f4fff79bc3" tabIndex="-1" />
                  </div>
                  <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="absolute bottom-0 right-0 pb-0 h-full w-auto bg-black px-4 transition-all duration-300 ease-in-out text-white uppercase hover:bg-red focus:bg-red">
                    <span className="block">Submit</span>
                  </button>
                </div>
              </form>

              <div className="flex flex-wrap items-center">
                {/* Insta */}
                <a href="#" className="block pl-0 p-2 md:p-2 xl:p-3 hover:text-red focus:text-red transition ease-in-out duration-200" aria-label="Visit our Instagram">
                  <svg className="w-4 md:w-5 xl:w-6 mt-1 block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12.004 5.838a6.157 6.157 0 00-6.158 6.158 6.157 6.157 0 006.158 6.158 6.157 6.157 0 006.158-6.158 6.157 6.157 0 00-6.158-6.158zm0 10.155a3.996 3.996 0 113.997-3.997 3.995 3.995 0 01-3.997 3.997z"/><path fill="currentColor" d="M16.948.076c-2.208-.103-7.677-.098-9.887 0-1.942.091-3.655.56-5.036 1.941C-.283 4.325.012 7.435.012 11.996c0 4.668-.26 7.706 2.013 9.979 2.317 2.316 5.472 2.013 9.979 2.013 4.624 0 6.22.003 7.855-.63 2.223-.863 3.901-2.85 4.065-6.419.104-2.209.098-7.677 0-9.887-.198-4.213-2.459-6.768-6.976-6.976zm3.495 20.372c-1.513 1.513-3.612 1.378-8.468 1.378-5 0-7.005.074-8.468-1.393-1.685-1.677-1.38-4.37-1.38-8.453 0-5.525-.567-9.504 4.978-9.788 1.274-.045 1.649-.06 4.856-.06l.045.03c5.329 0 9.51-.558 9.761 4.986.057 1.265.07 1.645.07 4.847-.001 4.942.093 6.959-1.394 8.453z"/><circle fill="currentColor" cx="18.406" cy="5.595" r="1.439"/></svg>
                </a>

                {/* Facebook */}
                <a href="#" className="block p-2 md:p-2 xl:p-3 hover:text-red focus:text-red transition ease-in-out duration-200" aria-label="Visit our Facebook">
                <svg className="w-4 md:w-5 xl:w-6 block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0c-3.159 0-5.323 1.987-5.323 5.639V9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877V6.062c.001-1.233.333-2.077 2.051-2.077z"/></svg>
                </a>

                {/* Twitter */}
                <a href="#" className="block p-2 md:p-2 xl:p-3 hover:text-red focus:text-red transition ease-in-out duration-200" aria-label="Visit our Twitter">
                  <svg className="w-4 md:w-5 xl:w-6 mt-1 block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"/></svg>
                </a>

                {/* Linkedin */}
                <a href="#" className="block p-2 md:p-2 xl:p-3 hover:text-red focus:text-red transition ease-in-out duration-200" aria-label="Visit our Linkedin">
                  <svg className="w-4 md:w-5 xl:w-6 block" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M23.994 24v-.001H24v-8.802c0-4.306-.927-7.623-5.961-7.623-2.42 0-4.044 1.328-4.707 2.587h-.07V7.976H8.489v16.023h4.97v-7.934c0-2.089.396-4.109 2.983-4.109 2.549 0 2.587 2.384 2.587 4.243V24zM.396 7.977h4.976V24H.396zM2.882 0C1.291 0 0 1.291 0 2.882s1.291 2.909 2.882 2.909 2.882-1.318 2.882-2.909A2.884 2.884 0 002.882 0z"/></svg>
                </a>

              </div>
            </div>
            <div className="w-full md:w-1/2">
              <nav>
                <span className="text-xl xl:text-2xl font-display mb-2 md:mb-3 xl:mb-5 block">Discover</span>
                <ul className="flex flex-wrap">
                  <li className="w-1/2">
                    <Link href="/">
                      <a aria-label="Navigate to Home page" className="text-base xl:text-lg block hover:text-red focus:text-red transition ease-in-out duration-200">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="w-1/2">
                    <Link href="/">
                      <a aria-label="Navigate to News page" className="text-base xl:text-lg block hover:text-red focus:text-red transition ease-in-out duration-200">
                        News
                      </a>
                    </Link>
                  </li>
                  <li className="w-1/2">
                    <Link href="/">
                      <a aria-label="Navigate to About page" className="text-base xl:text-lg block hover:text-red focus:text-red transition ease-in-out duration-200">
                        About
                      </a>
                    </Link>
                  </li>
                  <li className="w-1/2">
                    <Link href="/">
                      <a aria-label="Navigate to Contact page" className="text-base xl:text-lg block hover:text-red focus:text-red transition ease-in-out duration-200">
                        Contact
                      </a>
                    </Link>
                  </li>
                  <li className="w-1/2">
                    <Link href="/">
                      <a aria-label="Navigate to Services page" className="text-base xl:text-lg block hover:text-red focus:text-red transition ease-in-out duration-200">
                        Services
                      </a>
                    </Link>
                  </li>
                  <li className="w-1/2">
                    <Link href="/">
                      <a aria-label="Navigate to Diversity &amp; Inclusion page" className="text-base xl:text-lg block hover:text-red focus:text-red transition ease-in-out duration-200">
                        Diversity &amp; Inclusion
                      </a>
                    </Link>
                  </li>
                  <li className="w-1/2">
                    <Link href="/">
                      <a aria-label="Navigate to Jobs page" className="text-base xl:text-lg block hover:text-red focus:text-red transition ease-in-out duration-200">
                        Jobs
                      </a>
                    </Link>
                  </li>
                  <li className="w-1/2">
                    <Link href="/">
                      <a aria-label="Navigate to Privacy Policy page" className="text-base xl:text-lg block hover:text-red focus:text-red transition ease-in-out duration-200">
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