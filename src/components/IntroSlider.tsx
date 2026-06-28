"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { Reveal } from "@/components/reveal";
import {
  BrandButton,
  CurvedLine,
  SectionLabel,
} from "@/components/site-primitives";

const storyDescription =
  "InterFlower’da her aranjman bir duyguyla başlar. Mevsimin taze çiçeklerini özenle seçiyor, kişiye özel buketleri ve özel gün tasarımlarını Kızıltepe’de sevgiyle hazırlıyoruz.";

export function IntroSlider({ id }: { id: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const yellowLineRef = useRef<HTMLDivElement>(null);
  const flowerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const yellowLine = yellowLineRef.current;
    const flower = flowerRef.current;

    if (!section || !yellowLine || !flower) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let frameId: number | null = null;

    const updateProgress = () => {
      frameId = null;

      if (reducedMotion.matches) {
        yellowLine.style.clipPath = "inset(0 0% 0 0)";
        flower.style.transform = "rotate(0deg)";
        return;
      }

      const rect = section.getBoundingClientRect();
      const travel = window.innerHeight + rect.height;
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight - rect.top) / travel),
      );

      yellowLine.style.clipPath = `inset(0 ${(1 - progress) * 100}% 0 0)`;
      flower.style.transform = `rotate(${progress * 720}deg)`;
    };

    const requestUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      aria-labelledby="intro-heading"
      className="site-grid gap-y-12 bg-[#ede8de] py-[clamp(3rem,calc(2.5rem+2.22222vw),5rem)] pt-[clamp(2.5rem,calc(1.25rem+5.55556vw),7.5rem)]"
    >
      <Reveal className="relative col-start-1 col-end-[-2] h-[150px] sm:h-[180px] lg:col-end-9 lg:row-start-1 xl:col-end-12">
        <CurvedLine color="black" className="absolute inset-0" />
        <div
          ref={yellowLineRef}
          className="absolute inset-0 will-change-[clip-path] [clip-path:inset(0_100%_0_0)]"
        >
          <CurvedLine color="yellow" />
        </div>

        <div className="pointer-events-none absolute bottom-[-16px] left-[56.25%] z-10 size-[75px] -translate-x-1/2 min-[768px]:size-[100px] min-[992px]:size-[125px] min-[1500px]:size-[150px]">
          <div ref={flowerRef} className="size-full will-change-transform">
            <Image
              src="/images/1.cdeb15e7.png"
              alt=""
              width={1000}
              height={1000}
              sizes="(min-width: 1500px) 150px, (min-width: 992px) 125px, (min-width: 768px) 100px, 75px"
              className="size-full object-cover"
            />
          </div>
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
