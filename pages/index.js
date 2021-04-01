import Head from 'next/head'
import Link from 'next/link'
import { SmoothScrollProvider } from '../contexts/SmoothScroll.context'
import Instagram from 'instagram-web-api'
import { request } from "../lib/datocms";
import { renderMetaTags, Image } from "react-datocms";
import { metaTagsFragment, responsiveImageFragment } from "../lib/fragments";
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import TeaserHorizontal from '../components/teaser-horizontal'
import TeaserVertical from '../components/teaser-vertical'
import CaseStudiesFeature from '../components/case-studies-feature'
import Container from '../components/container'
import { fade } from "../helpers/transitions"
import { motion } from 'framer-motion'

export default function Home({ data: {site, home, news, featuredCaseStudies}, instagramPosts }) {
  const metaTags = home.seo.concat(site.favicon);

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

            <Header theme="white" active="home" />

            {/* Hero */}
            <section className="mb-12 md:mb-16 xl:mb-24 pt-20 md:pt-24 xl:pt-32 pb-8 md:pb-8 2xl:pb-12 bg-yellow relative h-[80vh] md:h-[73vh] flex flex-wrap items-end overflow-hidden">
              {/* Background Image / Video @TODO */}
              <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover" data-scroll data-scroll-speed="-0.75">
                <Image
                  data={{
                    ...home.heroImage.responsiveImage,
                    alt: home.heroImage.alt ? home.heroImage.alt : home.heroImage.title,
                  }}
                  className="hero-bg-image absolute top-0 left-0 right-0 bottom-0 w-full h-full transform scale-[1.125]"
                />
              </div>
              {/* Before Shadow */}
              <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-black to-opaque opacity-[0.6] z-0"></div>
              {/* After Shadow */}
              <div className="absolute top-0 left-0 right-0 h-[60%] bg-gradient-to-b from-black to-opaque opacity-[0.3] z-0"></div>
              <Container>
                <div className="relative z-10" data-scroll data-scroll-speed="0.3">
                  <div className="w-11/12 md:w-8/12 xl:w-1/2 text-white">
                    <h1 className="text-2xl sm:text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl mb-5 md:mb-8 font-display leading-extra-tight">{ home.heroHeadline }</h1>

                    <span className="text-sm md:text-base 2xl:text-lg" dangerouslySetInnerHTML={{ __html: home.heroText }} />
                  </div>
                </div>
              </Container>
            </section>
            
            {/* Quote */}
            { home.openingQuote && (
              <section className="mb-12 md:mb-16 xl:mb-24">
                <Container>
                  <div className="w-10/12 max-w-5xl mx-auto text-center">
                    <span className="block text-base md:text-lg uppercase mb-3">B. The Agency</span>
                    <span className="block text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-display leading-extra-tight" dangerouslySetInnerHTML={{ __html: home.openingQuote }} />
                  </div>
                </Container>
              </section>
            )}

            {/* Teaser Content */}
            <section className="mb-12 md:mb-16 xl:mb-24">
              <Container>
                {home.contentBlocks.map((block, i) => {
                  let reversed = false;
                  if (i%2 == 0) {
                    reversed = true
                  }
                  return (
                    <div key={block.id} className="mb-10 md:mb-16 xl:mb-20">
                      {
                        block._modelApiKey === 'content_block' &&
                        <TeaserHorizontal
                          tag={block.tag}
                          heading={block.headline}
                          image={block.image}
                          destination={"/services"}
                          reverse={!reversed}
                        />
                      }
                    </div>
                  )
                })}
              </Container>
            </section>

            {/* Featured News / Case Studies Switcher */}
            <CaseStudiesFeature
              items={featuredCaseStudies}
              showMore
            />

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
                  <Link href="/news">
                    <a aria-label="View Services" className="block text-base md:text-lg uppercase mb-4 md:mb-6 xl:mb-8 text-red ml-auto text-right">
                      → View All
                    </a>
                  </Link>
                </div>
                <div className="flex flex-wrap -mx-3">
                  {news.map((item, i) => {
                    return (
                      <div key={i} className="w-full md:w-1/2 px-3">
                        <div className="mb-8 md:mb-10">
                          <TeaserVertical
                            tag="Agency News"
                            heading={item.headline}
                            image={item.featuredImage}
                            destination={"/news"}
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
                  <a href="https://www.instagram.com/b_theagency/" target="_blank" rel="noreferrer noopener" className="block text-base md:text-lg uppercase mb-4 md:mb-6 xl:mb-8 text-red ml-auto text-right">→ Follow</a>
                </div>
                <div className="flex flex-wrap -mx-2">
                  {instagramPosts.slice(0, 8).map(({ node }, i) => {
                    return (
                      <div key={i} className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                        <img
                          src={node.thumbnail_src}
                          alt={
                            node.edge_media_to_caption.edges[0].node.text
                              .replace(/(#\w+)+/g, "")
                              .trim()
                          }
                          className="w-full"
                        />
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

const HOME_QUERY = `
  query HomePage {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    home {
      id
      slug
      title
      heroHeadline
      heroText
      heroImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1440, h: 810, auto: format }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
      openingQuote
      contentBlocks {
        ... on ContentBlockRecord {
          id
          _modelApiKey
          tag
          headline
          image {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 720, h: 480, auto: format }) {
              ...responsiveImageFragment
            }
            title
            alt
          }
        }
      }
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
    }
    featuredCaseStudies: allCaseStudies(first: 6, filter: {featured: { eq: true }}) {
      id
      slug
      title
      introText
      color {
        hex
      }
      featuredImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 640, h: 640, auto: format }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
    }
    news: allNews(
      first: 2
    ) {
      slug
      title
      headline
      featuredImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 720, h: 480, auto: format }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
    }
  }
  ${metaTagsFragment}
  ${responsiveImageFragment}
`

export async function getStaticProps(context) {
  const data = await request({
    query: HOME_QUERY    
  })

  const client = new Instagram({ username: process.env.IG_USERNAME, password: process.env.IG_PASSWORD });
  await client.login();

  const response = await client.getPhotosByUsername({
      username: "b_theagency",
  });

  return {
    props: {
      data,
      instagramPosts: response.user.edge_owner_to_timeline_media.edges
    },
  }
}