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
        <HeroSection />
        <IntroSlider />
        <ProductsSection />
        <NetworkSection />
        <WebshopSection />
        <CareersSection />
      </main>
      <SiteFooter />
    </>
  );
}
