import subprocess
import os
from PIL import Image

msedge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not os.path.exists(msedge_path):
    msedge_path = r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"

out_dir = r"C:\Users\Admin\.gemini\antigravity\brain\957d98c9-4c11-432f-acae-ba818e5c0423"

# 1. Blog Index
cmd1 = [
    msedge_path,
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--window-size=1440,2800",
    f"--screenshot={os.path.join(out_dir, 'temp_blog_index.png')}",
    "http://localhost:3000/blog/"
]
subprocess.run(cmd1, capture_output=True)

im1 = Image.open(os.path.join(out_dir, 'temp_blog_index.png'))
# Top hero + Recent posts
im1.crop((0, 60, 1440, 1250)).save(os.path.join(out_dir, 'crop_blog_index_recent.png'))
# All blog posts 3-col grid
im1.crop((0, 1250, 1440, 2300)).save(os.path.join(out_dir, 'crop_blog_index_grid.png'))
os.remove(os.path.join(out_dir, 'temp_blog_index.png'))
print("Saved blog index crops!")

# 2. Prevent Cheating Step Cards
cmd2 = [
    msedge_path,
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--window-size=1440,2400",
    f"--screenshot={os.path.join(out_dir, 'temp_prevent_cheating.png')}",
    "http://localhost:3000/blog/how-to-prevent-cheating-in-online-coding-tests/"
]
subprocess.run(cmd2, capture_output=True)

im2 = Image.open(os.path.join(out_dir, 'temp_prevent_cheating.png'))
# Step cards area
im2.crop((0, 600, 1440, 1900)).save(os.path.join(out_dir, 'crop_prevent_cheating_steps.png'))
os.remove(os.path.join(out_dir, 'temp_prevent_cheating.png'))
print("Saved prevent cheating step cards crop!")

# 3. Campus Hiring Step Cards
cmd3 = [
    msedge_path,
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--window-size=1440,2400",
    f"--screenshot={os.path.join(out_dir, 'temp_campus_hiring.png')}",
    "http://localhost:3000/blog/campus-hiring-coding-assessment-guide/"
]
subprocess.run(cmd3, capture_output=True)

im3 = Image.open(os.path.join(out_dir, 'temp_campus_hiring.png'))
# Campus step cards area
im3.crop((0, 600, 1440, 1900)).save(os.path.join(out_dir, 'crop_campus_hiring_steps.png'))
os.remove(os.path.join(out_dir, 'temp_campus_hiring.png'))
print("Saved campus hiring step cards crop!")

