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
      id: "0",
      label: "Stufe 0 · CS & Engineering-Grundlagen",
      items: [
        { file: "concepts/01-datenstrukturen-algorithmen.html", title: "01 · Datenstrukturen & Algorithmen", desc: "Arrays, Bäume, Graphen, Sortieren, Suchen, Big O — der Werkzeugkasten hinter jedem Programm." },
        { file: "concepts/02-systemarchitektur-design.html", title: "02 · Systemarchitektur & Design", desc: "Monolithen, Microservices, Serverless, event-getrieben, SOLID & GoF-Patterns." },
        { file: "concepts/03-betriebssysteme-netzwerke.html", title: "03 · Betriebssysteme & Netzwerke", desc: "Threads, Concurrency, Speicher, TCP/IP, HTTP/HTTPS, DNS, Sockets." },
        { file: "concepts/04-programmierparadigmen-sprachen.html", title: "04 · Programmierparadigmen & Sprachen", desc: "OOP, FP, imperativ vs. deklarativ; kompiliert vs. interpretiert vs. verwaltet." },
        { file: "concepts/05-software-engineering-lebenszyklus.html", title: "05 · Software-Engineering & Lebenszyklus", desc: "Agile, Scrum, Git-Branching, Code Review und die Test-Ebenen." },
        { file: "concepts/06-frontend-entwicklung.html", title: "06 · Frontend-Entwicklung", desc: "HTML/CSS/JS/TS, React & Co., Performance, PWAs, a11y, responsive." },
        { file: "concepts/07-backend-entwicklung.html", title: "07 · Backend-Entwicklung", desc: "REST/GraphQL/gRPC, Server-Frameworks, SQL- & NoSQL-Datenbanken." },
        { file: "concepts/08-devops-cloud.html", title: "08 · DevOps, Infrastruktur & Cloud", desc: "Docker/K8s, CI/CD, Cloud & IaC, Observability." },
        { file: "concepts/09-sicherheit-compliance.html", title: "09 · Sicherheit & Compliance", desc: "OWASP, AuthN/AuthZ, OAuth/OIDC/JWT, Kryptografie, Key-Management." },
        { file: "concepts/10-spezialisierte-domaenen.html", title: "10 · Spezialisierte Domänen", desc: "KI/ML, Mobile, Data Engineering, Embedded/IoT — eine Karte der Landschaft." },
      ],
    },
    {
      id: "A",
      label: "Stufe A · Mentale Modelle",
      items: [
        { file: "concepts/11-einstieg.html", title: "11 · Einstieg", desc: "Was ist KI überhaupt? Für absolute Anfänger." },
        { file: "concepts/12-sprachmodell-als-funktion.html", title: "12 · Sprachmodell als Funktion", desc: "Die eine Gleichung: P(nächstes Wort | bisheriger Text)." },
        { file: "concepts/13-tokens-und-embeddings.html",     title: "13 · Tokens & Embeddings",         desc: "Wie Text in Zahlen wird — und warum Bedeutung = Position im Raum ist." },
        { file: "concepts/14-attention-ueberblick.html",      title: "14 · Attention",                  desc: "Der Mechanismus, der LLMs ausmacht: wie ein Wort „hinblickt“." },
        // weitere Stufe-A-Seiten hier einfügen
      ],
    },

    {
      id: "B",
      label: "Stufe B · Architektur & Training",
      items: [
        { file: "concepts/15-transformer-ueberblick.html", title: "15 · Transformer-Überblick", desc: "Wie Attention + FFN zu Dutzenden Schichten gestapelt werden — die Fabrik hinter GPT/LLaMA." },
        { file: "concepts/16-training-intuitiv.html",      title: "16 · Training intuitiv",        desc: "Loss, Backprop als Idee, Lernrate, Epochen — wie das Modell „lernt“." },
        { file: "concepts/17-inference-vs-training.html",  title: "17 · Inference vs. Training",   desc: "Schule vs. Einsatz: wo läuft was, und warum ist Training so viel teurer." },
        { file: "concepts/18-alignment-rlhf-dpo.html",     title: "18 · Alignment (RLHF & DPO)",   desc: "Wie Modelle hilfreich werden: RLHF, DPO, Constitutional AI." },
      ],
    },
    {
      id: "C",
      label: "Stufe C · Mit LLMs arbeiten",
      items: [
        { file: "concepts/19-prompting-patterns.html", title: "19 · Prompting-Patterns", desc: "Few-shot, Chain-of-Thought, System-Prompt, Structured Output — die billigste Hebelwirkung." },
        { file: "concepts/20-rag.html",                 title: "20 · RAG",                  desc: "Retrieval Augmented Generation + Vektordatenbanken: eigene Daten ohne Training." },
        { file: "concepts/21-agents-tool-use.html",     title: "21 · Agents / Tool-Use",    desc: "Der Loop: Modell ruft Werkzeuge auf und denkt weiter — Code/API/Suche einbinden." },
        { file: "concepts/22-fine-tuning.html",         title: "22 · Fine-Tuning",          desc: "LoRA/PEFT: das Modell auf Spezialthemen „üben“, ohne das Basis-Modell umzubauen." },
        { file: "concepts/23-agent-loop-harness.html",  title: "23 · Agent-Loop & Harness", desc: "Die while-Schleife Modell→Tool→Ergebnis→Modell — Harness vs. Modell, Kontext-Kosten." },
        { file: "concepts/24-kontext-engineering.html", title: "24 · Kontext-Engineering",  desc: "Kontext ist endlich + teuer: Caching, Kompaktion, Progressive Disclosure, O(n²)." },
        { file: "concepts/25-memory-agenten.html", title: "25 · Memory für Agenten", desc: "Tiers: Core/Recall/Archival — Gedächtnis außerhalb des Modells, gezieltes Retrieval." },
        { file: "concepts/26-multi-agent-subagents.html", title: "26 · Multi-Agent & Subagents", desc: "Wann mehrere Agenten lohnen (und wann nicht): Isolation, Limits, Mergen." },
        { file: "concepts/27-function-calling-deep-dive.html", title: "27 · Function Calling (Deep Dive)", desc: "Tools definieren, Multi-Calls, Fehlerbehandlung, Streaming mit Function Calls." },
        { file: "concepts/28-embedding-suche-vector-search.html", title: "28 · Embedding-Suche & Vector Search", desc: "Vector Search, Cosine Similarity, Chunking — die Basis hinter RAG." },
        // weitere Stufe-C-Seiten hier einfügen
      ],
    },
    {
      id: "D",
      label: "Stufe D · Ökosystem & Werkzeuge",
      items: [
        { file: "concepts/29-hugging-face.html", title: "29 · Hugging Face",        desc: "Hub + transformers-Bibliothek: vortrainierte Modelle laden und Inference machen." },
        { file: "concepts/30-llm-apis-praktisch.html", title: "30 · LLM-APIs praktisch", desc: "System-Prompt, Streaming, Tool-Calls über die API — Inference ohne GPU." },
        { file: "concepts/31-notebook-workflow.html", title: "31 · Notebook-Workflow", desc: "Colab/Jupyter: experimenteller KI-Arbeitsplatz mit Cloud-GPU." },
        { file: "concepts/32-open-vs-closed.html", title: "32 · Open vs. Closed",    desc: "Open-Source-Modelle vs. proprietäre APIs — Kosten, Kontrolle, Privatsphäre." },
        { file: "concepts/33-lokale-modelle.html", title: "33 · Lokale Modelle",    desc: "Ollama, LM Studio, vLLM — Modelle lokal laufen lassen." },
        { file: "concepts/34-multi-modal-modelle.html", title: "34 · Multi-Modal Modelle", desc: "Text, Bilder, Audio, Video — Modelle die mehrere Modalitäten verstehen." },
      ],
    },
    {
      id: "E",
      label: "Stufe E · Bewerten & Grenzen",
      items: [
        { file: "concepts/35-evaluierung-metriken.html",     title: "35 · Evaluierung & Metriken", desc: "Accuracy, Perplexity intuitiv — warum du Modelle/Prompts messbar vergleichen willst." },
        { file: "concepts/36-halluzinationen-bias-limits.html", title: "36 · Halluzinationen, Bias, Limits", desc: "Warum Modelle erfinden, spiegeln und harte Grenzen haben (und Gegenmittel)." },
        { file: "concepts/37-kosten-latenz.html",            title: "37 · Kosten & Latenz",         desc: "Pro Token bezahlt, quadratische Attention — wo Geld und Zeit bleiben." },
        { file: "concepts/38-sicherheit-prompt-injection.html", title: "38 · Sicherheit & Prompt Injection", desc: "Prompt Injection, Jailbreaking, Sandboxing — wenn Modelle angegriffen werden." },
        { file: "concepts/39-modell-routing-cascades.html",  title: "39 · Modell-Routing & Cascades", desc: "Erst billig, bei Bedarf eskalieren: Kosten sparen ohne Qualität zu verlieren." },
        // weitere Stufe-E-Seiten hier einfügen
      ],
    },
    {
      id: "F",
      label: "Stufe F · Realität / MLOps",
      items: [
        { file: "concepts/40-deployment.html", title: "40 · Deployment",          desc: "API/Edge/On-Prem hosting + Quantisierung (Modell schrumpfen für schwächere Hardware)." },
        { file: "concepts/41-papers-news.html", title: "41 · Papers & News",       desc: "arXiv, Blogs, wie man Papers effizient liest, ohne die Mathe zu können." },
        { file: "concepts/42-quantisierung-kompression.html", title: "42 · Quantisierung & Kompression", desc: "Q2 bis FP16: Modelle komprimieren für weniger Hardware." },
        { file: "concepts/43-serving-deployment.html", title: "43 · Serving",       desc: "vLLM, TGI, TensorRT-LLM — skalierbare Inference." },
        { file: "concepts/44-testing-evaluation.html", title: "44 · Testing & Evaluation", desc: "Unit Tests, Eval-Datasets, LLM-as-Judge, CI/CD für LLMs." },
        { file: "concepts/45-sandboxing-haertung.html", title: "45 · Sandboxing & Härtung", desc: "Riskante Code-Ausführung isolieren: Risk-Tiers, Sandbox, Netzwerk-Allowlist." },
      ],
    },
    {
      id: "X",
      label: "Querdenken",
      items: [
        { file: "concepts/46-was-kann-ai-nicht.html",       title: "46 · Was kann AI nicht?",        desc: "Strukturelle Grenzen: kein Bewusstsein, keine Erfahrung, keine echte Logik." },
        { file: "concepts/47-unterschied-verstehen.html",   title: "47 · Unterschied zu Verstehen",  desc: "Wort-Netz vs. Erlebnis-Netz — warum ‚raten‘ kein ‚begreifen‘ ist." },
        // weitere Querdenken-Seiten hier einfügen
      ],
    },
    {
      id: "G",
      label: "Stufe G · Mini-Projekte (Praxis)",
      items: [
        { file: "concepts/48-projekt-cli-chatbot.html",  title: "48 · CLI-Chatbot",      desc: "Erster benutzbarer Bot: API + System-Prompt + Streaming + Verlauf." },
        { file: "concepts/49-projekt-mini-rag.html",     title: "49 · Mini-RAG",         desc: "Eigene Daten beantworten: Embeddings + Vektorsuche + augmentierter Prompt." },
        { file: "concepts/50-projekt-attention-vis.html", title: "50 · Attention-Vis",    desc: "Die Heatmap aus Konzept 03 selbst bauen (p5.js) — gelesen wird zu gemacht." },
        { file: "concepts/51-projekt-lora-trainieren.html", title: "51 · LoRA trainieren", desc: "Einen kleinen Adapter auf einem eigenen Datensatz trainieren (PEFT)." },
        // weitere Projekte hier einfügen
      ],
    },
    {
      id: "H",
      label: "Stufe H · Moderne Architektur & Daten",
      items: [
        { file: "concepts/52-mcp-model-context-protocol.html", title: "52 · MCP (Model Context Protocol)", desc: "USB-C für KI-Tools: Server, Client, Tools/Resources/Prompts — einmal bauen, überall nutzen." },
        { file: "concepts/53-diffusion-bildgenerierung.html", title: "53 · Diffusion & Bildgenerierung", desc: "Rauschen wegnehmen statt Text raten: Latent Diffusion, U-Net/DiT, CFG, Seeds, LoRA-Stile." },
        { file: "concepts/54-rag-vs-finetuning-vs-prompting.html", title: "54 · RAG vs. Fine-Tuning vs. Prompting", desc: "Der Entscheidungsbaum: billig anfangen, gezielt eskalieren — mit Vergleichstabelle." },
        { file: "concepts/55-datenqualitaet-datensaetze.html", title: "55 · Datenqualität & Datensätze", desc: "Garbage in, garbage out: Kuratierungskreislauf, Qualitätskriterien, Referenz-Datasets." },
        { file: "concepts/56-sampling-decoding.html", title: "56 · Sampling & Decoding", desc: "Temperatur, Top-p/Top-k, Greedy — wie aus Logits das nächste Wort wird." },
        { file: "concepts/57-kv-cache-inference-optimierung.html", title: "57 · KV-Cache & Inference-Optimierung", desc: "Warum Generation ohne Cache O(n²) wäre: KV-Cache, Batching, Throughput vs. Latenz." },
        { file: "concepts/58-attention-details.html", title: "58 · Attention-Details", desc: "Multi-Head, Cross-Attention, Positional Encoding — und warum √d_k skaliert." },
        { file: "concepts/59-retrieval-feintuning.html", title: "59 · Retrieval-Feintuning", desc: "Chunking-Strategien, Hybrid Search, Re-Ranking — RAG von „läuft“ zu „gut“." },
        { file: "concepts/60-agent-architekturen.html", title: "60 · Agent-Architekturen", desc: "ReAct vs. Plan-and-Execute, Framework-Vergleich, Agent-Eval." },
      ],
    },
    {
      id: "I",
      label: "Stufe I · Angewandt & Fortgeschritten",
      items: [
        { file: "concepts/61-llm-observability.html", title: "61 · LLM-Observability", desc: "LLM-Apps in Produktion tracen, loggen und evaluieren — aus Demo ein System machen." },
        { file: "concepts/62-streaming-transport.html", title: "62 · Streaming & Transport", desc: "Wie Tokens in deine UI kommen: SSE vs. WebSockets, Teilantworten, Abort." },
        { file: "concepts/63-vektordatenbanken.html", title: "63 · Vektordatenbanken", desc: "Die Index-Ebene hinter RAG: ANN, HNSW und die Optionen pgvector/Qdrant/Milvus." },
        { file: "concepts/64-alternative-architekturen.html", title: "64 · Alternative Architekturen", desc: "Jenseits des Transformers: SSM/Mamba und RWKV mit linearem Skalieren." },
        { file: "concepts/65-rlhf-deep-dive.html", title: "65 · RLHF & RL Deep Dive", desc: "Reward-Modelle, PPO und DPO — wie Alignment-Training wirklich funktioniert." },
        { file: "concepts/66-coding-agents.html", title: "66 · Coding Agents", desc: "Agents, die Code schreiben, testen und fixen — die Schleife und die Tools." },
        { file: "concepts/67-verantwortungsvolle-ki.html", title: "67 · Verantwortungsvolle KI & Governance", desc: "Bias, Transparenz, Red Teaming und die Regulierungslandschaft." },
        { file: "concepts/68-destillation-pruning.html", title: "68 · Destillation & Pruning", desc: "Kleinere Modelle: Teacher→Student-Destillation und Weight-Pruning." },
      ],
    },
  ],

  playground: [
    { file: "playground/tokenizer-demo.html", title: "Tokenizer",  desc: "Tippe Text und sieh, wie er in Tokens zerlegt wird." },
    { file: "playground/attention-demo.html", title: "Attention",  desc: "Self-Attention als Heatmap — und wie Temperatur den Fokus schärft." },
    { file: "playground/embedding-vis.html", title: "Embeddings", desc: "2D-Projektion: Wie ähnlich sind Wörter?" },
    { file: "playground/cost-calculator.html", title: "Kostenrechner", desc: "Token × Preis = ? Berechne deine API-Kosten." },
    { file: "playground/rag-demo.html", title: "RAG-Demo", desc: "Retrieval Augmented Generation simulieren." },
    { file: "playground/agent-loop.html", title: "Agent-Loop", desc: "Der Modell→Tool→Ergebnis→Modell-Loop als Animation." },
    { file: "playground/context-window.html", title: "Context-Window", desc: "Wie Kontext wächst, gecacht wird und Kompaktion greift (O(n²))." },
    { file: "playground/memory-tiers.html", title: "Memory-Tiers", desc: "Core/Recall/Archival — was landet im Prompt, was wandert ins Externe." },
    { file: "playground/routing-cascade.html", title: "Routing & Cascade", desc: "Erst billig, bei Bedarf eskalieren — Kosten sparen interaktiv." },
    { file: "playground/sorting-vis.html", title: "Sortieren & Big-O", desc: "Beobachte Bubble/Merge/Quick beim Sortieren und zähle Vergleiche — Beweis für Big-O." },
    { file: "playground/architecture-compare.html", title: "Architektur-Stile", desc: "Monolith vs. Microservices vs. Serverless vs. Event-getrieben — dieselbe App, vier Verdrahtungen." },
    { file: "playground/http-stack.html", title: "HTTP & TCP/IP", desc: "Sieh, wie ein Request Schicht für Schicht eingepackt und auf dem Rückweg entpackt wird." },
    { file: "playground/paradigm-compare.html", title: "Paradigmen", desc: "Dasselbe Problem in imperativem, OOP- und funktionalem Stil." },
    { file: "playground/git-branching.html", title: "Git-Branching", desc: "Gitflow vs. Trunk-based als animierter Commit-Graph." },
    { file: "playground/chat-ui-compare.html", title: "Chat-UI", desc: "Dieselbe Chat-UI React-artig vs. Svelte-artig gerendert." },
    { file: "playground/rest-vs-graphql.html", title: "REST vs. GraphQL", desc: "Round-Trips und Over-Fetching nebeneinander." },
    { file: "playground/cicd-pipeline.html", title: "CI/CD-Pipeline", desc: "Commit → Build → Test → Deploy → Monitor, mit Feedback-Schleife." },
    { file: "playground/prompt-injection.html", title: "Prompt Injection", desc: "Sieh, wie präparierte Eingabe das Modell kapern kann." },
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
  // Root-Landingpage (lädt de/assets/nav.js, liegt aber eine Ebene über de/)
  if (!location.pathname.includes("/de/") && !location.pathname.includes("/en/")) return "de/";
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


/* ---- Theme Toggle (Dark/Light, localStorage) ---- */
function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const btn = document.getElementById("theme-toggle");
  if (btn) btn.textContent = theme === "light" ? "🌙 Dark" : "☀️ Light";
}

function toggleTheme() {
  const cur = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
  localStorage.setItem("learnai-theme", cur);
  applyTheme(cur);
}

// Gespeichertes Theme sofort anwenden (verhindert Flash beim Laden)
applyTheme(localStorage.getItem("learnai-theme") || "dark");

/* ---- Suche (Hub): alle Seiten nach Titel/Beschreibung durchsuchen ---- */
function initSearch() {
  const host = document.getElementById("search-box");
  if (!host) return;
  host.innerHTML = `<input type="search" placeholder="Suchen…" aria-label="Suchen" />
    <div class="search-results"></div>`;
  const input = host.querySelector("input");
  const out = host.querySelector(".search-results");
  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { out.innerHTML = ""; return; }
    const hits = allPages()
      .filter((it) => (it.title + " " + (it.desc || "")).toLowerCase().includes(q))
      .slice(0, 12);
    out.innerHTML = hits.length
      ? hits.map((it) => {
          const bp = basePrefix();
          return `<a href="${bp}${it.file}">${it.title}<span class="hit-desc">${it.desc || ""}</span></a>`;
        }).join("")
      : `<a>Keine Treffer</a>`;
  });
}

/* ---- Progress Tracking (localStorage) ---- */
function markRead(file) {
  const read = JSON.parse(localStorage.getItem("learnai-read") || "[]");
  if (!read.includes(file)) {
    read.push(file);
    localStorage.setItem("learnai-read", JSON.stringify(read));
    updateProgressUI();
  }
}

function isRead(file) {
  const read = JSON.parse(localStorage.getItem("learnai-read") || "[]");
  return read.includes(file);
}

function updateProgressUI() {
  const read = JSON.parse(localStorage.getItem("learnai-read") || "[]");
  const all = allPages();
  const percent = Math.round((read.length / all.length) * 100);
  const bar = document.getElementById("progress-bar");
  if (bar) {
    bar.style.width = percent + "%";
    bar.textContent = percent + "%";
  }
  const count = document.getElementById("progress-count");
  if (count) {
    count.textContent = read.length + " von " + all.length + " Seiten gelesen";
  }
}

// Mark current page as read when loaded
document.addEventListener("DOMContentLoaded", () => {
  const cur = currentPage();
  if (cur) markRead(cur.file);
});

document.addEventListener("DOMContentLoaded", () => {
  buildTopNav();
  buildHub();
  buildBottomNav();
  wireDropdowns();
  initSearch();
});      

