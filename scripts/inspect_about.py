import subprocess
import os

msedge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not os.path.exists(msedge_path):
    msedge_path = r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"

out_dir = r"C:\Users\Admin\.gemini\antigravity\brain\957d98c9-4c11-432f-acae-ba818e5c0423"

# Capture About page before our changes
cmd = [
    msedge_path,
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--window-size=1440,1800",
    f"--screenshot={os.path.join(out_dir, 'about_before.png')}",
    "http://localhost:3000/about"
]
subprocess.run(cmd, capture_output=True)
print("Saved about_before.png")

