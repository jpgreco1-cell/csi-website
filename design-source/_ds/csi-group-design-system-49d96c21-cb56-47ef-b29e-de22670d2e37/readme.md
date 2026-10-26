# CSI Group — Design System

> **From Taxes to Retirement, Let Our Family Guide Yours.®**
> The visual identity, voice, tokens, components, and UI kits for **CSI Group — the Family Doctor of Finance.**

---

## 1. Company & Product Context

**CSI Group** is a 23-office financial-services firm across **New Jersey & New York**, built to *simplify financial security and remove uncertainty for America's middle class.* The brand positions itself as the **"Family Doctor of Finance"** — the trusted guide who sees the whole picture, coordinates every specialist, and stays with the family for life.

- **Mission:** Simplify financial security and remove uncertainty for America's middle class.
- **Positioning:** The Family Doctor of Finance — the trusted guide, not the hero.
- **Leadership:** Co-CEOs James Greco & Robert (Bobby) M. Greco.
- **"CSI"** stands for **Confidence, Service, Integrity.**

### Six service lines
1. **Tax & Accounting**
2. **Wealth Management & Financial Advisory**
3. **Legal** — Wills, Estate Planning & Business Law
4. **Insurance**
5. **Business Services** — bookkeeping, entity formation, payroll
6. **CSI360™** — the 7-pillar holistic financial checkup (the flagship sub-brand)

### CSI360™ sub-brand
- **Tagline:** *Your Financial Life. Fully Integrated.™*
- **Sub-tagline:** One Team | One Plan | Total Clarity
- **Descriptor:** Financial · Tax · Estate Planning
- **Promise:** Whatever life brings, you'll never face it alone.

### Standing contact block
- **Website:** csicpa.com
- **Main:** 877-4-CSI360 / (877) 563-0652
- **General:** inquiry@csicpa.com · **M&A:** joinus@csicpa.com
- **HQ:** 1599 NJ-34, Wall Township, NJ 07727

### Source material
This system was built **entirely from one source**:
- `uploads/CSI_Group_Brand_Style_Guide_2026.1.pdf` — *The CSI Group Visual Identity Style Guide, Brand Standards Manual, Edition 2026.1* (8 pages). Logos were extracted directly from this PDF into `assets/logos/`.

> There was **no codebase or Figma** provided. All components and UI kits below are faithful interpretations of the **printed brand standards** (color, type, logo, layout-band rules), not recreations of an existing live product. Where the guide is silent (e.g. interactive states, form styling), choices were derived conservatively from the brand's print conventions and are flagged as such.

---

## 2. Content Fundamentals — how CSI writes

The brand voice is the way **a trusted family advisor speaks at the kitchen table** — warm, plain, confident. Copy should feel like guidance, *never a sales pitch.*

### Voice & tone principles (from the guide)
- **Client as hero.** CSI is the guide, never the hero. The client's family is the story.
- **Care over sales.** Frame everything as *opportunity and protection*, not selling.
- **Prose over bullets** wherever the format allows it to breathe.
- **Imply the conclusion.** Let two facts sit side by side and trust the reader to connect them.
- **Warm, plain, confident.** Kitchen-table tone.
- **Never alone.** Whatever life brings, the family has a team behind them.

### Person & address
- Speak to the reader as **"you" / "your family."** CSI refers to itself as **"we" / "our family,"** "one team."
- Example: *"Your Financial Life, coordinated by one team."* · *"Whatever life brings, you'll never face it alone."*

### Casing & marks
- **Headlines:** mixed case ("Plan With Confidence", "A Strategic Transition") — *not* all-caps.
- **Section labels / eyebrows:** widely letter-spaced uppercase microtype ("0 1 — F O U N D A T I O N").
- **Trademark discipline is mandatory:**
  - **CSI Group®** — registered trademark.
  - **CSI360™** and **"Your Financial Life. Fully Integrated.™"**
  - **877-4-CSI360** — the tagline phone number carries ®.
  - **"From Taxes to Retirement, Let Our Family Guide Yours.®"** — primary tagline, carries ®.
  - **"Relinquish Stress. Let Us Buy Your Success©"** — carries the copyright mark.

### Approved CTA / value phrases
- "Complimentary & Commitment-Free!"
- "Already included in your CSI Member benefits"
- "Relinquish Stress. Let Us Buy Your Success©"
- "Protecting Legacy. Expanding Opportunity."
- "Leave No Stone Unturned."

### NEVER (hard bans)
- ❌ **Em-dashes.** Do not use them.
- ❌ The words **"seamlessly," "journey,"** or **"expansive suite."**
- ❌ Reordering, dropping, or shrinking the legal disclosure (see §7).
- **Emoji:** not part of the brand. The only glyph the brand uses editorially is the **✓ checkmark** (light blue) for DO-lists, and **✕** for DON'T-lists. No decorative emoji.

---

## 3. Visual Foundations

### Color — *blue only*
The single strongest brand rule: **Blue only. No gold, no charcoal, no green, no invented palettes.** Every piece is built from **four brand blues + neutrals.**

| Role | Name | Hex |
|---|---|---|
| Primary | Navy | `#1E3A5F` |
| Secondary | Mid-Blue | `#2E5F8A` |
| Accent | Light Blue | `#4A9FD4` |
| Decorative | Sky Blue | `#7BB8D4` |
| Neutral | White | `#FFFFFF` |
| Neutral | Light Gray | `#F4F6F8` |
| Text | Body Ink | `#1A1A2E` |
| Functional | Disclosure Gray | `#6B7280` *(legal text only)* |

- Pair **deep navy backgrounds** with **light-blue accent rules.**
- The **only approved gradient** runs **navy → sky-blue** (`--csi-gradient-brand`). Never invent gradients outside that range.
- **Disclosure gray is reserved strictly for legal text** — never body copy, never headers.

### Typography — Montserrat for structure, Lora for warmth
- **Headlines:** Montserrat **800–900**, mixed case, navy-on-light or white-on-navy.
- **Subheads:** Montserrat **300–400**. *The light weight is the contrast device* — never two bold weights stacked.
- **Body:** **Lora** (or Georgia) 400, comfortable reading size, `#1A1A2E` on light.
- **Taglines & signatures:** **Lora italic, light blue (`#4A9FD4`)** — exclusively.
- **Disclosure:** 6–7pt, disclosure gray.
- Fonts load from **Google Fonts** on every piece: Montserrat 300/400/700/800/900 + Lora 400/400italic/700.
- ❌ Never set body in Montserrat or headlines in Lora. ❌ Never substitute Arial, Inter, or system fonts for the brand pair.

### Spacing, layout & the three-band structure
The brand is **print-rooted**. Every standard print piece follows a **three-band anatomy**:
1. **Top — navy band:** logo top-left/center · white headline · optional CSI360 mark.
2. **Middle — white / light-gray:** two-column body · navy section heads · ✓ checkmark lists · pull quotes.
3. **Footer — navy band:** logo · phone · website · QR placeholder · 6pt disclosure · print code (`PC2026-###`, bottom-right).
- Accent elements: **thin blue rules, diagonal chevrons,** and **gray photo placeholders labeled with content** (e.g. `[PHOTO: couple with advisor]`).
- Output specs: 8.5×11 flyer, half-sheet 8.5×5.5, postcards 4×6 / 6×9, landing page 1200px max, slide 1280×720.

### Backgrounds, surfaces & imagery
- **Backgrounds** are solid: white, light gray (`#F4F6F8`), or navy bands. **No textures, no patterns, no photographic hero washes.** The one gradient is navy→sky, used sparingly for decorative shapes.
- **Imagery** is treated reservedly — real pieces use **labeled gray photo placeholders** rather than stock washes. When photography appears it is **warm, human, family-centric** (couples, advisors at a table), never cold corporate stock. Imagery sits in defined frames, not full-bleed behind text.

### Cards, borders, radii & shadows
- **Cards:** white surface, **modest radius** (~10px), a **soft cool-tinted shadow** (`rgba(30,58,95,…)`), often topped or sided by a **thin light-blue rule.** Document-like, not bubbly.
- **Radii:** small and squared-off (3–14px). Pills reserved for tags/badges.
- **Borders:** hairlines are navy at low opacity; the **signature accent is a 3px light-blue rule.**
- **Shadows:** always soft and blue-tinted, never heavy black drop shadows.

### Motion & states
- **Restrained and professional** — gentle fades and eases (`--ease-out`), short durations (140–360ms). **No bounce, no playful spring, no infinite loops.**
- **Hover:** navy elements lighten toward `--csi-navy-90`; light-blue links shift toward the lighter accent; surfaces lift one shadow step.
- **Press:** subtle darken, no shrink/scale gimmicks.
- **Focus:** 3px light-blue ring (`--shadow-focus`) for accessibility.
- **Transparency & blur:** used minimally — low-opacity navy hairlines and accent tints only. No glassmorphism.

---

## 4. Iconography

The CSI brand guide does **not specify a UI icon set** — it is a print-rooted identity. The only icon-like marks the brand defines are:

- **The ✓ checkmark** (light blue `#4A9FD4`) — the DO marker on every checklist. This is the brand's single most-used editorial glyph.
- **The ✕** — the DON'T marker.
- **The "·" middot** — separating contact items (`csicpa.com · 877-4-CSI360`) and descriptors (`Financial · Tax · Estate Planning`).
- **The diamond/arrow mark** (`◆ ›`) inside the CSI Group logo lockup, and **diagonal chevrons** called out as a print accent element.
- **Trademark glyphs:** ®, ™, © — used with strict discipline (see Content Fundamentals).

These are typographic Unicode glyphs, not an icon font. **No emoji** appear anywhere in the brand.

### Substitution (FLAGGED ⚠)
Because the guide ships **no UI icon library**, this system adopts **[Lucide](https://lucide.dev)** (loaded from CDN) for any interface chrome the components and UI kits need — menus, chevrons, close buttons, service-line glyphs, etc. Lucide was chosen because its **clean, even, 2px-stroke outline style** matches the brand's restrained, document-like, professional character and reads correctly in navy and light-blue. Icons are rendered at `1.5–2px` stroke in `--csi-navy` or `--csi-mid-blue`, `--csi-light-blue` for accents.

> ⚠ **This is a substitution, not a brand-supplied set.** If CSI has an official icon library (or prefers a different one), please supply it and this system will swap Lucide out. Until then, prefer Lucide outline icons and keep them sparse — the brand leans on type and the ✓ glyph far more than on iconography.

---

## 5. Index / Manifest

**Root**
- `styles.css` — the single entry point consumers link. `@import`s only.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills wrapper (for use in Claude Code).

**`tokens/`** — all CSS custom properties + webfonts
- `fonts.css` — Montserrat + Lora via Google Fonts.
- `colors.css` — four brand blues, neutrals, tints, semantic aliases, the one approved gradient.
- `typography.css` — families, weights, type scale, line-heights, tracking.
- `spacing.css` — spacing scale, radii, borders, shadows, layout, motion.
- `base.css` — element resets + brand utility classes (`.csi-eyebrow`, `.csi-hero`, `.csi-subhead`, `.csi-tagline`, `.csi-disclosure`, `.csi-rule`, `.csi-checklist`, `.csi-band-navy`).

**`assets/logos/`** — approved artwork (extracted from the 2026.1 guide)
- `CSIGroupLogo_2025.png` (primary, on light) · `CSIGroupLogo_2025_white.png` (on navy)
- `csi360_logo_tm_blue.png` (on light) · `csi360_logo_with_tm__white.png` (on navy)

**`components/`** — reusable React primitives (namespace `window.CSIGroupDesignSystem_…`)
- `core/` — **Button**, **Card**, **Badge**
- `brand/` — **Logo**, **Eyebrow**, **SectionRule**, **Tagline**, **Disclosure**
- `forms/` — **Input**, **Checkbox**
- `feedback/` — **Checklist** (the signature ✓ DO / ✕ DON'T list)

**`ui_kits/website/`** — interactive marketing-site recreation
- Home · CSI360™ · Services · Contact. See its `README.md`.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.

---

*CSI Group® · Confidence · Service · Integrity · csicpa.com · 877-4-CSI360*
*Built from CSI_Group_Brand_Style_Guide_2026.1.pdf — Edition 2026.1.*
