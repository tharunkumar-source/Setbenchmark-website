import subprocess
import os
from PIL import Image

msedge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not os.path.exists(msedge_path):
    msedge_path = r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"

out_dir = os.path.abspath(r"public\images\hero")
os.makedirs(out_dir, exist_ok=True)

targets = [
    ("scripts/card_benchmark.html", "hero-card-benchmark-score.png"),
    ("scripts/card_ai_fluency.html", "hero-card-ai-fluency.png"),
    ("scripts/card_integrity_badge.html", "hero-badge-integrity.png"),
    ("scripts/card_pill_pricing.html", "hero-pill-pricing.png"),
    ("scripts/card_bubble_icon.html", "hero-bubble-verified.png"),
]

for html_file, out_name in targets:
    abs_html = os.path.abspath(html_file)
    temp_path = os.path.join(out_dir, "temp_cap.png")
    if os.path.exists(temp_path):
        os.remove(temp_path)

    cmd = [
        msedge_path,
        "--headless",
        "--disable-gpu",
        "--hide-scrollbars",
        "--default-background-color=00000000",
        "--force-device-scale-factor=2",
        "--window-size=1200,1200",
        f"--screenshot={temp_path}",
        f"file:///{abs_html}"
    ]
    subprocess.run(cmd, capture_output=True)

    if os.path.exists(temp_path):
        im = Image.open(temp_path)
        bbox = im.getbbox()
        if bbox:
            # Add 2px margin if available to ensure smooth shadow falloff
            left = max(0, bbox[0] - 2)
            top = max(0, bbox[1] - 2)
            right = min(im.width, bbox[2] + 2)
            bottom = min(im.height, bbox[3] + 2)
            cropped = im.crop((left, top, right, bottom))
            final_path = os.path.join(out_dir, out_name)
            cropped.save(final_path, "PNG")
            print(f"[OK] Saved {out_name} - Size: {cropped.size} ({cropped.size[0]//2}x{cropped.size[1]//2} CSS px)")
        else:
            print(f"[ERROR] No content found in {html_file}")
        os.remove(temp_path)
    else:
        print(f"[ERROR] Failed screenshot for {html_file}")

print("All hero cards captured successfully!")

