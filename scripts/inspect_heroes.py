import os
import re

pages_dir = r"src/pages"
for root, dirs, files in os.walk(pages_dir):
    for f in sorted(files):
        if f.endswith('.tsx'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
                hero_match = re.search(r'<section class="([^"]*(?:hero|phero)[^"]*)">(.*?)</section>', content, re.DOTALL)
                hero_layout = 'no hero match'
                hero_has_img = False
                sec_class = ''
                if hero_match:
                    sec_class = hero_match.group(1)
                    hero_txt = hero_match.group(2)
                    hero_has_img = ('<img' in hero_txt) or ('class="shot"' in hero_txt)
                    if 'phero-grid' in hero_txt:
                        hero_layout = 'phero-grid (2-col)'
                    elif 'hero-grid' in hero_txt:
                        hero_layout = 'hero-grid'
                    else:
                        hero_layout = sec_class
                else:
                    first_sec = re.search(r'<section class="([^"]*)">(.*?)</section>', content, re.DOTALL)
                    if first_sec:
                        hero_layout = 'first sec: ' + first_sec.group(1)
                        hero_has_img = ('<img' in first_sec.group(2)) or ('class="shot"' in first_sec.group(2))
                rel_path = os.path.relpath(path, pages_dir)
                print(f"{rel_path:45} | {hero_layout:30} | img: {hero_has_img}")

