import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { BrandButton, CurvedLine } from "@/components/site-primitives";

const introCopy =
  "From our location at the auction in Naaldwijk, we ensure that every flower and plant reaches our customers in top condition. Thanks to our extensive stock and efficient logistics, we can deliver quickly — often on the same day.";

export function IntroSlider({ id }: { id: string }) {
  return (
    <section
      id={id}
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
  );
}
