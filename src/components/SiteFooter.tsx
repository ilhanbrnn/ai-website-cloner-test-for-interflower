import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";
import { BrandButton, SectionLabel } from "@/components/site-primitives";

const whatsappOrderUrl =
  "https://wa.me/905447204686?text=Merhaba%20InterFlower%2C%20çiçek%20siparişi%20vermek%20istiyorum.";
const instagramUrl = "https://www.instagram.com/interflower.cicekcilik/";

const menuLinks = [
  { label: "Hikâyemiz", href: "#hikaye" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Neden InterFlower", href: "#neden-interflower" },
  { label: "Sipariş", href: "#siparis" },
  { label: "İletişim", href: "#iletisim" },
] as const;

export function SiteFooter({ id }: { id: string }) {
  return (
    <footer
      id={id}
      className="bg-[#ede8de] px-[18px] pt-6 pb-[34px] text-[#141414] sm:px-0 lg:px-[4vw] lg:pb-6"
    >
      <div className="mx-auto grid w-full max-w-[584px] gap-6 lg:max-w-[1600px] lg:grid-cols-12">
        <div className="flex min-h-[537px] flex-col items-center justify-center rounded-[15.81px] bg-[#141414] px-6 py-12 text-center text-[#f7f6f3] lg:col-span-4 lg:row-span-2 lg:min-h-[684px]">
          <div>
            <p className="font-heading text-[32px] font-extrabold leading-none tracking-[-0.02em]">
              InterFlower
            </p>
            <p className="mt-2 font-body text-[11px] font-medium tracking-[0.2em] text-[#f7f6f3]/65 uppercase">
              Çiçekçilik
            </p>
          </div>

          <nav aria-label="Footer menüsü" className="mt-12">
            <p className="font-body text-[13.21px] leading-none font-[370] text-[#8c7d63]">
              Menü
            </p>
            <ul className="mt-8 space-y-[18px]">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-[16px] leading-none font-semibold transition-colors duration-200 hover:text-[#ff5500]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className="mt-12 max-w-[18rem] font-body text-[16px] leading-[1.25] text-[#f7f6f3]/75">
            Her Hikâye Bir Tohumla Başlar
          </p>
        </div>

        <section
          aria-labelledby="contact-heading"
          className="flex min-h-[274px] flex-col rounded-[15.81px] bg-[#e3dbca] p-6 lg:col-span-8"
        >
          <SectionLabel>İletişim</SectionLabel>
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
            className="mt-7"
          >
            WhatsApp’tan Sipariş Ver
          </BrandButton>
        </section>

        <section
          aria-labelledby="store-heading"
          className="flex min-h-[386px] flex-col rounded-[15.81px] bg-[#ff5500] p-6 text-[#f7f6f3] lg:col-span-8"
        >
          <SectionLabel className="bg-[#f7f6f3] text-[#8c7d63]">
            Mağaza bilgileri
          </SectionLabel>
          <h2
            id="store-heading"
            className="mt-8 font-heading text-[39px] leading-[0.8] font-extrabold tracking-[-0.03em] sm:text-[42px] lg:text-[clamp(42px,3.25vw,62px)]"
          >
            InterFlower Çiçekçilik
          </h2>

          <div className="mt-8 grid gap-3 font-body text-[16px] leading-[1.25] font-medium sm:grid-cols-2 sm:gap-x-8">
            <a
              href="tel:+905447204686"
              className="w-fit transition-colors duration-200 hover:text-[#141414]"
            >
              +90 544 720 46 86
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-fit items-center gap-2 transition-colors duration-200 hover:text-[#141414]"
            >
              <span>@interflower.cicekcilik</span>
              <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <address className="not-italic sm:col-span-2">
              <span className="block">
                Tepebaşı, Hastane Cd. Onat Apartmanı Altı No:40/E
              </span>
              <span className="block">47400 Kızıltepe/Mardin</span>
            </address>
            <p>Her gün 09.00–22.00</p>
            <p>Kızıltepe ve çevre ilçelere teslimat</p>
          </div>
        </section>

        <div className="flex min-h-[54px] items-center justify-center font-body text-[13.21px] leading-none font-[370] text-[#8c7d63] lg:col-span-12 lg:justify-start">
          <p>© 2026 InterFlower Çiçekçilik</p>
        </div>
      </div>
    </footer>
  );
}
