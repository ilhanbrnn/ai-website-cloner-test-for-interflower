import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";
import {
  BrandButton,
  BrandLogo,
  SectionLabel,
} from "@/components/site-primitives";

const menuLinks = [
  { label: "Our approach", href: "/en/our-approach" },
  { label: "Careers", href: "/en/careers" },
  { label: "Inspiration", href: "/en/inspiration" },
  { label: "Our products", href: "/en/our-products" },
  { label: "About us", href: "/en/about-us" },
  { label: "Sustainability", href: "/en/duurzaamheid" },
  { label: "Contact", href: "/en/contact" },
];

const toolLinks = [
  { label: "AFAS Insite login", href: "http://71501.afasinsite.nl/" },
  { label: "Teamviewer", href: "https://get.teamviewer.com/67fcz2y" },
];

export function SiteFooter() {
  return (
    <footer
      id="footer"
      className="bg-[#ede8de] px-[18px] pb-[34px] pt-6 text-[#141414] sm:px-0 lg:px-[4vw] lg:pb-6"
    >
      <div className="mx-auto grid w-full max-w-[584px] gap-6 lg:max-w-[1600px] lg:grid-cols-12">
        <div className="flex h-[537px] flex-col items-center justify-center rounded-[15.81px] bg-[#141414] px-6 text-center text-[#f7f6f3] lg:col-span-4 lg:row-span-2 lg:h-full lg:min-h-[684px]">
          <nav aria-label="Footer menu">
            <p className="font-body text-[13.21px] font-[370] leading-none text-[#8c7d63]">
              Menu
            </p>
            <ul className="mt-8 space-y-[18px]">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-[16px] font-semibold leading-none transition-colors duration-200 hover:text-[#ff5500]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer tools" className="mt-12">
            <p className="font-body text-[13.21px] font-[370] leading-none text-[#8c7d63]">
              Tools
            </p>
            <ul className="mt-8 space-y-6">
              {toolLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-[16px] font-semibold leading-none transition-colors duration-200 hover:text-[#ff5500]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <section
          aria-labelledby="newsletter-heading"
          className="flex h-[274px] flex-col rounded-[15.81px] bg-[#e3dbca] p-6 lg:col-span-8"
        >
          <SectionLabel>Newsletter</SectionLabel>
          <h2
            id="newsletter-heading"
            className="mt-6 font-body text-[28px] font-semibold leading-none tracking-[-0.02em] sm:text-[30px]"
          >
            Inspiration in your mailbox
          </h2>
          <p className="mt-5 max-w-[52rem] font-body text-[15px] font-[370] leading-[1.35] sm:text-[16px]">
            From behind the scenes with growers to the latest trends, all
            summarised in one newsletter. Sign up now!
          </p>

          <form
            aria-label="Newsletter sign up"
            className="mt-auto flex h-[59px] items-center rounded-[13px] border border-[#d7cdb9] bg-[#f7f6f3] p-1"
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="Email address"
              className="h-full min-w-0 flex-1 bg-transparent px-4 font-body text-[14px] font-[370] text-[#141414] outline-none placeholder:text-[#8c7d63]"
            />
            <button
              type="button"
              aria-label="Sign up for the newsletter"
              className="flex size-[49px] shrink-0 items-center justify-center rounded-[10px] bg-[#ff5500] text-[#f7f6f3] transition-colors duration-200 hover:bg-[#141414]"
            >
              <ArrowRightIcon className="size-5" />
            </button>
          </form>
        </section>

        <section
          aria-labelledby="webshop-heading"
          className="flex h-[386px] flex-col rounded-[15.81px] bg-[#ff5500] p-6 text-[#f7f6f3] lg:col-span-8"
        >
          <SectionLabel className="bg-[#f7f6f3] text-[#8c7d63]">
            In stock
          </SectionLabel>
          <h2
            id="webshop-heading"
            className="mt-10 max-w-[13ch] font-heading text-[39px] font-extrabold uppercase leading-[0.8] tracking-[-0.03em] sm:text-[42px] lg:text-[clamp(42px,3.25vw,62px)]"
          >
            Daily access to 10,000 unique products
          </h2>

          <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
            <BrandButton href="/en/become-a-customer" inverted>
              Get started
            </BrandButton>
            <Link
              href="https://shop.duyvenvoorde.nl/en-gb"
              className="group inline-flex items-center gap-2 font-body text-[16px] font-semibold leading-none"
            >
              <span>Visit the webshop</span>
              <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <BrandLogo className="mt-auto w-[230px] brightness-0 invert lg:w-[260px]" />
        </section>

        <div className="flex min-h-[54px] flex-wrap items-center justify-between gap-x-6 gap-y-2 font-body text-[13.21px] font-[370] leading-none text-[#8c7d63] lg:col-span-12">
          <p className="order-2 lg:order-1">© 2026 Duyvenvoorde</p>
          <div className="order-1 flex gap-6 lg:order-2">
            <Link
              href="https://admin.duyvenvoorde.nl/storage/assets/General-Terms-and-Conditions-of-Sale-Duyvenvoorde.pdf"
              className="transition-colors duration-200 hover:text-[#141414]"
            >
              Terms and conditions
            </Link>
            <Link
              href="https://admin.duyvenvoorde.nl/storage/assets/Privacy-statement-Duyvenvoorde-Flowers-ENG.pdf"
              className="transition-colors duration-200 hover:text-[#141414]"
            >
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
