/* ============================================================
   nav.js – baut die Top-Navigation + Prev/Next-Fußzeile.
   Zentral gepflegt: neue Konzept-Seiten hier eintragen,
   dann erscheinen sie überall automatisch.
   ============================================================ */

const SITE = {
  title: "AI-Lernkurs",
  // Reihenfolge = Lernpfad. Neue Seiten ans Ende (vor playground) hängen.
  concepts: [
    { file: "concepts/01-sprachmodell-als-funktion.html", title: "01 · Sprachmodell als Funktion" },
    { file: "concepts/02-tokens-und-embeddings.html",     title: "02 · Tokens & Embeddings" },
    { file: "concepts/03-attention-ueberblick.html",      title: "03 · Attention" },
  ],
  playground: [
    { file: "playground/tokenizer-demo.html", title: "Playground · Tokenizer" },
    { file: "playground/attention-demo.html", title: "Playground · Attention" },
  ],
};

function currentPage() {
  // z.B. ".../concepts/03-attention-ueberblick.html"
  const p = location.pathname.split("/").pop();
  const all = [...SITE.concepts, ...SITE.playground];
  return all.find((x) => x.file.endsWith(p)) || null;
}

function buildTopNav() {
  const host = document.getElementById("topnav");
  if (!host) return;
  const brand = `<span class="brand">▸ ${SITE.title}</span>`;
  const home = `<a href="index.html">Hub</a>`;
  const links = [...SITE.concepts, ...SITE.playground]
    .map((x) => {
      const active = currentPage() && currentPage().file === x.file ? " active" : "";
      return `<a class="${active}" href="${x.file}">${x.title}</a>`;
    })
    .join("");
  host.innerHTML = brand + home + links;
}

function buildBottomNav() {
  const host = document.getElementById("bottomnav");
  if (!host) return;
  const all = [...SITE.concepts, ...SITE.playground];
  const cur = currentPage();
  if (!cur) { host.innerHTML = ""; return; }
  const i = all.findIndex((x) => x.file === cur.file);
  const prev = i > 0 ? `<a href="${all[i - 1].file}">← ${all[i - 1].title}</a>` : `<span></span>`;
  const next = i < all.length - 1 ? `<a href="${all[i + 1].file}">${all[i + 1].title} →</a>` : `<span></span>`;
  host.innerHTML = `${prev}<span class="spacer"></span>${next}`;
}

document.addEventListener("DOMContentLoaded", () => {
  buildTopNav();
  buildBottomNav();
});
