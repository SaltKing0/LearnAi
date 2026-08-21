# AI Learning Course

An evolving, **interactive** learning wiki for AI — built to truly understand the mechanics behind LLMs, not just to use APIs.

Format: Vanilla HTML/CSS/JS + [p5.js](https://p5js.org/) (via CDN, **no** build step). Runs directly on GitHub Pages.

## Philosophy

- **Active creation > passive consumption.** Each concept is built as an interactive page — this forces real understanding (Feynman technique).
- **Network instead of list.** Concepts link across (Zettelkasten). The more nodes, the faster each new one ("exponential" learning through connection).
- **The one rule:** For every concept, one sentence *"Explain it to a 12-year-old."* If you can't write it, you haven't understood it yet.

## Structure

```
ai-learning-course/
  index.html              # Hub / navigation map
  concepts/               # ONE file per concept (copy from _template.html)
    01-language-model-as-function.html
    02-tokens-and-embeddings.html
    03-attention-overview.html
    _template.html        # Template for new pages
  playground/             # Interactive JS/p5.js demos
    tokenizer-demo.html
    attention-demo.html
  assets/
    style.css             # Shared stylesheet
    nav.js                # Builds Top-Nav + Prev/Next (CENTRAL maintain!)
  README.md
  ROADMAP.md
```

## Adding a new concept page

1. Copy `concepts/_template.html` → `concepts/XX-title.html`.
2. Fill in content (title, 12-year-old sentence, intuition, technical, related, gaps).
3. `assets/nav.js` → Add entry in `SITE.concepts` at the right position.
   Done — the page appears automatically everywhere in the Nav.

## Local view

Just open `index.html` in browser. Or a mini-server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Publish on GitHub Pages

1. Create repo on GitHub, push this directory.
2. *Settings → Pages → Source: Branch `main`, Folder `/ (root)*.
3. After ~1 min: `https://<user>.github.io/<repo>/`.

## Learning Path / Roadmap

See `ROADMAP.md`.
