import subprocess
import os
import time
from PIL import Image

msedge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not os.path.exists(msedge_path):
    msedge_path = r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"

brain_dir = r"C:\Users\Admin\.gemini\antigravity\brain\957d98c9-4c11-432f-acae-ba818e5c0423"

# Capture desktop page scrolled down to feature showcase
target_full = os.path.join(brain_dir, "home_full_page.png")
cmd = [
    msedge_path,
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--window-size=1440,3200",
    f"--screenshot={target_full}",
    "http://localhost:3000/"
]
subprocess.run(cmd, capture_output=True)

if os.path.exists(target_full):
    im = Image.open(target_full)
    print("Full page captured:", im.size)
    # The accordion section is after the hero and why setbenchmark and platform
    # Let's crop around y=1600 to y=2500
    crop = im.crop((0, 1600, 1440, 2600))
    target_crop = os.path.join(brain_dir, "feature_accordion_showcase_desktop.png")
    crop.save(target_crop)
    print(f"Saved feature_accordion_showcase_desktop.png: {crop.size}")
else:
    print("Failed to capture full page")

