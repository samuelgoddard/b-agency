import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import TeaserHorizontal from '../components/teaser-horizontal'
import TeaserVertical from '../components/teaser-vertical'
import CaseStudiesFeature from '../components/case-studies-feature'
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

          {/* Hero */}
          <section className="mb-12 md:mb-16 xl:mb-24 pt-20 md:pt-24 xl:pt-32 pb-8 md:pb-8 2xl:pb-12 bg-yellow relative h-[80vh] md:h-[73vh] flex flex-wrap items-end overflow-hidden">
            {/* Background Image / Video @TODO */}
            <div className="hero-bg-image absolute top-0 left-0 right-0 bottom-0 w-full h-full">
              <img src="https://placedog.net/1300/640" alt="PLACEHOLDER CHANGE ME SAM" className="w-full" />
            </div>
            {/* Before Shadow */}
            <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-black to-opaque opacity-[0.6] z-0"></div>
            {/* After Shadow */}
            <div className="absolute top-0 left-0 right-0 h-[60%] bg-gradient-to-b from-black to-opaque opacity-[0.3] z-0"></div>
            <Container>
              <div className="relative z-10">
                <div className="w-11/12 md:w-8/12 xl:w-1/2 text-white">
                  <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl mb-5 md:mb-8 font-display leading-extra-tight">Modern communication for leading, pioneering &amp; next generation brands.</h1>

                  <p className="text-sm md:text-base 2xl:text-lg">Multi-channel impact &amp; influence through digital-first brand strategy, storytelling, PR, content, influencer, community, experiences, collaboration, cultural relevance &amp; innovation.</p>
                </div>
              </div>
            </Container>
          </section>
          
          {/* Quote */}
          <section className="mb-12 md:mb-16 xl:mb-24">
            <Container>
              <div className="w-10/12 max-w-5xl mx-auto text-center">
                <span className="block text-base md:text-lg uppercase mb-3">B. The Agency</span>
                <span className="block text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-display leading-extra-tight">Working with the world’s most exciting ecommerce brands, digital talent &amp; publishers, we use industry intelligence, network and experience to help our clients navigate shifting trends.</span>
              </div>
            </Container>
          </section>

          {/* Teaser Content */}
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

          {/* Featured Work / Case Studies Switcher */}
          <CaseStudiesFeature showMore />

          {/* Clients */}
          <section className="mb-12 md:mb-16 xl:mb-24">
            <Container>
              <span className="block text-base md:text-lg uppercase mb-4 md:mb-6 xl:mb-8">Clients</span>
              <div className="flex flex-wrap -mx-2">
                {Array.from(Array(12), (e, i) => {
                  return (
                    <div key={i} className="w-1/2 sm:w-1/3 md:w-1/4 xl:w-1/5 xl:w-1/5 2xl:w-1/6 px-2 mb-4">
                      <div className="w-full h-full bg-gray p-4 lg:p-8 text-center flex items-center justify-center">
                        <div className="w-24 md:w-32 h-24 md:h-32 bg-black flex items-center justify-center opacity-[0.05] text-white">[Logo]</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Container>
          </section>
            
          {/* Latest News */}
          <section className="mb-12 md:mb-16 xl:mb-24">
            <Container>
              <div className="flex flex-wrap">
                <span className="block text-base md:text-lg uppercase mb-4 md:mb-6 xl:mb-8">Latest</span>
                <span className="block text-base md:text-lg uppercase mb-4 md:mb-6 xl:mb-8 text-red ml-auto text-right">→ View All</span>
              </div>
              <div className="flex flex-wrap -mx-3">
                {Array.from(Array(2), (e, i) => {
                  return (
                    <div key={i} className="w-full md:w-1/2 px-3">
                      <div className="mb-8 md:mb-10">
                        <TeaserVertical
                          tag="Agency News"
                          heading="Strategy, storytelling, values, trends &amp; insight."
                          destination={"/about"}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </Container>
          </section>

          {/* Insta */}
          <section className="mb-12 md:mb-16 xl:mb-24">
            <Container>
              <div className="flex flex-wrap">
                <span className="block text-base md:text-lg uppercase mb-4 md:mb-6 xl:mb-8">Instagram</span>
                <span className="block text-base md:text-lg uppercase mb-4 md:mb-6 xl:mb-8 text-red ml-auto text-right">→ Follow</span>
              </div>
              <div className="flex flex-wrap -mx-2">
                {Array.from(Array(8), (e, i) => {
                  return (
                    <div key={i} className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                        <img src="https://placedog.net/320/320" alt="PLACEHOLDER CHANGE ME SAM" className="w-full" />
                    </div>
                  )
                })}
              </div>
            </Container>
          </section>

          <Footer />
        </motion.div>
      </motion.div>
    </Layout>
  )
}
