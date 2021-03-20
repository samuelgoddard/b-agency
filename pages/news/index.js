import Head from 'next/head'
import Link from 'next/link'
import { request } from "../../lib/datocms";
import { renderMetaTags, Image } from "react-datocms";
import { metaTagsFragment, responsiveImageFragment } from "../../lib/fragments";
import Layout from '../../components/layout'
import Header from '../../components/header'
import Footer from '../../components/footer'
import NewsTeaserHorizontal from '../../components/news-teaser-horizontal'
import NewsTeaserVertical from '../../components/news-teaser-vertical'
import TeaserVertical from '../../components/teaser-vertical'
import Container from '../../components/container'
import { fade } from "../../helpers/transitions"
import { motion } from 'framer-motion'

export default function NewsIndex({ data: { categories, allNews, featuredNewsSingle, featuredNewsTriple, site}}) {
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
          <section className="mb-16 md:mb-20 xl:mb-24">
            <Container>
              <div className="border-t-2 border-black pt-4 md:pt-6">
                <div className="relative mb-4 xl:mb-8">
                  <div className="absolute top-0 right-0 bottom-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
                  
                  <div className="w-full whitespace-nowrap overflow-x-scroll hide-scroll relative">
                    {categories.map((cat, i) => {
                      return (
                        <Link href={`/category/${cat.slug}`} key={i}>
                          <a aria-label="View Services" className={`inline-block mr-3 mb-3 px-2 md:px-3 xl:px-4 py-1 xl:py-2 text-sm md:text-base hover:bg-opacity-100 focus:bg-opacity-100 focus:border-none focus:outline-none tracking-tight transition ease-in-out duration-200 bg-[#cbd5e0] bg-opacity-60 text-black`}>
                            {cat.title}
                          </a>
                        </Link>
                      )
                    })}
                  </div>
                </div>
                <div className="flex flex-wrap md:-mx-5">
                  <div className="w-full md:w-1/2 xl:w-7/12 md:px-5 relative mb-10 md:mb-0">
                    <div className="flex flex-wrap">
                      <div className="w-8 md:w-16 xl:w-24 hidden md:block">
                        <span className="absolute top-0 left-0 block text-lg md:text-2xl xl:text-3xl 2xl:text-4xl font-display leading-extra-tight upright -ml-1 md:ml-6 xl:ml-8">Featured*</span>
                      </div>
                      <div className="flex-1 ml-auto xl:mx-auto xl:mr-12 relative">
                        {featuredNewsSingle.map((news, i) => {
                          return (
                            <TeaserVertical
                              image={news.featuredImage}
                              tag={news.categories[1].title}
                              heading={news.title}
                              destination={`/news/${news.slug}`}
                              key={i}
                            />
                          )
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 xl:w-5/12 md:px-5">
                    {featuredNewsTriple.map((news, i) => {
                      return (
                        <div className={ i !== 2 ? 'mb-4 md:mb-6' : ''} key={i}>
                          <NewsTeaserHorizontal
                            image={news.featuredImage}
                            tag={news.categories[1].title}
                            heading={news.title}
                            destination={`/news/${news.slug}`}
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section className="mb-12 md:mb-16 xl:mb-20">
            <Container>
              <div className="flex flex-wrap sm:-mx-3">
                {allNews.map((news, i) => {
                  return (
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:px-3 mb-5 md:mb-8" key={i}>
                      <NewsTeaserVertical
                        image={news.featuredImage}
                        tag={news.categories[0].title}
                        heading={news.title}
                        destination={`/news/${news.slug}`}
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
  )
}

const NEWS_INDEX_QUERY = `
  query NewsIndexPage {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    categories: allNewsCategories(filter: {slug: {neq: "featured"}}) {
      title
      slug
    }
    featuredNewsSingle: allNews(filter: {categories: {anyIn: "25302651"}}, first: 1) { 
      id
      slug
      title
      categories {
        title
      }
      featuredImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 720, h: 480, auto: format }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
    }
    featuredNewsTriple: allNews(filter: {categories: {anyIn: "25302651"}}, first: 3, skip: 1) { 
      id
      slug
      title
      categories {
        title
      }
      featuredImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 540, h: 540, auto: format }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
    }
    allNews(filter: {categories: {notIn: "25302651"}}) {
      id
      slug
      title
      categories {
        title
      }
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

export async function getStaticProps() {
  const data = await request({
    query: NEWS_INDEX_QUERY
  })

  return {
    props: {
      data,
    },
  }
}