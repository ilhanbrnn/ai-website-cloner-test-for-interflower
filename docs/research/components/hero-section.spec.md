# HeroSection Specification

## Overview

- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/duyvenvoorde-tablet-hero.png`
- **Interaction model:** time-driven video; static CTA

## DOM Structure

Full viewport section → responsive video → 20% black overlay → centered content → display heading → CTA/caption → decorative white route line.

## Computed Styles

### Section

- tablet: 779 × 769px (`90svh`)
- desktop: 1920 × 855px (`100svh`)
- backgroundColor: `rgb(20, 20, 20)`
- overflow: hidden

### Video

- position: absolute; inset: 0
- width/height: 100%
- objectFit: cover
- autoplay: true
- loop: true
- muted: true
- mobile/tablet source: `/videos/hero-mobile.mp4`
- desktop source: `/videos/hero-desktop.mp4`

### Heading

- family: bricolage
- tablet fontSize: 105.95px
- fontWeight: 800
- lineHeight: 84.76px
- letterSpacing: -3.18px
- width: 8ch
- textTransform: uppercase
- color: `#f7f6f3`

### CTA

- black pill with off-white text
- centered beneath title
- caption below: 13–16px body font

## States & Behaviors

- Video autoplays, loops, and remains muted.
- Hero copy enters once on page load.
- Button hover changes toward orange and swaps icon.

## Text Content

ACCESS NATURE’S FINEST  
Discover our products  
Access our global network

## Responsive Behavior

- Landscape video desktop.
- Portrait video below desktop.
- Title scales from 48px base to 120px desktop.
- White line changes shape but keeps the title visually connected to viewport edges.
