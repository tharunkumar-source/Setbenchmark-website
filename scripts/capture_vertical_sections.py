import subprocess
import os
from PIL import Image

msedge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not os.path.exists(msedge_path):
    msedge_path = r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"

out_dir = r"C:\Users\Admin\.gemini\antigravity\brain\957d98c9-4c11-432f-acae-ba818e5c0423"
full_png = os.path.join(out_dir, "vertical_hackerrank_compare.png")

cmd = [
    msedge_path,
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--window-size=1440,3200",
    f"--screenshot={full_png}",
    "http://localhost:3000/compare/hackerrank-alternatives/"
]
subprocess.run(cmd, capture_output=True)

im = Image.open(full_png)
print("Full page size:", im.size)

# Crop 1: Section 2 - Popular HackerRank alternatives (2*2 grid)
im.crop((0, 1100, 1440, 1950)).save(os.path.join(out_dir, "crop_section_alternatives_2x2.png"))

# Crop 2: Section 3 - Where SetBenchmark is different (check cards + guidance)
im.crop((0, 1950, 1440, 2800)).save(os.path.join(out_dir, "crop_section_where_setbenchmark.png"))

print("Saved crop_section_alternatives_2x2.png and crop_section_where_setbenchmark.png!")

