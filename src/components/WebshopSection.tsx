"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { BrandButton, SectionLabel } from "@/components/site-primitives";
import { cn } from "@/lib/utils";

interface FlowerNode {
  alt: string;
  angle: number;
  positionClass: string;
  src: string;
}

interface FlowerOrbitProps {
  className: string;
  flowerClassName: string;
  flowers: FlowerNode[];
  rotationClass: string;
}

const innerFlowers: FlowerNode[] = [
  {
    alt: "Pink cosmos",
    angle: 0,
    positionClass: "left-1/2 top-0",
    src: "/images/3.9744c519.png",
  },
  {
    alt: "Sunflower",
    angle: 45,
    positionClass: "left-[85.35%] top-[14.65%]",
    src: "/images/2.c9d133a8.png",
  },
  {
    alt: "Green flower",
    angle: 90,
    positionClass: "left-full top-1/2",
    src: "/images/3.4bee62ad.png",
  },
  {
    alt: "Orange flower",
    angle: 135,
    positionClass: "left-[85.35%] top-[85.35%]",
    src: "/images/1.1bb85467.png",
  },
  {
    alt: "Green chrysanthemum",
    angle: 180,
    positionClass: "left-1/2 top-full",
    src: "/images/4.42270bb6.png",
  },
  {
    alt: "Purple anemone",
    angle: 225,
    positionClass: "left-[14.65%] top-[85.35%]",
    src: "/images/4.6dd10411.png",
  },
  {
    alt: "Pink zinnia",
    angle: 270,
    positionClass: "left-0 top-1/2",
    src: "/images/3.25c08641.png",
  },
  {
    alt: "Purple aster",
    angle: 315,
    positionClass: "left-[14.65%] top-[14.65%]",
    src: "/images/1.e0d2ae2b.png",
  },
];

const middleFlowers: FlowerNode[] = [
  {
    alt: "Yellow gerbera",
    angle: 0,
    positionClass: "left-1/2 top-0",
    src: "/images/4.e82e1573.png",
  },
  {
    alt: "Orange pompon",
    angle: 36,
    positionClass: "left-[79.39%] top-[9.55%]",
    src: "/images/2.79a63e77.png",
  },
  {
    alt: "Purple flower",
    angle: 72,
    positionClass: "left-[97.55%] top-[34.55%]",
    src: "/images/1.68df25b0.png",
  },
  {
    alt: "Pink flower",
    angle: 108,
    positionClass: "left-[97.55%] top-[65.45%]",
    src: "/images/4.dcb063b8.png",
  },
  {
    alt: "Yellow chrysanthemum",
    angle: 144,
    positionClass: "left-[79.39%] top-[90.45%]",
    src: "/images/4.2b3f84d6.png",
  },
  {
    alt: "Green dahlia",
    angle: 180,
    positionClass: "left-1/2 top-full",
    src: "/images/3.c4b4dbbc.png",
  },
  {
    alt: "Orange dahlia",
    angle: 216,
    positionClass: "left-[20.61%] top-[90.45%]",
    src: "/images/2.1ffec2ae.png",
  },
  {
    alt: "Purple pompon",
    angle: 252,
    positionClass: "left-[2.45%] top-[65.45%]",
    src: "/images/1.e0d2ae2b.png",
  },
  {
    alt: "Pink zinnia",
    angle: 288,
    positionClass: "left-[2.45%] top-[34.55%]",
    src: "/images/3.25c08641.png",
  },
  {
    alt: "Green flower",
    angle: 324,
    positionClass: "left-[20.61%] top-[9.55%]",
    src: "/images/3.4bee62ad.png",
  },
];

const outerFlowers: FlowerNode[] = [
  {
    alt: "Yellow pompon",
    angle: 0,
    positionClass: "left-1/2 top-0",
    src: "/images/4.2b3f84d6.png",
  },
  {
    alt: "Green flower",
    angle: 30,
    positionClass: "left-3/4 top-[6.7%]",
    src: "/images/4.42270bb6.png",
  },
  {
    alt: "Orange flower",
    angle: 60,
    positionClass: "left-[93.3%] top-1/4",
    src: "/images/2.79a63e77.png",
  },
  {
    alt: "Purple flower",
    angle: 90,
    positionClass: "left-full top-1/2",
    src: "/images/1.68df25b0.png",
  },
  {
    alt: "Pink flower",
    angle: 120,
    positionClass: "left-[93.3%] top-3/4",
    src: "/images/4.dcb063b8.png",
  },
  {
    alt: "Yellow gerbera",
    angle: 150,
    positionClass: "left-3/4 top-[93.3%]",
    src: "/images/4.e82e1573.png",
  },
  {
    alt: "Green dahlia",
    angle: 180,
    positionClass: "left-1/2 top-full",
    src: "/images/3.c4b4dbbc.png",
  },
  {
    alt: "Pink cosmos",
    angle: 210,
    positionClass: "left-1/4 top-[93.3%]",
    src: "/images/3.9744c519.png",
  },
  {
    alt: "Orange dahlia",
    angle: 240,
    positionClass: "left-[6.7%] top-3/4",
    src: "/images/2.1ffec2ae.png",
  },
  {
    alt: "Yellow sunflower",
    angle: 270,
    positionClass: "left-0 top-1/2",
    src: "/images/2.c9d133a8.png",
  },
  {
    alt: "Purple anemone",
    angle: 300,
    positionClass: "left-[6.7%] top-1/4",
    src: "/images/4.6dd10411.png",
  },
  {
    alt: "Pink zinnia",
    angle: 330,
    positionClass: "left-1/4 top-[6.7%]",
    src: "/images/3.25c08641.png",
  },
];

const innerRotationClasses = [
  "-rotate-[14deg]",
  "-rotate-[12deg]",
  "-rotate-[10deg]",
  "-rotate-[8deg]",
  "-rotate-[6deg]",
  "-rotate-[4deg]",
  "-rotate-[2deg]",
  "rotate-0",
  "rotate-[2deg]",
  "rotate-[4deg]",
  "rotate-[6deg]",
  "rotate-[8deg]",
  "rotate-[10deg]",
] as const;

const middleRotationClasses = [
  "rotate-[13deg]",
  "rotate-[11deg]",
  "rotate-[9deg]",
  "rotate-[7deg]",
  "rotate-[5deg]",
  "rotate-[3deg]",
  "rotate-[1deg]",
  "-rotate-[1deg]",
  "-rotate-[3deg]",
  "-rotate-[5deg]",
  "-rotate-[7deg]",
  "-rotate-[9deg]",
  "-rotate-[11deg]",
] as const;

const outerRotationClasses = [
  "-rotate-[6deg]",
  "-rotate-[5deg]",
  "-rotate-[4deg]",
  "-rotate-[3deg]",
  "-rotate-[2deg]",
  "-rotate-[1deg]",
  "rotate-0",
  "rotate-[1deg]",
  "rotate-[2deg]",
  "rotate-[3deg]",
  "rotate-[4deg]",
  "rotate-[5deg]",
  "rotate-[6deg]",
] as const;

const innerParallaxClasses = [
  "-translate-y-8",
  "-translate-y-7",
  "-translate-y-6",
  "-translate-y-5",
  "-translate-y-4",
  "-translate-y-3",
  "-translate-y-2",
  "translate-y-0",
  "translate-y-2",
  "translate-y-3",
  "translate-y-4",
  "translate-y-5",
  "translate-y-6",
] as const;

const middleParallaxClasses = [
  "translate-y-12",
  "translate-y-10",
  "translate-y-8",
  "translate-y-6",
  "translate-y-4",
  "translate-y-2",
  "translate-y-0",
  "-translate-y-2",
  "-translate-y-4",
  "-translate-y-6",
  "-translate-y-8",
  "-translate-y-10",
  "-translate-y-12",
] as const;

const outerParallaxClasses = [
  "-translate-y-16",
  "-translate-y-14",
  "-translate-y-12",
  "-translate-y-10",
  "-translate-y-8",
  "-translate-y-6",
  "-translate-y-4",
  "-translate-y-2",
  "translate-y-0",
  "translate-y-2",
  "translate-y-4",
  "translate-y-6",
  "translate-y-8",
] as const;

function FlowerOrbit({
  className,
  flowerClassName,
  flowers,
  rotationClass,
}: FlowerOrbitProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-linear",
        rotationClass,
        className,
      )}
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 size-full overflow-visible"
        preserveAspectRatio="none"
      >
        {flowers.map((flower) => (
          <line
            key={`${flower.src}-${flower.angle}`}
            x1="50"
            y1="0"
            x2="50"
            y2="-12"
            transform={`rotate(${flower.angle} 50 50)`}
            vectorEffect="non-scaling-stroke"
            strokeWidth="1.5"
            strokeOpacity="0.72"
            stroke={
              ["#ff5500", "#fca1cd", "#8464ed", "#0b894d", "#f8ca12"][
                Math.round(flower.angle / 30) % 5
              ]
            }
          />
        ))}
      </svg>

      {flowers.map((flower) => (
        <span
          key={`${flower.src}-${flower.positionClass}`}
          className={cn(
            "absolute -translate-x-1/2 -translate-y-1/2",
            flower.positionClass,
            flowerClassName,
          )}
        >
          <Image
            src={flower.src}
            alt={flower.alt}
            width={128}
            height={128}
            sizes="128px"
            className="size-full object-contain"
          />
        </span>
      ))}
    </div>
  );
}

export function WebshopSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const [scrollStep, setScrollStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) {
      frameRef.current = window.requestAnimationFrame(() => {
        setScrollStep(12);
      });

      return () => {
        if (frameRef.current !== null) {
          window.cancelAnimationFrame(frameRef.current);
        }
      };
    }

    const updateScrollStep = () => {
      frameRef.current = null;
      const rect = section.getBoundingClientRect();
      const travel = rect.height + window.innerHeight;
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight - rect.top) / travel),
      );
      const nextStep = Math.round(progress * 12);

      setScrollStep((currentStep) =>
        currentStep === nextStep ? currentStep : nextStep,
      );
    };

    const requestUpdate = () => {
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(updateScrollStep);
      }
    };

    updateScrollStep();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="webshop-heading"
      className="relative h-[125svh] overflow-clip bg-[#e3dbca] text-[#141414] lg:h-[150svh]"
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 transition-transform duration-300 ease-linear",
            outerParallaxClasses[scrollStep],
          )}
        >
          <FlowerOrbit
            flowers={outerFlowers}
            rotationClass={outerRotationClasses[scrollStep]}
            className="size-[1120px] opacity-60 md:size-[1510px]"
            flowerClassName="size-24 blur-[2px] md:size-32"
          />
        </div>

        <div
          className={cn(
            "absolute inset-0 transition-transform duration-300 ease-linear",
            middleParallaxClasses[scrollStep],
          )}
        >
          <FlowerOrbit
            flowers={middleFlowers}
            rotationClass={middleRotationClasses[scrollStep]}
            className="size-[940px] opacity-80 md:size-[1458px]"
            flowerClassName="size-20 blur-[0.7px] md:size-24"
          />
        </div>

        <div
          className={cn(
            "absolute inset-0 transition-transform duration-300 ease-linear",
            innerParallaxClasses[scrollStep],
          )}
        >
          <FlowerOrbit
            flowers={innerFlowers}
            rotationClass={innerRotationClasses[scrollStep]}
            className="size-[680px] md:size-[1068px]"
            flowerClassName="size-14 md:size-16"
          />
        </div>

        <div className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center">
          <div className="flex w-[305px] flex-col items-center gap-10">
            <div
              className={cn(
                "transition-all duration-700 ease-out",
                scrollStep >= 3
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0",
              )}
            >
              <SectionLabel>Webshop</SectionLabel>
            </div>

            <h2
              id="webshop-heading"
              className="max-w-[10ch] font-heading text-[clamp(48px,8.78vw,69.7px)] font-extrabold uppercase leading-[0.8] tracking-[-0.03em]"
            >
              <span className="block overflow-hidden">
                <span
                  className={cn(
                    "block transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    scrollStep >= 4
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0",
                  )}
                >
                  Delivered fresh
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className={cn(
                    "block transition-all delay-100 duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    scrollStep >= 5
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-full opacity-0",
                  )}
                >
                  daily
                </span>
              </span>
            </h2>

            <div
              className={cn(
                "flex flex-col items-center transition-all duration-700 ease-out",
                scrollStep >= 7
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0",
              )}
            >
              <BrandButton href="https://shop.duyvenvoorde.nl/en-gb">
                Visit the webshop
              </BrandButton>
              <p className="mt-2.5 font-body text-[15px] leading-none">
                Access nature&apos;s finest
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
