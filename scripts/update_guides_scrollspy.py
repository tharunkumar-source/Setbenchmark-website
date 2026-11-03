# Update PreventCheating.tsx
p1 = "src/pages/Blog/PreventCheating.tsx"
with open(p1, "r", encoding="utf-8") as f:
    c1 = f.read()

# Add import
c1 = c1.replace(
    "import React from 'react';\nimport { SEOHead } from '@/components/SEOHead';",
    "import React from 'react';\nimport { SEOHead } from '@/components/SEOHead';\nimport { useScrollSpy } from '@/utils/useScrollSpy';"
)

# Update id for transparency box
c1 = c1.replace(
    '<div class="fairness-highlight-box" style="margin-top:40px">',
    '<div class="fairness-highlight-box" style="margin-top:40px" id="transparency">'
)

# Update TOC title and items
old_toc_1 = """            Guide Steps
          </div>
          <nav class="blog-toc-list" aria-label="Table of contents">
            <a href="#step-1" class="blog-toc-item">1. Test Design</a>
            <a href="#step-2" class="blog-toc-item">2. Identity Verification</a>
            <a href="#step-3" class="blog-toc-item">3. Signals vs Verdicts</a>
            <a href="#step-4" class="blog-toc-item">4. Human in the Loop</a>
            <a href="#step-5" class="blog-toc-item">5. Locked Environments</a>
            <a href="#step-6" class="blog-toc-item">6. Interview Follow-Up</a>
          </nav>"""

new_toc_1 = """            In this guide
          </div>
          <nav class="blog-toc-list" aria-label="Table of contents">
            <a href="#step-1" class="blog-toc-item active">1. Test Design</a>
            <a href="#step-2" class="blog-toc-item">2. Identity Verification</a>
            <a href="#step-3" class="blog-toc-item">3. Signals vs Verdicts</a>
            <a href="#step-4" class="blog-toc-item">4. Human in the Loop</a>
            <a href="#step-5" class="blog-toc-item">5. Locked Environments</a>
            <a href="#step-6" class="blog-toc-item">6. Interview Follow-Up</a>
            <a href="#transparency" class="blog-toc-item">7. Candidate Transparency</a>
          </nav>"""

c1 = c1.replace(old_toc_1, new_toc_1)

# Hook into component
c1 = c1.replace(
    "export const PreventCheating: React.FC = () => {\n  return (",
    "export const PreventCheating: React.FC = () => {\n  useScrollSpy();\n  return ("
)

with open(p1, "w", encoding="utf-8") as f:
    f.write(c1)
print("Updated PreventCheating.tsx")


# Update CampusHiringGuide.tsx
p2 = "src/pages/Blog/CampusHiringGuide.tsx"
with open(p2, "r", encoding="utf-8") as f:
    c2 = f.read()

c2 = c2.replace(
    "import React from 'react';\nimport { SEOHead } from '@/components/SEOHead';",
    "import React from 'react';\nimport { SEOHead } from '@/components/SEOHead';\nimport { useScrollSpy } from '@/utils/useScrollSpy';"
)

old_toc_2 = """            Campus Plan Steps
          </div>
          <nav class="blog-toc-list" aria-label="Table of contents">
            <a href="#step-1" class="blog-toc-item">Step 1: Define Skills</a>
            <a href="#step-2" class="blog-toc-item">Step 2: Build the Test</a>
            <a href="#step-3" class="blog-toc-item">Step 3: Plan Logistics</a>
            <a href="#step-4" class="blog-toc-item">Step 4: Set Cut-offs</a>
            <a href="#step-5" class="blog-toc-item">Step 5: Review Integrity</a>
            <a href="#step-6" class="blog-toc-item">Step 6: Rapid Interviews</a>
            <a href="#step-7" class="blog-toc-item">Step 7: Calibrate Next Year</a>
          </nav>"""

new_toc_2 = """            In this guide
          </div>
          <nav class="blog-toc-list" aria-label="Table of contents">
            <a href="#step-1" class="blog-toc-item active">Step 1: Define Skills</a>
            <a href="#step-2" class="blog-toc-item">Step 2: Build the Test</a>
            <a href="#step-3" class="blog-toc-item">Step 3: Plan Logistics</a>
            <a href="#step-4" class="blog-toc-item">Step 4: Set Cut-offs</a>
            <a href="#step-5" class="blog-toc-item">Step 5: Review Integrity</a>
            <a href="#step-6" class="blog-toc-item">Step 6: Rapid Interviews</a>
            <a href="#step-7" class="blog-toc-item">Step 7: Calibrate Next Year</a>
          </nav>"""

c2 = c2.replace(old_toc_2, new_toc_2)

c2 = c2.replace(
    "export const CampusHiringGuide: React.FC = () => {\n  return (",
    "export const CampusHiringGuide: React.FC = () => {\n  useScrollSpy();\n  return ("
)

with open(p2, "w", encoding="utf-8") as f:
    f.write(c2)
print("Updated CampusHiringGuide.tsx")


# Update AssessingDevelopers.tsx
p3 = "src/pages/Blog/AssessingDevelopers.tsx"
with open(p3, "r", encoding="utf-8") as f:
    c3 = f.read()

c3 = c3.replace(
    "import React from 'react';\nimport { SEOHead } from '@/components/SEOHead';",
    "import React from 'react';\nimport { SEOHead } from '@/components/SEOHead';\nimport { useScrollSpy } from '@/utils/useScrollSpy';"
)

# Add IDs to sections in AssessingDevelopers
c3 = c3.replace(
    '<div style="margin-bottom:36px">\n          <h2 style="font-size:24px;font-weight:700;margin-bottom:14px;color:var(--ink)">What changed in day-to-day engineering</h2>',
    '<div style="margin-bottom:36px" id="engineering-shift">\n          <h2 style="font-size:24px;font-weight:700;margin-bottom:14px;color:var(--ink)">What changed in day-to-day engineering</h2>'
)

c3 = c3.replace(
    '<div style="margin-bottom:36px">\n          <h2 style="font-size:24px;font-weight:700;margin-bottom:14px;color:var(--ink)">Skills to assess now</h2>',
    '<div style="margin-bottom:36px" id="skills">\n          <h2 style="font-size:24px;font-weight:700;margin-bottom:14px;color:var(--ink)">Skills to assess now</h2>'
)

old_toc_3 = """            In This Guide
          </div>
          <nav class="blog-toc-list" aria-label="Table of contents">
            <a href="#sample-assessment" class="blog-toc-item">Engineering Shift</a>
            <a href="#sample-assessment" class="blog-toc-item">Core Skills to Assess</a>
            <a href="#part-1" class="blog-toc-item">Part 1: Fundamentals</a>
            <a href="#part-2" class="blog-toc-item">Part 2: AI Allowed Task</a>
            <a href="#part-3" class="blog-toc-item">Part 3: Agentic Task</a>
            <a href="#part-4" class="blog-toc-item">Part 4: Trade-Off Review</a>
          </nav>"""

new_toc_3 = """            In this guide
          </div>
          <nav class="blog-toc-list" aria-label="Table of contents">
            <a href="#engineering-shift" class="blog-toc-item active">1. Engineering Shift</a>
            <a href="#skills" class="blog-toc-item">2. Skills to Assess</a>
            <a href="#sample-assessment" class="blog-toc-item">3. Sample 75-Min Plan</a>
            <a href="#part-1" class="blog-toc-item">Part 1: Fundamentals</a>
            <a href="#part-2" class="blog-toc-item">Part 2: AI Allowed Task</a>
            <a href="#part-3" class="blog-toc-item">Part 3: Agentic Task</a>
            <a href="#part-4" class="blog-toc-item">Part 4: Trade-Off Review</a>
          </nav>"""

c3 = c3.replace(old_toc_3, new_toc_3)

c3 = c3.replace(
    "export const AssessingDevelopers: React.FC = () => {\n  return (",
    "export const AssessingDevelopers: React.FC = () => {\n  useScrollSpy();\n  return ("
)

with open(p3, "w", encoding="utf-8") as f:
    f.write(c3)
print("Updated AssessingDevelopers.tsx")

