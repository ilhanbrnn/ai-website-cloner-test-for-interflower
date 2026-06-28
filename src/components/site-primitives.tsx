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
          ? "bg-[#f7f6f3] text-[#141414] hover:bg-white"
          : "bg-[#141414] text-[#f7f6f3] hover:bg-[#ff5500]",
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
        "inline-flex h-[22px] w-fit items-center rounded-full bg-[#141414] px-2 font-body text-[13px] uppercase leading-none text-[#f7f6f3]",
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
  orange: "#ff5500",
  pink: "#fca1cd",
  yellow: "#f8ca12",
  black: "#141414",
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
