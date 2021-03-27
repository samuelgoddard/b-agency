import { Image } from 'react-datocms'
import Link from 'next/link'

export default function TeaserVertical({ destination, heading, tag, text, listItems, image, fancyText }) {
  return (
    <div className="block">
      <div className="w-full mb-4 md:mb-6">
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
                      className="w-full transform transition ease-in-out duration-300 scale-[1.125] group-focus:scale-[1.25] group-hover:scale-[1.25]"
                    />
                  </div>
                </div>
              )}
            </a>
          </Link>
        ) : (
          <>
            { image && (
              <div className="overflow-hidden">
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

      <div className="w-full">
        { tag && (
          <span className="block text-base md:text-lg uppercase mb-2 md:mb-4 opacity-50">{ tag }</span>
        )}
        
        <h3 className="block text-xl md:text-xl xl:text-2xl 2xl:text-3xl font-display leading-extra-tight mb-4 md:mb-6 lg:w-10/12">{ heading }</h3>

        { text && (
          <div className={`lg:w-10/12 lg:text-lg content ${fancyText ? 'content--fancy' : ''}`} dangerouslySetInnerHTML={{ __html: text }} />
        )}

        { listItems && (
          <div dangerouslySetInnerHTML={{ __html: listItems }} className="fancy-list text-base md:text-lg w-11/12 leading-snug"/>
        )}

        { destination && (
          <Link href={destination} scroll={false}>
            <a aria-label="View Services" className="block text-base md:text-lg uppercase text-red">
              → Read more
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}