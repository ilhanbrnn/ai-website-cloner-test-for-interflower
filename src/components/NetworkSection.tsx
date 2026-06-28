import type { ComponentType, SVGProps } from "react";

import {
  CheckIcon,
  DeliveryIcon,
  HeartIcon,
  MailIcon,
  PersonIcon,
  SparkIcon,
} from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { BrandButton } from "@/components/site-primitives";

interface Benefit {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const benefits: readonly Benefit[] = [
  {
    title: "Fresh delivery, day and night",
    description:
      "You can order from us at any time. Thanks to direct links with our suppliers, we deliver your order fresh - right when you need it.",
    icon: DeliveryIcon,
  },
  {
    title: "Service without limits",
    description:
      "Our goal is to take the weight off your shoulders. From ready-to-sell products to setting up a personal webshop: we make it happen.",
    icon: HeartIcon,
  },
  {
    title: "Personal and reliable",
    description:
      "Personal contact matters to us. That’s why you’ll have one dedicated contact who understands your business and supports you in your own language.",
    icon: PersonIcon,
  },
  {
    title: "Expertise in every field",
    description:
      "Every team member brings their own expertise. Together with our experience and knowledge of the market, this means we come up with smart solutions. Every time.",
    icon: SparkIcon,
  },
];

const networkPoints = [
  "Flowers and plants from top growers",
  "Carefully selected by our team",
  "Access nature’s finest",
] as const;

function NetworkConnector() {
  return (
    <div
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
          stroke="#ff5500"
          strokeWidth="2.5"
        />
        <path
          d="M86 47h77c18 0 32-14 32-32V0"
          fill="none"
          stroke="#141414"
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
          stroke="#ff5500"
          strokeWidth="2.5"
        />
        <path
          d="M186 47h98c18 0 32-14 32-32V0"
          fill="none"
          stroke="#141414"
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
      <Icon className="size-7 text-[#ff5500]" />
      <h3 className="mt-4 font-body text-[20px] font-semibold leading-[1.15] tracking-[-0.01em]">
        {benefit.title}
      </h3>
      <p className="mt-3 max-w-[36rem] font-body text-[17.21px] font-[370] leading-[22.37px]">
        {benefit.description}
      </p>
    </article>
  );
}

export function NetworkSection({ id }: { id: string }) {
  return (
    <section
      id={id}
      aria-labelledby="network-heading"
      className="overflow-hidden bg-[#ede8de] px-[18px] pb-20 text-[#141414] sm:px-0 sm:pb-[83px] sm:pt-[58px] xl:pb-36 xl:pt-0"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="relative sm:ml-[12.5%] sm:w-[56.25%] xl:ml-[4vw] xl:w-[42%]">
          <Reveal>
            <div className="flex min-h-[520px] flex-col rounded-[15.81px] bg-[#141414] p-6 text-[#f7f6f3] sm:h-[498px] sm:min-h-0 xl:h-[clamp(520px,36vw,620px)] xl:p-[clamp(24px,2.5vw,48px)]">
              <div>
                <p className="font-body text-[14px] font-[370] leading-none text-[#a19d96]">
                  Need advice?
                </p>
                <p className="mt-1 font-body text-[20px] font-semibold leading-none">
                  Contact us
                </p>
                <a
                  href="mailto:contact@duyvenvoorde.nl"
                  className="mt-2 inline-flex items-center gap-1.5 font-body text-[14px] font-[370] leading-none text-[#ff5500] transition-colors duration-300 hover:text-[#f7f6f3]"
                >
                  <MailIcon className="size-4 shrink-0" />
                  contact@duyvenvoorde.nl
                </a>
              </div>

              <Reveal delay={1} className="mt-8">
                <h2
                  id="network-heading"
                  className="max-w-[10ch] font-heading text-[39.04px] font-extrabold uppercase leading-[31.23px] tracking-[-1.17px]"
                >
                  Access to our global network
                </h2>
              </Reveal>

              <div className="mt-auto">
                <ul className="space-y-2">
                  {networkPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 font-body text-[15px] font-[370] leading-[1.2]"
                    >
                      <CheckIcon className="size-[18px] shrink-0 text-[#ff5500]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <BrandButton
                  href="/en/become-a-customer"
                  inverted
                  className="mt-6"
                >
                  Become a customer
                </BrandButton>
              </div>
            </div>
          </Reveal>

          <NetworkConnector />
        </div>

        <div className="mt-20 grid gap-y-10 sm:ml-[12.5%] sm:mt-0 sm:w-[75%] sm:pt-12 xl:ml-[4vw] xl:w-[92%] xl:grid-cols-2 xl:gap-x-[clamp(48px,7vw,120px)] xl:gap-y-16 xl:pt-0">
          {benefits.map((benefit, index) => (
            <Reveal
              key={benefit.title}
              delay={(index % 4) as 0 | 1 | 2 | 3}
            >
              <BenefitItem benefit={benefit} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
