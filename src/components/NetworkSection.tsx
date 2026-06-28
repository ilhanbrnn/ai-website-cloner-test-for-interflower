"use client";

import type { ComponentType, SVGProps } from "react";
import { useEffect, useRef } from "react";

import {
  DeliveryIcon,
  HeartIcon,
  PersonIcon,
  SparkIcon,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { BrandButton, SectionLabel } from "@/components/site-primitives";

interface Benefit {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const benefits: readonly Benefit[] = [
  {
    title: "2006’dan beri deneyim",
    description: "Yılların getirdiği ustalık, güven ve yerel tecrübe.",
    icon: DeliveryIcon,
  },
  {
    title: "Kişiye özel tasarım",
    description:
      "Her buket ve aranjman kişiye, ana ve isteğe göre hazırlanır.",
    icon: HeartIcon,
  },
  {
    title: "Kalite ve özen",
    description:
      "Ürün seçiminden teslimata kadar titiz hazırlık ve ilgili hizmet.",
    icon: PersonIcon,
  },
  {
    title: "Mardin ve ilçelerine teslimat",
    description:
      "Aynı gün ve acil siparişlerde uygunluk durumuna göre hızlı çözüm.",
    icon: SparkIcon,
  },
];

const designerSignature = "Mahmut Baba — Çiçek Tasarımcısı";
const googleReviewsUrl = "https://share.google/t3Q9ln2hH9n4rt4IP";

function NetworkConnector() {
  return (
    <div
      data-network-connector
      aria-hidden="true"
      className="pointer-events-none relative left-1/2 h-12 w-screen -translate-x-1/2"
    >
      <svg
        viewBox="0 0 390 48"
        preserveAspectRatio="none"
        className="size-full sm:hidden"
      >
        <path
          d="M0 47H76"
          fill="none"
          stroke="#171716"
          strokeWidth="2.5"
        />
        <path
          d="M86 47h77c18 0 32-14 32-32V0"
          fill="none"
          stroke="#171716"
          strokeWidth="2.5"
        />
        <path
          data-scroll-progress-line
          d="M0 47H76M86 47h77c18 0 32-14 32-32V0"
          fill="none"
          pathLength={1}
          stroke="#B66F7A"
          strokeDasharray={1}
          strokeDashoffset={1}
          strokeWidth="2.5"
        />
      </svg>

      <svg
        viewBox="0 0 794 48"
        preserveAspectRatio="none"
        className="hidden size-full sm:block"
      >
        <path
          d="M0 47h176"
          fill="none"
          stroke="#171716"
          strokeWidth="2.5"
        />
        <path
          d="M186 47h98c18 0 32-14 32-32V0"
          fill="none"
          stroke="#171716"
          strokeWidth="2.5"
        />
        <path
          data-scroll-progress-line
          d="M0 47h176M186 47h98c18 0 32-14 32-32V0"
          fill="none"
          pathLength={1}
          stroke="#B66F7A"
          strokeDasharray={1}
          strokeDashoffset={1}
          strokeWidth="2.5"
        />
      </svg>
    </div>
  );
}

function BenefitItem({ benefit }: { benefit: Benefit }) {
  const Icon = benefit.icon;

  return (
    <article>
      <Icon className="size-7 text-[#B66F7A]" />
      <h3 className="mt-4 font-body text-[20px] font-semibold leading-[1.15] tracking-[-0.01em]">
        {benefit.title}
      </h3>
      <p className="mt-3 max-w-[36rem] font-body text-[17.21px] font-[370] leading-[22.37px]">
        {benefit.description}
      </p>
    </article>
  );
}

function GoogleReviewsCard() {
  return (
    <Reveal>
      <article className="rounded-[15.81px] bg-[#E6B9C3] p-6 text-[#171716] sm:p-8 xl:p-10">
        <SectionLabel className="bg-[#171716] text-[#E8E0D2]">
          GOOGLE YORUMLARI
        </SectionLabel>
        <h3 className="mt-7 font-body text-[clamp(28px,4vw,44px)] leading-[1.02] font-semibold tracking-[-0.02em]">
          Müşterilerimiz ne diyor?
        </h3>
        <p className="mt-5 max-w-[48rem] font-body text-[17px] leading-[1.4] font-[370] sm:text-[19px]">
          Kaliteli ürün, ilgili hizmet ve güvenilir teslimat anlayışımız Google
          yorumlarında da öne çıkıyor.
        </p>
        <BrandButton
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7"
        >
          Google yorumlarını görüntüle
        </BrandButton>
      </article>
    </Reveal>
  );
}

export function NetworkSection({ id }: { id: string }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const progressLines = section.querySelectorAll<SVGPathElement>(
      "[data-scroll-progress-line]",
    );
    const connector = section.querySelector<HTMLElement>(
      "[data-network-connector]",
    );

    if (!connector) {
      return;
    }

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

      const rect = connector.getBoundingClientRect();
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
      aria-labelledby="network-heading"
      className="overflow-hidden bg-[#E8E0D2] px-[18px] pb-20 text-[#171716] sm:px-0 sm:pb-[83px] sm:pt-[58px] xl:pb-36 xl:pt-0"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="relative sm:ml-[12.5%] sm:w-[75%] xl:ml-[4vw] xl:w-[50%]">
          <Reveal>
            <div className="flex min-h-[620px] flex-col rounded-[15.81px] bg-[#171716] p-6 text-[#f7f6f3] sm:p-8 xl:min-h-[680px] xl:p-[clamp(32px,3vw,56px)]">
              <SectionLabel className="bg-[#B66F7A] text-white">
                NEDEN INTERFLOWER?
              </SectionLabel>

              <Reveal delay={1} className="mt-10">
                <h2
                  id="network-heading"
                  className="max-w-[15ch] font-body text-[clamp(38px,5vw,68px)] leading-[0.98] font-semibold tracking-[-0.03em]"
                >
                  2006’dan beri çiçekleri hatıraya dönüştürüyoruz.
                </h2>
              </Reveal>

              <Reveal delay={2} className="mt-8">
                <p className="max-w-[42rem] font-body text-[18px] leading-[1.4] font-[370] text-[#f7f6f3]/90 sm:text-[20px]">
                  InterFlower Çiçekçilik &amp; Çikolata, yılların tecrübesini
                  kaliteli ürün, özenli tasarım ve güvenilir hizmet anlayışıyla
                  birleştirir.
                </p>
              </Reveal>

              <div className="mt-auto pt-10">
                <p className="max-w-[44rem] font-body text-[16px] leading-[1.45] font-[370] text-[#E8E0D2]/78 sm:text-[18px]">
                  InterFlower adı, çiçeklerin sınırları aşan evrensel dilinden
                  ilham alır. Farklı duyguları, özel anları ve kişisel
                  hikâyeleri çiçeklerle buluşturmayı temsil eder.
                </p>
                <p className="mt-6 font-body text-[15px] font-semibold text-[#E6B9C3] sm:text-[17px]">
                  {designerSignature}
                </p>
              </div>
            </div>
          </Reveal>

          <NetworkConnector />
        </div>

        <div className="mt-20 grid gap-y-10 sm:ml-[12.5%] sm:mt-0 sm:w-[75%] sm:pt-12 xl:ml-[4vw] xl:w-[92%] xl:grid-cols-2 xl:gap-x-[clamp(48px,7vw,120px)] xl:gap-y-16 xl:pt-8">
          {benefits.map((benefit, index) => (
            <Reveal
              key={benefit.title}
              delay={(index % 4) as 0 | 1 | 2 | 3}
            >
              <BenefitItem benefit={benefit} />
            </Reveal>
          ))}
        </div>

        <div className="mt-14 sm:ml-[12.5%] sm:w-[75%] xl:ml-[4vw] xl:w-[92%]">
          <GoogleReviewsCard />
        </div>
      </div>
    </section>
  );
}
