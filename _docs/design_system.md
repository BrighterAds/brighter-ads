# Brighter Ads — Design system

## Identity

A dark interface, expressive headings, and four bright accents drawn from the supplied logo. This document is the reference for all visual changes to the website. CSS values are defined in `:root` in `css/styles.css`.

## Brand palette

Use only these four colours for accents. Do not add another theme colour without an explicit decision.

| Colour | Value | CSS variable | Usage |
| --- | --- | --- | --- |
| Lime | `#D4FF3D` | `--lime` | Primary action, visual markers, logo letter "b" |
| Cyan | `#35C1FF` | `--blue` | Links, acquisition, form field focus |
| Magenta | `#FF3DAE` | `--magenta` | Creative strategy, secondary accents |
| Violet | `#9B5CFF` | `--violet` | Data analytics, booking, secondary accents |

Reserve intermediate shades for gradients between these accents. Use the same colours at reduced opacity for coloured backgrounds, borders, and glows. Do not introduce independent hues.

## Neutrals and backgrounds

These colours complement the brand palette and provide surfaces, text colours, and contrast.

| Value | CSS variable | Usage |
| --- | --- | --- |
| `#07070B` | `--bg` | Main background |
| `#0C0C13` | `--bg-alt` | Alternate background, mobile navigation |
| `#111118` | `--surface` | Cards and form fields |
| `#15151D` | `--surface-2` | Secondary surfaces |
| `#14101C` | `--surface-book` | Booking panel gradient endpoint |
| `#F5F5F7` | `--text` | Main text |
| `#9A9AA8` | `--text-dim` | Secondary text |
| `#9A9AA8` | `--text-faint` | Subtle notes with readable contrast |
| `#08080B` | `--on-accent` | Text on lime buttons |
| `#000000` | — | Favicon background, black backgrounds, masks |
| `#FFFFFF` | — | Translucent borders |

Borders use white at 9% (`--border`) or 16% (`--border-strong`) opacity. Navigation uses the main background at 75% opacity. Other transparent colours are variations of the colours above.

## Usage guidelines

- Reuse `:root` variables for opaque colours; do not scatter new hexadecimal values across components.
- Reserve lime for important actions so they remain easy to identify.
- Use `--text` or `--text-dim` for long text. Reserve `--text-faint` for subtle notes without essential information.
- Do not convey information through colour alone: add a label, icon, or explicit state.
- Preserve visible focus indicators and support for reduced motion.
- The hero uses HTML text and links alongside a separate illustration of four fictional mobile apps: fitness, travel, a puzzle game in the foreground, and shopping. The illustration has a transparent background and is served as responsive WebP images from `images/`. Do not use a full-screen raster banner, carousel, or decorative animation. Scenes within the apps may retain their natural colours; the website interface stays within the brand palette. These examples do not represent clients or actual results.

## Typography

| Usage | Font | CSS variable |
| --- | --- | --- |
| Headings and wordmark | Bricolage Grotesque, weights 500, 700, and 800 | `--font-display` |
| Body text and buttons | Inter, weights 400 to 700 | `--font-body` |
| Short labels, badges, and markers | JetBrains Mono, weights 500 and 600 | `--font-mono` |

Body line height: `1.5`. Heading line height: `1.08`. Headings adapt to the screen width using `clamp()`.

Fonts are served locally through `css/fonts.css`. The WOFF2 files, source information, and licences are in `fonts/`; no requests to Google Fonts are needed.

## Layout and components

- Main container: maximum width of `1180px` (`--container`), with `28px` of horizontal padding.
- Corner radii: `20px` (`--radius-lg`), `14px`, and `8px` (`--radius-sm`). Buttons and badges use `999px`.
- Primary button: lime background and dark text. Secondary button: transparent background and light border.
- Service cards: one accent per discipline, with a subtle border and a glow on hover.
- Preserve existing component breakpoints and their reading order on mobile.
- The expertise strip is static, wraps onto multiple lines, and remains visible without JavaScript. Page content is visible by default; only the mobile menu is enhanced by `js/main.js`, after its controls are wired up.
- The sharing image is `images/social-preview.png` (1200 × 630), exported from the SVG with the same name. Update both together.

## Favicon

`icons/favicon.svg` retains the "b" and the cyan, magenta, violet, and lime ring without an external font. It follows the browser theme using `prefers-color-scheme`: a lime letter on a black background in dark mode, and a `#08080B` letter on a `#F5F5F7` background in light mode. Without media query support, it retains the dark version. In forced colours mode, an HTML declaration with `media="(forced-colors: active)"` selects `icons/favicon-contrast.svg`, a monochrome black-and-white version adapted to the light or dark theme. Selection happens in the page because browsers do not always pass `forced-colors` into an SVG used as an image.

The variants are declared in `index.html`, `privacy-policy.html`, and `legal-notice.html`:

| File | Usage |
| --- | --- |
| `icons/favicon.svg` | Modern browsers, light and dark themes |
| `icons/favicon-contrast.svg` | Forced colours: black letter and ring on white, or white on black |
| `favicon.ico` | Compatibility and automatic loading from the root, at 16, 32, and 48 px |
| `icons/favicon-16x16.png`, `icons/favicon-32x32.png` | Fallback PNG favicons |
| `icons/apple-touch-icon.png` | 180 px iOS/iPadOS icon with an opaque square background; the system rounds its corners |
| `icons/safari-pinned-tab.svg` | Transparent monochrome mask for Safari pinned tabs |

The PNG and ICO files use the dark version, which is readable on both themes. The browser bar retains `#07070B`, matching the website background. The site does not declare a web app manifest, to avoid triggering automatic installation prompts on mobile.

To re-export images from `icons/favicon.svg`, fix the colours to the dark version, then rasterise at the specified dimensions. For Apple, remove the rounded corners from the background. The Safari mask uses only the letter and ring in black on a transparent background.

SVG colours are explicit because a favicon loaded as a separate file does not inherit the website's CSS variables. If the palette or design changes, update `css/styles.css`, the SVGs, the raster exports, and this document together.
