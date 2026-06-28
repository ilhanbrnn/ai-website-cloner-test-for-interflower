import { BrandButton } from "@/components/site-primitives";

export function HeroSection({ id }: { id: string }) {
  return (
    <section
      id={id}
      aria-labelledby="hero-heading"
      className="relative h-[90svh] min-h-[620px] overflow-hidden bg-[#141414] lg:h-svh lg:min-h-[720px]"
    >
      <video
        className="absolute inset-0 size-full object-cover lg:hidden"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videos/hero-mobile.mp4" type="video/mp4" />
      </video>

      <video
        className="absolute inset-0 hidden size-full object-cover lg:block"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videos/hero-desktop.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 z-10 bg-black/20" aria-hidden="true" />

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
          className="w-[8ch] font-heading text-[clamp(48px,13.6vw,105.95px)] font-extrabold uppercase leading-[0.8] tracking-[-0.03em] lg:text-[clamp(105.95px,6.25vw,120px)]"
        >
          Access nature&apos;s finest
        </h1>

        <div className="mt-[clamp(48px,7.5vw,64px)] flex flex-col items-center">
          <BrandButton
            href="/en/our-products"
            className="text-[clamp(13px,2vw,16px)]"
          >
            Discover our products
          </BrandButton>
          <p className="mt-2.5 font-body text-[clamp(13px,1.8vw,16px)] leading-none">
            Access our global network
          </p>
        </div>
      </div>
    </section>
  );
}
