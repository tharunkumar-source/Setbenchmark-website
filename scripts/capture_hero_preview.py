import subprocess
import os
from PIL import Image

msedge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not os.path.exists(msedge_path):
    msedge_path = r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"

brain_dir = r"C:\Users\Admin\.gemini\antigravity\brain\957d98c9-4c11-432f-acae-ba818e5c0423"

viewports = [
    ("hero_image_cards_desktop.png", 1440, 1050, (0, 0, 1440, 1050)),
    ("hero_image_cards_tablet.png", 1024, 1000, (0, 0, 1024, 1000)),
    ("hero_image_cards_mobile.png", 390, 950, (0, 0, 390, 950)),
]

for filename, w, h, crop_box in viewports:
    temp_file = os.path.join(brain_dir, f"temp_{filename}")
    cmd = [
        msedge_path,
        "--headless",
        "--disable-gpu",
        "--hide-scrollbars",
        f"--window-size={w},{h}",
        f"--screenshot={temp_file}",
        "http://localhost:3000/"
    ]
    subprocess.run(cmd, capture_output=True)
    if os.path.exists(temp_file):
        im = Image.open(temp_file)
        cropped = im.crop(crop_box)
        target = os.path.join(brain_dir, filename)
        cropped.save(target)
        print(f"[OK] Saved {filename} ({cropped.size})")
        os.remove(temp_file)
    else:
        print(f"[FAIL] Failed {filename}")

print("Visual verification screenshots saved!")

