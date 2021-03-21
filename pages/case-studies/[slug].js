import Head from 'next/head'
import { request } from "../../lib/datocms";
import { renderMetaTags, Image } from "react-datocms";
import { metaTagsFragment, responsiveImageFragment } from "../../lib/fragments";
import Layout from '../../components/layout'
import Header from '../../components/header'
import Footer from '../../components/footer'
import CaseCarousel from '../../components/case-carousel'
import TeaserVertical from '../../components/teaser-vertical'
import Container from '../../components/container'
import { fade } from "../../helpers/transitions"
import { motion } from 'framer-motion'

export default function NewsSlug({ data: { current, site, moreCaseStudies}}) {
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

          <Header theme="black" active="case-studies" />

          {/* Hero */}
          <section className="mb-8 md:mb-10 xl:mb-12 pt-[75px] md:pt-[100px] lg:pt-[107px]">
            <Container>
              <h1 className="text-3xl sm:text-4xl md:text-4xl xl:text-5xl 2xl:text-6xl font-display leading-extra-tight mb-0 pb-0">{ current.headline }</h1>

              {current.introText && (
                <div className="content lg:text-lg mt-3 md:mt-5 w-11/12 md:w-7/12 xl:w-5/12" dangerouslySetInnerHTML={{ __html: current.introText}}/>
              )}
            </Container>
          </section>
          
          <section className="mb-8 md:mb-16 xl:mb-20">
            <Container>
              { current.content.length > 0 ? (
              <CaseCarousel items={current.content}/>
              ) : (
                <p className="text-center">Content coming soon...</p>
              )}
            </Container>
          </section>
          
          <section className="mb-12 md:mb-16 xl:mb-24">
            <Container>
            <span className="block text-xl md:text-2xl xl:text-3xl mb-4 md:mb-6 xl:mb-8 font-display leading-extra-tight">More case studies</span>
              <div className="flex flex-wrap -mx-3">
                {moreCaseStudies.map((item, i) => {
                  return (
                    <div key={i} className="w-full md:w-1/2 px-3">
                      <div className="mb-8 md:mb-0">
                        <TeaserVertical
                          image={item.featuredImage}
                          heading={item.title}
                          destination={`/case-studies/${item.slug}`}
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

const CASE_STUDY_SLUG_QUERY = `
  query CaseStudySlugPage($slug: String) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    current: caseStudy(filter: {slug: {eq: $slug}}) {
      title
      headline
      introText
      slug
      featuredImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 320, h: 320, auto: format }) {
          ...responsiveImageFragment
        }
        title
        alt
      }
      content {
        headline
        text
        image {
          responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 640, h: 480, auto: format }) {
            ...responsiveImageFragment
          }
          title
          alt
        }
      }
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
    }
    moreCaseStudies: allCaseStudies(first: 2, filter: {slug: {neq: $slug}}) {
      id
      slug
      title
      featuredImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 640, h: 420, auto: format }) {
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
    query: CASE_STUDY_SLUG_QUERY,
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
  const data = await request({ query: `{ allCaseStudies { slug } }` });

  return {
    paths: data.allCaseStudies.map((caseStudy) => `/case-studies/${caseStudy.slug}`),
    fallback: false,
  };
}