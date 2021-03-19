import Link from 'next/link'

export default function TeaserVertical({ destination, heading, tag, text, listItems }) {
  return (
    <div className="block">
      <div className="w-full mb-4 md:mb-6">
        { destination ? (
          <Link href={destination}>
            <a aria-label="View Services" className="block group relative overflow-hidden">
              <img src="https://placedog.net/640/420" alt="PLACEHOLDER CHANGE ME SAM" className="w-full transform transition ease-in-out duration-300 scale-[1.01] group-focus:scale-[1.15] group-hover:scale-[1.15]" />
            </a>
          </Link>
        ) : (
          <img src="https://placedog.net/640/420" alt="PLACEHOLDER CHANGE ME SAM" className="w-full" />
        )}
      </div>

      <div className="w-full">
        { tag && (
          <span className="block text-base md:text-lg uppercase mb-2 md:mb-4 opacity-50">{ tag }</span>
        )}
        
        <h3 className="block text-xl md:text-xl xl:text-2xl 2xl:text-3xl font-display leading-extra-tight mb-4 md:mb-6 lg:w-10/12">{ heading }</h3>

        { text && (
          <div className="lg:w-10/12 lg:text-lg" dangerouslySetInnerHTML={{ __html: text }} />
        )}

        { listItems && (
          <ul className="fancy-list text-base md:text-lg w-11/12 mt-5">
            {Array.from(listItems, (e, i) => {
              return (
                <li key={i}>{e}</li>
              )
            })}
          </ul>
        )}

        { destination && (
          <Link href={destination}>
            <a aria-label="View Services" className="block text-base md:text-lg uppercase text-red">
              → Read more
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}