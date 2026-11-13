"""
Generates 6 studio-grade, 2x Retina (1200x675) editorial card illustrations
for the SetBenchmark Engineering Blog. Each illustration visually and directly
communicates the core thesis of the article with authentic UI snippets,
badges, and telemetry.

Outputs:
  public/images/blog/cards/card-ai-assessment.webp
  public/images/blog/cards/card-prevent-cheating.webp
  public/images/blog/cards/card-campus-hiring.webp
  public/images/blog/cards/card-fairness-rubric.webp
  public/images/blog/cards/card-real-work-vs-puzzles.webp
  public/images/blog/cards/card-candidate-privacy.webp
"""

from __future__ import annotations

import math
from pathlib import Path
from PIL import Image, ImageChops, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "public" / "images" / "blog" / "cards"
FONTS_DIR = Path(r"C:\Users\Admin\Downloads\SetBenchmark_Figma_Import\html-prototype\fonts")

WIDTH = 1200
HEIGHT = 675

# Fonts
font_sans_bold = lambda sz: ImageFont.truetype(str(FONTS_DIR / "InstrumentSans-Bold.ttf"), sz)
font_sans_reg = lambda sz: ImageFont.truetype(str(FONTS_DIR / "InstrumentSans-Regular.ttf"), sz)
font_mono_bold = lambda sz: ImageFont.truetype(str(FONTS_DIR / "JetBrainsMono-Bold.ttf"), sz)
font_mono_reg = lambda sz: ImageFont.truetype(str(FONTS_DIR / "JetBrainsMono-Regular.ttf"), sz)


def make_gradient(w: int, h: int, c_top: tuple[int, int, int], c_bot: tuple[int, int, int]) -> Image.Image:
    """Create a vertical gradient image."""
    base = Image.new("RGBA", (w, h))
    draw = ImageDraw.Draw(base)
    for y in range(h):
        t = y / max(1, h - 1)
        r = int(c_top[0] + (c_bot[0] - c_top[0]) * t)
        g = int(c_top[1] + (c_bot[1] - c_top[1]) * t)
        b = int(c_top[2] + (c_bot[2] - c_top[2]) * t)
        draw.line([(0, y), (w, y)], fill=(r, g, b, 255))
    return base


def add_radial_glow(img: Image.Image, cx: int, cy: int, radius: int, color: tuple[int, int, int, int]) -> None:
    """Add a soft radial ambient light aura."""
    glow = Image.new("RGBA", (radius * 2, radius * 2), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    for r in range(radius, 0, -4):
        t = 1.0 - (r / radius)
        alpha = int(color[3] * (t * t))
        gd.ellipse([radius - r, radius - r, radius + r, radius + r], fill=(color[0], color[1], color[2], alpha))
    glow = glow.filter(ImageFilter.GaussianBlur(radius=radius // 4))
    img.alpha_composite(glow, (cx - radius, cy - radius))


def draw_window_dots(draw: ImageDraw.ImageDraw, x: int, y: int, spacing: int = 14) -> None:
    """Draw red, yellow, green macOS dots."""
    dots = [(255, 95, 86), (255, 189, 46), (39, 201, 63)]
    for i, col in enumerate(dots):
        cx = x + i * spacing
        draw.ellipse([cx - 4, y - 4, cx + 4, y + 4], fill=col)


def create_card_ai_assessment() -> Image.Image:
    """Card 1: How to Assess Developers in the Age of AI."""
    img = make_gradient(WIDTH, HEIGHT, (14, 16, 32), (24, 20, 52))
    add_radial_glow(img, 600, 280, 360, (122, 63, 242, 65))
    add_radial_glow(img, 980, 480, 240, (38, 208, 124, 45))

    # Floating IDE window
    win_w, win_h = 860, 470
    win_x = (WIDTH - win_w) // 2 - 40
    win_y = 60

    # Window shadow
    sh = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    shd = ImageDraw.Draw(sh)
    shd.rounded_rectangle([win_x + 10, win_y + 16, win_x + win_w + 10, win_y + win_h + 16], radius=18, fill=(0, 0, 0, 110))
    img.alpha_composite(sh.filter(ImageFilter.GaussianBlur(16)))

    # Window body
    win = Image.new("RGBA", (win_w, win_h), (21, 26, 46, 255))
    wd = ImageDraw.Draw(win)
    wd.rounded_rectangle([0, 0, win_w - 1, win_h - 1], radius=16, outline=(255, 255, 255, 28), width=1)

    # Titlebar
    wd.rectangle([0, 0, win_w - 1, 46], fill=(16, 20, 36, 255))
    wd.line([(0, 46), (win_w - 1, 46)], fill=(255, 255, 255, 20), width=1)
    draw_window_dots(wd, 26, 23)

    # Tab
    wd.rounded_rectangle([90, 8, 250, 40], radius=6, fill=(28, 35, 62, 255), outline=(255, 255, 255, 24), width=1)
    wd.text((106, 17), "payment_handler.go", font=font_mono_reg(14), fill=(230, 235, 250))
    wd.text((270, 17), "store.go", font=font_mono_reg(14), fill=(130, 140, 170))
    wd.text((360, 17), "handler_test.go", font=font_mono_reg(14), fill=(130, 140, 170))

    # Top right policy pill
    wd.rounded_rectangle([win_w - 240, 10, win_w - 20, 38], radius=14, fill=(122, 63, 242, 60), outline=(122, 63, 242, 160), width=1)
    wd.text((win_w - 224, 16), "✦ AI Copilot Allowed", font=font_sans_bold(13), fill=(225, 205, 255))

    # Code lines
    lines = [
        ("21", "func (h *Handler) CreatePayment(w http.ResponseWriter, r *http.Request) {", (220, 226, 245), False),
        ("22", "    key := r.Header.Get(\"Idempotency-Key\")", (220, 226, 245), False),
        ("23", "    body, _ := io.ReadAll(r.Body)", (220, 226, 245), False),
        ("24", "    hash := sha256Hex(body)  // candidate check added", (98, 225, 155), True),
        ("25", "    if prev, ok := h.store.Get(key); ok {", (98, 225, 155), True),
        ("26", "        if prev.Hash != hash { writeErr(w, 409); return }", (98, 225, 155), True),
        ("27", "        writeJSON(w, prev.Status, prev.Body); return", (98, 225, 155), True),
        ("28", "    }", (98, 225, 155), True),
        ("29", "    res, err := h.svc.Charge(r.Context(), body)", (220, 226, 245), False),
        ("30", "    if err == nil { h.store.Put(key, hash, res, 24*time.Hour) }", (220, 226, 245), False),
        ("31", "}", (220, 226, 245), False),
    ]

    for idx, (ln, code, col, is_diff) in enumerate(lines):
        y_pos = 66 + idx * 32
        if is_diff:
            wd.rectangle([0, y_pos - 4, win_w - 1, y_pos + 26], fill=(34, 160, 90, 40))
        wd.text((20, y_pos + 2), ln, font=font_mono_reg(13), fill=(100, 110, 140))
        wd.text((64, y_pos + 2), code, font=font_mono_reg(14), fill=col)

    # Status bar
    wd.rectangle([0, win_h - 40, win_w - 1, win_h - 1], fill=(16, 20, 36, 255))
    wd.line([(0, win_h - 40), (win_w - 1, win_h - 40)], fill=(255, 255, 255, 20), width=1)
    wd.text((20, win_h - 28), "✓ 6/6 Unit tests passing", font=font_mono_bold(13), fill=(38, 208, 124))
    wd.text((260, win_h - 28), "Execution: 0.12s", font=font_mono_reg(13), fill=(140, 150, 175))

    img.alpha_composite(win, (win_x, win_y))

    # Floating Scored AI Fluency Review Card (overlapping right side)
    badge_w, badge_h = 430, 260
    badge_x = WIDTH - badge_w - 65
    badge_y = 310

    # Badge shadow
    bsh = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    bshd = ImageDraw.Draw(bsh)
    bshd.rounded_rectangle([badge_x + 8, badge_y + 12, badge_x + badge_w + 8, badge_y + badge_h + 12], radius=20, fill=(0, 0, 0, 130))
    img.alpha_composite(bsh.filter(ImageFilter.GaussianBlur(18)))

    # Badge body
    badge = Image.new("RGBA", (badge_w, badge_h), (255, 255, 255, 255))
    bd = ImageDraw.Draw(badge)
    bd.rounded_rectangle([0, 0, badge_w - 1, badge_h - 1], radius=18, outline=(168, 85, 247, 120), width=2)

    # Top header pill
    bd.rounded_rectangle([20, 18, 220, 46], radius=14, fill=(243, 237, 255, 255))
    bd.text((34, 25), "AI FLUENCY REVIEW", font=font_sans_bold(12), fill=(108, 44, 218))

    bd.rounded_rectangle([badge_w - 150, 18, badge_w - 20, 46], radius=14, fill=(234, 250, 240, 255))
    bd.text((badge_w - 136, 25), "✓ Top 5% Bar", font=font_sans_bold(12), fill=(18, 128, 68))

    # Big score
    bd.text((22, 62), "94%", font=font_sans_bold(38), fill=(15, 23, 42))
    bd.text((120, 72), "Prompt Judgment · Rubric 19/20", font=font_sans_bold(14), fill=(71, 85, 105))
    bd.text((120, 94), "Scored by Lead Engineering Manager", font=font_sans_reg(13), fill=(120, 130, 150))

    bd.line([(22, 132), (badge_w - 22, 132)], fill=(235, 240, 248, 255), width=1)

    # Checklist items
    checks = [
        "Prompted for race condition edge-cases",
        "Caught & rejected incorrect AI retry logic",
        "Verified idempotency with negative assertions",
    ]
    for i, c in enumerate(checks):
        cy = 146 + i * 32
        bd.ellipse([24, cy + 2, 38, cy + 16], fill=(38, 208, 124, 45))
        bd.text((27, cy + 3), "✓", font=font_sans_bold(11), fill=(18, 128, 68))
        bd.text((46, cy + 2), c, font=font_sans_reg(13.5), fill=(30, 41, 59))

    img.alpha_composite(badge, (badge_x, badge_y))
    return img


def create_card_prevent_cheating() -> Image.Image:
    """Card 2: How to Prevent Cheating in Online Coding Tests."""
    img = make_gradient(WIDTH, HEIGHT, (11, 25, 23), (16, 36, 34))
    add_radial_glow(img, 600, 280, 360, (38, 208, 124, 55))
    add_radial_glow(img, 980, 480, 240, (14, 165, 233, 45))

    # Floating window: Integrity Signal Audit
    win_w, win_h = 860, 470
    win_x = (WIDTH - win_w) // 2 - 40
    win_y = 60

    sh = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    shd = ImageDraw.Draw(sh)
    shd.rounded_rectangle([win_x + 10, win_y + 16, win_x + win_w + 10, win_y + win_h + 16], radius=18, fill=(0, 0, 0, 110))
    img.alpha_composite(sh.filter(ImageFilter.GaussianBlur(16)))

    win = Image.new("RGBA", (win_w, win_h), (16, 24, 28, 255))
    wd = ImageDraw.Draw(win)
    wd.rounded_rectangle([0, 0, win_w - 1, win_h - 1], radius=16, outline=(255, 255, 255, 28), width=1)

    # Titlebar
    wd.rectangle([0, 0, win_w - 1, 46], fill=(12, 18, 22, 255))
    wd.line([(0, 46), (win_w - 1, 46)], fill=(255, 255, 255, 20), width=1)
    draw_window_dots(wd, 26, 23)
    wd.text((90, 16), "SetBenchmark Integrity Evidence Console", font=font_sans_bold(14), fill=(230, 240, 238))

    # Left: Code similarity diff side-by-side
    col_w = (win_w - 60) // 2
    # Candidate Box
    wd.rounded_rectangle([24, 62, 24 + col_w, 360], radius=10, fill=(22, 32, 38, 255), outline=(255, 255, 255, 18), width=1)
    wd.text((38, 76), "Candidate Submission · Daniel Kim", font=font_sans_bold(13), fill=(255, 255, 255))
    wd.rounded_rectangle([24 + col_w - 110, 72, 24 + col_w - 14, 96], radius=6, fill=(239, 68, 68, 50))
    wd.text((24 + col_w - 100, 76), "Match 91%", font=font_sans_bold(12), fill=(248, 113, 113))

    cand_code = [
        "func (b *Batcher) Flush(ctx) error {",
        "  for i := range b.queue {",
        "    if err := b.process(queue[i]); err {",
        "      // structural clone detected",
        "      return ErrTimeout",
        "    }",
        "  }",
    ]
    for i, line in enumerate(cand_code):
        y = 114 + i * 28
        if "structural clone" in line:
            wd.rectangle([28, y - 4, 24 + col_w - 4, y + 24], fill=(239, 68, 68, 30))
        wd.text((38, y), line, font=font_mono_reg(12), fill=(240, 245, 250) if i < 3 else (255, 150, 150))

    # Reference Solution Box
    rx = 24 + col_w + 12
    wd.rounded_rectangle([rx, 62, rx + col_w, 360], radius=10, fill=(22, 32, 38, 255), outline=(255, 255, 255, 18), width=1)
    wd.text((rx + 14, 76), "Reference Leak Corpus · LeetCode #218", font=font_sans_bold(13), fill=(200, 210, 220))

    ref_code = [
        "func (b *Batcher) Flush(ctx) error {",
        "  for i := range b.queue {",
        "    if err := b.process(queue[i]); err {",
        "      // identical AST structure",
        "      return ErrTimeout",
        "    }",
        "  }",
    ]
    for i, line in enumerate(ref_code):
        y = 114 + i * 28
        if "identical AST" in line:
            wd.rectangle([rx + 4, y - 4, rx + col_w - 4, y + 24], fill=(239, 68, 68, 30))
        wd.text((rx + 14, y), line, font=font_mono_reg(12), fill=(180, 195, 210))

    # Bottom signals banner
    wd.rounded_rectangle([24, 380, win_w - 24, 444], radius=10, fill=(12, 18, 22, 255), outline=(255, 255, 255, 18), width=1)
    wd.text((40, 400), "Keystroke Cadence: 180 wpm (Normal human pauses)", font=font_mono_reg(13), fill=(150, 220, 180))
    wd.text((460, 400), "Tab Switches: 1 (API reference doc)", font=font_mono_reg(13), fill=(150, 220, 180))

    img.alpha_composite(win, (win_x, win_y))

    # Floating Human Review Verified Badge
    badge_w, badge_h = 440, 250
    badge_x = WIDTH - badge_w - 65
    badge_y = 310

    bsh = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    bshd = ImageDraw.Draw(bsh)
    bshd.rounded_rectangle([badge_x + 8, badge_y + 12, badge_x + badge_w + 8, badge_y + badge_h + 12], radius=20, fill=(0, 0, 0, 130))
    img.alpha_composite(bsh.filter(ImageFilter.GaussianBlur(18)))

    badge = Image.new("RGBA", (badge_w, badge_h), (255, 255, 255, 255))
    bd = ImageDraw.Draw(badge)
    bd.rounded_rectangle([0, 0, badge_w - 1, badge_h - 1], radius=18, outline=(38, 208, 124, 130), width=2)

    bd.rounded_rectangle([20, 18, 250, 46], radius=14, fill=(234, 250, 240, 255))
    bd.text((34, 25), "HUMAN-REVIEWED DECISION", font=font_sans_bold(12), fill=(18, 128, 68))

    bd.text((22, 64), "Zero False Positives", font=font_sans_bold(26), fill=(15, 23, 42))
    bd.text((22, 98), "Double-Blind Human Audit Protocol", font=font_sans_bold(14), fill=(71, 85, 105))

    bd.line([(22, 128), (badge_w - 22, 128)], fill=(235, 240, 248, 255), width=1)

    points = [
        "Keystroke replay verified natural composition",
        "AST similarity isolated to standard boilerplate",
        "Outcome: Candidate cleared, no wrongful rejection",
    ]
    for i, p in enumerate(points):
        cy = 142 + i * 32
        bd.ellipse([24, cy + 2, 38, cy + 16], fill=(38, 208, 124, 45))
        bd.text((27, cy + 3), "✓", font=font_sans_bold(11), fill=(18, 128, 68))
        bd.text((46, cy + 2), p, font=font_sans_reg(13.5), fill=(30, 41, 59))

    img.alpha_composite(badge, (badge_x, badge_y))
    return img


def create_card_campus_hiring() -> Image.Image:
    """Card 3: Campus Hiring with Coding Assessments."""
    img = make_gradient(WIDTH, HEIGHT, (12, 23, 45), (18, 38, 72))
    add_radial_glow(img, 600, 280, 360, (59, 130, 246, 55))
    add_radial_glow(img, 980, 480, 240, (38, 208, 124, 45))

    win_w, win_h = 860, 470
    win_x = (WIDTH - win_w) // 2 - 40
    win_y = 60

    sh = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    shd = ImageDraw.Draw(sh)
    shd.rounded_rectangle([win_x + 10, win_y + 16, win_x + win_w + 10, win_y + win_h + 16], radius=18, fill=(0, 0, 0, 110))
    img.alpha_composite(sh.filter(ImageFilter.GaussianBlur(16)))

    win = Image.new("RGBA", (win_w, win_h), (16, 26, 48, 255))
    wd = ImageDraw.Draw(win)
    wd.rounded_rectangle([0, 0, win_w - 1, win_h - 1], radius=16, outline=(255, 255, 255, 28), width=1)

    # Titlebar
    wd.rectangle([0, 0, win_w - 1, 46], fill=(12, 20, 38, 255))
    wd.line([(0, 46), (win_w - 1, 46)], fill=(255, 255, 255, 20), width=1)
    draw_window_dots(wd, 26, 23)
    wd.text((90, 16), "Campus Drive Console · 2,400 Candidates · 18 Universities", font=font_sans_bold(14), fill=(230, 240, 255))

    # Left: Histogram score distribution
    wd.rounded_rectangle([24, 62, 380, 360], radius=10, fill=(20, 32, 58, 255), outline=(255, 255, 255, 18), width=1)
    wd.text((40, 78), "Score Percentile Distribution", font=font_sans_bold(13), fill=(255, 255, 255))

    bars = [18, 35, 62, 110, 145, 120, 75, 42, 18]
    for i, b in enumerate(bars):
        bx = 50 + i * 34
        by = 310 - b
        col = (38, 208, 124, 255) if i >= 6 else (59, 130, 246, 200)
        wd.rounded_rectangle([bx, by, bx + 24, 310], radius=4, fill=col)

    # Cut-off dotted line
    wd.line([(240, 130), (240, 320)], fill=(38, 208, 124, 255), width=2)
    wd.text((150, 110), "Cut-off Bar >= 82%", font=font_sans_bold(12), fill=(38, 208, 124))

    # Right: Shortlist Table
    rx = 400
    rw = win_w - rx - 24
    wd.rounded_rectangle([rx, 62, rx + rw, 360], radius=10, fill=(20, 32, 58, 255), outline=(255, 255, 255, 18), width=1)
    wd.text((rx + 16, 78), "Top Drive Shortlist (Immediate Interview)", font=font_sans_bold(13), fill=(255, 255, 255))

    candidates = [
        ("#1", "Ananya R.", "Score 98/100", "IIT Bombay", "Shortlisted"),
        ("#2", "Vikram S.", "Score 96/100", "BITS Pilani", "Shortlisted"),
        ("#3", "Sneha P.", "Score 94/100", "NIT Trichy", "Shortlisted"),
        ("#4", "Aditya K.", "Score 92/100", "IIIT Hyderabad", "Shortlisted"),
    ]
    for i, (rnk, name, scr, clg, st) in enumerate(candidates):
        cy = 116 + i * 54
        wd.rectangle([rx + 8, cy - 4, rx + rw - 8, cy + 44], fill=(26, 42, 74, 255) if i % 2 == 0 else (20, 32, 58, 255))
        wd.text((rx + 18, cy + 10), rnk, font=font_mono_bold(13), fill=(38, 208, 124))
        wd.text((rx + 56, cy + 10), name, font=font_sans_bold(14), fill=(255, 255, 255))
        wd.text((rx + 180, cy + 10), scr, font=font_mono_reg(13), fill=(200, 225, 255))
        wd.text((rx + 290, cy + 10), clg, font=font_sans_reg(12.5), fill=(140, 165, 200))

    # Bottom stats
    wd.rounded_rectangle([24, 380, win_w - 24, 444], radius=10, fill=(12, 20, 38, 255), outline=(255, 255, 255, 18), width=1)
    wd.text((40, 400), "Drive Turnaround: 2,400 attempts graded in < 2 hours", font=font_mono_reg(13), fill=(200, 225, 255))
    wd.text((530, 400), "Interview Yield: 120 finalists selected", font=font_mono_bold(13), fill=(38, 208, 124))

    img.alpha_composite(win, (win_x, win_y))

    # Floating Campus Drive Stats Badge
    badge_w, badge_h = 440, 250
    badge_x = WIDTH - badge_w - 65
    badge_y = 310

    bsh = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    bshd = ImageDraw.Draw(bsh)
    bshd.rounded_rectangle([badge_x + 8, badge_y + 12, badge_x + badge_w + 8, badge_y + badge_h + 12], radius=20, fill=(0, 0, 0, 130))
    img.alpha_composite(bsh.filter(ImageFilter.GaussianBlur(18)))

    badge = Image.new("RGBA", (badge_w, badge_h), (255, 255, 255, 255))
    bd = ImageDraw.Draw(badge)
    bd.rounded_rectangle([0, 0, badge_w - 1, badge_h - 1], radius=18, outline=(59, 130, 246, 130), width=2)

    bd.rounded_rectangle([20, 18, 230, 46], radius=14, fill=(239, 246, 255, 255))
    bd.text((34, 25), "CAMPUS RECRUITMENT", font=font_sans_bold(12), fill=(29, 78, 216))

    bd.text((22, 64), "High-Volume Parity", font=font_sans_bold(26), fill=(15, 23, 42))
    bd.text((22, 98), "Ranked Fairly with Standardized Rubrics", font=font_sans_bold(14), fill=(71, 85, 105))

    bd.line([(22, 128), (badge_w - 22, 128)], fill=(235, 240, 248, 255), width=1)

    points = [
        "100% automated test suite execution",
        "Anti-leak rotating dynamic question pools",
        "Direct export to Greenhouse, Lever & ATS",
    ]
    for i, p in enumerate(points):
        cy = 142 + i * 32
        bd.ellipse([24, cy + 2, 38, cy + 16], fill=(59, 130, 246, 45))
        bd.text((27, cy + 3), "✓", font=font_sans_bold(11), fill=(29, 78, 216))
        bd.text((46, cy + 2), p, font=font_sans_reg(13.5), fill=(30, 41, 59))

    img.alpha_composite(badge, (badge_x, badge_y))
    return img


def create_card_fairness_rubric() -> Image.Image:
    """Card 4: 12-Point Rubric for Fair Coding Assessments."""
    img = make_gradient(WIDTH, HEIGHT, (22, 16, 42), (36, 24, 66))
    add_radial_glow(img, 600, 280, 360, (147, 51, 234, 60))

    win_w, win_h = 860, 470
    win_x = (WIDTH - win_w) // 2 - 40
    win_y = 60

    sh = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    shd = ImageDraw.Draw(sh)
    shd.rounded_rectangle([win_x + 10, win_y + 16, win_x + win_w + 10, win_y + win_h + 16], radius=18, fill=(0, 0, 0, 110))
    img.alpha_composite(sh.filter(ImageFilter.GaussianBlur(16)))

    win = Image.new("RGBA", (win_w, win_h), (28, 22, 52, 255))
    wd = ImageDraw.Draw(win)
    wd.rounded_rectangle([0, 0, win_w - 1, win_h - 1], radius=16, outline=(255, 255, 255, 28), width=1)

    wd.rectangle([0, 0, win_w - 1, 46], fill=(20, 15, 38, 255))
    wd.line([(0, 46), (win_w - 1, 46)], fill=(255, 255, 255, 20), width=1)
    draw_window_dots(wd, 26, 23)
    wd.text((90, 16), "12-Point Fair Assessment Rubric & Adverse Impact Audit", font=font_sans_bold(14), fill=(240, 230, 255))

    rubrics = [
        ("1. Architecture & Design Decomposition", "Weight 30%", "Candidate scored 18/20", "Clear bounded contexts"),
        ("2. Real Repo Correctness & Unit Tests", "Weight 40%", "Candidate scored 24/25", "14/14 test cases passed"),
        ("3. AI Copilot Verification & Edits", "Weight 30%", "Candidate scored 19/20", "Direct supervisor pattern"),
    ]
    for i, (title, wgt, scr, note) in enumerate(rubrics):
        ry = 70 + i * 94
        wd.rounded_rectangle([24, ry, win_w - 24, ry + 82], radius=10, fill=(38, 30, 68, 255), outline=(255, 255, 255, 18), width=1)
        wd.text((40, ry + 14), title, font=font_sans_bold(15), fill=(255, 255, 255))
        wd.text((40, ry + 44), note, font=font_sans_reg(13), fill=(180, 170, 215))

        wd.rounded_rectangle([win_w - 320, ry + 16, win_w - 180, ry + 46], radius=6, fill=(147, 51, 234, 60))
        wd.text((win_w - 306, ry + 22), wgt, font=font_mono_bold(12), fill=(230, 210, 255))

        wd.rounded_rectangle([win_w - 170, ry + 16, win_w - 40, ry + 46], radius=6, fill=(38, 208, 124, 50))
        wd.text((win_w - 156, ry + 22), scr, font=font_mono_bold(12), fill=(150, 240, 190))

    # Bottom Parity Bar
    wd.rounded_rectangle([24, 370, win_w - 24, 444], radius=10, fill=(20, 15, 38, 255), outline=(255, 255, 255, 18), width=1)
    wd.text((40, 395), "Demographic Cohort Pass-Rate Parity: 98.6%", font=font_mono_bold(13.5), fill=(38, 208, 124))
    wd.text((40, 418), "EEOC Four-Fifths Rule Compliant · Fully Blind Grading", font=font_sans_reg(12.5), fill=(180, 170, 215))

    img.alpha_composite(win, (win_x, win_y))

    # Floating Parity Badge
    badge_w, badge_h = 440, 240
    badge_x = WIDTH - badge_w - 65
    badge_y = 310

    bsh = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    bshd = ImageDraw.Draw(bsh)
    bshd.rounded_rectangle([badge_x + 8, badge_y + 12, badge_x + badge_w + 8, badge_y + badge_h + 12], radius=20, fill=(0, 0, 0, 130))
    img.alpha_composite(bsh.filter(ImageFilter.GaussianBlur(18)))

    badge = Image.new("RGBA", (badge_w, badge_h), (255, 255, 255, 255))
    bd = ImageDraw.Draw(badge)
    bd.rounded_rectangle([0, 0, badge_w - 1, badge_h - 1], radius=18, outline=(147, 51, 234, 130), width=2)

    bd.rounded_rectangle([20, 18, 200, 46], radius=14, fill=(245, 240, 255, 255))
    bd.text((34, 25), "FAIRNESS & PARITY", font=font_sans_bold(12), fill=(126, 34, 206))

    bd.text((22, 64), "Objective Standards", font=font_sans_bold(26), fill=(15, 23, 42))
    bd.text((22, 98), "Published Rubrics Ensure Equal Evaluation", font=font_sans_bold(14), fill=(71, 85, 105))

    bd.line([(22, 128), (badge_w - 22, 128)], fill=(235, 240, 248, 255), width=1)

    points = [
        "Pre-calibrated blind rubric scoring",
        "No trick trivia or memorized riddle barriers",
        "Candidate appeals & review transparency",
    ]
    for i, p in enumerate(points):
        cy = 140 + i * 30
        bd.ellipse([24, cy + 2, 38, cy + 16], fill=(147, 51, 234, 45))
        bd.text((27, cy + 3), "✓", font=font_sans_bold(11), fill=(126, 34, 206))
        bd.text((46, cy + 2), p, font=font_sans_reg(13.5), fill=(30, 41, 59))

    img.alpha_composite(badge, (badge_x, badge_y))
    return img


def create_card_real_work_vs_puzzles() -> Image.Image:
    """Card 5: Real-World Coding Tests vs Puzzle Tests."""
    img = make_gradient(WIDTH, HEIGHT, (15, 20, 32), (20, 28, 48))
    add_radial_glow(img, 360, 280, 300, (239, 68, 68, 45))
    add_radial_glow(img, 840, 280, 300, (38, 208, 124, 55))

    card_w, card_h = 520, 490
    y_pos = 90

    # Left: Outdated Algorithmic Puzzle
    left_x = 70
    sh1 = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    shd1 = ImageDraw.Draw(sh1)
    shd1.rounded_rectangle([left_x + 8, y_pos + 12, left_x + card_w + 8, y_pos + card_h + 12], radius=18, fill=(0, 0, 0, 100))
    img.alpha_composite(sh1.filter(ImageFilter.GaussianBlur(16)))

    card1 = Image.new("RGBA", (card_w, card_h), (24, 20, 26, 255))
    cd1 = ImageDraw.Draw(card1)
    cd1.rounded_rectangle([0, 0, card_w - 1, card_h - 1], radius=16, outline=(239, 68, 68, 90), width=2)

    cd1.rounded_rectangle([20, 20, 260, 52], radius=8, fill=(239, 68, 68, 40))
    cd1.text((34, 28), "❌ OUTDATED PUZZLE", font=font_sans_bold(13), fill=(248, 113, 113))

    cd1.text((22, 74), "LeetCode #295: Invert Matrix", font=font_sans_bold(18), fill=(255, 255, 255))
    cd1.text((22, 104), "Memorized trick algorithms in plain text box", font=font_sans_reg(13), fill=(180, 170, 180))

    code1 = [
        "// Puzzle: Write O(log N) bitwise inversion",
        "func solve(a, b int) int {",
        "    // Trick trick trick...",
        "    return a ^ (b << 2)",
        "}",
    ]
    for i, l in enumerate(code1):
        cd1.text((22, 140 + i * 26), l, font=font_mono_reg(12), fill=(180, 150, 150))

    cd1.line([(20, 310), (card_w - 20, 310)], fill=(255, 255, 255, 20), width=1)
    cd1.text((22, 330), "Predictive Validity: 0.14 (Near Random)", font=font_mono_bold(13), fill=(248, 113, 113))
    cd1.text((22, 360), "• Candidates cram solutions from memory", font=font_sans_reg(13.5), fill=(200, 180, 180))
    cd1.text((22, 390), "• Measures zero API, DB, or architecture skill", font=font_sans_reg(13.5), fill=(200, 180, 180))
    cd1.text((22, 420), "• High rejection rate of great senior engineers", font=font_sans_reg(13.5), fill=(200, 180, 180))

    img.alpha_composite(card1, (left_x, y_pos))

    # Right: Real-World Production Repository
    right_x = 610
    sh2 = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    shd2 = ImageDraw.Draw(sh2)
    shd2.rounded_rectangle([right_x + 8, y_pos + 12, right_x + card_w + 8, y_pos + card_h + 12], radius=18, fill=(0, 0, 0, 100))
    img.alpha_composite(sh2.filter(ImageFilter.GaussianBlur(16)))

    card2 = Image.new("RGBA", (card_w, card_h), (16, 28, 24, 255))
    cd2 = ImageDraw.Draw(card2)
    cd2.rounded_rectangle([0, 0, card_w - 1, card_h - 1], radius=16, outline=(38, 208, 124, 120), width=2)

    cd2.rounded_rectangle([20, 20, 280, 52], radius=8, fill=(38, 208, 124, 40))
    cd2.text((34, 28), "✅ REAL PRODUCTION WORK", font=font_sans_bold(13), fill=(38, 208, 124))

    cd2.text((22, 74), "Full Repo: payments-gateway/v2", font=font_sans_bold(18), fill=(255, 255, 255))
    cd2.text((22, 104), "Multi-file Go service with Docker & PostgreSQL", font=font_sans_reg(13), fill=(160, 210, 180))

    code2 = [
        "// Real work: Add idempotent webhook handler",
        "func (s *Service) HandleWebhook(ctx, ev) {",
        "    if s.isDuplicate(ev.ID) { return }",
        "    return s.dispatchOrder(ctx, ev)",
        "}",
    ]
    for i, l in enumerate(code2):
        cd2.text((22, 140 + i * 26), l, font=font_mono_reg(12), fill=(180, 230, 200))

    cd2.line([(20, 310), (card_w - 20, 310)], fill=(255, 255, 255, 20), width=1)
    cd2.text((22, 330), "Predictive Validity: 0.78 (Strong Predictor)", font=font_mono_bold(13), fill=(38, 208, 124))
    cd2.text((22, 360), "• Measures real debugging, testing & code quality", font=font_sans_reg(13.5), fill=(210, 240, 220))
    cd2.text((22, 390), "• Candidates work with real tools & modern IDEs", font=font_sans_reg(13.5), fill=(210, 240, 220))
    cd2.text((22, 420), "• Senior engineers love the authentic workflow", font=font_sans_reg(13.5), fill=(210, 240, 220))

    img.alpha_composite(card2, (right_x, y_pos))
    return img


def create_card_candidate_privacy() -> Image.Image:
    """Card 6: Candidate Privacy in Technical Evaluation."""
    img = make_gradient(WIDTH, HEIGHT, (10, 20, 28), (16, 32, 44))
    add_radial_glow(img, 600, 280, 360, (14, 165, 233, 50))
    add_radial_glow(img, 980, 480, 240, (38, 208, 124, 45))

    win_w, win_h = 860, 470
    win_x = (WIDTH - win_w) // 2 - 40
    win_y = 60

    sh = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    shd = ImageDraw.Draw(sh)
    shd.rounded_rectangle([win_x + 10, win_y + 16, win_x + win_w + 10, win_y + win_h + 16], radius=18, fill=(0, 0, 0, 110))
    img.alpha_composite(sh.filter(ImageFilter.GaussianBlur(16)))

    win = Image.new("RGBA", (win_w, win_h), (16, 26, 36, 255))
    wd = ImageDraw.Draw(win)
    wd.rounded_rectangle([0, 0, win_w - 1, win_h - 1], radius=16, outline=(255, 255, 255, 28), width=1)

    wd.rectangle([0, 0, win_w - 1, 46], fill=(12, 20, 28, 255))
    wd.line([(0, 46), (win_w - 1, 46)], fill=(255, 255, 255, 20), width=1)
    draw_window_dots(wd, 26, 23)
    wd.text((90, 16), "Privacy Architecture & Indian DPDP Act Governance", font=font_sans_bold(14), fill=(230, 245, 255))

    pillars = [
        ("🇮🇳 India Data Residency", "Stored in AWS Mumbai (ap-south-1). Never exported across borders without explicit consent."),
        ("🛡️ Transparent Candidate Consent", "Clear plain-English permissions before testing begins. No hidden background spyware."),
        ("⏱️ Automated 30-Day Purge", "Test code and telemetry auto-deleted after hiring decision is recorded. Zero data hoarding."),
    ]
    for i, (title, desc) in enumerate(pillars):
        py = 70 + i * 94
        wd.rounded_rectangle([24, py, win_w - 24, py + 82], radius=10, fill=(24, 38, 52, 255), outline=(255, 255, 255, 18), width=1)
        wd.text((40, py + 14), title, font=font_sans_bold(15), fill=(255, 255, 255))
        wd.text((40, py + 44), desc, font=font_sans_reg(13), fill=(180, 210, 230))

        wd.rounded_rectangle([win_w - 150, py + 22, win_w - 40, py + 52], radius=6, fill=(14, 165, 233, 40))
        wd.text((win_w - 136, py + 28), "Verified", font=font_mono_bold(12), fill=(125, 211, 252))

    wd.rounded_rectangle([24, 370, win_w - 24, 444], radius=10, fill=(12, 20, 28, 255), outline=(255, 255, 255, 18), width=1)
    wd.text((40, 395), "Encryption Standards: AES-256 at Rest · TLS 1.3 in Transit", font=font_mono_bold(13.5), fill=(38, 208, 124))
    wd.text((40, 418), "ISO 27001 & SOC 2 Type II Certified Data Centers", font=font_sans_reg(12.5), fill=(180, 210, 230))

    img.alpha_composite(win, (win_x, win_y))

    # Floating Privacy Shield Badge
    badge_w, badge_h = 440, 240
    badge_x = WIDTH - badge_w - 65
    badge_y = 310

    bsh = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    bshd = ImageDraw.Draw(bsh)
    bshd.rounded_rectangle([badge_x + 8, badge_y + 12, badge_x + badge_w + 8, badge_y + badge_h + 12], radius=20, fill=(0, 0, 0, 130))
    img.alpha_composite(bsh.filter(ImageFilter.GaussianBlur(18)))

    badge = Image.new("RGBA", (badge_w, badge_h), (255, 255, 255, 255))
    bd = ImageDraw.Draw(badge)
    bd.rounded_rectangle([0, 0, badge_w - 1, badge_h - 1], radius=18, outline=(14, 165, 233, 130), width=2)

    bd.rounded_rectangle([20, 18, 210, 46], radius=14, fill=(240, 249, 255, 255))
    bd.text((34, 25), "SECURITY & PRIVACY", font=font_sans_bold(12), fill=(3, 105, 161))

    bd.text((22, 64), "Respectful Testing", font=font_sans_bold(26), fill=(15, 23, 42))
    bd.text((22, 98), "Camera-Free & Zero-Intrusive Options", font=font_sans_bold(14), fill=(71, 85, 105))

    bd.line([(22, 128), (badge_w - 22, 128)], fill=(235, 240, 248, 255), width=1)

    points = [
        "Candidate rights protected under DPDP Act",
        "No continuous facial recording requirements",
        "Role-based audit logging for enterprise HR",
    ]
    for i, p in enumerate(points):
        cy = 140 + i * 30
        bd.ellipse([24, cy + 2, 38, cy + 16], fill=(14, 165, 233, 45))
        bd.text((27, cy + 3), "✓", font=font_sans_bold(11), fill=(3, 105, 161))
        bd.text((46, cy + 2), p, font=font_sans_reg(13.5), fill=(30, 41, 59))

    img.alpha_composite(badge, (badge_x, badge_y))
    return img


def create_card_prevent_cheating_side() -> Image.Image:
    """Side Card 1: How to Prevent Cheating in Online Coding Tests (Vertical slot 600x680)."""
    sw, sh_h = 600, 680
    img = make_gradient(sw, sh_h, (11, 25, 23), (16, 36, 34))
    add_radial_glow(img, 300, 180, 260, (38, 208, 124, 65))
    add_radial_glow(img, 350, 500, 240, (14, 165, 233, 45))

    # 1. Integrity Console Window (Top)
    win_w, win_h = 520, 310
    win_x = 40
    win_y = 26

    # Shadow
    sh = Image.new("RGBA", (sw, sh_h), (0, 0, 0, 0))
    shd = ImageDraw.Draw(sh)
    shd.rounded_rectangle([win_x + 6, win_y + 10, win_x + win_w + 6, win_y + win_h + 10], radius=16, fill=(0, 0, 0, 110))
    img.alpha_composite(sh.filter(ImageFilter.GaussianBlur(14)))

    win = Image.new("RGBA", (win_w, win_h), (16, 24, 28, 255))
    wd = ImageDraw.Draw(win)
    wd.rounded_rectangle([0, 0, win_w - 1, win_h - 1], radius=14, outline=(255, 255, 255, 28), width=1)

    # Titlebar
    wd.rectangle([0, 0, win_w - 1, 40], fill=(12, 18, 22, 255))
    wd.line([(0, 40), (win_w - 1, 40)], fill=(255, 255, 255, 20), width=1)
    draw_window_dots(wd, 20, 20)
    wd.text((72, 13), "Integrity Evidence Console", font=font_sans_bold(13), fill=(230, 240, 238))

    # Candidate submission box
    wd.rounded_rectangle([16, 50, win_w - 16, 248], radius=8, fill=(22, 32, 38, 255), outline=(255, 255, 255, 18), width=1)
    wd.text((26, 62), "Candidate: Daniel Kim", font=font_sans_bold(12.5), fill=(255, 255, 255))
    wd.rounded_rectangle([win_w - 114, 58, win_w - 24, 82], radius=6, fill=(239, 68, 68, 55))
    wd.text((win_w - 105, 62), "Match 91%", font=font_sans_bold(11), fill=(248, 113, 113))

    cand_code = [
        "func (b *Batcher) Flush(ctx) error {",
        "  for i := range b.queue {",
        "    if err := b.process(queue[i]); err {",
        "      // structural clone detected",
        "      return ErrTimeout",
        "    }",
        "  }",
    ]
    for i, line in enumerate(cand_code):
        y = 92 + i * 22
        if "structural clone" in line:
            wd.rectangle([20, y - 2, win_w - 20, y + 18], fill=(239, 68, 68, 35))
        wd.text((26, y), line, font=font_mono_reg(10.5), fill=(240, 245, 250) if i < 3 else (255, 160, 160))

    # Console bottom metrics
    wd.rounded_rectangle([16, 258, win_w - 16, 298], radius=6, fill=(12, 18, 22, 255), outline=(255, 255, 255, 16), width=1)
    wd.text((24, 269), "Keystroke: 180 wpm (Normal) · Tab Switches: 1", font=font_mono_reg(10.5), fill=(150, 220, 180))

    img.alpha_composite(win, (win_x, win_y))

    # 2. Floating Verified Badge (Bottom - comfortably floating with 60px dark margin below)
    badge_w, badge_h = 470, 270
    badge_x = 65
    badge_y = 350

    bsh = Image.new("RGBA", (sw, sh_h), (0, 0, 0, 0))
    bshd = ImageDraw.Draw(bsh)
    bshd.rounded_rectangle([badge_x + 6, badge_y + 10, badge_x + badge_w + 6, badge_y + badge_h + 10], radius=18, fill=(0, 0, 0, 130))
    img.alpha_composite(bsh.filter(ImageFilter.GaussianBlur(16)))

    badge = Image.new("RGBA", (badge_w, badge_h), (255, 255, 255, 255))
    bd = ImageDraw.Draw(badge)
    bd.rounded_rectangle([0, 0, badge_w - 1, badge_h - 1], radius=16, outline=(38, 208, 124, 150), width=2)

    bd.rounded_rectangle([18, 16, 240, 42], radius=12, fill=(234, 250, 240, 255))
    bd.text((30, 22), "HUMAN-REVIEWED DECISION", font=font_sans_bold(11.5), fill=(18, 128, 68))

    bd.text((20, 58), "Zero False Positives", font=font_sans_bold(24), fill=(15, 23, 42))
    bd.text((20, 90), "Double-Blind Human Audit Protocol", font=font_sans_bold(13), fill=(71, 85, 105))

    bd.line([(20, 118), (badge_w - 20, 118)], fill=(235, 240, 248, 255), width=1)

    points = [
        "Keystroke replay verified natural cadence",
        "AST similarity isolated to standard template",
        "Outcome: Candidate cleared, no false flag",
    ]
    for i, p in enumerate(points):
        cy = 132 + i * 34
        bd.ellipse([22, cy + 2, 38, cy + 18], fill=(38, 208, 124, 45))
        bd.text((26, cy + 4), "✓", font=font_sans_bold(11), fill=(18, 128, 68))
        bd.text((46, cy + 2), p, font=font_sans_reg(12.5), fill=(30, 41, 59))

    img.alpha_composite(badge, (badge_x, badge_y))
    return img


def create_card_campus_hiring_side() -> Image.Image:
    """Side Card 2: Campus Hiring with Coding Assessments (Vertical slot 600x680)."""
    sw, sh_h = 600, 680
    img = make_gradient(sw, sh_h, (12, 23, 45), (18, 38, 72))
    add_radial_glow(img, 300, 180, 260, (59, 130, 246, 65))
    add_radial_glow(img, 350, 500, 240, (38, 208, 124, 45))

    # 1. Campus Drive Console Window (Top)
    win_w, win_h = 520, 310
    win_x = 40
    win_y = 26

    sh = Image.new("RGBA", (sw, sh_h), (0, 0, 0, 0))
    shd = ImageDraw.Draw(sh)
    shd.rounded_rectangle([win_x + 6, win_y + 10, win_x + win_w + 6, win_y + win_h + 10], radius=16, fill=(0, 0, 0, 110))
    img.alpha_composite(sh.filter(ImageFilter.GaussianBlur(14)))

    win = Image.new("RGBA", (win_w, win_h), (16, 26, 48, 255))
    wd = ImageDraw.Draw(win)
    wd.rounded_rectangle([0, 0, win_w - 1, win_h - 1], radius=14, outline=(255, 255, 255, 28), width=1)

    # Titlebar
    wd.rectangle([0, 0, win_w - 1, 40], fill=(12, 20, 38, 255))
    wd.line([(0, 40), (win_w - 1, 40)], fill=(255, 255, 255, 20), width=1)
    draw_window_dots(wd, 20, 20)
    wd.text((72, 13), "Campus Drive Console · 2,400 Candidates", font=font_sans_bold(13), fill=(230, 240, 255))

    # Left: Histogram
    wd.rounded_rectangle([14, 50, 240, 248], radius=8, fill=(20, 32, 58, 255), outline=(255, 255, 255, 18), width=1)
    wd.text((24, 62), "Percentile Curve", font=font_sans_bold(11.5), fill=(255, 255, 255))

    bars = [12, 25, 48, 85, 115, 95, 62, 34, 14]
    for i, b in enumerate(bars):
        bx = 24 + i * 22
        by = 225 - b
        col = (38, 208, 124, 255) if i >= 6 else (59, 130, 246, 200)
        wd.rounded_rectangle([bx, by, bx + 15, 225], radius=3, fill=col)

    # Cut-off line
    wd.line([(156, 95), (156, 230)], fill=(38, 208, 124, 255), width=2)
    wd.text((95, 80), "Cut-off >= 82%", font=font_sans_bold(10), fill=(38, 208, 124))

    # Right: Shortlist
    wd.rounded_rectangle([264, 50, win_w - 14, 248], radius=8, fill=(20, 32, 58, 255), outline=(255, 255, 255, 18), width=1)
    wd.text((276, 62), "Top Ranked Shortlist", font=font_sans_bold(11.5), fill=(255, 255, 255))

    candidates = [
        ("#1", "Ananya R.", "Score 98/100", "IIT Bombay"),
        ("#2", "Vikram S.", "Score 96/100", "BITS Pilani"),
        ("#3", "Sneha P.", "Score 94/100", "NIT Trichy"),
        ("#4", "Aditya K.", "Score 92/100", "IIIT Hyd"),
    ]
    for i, (rnk, name, scr, clg) in enumerate(candidates):
        cy = 88 + i * 38
        wd.rectangle([270, cy - 2, win_w - 20, cy + 34], fill=(26, 42, 74, 255) if i % 2 == 0 else (20, 32, 58, 255))
        wd.text((276, cy + 3), f"{rnk} {name}", font=font_sans_bold(11.5), fill=(255, 255, 255))
        wd.text((276, cy + 18), f"{scr} · {clg}", font=font_sans_reg(10), fill=(180, 210, 245))

    # Console bottom metrics
    wd.rounded_rectangle([14, 258, win_w - 14, 298], radius=6, fill=(12, 20, 38, 255), outline=(255, 255, 255, 16), width=1)
    wd.text((22, 269), "Turnaround: 2,400 graded < 2h · 120 Finalists", font=font_mono_reg(10.5), fill=(200, 225, 255))

    img.alpha_composite(win, (win_x, win_y))

    # 2. Floating Campus Recruitment Badge (Bottom - comfortably floating with 60px dark margin below)
    badge_w, badge_h = 470, 270
    badge_x = 65
    badge_y = 350

    bsh = Image.new("RGBA", (sw, sh_h), (0, 0, 0, 0))
    bshd = ImageDraw.Draw(bsh)
    bshd.rounded_rectangle([badge_x + 6, badge_y + 10, badge_x + badge_w + 6, badge_y + badge_h + 10], radius=18, fill=(0, 0, 0, 130))
    img.alpha_composite(bsh.filter(ImageFilter.GaussianBlur(16)))

    badge = Image.new("RGBA", (badge_w, badge_h), (255, 255, 255, 255))
    bd = ImageDraw.Draw(badge)
    bd.rounded_rectangle([0, 0, badge_w - 1, badge_h - 1], radius=16, outline=(59, 130, 246, 150), width=2)

    bd.rounded_rectangle([18, 16, 220, 42], radius=12, fill=(239, 246, 255, 255))
    bd.text((30, 22), "CAMPUS RECRUITMENT", font=font_sans_bold(11.5), fill=(29, 78, 216))

    bd.text((20, 58), "High-Volume Parity", font=font_sans_bold(24), fill=(15, 23, 42))
    bd.text((20, 90), "Standardized Evaluation Rubrics", font=font_sans_bold(13), fill=(71, 85, 105))

    bd.line([(20, 118), (badge_w - 20, 118)], fill=(235, 240, 248, 255), width=1)

    points = [
        "100% automated test suite execution",
        "Standardized score cut-offs across universities",
        "Top 5% candidates shortlisted for interview",
    ]
    for i, p in enumerate(points):
        cy = 132 + i * 34
        bd.ellipse([22, cy + 2, 38, cy + 18], fill=(59, 130, 246, 45))
        bd.text((26, cy + 4), "✓", font=font_sans_bold(11), fill=(29, 78, 216))
        bd.text((46, cy + 2), p, font=font_sans_reg(12.5), fill=(30, 41, 59))

    img.alpha_composite(badge, (badge_x, badge_y))
    return img


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    cards = [
        ("card-ai-assessment.webp", create_card_ai_assessment),
        ("card-prevent-cheating.webp", create_card_prevent_cheating),
        ("card-prevent-cheating-side.webp", create_card_prevent_cheating_side),
        ("card-campus-hiring.webp", create_card_campus_hiring),
        ("card-campus-hiring-side.webp", create_card_campus_hiring_side),
        ("card-fairness-rubric.webp", create_card_fairness_rubric),
        ("card-real-work-vs-puzzles.webp", create_card_real_work_vs_puzzles),
        ("card-candidate-privacy.webp", create_card_candidate_privacy),
    ]

    print(f"Generating studio-grade editorial blog cards...")
    for name, func in cards:
        im = func()
        out_path = OUT_DIR / name
        im.save(out_path, "WEBP", quality=98, method=6)
        print(f"[OK] {name} ({im.size[0]}x{im.size[1]}) -> {out_path.stat().st_size // 1024} KB")

    print("\nDone! All blog card images generated.")


if __name__ == "__main__":
    main()

