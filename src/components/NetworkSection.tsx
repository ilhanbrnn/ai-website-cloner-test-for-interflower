"use client";

import Image from "next/image";
import type { ComponentType, RefObject, SVGProps } from "react";
import { useEffect, useRef } from "react";

import { MahmutBabaAudio } from "@/components/MahmutBabaAudio";
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
    title: "Yılların getirdiği ustalık",
    description:
      "Uzun yılların kazandırdığı tecrübe, güven ve yerel bilgi.",
    icon: SparkIcon,
  },
  {
    title: "Kişiye özel tasarım",
    description:
      "Her buket ve aranjman kişiye, ana ve isteğe göre hazırlanır.",
    icon: HeartIcon,
  },
  {
    title: "Hızlı teslimat",
    description:
      "Aynı gün ve acil siparişlerde uygunluk durumuna göre hızlı çözüm.",
    icon: DeliveryIcon,
  },
  {
    title: "Yerel ve güvenilir hizmet",
    description:
      "Mardin ve ilçelerinde titiz hazırlık, ilgili hizmet ve güvenilir teslimat.",
    icon: PersonIcon,
  },
];

const googleReviewsUrl = "https://share.google/t3Q9ln2hH9n4rt4IP";
const whatsappOrderUrl =
  "https://wa.me/905447204686?text=Merhaba%20InterFlower%2C%20çiçek%20siparişi%20vermek%20istiyorum.";

function NetworkConnector({
  storyFlowerSpinRef,
}: {
  storyFlowerSpinRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      data-network-connector
      aria-hidden="true"
      className="pointer-events-none relative left-1/2 h-12 w-screen -translate-x-1/2 overflow-visible"
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

      <div className="pointer-events-none absolute left-[22%] top-[96%] z-20 size-[96px] -translate-x-1/2 -translate-y-1/2 sm:size-[120px] lg:size-[148px]">
        <div
          ref={storyFlowerSpinRef}
          className="relative size-full will-change-transform"
        >
          <Image
            src="/images/3.c4b4dbbc.png"
            alt=""
            fill
            sizes="(min-width: 1024px) 148px, (min-width: 640px) 120px, 96px"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

function BenefitItem({ benefit }: { benefit: Benefit }) {
  const Icon = benefit.icon;

  return (
    <article>
      <Icon className="size-7 text-[#C95778]" />
      <h3 className="mt-4 font-body text-[20px] font-semibold leading-[1.15] tracking-[-0.01em]">
        {benefit.title}
      </h3>
      <p className="mt-3 max-w-[36rem] font-body text-[17.21px] font-[370] leading-[22.37px]">
        {benefit.description}
      </p>
    </article>
  );
}

function MahmutBabaStory() {
  return (
    <Reveal>
      <article className="grid overflow-visible rounded-[15.81px] border border-[#C95778]/25 bg-[#F2ECE2] lg:grid-cols-2">
        <MahmutBabaAudio className="group relative aspect-square w-full overflow-hidden rounded-t-[15.81px] lg:rounded-l-[15.81px] lg:rounded-tr-none">
          <Image
            src="/images/interflower/mahmut-portrait.png"
            alt="InterFlower çiçek tasarımcısı Mahmut Baba"
            fill
            sizes="(min-width: 1024px) 46vw, (min-width: 640px) 75vw, calc(100vw - 36px)"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-black/5 transition-colors duration-300 group-hover:bg-black/10"
          />
        </MahmutBabaAudio>

        <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-[clamp(32px,4vw,64px)]">
          <SectionLabel className="bg-[#8F4058] text-[#F2ECE2]">
            MAHMUT BABA
          </SectionLabel>
          <p className="mt-4 font-body text-[13px] font-semibold tracking-[0.16em] text-[#8F4058] uppercase">
            ÇİÇEK TASARIMCISI
          </p>
          <h3 className="mt-8 max-w-[12ch] font-body text-[clamp(36px,5vw,68px)] leading-[0.98] font-semibold tracking-[-0.03em] text-[#171716]">
            Çiçek işini ustasına bırak.
          </h3>
          <p className="mt-7 max-w-[34rem] font-body text-[18px] leading-[1.4] font-[370] text-[#171716]/85 sm:text-[20px]">
            Her buket; yılların getirdiği tecrübe, kişisel dokunuş ve özenli
            işçilikle hazırlanır.
          </p>
          <BrandButton
            href={whatsappOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 bg-[#171716] text-[#F2ECE2] hover:bg-[#743247]"
          >
            WhatsApp’tan Yaz
          </BrandButton>
        </div>
      </article>
    </Reveal>
  );
}

function GoogleReviewsCard() {
  return (
    <Reveal>
      <article className="rounded-[15.81px] border border-[#171716]/10 bg-[#F2ECE2] p-6 text-[#171716] sm:p-8 xl:p-10">
        <SectionLabel className="bg-[#8F4058] text-[#F2ECE2]">
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
          className="mt-7 bg-[#8F4058] text-[#F2ECE2] hover:bg-[#743247]"
        >
          Google yorumlarını görüntüle
        </BrandButton>
      </article>
    </Reveal>
  );
}

export function NetworkSection({ id }: { id: string }) {
  const sectionRef = useRef<HTMLElement>(null);
  const storyFlowerSpinRef = useRef<HTMLDivElement>(null);

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
    const storyFlower = storyFlowerSpinRef.current;

    if (!connector || !storyFlower) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reducedMotion.matches) {
      progressLines.forEach((line) => {
        line.style.strokeDashoffset = "0";
      });
      storyFlower.style.transform = "rotate(0deg)";
      return;
    }

    let frameId: number | null = null;

    const updateProgress = () => {
      frameId = null;

      const rect = connector.getBoundingClientRect();
      const travel = window.innerHeight + rect.height;
      const progress = Math.min(
        1,
        Math.max(0, (window.innerHeight - rect.top) / travel),
      );

      progressLines.forEach((line) => {
        line.style.strokeDashoffset = String(1 - progress);
      });
      storyFlower.style.transform = `rotate(${progress * 720}deg)`;
    };

    const requestUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
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
      id={id}
      aria-labelledby="network-heading"
      className="overflow-hidden bg-[#E8E0D2] px-[18px] pb-20 text-[#171716] sm:px-0 sm:pb-[83px] sm:pt-[58px] xl:pb-36 xl:pt-0"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="relative sm:ml-[12.5%] sm:w-[75%] xl:ml-[4vw] xl:w-[50%]">
          <Reveal>
            <div className="flex min-h-[540px] flex-col rounded-[15.81px] bg-[#171716] p-6 text-[#f7f6f3] sm:p-8 xl:min-h-[600px] xl:p-[clamp(32px,3vw,56px)]">
              <SectionLabel className="bg-[#C95778] text-white">
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

              <Reveal delay={2} className="mt-auto pt-10">
                <p className="max-w-[44rem] font-body text-[17px] leading-[1.45] font-[370] text-[#E8E0D2]/85 sm:text-[19px]">
                  InterFlower, çiçeklerin sınır tanımayan dilinden ilham alır.
                  Yıllardır Mardin’de duyguları, özel günleri ve hikâyeleri
                  özenle hazırlanan tasarımlarla bir araya getiriyoruz.
                </p>
              </Reveal>
            </div>
          </Reveal>

          <NetworkConnector storyFlowerSpinRef={storyFlowerSpinRef} />
        </div>

        <div className="mt-20 sm:ml-[12.5%] sm:w-[75%] xl:ml-[4vw] xl:w-[92%]">
          <MahmutBabaStory />
        </div>

        <div className="mt-16 grid gap-y-10 sm:ml-[12.5%] sm:w-[75%] xl:ml-[4vw] xl:w-[92%] xl:grid-cols-2 xl:gap-x-[clamp(48px,7vw,120px)] xl:gap-y-16">
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
