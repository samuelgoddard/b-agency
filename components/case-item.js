import Arrow from './arrow'
import Link from 'next/link'

export default function CaseItem({ handler, item }) {
  return(
    <li className="block mb-1" onMouseEnter={handler}>
      <Link href={`/case-studies/${item.slug}`}>
        <a aria-label="View Nimbe Project" className={`text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl 3xl:text-7xl uppercase font-display leading-extra-tight transition-all duration-300 ease-in-out md:hover:pl-8 md:focus:pl-8 group flex items-center`} >
          <span className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 md:-ml-6 lg:-ml-7 3xl:-ml-12 2xl:-ml-10 md:mr-3 2xl:mr-4 transition duration-300 ease-in-out"><Arrow sizeClass="text-red md:w-3 lg:w-[17px] 2xl:w-[24px] 3xl:w-[33px] mt-3 transform -rotate-90 hidden md:block"/></span> { item.title }
        </a>
      </Link>
    </li>
  )
}