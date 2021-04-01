import Head from 'next/head'
import { request } from '../lib/datocms'
import { renderMetaTags } from 'react-datocms'
import { metaTagsFragment, responsiveImageFragment } from '../lib/fragments'
import { SmoothScrollProvider } from '../contexts/SmoothScroll.context'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import TeaserHorizontal from '../components/teaser-horizontal'
import TeaserVertical from '../components/teaser-vertical'
import Container from '../components/container'
import Logo from '../components/logo'
import { fade } from "../helpers/transitions"
import { motion } from 'framer-motion'

export default function About({ data: { about, site }}) {
  const metaTags = about.seo.concat(site.favicon);

  return (
    <SmoothScrollProvider options={{ smooth: true, lerp: 0.065 }}>
      <Layout>
        <Head>{renderMetaTags(metaTags)}</Head>

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
                    <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl mb-5 md:mb-8 font-display leading-extra-tight text-red">{ about.headline }</h1>
                  </div>
                </div>
              </Container>
            </section>

            {/* Content Blocks */}
            <section className="mb-12 md:mb-16 xl:mb-24">
              <Container>
                <div className="mb-10 md:mb-16 xl:mb-20 relative">
                  <TeaserHorizontal
                    text={about.block1Text}
                    image={about.block1Image}
                    fancyText
                    arrow
                  />
                </div>
                <div className="mb-10 md:mb-16 xl:mb-20">
                  <div className="flex flex-wrap">
                    <div className="w-full xl:w-auto">
                      <Logo sizeClass="w-[19px] md:w-[22px] lg:w-[24px] text-red mr-6 lg:mr-0 mt-2 md:mt-0 mb-4 xl:mt-2 xl:mb-0 xl:mr-12 2xl:mr-16" />
                    </div>
                    <div className="bg-yellow flex-1 bg-opacity-[0.35]">
                      <TeaserHorizontal
                        logo
                        reverse
                        fancyText
                        text={about.block2Text}
                        image={about.block2Image}
                      />
                    </div>
                  </div>
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
    </SmoothScrollProvider>
  )
}

const ABOUT_QUERY = `
  query AboutPage {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    about {
      id
      slug
      title
      headline
      block1Text
      block1Image {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 720, h: 480, auto: format }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
      block2Text
      block2Image {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 720, h: 480, auto: format }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
    }
  }
  ${metaTagsFragment}
  ${responsiveImageFragment}
`

export async function getStaticProps() {
  const data = await request({
    query: ABOUT_QUERY
  })

  return {
    props: {
      data,
    },
  }
}