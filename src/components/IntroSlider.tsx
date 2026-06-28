import Image from "next/image";

import { Reveal } from "@/components/reveal";
import {
  BrandButton,
  CurvedLine,
  SectionLabel,
} from "@/components/site-primitives";

const storyDescription =
  "InterFlower’da her aranjman bir duyguyla başlar. Mevsimin taze çiçeklerini özenle seçiyor, kişiye özel buketleri ve özel gün tasarımlarını Kızıltepe’de sevgiyle hazırlıyoruz.";

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
          <SectionLabel>HİKÂYEMİZ</SectionLabel>
        </Reveal>

        <Reveal delay={1}>
          <h2
            id="intro-heading"
            className="mt-8 font-body text-[clamp(1.75rem,calc(1.0625rem+3.05556vw),4.5rem)] leading-[1.05] font-medium tracking-[-0.02em] text-[#141414]"
          >
            <span className="block">Topraktan bukete,</span>
            <span className="block">buketten hatıraya.</span>
          </h2>
        </Reveal>

        <Reveal delay={2}>
          <p className="mt-6 max-w-[42rem] font-body text-[clamp(17px,2.2vw,21px)] leading-[1.35] font-normal text-[#141414]">
            {storyDescription}
          </p>
        </Reveal>

        <Reveal delay={3}>
          <BrandButton
            href="#neden-interflower"
            className="mt-8 h-9 bg-[#e3dbca] px-[14px] py-0 pr-[10px] text-[16.4px] leading-[1.5] text-[#141414] hover:bg-[#d9cdb5]"
          >
            Neden InterFlower?
          </BrandButton>
        </Reveal>
      </div>
    </section>
  );
}
