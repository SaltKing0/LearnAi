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
        { file: "concepts/28-alignment-rlhf-dpo.html",     title: "28 · Alignment (RLHF & DPO)",   desc: "Wie Modelle hilfreich werden: RLHF, DPO, Constitutional AI." },
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
    {
      id: "D",
      label: "Stufe D · Ökosystem & Werkzeuge",
      items: [
        { file: "concepts/11-hugging-face.html", title: "11 · Hugging Face",        desc: "Hub + transformers-Bibliothek: vortrainierte Modelle laden und Inference machen." },
        { file: "concepts/12-llm-apis-praktisch.html", title: "12 · LLM-APIs praktisch", desc: "System-Prompt, Streaming, Tool-Calls über die API — Inference ohne GPU." },
        { file: "concepts/13-notebook-workflow.html", title: "13 · Notebook-Workflow", desc: "Colab/Jupyter: experimenteller KI-Arbeitsplatz mit Cloud-GPU." },
        { file: "concepts/14-open-vs-closed.html", title: "14 · Open vs. Closed",    desc: "Open-Source-Modelle vs. proprietäre APIs — Kosten, Kontrolle, Privatsphäre." },
        { file: "concepts/27-lokale-modelle.html", title: "27 · Lokale Modelle",    desc: "Ollama, LM Studio, vLLM — Modelle lokal laufen lassen." },
        { file: "concepts/32-multi-modal-modelle.html", title: "32 · Multi-Modal Modelle", desc: "Text, Bilder, Audio, Video — Modelle die mehrere Modalitäten verstehen." },
      ],
    },
    {
      id: "E",
      label: "Stufe E · Bewerten & Grenzen",
      items: [
        { file: "concepts/15-evaluierung-metriken.html",     title: "15 · Evaluierung & Metriken", desc: "Accuracy, Perplexity intuitiv — warum du Modelle/Prompts messbar vergleichen willst." },
        { file: "concepts/16-halluzinationen-bias-limits.html", title: "16 · Halluzinationen, Bias, Limits", desc: "Warum Modelle erfinden, spiegeln und harte Grenzen haben (und Gegenmittel)." },
        { file: "concepts/17-kosten-latenz.html",            title: "17 · Kosten & Latenz",         desc: "Pro Token bezahlt, quadratische Attention — wo Geld und Zeit bleiben." },
        // weitere Stufe-E-Seiten hier einfügen
      ],
    },
    {
      id: "F",
      label: "Stufe F · Realität / MLOps",
      items: [
        { file: "concepts/18-deployment.html", title: "18 · Deployment",          desc: "API/Edge/On-Prem hosting + Quantisierung (Modell schrumpfen für schwächere Hardware)." },
        { file: "concepts/19-papers-news.html", title: "19 · Papers & News",       desc: "arXiv, Blogs, wie man Papers effizient liest, ohne die Mathe zu können." },
        { file: "concepts/31-quantisierung-kompression.html", title: "31 · Quantisierung & Kompression", desc: "Q2 bis FP16: Modelle komprimieren für weniger Hardware." },
        { file: "concepts/33-serving-deployment.html", title: "33 · Serving",       desc: "vLLM, TGI, TensorRT-LLM — skalierbare Inference." },
        { file: "concepts/34-testing-evaluation.html", title: "34 · Testing & Evaluation", desc: "Unit Tests, Eval-Datasets, LLM-as-Judge, CI/CD für LLMs." },
      ],
    },
    {
      id: "X",
      label: "Querdenken",
      items: [
        { file: "concepts/20-was-kann-ai-nicht.html",       title: "20 · Was kann AI nicht?",        desc: "Strukturelle Grenzen: kein Bewusstsein, keine Erfahrung, keine echte Logik." },
        { file: "concepts/21-unterschied-verstehen.html",   title: "21 · Unterschied zu Verstehen",  desc: "Wort-Netz vs. Erlebnis-Netz — warum ‚raten‘ kein ‚begreifen‘ ist." },
        // weitere Querdenken-Seiten hier einfügen
      ],
    },
    {
      id: "G",
      label: "Stufe G · Mini-Projekte (Praxis)",
      items: [
        { file: "concepts/22-projekt-cli-chatbot.html",  title: "22 · CLI-Chatbot",      desc: "Erster benutzbarer Bot: API + System-Prompt + Streaming + Verlauf." },
        { file: "concepts/23-projekt-mini-rag.html",     title: "23 · Mini-RAG",         desc: "Eigene Daten beantworten: Embeddings + Vektorsuche + augmentierter Prompt." },
        { file: "concepts/24-projekt-attention-vis.html", title: "24 · Attention-Vis",    desc: "Die Heatmap aus Konzept 03 selbst bauen (p5.js) — gelesen wird zu gemacht." },
        { file: "concepts/25-projekt-lora-trainieren.html", title: "25 · LoRA trainieren", desc: "Einen kleinen Adapter auf einem eigenen Datensatz trainieren (PEFT)." },
        // weitere Projekte hier einfügen
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
