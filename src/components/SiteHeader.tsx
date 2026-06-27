"use client";

import Link from "next/link";
import { useState } from "react";

import { ArrowRightIcon, CircleMarkIcon } from "@/components/icons";
import { BrandLogo } from "@/components/site-primitives";
import { cn } from "@/lib/utils";

const navigationLinks = [
  { href: "/en/our-approach", label: "Our approach" },
  { href: "/en/our-products", label: "Our products" },
  { href: "/en/inspiration", label: "Inspiration" },
  { href: "/en/about-us", label: "About us" },
  { href: "/en/careers", label: "Careers" },
  { href: "/en/contact", label: "Contact" },
] as const;

function WebshopLink() {
  return (
    <Link
      href="https://shop.duyvenvoorde.nl/en-gb"
      aria-label="Webshop"
      className="group/webshop inline-flex h-7 shrink-0 items-center justify-center gap-[7px] rounded-full bg-[#ff5500] py-0 pr-[5px] pl-2.5 text-[13.8083px] leading-[20.7125px] font-normal whitespace-nowrap text-white transition-colors duration-150 hover:bg-[#e94e00] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414] focus-visible:outline-none lg:h-11 lg:gap-2.5 lg:pr-2.5 lg:pl-5 lg:text-[18px] lg:leading-[27px]"
    >
      <span>Webshop</span>
      <span className="relative size-5 overflow-hidden lg:size-6">
        <CircleMarkIcon className="absolute inset-0 size-full transition-transform duration-300 group-hover/webshop:scale-0" />
        <ArrowRightIcon className="absolute inset-0 size-full -translate-x-full p-0.5 transition-transform duration-300 group-hover/webshop:translate-x-0" />
      </span>
    </Link>
  );
}

function LanguageLinks() {
  return (
    <div className="flex h-4 shrink-0 items-center text-[13.8083px] leading-none font-normal uppercase lg:h-6 lg:text-[16px]">
      <Link
        href="https://duyvenvoorde.nl/"
        className="text-[#f7f6f3]/50 transition-colors duration-300 hover:text-[#ff5500] focus-visible:outline-none"
      >
        NL
      </Link>
      <span
        aria-hidden="true"
        className="mx-1.5 h-4 w-px bg-[#e3dbca]/60 md:mx-2 lg:mx-2.5 lg:h-6"
      />
      <Link
        href="https://duyvenvoorde.nl/en"
        aria-current="page"
        className="text-[#ff5500] transition-colors duration-300 hover:text-[#f7f6f3] focus-visible:outline-none"
      >
        EN
      </Link>
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
          "relative col-start-2 col-end-[-2] -mx-2 overflow-hidden rounded-b-[14px] border-x border-b border-[#e3dbca]/25 bg-[#141414] text-[#f7f6f3] shadow-[0_143px_40px_0_rgba(0,0,0,0),0_92px_37px_0_rgba(0,0,0,0.01),0_52px_31px_0_rgba(0,0,0,0.05),0_23px_23px_0_rgba(0,0,0,0.09),0_6px_13px_0_rgba(0,0,0,0.1)] transition-[height] duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] sm:col-start-3 sm:col-end-[-3] sm:-mx-[15px] lg:col-span-full lg:col-start-1 lg:col-end-[-1] lg:mx-auto lg:h-[84px] lg:w-full lg:max-w-[1280px]",
          isMenuOpen ? "h-[535px]" : "h-[60px]",
        )}
      >
        <div className="relative z-10 flex h-[60px] items-center gap-2.5 px-[15px] lg:h-[84px] lg:gap-7.5 lg:px-[30px]">
          <Link
            href="/en"
            aria-label="Home"
            className="shrink-0 focus-visible:ring-2 focus-visible:ring-[#ff5500] focus-visible:outline-none"
            onClick={closeMenu}
          >
            <BrandLogo className="w-[168px] lg:w-[240px]" />
          </Link>

          <nav
            aria-label="Primary navigation"
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

          <div className="ml-auto hidden shrink-0 items-center gap-5 sm:flex lg:ml-0 2xl:gap-7.5">
            <LanguageLinks />
            <WebshopLink />
          </div>

          <button
            type="button"
            aria-controls="compact-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            className="ml-auto inline-flex h-7 w-[72px] shrink-0 cursor-pointer items-center justify-between gap-[7px] rounded-full bg-[#393128] py-0 pr-[5px] pl-2.5 text-[13.8083px] leading-[20.7125px] font-normal whitespace-nowrap text-[#f7f6f3] transition-colors duration-150 hover:bg-[#4a4035] focus-visible:ring-2 focus-visible:ring-[#ff5500] focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414] focus-visible:outline-none sm:ml-0 lg:hidden"
          >
            <span>{isMenuOpen ? "Close" : "Menu"}</span>
            <CircleMarkIcon
              className={cn(
                "size-5 shrink-0 text-[#ff5500] transition-transform duration-300",
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
          <p className="text-[13.8083px] leading-[20.7125px] font-normal text-[#8c7d63]">
            Menu
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
        </nav>
      </div>
    </header>
  );
}
