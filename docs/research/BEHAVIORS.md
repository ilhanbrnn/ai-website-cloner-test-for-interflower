# Duyvenvoorde Behaviors

## Scroll sweep

- Content enters with approximately `translateY(5%)` and `opacity: 0`, then resolves to `translateY(0)` and `opacity: 1`.
- Reveal easing is visually close to `cubic-bezier(0.22, 1, 0.36, 1)` over roughly 600–800ms.
- Headings use line masks: text is clipped and revealed line by line.
- Route-line SVGs use a neutral base stroke plus a colored progress stroke controlled by `stroke-dasharray` / `stroke-dashoffset`.
- The header stays fixed for the entire 7,337px tablet page.
- The webshop section contains concentric flower groups moving at different rates; the ring appears to rotate/parallax while scrolling.
- No page-level scroll snapping was detected.
- Scrolling feels native; no `.lenis` or locomotive-scroll root class was detected.

## Header/menu

- At 794px viewport the fixed header is 60px high and 614px wide, positioned at x=82.
- Panel background: `rgb(20, 20, 20)`.
- Panel radius: `0 0 14px 14px`.
- Panel transition: `0.4s cubic-bezier(0.4, 0, 0.2, 1)`.
- Menu opens by expanding the black panel to approximately 535px high.
- Menu links reveal after the panel expansion; first link starts near x=131, y=177.
- Menu link typography at tablet: 28.82px, medium weight, 34px line box.

## Hover states

- Pill buttons exchange the outlined circle mark for a sliding arrow icon.
- Dark primary buttons change toward orange.
- Footer policy links transition from muted taupe to primary black over 300ms.
- Header links retain white text and use subtle movement/underline treatment.

## Responsive observations

- **1920px:** 84px desktop header with full navigation; hero video is landscape; products copy and video form a two-column composition.
- **794px:** 60px compact header with menu button; hero uses portrait video; products copy stacks above the square video; benefits stack below the dark card; footer cards stack.
- **390px inferred from mobile-first source classes:** 12-column grid; side gutters near 24px; hero is 90svh; display headings begin at 48px; product/video/footer cards remain single-column; flower-orbit section remains 125svh.

## Stateful content

- No tabs, accordion, carousel controls, or content-switching pills exist on this page.
- The only click-driven state is the responsive navigation menu.
- Newsletter submission was not triggered because it creates an external side effect.
