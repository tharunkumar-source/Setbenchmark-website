"""
Renders high-resolution 2x Retina (2880x1800) product UI screenshots from the
canonical HTML prototypes in C:\\Users\\Admin\\Downloads\\SetBenchmark_Figma_Import\\html-prototype\\
with optimized typography and contrast for product mockups.
"""

from __future__ import annotations

import os
import shutil
import subprocess
import tempfile
from pathlib import Path
from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
PRODUCT_DIR = ROOT / "public" / "images" / "product"
PROTO_DIR = Path(r"C:\Users\Admin\Downloads\SetBenchmark_Figma_Import\html-prototype")

MSEDGE_PATHS = [
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
]
msedge_bin = next((p for p in MSEDGE_PATHS if os.path.exists(p)), None)
if not msedge_bin:
    raise RuntimeError("Microsoft Edge executable not found")

TARGET_W = 2880
TARGET_H = 1800

READABILITY_CSS = """
<style>
/* High-definition readability tuning for mockup screens */
html, body {
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  text-rendering: optimizeLegibility !important;
}
body {
  font-size: 15px !important;
}
.mono, pre, code {
  font-family: 'JetBrains Mono', monospace !important;
  font-size: 14.5px !important;
  font-weight: 500 !important;
  color: #FFFFFF !important;
}
.kw { font-weight: 600 !important; }
.fn { font-weight: 600 !important; }
.st { font-weight: 500 !important; }
.ty { font-weight: 600 !important; }
.ln { font-size: 12.5px !important; opacity: 0.8 !important; }
h1 { font-size: 20px !important; font-weight: 700 !important; color: #0B0F19 !important; }
h2, h3 { font-size: 15px !important; font-weight: 700 !important; color: #0B0F19 !important; }
p, li, td, th { font-size: 14px !important; color: #1E2337 !important; }
.chip { font-weight: 600 !important; font-size: 12.5px !important; }
</style>
"""


def render_html_to_image(html_path: Path, out_path: Path) -> bool:
    """Render an HTML prototype file with Edge headless at 2x Retina (2880x1800)."""
    raw_content = html_path.read_text(encoding="utf8", errors="ignore")
    if "</head>" in raw_content:
        mod_content = raw_content.replace("</head>", f"{READABILITY_CSS}</head>")
    else:
        mod_content = f"{READABILITY_CSS}\n{raw_content}"

    # Use a temporary file in the same directory so font relative paths resolve
    temp_html = html_path.parent / f"_temp_render_{html_path.stem}.html"
    temp_png = out_path.parent / f"_temp_{out_path.stem}.png"
    try:
        temp_html.write_text(mod_content, encoding="utf8")
        cmd = [
            msedge_bin,
            "--headless",
            "--disable-gpu",
            "--hide-scrollbars",
            "--force-device-scale-factor=2",
            "--window-size=1440,900",
            f"--screenshot={temp_png}",
            f"file:///{temp_html.resolve().as_posix()}",
        ]
        res = subprocess.run(cmd, capture_output=True, text=True, timeout=15)
        if res.returncode != 0 or not temp_png.exists():
            print(f"[FAIL] Edge render error for {html_path.name}: {res.stderr}")
            return False

        im = Image.open(temp_png)
        if im.size != (TARGET_W, TARGET_H):
            im = im.crop((0, 0, TARGET_W, TARGET_H))

        if out_path.suffix.lower() == ".webp":
            im.save(out_path, "WEBP", quality=100, method=6)
        else:
            im.save(out_path, "PNG", optimize=True)
        return True
    finally:
        if temp_html.exists():
            temp_html.unlink()
        if temp_png.exists():
            temp_png.unlink()


def enhance_png(src_path: Path) -> None:
    """Upscale 1440x900 PNGs to 2880x1800 with Lanczos and unsharp mask edge enhancement."""
    im = Image.open(src_path).convert("RGBA")
    if im.size != (TARGET_W, TARGET_H):
        im = im.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)
        # Subtle unsharp mask for razor-sharp text stems
        im = im.filter(ImageFilter.UnsharpMask(radius=1.5, percent=130, threshold=2))
        im.save(src_path, "PNG", optimize=True)
        print(f"[OK] Enhanced PNG: {src_path.name} -> {im.size}")


def main() -> None:
    print(f"Targeting 2x Retina resolution: {TARGET_W}x{TARGET_H}")
    print(f"Using Edge at: {msedge_bin}")

    # 1. Render all matching HTML prototypes for existing product WebPs
    rendered_count = 0
    for p in sorted(PRODUCT_DIR.glob("*.webp")):
        matching_html = PROTO_DIR / f"{p.stem}.html"
        if matching_html.exists():
            ok = render_html_to_image(matching_html, p)
            if ok:
                rendered_count += 1
                print(f"[OK] Rendered 2x WebP ({rendered_count}): {p.name}")

    # 2. Check C08-Repository.html for coding-assessments-repo.png
    c08_html = PROTO_DIR / "C08-Repository.html"
    c08_png = PRODUCT_DIR / "coding-assessments-repo.png"
    if c08_html.exists() and c08_png.exists():
        if render_html_to_image(c08_html, c08_png):
            print(f"[OK] Rendered 2x PNG: {c08_png.name}")

    # 3. Enhance remaining PNG files
    for p in sorted(PRODUCT_DIR.glob("*.png")):
        if p.name == "coding-assessments-repo.png":
            continue
        enhance_png(p)

    print(f"\nDone! Rendered {rendered_count} 2x WebPs and enhanced PNGs in {PRODUCT_DIR}")


if __name__ == "__main__":
    main()

