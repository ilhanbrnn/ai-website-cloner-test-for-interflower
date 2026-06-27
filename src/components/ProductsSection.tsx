import Image from "next/image";

import { PlayIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { BrandButton, SectionLabel } from "@/components/site-primitives";

const storyUrl = "https://www.youtube.com/watch?v=tZzxGfXu1f8&t=1s";

function StoryConnector() {
  return (
    <>
      <svg
        viewBox="0 0 584 64"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-full h-16 w-px -translate-x-1/2 overflow-visible lg:hidden"
      >
        <path d="M292 0V64" fill="none" stroke="#fca1cd" strokeWidth="2.5" />
      </svg>

      <svg
        viewBox="0 0 584 118"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-full h-[118px] w-full -translate-x-1/2 overflow-visible lg:h-[132px] lg:w-[calc(100%+7vw)]"
      >
        <path
          d="M292 0v62c0 18 14 32 32 32h174"
          fill="none"
          stroke="#fca1cd"
          strokeWidth="2.5"
        />
        <path d="M508 94h76" fill="none" stroke="#141414" strokeWidth="2.5" />
      </svg>
    </>
  );
}

export function ProductsSection() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="overflow-hidden bg-[#ede8de] px-[18px] pb-[153px] pt-12 text-[#141414] sm:px-0 sm:pt-[58px] lg:px-[4vw] lg:pb-32 lg:pt-20"
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center gap-16 sm:w-3/4 lg:grid lg:w-full lg:grid-cols-2 lg:items-start lg:gap-[clamp(32px,4vw,80px)]">
        <Reveal className="relative z-10 w-full lg:order-2">
          <div className="min-h-[353px] rounded-[15.81px] bg-[#fca1cd] p-6 sm:h-[353px] sm:min-h-0 lg:h-auto lg:min-h-[clamp(400px,39vw,640px)] lg:p-[clamp(32px,3.125vw,60px)]">
            <Reveal className="sm:h-[22px]">
              <SectionLabel className="text-[#fca1cd]">Our products</SectionLabel>
            </Reveal>

            <div className="mt-[60px] space-y-6 sm:mt-[67px] sm:space-y-3 lg:mt-[clamp(72px,6vw,120px)] lg:space-y-8 xl:space-y-10">
              <Reveal delay={1}>
                <h2
                  id="products-heading"
                  className="max-w-[11ch] font-body text-[clamp(39px,6.2vw,49.26px)] font-medium leading-none tracking-[-0.02em] lg:text-[clamp(56px,4.2vw,80px)]"
                >
                  Always the right pick
                </h2>
              </Reveal>

              <Reveal delay={2}>
                <p className="max-w-[32rem] font-body text-[clamp(18px,2.54vw,20.11px)] font-[350] leading-[1.3] lg:text-[clamp(20px,1.45vw,28px)]">
                  From flowers and plants to decoration - choose from 10,000
                  unique items. Delivered fresh, exactly when you need them.
                </p>
              </Reveal>

              <Reveal delay={3}>
                <BrandButton href="/en/our-products" className="sm:h-9 sm:py-0">
                  Explore our selection
                </BrandButton>
              </Reveal>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-full hidden h-2.5 w-[calc(100%+4vw)] -translate-x-full border-b-[2.5px] border-[#fca1cd] lg:block"
          />
        </Reveal>

        <Reveal className="relative w-full lg:order-1">
          <a
            href={storyUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Watch our story on YouTube"
            className="group relative block aspect-square w-full overflow-hidden rounded-[15.81px] bg-[#e3dbca]"
          >
            <Image
              src="/images/youtube-thumbnail.jpg"
              alt="Duyvenvoorde team member in the flower warehouse"
              fill
              sizes="(min-width: 1024px) 45vw, (min-width: 640px) 75vw, calc(100vw - 36px)"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />

            <span className="absolute inset-0 bg-black/5 transition-colors duration-300 group-hover:bg-black/10" />

            <span className="absolute inset-0 z-10 flex flex-col items-center justify-center font-heading text-[clamp(70px,16vw,128px)] font-extrabold uppercase leading-[0.76] tracking-[-0.04em] text-white lg:text-[clamp(92px,8.5vw,164px)]">
              <span>Our</span>
              <span>Story</span>
            </span>

            <span className="absolute left-1/2 top-1/2 z-20 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff5500] text-white transition-transform duration-300 group-hover:scale-110 sm:size-14 lg:size-16">
              <PlayIcon className="size-7 sm:size-8 lg:size-9" />
            </span>
          </a>

          <StoryConnector />
        </Reveal>
      </div>
    </section>
  );
}
