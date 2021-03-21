import React, { useState } from 'react'
import { Image } from 'react-datocms'
import Link from 'next/link'
import Arrow from './arrow'

export default function CaseStudiesFeature({ padding, showMore, bgColor, items }) {
  const [values, setValues] = useState({
    selected: '', 
  })

  const handleInputChange = e => {
    const {name} = e.target
    setValues({...values, selected: name})
  }
  const handleInputLeave = e => {
    setValues({...values, selected: null})
  }

  return (
    <section className={`mb-12 md:mb-16 xl:mb-24 ${bgColor ? bgColor : 'bg-yellow'}`}>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 py-8 md:py-12 xl:py-20 px-6 md:px-8 2xl:px-0 max-w-[777px] md:ml-auto">
          <div className={`flex flex-wrap 2xl:pr-16 h-full ${padding ? padding : ''}`}>
            <div className="flex flex-wrap w-full h-24 md:h-12">
              <span className="inline-block text-base md:text-lg uppercase mb-8">Featured Case Studies</span>
              { showMore && (
                <Link href={"/case-studies"}>
                  <a aria-label="View all case studies" className="inline-block text-base md:text-lg uppercase mb-8 ml-auto text-right text-red">→ View all</a>
                </Link>
              )}
            </div>

            <ul className="w-full self-end justify-self-end">
              {items.map((item, i) => {
                return (
                  <li key={i} className="block mb-1">
                    <Link href={`/case-studies/${item.slug}`}>
                      <a aria-label="View Nimbe Project" className={`text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl 3xl:text-7xl uppercase font-display leading-extra-tight transition-all duration-300 ease-in-out md:hover:pl-8 md:focus:pl-8 group flex items-center`} name={i} onMouseEnter={handleInputChange} onMouseLeave={handleInputLeave}>
                        <span className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 md:-ml-6 lg:-ml-7 3xl:-ml-12 2xl:-ml-10 md:mr-3 2xl:mr-4 transition duration-300 ease-in-out"><Arrow sizeClass="text-red md:w-3 lg:w-[17px] 2xl:w-[24px] 3xl:w-[33px] mt-3 transform -rotate-90 hidden md:block"/></span> { item.title }
                      </a>
                    </Link>
                  </li>
                  )
                })}
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative overflow-hidden">
          <div className={`relative z-10 transition ease-in-out duration-500 ${ values.selected == null || values.selected == 0 ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-black to-opaque opacity-75 z-20"></div>
            {items[0].introText && (
              <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white w-11/12 lg:w-8/12 xl:w-1/2 lg:text-lg z-30" dangerouslySetInnerHTML={{ __html: items[0].introText}}/>
            )}

            <Image
              data={{
                ...items[0].featuredImage.responsiveImage,
                alt: items[0].featuredImage.alt ? items[0].featuredImage.alt : items[0].featuredImage.title,
              }}
              className="w-full"
            />
          </div>

          {items.map((item, i) => {
            let wrapperClasses = 'opacity-0'
            let imgClasses = 'opacity-0'
            if (values.selected == 1 && i == 1) {
              wrapperClasses = 'opacity-100'
              imgClasses = 'scale-105'
            } else if (values.selected == 2 && i == 2) {
              wrapperClasses = 'opacity-100'
              imgClasses = 'scale-105'
            } else if (values.selected == 3 && i == 3) {
              wrapperClasses = 'opacity-100'
              imgClasses = 'scale-105'
            } else if (values.selected == 4 && i == 4) {
              wrapperClasses = 'opacity-100'
              imgClasses = 'scale-105'
            } else if (values.selected == 5 && i == 5) {
              wrapperClasses = 'opacity-100'
              imgClasses = 'scale-105'
            }
            return (
              <div className={`absolute top-0 right-0 bottom-0 left-0 w-full h-full z-40 transition ease-in-out duration-500 transform ${ wrapperClasses }`} key={i}>
                <div className="absolute bottom-0 left-0 right-0 h-[45%] bg-gradient-to-t from-black to-opaque opacity-75 z-20 transition-all ease-in-out"></div>

                {item.introText && (
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white w-11/12 lg:w-8/12 xl:w-1/2 lg:text-lg z-30" dangerouslySetInnerHTML={{ __html: item.introText}}/>
                )}
                
                <Image
                  data={{
                    ...item.featuredImage.responsiveImage,
                    alt: item.featuredImage.alt ? item.featuredImage.alt : item.featuredImage.title,
                  }}
                  className={`w-full z-10 transition ease-in-out duration-500 transform ${imgClasses}`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}