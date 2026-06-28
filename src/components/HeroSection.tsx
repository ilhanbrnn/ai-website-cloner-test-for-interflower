"use client";

import { useEffect, useState } from "react";

import { BrandButton } from "@/components/site-primitives";

const mobileHeroVideos = [
  "/videos/interflower/01-1-filizden-gule-hero-mobile.mp4",
  "/videos/interflower/01-2-dalindan-gul-hero-mobile.mp4",
  "/videos/interflower/01-3-buketin-olusumu-higgsfield-dolly-out.mp4",
  "/videos/interflower/01-4-interflower-dunyasi-product-dolly-in.mp4",
] as const;

function MobileHeroVideo() {
  const [videoIndex, setVideoIndex] = useState(0);

  useEffect(() => {
    const nextIndex = (videoIndex + 1) % mobileHeroVideos.length;
    const preloader = document.createElement("video");

    preloader.preload = "auto";
    preloader.muted = true;
    preloader.playsInline = true;
    preloader.src = mobileHeroVideos[nextIndex];
    preloader.load();

    return () => {
      preloader.removeAttribute("src");
      preloader.load();
    };
  }, [videoIndex]);

  return (
    <video
      src={mobileHeroVideos[videoIndex]}
      className="absolute inset-0 size-full object-cover lg:hidden"
      autoPlay
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      onEnded={() => {
        setVideoIndex(
          (currentIndex) => (currentIndex + 1) % mobileHeroVideos.length,
        );
      }}
    />
  );
}

export function HeroSection({ id }: { id: string }) {
  return (
    <section
      id={id}
      aria-labelledby="hero-heading"
      className="relative h-[100dvh] min-h-[620px] overflow-hidden bg-[#171716] lg:h-svh lg:min-h-[720px]"
    >
      <MobileHeroVideo />

      <video
        className="absolute inset-0 hidden size-full object-cover lg:block"
        autoPlay
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source
          src="/videos/interflower/01-1-filizden-gule-hero-desktop.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 z-10 bg-black/20" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[15] hidden h-[42%] bg-[linear-gradient(to_top,rgba(0,0,0,0.58)_0%,rgba(0,0,0,0.2)_48%,transparent_100%)] lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[15] hidden h-[55%] bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.14)_48%,transparent_76%)] lg:block"
      />

      <svg
        viewBox="0 0 1000 500"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[8.5%] bottom-0 top-[64%] z-20 h-[36%] w-[83%] overflow-visible text-[#f7f6f3]"
      >
        <path
          d="M400 2H850C932 2 970 43 970 112V500"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="relative z-30 flex h-full flex-col items-center justify-center px-5 text-center text-[#f7f6f3]">
        <h1
          id="hero-heading"
          aria-label="Her hikâye bir tohumla başlar"
          className="w-fit max-w-full font-heading text-[clamp(48px,13.6vw,105.95px)] font-extrabold uppercase leading-[0.8] tracking-[-0.03em] lg:text-[clamp(105.95px,6.25vw,120px)]"
        >
          <span aria-hidden="true" className="block whitespace-nowrap">
            HER HİKÂYE
          </span>
          <span aria-hidden="true" className="block whitespace-nowrap">
            BİR TOHUMLA
          </span>
          <span aria-hidden="true" className="block whitespace-nowrap">
            BAŞLAR
          </span>
        </h1>

        <div className="mt-[clamp(48px,7.5vw,64px)] flex flex-col items-center">
          <BrandButton
            href="#hizmetler"
            className="text-[clamp(13px,2vw,16px)]"
          >
            Çiçekleri Keşfet
          </BrandButton>
          <a
            href="https://wa.me/905447204686?text=Merhaba%20InterFlower%2C%20çiçek%20siparişi%20vermek%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2.5 font-body text-[clamp(13px,1.8vw,16px)] leading-none transition-colors duration-200 hover:text-[#E6B9C3] focus-visible:outline-none"
          >
            WhatsApp’tan Sipariş Ver
          </a>
        </div>
      </div>
    </section>
  );
}
