import subprocess
import os
from PIL import Image

msedge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not os.path.exists(msedge_path):
    msedge_path = r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"

out_dir = r"C:\Users\Admin\.gemini\antigravity\brain\957d98c9-4c11-432f-acae-ba818e5c0423"
full_png = os.path.join(out_dir, "full_prevent_cheating.png")
cmd = [
    msedge_path,
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--window-size=1440,3000",
    f"--screenshot={full_png}",
    "http://localhost:3000/blog/how-to-prevent-cheating-in-online-coding-tests/"
]
subprocess.run(cmd, capture_output=True)

im = Image.open(full_png)
print("Full page dimensions:", im.size)

# Crop sections:
# 1. Hero + Steps 1-2
im.crop((0, 0, 1440, 1000)).save(os.path.join(out_dir, "crop_guide_top.png"))
# 2. Steps 3-5 + Sidebar
im.crop((0, 1000, 1440, 2000)).save(os.path.join(out_dir, "crop_guide_mid.png"))
# 3. Step 6 + Callout + Sidebar bottom + Read Next
im.crop((0, 2000, 1440, 2900)).save(os.path.join(out_dir, "crop_guide_bottom.png"))
print("Saved top, mid, bottom crops!")

