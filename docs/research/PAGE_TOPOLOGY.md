# Duyvenvoorde Homepage Topology

Target: `https://duyvenvoorde.nl/en`

## Global shell

- Two equivalent fixed header trees are rendered by the source during its locale transition; visually they overlap exactly.
- Desktop header: centered black panel, 1280px maximum width, 84px high, rounded bottom corners, full navigation.
- Tablet/mobile header: black panel inset approximately 10.5% from each side, 60px high, logo + NL/EN + Webshop + Menu.
- The page uses a 12-column mobile grid, 16 columns from 640px, 20 from 1024px, and 24 from 1280px.
- Background is taupe `#ede8de`; primary text is `#141414`.
- Fixed top and bottom gradient masks soften content passing behind the navigation.

## Sections

1. **Hero** — 100svh desktop / 90svh mobile; autoplaying responsive video, dark overlay, giant centered headline, CTA, small caption, animated white route line.
2. **Auction introduction** — light background; yellow route line and yellow flower lead into a large paragraph and “More about us” button.
3. **Text slider** — horizontal “Always sharp, always on time” marquee with a centered purple anemone.
4. **Products + story video** — taupe background; pink content card and a square YouTube thumbnail card connected by pink/black route lines.
5. **Global network + benefits** — dark contact/network card connected to a 4-item benefits grid.
6. **Webshop flower orbit** — 125svh mobile / 150svh tablet+; sticky-feeling centered copy surrounded by three scroll-driven rings of flower cutouts.
7. **Careers** — label and giant headline, orange route line and flower, supporting copy and vacancies CTA.
8. **Footer** — black menu/tools card, newsletter card, orange customer CTA card, copyright and policy links.

## Layering

- Header: `z-index: 52`.
- Header edge masks: `z-index: 40`.
- Section content commonly uses `z-index: 10`.
- Decorative lines and flower images sit behind or beside copy with pointer events disabled.

## Interaction models

- Header menu: click-driven.
- Hero video: time-driven autoplay/loop.
- Section copy: scroll-driven entrance reveals.
- Decorative route lines: scroll-driven stroke progress on the original; emulated with SVG/CSS transitions.
- Webshop flower orbit: scroll-driven parallax/rotation.
- Buttons and links: hover-driven icon swap and color transitions.
