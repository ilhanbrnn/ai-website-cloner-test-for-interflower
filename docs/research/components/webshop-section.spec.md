# WebshopSection Specification

## Overview

- **Target file:** `src/components/WebshopSection.tsx`
- **Screenshots:** `duyvenvoorde-tablet-scroll-06.png`, `duyvenvoorde-tablet-scroll-07.png`
- **Interaction model:** scroll-driven parallax/rotation

## DOM Structure

Tall tinted section → centered label/title/link → three absolute square flower rings.

## Computed Styles

### Section at 794px

- top: 4163px
- height: 1068px (`150svh`)
- backgroundColor: `rgb(227, 219, 202)`
- overflow: hidden

### Center content

- width: 305px
- vertical gap: 40px
- title fontSize: 69.7px
- title lineHeight: 55.76px
- title weight: 800
- title maxWidth: 10ch
- uppercase

### Orbit

- primary square: 1068 × 1068px, centered at x=-144px
- additional layers: approximately 1458px and 1510px
- flower cutouts are 64px, 96px, and 128px visual sizes
- lines extend radially from each flower

## States & Behaviors

- Flower layers rotate/parallax at different scroll rates.
- Central copy uses line-mask reveal.
- At the middle of the section the ring fills the viewport.

## Assets

Use the extracted hash-named flower assets in `/public/images`.

## Text Content

WEBSHOP  
DELIVERED FRESH DAILY  
Visit the webshop  
Access nature’s finest

## Responsive Behavior

- Base/mobile: 125svh.
- 768px+: 150svh.
- Orbit remains larger than the viewport and centered.
