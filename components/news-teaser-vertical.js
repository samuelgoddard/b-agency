import Link from 'next/link'

export default function NewsTeaserVertical({ destination, heading, tag }) {
  return (
    <Link href={destination}>
      <a aria-label="View Services" className="block group">
        <div className="w-full mb-4 md:mb-6">
          <div className="relative overflow-hidden">
            <img src="https://placedog.net/640/420" alt="PLACEHOLDER CHANGE ME SAM" className="w-full transform transition ease-in-out duration-300 scale-[1.01] group-focus:scale-[1.15] group-hover:scale-[1.15]" />
          </div>
        </div>

        <div className="w-full">
          { tag && (
            <span className="block text-base uppercase mb-1 text-orange">{ tag }</span>
          )}
          
          <h3 className="block text-lg md:text-lg xl:text-xl 2xl:text-xl font-display leading-extra-tight mb-4 md:mb-6 lg:w-10/12 group-hover:text-red group-focus:text-red transition ease-in-out duration-300">{ heading }</h3>
        </div>
      </a>
    </Link>
  )
}