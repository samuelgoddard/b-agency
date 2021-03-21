import React, { useState, useEffect, useCallback } from "react";
import { useEmblaCarousel } from 'embla-carousel/react'
import { Image } from "react-datocms";
import Arrow from "./arrow";

export default function CaseCarousel({ items }) {
  const options = { loop: true, draggable: false, speed: 8 }

  const [viewportRef, embla] = useEmblaCarousel(options);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((index) => embla && embla.scrollTo(index), [
    embla
  ]);

  const onSelect = useCallback(() => {
    if (!embla) return;
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return(
    <div className="embla" ref={embla}>
      <div className="embla__container" ref={viewportRef}>
        <div className="embla__container">
          {items.map((item, i) => {
            return (
              <div className="embla__slide" key={i}>
                <div className="flex flex-wrap md:-mx-5">
                  <div className="w-full md:w-7/12 md:px-5 mb-6 md:mb-0 relative">
                    <div className="flex flex-wrap md:hidden items-center absolute left-0 right-0 top-[50%] z-40 w-full">
                      <button
                        className="block px-2 md:px-3 ml-2 focus:outline-none text-red transition duration-300 ease-in-out hover:text-black focus:text-black"
                        onClick={scrollPrev}
                      >
                        <Arrow sizeClass="w-6 md:w-5 xl:w-6 transform rotate-90" />
                      </button>

                      <button
                        className="block px-2 md:px-3 mr-2 focus:outline-none text-red transition duration-300 ease-in-out hover:text-black focus:text-black ml-auto"
                        onClick={scrollNext}
                      >
                        <Arrow sizeClass="w-6 md:w-5 xl:w-6 transform -rotate-90" />
                      </button>
                    </div>
                    <Image
                      data={{
                        ...item.image.responsiveImage,
                        alt: item.image.alt ? item.image.alt : item.image.title,
                      }}
                      className="hero-bg-image absolute top-0 left-0 right-0 bottom-0 w-full h-full"
                    />
                  </div>
                  <div className="w-full md:w-5/12 md:px-5 relative pb-12 md:pb-20">
                    <div className="hidden md:flex flex-wrap items-center absolute bottom-0 left-0">
                      <button
                        className="block px-1 md:px-3 mr-2 focus:outline-none text-red transition duration-300 ease-in-out hover:text-black focus:text-black"
                        onClick={scrollPrev}
                      >
                        <Arrow sizeClass="w-4 md:w-5 xl:w-6 transform rotate-90" />
                      </button>

                      <button
                        className="block px-1 md:px-3 focus:outline-none text-red transition duration-300 ease-in-out hover:text-black focus:text-black"
                        onClick={scrollNext}
                      >
                        <Arrow sizeClass="w-4 md:w-5 xl:w-6 transform -rotate-90" />
                      </button>
                    </div>
                    <div className="w-11/12 xl:w-10/12">
                      <span className="block text-base md:text-lg uppercase mb-1 md:mb-2 opacity-50">{i+1}/{items.length}</span>
                      <h2 className="text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-3xl font-display leading-extra-tight">{item.headline}</h2>
                      <div dangerouslySetInnerHTML={{ __html: item.text }} className="content xl:text-lg mb-5"/>

                      <a aria-label="Email Us" href="mailto:@TODO@todo.com" className="block text-base md:text-lg uppercase text-red">
                        → Email us for more info
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}