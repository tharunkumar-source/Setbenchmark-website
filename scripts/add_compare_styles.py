css_code = """

/* Compare Page Split Layout: Check Cards & 2x2 Alternatives Grid */
.compare-split-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}

.compare-split-col {
  min-width: 0;
}

.check-cards-stack {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.check-card {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 16px 20px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  transition: transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
}

.check-card:hover {
  transform: translateY(-1px);
  border-color: #D6F5A0;
  box-shadow: 0 4px 16px rgba(15, 18, 34, 0.04);
}

.check-card-icon {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #F1FBD9;
  border: 1px solid #D6F5A0;
  color: #385400;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.check-card-body {
  flex: 1;
  min-width: 0;
}

.check-card-title {
  font-size: 15.5px;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 4px;
  line-height: 1.35;
}

.check-card-body p {
  font-size: 14px;
  color: var(--text-2);
  line-height: 1.5;
  margin: 0;
}

.alt-cards-2x2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
}

.alt-card {
  background: var(--white);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
}

.alt-card:hover {
  transform: translateY(-2px);
  border-color: #C9CEDB;
  box-shadow: 0 6px 20px rgba(15, 18, 34, 0.05);
}

.alt-card .h3 {
  font-size: 17px;
  font-weight: 700;
  color: var(--ink);
  margin: 0 0 8px;
  line-height: 1.3;
}

.alt-card p {
  font-size: 13.5px;
  color: var(--text-2);
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 1024px) {
  .compare-split-layout {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .alt-cards-2x2 {
    grid-template-columns: 1fr;
  }
}
"""

with open("src/styles/globals.css", "a", encoding="utf-8") as f:
    f.write(css_code)

print("Appended compare page styles to globals.css!")

