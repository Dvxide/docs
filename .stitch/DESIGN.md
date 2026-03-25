# Design System: DVX1DE Portfolio
**Project ID:** 1056548999244131361

---

## 1. Visual Theme & Atmosphere

**"Cyber-Noir Terminal"** — A sophisticated dark-mode portfolio that evokes the aesthetic of a professional hacker's workstation. The design blends the precision of terminal interfaces with the depth of noir visual storytelling. Every element feels deliberate: deep navy backgrounds create a sense of controlled darkness, crimson accents pulse with urgency and expertise, and monospace typography reinforces the operator's identity.

The improved system adds **visual breathing room** (generous whitespace between sections), **depth through layering** (subtle glow effects, gradient borders on hover), and **stronger typographic contrast** to guide the eye through the content hierarchy.

---

## 2. Color Palette & Roles

### Backgrounds (Dark Layer System)
- **Void Black** (`#050810`) — Deepest background layer, used for body base
- **Deep Space** (`#0a0e27`) — Primary page background; the "stage"
- **Midnight Navy** (`#111530`) — Secondary surface; section alternation
- **Dark Slate** (`#1a1f3a`) — Tertiary surface; cards, code blocks
- **Elevated Surface** (`#1e2445`) — Hover state for cards; subtle lift

### Accent (The Signal)
- **Crimson Core** (`#dc2626`) — Primary action color; CTAs, active states, key numbers
- **Crimson Bright** (`#ef4444`) — Hover escalation; button glow source
- **Crimson Dim** (`#991b1b`) — Pressed/active state
- **Crimson Glow** (`rgba(220, 38, 38, 0.15)`) — Ambient background tint on hover
- **Crimson Border** (`rgba(220, 38, 38, 0.35)`) — Accent border on focus/hover

### Typography
- **Primary Text** (`#f0f2f7`) — Slightly cooler than before; better contrast on deep space bg
- **Secondary Text** (`#c4c9d6`) — Body paragraphs, descriptions
- **Muted Text** (`#7b8499`) — Labels, timestamps, meta information
- **Accent Text** (`#dc2626`) — Inline highlights, percentages, tags

### Semantic
- **Online Green** (`#10b981`) — Status indicators, success states
- **Warning Amber** (`#f59e0b`) — Alert states

### Light Mode Overrides
- **Pure White** (`#ffffff`) — Page background
- **Off-White** (`#f8fafc`) — Section alternation
- **Light Surface** (`#f1f5f9`) — Cards
- **Dark Ink** (`#0f172a`) — Primary text
- **Slate Text** (`#334155`) — Secondary text
- **Border Light** (`rgba(0, 0, 0, 0.08)`) — Subtle dividers

---

## 3. Typography Rules

### Font Families
- **Display & UI Mono**: `'JetBrains Mono', monospace` — All headings, nav links, terminal text, labels, code
- **Body Copy**: `'Space Grotesk', sans-serif` — Paragraphs, descriptions

### Type Scale
| Role | Size | Weight | Font |
|---|---|---|---|
| Hero H1 | `clamp(2.8rem, 6vw, 4.5rem)` | 700 | JetBrains Mono |
| Section Title | `clamp(2.2rem, 4vw, 3.5rem)` | 700 | JetBrains Mono |
| Card Title | `1.3rem` | 600 | JetBrains Mono |
| Body Lead | `1.2rem` | 500 | Space Grotesk |
| Body | `1.05rem` | 400 | Space Grotesk |
| Label/Tag | `0.8rem` | 500 | JetBrains Mono |

### Spacing Rules
- Line height body: `1.85` (up from 1.6 — more breathing room)
- Line height headings: `1.15`
- Letter spacing section titles: `-0.03em`
- Letter spacing nav/labels: `0.05em`

---

## 4. Component Stylings

### Buttons
- **Primary CTA**: Crimson fill (`#dc2626`), 2px crimson border, `10px 24px` padding, `9px` radius. On hover: lift 3px, crimson glow `0 8px 32px rgba(220,38,38,0.4)`, brightness escalates to `#ef4444`.
- **Secondary Ghost**: Transparent fill, `1px solid rgba(255,255,255,0.15)` border. On hover: border becomes crimson, text becomes crimson, lift 2px.

### Cards & Containers
- **Standard Card**: `bg #1a1f3a`, `1px solid rgba(255,255,255,0.08)` border, `16px` radius, `24px` padding. On hover: border fades to `rgba(220,38,38,0.4)`, background lifts to `#1e2445`, `transform: translateY(-6px)`, box-shadow `0 20px 60px rgba(0,0,0,0.4)`.
- **Terminal Window**: `bg #111530`, header bar `#1a1f3a` with macOS-style traffic-light dots (red/yellow/green). Inner text area `24px` padding.
- **Stat Pill**: `rgba(220,38,38,0.06)` fill, `1px solid rgba(220,38,38,0.2)` border, `14px` radius.

### Navigation
- Sticky top, `rgba(5,8,16,0.88)` background with `backdrop-filter: blur(24px)`. On scroll: padding tightens, bottom border accent brightens.
- Active link: crimson underline `2px`, full text brightness.
- Theme toggle: `8px` radius, ghost style. Hover: crimson border + background.

### Skill Bars
- Track: `#0a0e27` background, `8px` height, `50px` radius.
- Fill: `linear-gradient(90deg, #dc2626, #ef4444, #f87171)` — three-stop for vibrancy.
- Shimmer overlay for animated state.

### Section Layout
- Section padding: `8rem 0` (up from 6rem) — more breathing room.
- Section header margin-bottom: `5rem` (up from 4rem).
- Max content width: `1200px`.
- Horizontal gutter: `2.5rem`.

### Tags & Badges
- Pill shape (`50px` radius), `0.25rem 0.85rem` padding.
- Fill: `rgba(220,38,38,0.1)`, border: `1px solid rgba(220,38,38,0.3)`.
- Font: JetBrains Mono, `0.78rem`.

---

## 5. Layout Principles

### Grid Philosophy
- **Desktop**: Full-width sections, max 1200px content container, centered.
- **About section**: `1fr 2fr` two-column layout — profile card sticky on left.
- **Skills**: `repeat(auto-fit, minmax(360px, 1fr))` — responsive 2-3 columns.
- **Projects**: Single column list with numbered entries.
- **Contact**: `repeat(3, 1fr)` three equal columns.

### Whitespace Strategy
- **Macro spacing** (between sections): `8rem` vertical padding
- **Meso spacing** (between card groups): `2.5rem` gap
- **Micro spacing** (inside cards): `2rem–2.5rem` padding, `1.5rem` gap between items
- Rule: when in doubt, add more space. Dense = amateur; airy = professional.

### Background Depth
- Fixed grid overlay: `linear-gradient` lines at `rgba(220,38,38,0.025)` — barely visible, creates depth without noise.
- Fixed radial gradient: two soft crimson bloom points for ambient light.
- Parallax: grid scrolls at `0.2x` speed, gradient at `0.4x`.

### Responsive Breakpoints
- `< 1024px`: About section stacks vertically, profile card unsticks.
- `< 768px`: Nav links hidden, mobile hamburger. Single-column layouts. Reduced hero terminal font size.
