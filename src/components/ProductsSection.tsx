"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { MahmutBabaAudio } from "@/components/MahmutBabaAudio";
import { Reveal } from "@/components/reveal";
import { BrandButton, SectionLabel } from "@/components/site-primitives";

const services = [
  "Saksı çiçekleri",
  "Buketler",
  "Aranjmanlar",
  "Çelenkler",
  "Gelin arabası süsleme",
  "Ferforje tasarımlar",
  "Yapay çiçekler",
  "Tanzim",
  "Organizasyon",
  "Kişiye özel tasarım",
] as const;

function StoryConnector() {
  return (
    <>
      <svg
        viewBox="0 0 584 64"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-full z-0 h-16 w-px -translate-x-1/2 overflow-visible lg:hidden"
      >
        <path d="M292 0V64" fill="none" stroke="#171716" strokeWidth="2.5" />
        <path
          data-scroll-progress-line
          d="M292 0V64"
          fill="none"
          pathLength={1}
          stroke="#B66F7A"
          strokeDasharray={1}
          strokeDashoffset={1}
          strokeWidth="2.5"
        />
      </svg>

      <svg
        viewBox="0 0 584 118"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-full z-0 h-[118px] w-full -translate-x-1/2 overflow-visible lg:h-[132px] lg:w-[calc(100%+7vw)]"
      >
        <path
          d="M292 0v62c0 18 14 32 32 32h174"
          fill="none"
          stroke="#171716"
          strokeWidth="2.5"
        />
        <path
          data-scroll-progress-line
          d="M292 0v62c0 18 14 32 32 32h174"
          fill="none"
          pathLength={1}
          stroke="#B66F7A"
          strokeDasharray={1}
          strokeDashoffset={1}
          strokeWidth="2.5"
        />
        <path d="M508 94h76" fill="none" stroke="#171716" strokeWidth="2.5" />
      </svg>
    </>
  );
}

export function ProductsSection({ id }: { id: string }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const progressLines = section.querySelectorAll<SVGPathElement>(
      "[data-scroll-progress-line]",
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let frameId: number | null = null;

    const updateProgress = () => {
      frameId = null;

      if (reducedMotion.matches) {
        progressLines.forEach((line) => {
          line.style.strokeDashoffset = "0";
        });
        return;
      }

      const rect = section.getBoundingClientRect();
      const travel = window.innerHeight + rect.height;
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight - rect.top) / travel),
      );

      progressLines.forEach((line) => {
        line.style.strokeDashoffset = String(1 - progress);
      });
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
      aria-labelledby="products-heading"
      className="isolate overflow-hidden bg-[#E8E0D2] px-[18px] pb-[153px] pt-12 text-[#171716] sm:px-0 sm:pt-[58px] lg:px-[4vw] lg:pb-32 lg:pt-20"
    >
      <div className="relative mx-auto flex w-full max-w-[1600px] flex-col items-center gap-16 sm:w-3/4 lg:grid lg:w-full lg:grid-cols-2 lg:items-start lg:gap-[clamp(32px,4vw,80px)]">
        <Reveal className="relative z-10 w-full lg:order-2">
          <div className="min-h-[353px] rounded-[15.81px] bg-[#E6B9C3] p-6 sm:h-[353px] sm:min-h-0 lg:h-auto lg:min-h-[clamp(400px,39vw,640px)] lg:p-[clamp(32px,3.125vw,60px)]">
            <Reveal className="sm:h-[22px]">
              <SectionLabel className="text-[#E6B9C3]">MAHMUT BABA</SectionLabel>
            </Reveal>

            <div className="mt-[60px] space-y-6 sm:mt-[67px] sm:space-y-3 lg:mt-[clamp(72px,6vw,120px)] lg:space-y-8 xl:space-y-10">
              <Reveal delay={1}>
                <h2
                  id="products-heading"
                  className="max-w-[11ch] font-body text-[clamp(39px,6.2vw,49.26px)] font-medium leading-none tracking-[-0.02em] lg:text-[clamp(56px,4.2vw,80px)]"
                >
                  <span className="block">Çiçek işini</span>
                  <span className="block">ustasına bırak.</span>
                </h2>
              </Reveal>

              <Reveal delay={2}>
                <p className="max-w-[32rem] font-body text-[clamp(18px,2.54vw,20.11px)] font-[350] leading-[1.3] lg:text-[clamp(20px,1.45vw,28px)]">
                  Kişiye özel buketlerden özel gün tasarımlarına, her aranjman
                  özenle hazırlanır.
                </p>
              </Reveal>

              <Reveal delay={3}>
                <BrandButton
                  href="https://wa.me/905447204686?text=Merhaba%20InterFlower%2C%20çiçek%20siparişi%20vermek%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sm:h-9 sm:py-0"
                >
                  WhatsApp’tan Yaz
                </BrandButton>
              </Reveal>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-full z-0 hidden h-2.5 w-[calc(100%+4vw)] -translate-x-full border-b-[2.5px] border-[#B66F7A] lg:block"
          />
        </Reveal>

        <Reveal className="relative isolate w-full overflow-visible bg-transparent lg:order-1">
          <MahmutBabaAudio
            className="group relative z-20 block aspect-square w-full overflow-hidden rounded-[15.81px] bg-transparent"
          >
            <Image
              src="/images/interflower/mahmut-portrait.png"
              alt="InterFlower çiçekçilikten Mahmut"
              fill
              sizes="(min-width: 1024px) 45vw, (min-width: 640px) 75vw, calc(100vw - 36px)"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />

            <span className="absolute inset-0 bg-black/5 transition-colors duration-300 group-hover:bg-black/10" />
          </MahmutBabaAudio>

          <StoryConnector />
        </Reveal>

        <Reveal className="relative z-10 w-full lg:order-3 lg:col-span-2">
          <div className="rounded-[15.81px] bg-[#171716] p-6 text-[#E8E0D2] sm:p-8 lg:p-10">
            <SectionLabel className="bg-[#B66F7A] text-white">
              HİZMETLER
            </SectionLabel>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {services.map((service) => (
                <li
                  key={service}
                  className="rounded-full border border-[#E6B9C3]/35 px-4 py-3 font-body text-[15px] leading-tight font-medium text-center sm:text-[16px]"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
