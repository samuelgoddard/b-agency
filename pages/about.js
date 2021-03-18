import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import TeaserHorizontal from '../components/teaser-horizontal'
import TeaserVertical from '../components/teaser-vertical'
import Container from '../components/container'
import { fade } from "../helpers/transitions"
import { motion } from 'framer-motion'

export default function About() {
  return (
    <Layout>
      <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>About | b. Agency</title>
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

          <Header theme="black" active="about" />

          {/* Hero */}
          <section className="mb-12 md:mb-16 xl:mb-20 pt-20 md:pt-24 xl:pt-32">
            <Container>
              <div className="relative z-10">
                <div className="w-10/12">
                  <span className="block text-base md:text-lg xl:text-xl font-display mb-3 md:mb-5">About b.</span>
                  <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl mb-5 md:mb-8 font-display leading-extra-tight text-red">Born boutique in 2004, today we offer big-picture agency thinking with the same energy, honesty &amp; attention to detail. </h1>
                </div>
              </div>
            </Container>
          </section>

          {/* Content Blocks */}
          <section className="mb-12 md:mb-16 xl:mb-24">
            <Container>
              <div className="mb-10 md:mb-16 xl:mb-20">
                <TeaserHorizontal
                  heading="Digital-first, we deliver beyond the boundaries of traditional PR, blending wellbeing, beauty, fashion &amp; lifestyle strategy and creativity with sharp commercial awareness, direct-to-consumer know-how and a make-it-happen attitude."
                />
              </div>
              <div className="mb-10 md:mb-16 xl:mb-20">
                <TeaserHorizontal
                  reverse
                  heading="The result? Thoughtful, integrated work with relevance, reach &amp; ROI."
                  text={`<p>Led by founder &amp; CEO Sally Anne Stevens and co-owner &amp; Managing Partner Holly Brunskill, we work alongside and in collaboration with our sister agencies SUMMER and BEING, infusing insider content-creator, social media platform and creative service expertise to all our work; and, through our international partners deliver coordinated global PR, communications &amp; influencer marketing impact.<p>`}
                />
              </div>
            </Container>
          </section>

          {/* News */}
          <section className="mb-12 md:mb-16 xl:mb-24">
            <Container>
              <span className="block text-xl md:text-2xl xl:text-3xl mb-4 md:mb-6 xl:mb-8 font-display leading-extra-tight">Explore</span>
              <div className="flex flex-wrap -mx-3">
                {Array.from(Array(2), (e, i) => {
                  return (
                    <div key={i} className="w-full md:w-1/2 px-3">
                      <div className="mb-8 md:mb-10">
                        <TeaserVertical
                          heading="Our Services"
                          destination={"/"}
                        />
                      </div>
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
