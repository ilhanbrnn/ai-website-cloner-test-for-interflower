export interface NavigationItem {
  label: string;
  href: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: "delivery" | "service" | "personal" | "expertise";
}

export interface FlowerAsset {
  src: string;
  alt: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavigationItem[];
}
