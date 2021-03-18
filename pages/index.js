import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import TeaserHorizontal from '../components/teaser-horizontal'
import Container from '../components/container'
import { fade } from "../helpers/transitions"
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <Layout>
      <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Home | b. Agency</title>
          <meta
          name="description"
          content="nextJS boilerplate"
          />
          <meta name="og:title" content="Website Title" />
          <meta name="twitter:card" content="summary_large_image" />
      </Head>      

      {/* Hero */}
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <motion.div variants={fade}>

          <Header theme="white" active="home" />

          <section className="mb-12 md:mb-16 xl:mb-24 pt-20 md:pt-24 xl:pt-32 pb-8 md:pb-8 2xl:pb-12 bg-yellow relative h-[80vh] md:h-[65vh] flex flex-wrap items-end">
            {/* Before Shadow */}
            <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-black to-opaque opacity-50 z-0"></div>
            {/* After Shadow */}
            <div className="absolute top-0 left-0 right-0 h-[60%] bg-gradient-to-b from-black to-opaque opacity-25 z-0"></div>
            <Container>
              <div className="relative z-10">
                <div className="w-11/12 md:w-8/12 xl:w-1/2 text-white">
                  <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl mb-5 md:mb-8 font-display leading-extra-tight">Modern communication for leading, pioneering &amp; next generation brands.</h1>

                  <p className="text-sm md:text-base 2xl:text-lg">Multi-channel impact &amp; influence through digital-first brand strategy, storytelling, PR, content, influencer, community, experiences, collaboration, cultural relevance &amp; innovation.</p>
                </div>
              </div>
            </Container>
          </section>

          <section className="mb-12 md:mb-16 xl:mb-24">
            <Container>
              <div className="w-10/12 max-w-5xl mx-auto text-center">
                <span className="block text-base md:text-lg uppercase mb-3">B. The Agency</span>
                <span className="block text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-display leading-extra-tight">Working with the world’s most exciting ecommerce brands, digital talent &amp; publishers, we use industry intelligence, network and experience to help our clients navigate shifting trends.</span>
              </div>
            </Container>
          </section>

          <section className="mb-12 md:mb-16 xl:mb-24">
            <Container>
              <div className="mb-10 md:mb-16 xl:mb-20">
                <TeaserHorizontal
                  tag="Communications"
                  heading="PR, tastemaker &amp; influencer, VIP, collaborations &amp; partnerships, events &amp; brand experiences."
                  destination={"/about"}
                />
              </div>
              <div className="mb-10 md:mb-16 xl:mb-20">
                <TeaserHorizontal
                  reverse
                  tag="Community"
                  heading="Community-creation, conversation &amp; engagement, creative &amp; production services, social media platform management."
                  destination={"/about"}
                />
              </div>
              <div className="mb-10 md:mb-16 xl:mb-20">
                <TeaserHorizontal
                  tag="Clarity"
                  heading="Strategy, storytelling, values, trends &amp; insight."
                  destination={"/about"}
                />
              </div>
            </Container>
          </section>

          <section className="bg-yellow mb-12 md:mb-16 xl:mb-24">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 py-8 md:py-12 xl:py-20 px-6 md:px-8 2xl:px-0 max-w-3xl md:ml-auto">
                <div className="flex flex-wrap 2xl:pr-16 h-full">
                  <span className="block text-base md:text-lg uppercase mb-8">Featured Work</span>
                  <span className="block text-base md:text-lg uppercase mb-8 ml-auto text-right text-red">View all</span>

                  <ul className="w-full self-end justify-self-end">
                    <li className="block mb-1">
                      <Link href={"/about"}>
                        <a aria-label="View Nimbe Project" className="block text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl uppercase font-display leading-extra-tight transition-all duration-300 ease-in-out hover:pl-8 focus:pl-8">
                          Nimble
                        </a>
                      </Link>
                    </li>
                    <li className="block mb-1">
                      <Link href={"/about"}>
                        <a aria-label="View Nimbe Project" className="block text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl uppercase font-display leading-extra-tight transition-all duration-300 ease-in-out hover:pl-8 focus:pl-8">
                          Morphe
                        </a>
                      </Link>
                    </li>
                    <li className="block mb-1">
                      <Link href={"/about"}>
                        <a aria-label="View Nimbe Project" className="block text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl uppercase font-display leading-extra-tight transition-all duration-300 ease-in-out hover:pl-8 focus:pl-8">
                          Missguided
                        </a>
                      </Link>
                    </li>
                    <li className="block mb-1">
                      <Link href={"/about"}>
                        <a aria-label="View Nimbe Project" className="block text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl uppercase font-display leading-extra-tight transition-all duration-300 ease-in-out hover:pl-8 focus:pl-8">
                          Bondi Sans
                        </a>
                      </Link>
                    </li>
                    <li className="block mb-1">
                      <Link href={"/about"}>
                        <a aria-label="View Nimbe Project" className="block text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl uppercase font-display leading-extra-tight transition-all duration-300 ease-in-out hover:pl-8 focus:pl-8">
                          Quays
                        </a>
                      </Link>
                    </li>
                    <li className="block mb-1">
                      <Link href={"/about"}>
                        <a aria-label="View Nimbe Project" className="block text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl uppercase font-display leading-extra-tight transition-all duration-300 ease-in-out hover:pl-8 focus:pl-8">
                          Seraphine
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative">
                <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-black to-opaque opacity-75 z-0"></div>
                <p className="absolute bottom-0 left-0 p-6 md:p-8 text-white w-11/12 lg:w-8/12 xl:w-1/2 z-10 lg:text-lg">The dizzying growth of this generation’s ultimate fashion retailer Industry disruption, trust and trend integrity since 2009.</p>
                <img src="https://placedog.net/640/640" alt="PLACEHOLDER CHANGE ME SAM" className="w-full" />
              </div>
            </div>
          </section>

          <Footer />
        </motion.div>
      </motion.div>
    </Layout>
  )
}
