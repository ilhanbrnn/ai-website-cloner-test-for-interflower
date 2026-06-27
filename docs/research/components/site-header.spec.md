# SiteHeader Specification

## Overview

- **Target file:** `src/components/SiteHeader.tsx`
- **Screenshot:** `docs/design-references/duyvenvoorde-tablet-menu-open-settled.png`
- **Interaction model:** click-driven menu; fixed during scroll

## DOM Structure

Fixed header grid → black panel → logo, desktop links or compact controls → expanding navigation panel.

## Computed Styles

### Tablet panel at 794px

- position: fixed; top: 0
- height: 60px
- x: 82px; width: 614px
- backgroundColor: `rgb(20, 20, 20)`
- color: `rgb(247, 246, 243)`
- borderRadius: `0 0 14px 14px`
- padding: `0 15px`
- transition: `0.4s cubic-bezier(0.4, 0, 0.2, 1)`
- shadow: multi-stop downward black shadow

### Desktop panel at 1920px

- height: 84px
- centered with approximately 1280px maximum width
- full navigation visible; menu control hidden

### Menu links

- tablet fontSize: 28.82px
- line box: 34px
- fontWeight: 500
- color: `rgb(247, 246, 243)`

## States & Behaviors

### Closed

- Compact panel height: 60px.
- Menu panel is invisible.

### Open

- Trigger: click Menu.
- Panel expands to approximately 535px at tablet.
- Links reveal after expansion.
- Menu button label changes to Close.
- Transition: 400ms ease-in-out.

### Hover

- Webshop button remains orange and swaps circle icon to directional arrow.
- Desktop links retain white text and use subtle underline/movement.

## Text Content

Our approach; Our products; Inspiration; About us; Careers; Contact; NL; EN; Webshop; Menu.

## Responsive Behavior

- Desktop: full nav.
- Tablet/mobile: logo, language links, Webshop, Menu.
- Compact layout is active at 794px; desktop layout is active at 1920px.
