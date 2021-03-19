import Link from 'next/link'

export default function TeaserHorizontal({ destination, heading, reverse, tag, text }) {
  return (
    <div className={`flex flex-wrap items-center md:-mx-4 lg:-mx-8 ${ reverse ? 'flex-row-reverse' : ''}`}>
      <div className="w-full md:w-7/12 md:px-4 lg:px-8 mb-4 md:mb-0">
        <img src="https://placedog.net/640/420" alt="PLACEHOLDER CHANGE ME SAM" className="w-full" />
      </div>
      <div className="w-full md:w-5/12 md:px-4 lg:px-8">
        { tag && (
          <span className="block text-base md:text-lg uppercase mb-2 md:mb-4 opacity-50">{ tag }</span>
        )}
        
        <h3 className="block text-xl md:text-xl xl:text-2xl 2xl:text-3xl font-display leading-extra-tight mb-5 md:mb-8 lg:w-10/12">{ heading }</h3>

        { text && (
          <div className="lg:w-10/12 lg:text-lg" dangerouslySetInnerHTML={{ __html: text }} />
        )}

        { destination && (
          <Link href={destination}>
            <a aria-label="View Services" className="block text-base md:text-lg uppercase text-red">
              → View Services
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}