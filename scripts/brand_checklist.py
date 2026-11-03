with open('src/pages/Blog/FairCodingAssessment.tsx', 'r', encoding='utf-8') as f:
    c = f.read()

# Replace all stage badges with brand lime token
c = c.replace('style="background:#EFF6FF;color:#1D4ED8"', 'style="background:#F1FBD9;color:#385400;border:1px solid #D6F5A0"')
c = c.replace('style="background:#F0FDF4;color:#15803D"', 'style="background:#F1FBD9;color:#385400;border:1px solid #D6F5A0"')
c = c.replace('style="background:#FAF5FF;color:#7E22CE"', 'style="background:#F1FBD9;color:#385400;border:1px solid #D6F5A0"')
c = c.replace('style="background:#FFFBEB;color:#B45309"', 'style="background:#F1FBD9;color:#385400;border:1px solid #D6F5A0"')

# Replace tag-design etc with tag or tag tag-neutral
c = c.replace('class="checklist-tag tag-design"', 'class="checklist-tag"')
c = c.replace('class="checklist-tag tag-cx"', 'class="checklist-tag"')
c = c.replace('class="checklist-tag tag-ai"', 'class="checklist-tag"')
c = c.replace('class="checklist-tag tag-audit"', 'class="checklist-tag"')

# In callout box, replace harsh red with brand charcoal/slate
c = c.replace('style="color:#B91C1C"', 'style="color:#4A5168"')
c = c.replace('style="color:#15803D"', 'style="color:#385400"')

with open('src/pages/Blog/FairCodingAssessment.tsx', 'w', encoding='utf-8') as f:
    f.write(c)

print('Updated FairCodingAssessment.tsx with 100% brand tokens!')

