import os
import shutil

USER_SVG_SOURCE = r"C:\Users\Admin\Downloads\set bench mark logo.svg"
DEST_DIR = r"c:\Users\Admin\Downloads\SetBenchmark Website 2\public\brand"

# Paths from user's SVG
DOME_PATH = "M55.2805 67.2288L58.8315 70.7797L43.8969 85.7143H85.7143V83.2031C85.7143 67.3429 76.4955 50.9533 58.8511 43.6033C48.8556 39.639 37.723 39.2929 26.8239 43.6205C9.72405 50.7402 0 66.8246 0 83.2031V85.7143H36.795L55.2805 67.2288ZM16.8087 73.9947L12.0708 72.3222C16.6714 59.3054 29.0409 50.558 42.8571 50.558C56.6734 50.558 69.0429 59.3054 73.6433 72.3222L68.9054 73.9947C65.0161 62.9814 54.5498 55.5803 42.8571 55.5803C31.1645 55.5803 20.6982 62.9814 16.8087 73.9947Z"
BAR_PATHS = [
    "M5.18945 53.9958C9.73181 48.0645 14.2969 44.4941 20.2564 41.2862V30.4688H5.18945V53.9958Z",
    "M25.2793 38.8558C31.5518 36.4245 35.8201 35.8727 40.3463 35.6449V20.4241H25.2793V38.8558Z",
    "M60.4351 38.8461V10.3794H45.3682V35.643C49.6025 35.8556 53.9833 36.3304 60.4351 38.8461Z",
    "M65.458 41.2917C71.5062 44.5483 75.984 48.0641 80.525 54.0032V0H65.458V41.2917Z",
]

def make_icon_svg(graph_color: str, dome_color: str, width: int = 86, height: int = 86) -> str:
    bars = "\n".join(f'  <path d="{p}" fill="{graph_color}"/>' for p in BAR_PATHS)
    return f"""<svg width="{width}" height="{height}" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Speedometer Dome -->
  <path d="{DOME_PATH}" fill="{dome_color}"/>
  <!-- 4 Ascending Graphs -->
{bars}
</svg>"""

def make_horizontal_svg(graph_color: str, dome_color: str, set_color: str, bench_color: str) -> str:
    bars = "\n".join(f'    <path d="{p}" fill="{graph_color}"/>' for p in BAR_PATHS)
    return f"""<svg width="340" height="56" viewBox="0 0 340 56" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Scaled Logo Icon (86 -> 56px, factor: 0.65116) -->
  <g transform="translate(0, 0) scale(0.65116)">
    <path d="{DOME_PATH}" fill="{dome_color}"/>
{bars}
  </g>
  <!-- Wordmark -->
  <text x="68" y="38" font-family="-apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', 'Instrument Sans', Inter, sans-serif" font-size="30" font-weight="800" letter-spacing="-0.02em">
    <tspan fill="{set_color}">Set</tspan><tspan fill="{bench_color}">Benchmark</tspan>
  </text>
</svg>"""

# Copy original user SVG file verbatim
shutil.copyfile(USER_SVG_SOURCE, os.path.join(DEST_DIR, "setbenchmark-logo-icon.svg"))
shutil.copyfile(USER_SVG_SOURCE, os.path.join(DEST_DIR, "setbenchmark-mark.svg"))
shutil.copyfile(USER_SVG_SOURCE, os.path.join(DEST_DIR, "set-bench-mark-logo.svg"))

# 1. Dark variant: graphs are WHITE (#FFFFFF), dome is GREEN (#26D07C)
dark_svg = make_icon_svg(graph_color="#FFFFFF", dome_color="#26D07C")
with open(os.path.join(DEST_DIR, "setbenchmark-logo-icon-dark.svg"), "w", encoding="utf-8") as f:
    f.write(dark_svg)

# 2. Green variant: graphs are WHITE (#FFFFFF), dome is DARK (#07110D)
green_svg = make_icon_svg(graph_color="#FFFFFF", dome_color="#07110D")
with open(os.path.join(DEST_DIR, "setbenchmark-logo-icon-green.svg"), "w", encoding="utf-8") as f:
    f.write(green_svg)

# 3. Purple variant: graphs are WHITE (#FFFFFF), dome is GREEN (#26D07C)
purple_svg = make_icon_svg(graph_color="#FFFFFF", dome_color="#26D07C")
with open(os.path.join(DEST_DIR, "setbenchmark-logo-icon-purple.svg"), "w", encoding="utf-8") as f:
    f.write(purple_svg)

# 4. Monochromatic white (all white for print/inverted monochrome)
mono_white_svg = make_icon_svg(graph_color="#FFFFFF", dome_color="#FFFFFF")
with open(os.path.join(DEST_DIR, "setbenchmark-mark-mono-white.svg"), "w", encoding="utf-8") as f:
    f.write(mono_white_svg)

# 5. Monochromatic black (all black for print monochrome)
mono_black_svg = make_icon_svg(graph_color="#000000", dome_color="#000000")
with open(os.path.join(DEST_DIR, "setbenchmark-mark-mono-black.svg"), "w", encoding="utf-8") as f:
    f.write(mono_black_svg)

# 6. Horizontal SVGs
# Light background (Header)
horiz_light = make_horizontal_svg(graph_color="#07110D", dome_color="#26D07C", set_color="#07190F", bench_color="#26D07C")
with open(os.path.join(DEST_DIR, "setbenchmark-logo-horizontal.svg"), "w", encoding="utf-8") as f:
    f.write(horiz_light)

# Dark background (Footer)
horiz_dark = make_horizontal_svg(graph_color="#FFFFFF", dome_color="#26D07C", set_color="#FFFFFF", bench_color="#26D07C")
with open(os.path.join(DEST_DIR, "setbenchmark-logo-horizontal-dark.svg"), "w", encoding="utf-8") as f:
    f.write(horiz_dark)
with open(os.path.join(DEST_DIR, "setbenchmark-logo-horizontal-reversed.svg"), "w", encoding="utf-8") as f:
    f.write(horiz_dark)

# Green background
horiz_green = make_horizontal_svg(graph_color="#FFFFFF", dome_color="#07110D", set_color="#FFFFFF", bench_color="#07110D")
with open(os.path.join(DEST_DIR, "setbenchmark-logo-horizontal-green.svg"), "w", encoding="utf-8") as f:
    f.write(horiz_green)

# Purple background
horiz_purple = make_horizontal_svg(graph_color="#FFFFFF", dome_color="#26D07C", set_color="#FFFFFF", bench_color="#26D07C")
with open(os.path.join(DEST_DIR, "setbenchmark-logo-horizontal-purple.svg"), "w", encoding="utf-8") as f:
    f.write(horiz_purple)

print("Successfully updated all brand SVGs from user SVG source!")

