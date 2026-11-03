import subprocess
import os
import time

msedge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not os.path.exists(msedge_path):
    msedge_path = r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"

out_dir = r"C:\Users\Admin\.gemini\antigravity\brain\957d98c9-4c11-432f-acae-ba818e5c0423"

# 1. Scrolled to 1100px (Step 3 / Step 4 in view)
shot_1100 = os.path.join(out_dir, "crop_guide_scrolled_1100.png")
cmd1 = [
    msedge_path,
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--window-size=1440,900",
    f"--screenshot={shot_1100}",
    "http://localhost:3000/blog/how-to-prevent-cheating-in-online-coding-tests/?scroll=1100"
]
subprocess.run(cmd1, capture_output=True)
print("Captured crop_guide_scrolled_1100.png")

# 2. Scrolled to 1700px (Step 5 / Step 6 / Transparency in view)
shot_1700 = os.path.join(out_dir, "crop_guide_scrolled_1700.png")
cmd2 = [
    msedge_path,
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--window-size=1440,900",
    f"--screenshot={shot_1700}",
    "http://localhost:3000/blog/how-to-prevent-cheating-in-online-coding-tests/?scroll=1700"
]
subprocess.run(cmd2, capture_output=True)
print("Captured crop_guide_scrolled_1700.png")

