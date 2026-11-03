# SetBenchmark — Brand & Design System Guidelines

> **The standard every hire is measured against.**  
> SetBenchmark empowers hiring teams to assess developers on real-world engineering skills, AI fluency, and integrity with transparent, human-reviewed benchmarks.

---

## 1. Brand Essence & Story

### The Brand Mark
The SetBenchmark mark consists of **three rising bars** beneath a **horizontal benchmark line**:
- **First bar (white):** Baseline competence
- **Second bar (white):** Experienced execution
- **Third bar (Lime `#C8F25A`):** The benchmark standard
- **The Benchmark Line (Lime `#C8F25A`):** The definitive standard of excellence

```
┌─────────────────────────────────┐
│     ═══════════════════════     │  ← Lime Benchmark Line (#C8F25A)
│                                 │
│             ┌───┐   ┌───┐       │
│             │   │   │ █ │       │  ← Lime Bar (reaches the line)
│     ┌───┐   │ █ │   │ █ │       │
│     │ █ │   │ █ │   │ █ │       │  ← White Rising Bars
└─────┴───┴───┴───┴───┴───┴───────┘
```

> **Brand Narrative:**  
> The mark reads as **"meeting and defining the standard"**, never as a surveillance eye, a high-stress stopwatch, or an adversarial gatekeeper.

---

## 2. Color Palette & Design Tokens

### 2.1 Primary Brand Colors

| Token Name | Hex Code | Role & Usage | Contrast Ratio |
|---|---|---|---|
| **Ink** | `#0F1222` | Primary text, dark backgrounds, high-emphasis UI | 16.5:1 on White |
| **Ink 2** | `#1D2238` | Secondary dark surface, dark headers, cards in dark mode | High |
| **Ink 3** | `#2A3150` | Brand mark container tile, dark borders & accents | High |
| **Hero Lime (Primary Brand Accent)** | `#C8F25A` | Hero signature green, primary CTA buttons (`.btn-primary` with `#07190F` text), announcement bar, dark accents | 14.1:1 on Dark |
| **Benchmark Dark Lime (Reading / Text)** | `#385400` | Dark version of hero lime for readable text on white (links, eyebrows, table checkmarks, card actions) | 8.6:1 on White (WCAG AAA) |
| **Benchmark Dark Lime Hover** | `#233700` | Hover / active state for links and card actions on white | 12.5:1 on White (WCAG AAA) |
| **Benchmark Lime Tint** | `#F1FBD9` | Soft lime wash for icon tiles, active badges, status chips, tick circles | Base |
| **Benchmark Lime Border** | `#9AD628` | Focus rings, card hover borders, plan highlight borders | Structural |
| **AI Violet** | `#7A3FF2` | AI features, AI fluency tags, advisory suggestions | 5.4:1 on White |
| **AI Violet Tint** | `#EFE7FE` | Background for AI status chips, AI suggestion callouts | — |
| **Canvas** | `#F5F6FA` | Primary application background, alternative marketing sections | Neutral |
| **Card Surface** | `#FFFFFF` | Primary content cards, modals, table backgrounds | Base |
| **Line / Border** | `#E3E6EE` | Card borders, dividers, subtle separators | Structural |
| **Line Strong** | `#C9CEDB` | Input borders, interactive borders, tab underlines | Interactive |

---

### 2.2 Secondary & Supporting Text Colors

| Token Name | Hex Code | Usage |
|---|---|---|
| **Text Primary** | `#0F1222` | Headings, titles, high-priority body copy |
| **Text Secondary (`--text-2`)** | `#4A5168` | Body paragraphs, descriptions, lead copy |
| **Slate / Muted (`--text-3`)** | `#5A6178` | Captions, metadata, placeholders, helper text (6.2:1 on White) |
| **Dark Mode Muted** | `#B9BFD4` | Subtitles, muted copy on Ink/Dark sections |

---

### 2.3 Semantic & Status Chip Colors

> **Accessibility Rule:**  
> Status is **never communicated by color alone**. Every badge or chip must carry unambiguous wording and an icon where space permits. All pairs pass **WCAG 2.2 AA (minimum 4.5:1)**.

| Status | Background | Text Color | Meaning / Typical Badge |
|---|---|---|---|
| **Meets Bar (Success)** | `#F1FBD9` | `#385400` | `✓ Meets bar`, `Published v3`, `Pass` |
| **Needs Review (Warning)** | `#FEF0DA` | `#8A4B06` | `Needs review`, `Below bar`, `Draft`, `Pending human review` |
| **Integrity Flag** | `#FDE8DC` | `#A53A0C` | `⚠ 2 flags to review`, `Possible leak` *(Warm orange tone avoids penalizing candidate automatically)* |
| **Information / Active** | `#E7EBFE` | `#2238C7` | `In progress`, `Sandbox mode` |
| **Neutral / Inactive** | `#EEF0F5` | `#4A5168` | `Not started`, `Expired`, `Coming later`, `No flags` |
| **AI Guarded** | `#0F1222` | `#FFFFFF` | `🛡️ AI not allowed` (Signals active proctoring) |
| **AI Allowed / Advisory** | `#EFE7FE` | `#5B24C9` | `✨ AI allowed`, `AI suggestion · advisory` |
| **Error / Destructive** | `#FDF2F0` | `#A3260E` | `Invalid format`, `Retire question` (Border: `#F0B9A6`) |

---

## 3. Typography & Font Hierarchy

### 3.1 Font Families

1. **Primary UI & Editorial:**  
   `Instrument Sans`, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif  
   - Weights: `400` (Regular), `500` (Medium), `600` (Semi-bold), `700` (Bold)
   - Characteristics: Clean geometric sans, humanist details, high legibility at dense data scales.

2. **Monospace & Code:**  
   `JetBrains Mono`, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace  
   - Weights: `400` (Regular), `500` (Medium), `700` (Bold)
   - Used for: Code editors, terminal output, percentages/scores (`82%`), candidate IDs, keyboard shortcuts (`Ctrl ↵`).

---

### 3.2 Type Scale

| Level | Font Family | Size / Line-height | Weight | Letter-spacing | Sample Usage |
|---|---|---|---|---|---|
| **Hero Display** | Instrument Sans | `48px – 64px` / `1.04` | 700 | `-0.035em` | Marketing landing titles |
| **H1** | Instrument Sans | `32px – 44px` / `1.15` | 700 | `-0.03em` | Page titles, candidate report header |
| **H2** | Instrument Sans | `24px – 30px` / `1.20` | 700 | `-0.025em` | Section headers, card group titles |
| **H3** | Instrument Sans | `18px – 21px` / `1.30` | 600 / 700 | `-0.01em` | Subsection titles, card headings |
| **Lead / Intro** | Instrument Sans | `18px – 20px` / `1.55` | 400 / 500 | Normal | Hero subtitles, section descriptions |
| **Body (Default)** | Instrument Sans | `14px – 17px` / `1.60` | 400 / 500 | Normal | General reading, explanations |
| **Caption / Meta** | Instrument Sans | `12px – 13px` / `1.40` | 500 / 600 | Normal | Timestamps, form labels, secondary info |
| **Eyebrow Tag** | Instrument Sans | `13px` / `1.20` | 700 | `+0.06em` | Uppercase category headers in Dark Lime `#385400` on white (Lime `#C8F25A` on dark) with no leading dash |
| **Code / Data** | JetBrains Mono | `13px – 14px` / `1.45` | 400 / 500 | Normal | `func Rebalance(ctx context.Context)` |

---

## 4. Spacing, Geometry & Component Tokens

### 4.1 Spacing Scale
Built on a standard 4px / 8px grid:
`4px` · `8px` · `12px` · `16px` · `24px` · `32px` · `48px` · `64px` · `96px`

### 4.2 Border Radius Scale
- **Chips / Pills:** `999px` (Fully rounded)
- **Small Inputs / Form Controls:** `10px`
- **Buttons:** `10px` (UI) / `12px` (Marketing)
- **Cards / Containers:** `14px`
- **Modals / Dialogs:** `16px – 20px`

### 4.3 Elevation & Surface Treatment
- **Flat Borders Over Shadows:** Cards and containers utilize a crisp `1px solid #E3E6EE` border on pure white (`#FFFFFF`) or canvas (`#F5F6FA`) surfaces rather than heavy blur shadows.
- **Overlays Only:** Soft drop shadows (`rgba(15, 18, 34, 0.08)`) are strictly reserved for elevated layers:
  - Contextual menus & dropdowns
  - Modal sheets & popovers
  - Live candidate code editor toolbars

---

## 5. Component Patterns

### 5.1 Buttons

#### Button Variants
- **Primary (`.bp`, `.btn-primary`):** Background `#C8F25A`, Text `#07190F`, Weight `700`, Border `1px solid #B8E44C`. Signature hero lime button for main CTAs, "Start free trial", "Publish assessment".
- **Secondary (`.bs`):** Background `#FFFFFF`, Text `#0F1222`, Border `1px solid #C9CEDB`. For "Save draft", "Export CSV".
- **Dark (`.bd`):** Background `#0F1222`, Text `#FFFFFF`. For "Start test", primary standalone dark buttons.
- **Ghost / Header (`.bg`, `.btn-ghost`):** Background `transparent` (or `rgba(255, 255, 255, 0.04)` on dark), Text `#385400` on light, `#FFFFFF` / `rgba(255, 255, 255, 0.9)` on dark, Border `1px solid rgba(255, 255, 255, 0.22)`. For "Sign In", "Preview as candidate".
- **Destructive (`.bx`):** Background `#FFFFFF`, Border `#F0B9A6`, Text `#A3260E`. For "Retire question", "Revoke access".
- **Focus Ring:** `outline: 3px solid #9AD628; outline-offset: 2px; border-radius: 4px;`

#### Button Sizes & Height Tokens
| Size Token | Height | Padding | Border Radius | Font Size / Weight | Usage |
|---|---|---|---|---|---|
| **Default / Marketing (`.btn`)** | `48px` | `0 22px` | `12px` | `15.5px` / `700` | Landing heroes, CTAs, modal submissions |
| **Small / Header & UI (`.btn-sm`)** | `40px` | `0 16px` | `10px` | `14px` / `600` (Ghost) / `700` (Primary) | Navigation header actions, card inline actions, table row buttons |
| **Compact (`.btn-xs`)** | `32px` | `0 12px` | `8px` | `13px` / `600` | Editor inline tools, code playback controls |

#### Button Spacing Standards
- **Adjacent Button Groups (`.hdr-actions`, `.btns`):** Always maintain **`12px` horizontal gap** (`gap: 12px`).
- **Header Actions Rule:** All header buttons (e.g. `Sign In` and `Start free trial`) must maintain **identical `40px` height**, matching `10px` border-radius, and optical vertical center alignment.

### 5.2 AI Badges & Advisory Patterns
1. **AI Not Allowed (`.chip.grd`):** Black pill `#0F1222` with shield icon. Means automated anti-cheat & proctoring checks are enforced.
2. **AI Allowed (`.chip.ai`):** Violet pill `#EFE7FE` with `#5B24C9` text and sparkle icon. AI coding assistants are welcomed for this task.
3. **AI Suggestion Box:** Light purple container (`background: #FAF7FF; border: 1px solid #DCCBFB; border-radius: 12px;`). Clearly communicates that scores or summaries generated by AI are advisory: *"A human reviewer decides the final score."*


### 5.3 FAQ 2-Column Split Pattern
All FAQ sections across the site strictly adhere to the 2-column split design pattern:
1. **Header Block (`.faq-head`):**
   - Eyebrow: `Frequently Asked Questions` (`13.5px`, bold, uppercase, dark lime `#385400`, no leading dash).
   - Display Heading: `Everything you need to know about <span class="faq-highlight">{Topic}</span>` where `{Topic}` is highlighted in `#385400`.
2. **Left Card (`.faq-card`):**
   - Background: Dark emerald gradient with right-edge radial glow (`linear-gradient(155deg, #05160E, #072618, #020C07)`).
   - Concentric Pattern: Fine concentric geometric arc lines (`opacity: 0.14`, stroke `#C8F25A`) radiating from the right edge.
   - Branding: SetBenchmark icon mark + white wordmark at top.
   - Title: `Need Help Choosing the Right Assessment Solution?` (bold white display text).
   - Description: Subtitle copy communicating enterprise capabilities and custom workflows.
   - Action Button (`.btn.btn-primary`): Standard brand primary action button (`background: #C8F25A; color: #07190F; border-radius: 12px; height: 48px; font-weight: 700;`).
3. **Right Column (`.faq`):**
   - Clean horizontal dividers (`border-top: 1px solid var(--line); border-bottom: 1px solid var(--line)`).
   - Summary Question: `18px`, bold `#0F1222`, hover `#385400`, with `+` / `–` indicator in `#385400`.
   - Answer Body: `16px`, color `#4A5168`, line-height `1.6`.

---

### 5.4 Section Feature Bullet Checkmarks (`.tick`)
All feature and capability bullet points in section descriptions (`.checks li .tick`) and plan comparisons (`.plan li .tick`) use prominent circular accent badges:
- **Geometry & Size:** Perfect circle (`border-radius: 50%`), `24px x 24px` (`min-width: 24px`).
- **Surface & Background:** Soft lime tint `--lime-50` (`#F1FBD9`) with subtle boundary ring `1px solid rgba(56, 84, 0, 0.16)`.
- **Icon Mark:** Vector SVG checkmark (`13px x 13px`, `stroke-width: 3`, `stroke: #385400`) centered vertically.
- **Dark Mode / On-Dark:** `background: rgba(200, 242, 90, 0.16); color: #C8F25A; border-color: rgba(200, 242, 90, 0.28);`.
- **Text Alignment:** `margin-top: 1px` ensuring perfect optical alignment with the 24px line height of the adjacent body copy.

### 5.5 Card Icon Tiles (.icon)
All card icon badges and tiles across feature grids, capability overviews, and regional/solution cards strictly use the standard brand accent styling:
- **Geometry & Size:** 44px x 44px with 12px border-radius (order-radius: 12px; margin-bottom: 18px;).
- **Surface & Background:** Benchmark Lime Tint (#F1FBD9).
- **Icon Mark & Stroke:** Benchmark Dark Lime (#385400).
- **Strict Color Uniformity:** No alternative color variations (such as violet, purple, or blue) are permitted for card icon tiles. All cards maintain identical lime tint background and dark lime stroke for brand consistency across the entire website.

### 5.6 Rubric & Checklist Table Components (.checklist-table)
Auditing rubrics, checklists, and evaluation matrices adhere to the brand token design system:
- **Card Enclosure (`.checklist-table-card`):** White card background with `1px solid var(--line)`, `16px` border-radius, and subtle drop shadow.
- **Index Circle Badges (`.checklist-circle-num`):** 32px circular pill, background Soft Lime Tint (`#F1FBD9`), border `1px solid #D6F5A0`, monospace numeral in Dark Lime (`#385400`).
- **Category Chips (`.checklist-tag`):** Background Soft Lime Tint (`#F1FBD9`), text Dark Lime (`#385400`), border `1px solid #D6F5A0`.
- **Status Badges (`.checklist-status-badge`):** Pill shape with green checkmark SVG and Dark Lime text (`#385400`) on `#F1FBD9`.
- **Row Hover:** Gentle lime wash (`#F8FBF2`) on mouseover.
- **Table Headers (`th`):** Canvas background (`var(--canvas)`), uppercase 12.5px font, tracking `0.06em`, color Slate Muted (`var(--text-3)`).
- **Callout Containers (`.fairness-highlight-box`):** Gradient wash (`#F9FDF5` to `#FFFFFF`), left accent border `5px solid #385400`, subtle lime boundary `1px solid #D6F5A0`.

## 6. Core UX & Product Principles

1. **Candidates First:**
   - Always display a visible server timer with sync confirmation.
   - Continuous auto-save state indicator.
   - An accessible "I'm having a problem" assistance trigger that never moves.
2. **Human in the Loop:**
   - Automated signals are informative; people make hiring decisions.
   - Flags use orange (`#A53A0C`) rather than red, avoiding premature failure branding.
3. **No Dead Ends:**
   - Every empty state, locked module, or error includes an explanation and clear next action.
4. **Keyboard Complete:**
   - All interactive actions reachable via keyboard navigation with visible shortcuts (`Ctrl ↵`).
5. **Built-in Accommodations:**
   - Extra time adjustments, screen reader optimizations, and camera-free alternatives without penalty.
6. **Traceable Audit Trail:**
   - Every score override or status advance records who, when, and why.

