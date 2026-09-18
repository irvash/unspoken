---
name: unspoken-stories
colors:
  black: "#111111"
  beige: "#EAE6DD"
  blue-100: "#E4EBF0"
  blue-200: "#C6D4DE"
  blue-300: "#9BB2C4"
  blue-400: "#6A8BA3"
  blue-500: "#3E5C76"
  blue-600: "#334C62"
  blue-700: "#283C4E"
  blue-800: "#1A2833"
  blue-900: "#0D141A"
  yellow-100: "#FBF3DE"
  yellow-200: "#F6E6BC"
  yellow-300: "#DDAD4C"
  yellow-400: "#C9993B"
  yellow-500: "#B0832F"
  yellow-600: "#8F6A26"
  yellow-700: "#6E511D"
  yellow-800: "#4C3814"
  yellow-900: "#2B1F0B"
typography:
  h1:
    fontFamily: Crimson Text
    fontWeight: 700
  h2:
    fontFamily: Crimson Text
    fontWeight: 700
  h3:
    fontFamily: Crimson Text
    fontWeight: 600
  body:
    fontFamily: Source Sans
    fontWeight: 400
  label:
    fontFamily: Source Sans
    fontWeight: 600
rounded:
  none: 0px
  sm: 4px
  md: 8px
spacing:
  base: 8px
components:
  button-primary:
    backgroundColor: "{colors.yellow-300}"
    textColor: "{colors.black}"
    rounded: "{rounded.sm}"
  button-secondary:
    backgroundColor: "{colors.blue-800}"
    textColor: "{colors.beige}"
    rounded: "{rounded.sm}"
  card:
    backgroundColor: "{colors.beige}"
    rounded: "{rounded.none}"
  nav:
    backgroundColor: "{colors.blue-900}"
    textColor: "{colors.beige}"
---

## Overview

Unspoken Stories is a cultural publication celebrating women's contributions across cultures since 1986. The visual identity is editorial, archival, and literary — it should feel like a printed museum journal or a carefully curated archive, not a tech product. Warm parchment tones, deep navy, and mustard gold accents carry the mood.

## Colors

- **Black (`#111111`)**: Primary text color on light backgrounds. Never use pure `#000000`.
- **Beige (`#EAE6DD`)**: Default page background. The "paper" of the site.
- **Blue scale**: Structural color. `blue-900` (`#0D141A`) for header/footer and dark overlays. `blue-800` (`#1A2833`) for secondary dark surfaces. Lighter blues (`blue-100`–`blue-300`) for subtle UI states, dividers, and muted text on dark backgrounds.
- **Yellow scale**: The accent. `yellow-300` (`#DDAD4C`) is the primary CTA color and the "Unspoken" wordmark highlight. `yellow-400`–`yellow-500` for hover states. Deeper yellows (`yellow-700`+) for text on light backgrounds where contrast requires it.
- **No other colors** may be introduced. Do not generate new hex values.

## Typography

- **Crimson Text** is the heading font. Use it for all `h1`–`h3` and editorial display text. Weights: 400, 600, 700.
- **Source Sans** is the body and UI font. Use it for paragraphs, nav links, buttons, labels, captions, and form inputs. Weights: 400, 600, 700.
- **No more than these two font families** may appear anywhere in the project.
- Body text should be comfortable for long reading: 16–18px base size, line-height ~1.6.
- Headings should feel editorial: tight line-height (~1.1–1.2), generous size hierarchy.

## Layout

- **Base spacing unit**: 8px. All margins, padding, and gaps must be multiples of 8.
- **Container**: Tailwind defaults. Max content width `1280px`, centered, with responsive horizontal padding.
- **Grid**: Tailwind's 12-column grid. The archive section uses a 3-column masonry-style layout on desktop, collapsing to 2 columns on tablet and 1 column on mobile.
- **Breakpoints**: Tailwind defaults (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`, `2xl: 1536px`).

## Elevation & Depth

- **No shadows anywhere.** Depth is communicated through color contrast and layout, not drop shadows or elevation.
- Dark surfaces (`blue-800`, `blue-900`) sit "above" light surfaces (`beige`, `yellow-100`) purely through color contrast.

## Shapes

- **Radius scale**: `0px` (default — sharp, editorial), `4px` (small UI elements like buttons and inputs), `8px` (maximum — reserved for cards or larger containers if needed).
- **Never exceed 8px radius.** No pill buttons, no fully rounded corners.

## Components

- **Primary button**: `yellow-300` background, `black` text, `4px` radius, no shadow. Includes a right arrow icon (Lucide) when used as a "continue" action.
- **Secondary button**: `blue-800` background, `beige` text, `4px` radius, no shadow.
- **Nav**: `blue-900` background, `beige` text. Text-only links. Search icon in a dark square button.
- **Cards**: No border, no shadow. Image on top, `Crimson Text` heading below, `Source Sans` body excerpt in muted color. Use spacing to separate, not lines or shadows.
- **Footer**: `blue-900` background, `beige` text, three-column layout (Explore / Connect / Newsletter). Newsletter input is a simple bordered field with a `yellow-300` Subscribe button.
- **Hero overlay**: Dark gradient overlay on hero image is the *only* exception to the no-gradient rule, used strictly for text legibility.

## Do's and Don'ts

### Do
- Use the exact hex values defined above. No approximations.
- Use 8px spacing increments everywhere.
- Use Lucide (or equivalent real icon set) for all icons.
- Write real, specific copy. If content isn't ready, use clearly marked placeholders like `[Article title here]`.
- Default to sharp corners (`0px`) for structural elements.

### Don't
- **No gradients** (except the hero image legibility overlay).
- **No drop shadows** of any kind.
- **No emoji** as icons or decoration.
- **No more than 2 font families** — Crimson Text and Source Sans only.
- **No centered hero text over a stock image background.**
- **No more than one `<h1>` per page.**
- **No decorative borders around cards.**
- **No "Lorem Ipsum"** or generic filler text.
- **No purple/blue "tech startup" gradients or colors** outside the defined palette.
- **No border radius larger than 8px.** No pill buttons.
- **No inventing new colors, fonts, or spacing values.** If something isn't defined here, ask before assuming.
