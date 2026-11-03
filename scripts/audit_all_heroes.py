import os
import re

pages_dir = r"src/pages"
results = []
for root, dirs, files in os.walk(pages_dir):
    for f in sorted(files):
        if f.endswith('.tsx'):
            path = os.path.join(root, f)
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
                rel_path = os.path.relpath(path, pages_dir)
                
                # Check for phero section
                m = re.search(r'<section class="([^"]*phero[^"]*)">(.*?)</section>', content, re.DOTALL)
                if m:
                    sec_class = m.group(1)
                    sec_body = m.group(2)
                    has_grid = 'phero-grid' in sec_body
                    img_match = re.search(r'<img[^>]+src="([^"]+)"', sec_body)
                    img_src = img_match.group(1) if img_match else None
                    title_match = re.search(r'<h1[^>]*>(.*?)</h1>', sec_body)
                    title = title_match.group(1) if title_match else 'no h1'
                    results.append({
                        'page': rel_path,
                        'type': 'phero',
                        'has_grid': has_grid,
                        'img': img_src,
                        'title': title
                    })
                else:
                    # check first section
                    m2 = re.search(r'<section class="([^"]*)">(.*?)</section>', content, re.DOTALL)
                    sec_class = m2.group(1) if m2 else 'no section'
                    sec_body = m2.group(2) if m2 else ''
                    img_match = re.search(r'<img[^>]+src="([^"]+)"', sec_body)
                    img_src = img_match.group(1) if img_match else None
                    title_match = re.search(r'<h1[^>]*>(.*?)</h1>', content)
                    title = title_match.group(1) if title_match else 'no h1'
                    results.append({
                        'page': rel_path,
                        'type': 'other: ' + sec_class,
                        'has_grid': 'phero-grid' in sec_body,
                        'img': img_src,
                        'title': title
                    })

print(f"{'Page':42} | {'Type':20} | {'Grid?':6} | {'Img':30} | {'Title'}")
print("-" * 120)
for r in results:
    img_str = r['img'] or 'NO IMAGE'
    print(f"{r['page']:42} | {r['type']:20} | {str(r['has_grid']):6} | {img_str:30} | {r['title'][:30]}")

