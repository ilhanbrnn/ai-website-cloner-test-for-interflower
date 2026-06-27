# Layout Architecture

- Mobile-first CSS Grid.
- Base grid: `minmax(24px,.5fr) repeat(10,1fr) minmax(24px,.5fr)`.
- 640px+: 16 equal columns.
- 1024px+: 20 equal columns.
- 1280px+: 24 equal columns.
- Cards generally span from column 2 to -2 at mobile and move to asymmetric column spans at desktop.
- Hero occupies the full viewport width and height.
- Product and network compositions rely on decorative SVG lines spanning neighboring grid columns.
- Webshop section uses a centered square orbit larger than the viewport at tablet.
- Footer cards use one column at tablet/mobile and three visual columns on large desktop.
