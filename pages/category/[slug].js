import Head from 'next/head'
import Link from 'next/link'
import { request } from "../../lib/datocms";
import { renderMetaTags, Image } from "react-datocms";
import { metaTagsFragment, responsiveImageFragment } from "../../lib/fragments";
import Layout from '../../components/layout'
import Header from '../../components/header'
import Footer from '../../components/footer'
// import NewsTeaserHorizontal from '../../components/news-teaser-horizontal'
import NewsTeaserVertical from '../../components/news-teaser-vertical'
import Container from '../../components/container'
import { fade } from "../../helpers/transitions"
import { motion } from 'framer-motion'

export default function CategoryIndex({ data: { current, categories, allNews, site}}) {
  const metaTags = current.seo.concat(site.favicon);

  return (
    <Layout>
      <Head>{renderMetaTags(metaTags)}</Head>

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
                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl font-display leading-extra-tight mb-0 pb-0">{ current.title }</h1>
                </div>
              </div>
            </Container>
          </section>

          {/* News Blocks */}
          <section className="mb-6 md:mb-8 xl:mb-12">
            <Container>
              <div className="border-t-2 border-black pt-4 md:pt-6">
                <div className="relative mb-4 xl:mb-8">
                  <div className="absolute top-0 right-0 bottom-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
                  
                  <div className="w-full whitespace-nowrap overflow-x-scroll hide-scroll relative">
                    <Link href={`/news`}>
                      <a aria-label="View Services" className={`inline-block mr-3 mb-3 px-2 md:px-3 xl:px-4 py-1 xl:py-2 text-sm md:text-base hover:bg-opacity-100 focus:bg-opacity-100 focus:border-none focus:outline-none tracking-tight transition ease-in-out duration-200 bg-[#cbd5e0] bg-opacity-60 text-black`}>
                        All News
                      </a>
                    </Link>
                    {categories.map((cat, i) => {
                      return (
                        <Link href={`/category/${cat.slug}`} key={i}>
                          <a aria-label="View Services" className={`inline-block mr-3 mb-3 px-2 md:px-3 xl:px-4 py-1 xl:py-2 text-sm md:text-base hover:bg-opacity-100 focus:bg-opacity-100 focus:border-none focus:outline-none tracking-tight transition ease-in-out duration-200 ${ cat.slug === current.slug ? 'bg-red bg-opacity-100 text-white' : 'bg-[#cbd5e0] bg-opacity-60 text-black'}`}>
                            {cat.title}
                          </a>
                        </Link>
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
                  let exists = news.categories.some(news => news.title.includes(current.title));

                  if (exists) {
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
                  }
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

const NEWS_CATEGORY_QUERY = `
  query NewsCategoryPage($slug: String) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    current: newsCategory(filter: {slug: {eq: $slug}}) {
      title
      slug
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
    }
    categories: allNewsCategories(filter: {slug: {neq: "featured"}}) {
      title
      slug
    }
    allNews {
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

export async function getStaticProps({ params }) {
  const data = await request({
    query: NEWS_CATEGORY_QUERY,
    variables: {
      slug: params.slug,
    },
  })

  return {
      props: {
        data
      }
  }
}

export async function getStaticPaths() {
  const data = await request({ query: `{ allNewsCategories { slug } }` });

  return {
    paths: data.allNewsCategories.map((cat) => `/category/${cat.slug}`),
    fallback: false,
  };
}