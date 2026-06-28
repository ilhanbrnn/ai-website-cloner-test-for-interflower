import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { ArrowRightIcon, CircleMarkIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface BrandButtonProps
  extends Omit<
    ComponentPropsWithoutRef<typeof Link>,
    "children" | "className"
  > {
  children: React.ReactNode;
  className?: string;
  inverted?: boolean;
}

export function BrandButton({
  children,
  className,
  inverted = false,
  ...linkProps
}: BrandButtonProps) {
  return (
    <Link
      {...linkProps}
      className={cn(
        "group inline-flex w-fit items-center gap-2 rounded-full px-4 py-2.5 font-body text-[15px] leading-none transition-colors duration-300",
        inverted
          ? "bg-[#E8E0D2] text-[#171716] hover:bg-[#E6B9C3]"
          : "bg-[#171716] text-[#f7f6f3] hover:bg-[#985A65]",
        className,
      )}
    >
      <span>{children}</span>
      <span className="relative size-5 overflow-hidden">
        <CircleMarkIcon className="absolute inset-0 size-5 transition-transform duration-300 group-hover:scale-0" />
        <ArrowRightIcon className="absolute inset-0 size-5 -translate-x-full p-0.5 transition-transform duration-300 group-hover:translate-x-0" />
      </span>
    </Link>
  );
}

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex h-[22px] w-fit items-center rounded-full bg-[#171716] px-2 font-body text-[13px] uppercase leading-none text-[#f7f6f3]",
        className,
      )}
    >
      {children}
    </span>
  );
}

interface CurvedLineProps {
  className?: string;
  color?: "orange" | "pink" | "yellow" | "black";
  flip?: boolean;
}

const lineColors = {
  orange: "#B66F7A",
  pink: "#E6B9C3",
  yellow: "#f8ca12",
  black: "#171716",
};

export function CurvedLine({
  className,
  color = "black",
  flip = false,
}: CurvedLineProps) {
  return (
    <svg
      viewBox="0 0 640 240"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("pointer-events-none size-full", flip && "-scale-x-100", className)}
    >
      <path
        d="M0 2.5h300a60 60 0 0 1 60 60V240"
        fill="none"
        stroke={lineColors[color]}
        strokeWidth="5"
      />
    </svg>
  );
}
