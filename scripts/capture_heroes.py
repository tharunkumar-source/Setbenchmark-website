import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1440, "height": 900})
        
        # 1. Product Coding Assessments
        await page.goto("http://localhost:3000/product/coding-assessments/", wait_until="networkidle")
        await page.screenshot(path="C:/Users/Admin/.gemini/antigravity/brain/957d98c9-4c11-432f-acae-ba818e5c0423/verify_coding_hero.png", clip={"x": 0, "y": 60, "width": 1440, "height": 620})
        
        # 2. Skill Tests React
        await page.goto("http://localhost:3000/skill-tests/react/", wait_until="networkidle")
        await page.screenshot(path="C:/Users/Admin/.gemini/antigravity/brain/957d98c9-4c11-432f-acae-ba818e5c0423/verify_react_test_hero.png", clip={"x": 0, "y": 60, "width": 1440, "height": 620})

        # 3. HackerRank Alternatives
        await page.goto("http://localhost:3000/compare/hackerrank-alternatives/", wait_until="networkidle")
        await page.screenshot(path="C:/Users/Admin/.gemini/antigravity/brain/957d98c9-4c11-432f-acae-ba818e5c0423/verify_compare_hero.png", clip={"x": 0, "y": 60, "width": 1440, "height": 620})

        # 4. Pricing
        await page.goto("http://localhost:3000/pricing/", wait_until="networkidle")
        await page.screenshot(path="C:/Users/Admin/.gemini/antigravity/brain/957d98c9-4c11-432f-acae-ba818e5c0423/verify_pricing_hero.png", clip={"x": 0, "y": 60, "width": 1440, "height": 620})

        await browser.close()
        print("Screenshots taken successfully!")

asyncio.run(run())

