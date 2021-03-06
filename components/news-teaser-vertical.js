import { Image } from 'react-datocms'
import Link from 'next/link'

export default function NewsTeaserVertical({ destination, heading, tag, image }) {
  return (
    <Link href={destination}>
      <a aria-label="View Services" className="block group">
        <div className="w-full mb-4 md:mb-6">
          <div className="relative overflow-hidden">
            <div className="overflow-hidden">
              <div data-scroll data-scroll-speed="0.25">
                { image && (
                  <Image
                    data={{
                      ...image.responsiveImage,
                      alt: image.alt ? image.alt : image.title,
                    }}
                    className="w-full transform transition ease-in-out duration-300 scale-[1.125] group-focus:scale-[1.25] group-hover:scale-[1.25]"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          { tag && (
            <span className="block text-base font-display mb-1 text-orange">{ tag }</span>
          )}
          
          <h3 className="block text-lg md:text-lg xl:text-xl 2xl:text-xl font-display leading-extra-tight mb-4 md:mb-6 lg:w-10/12 group-hover:text-red group-focus:text-red transition ease-in-out duration-300">{ heading }</h3>
        </div>
      </a>
    </Link>
  )
}