import { Image } from 'react-datocms'
import Arrow from './arrow'
import Logo from './logo'
import Link from 'next/link'

export default function TeaserHorizontal({ destination, heading, reverse, tag, text, arrow, logo, image, fancyText}) {
  return (
    <div className={`flex flex-wrap items-center md:-mx-4 lg:-mx-8 ${ reverse ? 'flex-row-reverse' : ''}`}>
      <div className="w-full md:w-7/12 md:px-4 lg:px-8 mb-4 md:mb-0">
        { destination ? (
          <Link href={destination}>
            <a aria-label="View Services" className="block group relative overflow-hidden">
              { image && (
                <Image
                  data={{
                    ...image.responsiveImage,
                    alt: image.alt ? image.alt : image.title,
                  }}
                  className="w-full transform transition ease-in-out duration-300 scale-[1.01] group-focus:scale-[1.15] group-hover:scale-[1.15]"
                />
              )}
            </a>
          </Link>
        ) : (
          <>
            { image && (
              <Image
                data={{
                  ...image.responsiveImage,
                  alt: image.alt ? image.alt : image.title,
                }}
                className="w-full"
              />
            )}
          </>
        )}
      </div>

      <div className="w-full md:w-5/12 md:px-4 lg:px-8">
        <div className="flex flex-wrap items-start">
          { logo && (
            <div className="w-full xl:w-auto">
              <Logo sizeClass="w-[19px] md:w-[22px] lg:w-[24px] text-red mr-6 lg:mr-0 mt-2 md:mt-0 mb-4 xl:mt-2 xl:mb-0 xl:mr-12 2xl:mr-16" />
            </div>
          )}
          <div className="flex-1">
            { tag && (
              <span className="block text-base md:text-lg uppercase mb-2 md:mb-4 opacity-50">{ tag }</span>
            )}
            
            { heading && (
              <h3 className="block text-xl md:text-xl xl:text-2xl 2xl:text-3xl font-display leading-extra-tight mb-5 md:mb-8 lg:w-10/12">{ heading }</h3>
            )}

            { text && (
              <div className={`xl:w-10/12 lg:text-lg content ${fancyText ? 'content--fancy' : ''}`} dangerouslySetInnerHTML={{ __html: text }} />
            )}
            
            { arrow && (
              <Arrow sizeClass="w-5 mt-auto text-red" />
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
      </div>
    </div>
  )
}