import { Image } from 'react-datocms'
import Arrow from './arrow'
import Link from 'next/link'

export default function TeaserHorizontal({ destination, heading, reverse, tag, text, arrow, logo, image, fancyText}) {
  return (
    <div className={`flex flex-wrap md:-mx-4 lg:-mx-8 ${ reverse ? 'flex-row-reverse' : ''} ${ logo ? 'items-center' : ''}`}>
      <div className={`w-full md:px-4 lg:px-8 mb-4 md:mb-0 ${logo ? 'md:w-6/12' : 'md:w-7/12' }`}>
        { destination ? (
          <Link href={destination} scroll={false}>
            <a aria-label="View Services" className="block group relative overflow-hidden">
              { image && (
                <div className="overflow-hidden">
                  <div data-scroll data-scroll-speed="0.35">
                    <Image
                      data={{
                        ...image.responsiveImage,
                        alt: image.alt ? image.alt : image.title,
                      }}
                      className="w-full transform transition ease-in-out duration-300 scale-[1.125] group-focus:scale-[1.2] group-hover:scale-[1.2]"
                    />
                  </div>
                </div>
              )}
            </a>
          </Link>
        ) : (
          <>
            { image && (
              <div className={`overflow-hidden ${logo ? 'md:ml-6' : '' }`}>
                <div data-scroll data-scroll-speed="0.35">
                  <Image
                    data={{
                      ...image.responsiveImage,
                      alt: image.alt ? image.alt : image.title,
                    }}
                    className="w-full transform scale-[1.125]"
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className={`w-full md:px-4 lg:px-8 ${logo ? 'md:w-6/12' : 'md:w-5/12' }`}>
        <div className={`flex flex-wrap items-start`}>
          <div className={`flex-1 ${ logo ? 'p-8 pt-4 md:pt-8 md:pr-0 lg:pl-12 xl:pl-16' : null }`}>
            { tag && (
              <span className="block text-base md:text-lg font-display mb-2 md:mb-4 opacity-50">{ tag }</span>
            )}
            
            { heading && (
              <h3 className="block text-xl md:text-xl xl:text-2xl 2xl:text-3xl font-display leading-extra-tight mb-5 md:mb-8 lg:w-10/12">{ heading }</h3>
            )}

            { text && (
              <div className={`xl:w-10/12 lg:text-lg content ${ logo ? 'content--large' : '' } ${fancyText ? 'content--fancy' : ''}`} dangerouslySetInnerHTML={{ __html: text }} />
            )}
            
            { arrow && (
              <Arrow sizeClass="w-5 mt-auto text-red" />
            )}

            { destination && (
              <Link href={destination} scroll={false}>
                <a aria-label="View Services" className="block text-base md:text-lg uppercase text-red">
                  → View Services
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}