"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const marqueeCopy = "SEVGİNİN YOLU ÇİÇEKLERDEN GEÇER";

export function IntroMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const flowerSpinRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const flower = flowerSpinRef.current;

    if (!section || !track || !flower) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) {
      track.style.transform = "translate3d(8%, 0, 0)";
      flower.style.transform = "rotate(0deg)";
      return;
    }

    let frameId: number | null = null;

    const updateScrollAnimation = () => {
      frameId = null;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = Math.min(
        1,
        Math.max(
          0,
          (viewportHeight - rect.top) / (viewportHeight + rect.height),
        ),
      );
      const translateX = 8 - progress * 58;
      const rotation = progress * 720;

      track.style.transform = `translate3d(${translateX}%, 0, 0)`;
      flower.style.transform = `rotate(${rotation}deg)`;
    };

    const requestUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateScrollAnimation);
      }
    };

    updateScrollAnimation();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Sevginin yolu çiçeklerden geçer"
      className="relative isolate h-[140px] w-full overflow-hidden bg-[#E8E0D2] md:h-[220px] lg:h-[320px] xl:h-[400px]"
    >
      <p className="sr-only">{marqueeCopy}</p>

      <div className="relative z-10 flex h-full items-center overflow-hidden">
        <div
          ref={trackRef}
          aria-hidden="true"
          className="relative z-10 flex w-max shrink-0 items-center whitespace-nowrap font-heading text-[clamp(5rem,15vw,16rem)] font-extrabold uppercase leading-[0.8] tracking-[-0.02em] text-[#8464ed] will-change-transform"
        >
          <div className="flex shrink-0 items-center">
            <span className="shrink-0 px-8 md:px-12">{marqueeCopy}</span>
          </div>
          <div className="flex shrink-0 items-center">
            <span className="shrink-0 px-8 md:px-12">{marqueeCopy}</span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <div className="relative size-[120px] rotate-[30deg] md:size-[210px] lg:size-[300px] xl:size-[380px]">
          <div
            ref={flowerSpinRef}
            className="relative size-full will-change-transform"
          >
            <Image
              src="/images/3.1f2a55bd.png"
              alt=""
              fill
              sizes="(min-width: 1280px) 380px, (min-width: 1024px) 300px, (min-width: 768px) 210px, 120px"
              className="object-contain drop-shadow-[0_25px_25px_rgb(0_0_0/15%)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
