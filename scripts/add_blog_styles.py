css_to_add = """

/* ==========================================================================
   Guide Step Cards Component (.guide-step-card)
   ========================================================================== */
.guide-steps-list {
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin: 28px 0 36px;
}

.guide-step-card {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 26px 30px;
  box-shadow: 0 4px 16px rgba(15, 18, 34, 0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.guide-step-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(15, 18, 34, 0.08);
  border-color: #D6F5A0;
}

.guide-step-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 12px;
}

.guide-step-badge {
  font-family: var(--mono);
  font-size: 12.5px;
  font-weight: 700;
  color: #385400;
  background: #F1FBD9;
  border: 1px solid #D6F5A0;
  padding: 4px 12px;
  border-radius: 20px;
  letter-spacing: 0.04em;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}

.guide-step-title {
  font-size: 19px;
  font-weight: 700;
  color: var(--ink);
  margin: 0;
  letter-spacing: -0.015em;
}

.guide-step-card p {
  font-size: 15.5px;
  color: var(--text-2);
  line-height: 1.65;
  margin: 0 0 12px;
}

.guide-step-card p:last-child {
  margin-bottom: 0;
}

.guide-step-card ul {
  list-style: none;
  padding: 0;
  margin: 14px 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.guide-step-card li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 15px;
  color: var(--text-2);
  line-height: 1.55;
}

.guide-step-card li::before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #385400;
  margin-top: 8px;
  flex-shrink: 0;
}

/* ==========================================================================
   Blog Index & Article Layouts (Matching Reference)
   ========================================================================== */
.blog-hero {
  background-color: #04120B;
  background-image:
    linear-gradient(rgba(200, 242, 90, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(200, 242, 90, 0.04) 1px, transparent 1px),
    radial-gradient(1100px 500px at 50% 0%, rgba(14, 48, 30, 0.85) 0%, transparent 70%);
  background-size: 40px 40px, 40px 40px, 100% 100%;
  padding: 64px 0 56px;
  text-align: center;
  color: #FFFFFF;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.blog-hero .eyebrow {
  color: #C8F25A;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 12px;
}

.blog-hero h1 {
  font-size: clamp(34px, 4vw, 50px);
  font-weight: 700;
  letter-spacing: -0.03em;
  margin: 0 0 16px;
  color: #FFFFFF;
}

.blog-hero p {
  font-size: 17px;
  color: #9CA3AF;
  max-width: 680px;
  margin: 0 auto 32px;
  line-height: 1.6;
}

.blog-search-bar {
  max-width: 580px;
  margin: 0 auto 28px;
  position: relative;
}

.blog-search-input {
  width: 100%;
  height: 48px;
  padding: 0 20px 0 46px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 14.5px;
  color: #0F1222;
  box-sizing: border-box;
  outline: none;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}

.blog-search-icon {
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: #6B7280;
  pointer-events: none;
}

.blog-categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.blog-cat-pill {
  padding: 7px 18px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  text-decoration: none;
  transition: all 0.2s ease;
}

.blog-cat-pill:hover,
.blog-cat-pill.active {
  background: #C8F25A;
  color: #07190F;
  border-color: #C8F25A;
}

/* Featured Recent Section */
.recent-blogs-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 32px;
  margin-top: 32px;
}

.featured-blog-card {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 6px 24px rgba(15, 18, 34, 0.05);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
  color: inherit;
}

.featured-blog-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(15, 18, 34, 0.1);
}

.featured-blog-card .thumb-wrap {
  width: 100%;
  height: 290px;
  overflow: hidden;
  background: #F1F5F9;
}

.featured-blog-card .thumb-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.featured-blog-card:hover .thumb-wrap img {
  transform: scale(1.03);
}

.featured-blog-card .card-body {
  padding: 28px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.blog-meta-row {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  color: var(--text-3);
  margin-bottom: 12px;
}

.blog-tag-badge {
  font-size: 11.5px;
  font-weight: 700;
  color: #385400;
  background: #F1FBD9;
  border: 1px solid #D6F5A0;
  padding: 3px 10px;
  border-radius: 12px;
  letter-spacing: 0.03em;
}

.featured-blog-card h3 {
  font-size: 22px;
  font-weight: 700;
  line-height: 1.35;
  color: var(--ink);
  margin: 0 0 12px;
  letter-spacing: -0.02em;
}

.featured-blog-card p {
  font-size: 15.5px;
  color: var(--text-2);
  line-height: 1.6;
  margin: 0 0 20px;
  flex: 1;
}

.blog-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 18px;
  border-top: 1px solid var(--line);
  margin-top: auto;
}

.blog-author-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.blog-author-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #04120B;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #C8F25A;
  font-weight: 700;
  font-size: 12px;
  overflow: hidden;
  flex-shrink: 0;
}

.blog-author-info {
  display: flex;
  flex-direction: column;
}

.blog-author-name {
  font-size: 13.5px;
  font-weight: 700;
  color: var(--ink);
}

.blog-author-role {
  font-size: 12px;
  color: var(--text-3);
}

.blog-read-btn {
  font-size: 13.5px;
  font-weight: 700;
  color: #385400;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 8px;
  background: #F1FBD9;
  transition: all 0.2s ease;
}

.featured-blog-card:hover .blog-read-btn,
.stacked-blog-card:hover .blog-read-btn,
.grid-blog-card:hover .blog-read-btn {
  background: #C8F25A;
  color: #07190F;
}

/* Stacked Side Cards */
.recent-stacked-col {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.stacked-blog-card {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(15, 18, 34, 0.04);
  display: flex;
  flex-direction: row;
  height: 100%;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.stacked-blog-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(15, 18, 34, 0.08);
}

.stacked-blog-card .thumb-wrap {
  width: 170px;
  min-width: 170px;
  height: 100%;
  overflow: hidden;
  background: #F1F5F9;
}

.stacked-blog-card .thumb-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.stacked-blog-card:hover .thumb-wrap img {
  transform: scale(1.04);
}

.stacked-blog-card .card-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.stacked-blog-card h3 {
  font-size: 16.5px;
  font-weight: 700;
  line-height: 1.35;
  color: var(--ink);
  margin: 0 0 8px;
}

.stacked-blog-card p {
  font-size: 14px;
  color: var(--text-2);
  line-height: 1.5;
  margin: 0 0 14px;
  flex: 1;
}

/* All Blog Posts 3-Col Grid */
.grid-blog-card {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(15, 18, 34, 0.04);
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.grid-blog-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(15, 18, 34, 0.08);
}

.grid-blog-card .thumb-wrap {
  width: 100%;
  height: 190px;
  overflow: hidden;
  background: #F1F5F9;
}

.grid-blog-card .thumb-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.grid-blog-card:hover .thumb-wrap img {
  transform: scale(1.04);
}

.grid-blog-card .card-body {
  padding: 22px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.grid-blog-card h3 {
  font-size: 18px;
  font-weight: 700;
  line-height: 1.35;
  color: var(--ink);
  margin: 0 0 10px;
  letter-spacing: -0.015em;
}

.grid-blog-card p {
  font-size: 14.5px;
  color: var(--text-2);
  line-height: 1.55;
  margin: 0 0 18px;
  flex: 1;
}

/* Two-Column Blog Post Layout with Sticky Sidebar */
.blog-post-layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 56px;
  align-items: start;
}

.blog-main-content {
  min-width: 0;
}

.blog-sidebar {
  position: sticky;
  top: 96px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.blog-toc-card {
  background: #F8FAFC;
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 22px;
}

.blog-toc-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.blog-toc-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.blog-toc-item {
  display: block;
  padding: 8px 14px;
  border-radius: 10px;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--text-2);
  background: var(--white);
  border: 1px solid var(--line);
  text-decoration: none;
  transition: all 0.2s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.blog-toc-item:hover,
.blog-toc-item.active {
  background: #F1FBD9;
  color: #385400;
  border-color: #D6F5A0;
}

.blog-promo-card {
  background: linear-gradient(155deg, #05160E 0%, #072618 55%, #020C07 100%);
  border: 1px solid rgba(200, 242, 90, 0.2);
  border-radius: 16px;
  padding: 26px;
  color: #FFFFFF;
  position: relative;
  overflow: hidden;
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.25);
}

.blog-promo-card h4 {
  font-size: 18px;
  font-weight: 700;
  line-height: 1.35;
  color: #FFFFFF;
  margin: 12px 0 10px;
}

.blog-promo-card p {
  font-size: 13.5px;
  color: #94A3B8;
  line-height: 1.55;
  margin: 0 0 20px;
}

.blog-promo-card .btn {
  width: 100%;
}

@media (max-width: 1024px) {
  .blog-post-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .blog-sidebar {
    position: static;
  }
  .recent-blogs-grid {
    grid-template-columns: 1fr;
  }
  .stacked-blog-card {
    flex-direction: column;
  }
  .stacked-blog-card .thumb-wrap {
    width: 100%;
    height: 180px;
  }
}
"""

with open('src/styles/globals.css', 'a', encoding='utf-8') as f:
    f.write(css_to_add)

print("Appended blog styles successfully!")

