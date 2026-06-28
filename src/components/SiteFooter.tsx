import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";
import { BrandButton, SectionLabel } from "@/components/site-primitives";

const whatsappOrderUrl =
  "https://wa.me/905447204686?text=Merhaba%20InterFlower%2C%20çiçek%20siparişi%20vermek%20istiyorum.";
const instagramUrl = "https://www.instagram.com/interflower.cicekcilik/";

const menuLinks = [
  { label: "Hikâyemiz", href: "#hikaye" },
  { label: "Neden InterFlower", href: "#neden-interflower" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Sipariş", href: "#siparis" },
  { label: "İletişim", href: "#iletisim" },
] as const;

export function SiteFooter({ id }: { id: string }) {
  return (
    <footer
      id={id}
      className="bg-[#E8E0D2] px-[18px] pt-6 pb-[34px] text-[#171716] sm:px-0 lg:px-[4vw] lg:pb-6"
    >
      <div className="mx-auto grid w-full max-w-[584px] gap-6 lg:max-w-[1600px] lg:grid-cols-12">
        <div className="flex min-h-[537px] flex-col items-center justify-center rounded-[15.81px] bg-[#171716] px-6 py-12 text-center text-[#f7f6f3] lg:col-span-4 lg:row-span-2 lg:min-h-[684px]">
          <div>
            <p className="font-heading text-[32px] font-extrabold leading-none tracking-[-0.02em]">
              InterFlower
            </p>
            <p className="mt-2 font-body text-[11px] font-medium tracking-[0.2em] text-[#E8E0D2]/70 uppercase">
              Çiçekçilik
            </p>
          </div>

          <nav aria-label="Footer menüsü" className="mt-12">
            <p className="font-body text-[13.21px] leading-none font-[370] text-[#84907A]">
              Menü
            </p>
            <ul className="mt-8 space-y-[18px]">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-[16px] leading-none font-semibold transition-colors duration-200 hover:text-[#C95778]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className="mt-12 max-w-[18rem] font-body text-[16px] leading-[1.25] text-[#f7f6f3]/75">
            Sevginin yolu çiçeklerden geçer.
          </p>
        </div>

        <section
          aria-labelledby="contact-heading"
          className="flex min-h-[274px] flex-col rounded-[15.81px] bg-[#F2ECE2] p-6 lg:col-span-8"
        >
          <SectionLabel className="bg-[#8F4058] text-[#F2ECE2]">
            İletişim
          </SectionLabel>
          <h2
            id="contact-heading"
            className="mt-6 font-body text-[28px] leading-none font-semibold tracking-[-0.02em] sm:text-[30px]"
          >
            Bir çiçekle başlayalım
          </h2>
          <p className="mt-5 max-w-[52rem] font-body text-[15px] leading-[1.35] font-[370] sm:text-[16px]">
            Buket, özel gün çiçeği veya organizasyon talebiniz için bize
            WhatsApp üzerinden ulaşın.
          </p>

          <BrandButton
            href={whatsappOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 hover:bg-[#743247]"
          >
            WhatsApp’tan Sipariş Ver
          </BrandButton>
        </section>

        <section
          aria-labelledby="store-heading"
          className="flex min-h-[386px] flex-col rounded-[15.81px] bg-[#743247] p-6 text-[#E8E0D2] lg:col-span-8"
        >
          <SectionLabel className="bg-[#E5BBC5] text-[#743247]">
            Mağaza bilgileri
          </SectionLabel>
          <h2
            id="store-heading"
            className="mt-8 font-heading text-[39px] leading-[0.8] font-extrabold tracking-[-0.03em] sm:text-[42px] lg:text-[clamp(42px,3.25vw,62px)]"
          >
            InterFlower Çiçekçilik
          </h2>

          <div className="mt-8 grid gap-3 font-body text-[16px] leading-[1.25] font-medium text-[#E8E0D2]/80 sm:grid-cols-2 sm:gap-x-8">
            <a
              href="tel:+905447204686"
              className="w-fit transition-colors duration-200 hover:text-white"
            >
              +90 544 720 46 86
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-fit items-center gap-2 transition-colors duration-200 hover:text-white"
            >
              <span>@interflower.cicekcilik</span>
              <ArrowRightIcon className="size-4 text-[#E5BBC5] transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <address className="not-italic sm:col-span-2">
              <a
                href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x154ad4de262b7087:0xc966172b66c23cce?sa=X&ved=1t:8290&hl=tr-TR&ictx=111&cshid=1782677964052121"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="InterFlower konumunu Google Maps’te aç"
                className="block transition-opacity duration-200 hover:opacity-75 focus-visible:opacity-75 focus-visible:outline-none"
              >
                <span className="block">
                  Tepebaşı, Hastane Cd. Onat Apartmanı Altı No:40/E
                </span>
                <span className="block">47400 Kızıltepe/Mardin</span>
              </a>
            </address>
            <p>Her gün 08.00–22.00</p>
            <p>Mardin ve ilçelerine teslimat</p>
          </div>
        </section>

        <div className="flex min-h-[54px] items-center justify-center font-body text-[13.21px] leading-none font-[370] text-[#84907A] lg:col-span-12 lg:justify-start">
          <p>© 2026 InterFlower Çiçekçilik</p>
        </div>
      </div>
    </footer>
  );
}
