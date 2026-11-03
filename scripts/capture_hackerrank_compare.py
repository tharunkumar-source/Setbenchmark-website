import subprocess
import os
from PIL import Image

msedge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not os.path.exists(msedge_path):
    msedge_path = r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"

out_dir = r"C:\Users\Admin\.gemini\antigravity\brain\957d98c9-4c11-432f-acae-ba818e5c0423"
full_png = os.path.join(out_dir, "full_hackerrank_compare.png")

cmd = [
    msedge_path,
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--window-size=1440,2400",
    f"--screenshot={full_png}",
    "http://localhost:3000/compare/hackerrank-alternatives/"
]
subprocess.run(cmd, capture_output=True)

im = Image.open(full_png)
print("Full page size:", im.size)

# Crop the compare section (Where SetBenchmark is different + Popular HackerRank alternatives 2x2)
# Around y = 800 to 1800
im.crop((0, 750, 1440, 1750)).save(os.path.join(out_dir, "crop_hackerrank_split_cards.png"))
print("Saved crop_hackerrank_split_cards.png!")

