# SiteFooter Specification

## Overview

- **Target file:** `src/components/SiteFooter.tsx`
- **Screenshots:** `duyvenvoorde-tablet-scroll-08.png`, `duyvenvoorde-tablet-scroll-09.png`, `duyvenvoorde-tablet-scroll-10.png`
- **Interaction model:** static with hover states

## DOM Structure

Footer grid → black menu/tools card + newsletter card → orange customer CTA → legal row.

## Computed Styles

### Footer at 794px

- top: 5956px
- height: 1381px
- inner grid x: 97px; width: 584px
- row gap: 24px

### Black card

- width: 584px
- height: 537px
- backgroundColor: `rgb(20, 20, 20)`
- color: `rgb(247, 246, 243)`
- radius: 15.81px
- centered menu/tools content

### Newsletter card

- width: 584px
- height: 274px
- backgroundColor: `rgb(227, 219, 202)`
- radius: 15.81px
- padding: 24px
- input is off-white with orange submit square

### Orange CTA

- width: 584px
- height: 386px
- backgroundColor: `rgb(255, 85, 0)`
- radius: 15.81px
- padding: 24px

### Legal row

- height: 54px
- text: 13.21px, weight 370, muted taupe

## Text Content

Menu  
Our approach; Careers; Inspiration; Our products; About us; Sustainability; Contact

Tools  
AFAS Insite login; Teamviewer

NEWSLETTER  
Inspiration in your mailbox  
From behind the scenes with growers to the latest trends, all summarised in one newsletter. Sign up now!  
Email address

IN STOCK  
DAILY ACCESS TO 10,000 UNIQUE PRODUCTS  
Get started  
Visit the webshop

© 2026 Duyvenvoorde  
Terms and conditions  
Privacy policy

## Responsive Behavior

- Tablet/mobile: cards stack.
- Desktop: black menu card, newsletter card, and orange card form a wide multi-column footer composition.
- Legal links align right on desktop and reverse around copyright on compact layouts.
