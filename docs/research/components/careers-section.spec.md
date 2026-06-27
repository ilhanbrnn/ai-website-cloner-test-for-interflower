# CareersSection Specification

## Overview

- **Target file:** `src/components/CareersSection.tsx`
- **Screenshots:** `duyvenvoorde-tablet-scroll-07.png`, `duyvenvoorde-tablet-scroll-08.png`
- **Interaction model:** scroll-driven reveal

## DOM Structure

Label/title column → orange route line and flower → lead/body copy → CTA.

## Computed Styles

### Section at 794px

- top: 5230px
- height: 725px
- vertical gap: 48px

### Heading

- width: 536px at tablet
- fontSize: 69.7px
- lineHeight: 55.76px
- weight: 800
- uppercase

### Decorative line

- 779 × 180px
- black horizontal start, orange curved continuation
- orange flower: 80px

### Copy

- tablet x: 97px; width: 438px
- lead paragraph: 32.44px / 38.93px
- body paragraph: 20.11px / 26.14px

## Assets

- Orange flower: `/images/1.6870d19b.png` or extracted AVIF equivalent.

## Text Content

CAREERS  
YOUR EFFORT MAKES THE DIFFERENCE

At Duyvenvoorde, you make a difference for customers across Europe and the UK every single day.

Whether you’re packing flowers, collecting orders, building trolleys or improving processes - your work is visible and valuable. Ready to join us?

View vacancies

## Responsive Behavior

- Mobile/tablet stacks heading, route line, and copy.
- Desktop places copy to the right of the title composition.
