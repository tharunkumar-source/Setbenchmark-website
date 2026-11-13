import os
import subprocess
from pathlib import Path
from PIL import Image

msedge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not os.path.exists(msedge_path):
    msedge_path = r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"

out_dir = Path(r"C:\Users\Admin\.gemini\antigravity\brain\957d98c9-4c11-432f-acae-ba818e5c0423")

# 1. Desktop Blog Index (1440 wide)
tmp_desktop = out_dir / "temp_desktop_blog.png"
subprocess.run([
    msedge_path,
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--window-size=1440,3200",
    "--virtual-time-budget=6000",
    f"--screenshot={tmp_desktop}",
    "http://localhost:3000/blog/"
], capture_output=True)

if tmp_desktop.exists():
    im = Image.open(tmp_desktop)
    # Highlights crop (Recent blog posts section)
    im.crop((0, 320, 1440, 1100)).save(out_dir / "new_desktop_highlights_grid.png")
    # Archive Grid crop
    im.crop((0, 1100, 1440, 2100)).save(out_dir / "new_desktop_archive_grid.png")
    tmp_desktop.unlink()
    print("[OK] Desktop crops saved successfully!")

# 2. Mobile Blog Index (390 wide)
tmp_mobile = out_dir / "temp_mobile_blog.png"
subprocess.run([
    msedge_path,
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--window-size=390,3200",
    "--virtual-time-budget=6000",
    f"--screenshot={tmp_mobile}",
    "http://localhost:3000/blog/"
], capture_output=True)

if tmp_mobile.exists():
    im_m = Image.open(tmp_mobile)
    # Highlights mobile crop
    im_m.crop((0, 260, 390, 1850)).save(out_dir / "new_mobile_highlights_grid.png")
    tmp_mobile.unlink()
    print("[OK] Mobile crop saved successfully!")
