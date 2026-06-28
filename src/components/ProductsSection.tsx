import { Reveal } from "@/components/reveal";
import { BrandButton, SectionLabel } from "@/components/site-primitives";

const services = [
  "Buketler",
  "Kişiye özel buketler",
  "Saksı çiçekleri",
  "Aranjmanlar",
  "Çelenkler",
  "Ferforje",
  "Yapay çiçekler",
  "Gelin arabası süsleme",
  "Özel gün tasarımları",
  "Tanzim",
  "Organizasyon",
  "Kişiye özel tasarım",
] as const;

const whatsappOrderUrl =
  "https://wa.me/905447204686?text=Merhaba%20InterFlower%2C%20çiçek%20siparişi%20vermek%20istiyorum.";

export function ProductsSection({ id }: { id: string }) {
  return (
    <section
      id={id}
      aria-labelledby="products-heading"
      className="bg-[#E8E0D2] px-[18px] py-20 text-[#171716] sm:px-0 lg:px-[4vw] lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1600px] sm:w-3/4 lg:w-full">
        <Reveal>
          <div className="rounded-[15.81px] bg-[#171716] p-6 text-[#E8E0D2] sm:p-8 lg:p-[clamp(40px,5vw,80px)]">
            <SectionLabel className="bg-[#C95778] text-[#E8E0D2]">
              HİZMETLER
            </SectionLabel>
            <h2
              id="products-heading"
              className="mt-9 max-w-[13ch] font-body text-[clamp(42px,6vw,88px)] leading-[0.98] font-semibold tracking-[-0.03em]"
            >
              Her ana uygun çiçek, her isteğe özel tasarım.
            </h2>
            <p className="mt-7 max-w-[46rem] font-body text-[18px] leading-[1.4] font-[370] text-[#E8E0D2]/80 sm:text-[21px]">
              Günlük buketlerden özel gün tasarımlarına ve organizasyonlara
              kadar ihtiyacınıza uygun çiçekleri özenle hazırlıyoruz.
            </p>
            <BrandButton
              href={whatsappOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 bg-[#C95778] text-[#E8E0D2] hover:bg-[#8F4058]"
            >
              WhatsApp’tan Yaz
            </BrandButton>
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <div className="rounded-[15.81px] border border-[#171716]/10 bg-[#F2ECE2] p-5 text-[#171716] sm:p-7 lg:p-9">
            <p className="font-body text-[14px] font-semibold tracking-[0.16em] text-[#8F4058] uppercase">
              Ne yapıyoruz?
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex min-h-12 items-center justify-center rounded-full border border-[#171716]/15 bg-transparent px-5 py-3 text-center font-body text-[15px] leading-tight font-medium text-[#171716] transition-colors duration-200 hover:border-[#8F4058] hover:bg-[#8F4058] hover:text-[#F2ECE2] sm:text-[16px]"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
