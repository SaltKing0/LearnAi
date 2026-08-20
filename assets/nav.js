/* ============================================================
   nav.js – Top-Navigation, Dropdowns, Hub & Prev/Next.
   EINE zentrale Struktur (SITE) = Quelle für alles.

   Skaliert auf beliebig viele Seiten:
   · Top-Bar bleibt immer gleich schlank (Hub + 2 Dropdowns).
   · Lernpfad-Dropdown gruppiert nach Stufe (deckungsgleich mit ROADMAP.md).
   · Hub (index.html) rendert Karten automatisch nach Stufe.

   NEUE SEITE: Eintrag in der passenden Stufe (oder playground) +
   ggf. Stufe neu anlegen. Mehr nicht.
   ============================================================ */

const SITE = {
  title: "AI-Lernkurs",
  // Stufen = Gruppierung. Reihenfolge = Lernpfad.
  stages: [
    {
      id: "A",
      label: "Stufe A · Mentale Modelle",
      items: [
        { file: "concepts/01-sprachmodell-als-funktion.html", title: "01 · Sprachmodell als Funktion", desc: "Die eine Gleichung: P(nächstes Wort | bisheriger Text)." },
        { file: "concepts/02-tokens-und-embeddings.html",     title: "02 · Tokens & Embeddings",         desc: "Wie Text in Zahlen wird — und warum Bedeutung = Position im Raum ist." },
        { file: "concepts/03-attention-ueberblick.html",      title: "03 · Attention",                  desc: "Der Mechanismus, der LLMs ausmacht: wie ein Wort „hinblickt“." },
        // weitere Stufe-A-Seiten hier einfügen
      ],
    },
    // weitere Stufen (B, C, …) hier anlegen, z.B.:
    // {
    //   id: "B",
    //   label: "Stufe B · Ökosystem & Werkzeuge",
    //   items: [ { file: "concepts/04-...html", title: "04 · …", desc: "…" } ],
    // },
    {
      id: "B",
      label: "Stufe B · Architektur & Training",
      items: [
        { file: "concepts/04-transformer-ueberblick.html", title: "04 · Transformer-Überblick", desc: "Wie Attention + FFN zu Dutzenden Schichten gestapelt werden — die Fabrik hinter GPT/LLaMA." },
        { file: "concepts/05-training-intuitiv.html",      title: "05 · Training intuitiv",        desc: "Loss, Backprop als Idee, Lernrate, Epochen — wie das Modell „lernt“." },
        { file: "concepts/06-inference-vs-training.html",  title: "06 · Inference vs. Training",   desc: "Schule vs. Einsatz: wo läuft was, und warum ist Training so viel teurer." },
        // weitere Stufe-B-Seiten hier einfügen
      ],
    },
    {
      id: "C",
      label: "Stufe C · Mit LLMs arbeiten",
      items: [
        { file: "concepts/07-prompting-patterns.html", title: "07 · Prompting-Patterns", desc: "Few-shot, Chain-of-Thought, System-Prompt, Structured Output — die billigste Hebelwirkung." },
        { file: "concepts/08-rag.html",                 title: "08 · RAG",                  desc: "Retrieval Augmented Generation + Vektordatenbanken: eigene Daten ohne Training." },
        { file: "concepts/09-agents-tool-use.html",     title: "09 · Agents / Tool-Use",    desc: "Der Loop: Modell ruft Werkzeuge auf und denkt weiter — Code/API/Suche einbinden." },
        { file: "concepts/10-fine-tuning.html",         title: "10 · Fine-Tuning",          desc: "LoRA/PEFT: das Modell auf Spezialthemen „üben“, ohne das Basis-Modell umzubauen." },
        // weitere Stufe-C-Seiten hier einfügen
      ],
    },
  ],
  playground: [
    { file: "playground/tokenizer-demo.html", title: "Tokenizer",  desc: "Tippe Text und sieh, wie er in Tokens zerlegt wird." },
    { file: "playground/attention-demo.html", title: "Attention",  desc: "Self-Attention als Heatmap — und wie Temperatur den Fokus schärft." },
  ],
};

// Alle Seiten (Konzepte + Playground) in Reihenfolge
function allPages() {
  const out = [];
  SITE.stages.forEach((s) => s.items.forEach((it) => out.push(it)));
  SITE.playground.forEach((it) => out.push(it));
  return out;
}

function currentPage() {
  const p = location.pathname.split("/").pop();
  return allPages().find((x) => x.file.endsWith(p)) || null;
}

// Unterseiten liegen eine Ebene tiefer -> "../" voranstellen
function basePrefix() {
  const here = location.pathname.split("/").pop();
  return here === "index.html" || location.pathname.endsWith("/") ? "" : "../";
}

function cardHtml(it) {
  const bp = basePrefix();
  const num = (it.title.match(/^\d+/) || [""])[0];
  const titleClean = it.title.replace(/^\d+\s*·\s*/, "");
  return `<a class="card" href="${bp}${it.file}">
    <span class="num">${num || "→"}</span>
    <h3>${titleClean}</h3>
    <p>${it.desc || ""}</p>
  </a>`;
}

/* ---- Top-Nav mit Dropdowns ---- */
function buildTopNav() {
  const host = document.getElementById("topnav");
  if (!host) return;
  const bp = basePrefix();
  const brand = `<span class="brand">▸ ${SITE.title}</span>`;
  const home = `<a href="${bp}index.html">Hub</a>`;

  const stageGroups = SITE.stages.map((s) => {
    const items = s.items.map((it) => {
      const active = currentPage() && currentPage().file === it.file ? " active" : "";
      return `<a class="dd-item${active}" href="${bp}${it.file}">${it.title}</a>`;
    }).join("");
    return `<div class="dd-group"><div class="dd-label">${s.label}</div>${items}</div>`;
  }).join("");

  const pathDropdown = `
    <div class="dd">
      <button class="dd-btn" aria-haspopup="true">▾ Lernpfad</button>
      <div class="dd-panel">${stageGroups}</div>
    </div>`;

  const pg = SITE.playground.map((it) => {
    const active = currentPage() && currentPage().file === it.file ? " active" : "";
    return `<a class="dd-item${active}" href="${bp}${it.file}">${it.title}</a>`;
  }).join("");
  const pgDropdown = `
    <div class="dd">
      <button class="dd-btn" aria-haspopup="true">▾ Playground</button>
      <div class="dd-panel">${pg}</div>
    </div>`;

  host.innerHTML = brand + home + pathDropdown + pgDropdown;
}

/* ---- Hub (index.html): Karten nach Stufe gruppiert ---- */
function buildHub() {
  const stagesHost = document.getElementById("stageCards");
  if (stagesHost) {
    stagesHost.innerHTML = SITE.stages.map((s) => {
      const cards = s.items.map((it) => cardHtml(it)).join("");
      return `<h2>${s.label}</h2><div class="cards">${cards}</div>`;
    }).join("");
  }
  const pgHost = document.getElementById("playgroundCards");
  if (pgHost) {
    pgHost.innerHTML = `<h2>Playground (interaktiv)</h2><div class="cards">${
      SITE.playground.map((it) => cardHtml(it)).join("")
    }</div>`;
  }
}

/* ---- Prev/Next-Fußzeile ---- */
function buildBottomNav() {
  const host = document.getElementById("bottomnav");
  if (!host) return;
  const all = allPages();
  const cur = currentPage();
  if (!cur) { host.innerHTML = ""; return; }
  const bp = basePrefix();
  const i = all.findIndex((x) => x.file === cur.file);
  const prev = i > 0 ? `<a href="${bp}${all[i - 1].file}">← ${all[i - 1].title}</a>` : `<span></span>`;
  const next = i < all.length - 1 ? `<a href="${bp}${all[i + 1].file}">${all[i + 1].title} →</a>` : `<span></span>`;
  host.innerHTML = `${prev}<span class="spacer"></span>${next}`;
}

/* ---- Dropdown ein-/ausklappen ---- */
function wireDropdowns() {
  document.addEventListener("click", (e) => {
    const dd = e.target.closest(".dd");
    document.querySelectorAll("#topnav .dd").forEach((el) => {
      if (el !== dd) el.classList.remove("open");
    });
    if (dd) {
      dd.classList.toggle("open");
      e.stopPropagation();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  buildTopNav();
  buildHub();
  buildBottomNav();
  wireDropdowns();
});
