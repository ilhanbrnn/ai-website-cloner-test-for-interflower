"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { Reveal } from "@/components/reveal";
import { BrandButton, CurvedLine } from "@/components/site-primitives";

const introCopy =
  "From our location at the auction in Naaldwijk, we ensure that every flower and plant reaches our customers in top condition. Thanks to our extensive stock and efficient logistics, we can deliver quickly — often on the same day.";

const marqueeCopy = "Always sharp, always on time";

export function IntroSlider() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (!marquee || prefersReducedMotion.matches) {
      return;
    }

    const animation = marquee.animate(
      [
        { transform: "translate3d(-12%, 0, 0)" },
        { transform: "translate3d(-62%, 0, 0)" },
      ],
      {
        duration: 22000,
        easing: "linear",
        iterations: Infinity,
      },
    );

    return () => animation.cancel();
  }, []);

  return (
    <>
      <section
        aria-labelledby="intro-heading"
        className="site-grid gap-y-12 bg-[#ede8de] py-[clamp(3rem,calc(2.5rem+2.22222vw),5rem)] pt-[clamp(2.5rem,calc(1.25rem+5.55556vw),7.5rem)]"
      >
        <Reveal className="relative col-start-1 col-end-[-2] h-[150px] sm:h-[180px] lg:col-end-9 lg:row-start-1 xl:col-end-12">
          <CurvedLine color="black" className="absolute inset-0" />
          <CurvedLine
            color="yellow"
            className="absolute inset-0 [clip-path:inset(0_0_0_48%)]"
          />

          <div className="pointer-events-none absolute bottom-[-16px] left-[52%] z-10 size-[60px] -translate-x-1/2 min-[768px]:size-[80px] min-[992px]:size-[100px] min-[1500px]:size-[120px]">
            <Image
              src="/images/1.cdeb15e7.png"
              alt=""
              width={1000}
              height={1000}
              sizes="(min-width: 1500px) 120px, (min-width: 992px) 100px, (min-width: 768px) 80px, 60px"
              className="size-full object-cover"
            />
          </div>
        </Reveal>

        <div className="col-start-2 col-end-[-2] pt-2 sm:col-start-3 sm:col-end-[-3] lg:col-start-8 lg:col-end-[-3] lg:row-start-1 lg:pt-0 xl:col-start-12 xl:col-end-[-2]">
          <Reveal>
            <h2 id="intro-heading" className="sr-only">
              About Duyvenvoorde
            </h2>
            <p className="mb-[0.83335em] font-body text-[clamp(1.5rem,calc(1.0625rem+1.94444vw),3.25rem)] font-normal leading-[1.2] tracking-[-0.02em] text-[#141414]">
              {introCopy}
            </p>
          </Reveal>

          <Reveal delay={1}>
            <BrandButton
              href="/en/about-us"
              className="h-9 bg-[#e3dbca] px-[14px] py-0 pr-[10px] text-[16.4px] leading-[1.5] text-[#141414] hover:bg-[#d9cdb5]"
            >
              More about us
            </BrandButton>
          </Reveal>
        </div>
      </section>

      <section
        aria-label="Always sharp, always on time"
        className="relative h-[120px] bg-[#ede8de] min-[768px]:h-[216px] min-[992px]:h-[320px] min-[1200px]:h-[400px] min-[1500px]:h-[500px]"
      >
        <p className="sr-only">{marqueeCopy}</p>

        <div className="flex size-full items-center overflow-hidden">
          <div
            ref={marqueeRef}
            aria-hidden="true"
            className="flex w-max shrink-0 items-center whitespace-nowrap font-heading text-[clamp(5.3125rem,calc(2.57813rem+12.1528vw),16.25rem)] font-extrabold uppercase leading-[0.8] tracking-[-0.02em] text-[#8464ed] will-change-transform"
          >
            <span className="shrink-0 px-8">{marqueeCopy}</span>
            <span className="shrink-0 px-8">{marqueeCopy}</span>
          </div>
        </div>

        <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 size-[120px] -translate-x-1/2 -translate-y-1/2 rotate-[30deg] min-[768px]:size-[216px] min-[992px]:size-[320px] min-[1200px]:size-[400px] min-[1500px]:size-[500px]">
          <Image
            src="/images/3.1f2a55bd.png"
            alt=""
            width={1000}
            height={1000}
            sizes="(min-width: 1500px) 500px, (min-width: 1200px) 400px, (min-width: 992px) 320px, (min-width: 768px) 216px, 120px"
            className="size-full object-cover drop-shadow-[0_25px_25px_rgb(0_0_0/15%)]"
          />
        </div>
      </section>
    </>
  );
}
