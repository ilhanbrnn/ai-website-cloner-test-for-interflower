"use client";

import Link from "next/link";
import { useState } from "react";

import { ArrowRightIcon, CircleMarkIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const whatsappOrderUrl =
  "https://wa.me/905447204686?text=Merhaba%20InterFlower%2C%20çiçek%20siparişi%20vermek%20istiyorum.";

const navigationLinks = [
  { href: "#hikaye", label: "Hikâyemiz" },
  { href: "#neden-interflower", label: "Neden InterFlower" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#siparis", label: "Sipariş" },
  { href: "#iletisim", label: "İletişim" },
] as const;

function WhatsAppOrderLink({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href={whatsappOrderUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp’tan sipariş ver"
      onClick={onClick}
      className="group/whatsapp inline-flex h-7 shrink-0 items-center justify-center gap-[7px] rounded-full bg-[#C95778] py-0 pr-[5px] pl-2.5 text-[13.8083px] leading-[20.7125px] font-normal whitespace-nowrap text-white transition-colors duration-150 hover:bg-[#8F4058] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#171716] focus-visible:outline-none lg:h-11 lg:gap-2.5 lg:pr-2.5 lg:pl-5 lg:text-[18px] lg:leading-[27px]"
    >
      <span>WhatsApp Sipariş</span>
      <span className="relative size-5 overflow-hidden lg:size-6">
        <CircleMarkIcon className="absolute inset-0 size-full transition-transform duration-300 group-hover/whatsapp:scale-0" />
        <ArrowRightIcon className="absolute inset-0 size-full -translate-x-full p-0.5 transition-transform duration-300 group-hover/whatsapp:translate-x-0" />
      </span>
    </a>
  );
}

function TextBrand() {
  return (
    <div className="flex flex-col leading-none">
      <span className="font-heading text-[22px] font-extrabold tracking-[-0.02em] lg:text-[28px]">
        InterFlower
      </span>
      <span className="mt-1 font-body text-[9px] font-medium tracking-[0.2em] text-[#E8E0D2]/70 uppercase lg:text-[10px]">
        Çiçekçilik
      </span>
    </div>
  );
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-[52] grid grid-cols-[minmax(24px,0.5fr)_repeat(10,minmax(0,1fr))_minmax(24px,0.5fr)] sm:grid-cols-16 lg:grid-cols-1">
      <div
        className={cn(
          "relative col-start-2 col-end-[-2] -mx-2 overflow-hidden rounded-b-[14px] border-x border-b border-[#E8E0D2]/25 bg-[#171716] text-[#f7f6f3] shadow-[0_143px_40px_0_rgba(0,0,0,0),0_92px_37px_0_rgba(0,0,0,0.01),0_52px_31px_0_rgba(0,0,0,0.05),0_23px_23px_0_rgba(0,0,0,0.09),0_6px_13px_0_rgba(0,0,0,0.1)] transition-[height] duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] sm:col-start-3 sm:col-end-[-3] sm:-mx-[15px] lg:col-span-full lg:col-start-1 lg:col-end-[-1] lg:mx-auto lg:h-[84px] lg:w-full lg:max-w-[1280px]",
          isMenuOpen ? "h-[535px]" : "h-[60px]",
        )}
      >
        <div className="relative z-10 flex h-[60px] items-center gap-2.5 px-[15px] lg:h-[84px] lg:gap-7.5 lg:px-[30px]">
          <Link
            href="#hero"
            aria-label="InterFlower ana sayfa"
            className="w-[168px] shrink-0 focus-visible:ring-2 focus-visible:ring-[#C95778] focus-visible:outline-none lg:w-[200px]"
            onClick={closeMenu}
          >
            <TextBrand />
          </Link>

          <nav
            aria-label="Ana navigasyon"
            className="hidden min-w-0 flex-1 items-center justify-center gap-5 lg:flex xl:gap-7.5 2xl:gap-10"
          >
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative inline-block shrink-0 font-body text-[15.8083px] leading-[23.7125px] font-medium text-[#f7f6f3] transition-transform duration-300 hover:-translate-y-px focus-visible:outline-none xl:text-[17px] xl:leading-[25.5px]"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-center scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="ml-auto hidden shrink-0 sm:flex lg:ml-0">
            <WhatsAppOrderLink onClick={closeMenu} />
          </div>

          <button
            type="button"
            aria-controls="compact-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            className="ml-auto inline-flex h-7 w-[72px] shrink-0 cursor-pointer items-center justify-between gap-[7px] rounded-full bg-[#30302e] py-0 pr-[5px] pl-2.5 text-[13.8083px] leading-[20.7125px] font-normal whitespace-nowrap text-[#f7f6f3] transition-colors duration-150 hover:bg-[#41413e] focus-visible:ring-2 focus-visible:ring-[#C95778] focus-visible:ring-offset-2 focus-visible:ring-offset-[#171716] focus-visible:outline-none sm:ml-0 lg:hidden"
          >
            <span>{isMenuOpen ? "Kapat" : "Menü"}</span>
            <CircleMarkIcon
              className={cn(
                "size-5 shrink-0 text-[#C95778] transition-transform duration-300",
                isMenuOpen && "rotate-45",
              )}
            />
          </button>
        </div>

        <nav
          id="compact-navigation"
          aria-label="Menu"
          aria-hidden={!isMenuOpen}
          className={cn(
            "absolute inset-0 z-0 px-12 pt-[128px] pb-12 transition-[opacity,transform,visibility] duration-200 lg:hidden",
            isMenuOpen
              ? "visible translate-y-0 opacity-100 delay-200"
              : "invisible -translate-y-3 opacity-0 delay-0",
          )}
        >
          <p className="text-[13.8083px] leading-[20.7125px] font-normal text-[#84907A]">
            Menü
          </p>
          <div className="mt-[24px] flex flex-col items-start gap-[18px]">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={closeMenu}
                className="group relative font-body text-[28.82px] leading-[34px] font-medium text-[#f7f6f3] transition-transform duration-300 hover:translate-x-1 focus-visible:outline-none"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-[#f7f6f3] transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
              </Link>
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <WhatsAppOrderLink onClick={closeMenu} />
          </div>
        </nav>
      </div>
    </header>
  );
}
