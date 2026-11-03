import os
import re

for root, dirs, files in os.walk('src'):
    for f in sorted(files):
        if f.endswith('.tsx') or f.endswith('.css'):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8') as file:
                txt = file.read()
                matches = re.findall(r'(?:class|className)="[^"]*\bh1\b[^"]*"', txt)
                if matches:
                    print(f"{p:55} : {len(matches)} matches")

