import subprocess
import os
from PIL import Image

msedge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not os.path.exists(msedge_path):
    msedge_path = r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"

out_dir = r"C:\Users\Admin\.gemini\antigravity\brain\957d98c9-4c11-432f-acae-ba818e5c0423"

pages = [
    ("http://localhost:3000/product/coding-assessments/", "crop_hero_coding_assessments.png"),
    ("http://localhost:3000/skill-tests/react/", "crop_hero_skill_test_react.png"),
    ("http://localhost:3000/compare/hackerrank-alternatives/", "crop_hero_compare_hackerrank.png"),
    ("http://localhost:3000/about/", "crop_hero_about.png"),
    ("http://localhost:3000/pricing/", "crop_hero_pricing.png"),
]

for url, filename in pages:
    full_path = os.path.join(out_dir, "temp_full.png")
    cmd = [
        msedge_path,
        "--headless",
        "--disable-gpu",
        "--hide-scrollbars",
        "--window-size=1440,1100",
        f"--screenshot={full_path}",
        url
    ]
    subprocess.run(cmd, capture_output=True)
    if os.path.exists(full_path):
        im = Image.open(full_path)
        # Crop hero area (from nav below header down to top of features: y=60 to y=650)
        crop = im.crop((0, 60, 1440, 650))
        target_path = os.path.join(out_dir, filename)
        crop.save(target_path)
        print(f"[OK] Saved {filename}")
        os.remove(full_path)

print("Done taking screenshots!")

