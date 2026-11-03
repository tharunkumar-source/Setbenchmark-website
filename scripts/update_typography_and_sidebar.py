import re

css_path = "src/styles/globals.css"
with open(css_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. html & body overflow-x: clip
content = content.replace(
    "html { -webkit-text-size-adjust: 100%; scroll-behavior: smooth; overflow-x: hidden; max-width: 100%; }",
    "html { -webkit-text-size-adjust: 100%; scroll-behavior: smooth; overflow-x: clip; max-width: 100%; }"
)
content = content.replace(
    "body { margin: 0; background: var(--white); color: var(--text); font-family: var(--font); font-size: 17px; line-height: 1.6; overflow-x: hidden; max-width: 100%; width: 100%; }",
    "body { margin: 0; background: var(--white); color: var(--text); font-family: var(--font); font-size: 17px; line-height: 1.6; overflow-x: clip; max-width: 100%; width: 100%; }"
)

# 2. .h1, .h2, .h3 font sizes
old_h1_h2 = """.h1 { font-size: clamp(30px, 3.2vw, 42px); letter-spacing: -0.03em; line-height: 1.15; }
.h2 { font-size: clamp(30px, 3.6vw, 44px); letter-spacing: -0.03em; }
.h3 { font-size: 21px; letter-spacing: -0.01em; }"""

new_h1_h2 = """.h1 { font-size: clamp(32px, 3.2vw, 44px); letter-spacing: -0.03em; line-height: 1.15; }
.h2 { font-size: clamp(22px, 2.2vw, 28px); letter-spacing: -0.025em; line-height: 1.25; }
.h3 { font-size: 20px; letter-spacing: -0.01em; line-height: 1.3; }"""

content = content.replace(old_h1_h2, new_h1_h2)

# 3. .phero .h1 font size
old_phero = """.phero .h1 {
  font-size: clamp(28px, 2.75vw, 38px);
  line-height: 1.16;
  letter-spacing: -0.025em;
  font-weight: 700;
}"""

new_phero = """.phero .h1 {
  font-size: clamp(30px, 3.0vw, 40px);
  line-height: 1.16;
  letter-spacing: -0.025em;
  font-weight: 700;
}"""

content = content.replace(old_phero, new_phero)

# 4. .faq-head .h2 font size
old_faq_h2 = """.faq-head .h2 {
  font-size: clamp(28px, 3.2vw, 42px);
  letter-spacing: -0.03em;
  line-height: 1.15;
  color: var(--ink);
  font-weight: 700;
}"""

new_faq_h2 = """.faq-head .h2 {
  font-size: clamp(22px, 2.2vw, 28px);
  letter-spacing: -0.025em;
  line-height: 1.25;
  color: var(--ink);
  font-weight: 700;
}"""

content = content.replace(old_faq_h2, new_faq_h2)

# 5. Mobile font sizes
old_mobile = """.h1, .phero .h1 { font-size: clamp(24px, 6.5vw, 32px); line-height: 1.15; }
  .h2 { font-size: clamp(24px, 6.5vw, 34px); }"""

new_mobile = """.h1, .phero .h1 { font-size: clamp(26px, 6.5vw, 32px); line-height: 1.18; }
  .h2 { font-size: clamp(20px, 5.2vw, 24px); line-height: 1.25; }"""

content = content.replace(old_mobile, new_mobile)

# 6. .guide-step-card scroll-margin-top
old_guide_card = """.guide-step-card {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 26px 30px;
  box-shadow: 0 4px 16px rgba(15, 18, 34, 0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}"""

new_guide_card = """.guide-step-card {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 26px 30px;
  box-shadow: 0 4px 16px rgba(15, 18, 34, 0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  scroll-margin-top: 110px;
}"""

content = content.replace(old_guide_card, new_guide_card)

# 7. .fairness-highlight-box scroll-margin-top
old_box = """.fairness-highlight-box {
  background: linear-gradient(180deg, #FAFCF6 0%, #FFFFFF 100%);
  border: 1px solid #D6F5A0;
  border-radius: 16px;
  padding: 32px 36px;
  margin: 40px 0 0;
  box-shadow: 0 4px 20px rgba(56, 84, 0, 0.04);
}"""

new_box = """.fairness-highlight-box {
  background: linear-gradient(180deg, #FAFCF6 0%, #FFFFFF 100%);
  border: 1px solid #D6F5A0;
  border-radius: 16px;
  padding: 32px 36px;
  margin: 40px 0 0;
  box-shadow: 0 4px 20px rgba(56, 84, 0, 0.04);
  scroll-margin-top: 110px;
}"""

content = content.replace(old_box, new_box)

# 8. .blog-sidebar sticky properties
old_sidebar = """.blog-sidebar {
  position: sticky;
  top: 96px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}"""

new_sidebar = """.blog-sidebar {
  position: -webkit-sticky;
  position: sticky;
  top: 88px;
  align-self: start;
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-height: calc(100vh - 104px);
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.blog-sidebar::-webkit-scrollbar {
  display: none;
}"""

content = content.replace(old_sidebar, new_sidebar)

with open(css_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated globals.css successfully!")

