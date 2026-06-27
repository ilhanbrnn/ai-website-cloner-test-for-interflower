# Icons Specification

## Overview

- **Target file:** `src/components/icons.tsx`
- **Screenshot:** N/A; source captured in `public/images/source-svg-*.svg`
- **Interaction model:** static; animation is controlled by parent buttons

## DOM Structure

Named React SVG components for arrow, circular mark, play, mail, check, delivery, service, person, and expertise symbols.

## Computed Styles

- Button icons: 20px at compact layouts, 24–30px at larger layouts.
- Arrow uses `currentColor`.
- Circular mark uses a 1.875px stroke.
- Benefit icons use orange `#ff5500` and approximately 28px bounds.

## States & Behaviors

- Parent buttons scale the circular mark to zero and translate the arrow into view over 300–400ms.

## Assets

- Derived from the target’s inline SVG inventory.

## Text Content

N/A

## Responsive Behavior

- Icons scale with parent controls.
