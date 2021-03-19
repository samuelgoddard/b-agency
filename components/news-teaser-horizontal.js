import Link from 'next/link'

export default function NewsTeaserHorizontal({ destination, heading, tag }) {
  return (
    <Link href={destination}>
      <a aria-label="View Services" className="flex flex-wrap -mx-2 group">
        <div className="w-4/12 px-2">
          <div className="relative overflow-hidden">
            <img src="https://placedog.net/550/500" alt="PLACEHOLDER CHANGE ME SAM" className="w-full transform transition ease-in-out duration-300 scale-[1.01] group-focus:scale-[1.15] group-hover:scale-[1.15]" />
          </div>
        </div>

        <div className="w-8/12 px-2">
          { tag && (
            <span className="block text-base uppercase mb-0 text-orange">{ tag }</span>
          )}
          
          <h3 className="block text-lg md:text-lg xl:text-xl 2xl:text-xl font-display leading-extra-tight lg:w-10/12 group-hover:text-red group-focus:text-red transition ease-in-out duration-300">{ heading }</h3>
        </div>
      </a>
    </Link>
  )
}