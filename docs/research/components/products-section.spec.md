# ProductsSection Specification

## Overview

- **Target file:** `src/components/ProductsSection.tsx`
- **Screenshots:** `duyvenvoorde-tablet-scroll-02.png`, `duyvenvoorde-tablet-scroll-03.png`
- **Interaction model:** scroll reveals; external video link

## DOM Structure

Taupe section → pink copy card → square story thumbnail card → connecting pink/black SVG lines.

## Computed Styles

### Section at 794px

- top: 1601px
- height: 1212px
- backgroundColor: `rgb(237, 232, 222)`
- padding-block: approximately 48–80px

### Pink card

- x: 97px; width: 584px; height: 353px
- backgroundColor: `rgb(252, 161, 205)`
- radius: 15.81px
- padding: 24px
- label: 100 × 22px black pill

### Title

- font family: Roboto Condensed
- tablet fontSize: 49.26px
- weight: 500
- lineHeight: 49.26px
- letterSpacing: -0.99px
- max width: 11ch

### Body

- fontSize: 20.11px
- weight: 350
- lineHeight: 26.14px

### Story card

- x: 97px; width/height: 584px
- radius: 15.81px
- image objectFit: cover
- centered white “OUR STORY” display text and orange play button

## States & Behaviors

- Pink-card content reveals sequentially.
- Video card links to YouTube.
- Button hover swaps icon.

## Assets

- `/images/youtube-thumbnail.jpg` with AVIF fallback already extracted as `/images/youtube-thumbnail.avif`.

## Text Content

OUR PRODUCTS  
Always the right pick  
From flowers and plants to decoration - choose from 10,000 unique items. Delivered fresh, exactly when you need them.  
Explore our selection  
OUR STORY

## Responsive Behavior

- Tablet/mobile: pink card above square video.
- Desktop: video left, pink card right.
