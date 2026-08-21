/* ============================================================
   nav.js – Top Navigation, Dropdowns, Hub & Prev/Next.
   ONE central structure (SITE) = source for everything.

   Scales to any number of pages:
   · Top-bar stays slim (Hub + 2 Dropdowns).
   · Path dropdown groups by stage (mirrors ROADMAP.md).
   · Hub (index.html) renders cards automatically by stage.

   NEW PAGE: Entry in the right stage (or playground) +
   if needed, create new stage. Nothing else.
   ============================================================ */

const SITE = {
  title: "AI Learning Course",
  // Stages = grouping. Order = learning path.
  stages: [
    {
      id: "A",
      label: "Stage A · Mental Models",
      items: [
        { file: "concepts/00-getting-started.html", title: "00 · Getting Started", desc: "What is AI anyway? For absolute beginners." },
        { file: "concepts/01-language-model-as-function.html", title: "01 · Language Model as Function", desc: "The one equation: P(next word | previous text)." },
        { file: "concepts/02-tokens-and-embeddings.html",     title: "02 · Tokens & Embeddings",         desc: "How text becomes numbers — and why meaning = position in space." },
        { file: "concepts/03-attention-overview.html",      title: "03 · Attention",                  desc: "The mechanism that makes LLMs: how a word 'looks at' others." },
      ],
    },
    {
      id: "B",
      label: "Stage B · Architecture & Training",
      items: [
        { file: "concepts/04-transformer-overview.html", title: "04 · Transformer Overview", desc: "How Attention + FFN stack into dozens of layers — the factory behind GPT/LLaMA." },
        { file: "concepts/05-training-intuitively.html",      title: "05 · Training Intuitively",        desc: "Loss, Backprop as idea, learning rate, epochs — how the model 'learns'." },
        { file: "concepts/06-inference-vs-training.html",  title: "06 · Inference vs. Training",   desc: "School vs. deployment: where what runs, and why training is so much more expensive." },
        { file: "concepts/28-alignment-rlhf-dpo.html",     title: "28 · Alignment (RLHF & DPO)",   desc: "How models become helpful: RLHF, DPO, Constitutional AI." },
      ],
    },
    {
      id: "C",
      label: "Stage C · Working with LLMs",
      items: [
        { file: "concepts/07-prompting-patterns.html", title: "07 · Prompting Patterns", desc: "Few-shot, Chain-of-Thought, System Prompt, Structured Output — the cheapest leverage." },
        { file: "concepts/08-rag.html",                 title: "08 · RAG",                  desc: "Retrieval Augmented Generation + Vector databases: own data without training." },
        { file: "concepts/09-agents-tool-use.html",     title: "09 · Agents / Tool-Use",    desc: "The Loop: model calls tools and thinks further — integrate code/API/search." },
        { file: "concepts/10-fine-tuning.html",         title: "10 · Fine-Tuning",          desc: "LoRA/PEFT: 'practice' the model on special topics without rebuilding the base model." },
        { file: "concepts/29-function-calling-deep-dive.html", title: "29 · Function Calling", desc: "Define tools, Multi-Calls, Error Handling, Streaming with Function Calls." },
        { file: "concepts/30-embedding-search-vector-search.html", title: "30 · Embedding Search", desc: "Vector Search, Cosine Similarity, Chunking — the foundation behind RAG." },
      ],
    },
    {
      id: "D",
      label: "Stage D · Ecosystem & Tools",
      items: [
        { file: "concepts/11-hugging-face.html", title: "11 · Hugging Face",        desc: "Hub + transformers library: load pretrained models and do inference." },
        { file: "concepts/12-llm-apis-practically.html", title: "12 · LLM APIs Practically", desc: "System Prompt, Streaming, Tool-Calls via API — inference without GPU." },
        { file: "concepts/13-notebook-workflow.html", title: "13 · Notebook Workflow", desc: "Colab/Jupyter: experimental AI workspace with cloud GPU." },
        { file: "concepts/14-open-vs-closed.html", title: "14 · Open vs. Closed",    desc: "Open-source models vs. proprietary APIs — cost, control, privacy." },
        { file: "concepts/27-local-models.html", title: "27 · Local Models",    desc: "Ollama, LM Studio, vLLM — run models locally." },
        { file: "concepts/32-multi-modal-models.html", title: "32 · Multi-Modal Models", desc: "Text, images, audio, video — models that understand multiple modalities." },
      ],
    },
    {
      id: "E",
      label: "Stage E · Evaluation & Limits",
      items: [
        { file: "concepts/15-evaluation-metrics.html",     title: "15 · Evaluation & Metrics", desc: "Accuracy, Perplexity intuitively — why you want to compare models/prompts measurably." },
        { file: "concepts/16-hallucinations-bias-limits.html", title: "16 · Hallucinations, Bias, Limits", desc: "Why models invent, mirror, and have hard limits (and countermeasures)." },
        { file: "concepts/17-cost-latency.html",            title: "17 · Cost & Latency",         desc: "Paid per token, quadratic attention — where money and time go." },
      ],
    },
    {
      id: "F",
      label: "Stage F · Reality / MLOps",
      items: [
        { file: "concepts/18-deployment.html", title: "18 · Deployment",          desc: "API/Edge/On-Prem hosting + Quantization (shrink model for weaker hardware)." },
        { file: "concepts/19-papers-news.html", title: "19 · Papers & News",       desc: "arXiv, Blogs, how to read papers efficiently without the math." },
        { file: "concepts/31-quantization-compression.html", title: "31 · Quantization & Compression", desc: "Q2 to FP16: Compress models for less hardware." },
        { file: "concepts/33-serving-deployment.html", title: "33 · Serving",       desc: "vLLM, TGI, TensorRT-LLM — scalable inference." },
        { file: "concepts/34-testing-evaluation.html", title: "34 · Testing & Evaluation", desc: "Unit Tests, Eval Datasets, LLM-as-Judge, CI/CD for LLMs." },
      ],
    },
    {
      id: "X",
      label: "Cross-thinking & Security",
      items: [
        { file: "concepts/20-what-cant-ai-do.html",       title: "20 · What Can't AI Do?",        desc: "Structural limits: no consciousness, no experience, no real logic." },
        { file: "concepts/21-difference-vs-understanding.html",   title: "21 · Difference vs. Understanding",  desc: "Word network vs. experience network — why 'guessing' isn't 'understanding'." },
        { file: "concepts/26-security-prompt-injection.html", title: "26 · Security & Prompt Injection", desc: "Prompt Injection, Jailbreaking, Sandboxing — when models are attacked." },
      ],
    },
    {
      id: "G",
      label: "Stage G · Mini-Projects (Practice)",
      items: [
        { file: "concepts/22-project-cli-chatbot.html",  title: "22 · CLI Chatbot",      desc: "First usable bot: API + System Prompt + Streaming + History." },
        { file: "concepts/23-project-mini-rag.html",     title: "23 · Mini-RAG",         desc: "Answer own data: Embeddings + Vector search + augmented Prompt." },
        { file: "concepts/24-project-attention-vis.html", title: "24 · Attention-Vis",    desc: "Build the heatmap from Concept 03 yourself (p5.js) — reading becomes making." },
        { file: "concepts/25-project-lora-train.html", title: "25 · Train LoRA", desc: "Train a small adapter on your own dataset (PEFT)." },
      ],
    },
  ],
  playground: [
    { file: "playground/tokenizer-demo.html", title: "Tokenizer",  desc: "Type text and see how it's split into tokens." },
    { file: "playground/attention-demo.html", title: "Attention",  desc: "Self-Attention as heatmap — and how temperature sharpens focus." },
    { file: "playground/embedding-vis.html", title: "Embeddings", desc: "2D Projection: How similar are words?" },
    { file: "playground/cost-calculator.html", title: "Cost Calculator", desc: "Token × Price = ? Calculate your API costs." },
    { file: "playground/rag-demo.html", title: "RAG Demo", desc: "Simulate Retrieval Augmented Generation." },
  ],
};

// All pages (Concepts + Playground) in order
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

// Sub-pages are one level deeper -> prepend "../"
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

/* ---- Top-Nav with Dropdowns ---- */
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
      <button class="dd-btn" aria-haspopup="true">▾ Learning Path</button>
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

/* ---- Hub (index.html): Cards grouped by stage ---- */
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
    pgHost.innerHTML = `<h2>Playground (interactive)</h2><div class="cards">${
      SITE.playground.map((it) => cardHtml(it)).join("")
    }</div>`;
  }
}

/* ---- Prev/Next footer ---- */
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

/* ---- Dropdown toggle ---- */
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
