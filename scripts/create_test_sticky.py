import subprocess
import os
import time

msedge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
if not os.path.exists(msedge_path):
    msedge_path = r"C:\Program Files\Microsoft\Edge\Application\msedge.exe"

out_dir = r"C:\Users\Admin\.gemini\antigravity\brain\957d98c9-4c11-432f-acae-ba818e5c0423"

# Let's inspect with headless Edge
# We can check how the page looks at scroll positions
script = """
const puppeteer = require('puppeteer-core');
(async () => {
  const browser = await puppeteer.launch({
    executablePath: '%s',
    headless: true,
    args: ['--no-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/blog/how-to-prevent-cheating-in-online-coding-tests/', { waitUntil: 'networkidle2' });
  
  // Check position of sidebar before scroll
  const before = await page.evaluate(() => {
    const el = document.querySelector('.blog-sidebar');
    const rect = el.getBoundingClientRect();
    return { top: rect.top, bottom: rect.bottom, position: window.getComputedStyle(el).position };
  });
  console.log('Before scroll:', JSON.stringify(before));
  
  // Scroll down 1000px
  await page.evaluate(() => window.scrollTo(0, 1000));
  await new Promise(r => setTimeout(r, 500));
  
  const after = await page.evaluate(() => {
    const el = document.querySelector('.blog-sidebar');
    const rect = el.getBoundingClientRect();
    return { top: rect.top, bottom: rect.bottom, scrollY: window.scrollY };
  });
  console.log('After scroll 1000px:', JSON.stringify(after));
  
  await page.screenshot({ path: '%s/test_scroll_1000.png' });
  
  await browser.close();
})();
""" % (msedge_path.replace('\\', '\\\\'), out_dir.replace('\\', '\\\\'))

with open('scripts/test_sticky.js', 'w', encoding='utf-8') as f:
    f.write(script)

print("Created test_sticky.js")

