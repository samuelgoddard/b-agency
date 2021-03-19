import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import TeaserHorizontal from '../components/teaser-horizontal'
import TeaserVertical from '../components/teaser-vertical'
import Container from '../components/container'
import { fade } from "../helpers/transitions"
import { motion } from 'framer-motion'

export default function Services() {
  return (
    <Layout>
      <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>News | b. Agency</title>
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

          <Header theme="black" active="news" />

          {/* Hero */}
          <section className="mb-4 md:mb-6 pt-24 md:pt-32 xl:pt-40">
            <Container>
              <div className="relative z-10">
                <div className="w-10/12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl font-display leading-extra-tight mb-0 pb-0">News</h1>
                </div>
              </div>
            </Container>
          </section>

          {/* News Blocks */}
          <section className="mb-12 md:mb-16 xl:mb-20">
            <Container>
              <div className="border-t-2 border-black pt-5 md:pt-8">
                <span className="block text-xl md:text-2xl xl:text-3xl mb-4 md:mb-6 xl:mb-8 font-display leading-extra-tight">Explore</span>
                <div className="flex flex-wrap md:-mx-2">
                  {Array.from(Array(4), (e, i) => {
                    return (
                      <div key={i} className="w-full md:w-1/2 md:px-2">
                        <div className="mb-12 md:mb-16">
                          <TeaserVertical
                            heading="Service Title"
                            listItems={[
                              'Celebrity, influencer & industry tastemaker outreach, engagement & organic product placement & brand advocacy',
                              'Guestlist creation & management',
                              'Celebrity & influencer campaign execution including international media tours, cover shoots, live appearances, media junkets & private events',
                              'Paid influencer marketing strategy, deal brokering & budget management'
                            ]}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </Container>
          </section>
          <Footer />
        </motion.div>
      </motion.div>
    </Layout>
  )
}
