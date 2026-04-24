---
name: Sakib Shahon Portfolio
description: Operations-terminal portfolio for an agentic engineer. Dark, monospace-driven, precision-built.
colors:
  ice-wire: "#7dd3fc"
  ice-wire-pale: "#c5eaff"
  ice-wire-fixed: "#c0e8ff"
  ice-wire-dim: "#7bd1fa"
  void-black: "#0a0a0a"
  surface-base: "#131313"
  surface-deep: "#0e0e0e"
  surface-low: "#1c1b1b"
  surface-mid: "#201f1f"
  surface-high: "#2a2a2a"
  surface-highest: "#353534"
  surface-bright: "#3a3939"
  text-primary: "#e5e2e1"
  text-secondary: "#bec8ce"
  outline: "#899298"
  outline-muted: "#3f484e"
  error: "#ffb4ab"
  error-deep: "#93000a"
typography:
  display:
    fontFamily: "Playfair Display, Georgia, serif"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "32px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  data-mono:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.02em"
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.1em"
rounded:
  none: "0px"
  sm: "4px"
  md: "8px"
  lg: "12px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "80px"
components:
  button-primary:
    backgroundColor: "{colors.ice-wire}"
    textColor: "#003547"
    rounded: "{rounded.none}"
    padding: "12px 32px"
  button-primary-hover:
    backgroundColor: "{colors.ice-wire-dim}"
    textColor: "#003547"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ice-wire}"
    rounded: "{rounded.none}"
    padding: "12px 32px"
  button-outline-hover:
    backgroundColor: "#0f172a"
    textColor: "{colors.ice-wire}"
  card:
    backgroundColor: "{colors.surface-low}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.none}"
    padding: "24px"
  card-hover:
    borderColor: "{colors.ice-wire}"
  input-field:
    backgroundColor: "{colors.surface-deep}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.none}"
    padding: "12px 0"
  input-field-focus:
    borderColor: "{colors.ice-wire}"
  chip:
    backgroundColor: "{colors.surface-highest}"
    textColor: "{colors.ice-wire}"
    rounded: "{rounded.none}"
    padding: "4px 8px"
  nav-link-active:
    textColor: "{colors.ice-wire}"
  nav-link-inactive:
    textColor: "#64748b"
---

# Design System: Sakib Shahon Portfolio

## 1. Overview

**Creative North Star: "The Operations Terminal"**

This is not a website. It is a live system readout. Every section is a structured transmission: field names identify the data, content delivers the payload, and Ice Wire marks what is active, live, and requiring attention. The terminal metaphor is the architecture, not the wallpaper.

The system operates in perpetual dark mode because terminals do. Not for aesthetics, not because "tools look cool dark," but because the scene is specific: a hiring manager at 10pm, tabbing through 40 portfolio links, scanning for signal. Dark surfaces reduce ambient glare. The monospace labels and protocol prefixes (`// EXPERIENCE`, `IDENTIFIER [NAME]`) reward the reader who slows down, while the Playfair Display headlines create enough contrast to pull the scanner's eye to what matters.

The system is intentionally restrained. One accent color carries 30% of the visual weight. No gradients, no glassmorphism, no decorative shadows. Depth comes from tonal surface layering: 7 surface steps from `#0e0e0e` to `#3a3939`. Interactive elements are precision instruments, flat by default, responsive through border shifts and color flips.

**Key Characteristics:**
- Dark tonal surfaces with one saturated cyan accent (Ice Wire)
- Three-font system: serif display, sans body, mono labels
- Protocol/terminal naming conventions as structural identity
- Zero-radius interactive elements (sharp, terminal-native)
- Flat elevation model: tonal layering, no decorative shadows
- Scroll-triggered motion only where it aids scanning

## 2. Colors

A monochromatic dark field with a single high-frequency cyan signal. The palette is 90% neutral surfaces and 10% Ice Wire. Every use of the accent is a deliberate transmission.

### Primary
- **Ice Wire** (#7dd3fc): The sole accent. Used for active states, nav highlights, tag backgrounds, CTA fills, timeline dots, section labels, and hover borders. Its rarity makes it visible. When it appears, something is live or actionable.
- **Ice Wire Pale** (#c5eaff): The broader stroke of the same signal. Used for the hero tagline text and larger accent text where Ice Wire would be too saturated at size.

### Neutral
- **Void Black** (#0a0a0a): Navbar and footer. The deepest surface, reserved for persistent chrome that must recede.
- **Surface Base** (#131313): Page background. The operational floor.
- **Surface Deep** (#0e0e0e): Input fields. Dug one step below base to create recessed affordance.
- **Surface Low** (#1c1b1b): Card backgrounds. The first elevated layer.
- **Surface Mid** (#201f1f): Default container surfaces.
- **Surface High** (#2a2a2a): Elevated cards, timeline cards on hover.
- **Surface Highest** (#353534): Tag/chip backgrounds. The highest tonal step before outline territory.
- **Text Primary** (#e5e2e1): Body text, headlines, any primary reading surface.
- **Text Secondary** (#bec8ce): Supporting text, bio copy, on-surface-variant content.
- **Outline** (#899298): Borders at rest. Visible but receded.
- **Outline Muted** (#3f484e): Dividers, secondary borders. Barely visible structural lines.

### Named Rules
**The Single Signal Rule.** Ice Wire is the only saturated color on any surface. It carries 30% of the visual weight through frequency of use, never through palette expansion. No second accent, no complementary hue, no "just a touch of warm." The signal is cold, singular, and deliberate.

**The Tonal Gravity Rule.** Surfaces step upward in lightness from the background (13% → 20% → 35%). Never skip more than two steps in a single layer. The gradient must be imperceptible to the casual eye; only the scanning eye should notice the depth.

## 3. Typography

**Display Font:** Playfair Display (Georgia, serif)
**Body Font:** Inter (system-ui, sans-serif)
**Label/Mono Font:** IBM Plex Mono (monospace)

**Character:** A three-voice system where each font has a fixed role. Playfair Display speaks for identity (the name, section titles) with editorial weight. Inter handles everything meant to be read at speed (bios, descriptions, nav text). IBM Plex Mono is the protocol layer: labels, tags, form field names, status indicators. The three never overlap roles.

### Hierarchy
- **Display** (700, 48px, 1.1, -0.02em tracking): The name, section titles. Used 3-4 times per page, never for body content.
- **Headline** (600, 32px, 1.2, -0.01em tracking): Card titles, subsection headers. The workhorse heading.
- **Data Mono** (500, 14px, 1.4, 0.02em tracking): Tags, metadata, project links (LIVE / GITHUB). The terminal readout voice.
- **Body** (400, 16px, 1.6, normal tracking): Bios, descriptions, paragraphs. Capped at 65-75ch max-width.
- **Label** (600, 12px, 1, 0.1em tracking, uppercase): Section prefixes (`// EXPERIENCE`), form field labels (`IDENTIFIER [NAME]`), footer copyright. The protocol identifier layer.

### Named Rules
**The Role Separation Rule.** Each font has exactly one role. Playfair Display is identity. Inter is content. IBM Plex Mono is protocol. If a mono font appears in a headline, or Playfair appears in a label, the system is broken.

## 4. Elevation

This system is flat. No decorative shadows exist anywhere in the interface. Depth is conveyed entirely through tonal surface layering: 7 discrete steps from `#0e0e0e` (deepest recess) to `#3a3939` (highest raise), each separated by 4-8% lightness.

The single exception is the timeline dot glow: `box-shadow: 0 0 8px rgba(125, 211, 252, 0.6)` on timeline milestone indicators. This is functional, not decorative. The glow signals "this node is active" in a timeline context where spatial position alone does not convey state.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat. No shadow is applied to cards, modals, dropdowns, or any container. If depth is needed, raise the tonal surface step. The glow exemption is limited to timeline node indicators only.

## 5. Components

### Buttons
- **Shape:** Zero radius (0px). Sharp corners on all variants, always.
- **Primary:** Ice Wire background (#7dd3fc) with dark text (#003547). Padding 12px 32px. Used for primary CTAs (VIEW PROJECTS, EXECUTE TRANSMISSION).
- **Primary Hover:** Surface tint (#7bd1fa) background.
- **Outline:** Transparent background, 1px Ice Wire border, Ice Wire text. Same padding.
- **Outline Hover:** Slate-900 (#0f172a) background fill. Ice Wire text and border persist.
- **Focus:** Ice Wire border on focus-visible. No shadow glow.
- **Typography:** IBM Plex Mono, 12px, weight 600, 0.1em tracking, uppercase. Always.

### Chips / Tags
- **Style:** Surface Highest (#353534) background, Ice Wire (#7dd3fc) text. Zero radius.
- **Typography:** IBM Plex Mono, 10px, weight 500, 0.02em tracking.
- **Padding:** 4px 8px.
- **Usage:** Technology tags on project cards, skill cards. Never used as interactive filters.

### Cards
- **Corner Style:** Zero radius (0px). Sharp rectangles.
- **Background:** Surface Low (#1c1b1b) at rest.
- **Border:** 1px slate-800 (#1e293b) at rest.
- **Hover:** Border shifts to Ice Wire. Optional gradient accent on timeline cards.
- **Internal Padding:** 24px (md spacing token).
- **Shadow Strategy:** None. Refer to Elevation section.

### Inputs / Fields
- **Style:** Surface Deep (#0e0e0e) background. No top/side borders. Bottom border only: 1px Outline Muted (#3f484e).
- **Focus:** Bottom border shifts to Ice Wire (#7dd3fc). No glow, no background change.
- **Labels:** IBM Plex Mono label style, uppercase with bracket notation (e.g., `IDENTIFIER [NAME]`). Positioned above the field.
- **Submit Button:** Same as primary button. Label reads like a command, not a request ("EXECUTE TRANSMISSION", not "Submit").

### Navigation
- **Style:** Fixed top, full-width, height 64px. Void Black (#0a0a0a) background. 1px slate-800 bottom border.
- **Logo:** "SAKIB AHAMMED SHAHON" in IBM Plex Mono label style, uppercase, extra-bold, Ice Wire Container text color.
- **Active State:** Ice Wire text with 1px bottom border in Ice Wire.
- **Inactive State:** Slate-500 (#64748b) text. Hover transitions to Ice Wire.
- **Mobile:** Terminal icon button (SVG chevron + line). No mobile menu implemented.

### Section Labels (Signature Component)
Section identifiers use the protocol prefix pattern: `// IDENTIFICATION`, `// EXPERIENCE`, `// SKILLS`, `// TIMELINE`. Rendered in IBM Plex Mono label style (12px, uppercase, 0.1em tracking) in Ice Wire. This is the system's structural signature. It must appear at the top of every content section.

## 6. Do's and Don'ts

### Do:
- **Do** use Ice Wire sparingly. Every instance should mark something active, live, or actionable. If more than 30% of visible pixels are Ice Wire, the signal has become noise.
- **Do** use the `// PREFIX` protocol labels on every content section. This is structural identity, not decoration.
- **Do** step through surface tonal layers sequentially. Surface Low for cards, Surface High for hover states, Surface Deep for recessed inputs.
- **Do** use IBM Plex Mono for all labels, tags, nav text, form field identifiers, and section prefixes.
- **Do** keep body text capped at 65-75ch max-width. The terminal aesthetic demands containment.
- **Do** use Playfair Display only for the name and primary section titles. It carries identity weight that dilutes with frequency.

### Don't:
- **Don't** build a generic developer portfolio. No two-column hero with headshot, no gradient backgrounds, no "passionate developer" copy, no progress bars for skill percentages, no testimonial sliders. Per PRODUCT.md: "any template that could belong to anyone."
- **Don't** apply rounded corners to interactive elements. Buttons, cards, inputs, chips are all 0px radius. The sharpness is the character.
- **Don't** use side-stripe borders (border-left or border-right greater than 1px as a colored accent). The hero uses a 2px left border as a deliberate exception. Nowhere else.
- **Don't** apply shadows to cards, modals, or containers. Elevation is tonal, not spatial.
- **Don't** use Ice Wire for large background fills. It is a signal color, not a surface color. Backgrounds stay in the neutral surface range.
- **Don't** mix font roles. If a label is in Inter instead of IBM Plex Mono, the protocol layer has broken.
- **Don't** use gradient text (background-clip: text with gradient). The accent is a single solid color. Emphasis comes from weight and size.
- **Don't** add decorative glassmorphism. No blur overlays, no frosted glass cards. The terminal does not have frosted glass.
- **Don't** write em dashes in any copy. Use commas, colons, semicolons, periods, or parentheses.
