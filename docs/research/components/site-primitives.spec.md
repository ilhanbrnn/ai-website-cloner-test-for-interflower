# Site Primitives Specification

## Overview

- **Target file:** `src/components/site-primitives.tsx`
- **Screenshots:** Header, section, and footer references
- **Interaction model:** hover-driven buttons; static labels/logo/lines

## DOM Structure

- `BrandButton`: pill link with text and icon-swap slot.
- `SectionLabel`: compact uppercase pill.
- `BrandLogo`: extracted Duyvenvoorde SVG.
- `CurvedLine`: reusable decorative route-line SVG.

## Computed Styles

### Brand button

- Rounded pill.
- Compact height approximately 36px.
- Black/off-white default or off-white/black inverse.
- Icon size: 20px compact.

### Section label

- Height: 22px.
- Font size: approximately 13.2px.
- Uppercase.
- Black background with theme-specific text.

### Logo

- Compact width: 168px.
- Desktop width: 240px.

### Curved line

- Stroke width: 5px.
- Colors: black, orange, pink, or yellow.

## States & Behaviors

- Button hover swaps circle mark for sliding arrow and changes surface color.

## Assets

- Logo: `public/images/source-svg-1.svg`.

## Text Content

Provided by each caller.

## Responsive Behavior

- Logo and button/icon sizing increase at desktop.
