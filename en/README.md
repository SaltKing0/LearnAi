# 🇺🇸 AI Learning Course

An evolving, **interactive** learning wiki for AI — built to truly understand the mechanics behind LLMs, not just to use APIs.

> **The one rule:** For every concept, one sentence *"Explain it to a 12-year-old."* If you can't write it, you haven't understood it yet.

---

## 🎯 Goal of this Repo

This isn't a course in the traditional sense. It's a **collection of interactive explanations** that force you to create actively instead of consuming passively. Each concept is built as its own page — with animations, demos, and cross-references.

**For whom?** For developers who want to understand AI, not just use it.

---

## 🚀 Quickstart

```bash
# Clone repo
git clone https://github.com/SaltKing0/LearnAi.git
cd LearnAi

# Start local server (optional)
python3 -m http.server 8000
# then open http://localhost:8000
```

Or just open `index.html` in your browser.

---

## 📂 Structure

```
LearnAi/
  index.html              # Language switcher
  de/                     # 🇩🇪 Deutsche Version
    (same structure)
  en/                     # 🇺🇸 English version
    index.html            # Hub / navigation map
    concepts/             # ONE file per concept
      12-language-model-as-function.html
      13-tokens-and-embeddings.html
      ...
      _template.html      # Template for new pages
    playground/           # Interactive demos
      tokenizer-demo.html
      attention-demo.html
    assets/
      style.css           # Shared stylesheet
      nav.js              # Navigation (CENTRAL!)
    README.md
    ROADMAP.md
```

---

## 🛠️ Adding a new concept page

1. Copy `concepts/_template.html` → `concepts/XX-title.html`
2. Fill in content (title, 12-year-old sentence, intuition, technical, related, gaps)
3. `assets/nav.js` → Add entry at the right stage

Done — the page appears automatically in the Nav.

---

## 🤝 Contributing

Contributions welcome! Whether translations, new concepts, or bugfixes — just open an issue or PR.

**Translations:** The English version isn't complete yet. If you want to help, copy a concept page and translate it.

---

## 📜 License

MIT — do whatever you want with it.

---

**🇩🇪 Deutsche Version:** [de/README.md](../de/README.md)

