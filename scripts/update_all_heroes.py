import os
import re

updates = {
    "src/pages/SkillTests/ReactTest.tsx": (
        "/images/product/C05-Coding.webp",
        "Candidate solving a React assessment task in the SetBenchmark code editor with tests and preview"
    ),
    "src/pages/SkillTests/PythonTest.tsx": (
        "/images/product/C05-Coding.webp",
        "Candidate solving a Python coding assessment in the SetBenchmark code editor with test cases"
    ),
    "src/pages/SkillTests/JavaTest.tsx": (
        "/images/product/C05-Coding.webp",
        "Candidate solving a Java programming test in the SetBenchmark code editor"
    ),
    "src/pages/SkillTests/JavascriptTest.tsx": (
        "/images/product/C05-Coding.webp",
        "Candidate solving a JavaScript assessment in the SetBenchmark code editor"
    ),
    "src/pages/SkillTests/NodeJSTest.tsx": (
        "/images/product/C05-Coding.webp",
        "Candidate solving a Node.js API and backend assessment in SetBenchmark"
    ),
    "src/pages/SkillTests/GolangTest.tsx": (
        "/images/product/C05-Coding.webp",
        "Candidate solving a Go concurrency and backend task in SetBenchmark"
    ),
    "src/pages/SkillTests/SQLTest.tsx": (
        "/images/product/C05-Coding.webp",
        "Candidate running SQL queries against a live test database in SetBenchmark"
    ),
    "src/pages/SkillTests/SystemDesignTest.tsx": (
        "/images/product/C05-Coding.webp",
        "Candidate working through a system design architecture problem in SetBenchmark"
    ),
    "src/pages/SkillTests/DevOpsTest.tsx": (
        "/images/product/C05-Coding.webp",
        "Candidate completing a DevOps, Docker and cloud infrastructure task in SetBenchmark"
    ),
    "src/pages/SkillTests/DataScienceTest.tsx": (
        "/images/product/C05-Coding.webp",
        "Candidate analyzing data and building models in SetBenchmark data science environment"
    ),
    "src/pages/SkillTests/AWSTest.tsx": (
        "/images/product/C05-Coding.webp",
        "Candidate completing an AWS cloud architecture and configuration test in SetBenchmark"
    ),
    "src/pages/SkillTests/DSATest.tsx": (
        "/images/product/C05-Coding.webp",
        "Candidate solving algorithms and data structures problems with automated test scoring"
    ),
    "src/pages/SkillTests/SkillTestsIndex.tsx": (
        "/images/product/C05-Coding.webp",
        "SetBenchmark pre-employment coding assessments and skill test catalog"
    ),
    "src/pages/Compare/HackerRankAlternatives.tsx": (
        "/images/product/H16-Compare.webp",
        "Side-by-side candidate scoring and benchmark comparison matrix in SetBenchmark"
    ),
    "src/pages/About/About.tsx": (
        "/images/product/A01-Overview.webp",
        "SetBenchmark platform overview and assessment benchmarks"
    ),
    "src/pages/Product/ProductIndex.tsx": (
        "/images/product/A01-Overview.webp",
        "SetBenchmark complete technical hiring and skills assessment suite"
    ),
    "src/pages/Solutions/SolutionsIndex.tsx": (
        "/images/product/H08-Pipeline.webp",
        "Technical hiring pipelines and workflows in SetBenchmark"
    ),
    "src/pages/Blog/BlogIndex.tsx": (
        "/images/product/H11-Report.webp",
        "SetBenchmark technical evaluation report and hiring insights"
    )
}

pattern = re.compile(
    r'<div class="">\s*<div>\s*(<div class="eyebrow">.*?</div>\s*<h1 class="h1">.*?</h1>\s*<p class="lead">.*?</p>\s*<div class="btns">.*?</div>)\s*</div>\s*</div>',
    re.DOTALL
)

for file_path, (img_src, img_alt) in updates.items():
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
    
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    replacement = (
        f'<div class="phero-grid">\n'
        f'<div>\n'
        r'\1'
        f'\n</div>\n'
        f'<div class="shot">\n'
        f'<img src="{img_src}" alt="{img_alt}" width="1440" height="900" loading="eager" decoding="async"/>\n'
        f'</div>\n'
        f'</div>'
    )

    new_content, count = pattern.subn(replacement, content)
    if count > 0:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"[OK] Updated hero with shot in: {file_path}")
    else:
        print(f"[WARN] Pattern did not match in: {file_path}")

# Also clean up inline oversized font-size on H1 in blog articles
blog_files = [
    "src/pages/Blog/AssessingDevelopers.tsx",
    "src/pages/Blog/CampusHiringGuide.tsx",
    "src/pages/Blog/FairCodingAssessment.tsx",
    "src/pages/Blog/PreventCheating.tsx"
]

for bf in blog_files:
    if os.path.exists(bf):
        with open(bf, "r", encoding="utf-8") as f:
            b_content = f.read()
        if 'style="font-size:clamp(34px, 4.4vw, 52px)"' in b_content:
            b_content = b_content.replace('style="font-size:clamp(34px, 4.4vw, 52px)"', '')
            with open(bf, "w", encoding="utf-8") as f:
                f.write(b_content)
            print(f"[OK] Cleaned blog inline H1 font-size in: {bf}")

print("Done updating heroes!")

