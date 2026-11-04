import subprocess
import os
import time
from PIL import Image

msedge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not os.path.exists(msedge_path):
    msedge_path = r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"

brain_dir = r"C:\Users\Admin\.gemini\antigravity\brain\957d98c9-4c11-432f-acae-ba818e5c0423"

# We will take screenshots of the page
temp_file = os.path.join(brain_dir, "hero_final_desktop_1440x1100.png")

cmd = [
    msedge_path,
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--window-size=1440,1150",
    f"--screenshot={temp_file}",
    "http://localhost:3000/"
]

subprocess.run(cmd, capture_output=True)
print("Saved final desktop capture:", os.path.exists(temp_file))

