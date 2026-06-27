# NetworkSection Specification

## Overview

- **Target file:** `src/components/NetworkSection.tsx`
- **Screenshots:** `duyvenvoorde-tablet-scroll-04.png`, `duyvenvoorde-tablet-scroll-05.png`
- **Interaction model:** scroll-driven reveal

## DOM Structure

Dark contact/network card → checks and CTA → 4-benefit grid → decorative black/orange line.

## Computed Styles

### Section at 794px

- top: 2813px
- height: 1350px

### Dark card

- x: 97px; width: 438px; height: 498px
- backgroundColor: `rgb(20, 20, 20)`
- color: `rgb(247, 246, 243)`
- radius: 15.81px
- padding: 24px
- vertical gap: 60px

### Heading

- family: bricolage
- fontSize: 39.04px
- weight: 800
- lineHeight: 31.23px
- letterSpacing: -1.17px
- uppercase

### Benefits

- container x: 97px; width: 584px
- 1 column at tablet, 2 columns at xl
- gap: 40px at tablet
- title uses body font, semi-bold
- description: 17.21px / 22.37px, weight 370

## States & Behaviors

- Card and benefits enter independently with opacity/translate reveals.
- Contact email is a mailto link.
- CTA button hover swaps icon.

## Text Content

Need advice?  
Contact us  
contact@duyvenvoorde.nl  
ACCESS TO OUR GLOBAL NETWORK  
Flowers and plants from top growers  
Carefully selected by our team  
Access nature’s finest  
Become a customer

Fresh delivery, day and night  
You can order from us at any time. Thanks to direct links with our suppliers, we deliver your order fresh - right when you need it.

Service without limits  
Our goal is to take the weight off your shoulders. From ready-to-sell products to setting up a personal webshop: we make it happen.

Personal and reliable  
Personal contact matters to us. That’s why you’ll have one dedicated contact who understands your business and supports you in your own language.

Expertise in every field  
Every team member brings their own expertise. Together with our experience and knowledge of the market, this means we come up with smart solutions. Every time.
