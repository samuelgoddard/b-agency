import Link from 'next/link'

export default function CaseStudiesFeature({padding, showMore, bgColor}) {
  return (
    <section className={`mb-12 md:mb-16 xl:mb-24 ${bgColor ? bgColor : 'bg-yellow'}`}>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 py-8 md:py-12 xl:py-20 px-6 md:px-8 2xl:px-0 max-w-[777px] md:ml-auto">
          <div className={`flex flex-wrap 2xl:pr-16 h-full ${padding ? padding : ''}`}>
            <div className="flex flex-wrap w-full h-12">
              <span className="inline-block text-base md:text-lg uppercase mb-8">Featured Case Studies</span>
              { showMore && (
                <Link href={"/case-studies"}>
                  <a aria-label="View all case studies" className="inline-block text-base md:text-lg uppercase mb-8 ml-auto text-right text-red">→ View all</a>
                </Link>
              )}
            </div>

            <ul className="w-full self-end justify-self-end">
              <li className="block mb-1">
                <Link href={"/about"}>
                  <a aria-label="View Nimbe Project" className="block text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl uppercase font-display leading-extra-tight transition-all duration-300 ease-in-out hover:pl-8 focus:pl-8">
                    Nimble
                  </a>
                </Link>
              </li>
              <li className="block mb-1">
                <Link href={"/about"}>
                  <a aria-label="View Nimbe Project" className="block text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl uppercase font-display leading-extra-tight transition-all duration-300 ease-in-out hover:pl-8 focus:pl-8">
                    Morphe
                  </a>
                </Link>
              </li>
              <li className="block mb-1">
                <Link href={"/about"}>
                  <a aria-label="View Nimbe Project" className="block text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl uppercase font-display leading-extra-tight transition-all duration-300 ease-in-out hover:pl-8 focus:pl-8">
                    Missguided
                  </a>
                </Link>
              </li>
              <li className="block mb-1">
                <Link href={"/about"}>
                  <a aria-label="View Nimbe Project" className="block text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl uppercase font-display leading-extra-tight transition-all duration-300 ease-in-out hover:pl-8 focus:pl-8">
                    Bondi Sans
                  </a>
                </Link>
              </li>
              <li className="block mb-1">
                <Link href={"/about"}>
                  <a aria-label="View Nimbe Project" className="block text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl uppercase font-display leading-extra-tight transition-all duration-300 ease-in-out hover:pl-8 focus:pl-8">
                    Quays
                  </a>
                </Link>
              </li>
              <li className="block mb-1">
                <Link href={"/about"}>
                  <a aria-label="View Nimbe Project" className="block text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl uppercase font-display leading-extra-tight transition-all duration-300 ease-in-out hover:pl-8 focus:pl-8">
                    Seraphine
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-black to-opaque opacity-75 z-0"></div>
          <p className="absolute bottom-0 left-0 p-6 md:p-8 text-white w-11/12 lg:w-8/12 xl:w-1/2 z-10 lg:text-lg">The dizzying growth of this generation’s ultimate fashion retailer Industry disruption, trust and trend integrity since 2009.</p>
          <img src="https://placedog.net/640/640" alt="PLACEHOLDER CHANGE ME SAM" className="w-full" />
        </div>
      </div>
    </section>
  )
}