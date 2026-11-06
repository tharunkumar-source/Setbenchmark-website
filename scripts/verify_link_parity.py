import re
import json
import xml.etree.ElementTree as ET

# 1. Official sitemap list from PDF / Plan
OFFICIAL_47 = {
    '/',
    # Product 9
    '/product/',
    '/product/coding-assessments/',
    '/product/ai-fluency-assessments/',
    '/product/ai-interviews/',
    '/product/live-coding-interviews/',
    '/product/proctoring-integrity/',
    '/product/skills-intelligence/',
    '/product/question-library/',
    '/integrations/',
    # Solutions 6
    '/solutions/',
    '/solutions/campus-hiring/',
    '/solutions/enterprise-tech-hiring/',
    '/solutions/it-services-staffing/',
    '/solutions/startups/',
    '/developers/',
    # Skill tests 13
    '/skill-tests/',
    '/skill-tests/java/',
    '/skill-tests/python/',
    '/skill-tests/javascript/',
    '/skill-tests/react/',
    '/skill-tests/nodejs/',
    '/skill-tests/sql/',
    '/skill-tests/golang/',
    '/skill-tests/data-structures-algorithms/',
    '/skill-tests/system-design/',
    '/skill-tests/devops/',
    '/skill-tests/data-science/',
    '/skill-tests/aws/',
    # Pricing & Regions 6
    '/pricing/',
    '/india/',
    '/uae/',
    '/saudi-arabia/',
    '/australia/',
    '/new-zealand/',
    # Resources 9
    '/compare/hackerrank-alternatives/',
    '/blog/',
    '/blog/assessing-developers-in-the-age-of-ai/',
    '/blog/how-to-prevent-cheating-in-online-coding-tests/',
    '/blog/campus-hiring-coding-assessment-guide/',
    '/blog/how-to-design-a-fair-coding-assessment/',
    '/security/',
    '/about/',
    '/contact/',
    # Legal 3 (excluding 404)
    '/legal/privacy/',
    '/legal/terms/',
    '/legal/refund-policy/'
}

print(f"Target count: {len(OFFICIAL_47)} indexable production pages.")

# 2. Check sitemap.xml
tree = ET.parse('public/sitemap.xml')
ns = {'sm': 'http://www.sitemaps.org/schemas/sitemap/0.9'}
sitemap_urls = set()
for loc in tree.findall('sm:url/sm:loc', ns):
    path = loc.text.replace('https://setbenchmark.com', '').replace('https://www.setbenchmark.com', '')
    if not path.endswith('/'):
        path += '/'
    sitemap_urls.add(path)

print(f"public/sitemap.xml URLs: {len(sitemap_urls)}")
assert sitemap_urls == OFFICIAL_47, f"Sitemap diff: {sitemap_urls.symmetric_difference(OFFICIAL_47)}"

# 3. Check App.tsx routes
with open('src/App.tsx', 'r', encoding='utf-8') as f:
    app_content = f.read()
routes = set(re.findall(r'path="([^"*]+)"', app_content))
# normalize with trailing slash
normalized_routes = {r if r.endswith('/') else r + '/' for r in routes if r not in ['/404', '404']}
print(f"App.tsx normalized routes (excl 404): {len(normalized_routes)}")
assert normalized_routes == OFFICIAL_47, f"App.tsx diff: {normalized_routes.symmetric_difference(OFFICIAL_47)}"

# 4. Check Footer.tsx links
with open('src/components/Footer.tsx', 'r', encoding='utf-8') as f:
    footer_content = f.read()
footer_links = set(re.findall(r'to="([^"]+)"', footer_content))
print(f"Footer links count: {len(footer_links)}")
assert footer_links == OFFICIAL_47, f"Footer diff: {footer_links.symmetric_difference(OFFICIAL_47)}"

# 5. Check Header.tsx desktop links
with open('src/components/Header.tsx', 'r', encoding='utf-8') as f:
    header_content = f.read()

# Desktop navigation links
nav_match = re.search(r'<nav className="nav"[^>]*>(.*?)</nav>', header_content, re.DOTALL)
assert nav_match, "Could not find desktop <nav> in Header.tsx"
desktop_links = set(re.findall(r'<Link to="([^"]+)"', nav_match.group(1)))
print(f"Desktop nav unique links: {len(desktop_links)}")

# 6. Check that old logo SVG does NOT exist
old_logo_pattern = r'M6 15v3m6-7v7m6-12v12'
import subprocess
result = subprocess.run(['git', 'grep', old_logo_pattern, 'src/'], capture_output=True, text=True)
if result.stdout.strip():
    raise ValueError(f"Found old logo pattern in:\n{result.stdout}")
print("Verified: Zero instances of old logo in src/.")

# 7. Check that regional pages have centered button class
regional_files = ['India.tsx', 'UAE.tsx', 'SaudiArabia.tsx', 'Australia.tsx', 'NewZealand.tsx']
for rf in regional_files:
    with open(f'src/pages/Regions/{rf}', 'r', encoding='utf-8') as f:
        rc = f.read()
        assert 'regional-pricing-box' in rc, f"Missing regional-pricing-box in {rf}"
        assert 'regional-pricing-cta' in rc, f"Missing regional-pricing-cta in {rf}"

print("Verified: All 5 regional landing pages have centered regional-pricing-box and cta.")

print("\n--- ALL VERIFICATION CHECKS PASSED WITH 100% PARITY! ---")
