import Head from 'next/head'
import { request } from "../../lib/datocms";
import { renderMetaTags, Image } from "react-datocms";
import { metaTagsFragment, responsiveImageFragment } from "../../lib/fragments";
import Layout from '../../components/layout'
import Header from '../../components/header'
import Footer from '../../components/footer'
import NewsTeaserVertical from '../../components/news-teaser-vertical'
import Container from '../../components/container'
import { fade } from "../../helpers/transitions"
import { motion } from 'framer-motion'

export default function NewsSlug({ data: { article, moreNews, site}}) {
  const metaTags = article.seo.concat(site.favicon);

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
          <section className="mb-12 md:mb-16 xl:mb-20 pt-[75px] md:pt-[100px] lg:pt-[107px]">
            <div className="bg-pink overflow-hidden">
              <div className="flex flex-wrap md:-mx-8 items-center">
                <div className="w-full md:w-1/2 md:px-8 pt-10 pb-12 md:py-16 xl:py-20 order-2 md:order-1">
                  <div className="max-w-[770px] md:ml-auto px-6">
                    <div className="w-11/12 md:w-10/12">
                      {article.categories.map((cat, i) => {
                        return (
                          <span key={i} className="text-orange inline-block mr-4 text-base md:text-lg uppercase mb-1 md:mb-2">{ cat.title }</span>
                        )
                      })}
                      <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-display leading-extra-tight mb-0 pb-0">{ article.title }</h1>
                      {article.introText && (
                        <div className="content xl:text-lg mt-4 md:mt-6 xl:mt-8" dangerouslySetInnerHTML={{ __html: article.introText }} />
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:px-8 order-1 md:order-2">
                  <Image
                    data={{
                      ...article.featuredImage.responsiveImage,
                      alt: article.featuredImage.alt ? article.featuredImage.alt : article.featuredImage.title,
                    }}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12 md:mb-16 xl:mb-20">
            <Container>
              <div className="content xl:text-lg max-w-4xl mx-auto">
                <h2 className="text-xl sm:text-2xl md:text-2xl xl:text-3xl 2xl:text-4xl font-display leading-extra-tight">Content</h2>
                <p>Content coming soon...</p>
              </div>
            </Container>
          </section>

          <section className="mb-12 md:mb-16 xl:mb-20">
            <Container>
              <span className="block text-xl md:text-2xl xl:text-3xl mb-4 md:mb-6 xl:mb-8 font-display leading-extra-tight">More News</span>
              <div className="flex flex-wrap sm:-mx-3">
                {moreNews.map((news, i) => {
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

const NEWS_SLUG_QUERY = `
  query NewsSlugPage($slug: String) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    article: news(filter: {slug: {eq: $slug}}) {
      title
      slug
      categories {
        title
      }
      introText
      featuredImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 720, h: 550, auto: format }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
    }
    moreNews: allNews(first: 4, filter: {slug: {neq: $slug}}) {
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
    query: NEWS_SLUG_QUERY,
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
  const data = await request({ query: `{ allNews { slug } }` });

  return {
    paths: data.allNews.map((news) => `/news/${news.slug}`),
    fallback: false,
  };
}