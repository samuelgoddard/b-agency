import Head from 'next/head'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import TeaserVertical from '../components/teaser-vertical'
import Arrow from '../components/arrow'
import Container from '../components/container'
import { fade } from "../helpers/transitions"
import { motion } from 'framer-motion'

export default function Services() {
  return (
    <Layout>
      <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Services | b. Agency</title>
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

          <Header theme="black" active="services" />

          {/* Hero */}
          <section className="mb-8 pt-20 md:pt-24 xl:pt-32">
            <Container>
              <div className="relative z-10">
                <div className="w-10/12">
                  <h1 className="block text-base md:text-lg xl:text-xl font-display mb-3 md:mb-5">Services</h1>
                </div>
              </div>
            </Container>
          </section>

          {/* Services Blocks */}
          {Array.from(Array(3), (e, i) => {
            return (
              <section key={i} className="mb-12 md:mb-16 xl:mb-20">
                <Container>
                  <div className="mb-8 md:mb-10 xl:mb-12 flex flex-wrap items-end md:-mx-5 relative">
                    <div className="w-full md:w-10/12 md:px-5">
                      <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl mb-3 md:mb-4 font-display leading-extra-tight text-red uppercase break-words">Communications</h2>
                      <p className="text-base md:text-lg w-10/12">PR, tastemaker &amp; influencer, VIP, collaborations &amp; partnerships, events &amp; brand experiences.</p>
                    </div>
                    <div className="md:w-2/12 md:px-5 md:text-right text-[#d2d2e6] absolute bottom-0 right-0 md:relative">
                      <Arrow sizeClass="w-5 md:w-8 xl:w-10 md:ml-auto transform rotate-180" />
                    </div>
                  </div>
                  
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
            )
          })}

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
