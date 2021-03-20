import { Image } from 'react-datocms'
import Link from 'next/link'
import Arrow from './arrow'

export default function CaseStudiesFeature({padding, showMore, bgColor, items}) {
  return (
    <section className={`mb-12 md:mb-16 xl:mb-24 ${bgColor ? bgColor : 'bg-yellow'}`}>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 py-8 md:py-12 xl:py-20 px-6 md:px-8 2xl:px-0 max-w-[777px] md:ml-auto">
          <div className={`flex flex-wrap 2xl:pr-16 h-full ${padding ? padding : ''}`}>
            <div className="flex flex-wrap w-full h-24 md:h-12">
              <span className="inline-block text-base md:text-lg uppercase mb-8">Featured Case Studies</span>
              { showMore && (
                <Link href={"/case-studies"}>
                  <a aria-label="View all case studies" className="inline-block text-base md:text-lg uppercase mb-8 ml-auto text-right text-red">→ View all</a>
                </Link>
              )}
            </div>

            <ul className="w-full self-end justify-self-end">
            {items.map((item, i) => {
              return (
                <li key={i} className="block mb-1">
                  <Link href={`/case-studies/${item.slug}`}>
                    <a aria-label="View Nimbe Project" className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl 3xl:text-7xl uppercase font-display leading-extra-tight transition-all duration-300 ease-in-out md:hover:pl-8 md:focus:pl-8 group flex items-center">
                      <span className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 md:-ml-6 lg:-ml-7 3xl:-ml-12 2xl:-ml-10 md:mr-3 2xl:mr-4 transition duration-300 ease-in-out"><Arrow sizeClass="text-red md:w-3 lg:w-[17px] 2xl:w-[24px] 3xl:w-[33px] mt-3 transform -rotate-90 hidden md:block"/></span> { item.title }
                    </a>
                  </Link>
                </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-black to-opaque opacity-75 z-10"></div>
          <p className="absolute bottom-0 left-0 p-6 md:p-8 text-white w-11/12 lg:w-8/12 xl:w-1/2 z-20 lg:text-lg">The dizzying growth of this generation’s ultimate fashion retailer Industry disruption, trust and trend integrity since 2009.</p>

          <Image
            data={{
              ...items[0].featuredImage.responsiveImage,
              alt: items[0].featuredImage.alt ? items[0].featuredImage.alt : items[0].featuredImage.title,
            }}
            className="w-full"
          />
        </div>
      </div>
    </section>
  )
}