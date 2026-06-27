# Reveal Specification

## Overview

- **Target file:** `src/components/reveal.tsx`
- **Screenshot:** Multiple scroll-state screenshots under `docs/design-references/`
- **Interaction model:** scroll-driven IntersectionObserver

## DOM Structure

Wrapper div around content.

## Computed Styles

- Initial opacity: 0.
- Initial transform: `translateY(5%)`.
- Visible opacity: 1.
- Visible transform: `translateY(0)`.
- Duration: 700ms.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)`.
- Stagger delays: 80ms increments.

## States & Behaviors

- Trigger: element enters viewport with threshold 0.12 and `rootMargin: -8% 0 -8%`.
- Observer disconnects after first reveal.
- Reduced-motion users receive the final visible state.

## Assets

N/A

## Text Content

N/A

## Responsive Behavior

Same behavior at every breakpoint.
