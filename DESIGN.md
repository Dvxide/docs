```markdown
# Design System Documentation

## 1. Overview & Creative North Star
This design system is built for the high-level architect of digital infrastructure. We are moving away from the "clunky hacker" trope and toward a **"Terminal Prestige"** aesthetic—a creative North Star that treats code and system logs with the reverence of a luxury editorial magazine. 

The system achieves this by balancing the stark, technical nature of a terminal with sophisticated, layered depth. We utilize intentional asymmetry, massive typographic scales, and a "noir" atmosphere to create a portfolio that feels authoritative, secure, and impeccably organized. We reject the "cramped" dashboard look in favor of an expansive, breathing canvas where data is given room to command attention.

## 2. Colors
Our palette is rooted in a "Deep Obsidian" base with surgically precise red accents.

### The Palette
- **Core Background:** `surface` (#131317) — A deep, non-pure black that provides a softer foundation for high-contrast text.
- **The Red Pulse:** `primary` (#ffb4a8) and `primary_container` (#ff5540). These are used sparingly for critical actions, status indicators, and "glowing" interactive elements.
- **Structural Grays:** `secondary` (#c7c5d3) and `on_surface_variant` (#ebbbb4) are used to create content hierarchy without relying on harsh whites.

### Surface Hierarchy & The "No-Line" Rule
To achieve a premium feel, **1px solid borders for sectioning are strictly prohibited.** Instead:
- **Tonal Transitions:** Define boundaries by shifting background colors. A section might move from `surface` to `surface_container_low` (#1b1b1f) to signal a change in context.
- **The "Glass & Gradient" Rule:** Floating elements must use Glassmorphism. Utilize semi-transparent versions of `surface_container_highest` with a `backdrop-blur` of 12px–20px. 
- **Signature Accents:** For high-impact areas, apply a subtle linear gradient from `primary_container` to a transparent alpha to create a "red glow" that feels like light emitting from a terminal screen.

## 3. Typography
The system uses a dual-font strategy to bridge the gap between "Brutalist Terminal" and "Modern Editorial."

- **The Display Scale:** Uses **Space Grotesk**. This font is sharp and geometric. At `display-lg` (3.5rem), it should be used for section headers to create an industrial, high-impact presence.
- **The Interface Scale:** Uses **Inter**. This is our workhorse for titles and body text. It provides the "Sharp Sans-Serif" look requested, ensuring that even dense technical descriptions remain readable.
- **The Logic Scale:** While not in the primary scale, utilize **JetBrains Mono** (or similar) for any code snippets or "Terminal" window text to maintain the system administrator's authentic visual language.

## 4. Elevation & Depth
In a Cyber-Noir environment, depth is not created by light hitting an object, but by the "glow" of data and the "stacking" of glass.

- **The Layering Principle:** Stack `surface-container` tiers to create hierarchy. 
    - *Level 0 (Background):* `surface`
    - *Level 1 (Sections):* `surface_container_low`
    - *Level 2 (Cards):* `surface_container_high`
- **Ambient Shadows:** Shadows should be used only for floating elements. Use a large 32px blur at 8% opacity, tinted with `primary` (#ffb4a8) to create an "atmospheric glow" rather than a traditional drop shadow.
- **The "Ghost Border" Fallback:** If containment is required for accessibility, use a "Ghost Border"—the `outline_variant` token at 15% opacity. It should be barely visible, acting as a suggestion of a boundary.

## 5. Components

### Terminal Windows
The centerpiece of the brand.
- **Surface:** `surface_container_lowest` with a 0.25rem border radius.
- **Header:** A subtle `surface_variant` bar with three window controls (use the `primary` red for the "close" dot).
- **Text:** Mono-spaced JetBrains Mono, using `on_surface_variant` for commands and `primary` for system outputs.

### Glassmorphism Cards
- **Background:** `surface_container_highest` at 60% opacity with a 16px blur.
- **Border:** Use a "Glowing Edge"—a 1px top-and-left stroke using `primary_container` (#ff5540) to simulate top-down terminal lighting.
- **Spacing:** Use `spacing-6` (2rem) for internal padding to ensure the content never feels "cramped."

### Interactive Skill Chips
- **Default:** `surface_container_high` with a `label-md` Space Grotesk font.
- **Active/Hover:** Transition the background to `primary_container` and the text to `on_primary_container`.
- **Shape:** Use the `full` (9999px) roundedness scale for a pill shape that contrasts against the rectangular terminal windows.

### Buttons
- **Primary:** Solid `primary_container` background. No border. Text in `on_primary_container`. Use a subtle outer glow on hover.
- **Secondary (The Terminal Style):** Transparent background with a `primary` Ghost Border (20% opacity). On hover, increase border opacity to 100%.

## 6. Do's and Don'ts

### Do
- **Use Intentional Asymmetry:** Align terminal windows to a 12-column grid, but allow them to span 7 or 8 columns, leaving the remaining space as "Negative Air."
- **Embrace Whitespace:** Use `spacing-16` or `spacing-20` between major sections. A SysAdmin's work is complex; the portfolio should feel calm and controlled.
- **Contrast for Accessibility:** Ensure all body text in Inter uses the `on_surface` or `secondary` tokens to maintain high legibility against the dark background.

### Don't
- **Don't use Divider Lines:** Never use a horizontal rule `<hr>` to separate content. Use a `2rem` jump in vertical spacing or a shift from `surface` to `surface_container`.
- **Don't Overuse Red:** Red is a warning color in systems. If the whole page is red, nothing is important. Use it only for accents, CTAs, and status indicators.
- **Don't use High-Opacity Borders:** Avoid 100% opaque white or gray borders; they break the "Noir" immersion. Use background color shifts instead.