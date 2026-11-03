import subprocess
import os
from PIL import Image

msedge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not os.path.exists(msedge_path):
    msedge_path = r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"

out_dir = r"C:\Users\Admin\.gemini\antigravity\brain\957d98c9-4c11-432f-acae-ba818e5c0423"
out_full = os.path.join(out_dir, "about_after.png")
out_crop = os.path.join(out_dir, "crop_about_after.png")

cmd = [
    msedge_path,
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--window-size=1440,1800",
    f"--screenshot={out_full}",
    "http://localhost:3000/about"
]
subprocess.run(cmd, capture_output=True)

im = Image.open(out_full)
im.crop((0, 60, 1440, 950)).save(out_crop)
print("Saved crop_about_after.png!")

