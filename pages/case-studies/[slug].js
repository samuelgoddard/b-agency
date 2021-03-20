import Head from 'next/head'
import { request } from "../../lib/datocms";
import { renderMetaTags, Image } from "react-datocms";
import { metaTagsFragment, responsiveImageFragment } from "../../lib/fragments";
import Layout from '../../components/layout'
import Header from '../../components/header'
import Footer from '../../components/footer'
// import NewsTeaserVertical from '../../components/news-teaser-vertical'
import Container from '../../components/container'
import { fade } from "../../helpers/transitions"
import { motion } from 'framer-motion'

export default function NewsSlug({ data: { current, site}}) {
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
          <section className="mb-12 md:mb-16 xl:mb-20 pt-[75px] md:pt-[100px] lg:pt-[107px]">
            <Container>
              <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-display leading-extra-tight mb-0 pb-0">{ current.title }</h1>
            </Container>
          </section>

          <section className="mb-12 md:mb-16 xl:mb-20">
            <Container>
              <div className="content xl:text-lg max-w-4xl mx-auto">
                <h2 className="text-xl sm:text-2xl md:text-2xl xl:text-3xl 2xl:text-4xl font-display leading-extra-tight">Content</h2>
                <p>Content coming soon...</p>
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
      slug
      featuredImage {
        responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 320, h: 320, auto: format }) {
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