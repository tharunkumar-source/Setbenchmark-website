"""
Generates complete, ultra-high-definition 2x Retina (3624x2140 laptop, 3056x1992 tablet)
device mockup images by compositing pristine 2880x1800 product UI screenshots inside
anti-aliased aluminum hardware frames.

Usage:
  python scripts/generate_mockup_images.py              # Build active hero/internal mockups used in src/
  python scripts/generate_mockup_images.py --all        # Build both laptop & tablet mockups for every product UI
  python scripts/generate_mockup_images.py --sample     # Generate 1 laptop + 1 tablet sample for inspection
"""

from __future__ import annotations

import argparse
import os
import re
from pathlib import Path
from PIL import Image, ImageChops, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
PRODUCT_DIR = ROOT / "public" / "images" / "product"
MOCKUPS_DIR = ROOT / "public" / "images" / "mockups"
LAPTOP_DIR = MOCKUPS_DIR / "laptop"
TABLET_DIR = MOCKUPS_DIR / "tablet"

SCALE = 2
SCREEN_W = 1440 * SCALE  # 2880
SCREEN_H = 900 * SCALE   # 1800


def make_vertical_gradient(w: int, h: int, stops: list[tuple[float, tuple[int, int, int, int]]]) -> Image.Image:
    """Create a smooth RGBA vertical gradient from normalized y stops [(pos, (r,g,b,a)), ...]."""
    strip = Image.new("RGBA", (1, h))
    px = strip.load()
    for y in range(h):
        t = y / max(1, h - 1)
        for i in range(len(stops) - 1):
            t0, c0 = stops[i]
            t1, c1 = stops[i + 1]
            if t <= t1 or i == len(stops) - 2:
                u = 0.0 if t1 == t0 else max(0.0, min(1.0, (t - t0) / (t1 - t0)))
                px[0, y] = tuple(round(c0[k] + (c1[k] - c0[k]) * u) for k in range(4))
                break
    return strip.resize((w, h), Image.Resampling.BILINEAR)


def make_horizontal_gradient(w: int, h: int, stops: list[tuple[float, tuple[int, int, int, int]]]) -> Image.Image:
    """Create a smooth RGBA horizontal gradient from normalized x stops [(pos, (r,g,b,a)), ...]."""
    strip = Image.new("RGBA", (w, 1))
    px = strip.load()
    for x in range(w):
        t = x / max(1, w - 1)
        for i in range(len(stops) - 1):
            t0, c0 = stops[i]
            t1, c1 = stops[i + 1]
            if t <= t1 or i == len(stops) - 2:
                u = 0.0 if t1 == t0 else max(0.0, min(1.0, (t - t0) / (t1 - t0)))
                px[x, 0] = tuple(round(c0[k] + (c1[k] - c0[k]) * u) for k in range(4))
                break
    return strip.resize((w, h), Image.Resampling.BILINEAR)


def rounded_rect_mask(size: tuple[int, int], radii: tuple[int, int, int, int], scale: int = 2) -> Image.Image:
    """Render an anti-aliased L-mode mask for a rectangle with per-corner radii (tl, tr, br, bl)."""
    w, h = size
    sw, sh = w * scale, h * scale
    tl, tr, br, bl = (r * scale for r in radii)
    tl = min(tl, sw // 2, sh // 2)
    tr = min(tr, sw // 2, sh // 2)
    br = min(br, sw // 2, sh - tr)
    bl = min(bl, sw // 2, sh - tl)
    mask = Image.new("L", (sw, sh), 0)
    draw = ImageDraw.Draw(mask)

    max_r = max(tl, tr, br, bl)
    if max_r == 0:
        draw.rectangle([0, 0, sw - 1, sh - 1], fill=255)
    elif tl == tr == br == bl:
        draw.rounded_rectangle([0, 0, sw - 1, sh - 1], radius=tl, fill=255)
    else:
        left_x = max(tl, bl)
        right_x = max(left_x, sw - 1 - max(tr, br))
        top_y = max(tl, tr)
        bot_y = max(top_y, sh - 1 - max(bl, br))
        draw.rectangle([left_x, 0, right_x, sh - 1], fill=255)
        draw.rectangle([0, top_y, sw - 1, bot_y], fill=255)

        if tl > 0:
            draw.pieslice([0, 0, tl * 2, tl * 2], 180, 270, fill=255)
            if left_x > tl:
                draw.rectangle([tl, 0, left_x, tl], fill=255)
            if top_y > tl:
                draw.rectangle([0, tl, tl, top_y], fill=255)
        elif left_x > 0 or top_y > 0:
            draw.rectangle([0, 0, max(tl, bl), max(tl, tr)], fill=255)

        if tr > 0:
            draw.pieslice([sw - tr * 2 - 1, 0, sw - 1, tr * 2], 270, 360, fill=255)
            if sw - 1 - tr > right_x:
                draw.rectangle([right_x, 0, sw - 1 - tr, tr], fill=255)
            if top_y > tr:
                draw.rectangle([sw - 1 - tr, tr, sw - 1, top_y], fill=255)
        else:
            draw.rectangle([right_x, 0, sw - 1, top_y], fill=255)

        if br > 0:
            draw.pieslice([sw - br * 2 - 1, sh - br * 2 - 1, sw - 1, sh - 1], 0, 90, fill=255)
            if sw - 1 - br > right_x:
                draw.rectangle([right_x, sh - 1 - br, sw - 1 - br, sh - 1], fill=255)
            if sh - 1 - br > bot_y:
                draw.rectangle([sw - 1 - br, bot_y, sw - 1, sh - 1 - br], fill=255)
        else:
            draw.rectangle([right_x, bot_y, sw - 1, sh - 1], fill=255)

        if bl > 0:
            draw.pieslice([0, sh - bl * 2 - 1, bl * 2, sh - 1], 90, 180, fill=255)
            if left_x > bl:
                draw.rectangle([bl, sh - 1 - bl, left_x, sh - 1], fill=255)
            if sh - 1 - bl > bot_y:
                draw.rectangle([0, bot_y, bl, sh - 1 - bl], fill=255)
        else:
            draw.rectangle([0, bot_y, left_x, sh - 1], fill=255)

    return mask.resize(size, Image.Resampling.LANCZOS)


def build_laptop_template() -> tuple[Image.Image, tuple[int, int]]:
    """Build the 3624x2140 2x Retina Silver Aluminum Unibody MacBook Pro template RGBA + screen (x, y)."""
    margin_x = 18 * SCALE        # 36
    margin_top = 12 * SCALE      # 24
    bezel_side = 28 * SCALE      # 56
    bezel_top = 36 * SCALE       # 72
    bezel_bottom = 28 * SCALE    # 56
    rim = 5 * SCALE              # 10
    base_h = 46 * SCALE          # 92
    shadow_pad_bottom = 44 * SCALE # 88

    lid_inner_w = SCREEN_W + 2 * bezel_side # 2992
    lid_inner_h = SCREEN_H + bezel_top + bezel_bottom # 1928
    lid_w = lid_inner_w + 2 * rim          # 3012
    lid_h = lid_inner_h + rim              # 1938
    base_w = 1776 * SCALE                  # 3552

    canvas_w = base_w + 2 * margin_x       # 3624
    lid_x = (canvas_w - lid_w) // 2
    lid_y = margin_top
    screen_x = lid_x + rim + bezel_side
    screen_y = lid_y + rim + bezel_top
    base_x = margin_x
    base_y = lid_y + lid_h - 1 * SCALE
    canvas_h = base_y + base_h + shadow_pad_bottom  # 2140

    canvas = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))

    # 1. Soft two-layer ambient desk contact shadow directly below baseplate
    shadow_layer = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow_layer)
    sd.rounded_rectangle(
        [base_x + 20 * SCALE, base_y + base_h - 8 * SCALE, base_x + base_w - 20 * SCALE, base_y + base_h + 10 * SCALE],
        radius=12 * SCALE,
        fill=(15, 23, 42, 76),
    )
    shadow_tight = shadow_layer.filter(ImageFilter.GaussianBlur(radius=7 * SCALE))
    canvas.alpha_composite(shadow_tight)

    shadow_wide_layer = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))
    swd = ImageDraw.Draw(shadow_wide_layer)
    swd.rounded_rectangle(
        [base_x + 12 * SCALE, base_y + base_h - 4 * SCALE, base_x + base_w - 12 * SCALE, base_y + base_h + 22 * SCALE],
        radius=18 * SCALE,
        fill=(15, 23, 42, 46),
    )
    shadow_wide = shadow_wide_layer.filter(ImageFilter.GaussianBlur(radius=18 * SCALE))
    canvas.alpha_composite(shadow_wide)

    # 2. Display lid subtle cast drop shadow
    lid_shadow_layer = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))
    lsd = ImageDraw.Draw(lid_shadow_layer)
    lsd.rounded_rectangle(
        [lid_x, lid_y + 2 * SCALE, lid_x + lid_w, lid_y + lid_h + 2 * SCALE],
        radius=38 * SCALE,
        fill=(15, 23, 42, 34),
    )
    canvas.alpha_composite(lid_shadow_layer.filter(ImageFilter.GaussianBlur(radius=6 * SCALE)))

    # 3. Display lid outer silver aluminum rim
    rim_grad = make_vertical_gradient(
        lid_w,
        lid_h,
        [
            (0.0, (226, 231, 240, 255)),
            (0.05, (198, 206, 219, 255)),
            (0.65, (186, 194, 208, 255)),
            (1.0, (164, 173, 189, 255)),
        ],
    )
    rim_mask = rounded_rect_mask((lid_w, lid_h), (38 * SCALE, 38 * SCALE, 0, 0))
    lid_rim = Image.new("RGBA", (lid_w, lid_h), (0, 0, 0, 0))
    lid_rim.paste(rim_grad, (0, 0), rim_mask)
    canvas.alpha_composite(lid_rim, (lid_x, lid_y))

    # Crisp dark hairline around outer lid perimeter + inner white top highlight
    hairline_layer = Image.new("RGBA", (lid_w, lid_h), (0, 0, 0, 0))
    hd = ImageDraw.Draw(hairline_layer)
    hd.rounded_rectangle([0, 0, lid_w - 1, lid_h + 20 * SCALE], radius=38 * SCALE, outline=(100, 110, 128, 120), width=SCALE)
    hd.rounded_rectangle([1 * SCALE, 1 * SCALE, lid_w - 1 - 1 * SCALE, lid_h + 20 * SCALE], radius=37 * SCALE, outline=(255, 255, 255, 110), width=SCALE)
    canvas.alpha_composite(hairline_layer, (lid_x, lid_y))

    # 4. Glossy black glass display bezel
    glass_layer = Image.new("RGBA", (lid_inner_w, lid_inner_h), (9, 11, 14, 255))
    glass_mask = rounded_rect_mask((lid_inner_w, lid_inner_h), (33 * SCALE, 33 * SCALE, 0, 0))

    sheen = Image.new("RGBA", (lid_inner_w, lid_inner_h), (0, 0, 0, 0))
    shd = ImageDraw.Draw(sheen)
    shd.polygon(
        [
            (int(lid_inner_w * 0.54), 0),
            (lid_inner_w, 0),
            (lid_inner_w, lid_inner_h),
            (int(lid_inner_w * 0.78), lid_inner_h),
        ],
        fill=(255, 255, 255, 24),
    )
    shd.rectangle(
        [bezel_side, bezel_top, bezel_side + SCREEN_W - 1, bezel_top + SCREEN_H - 1],
        fill=(0, 0, 0, 0),
    )
    glass_layer = Image.alpha_composite(glass_layer, sheen)

    # Top-center discreet webcam lens
    cam_diam = 24 * SCALE
    cam_hi = Image.new("RGBA", (cam_diam * 4, cam_diam * 4), (0, 0, 0, 0))
    cd = ImageDraw.Draw(cam_hi)
    cd.ellipse([20 * SCALE, 20 * SCALE, (cam_diam - 5) * 4, (cam_diam - 5) * 4], fill=(28, 36, 52, 255), outline=(255, 255, 255, 55), width=4 * SCALE)
    cd.ellipse([34 * SCALE, 34 * SCALE, (cam_diam - 8) * 4, (cam_diam - 8) * 4], fill=(5, 8, 14, 255))
    cd.ellipse([40 * SCALE, 38 * SCALE, 50 * SCALE, 48 * SCALE], fill=(95, 138, 196, 175))
    cam_aa = cam_hi.resize((cam_diam, cam_diam), Image.Resampling.LANCZOS)
    glass_layer.alpha_composite(cam_aa, ((lid_inner_w - cam_diam) // 2, bezel_top // 2 - 12 * SCALE))

    # Subtle screen edge recess border
    gd = ImageDraw.Draw(glass_layer)
    gd.rectangle(
        [bezel_side - 1 * SCALE, bezel_top - 1 * SCALE, bezel_side + SCREEN_W, bezel_top + SCREEN_H],
        outline=(255, 255, 255, 18),
        width=SCALE,
    )

    lid_glass = Image.new("RGBA", (lid_inner_w, lid_inner_h), (0, 0, 0, 0))
    lid_glass.paste(glass_layer, (0, 0), glass_mask)
    canvas.alpha_composite(lid_glass, (lid_x + rim, lid_y + rim))

    # 5. Protruding brushed-silver aluminum unibody baseplate
    base_vgrad = make_vertical_gradient(
        base_w,
        base_h,
        [
            (0.0, (148, 157, 173, 255)),
            (0.05, (248, 250, 253, 255)),
            (0.24, (234, 238, 244, 255)),
            (0.58, (214, 220, 230, 255)),
            (0.82, (181, 190, 203, 255)),
            (1.0, (124, 134, 150, 255)),
        ],
    )
    base_hshad = make_horizontal_gradient(
        base_w,
        base_h,
        [
            (0.0, (108, 116, 130, 155)),
            (0.02, (250, 252, 255, 175)),
            (0.05, (210, 216, 228, 55)),
            (0.14, (255, 255, 255, 35)),
            (0.32, (255, 255, 255, 0)),
            (0.68, (255, 255, 255, 0)),
            (0.86, (255, 255, 255, 35)),
            (0.95, (210, 216, 228, 55)),
            (0.98, (250, 252, 255, 175)),
            (1.0, (108, 116, 130, 155)),
        ],
    )
    base_comp = Image.alpha_composite(base_vgrad, base_hshad)

    # Centered notch
    notch_w = 250 * SCALE
    notch_h = 16 * SCALE
    nx = (base_w - notch_w) // 2
    notch_vgrad = make_vertical_gradient(
        notch_w,
        notch_h,
        [
            (0.0, (94, 103, 118, 255)),
            (0.55, (142, 151, 166, 255)),
            (1.0, (198, 206, 218, 255)),
        ],
    )
    notch_side = make_horizontal_gradient(
        notch_w,
        notch_h,
        [
            (0.0, (58, 66, 80, 160)),
            (0.05, (0, 0, 0, 0)),
            (0.95, (0, 0, 0, 0)),
            (1.0, (58, 66, 80, 160)),
        ],
    )
    notch_fill = Image.alpha_composite(notch_vgrad, notch_side)
    notch_mask = rounded_rect_mask((notch_w, notch_h), (0, 0, 13 * SCALE, 13 * SCALE))
    base_comp.paste(notch_fill, (nx, 0), notch_mask)

    lip = Image.new("RGBA", (notch_w + 4 * SCALE, 3 * SCALE), (255, 255, 255, 210))
    lip_mask = rounded_rect_mask((notch_w + 4 * SCALE, 3 * SCALE), (0, 0, 2 * SCALE, 2 * SCALE))
    lip_masked = Image.new("RGBA", (notch_w + 4 * SCALE, 3 * SCALE), (0, 0, 0, 0))
    lip_masked.paste(lip, (0, 0), lip_mask)
    base_comp.alpha_composite(lip_masked, (nx - 2 * SCALE, notch_h - 1 * SCALE))

    base_mask = rounded_rect_mask((base_w, base_h), (4 * SCALE, 4 * SCALE, 40 * SCALE, 40 * SCALE))
    inner_eroded = base_mask.filter(ImageFilter.MinFilter(5))
    edge_alpha = ImageChops.subtract(base_mask, inner_eroded)
    border_img = Image.new("RGBA", (base_w, base_h), (120, 130, 146, 130))
    border_layer = Image.new("RGBA", (base_w, base_h), (0, 0, 0, 0))
    border_layer.paste(border_img, (0, 0), edge_alpha)
    base_comp = Image.alpha_composite(base_comp, border_layer)

    base_final = Image.new("RGBA", (base_w, base_h), (0, 0, 0, 0))
    base_final.paste(base_comp, (0, 0), base_mask)
    canvas.alpha_composite(base_final, (base_x, base_y))

    return canvas, (screen_x, screen_y)


def build_tablet_template() -> tuple[Image.Image, Image.Image, tuple[int, int]]:
    """Build the 3056x1992 2x Retina Straight Silver & Glass Tablet template + rounded inner screen mask."""
    margin_x = 18 * SCALE          # 36
    margin_top = 10 * SCALE        # 20
    shadow_pad_bottom = 34 * SCALE # 68
    bezel = 22 * SCALE             # 44
    rim = 4 * SCALE                # 8
    inner_radius = 20 * SCALE      # 40
    outer_radius = inner_radius + bezel + rim  # 92

    tablet_w = SCREEN_W + 2 * bezel + 2 * rim   # 2984
    tablet_h = SCREEN_H + 2 * bezel + 2 * rim   # 1904
    canvas_w = tablet_w + 2 * margin_x          # 3056
    canvas_h = tablet_h + margin_top + shadow_pad_bottom  # 1992

    tx, ty = margin_x, margin_top
    sx, sy = tx + rim + bezel, ty + rim + bezel

    canvas = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))

    # 1. Soft transparent drop shadow below tablet
    sh1 = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))
    sd1 = ImageDraw.Draw(sh1)
    sd1.rounded_rectangle([tx + 10 * SCALE, ty + 14 * SCALE, tx + tablet_w - 10 * SCALE, ty + tablet_h + 12 * SCALE], radius=outer_radius, fill=(15, 23, 42, 62))
    canvas.alpha_composite(sh1.filter(ImageFilter.GaussianBlur(radius=14 * SCALE)))

    sh2 = Image.new("RGBA", (canvas_w, canvas_h), (0, 0, 0, 0))
    sd2 = ImageDraw.Draw(sh2)
    sd2.rounded_rectangle([tx + 4 * SCALE, ty + 6 * SCALE, tx + tablet_w - 4 * SCALE, ty + tablet_h + 5 * SCALE], radius=outer_radius, fill=(15, 23, 42, 34))
    canvas.alpha_composite(sh2.filter(ImageFilter.GaussianBlur(radius=4 * SCALE)))

    # 2. Tactile depth lip
    lip_grad = make_horizontal_gradient(
        tablet_w,
        tablet_h,
        [
            (0.0, (130, 140, 156, 255)),
            (0.15, (168, 178, 192, 255)),
            (0.5, (144, 154, 170, 255)),
            (0.85, (168, 178, 192, 255)),
            (1.0, (130, 140, 156, 255)),
        ],
    )
    lip_mask = rounded_rect_mask((tablet_w, tablet_h), (outer_radius,) * 4)
    lip_layer = Image.new("RGBA", (tablet_w, tablet_h), (0, 0, 0, 0))
    lip_layer.paste(lip_grad, (0, 0), lip_mask)
    canvas.alpha_composite(lip_layer, (tx, ty + 4 * SCALE))

    # 3. Outer aluminum rim
    rim_grad = make_vertical_gradient(
        tablet_w,
        tablet_h,
        [
            (0.0, (232, 237, 245, 255)),
            (0.5, (204, 212, 224, 255)),
            (1.0, (176, 184, 198, 255)),
        ],
    )
    rim_mask = rounded_rect_mask((tablet_w, tablet_h), (outer_radius,) * 4)
    rim_layer = Image.new("RGBA", (tablet_w, tablet_h), (0, 0, 0, 0))
    rim_layer.paste(rim_grad, (0, 0), rim_mask)
    canvas.alpha_composite(rim_layer, (tx, ty))

    # 4. Glass bezel
    inner_w, inner_h = tablet_w - 2 * rim, tablet_h - 2 * rim
    glass_layer = Image.new("RGBA", (inner_w, inner_h), (9, 11, 14, 255))
    glass_mask = rounded_rect_mask((inner_w, inner_h), (inner_radius + bezel,) * 4)

    sheen = Image.new("RGBA", (inner_w, inner_h), (0, 0, 0, 0))
    shd = ImageDraw.Draw(sheen)
    shd.polygon(
        [
            (int(inner_w * 0.60), 0),
            (inner_w, 0),
            (inner_w, inner_h),
            (int(inner_w * 0.80), inner_h),
        ],
        fill=(255, 255, 255, 20),
    )
    shd.rounded_rectangle([bezel, bezel, bezel + SCREEN_W - 1, bezel + SCREEN_H - 1], radius=inner_radius, fill=(0, 0, 0, 0))
    glass_layer = Image.alpha_composite(glass_layer, sheen)

    cam_diam = 16 * SCALE
    cam_hi = Image.new("RGBA", (cam_diam * 4, cam_diam * 4), (0, 0, 0, 0))
    cd = ImageDraw.Draw(cam_hi)
    cd.ellipse([14 * SCALE, 14 * SCALE, (cam_diam - 2) * 4, (cam_diam - 2) * 4], fill=(24, 32, 46, 255), outline=(255, 255, 255, 48), width=3 * SCALE)
    cd.ellipse([24 * SCALE, 24 * SCALE, (cam_diam - 5) * 4, (cam_diam - 5) * 4], fill=(5, 7, 12, 255))
    cam_aa = cam_hi.resize((cam_diam, cam_diam), Image.Resampling.LANCZOS)
    glass_layer.alpha_composite(cam_aa, ((inner_w - cam_diam) // 2, bezel // 2 - 8 * SCALE))

    gd = ImageDraw.Draw(glass_layer)
    gd.rounded_rectangle(
        [bezel - 1 * SCALE, bezel - 1 * SCALE, bezel + SCREEN_W, bezel + SCREEN_H],
        radius=inner_radius + 1 * SCALE,
        outline=(255, 255, 255, 22),
        width=SCALE,
    )

    glass_final = Image.new("RGBA", (inner_w, inner_h), (0, 0, 0, 0))
    glass_final.paste(glass_layer, (0, 0), glass_mask)
    canvas.alpha_composite(glass_final, (tx + rim, ty + rim))

    screen_mask = rounded_rect_mask((SCREEN_W, SCREEN_H), (inner_radius,) * 4)
    return canvas, screen_mask, (sx, sy)


def collect_active_images() -> tuple[set[str], set[str]]:
    """Scan src/pages and Home components for hero laptop vs internal tablet screenshots."""
    hero_imgs: set[str] = {"C05-Coding.webp"}
    internal_imgs: set[str] = {"C06-AIAllowed.webp", "H13-Integrity.webp", "H11-Report.webp"}

    for dp, _, fs in os.walk(ROOT / "src" / "pages"):
        for f in sorted(fs):
            if not f.endswith(".tsx"):
                continue
            text = (Path(dp) / f).read_text(encoding="utf8")
            secs = list(re.finditer(r'<section\b[^>]*class(?:Name)?="([^"]*)"', text))
            for m in re.finditer(r'/images/(?:product|mockups/(?:laptop|tablet))/([^\s"\'<>\\]+)', text):
                around = text[max(0, m.start() - 120) : min(len(text), m.end() + 60)]
                if "ProductScreenMockup" not in around and 'class="shot"' not in around and 'className="shot"' not in around:
                    continue
                pos = m.start()
                sec = ""
                for s in secs:
                    if s.start() < pos:
                        sec = s.group(1)
                stem = Path(m.group(1)).stem
                matches = [p.name for p in PRODUCT_DIR.iterdir() if p.stem == stem]
                if not matches:
                    continue
                src_name = matches[0]
                if "phero" in sec:
                    hero_imgs.add(src_name)
                elif "section" in sec:
                    internal_imgs.add(src_name)

    return hero_imgs, internal_imgs


def load_ui(filename: str) -> Image.Image:
    src = Image.open(PRODUCT_DIR / filename).convert("RGBA")
    if src.size != (SCREEN_W, SCREEN_H):
        src = src.resize((SCREEN_W, SCREEN_H), Image.Resampling.LANCZOS)
        src = src.filter(ImageFilter.UnsharpMask(radius=1.2, percent=120, threshold=1))
    return src


def render_laptop(template: Image.Image, xy: tuple[int, int], filename: str, out_dir: Path) -> Path:
    frame = template.copy()
    frame.paste(load_ui(filename), xy)
    stem = Path(filename).stem
    out_path = out_dir / f"{stem}.webp"
    frame.save(out_path, "WEBP", lossless=True, method=6)
    return out_path


def render_tablet(template: Image.Image, mask: Image.Image, xy: tuple[int, int], filename: str, out_dir: Path) -> Path:
    frame = template.copy()
    frame.paste(load_ui(filename), xy, mask)
    stem = Path(filename).stem
    out_path = out_dir / f"{stem}.webp"
    frame.save(out_path, "WEBP", lossless=True, method=6)
    return out_path


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--sample", action="store_true", help="Render 1 sample laptop + 1 sample tablet")
    parser.add_argument("--all", action="store_true", help="Render both laptop & tablet mockups for all files")
    args = parser.parse_args()

    LAPTOP_DIR.mkdir(parents=True, exist_ok=True)
    TABLET_DIR.mkdir(parents=True, exist_ok=True)

    print(f"Building 2x Retina hardware templates (Screen: {SCREEN_W}x{SCREEN_H})...")
    laptop_tpl, laptop_xy = build_laptop_template()
    tablet_tpl, tablet_mask, tablet_xy = build_tablet_template()
    print(f"Laptop template: {laptop_tpl.size}, Tablet template: {tablet_tpl.size}")

    if args.sample:
        lp = render_laptop(laptop_tpl, laptop_xy, "C05-Coding.webp", LAPTOP_DIR)
        tp = render_tablet(tablet_tpl, tablet_mask, tablet_xy, "C06-AIAllowed.webp", TABLET_DIR)
        print(f"Sample laptop ({laptop_tpl.size}): {lp} -> {lp.stat().st_size // 1024} KB")
        print(f"Sample tablet ({tablet_tpl.size}): {tp} -> {tp.stat().st_size // 1024} KB")
        return

    if args.all:
        all_files = sorted(f.name for f in PRODUCT_DIR.iterdir() if f.suffix.lower() in {".png", ".webp", ".jpg"})
        hero_files = all_files
        internal_files = all_files
    else:
        hero_set, internal_set = collect_active_images()
        hero_files = sorted(hero_set)
        internal_files = sorted(internal_set)

    print(f"Rendering {len(hero_files)} laptop mockups and {len(internal_files)} tablet mockups at 2x Retina...")
    total_kb = 0
    for i, f in enumerate(hero_files, 1):
        p = render_laptop(laptop_tpl, laptop_xy, f, LAPTOP_DIR)
        kb = p.stat().st_size // 1024
        total_kb += kb
        print(f"[{i}/{len(hero_files)}] Laptop: {p.name} ({kb} KB)")

    for j, f in enumerate(internal_files, 1):
        p = render_tablet(tablet_tpl, tablet_mask, tablet_xy, f, TABLET_DIR)
        kb = p.stat().st_size // 1024
        total_kb += kb
        print(f"[{j}/{len(internal_files)}] Tablet: {p.name} ({kb} KB)")

    print(
        f"\nSUCCESS! Generated {len(hero_files)} laptop mockups ({laptop_tpl.size[0]}x{laptop_tpl.size[1]}) "
        f"and {len(internal_files)} tablet mockups ({tablet_tpl.size[0]}x{tablet_tpl.size[1]}), total {total_kb} KB"
    )


if __name__ == "__main__":
    main()
