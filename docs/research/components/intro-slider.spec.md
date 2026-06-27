# IntroSlider Specification

## Overview

- **Target file:** `src/components/IntroSlider.tsx`
- **Screenshots:** `duyvenvoorde-tablet-scroll-01.png`, `duyvenvoorde-tablet-scroll-02.png`
- **Interaction model:** scroll-driven reveal and marquee

## DOM Structure

Intro section with yellow route line/flower and copy → separate marquee section with oversized purple text and centered flower.

## Computed Styles

### Intro section at 794px

- top: 769px
- height: 616px
- section gap: 48px
- yellow route-line block: 730 × 180px
- flower: approximately 80px (rendered bounds near 97px)
- copy column: x 97px; width 584px

### Lead paragraph

- fontSize: 32.44px
- fontWeight: 400
- lineHeight: 38.93px
- letterSpacing: -0.65px
- color: `#141414`

### Text slider at 794px

- height: 216px
- marquee text fontSize: 137.74px
- fontWeight: 800
- lineHeight: 110.2px
- text color: `#8464ed`
- flower bounds: approximately 295 × 295px
- flower filter: `drop-shadow(0 25px 25px rgb(0 0 0 / 15%))`

## States & Behaviors

- Intro text: opacity 0/translateY 5% → visible.
- Marquee moves horizontally with scroll/time.
- Purple flower remains centered over the marquee.

## Assets

- Yellow flower: `/images/1.cdeb15e7.png`
- Purple flower: `/images/3.1f2a55bd.png`

## Text Content

From our location at the auction in Naaldwijk, we ensure that every flower and plant reaches our customers in top condition. Thanks to our extensive stock and efficient logistics, we can deliver quickly — often on the same day.

More about us

Always sharp, always on time

## Responsive Behavior

- Mobile/tablet intro stacks line above copy.
- Desktop places line/flower and copy in a wider asymmetric grid.
- Marquee height grows to 500px at 1920px.
