import { CareersSection } from "@/components/CareersSection";
import { HeroSection } from "@/components/HeroSection";
import { IntroSlider } from "@/components/IntroSlider";
import { NetworkSection } from "@/components/NetworkSection";
import { ProductsSection } from "@/components/ProductsSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WebshopSection } from "@/components/WebshopSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection id="hero" />
        <IntroSlider id="hikaye" />
        <ProductsSection id="hizmetler" />
        <NetworkSection id="neden-interflower" />
        <WebshopSection id="siparis" />
        <CareersSection />
      </main>
      <SiteFooter id="iletisim" />
    </>
  );
}
