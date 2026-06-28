import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bricolage = localFont({
  variable: "--font-dv-display",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/b7cab21dcd771ae5-s.p.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/6d8e0bae448381dc-s.p.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/2cce8c56acca7fdf-s.p.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/7dc1c85842ef27dc-s.p.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/c7eb89af3d7a502b-s.p.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/903a22c07d9a8c8d-s.p.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/760def8bc15976ed-s.p.ttf",
      weight: "800",
      style: "normal",
    },
  ],
});

const robotoCondensed = localFont({
  variable: "--font-dv-body",
  display: "swap",
  src: "../../public/fonts/dc1a31dd116e0329-s.p.woff2",
  weight: "100 900",
  style: "normal",
});

export const metadata: Metadata = {
  title: "InterFlower Çiçekçilik | Kızıltepe, Mardin",
  description:
    "Kızıltepe ve çevresinde özel gün çiçekleri, kişiye özel buketler, organizasyon ve çiçek teslimatı.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${bricolage.variable} ${robotoCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
