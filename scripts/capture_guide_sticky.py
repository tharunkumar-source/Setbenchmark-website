import subprocess
import os
import time
from PIL import Image

msedge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not os.path.exists(msedge_path):
    msedge_path = r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"

out_dir = r"C:\Users\Admin\.gemini\antigravity\brain\957d98c9-4c11-432f-acae-ba818e5c0423"

# We'll create a tiny HTML test page that loads the guide in an iframe or directly, or we can use Edge with --window-size
# In headless edge, taking a screenshot of a 1440x900 viewport after scrolling down 1000px:
# We can create a test html file that redirects to the page and scrolls, or use an iframe:
scroll_html = os.path.join(out_dir, "scroll_test.html")
html_content = """<!DOCTYPE html>
<html>
<head>
  <style>
    body, html { margin:0; padding:0; overflow:hidden; width:100%; height:100%; }
    iframe { border:none; width:100%; height:100%; }
  </style>
</head>
<body>
  <iframe id="f" src="http://localhost:3000/blog/how-to-prevent-cheating-in-online-coding-tests/"></iframe>
  <script>
    const f = document.getElementById('f');
    f.onload = () => {
      setTimeout(() => {
        f.contentWindow.scrollTo(0, 1100);
      }, 500);
    };
  </script>
</body>
</html>
"""
with open(scroll_html, "w", encoding="utf-8") as f:
    f.write(html_content)

# Take screenshot at scroll position 1100
shot_path = os.path.join(out_dir, "guide_scrolled_sticky.png")
cmd = [
    msedge_path,
    "--headless",
    "--disable-gpu",
    "--hide-scrollbars",
    "--window-size=1440,900",
    f"--screenshot={shot_path}",
    f"file:///{scroll_html.replace(os.sep, '/')}"
]
# Wait 2 seconds before screenshot
time.sleep(1)
subprocess.run(cmd, capture_output=True)

if os.path.exists(shot_path):
    print("Saved guide_scrolled_sticky.png!")
else:
    print("Failed to save.")

