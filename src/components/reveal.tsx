"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "-8% 0px -8% 0px",
        threshold: 0.12,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={cn(
        "reveal",
        delay > 0 && `reveal-delay-${delay}`,
        isVisible && "reveal-visible",
        className,
      )}
    >
      {children}
    </div>
  );
}
