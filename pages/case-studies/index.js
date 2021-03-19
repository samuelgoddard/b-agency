import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Header from '../../components/header'
import Footer from '../../components/footer'
import TeaserVertical from '../../components/teaser-vertical'
import CaseStudiesFeature from '../../components/case-studies-feature'
import Container from '../../components/container'
import { fade } from "../../helpers/transitions"
import { motion } from 'framer-motion'

export default function CaseStudies() {
  return (
    <Layout>
      <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Case Studies | b. Agency</title>
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

          <Header theme="black" active="case-studies" />

          {/* Featured Work / Case Studies Switcher */}
          <div className="pt-[75px] md:pt-[100px] lg:pt-[107px]">
            <CaseStudiesFeature bgColor="bg-pink" />
          </div>

          {/* Latest News */}
          <section className="mb-12 md:mb-16 xl:mb-24">
            <Container>
            <span className="block text-xl md:text-2xl xl:text-3xl mb-4 md:mb-6 xl:mb-8 font-display leading-extra-tight">More case studies</span>
              <div className="flex flex-wrap -mx-3">
                {Array.from(Array(4), (e, i) => {
                  return (
                    <div key={i} className="w-full md:w-1/2 px-3">
                      <div className="mb-10 md:mb-16 xl:mb-20">
                        <TeaserVertical
                          heading="Another Case Study"
                          destination={"/about"}
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
