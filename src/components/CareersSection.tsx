import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { BrandButton, SectionLabel } from "@/components/site-primitives";

function RouteLine() {
  return (
    <div
      aria-hidden="true"
      className="relative col-start-1 col-end-[-1] h-[150px] sm:h-[180px] lg:h-[200px]"
    >
      <svg
        viewBox="0 0 1000 180"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 size-full sm:hidden"
      >
        <path
          d="M0 100H230"
          fill="none"
          stroke="#141414"
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M243 100H450Q500 100 500 150V180"
          fill="none"
          stroke="#ff5500"
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <svg
        viewBox="0 0 1000 180"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 hidden size-full sm:block lg:hidden"
      >
        <path
          d="M0 100H230"
          fill="none"
          stroke="#141414"
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M243 100H774Q813 100 813 139V180"
          fill="none"
          stroke="#ff5500"
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <svg
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 hidden size-full lg:block"
      >
        <path
          d="M0 110H230"
          fill="none"
          stroke="#141414"
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          d="M243 110H450Q500 110 500 160V200"
          fill="none"
          stroke="#ff5500"
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <Image
        src="/images/1.6870d19b.png"
        alt=""
        width={1000}
        height={1000}
        sizes="(min-width: 1280px) 120px, (min-width: 1024px) 100px, (min-width: 640px) 80px, 60px"
        className="absolute bottom-[-16px] left-1/2 size-[60px] -translate-x-1/2 object-contain sm:left-[81.25%] sm:size-20 lg:left-1/2 lg:size-[100px] xl:size-[120px]"
      />
    </div>
  );
}

export function CareersSection() {
  return (
    <section
      aria-labelledby="careers-heading"
      className="site-grid gap-y-12 overflow-hidden bg-[#ede8de] pb-12 pt-12 text-[#141414] sm:pb-[69px] sm:pt-16 lg:pb-20 lg:pt-20"
    >
      <div className="col-start-1 col-end-[-1] grid grid-cols-subgrid gap-y-12 lg:col-end-11 lg:row-start-1 lg:gap-y-[72px] xl:col-end-13 xl:gap-y-20">
        <div className="col-start-2 col-end-[-2] flex flex-col gap-8 sm:col-start-3 sm:col-end-[-4] sm:gap-9 lg:col-start-2 lg:col-end-[-1] lg:gap-11 xl:col-start-3 xl:gap-[50px]">
          <Reveal>
            <SectionLabel>Careers</SectionLabel>
          </Reveal>

          <Reveal delay={1}>
            <h2
              id="careers-heading"
              className="font-heading text-[clamp(48px,8.95vw,69.7px)] font-extrabold uppercase leading-[0.8] tracking-[-0.02em] lg:text-[clamp(70px,5.5vw,105px)]"
            >
              Your effort makes the difference
            </h2>
          </Reveal>
        </div>

        <RouteLine />
      </div>

      <Reveal className="col-start-2 col-end-[-2] sm:col-start-3 sm:col-end-[-6] sm:row-start-2 sm:-mt-[184px] lg:col-start-12 lg:col-end-[-2] lg:row-start-1 lg:mt-16 xl:col-start-14 xl:col-end-[-3] xl:mt-[68px]">
        <div className="space-y-7 lg:space-y-9 xl:space-y-10">
          <div className="space-y-7 lg:space-y-8">
            <p className="font-body text-[clamp(27px,4.16vw,32.44px)] leading-[1.2] lg:text-[clamp(30px,2.25vw,43px)]">
              At Duyvenvoorde, you make a difference for customers across
              Europe and the UK every single day.
            </p>

            <p className="font-body text-[clamp(18px,2.58vw,20.11px)] leading-[1.3] lg:text-[clamp(20px,1.4vw,27px)]">
              Whether you’re packing flowers, collecting orders, building
              trolleys or improving processes - your work is visible and
              valuable. Ready to join us?
            </p>
          </div>

          <BrandButton href="/en/careers">View vacancies</BrandButton>
        </div>
      </Reveal>
    </section>
  );
}
