import subprocess
import os
from PIL import Image

msedge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not os.path.exists(msedge_path):
    msedge_path = r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"

out_dir = r"C:\Users\Admin\.gemini\antigravity\brain\957d98c9-4c11-432f-acae-ba818e5c0423"
full_path = os.path.join(out_dir, "temp_checklist_full.png")

cmd = [
    msedge_path,
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--window-size=1440,3200",
    f"--screenshot={full_path}",
    "http://localhost:3000/blog/how-to-design-a-fair-coding-assessment/"
]
subprocess.run(cmd, capture_output=True)

if os.path.exists(full_path):
    im = Image.open(full_path)
    print("Full image size:", im.size)
    
    # 1. Hero & Stages: y=60 to y=1050
    im.crop((0, 60, 1440, 1050)).save(os.path.join(out_dir, "crop_checklist_hero_and_stages.png"))
    
    # 2. Table: y=1000 to y=2300
    im.crop((0, 1000, 1440, 2200)).save(os.path.join(out_dir, "crop_checklist_table.png"))
    
    # 3. Callout: y=2150 to y=2800
    im.crop((0, 2150, 1440, 2800)).save(os.path.join(out_dir, "crop_checklist_callout.png"))
    
    print("Checklist crops saved successfully!")
    os.remove(full_path)

