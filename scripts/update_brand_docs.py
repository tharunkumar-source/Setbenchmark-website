with open('BRAND_GUIDELINES.md', 'r', encoding='utf-8') as f:
    text = f.read()

addition = """
### 5.6 Rubric & Checklist Table Components (.checklist-table)
Auditing rubrics, checklists, and evaluation matrices adhere to the brand token design system:
- **Card Enclosure (`.checklist-table-card`):** White card background with `1px solid var(--line)`, `16px` border-radius, and subtle drop shadow.
- **Index Circle Badges (`.checklist-circle-num`):** 32px circular pill, background Soft Lime Tint (`#F1FBD9`), border `1px solid #D6F5A0`, monospace numeral in Dark Lime (`#385400`).
- **Category Chips (`.checklist-tag`):** Background Soft Lime Tint (`#F1FBD9`), text Dark Lime (`#385400`), border `1px solid #D6F5A0`.
- **Status Badges (`.checklist-status-badge`):** Pill shape with green checkmark SVG and Dark Lime text (`#385400`) on `#F1FBD9`.
- **Row Hover:** Gentle lime wash (`#F8FBF2`) on mouseover.
- **Table Headers (`th`):** Canvas background (`var(--canvas)`), uppercase 12.5px font, tracking `0.06em`, color Slate Muted (`var(--text-3)`).
- **Callout Containers (`.fairness-highlight-box`):** Gradient wash (`#F9FDF5` to `#FFFFFF`), left accent border `5px solid #385400`, subtle lime boundary `1px solid #D6F5A0`.
"""

target = "## 6. Core UX & Product Principles"
if target in text:
    text = text.replace(target, addition.strip() + "\n\n" + target)
    with open('BRAND_GUIDELINES.md', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Updated BRAND_GUIDELINES.md with Section 5.6!")
else:
    print("Target not found")

