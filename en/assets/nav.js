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
      id: "0",
      label: "Stage 0 · CS & Engineering Foundations",
      items: [
        { file: "concepts/01-data-structures-algorithms.html", title: "01 · Data Structures & Algorithms", desc: "Arrays, trees, graphs, sorting, searching, Big O — the toolbox behind every program." },
        { file: "concepts/02-system-architecture-design.html", title: "02 · System Architecture & Design", desc: "Monoliths, microservices, serverless, event-driven, SOLID & GoF patterns." },
        { file: "concepts/03-os-networking.html", title: "03 · Operating Systems & Networking", desc: "Threads, concurrency, memory, TCP/IP, HTTP/HTTPS, DNS, sockets." },
        { file: "concepts/04-programming-paradigms.html", title: "04 · Programming Paradigms & Languages", desc: "OOP, FP, imperative vs. declarative; compiled vs. interpreted vs. managed." },
        { file: "concepts/05-software-engineering-lifecycle.html", title: "05 · Software Engineering & Lifecycle", desc: "Agile, Scrum, Git branching, code review, and the testing levels." },
        { file: "concepts/06-frontend-development.html", title: "06 · Frontend Development", desc: "HTML/CSS/JS/TS, React & friends, performance, PWAs, a11y, responsive." },
        { file: "concepts/07-backend-development.html", title: "07 · Backend Development", desc: "REST/GraphQL/gRPC, server frameworks, SQL & NoSQL databases." },
        { file: "concepts/08-devops-cloud.html", title: "08 · DevOps, Infrastructure & Cloud", desc: "Docker/K8s, CI/CD, cloud & IaC, observability." },
        { file: "concepts/09-security-compliance.html", title: "09 · Security & Compliance", desc: "OWASP, authN/authZ, OAuth/OIDC/JWT, cryptography, key management." },
        { file: "concepts/10-specialized-domains.html", title: "10 · Specialized Domains", desc: "AI/ML, mobile, data engineering, embedded/IoT — a map of the landscape." },
      ],
    },
    {
      id: "A",
      label: "Stage A · Mental Models",
      items: [
        { file: "concepts/11-getting-started.html", title: "11 · Getting Started", desc: "What is AI anyway? For absolute beginners." },
        { file: "concepts/12-language-model-as-function.html", title: "12 · Language Model as Function", desc: "The one equation: P(next word | previous text)." },
        { file: "concepts/13-tokens-and-embeddings.html",     title: "13 · Tokens & Embeddings",         desc: "How text becomes numbers — and why meaning = position in space." },
        { file: "concepts/14-attention-overview.html",      title: "14 · Attention",                  desc: "The mechanism that makes LLMs: how a word 'looks at' others." },
      ],
    },
    {
      id: "B",
      label: "Stage B · Architecture & Training",
      items: [
        { file: "concepts/15-transformer-overview.html", title: "15 · Transformer Overview", desc: "How Attention + FFN stack into dozens of layers — the factory behind GPT/LLaMA." },
        { file: "concepts/16-training-intuitively.html",      title: "16 · Training Intuitively",        desc: "Loss, Backprop as idea, learning rate, epochs — how the model 'learns'." },
        { file: "concepts/17-inference-vs-training.html",  title: "17 · Inference vs. Training",   desc: "School vs. deployment: where what runs, and why training is so much more expensive." },
        { file: "concepts/18-alignment-rlhf-dpo.html",     title: "18 · Alignment (RLHF & DPO)",   desc: "How models become helpful: RLHF, DPO, Constitutional AI." },
      ],
    },
    {
      id: "C",
      label: "Stage C · Working with LLMs",
      items: [
        { file: "concepts/19-prompting-patterns.html", title: "19 · Prompting Patterns", desc: "Few-shot, Chain-of-Thought, System Prompt, Structured Output — the cheapest leverage." },
        { file: "concepts/20-rag.html",                 title: "20 · RAG",                  desc: "Retrieval Augmented Generation + Vector databases: own data without training." },
        { file: "concepts/21-agents-tool-use.html",     title: "21 · Agents / Tool-Use",    desc: "The Loop: model calls tools and thinks further — integrate code/API/search." },
        { file: "concepts/22-fine-tuning.html",         title: "22 · Fine-Tuning",          desc: "LoRA/PEFT: 'practice' the model on special topics without rebuilding the base model." },
        { file: "concepts/23-agent-loop-harness.html",  title: "23 · Agent Loop & Harness", desc: "The while loop model→tool→result→model — harness vs. model, context cost." },
        { file: "concepts/24-context-engineering.html", title: "24 · Context Engineering",  desc: "Context is finite + costly: caching, compaction, progressive disclosure, O(n²)." },
        { file: "concepts/25-memory-agents.html", title: "25 · Memory for Agents", desc: "Tiers: Core/Recall/Archival — memory outside the model, targeted retrieval." },
        { file: "concepts/26-multi-agent-subagents.html", title: "26 · Multi-Agent & Subagents", desc: "When several agents pay off (and when not): isolation, limits, merging." },
        { file: "concepts/27-function-calling-deep-dive.html", title: "27 · Function Calling", desc: "Define tools, Multi-Calls, Error Handling, Streaming with Function Calls." },
        { file: "concepts/28-embedding-search-vector-search.html", title: "28 · Embedding Search", desc: "Vector Search, Cosine Similarity, Chunking — the foundation behind RAG." },
      ],
    },
    {
      id: "D",
      label: "Stage D · Ecosystem & Tools",
      items: [
        { file: "concepts/29-hugging-face.html", title: "29 · Hugging Face",        desc: "Hub + transformers library: load pretrained models and do inference." },
        { file: "concepts/30-llm-apis-practically.html", title: "30 · LLM APIs Practically", desc: "System Prompt, Streaming, Tool-Calls via API — inference without GPU." },
        { file: "concepts/31-notebook-workflow.html", title: "31 · Notebook Workflow", desc: "Colab/Jupyter: experimental AI workspace with cloud GPU." },
        { file: "concepts/32-open-vs-closed.html", title: "32 · Open vs. Closed",    desc: "Open-source models vs. proprietary APIs — cost, control, privacy." },
        { file: "concepts/33-local-models.html", title: "33 · Local Models",    desc: "Ollama, LM Studio, vLLM — run models locally." },
        { file: "concepts/34-multi-modal-models.html", title: "34 · Multi-Modal Models", desc: "Text, images, audio, video — models that understand multiple modalities." },
      ],
    },
    {
      id: "E",
      label: "Stage E · Evaluation & Limits",
      items: [
        { file: "concepts/35-evaluation-metrics.html",     title: "35 · Evaluation & Metrics", desc: "Accuracy, Perplexity intuitively — why you want to compare models/prompts measurably." },
        { file: "concepts/36-hallucinations-bias-limits.html", title: "36 · Hallucinations, Bias, Limits", desc: "Why models invent, mirror, and have hard limits (and countermeasures)." },
        { file: "concepts/37-cost-latency.html",            title: "37 · Cost & Latency",         desc: "Paid per token, quadratic attention — where money and time go." },
        { file: "concepts/38-security-prompt-injection.html", title: "38 · Security & Prompt Injection", desc: "Prompt Injection, Jailbreaking, Sandboxing — when models are attacked." },
        { file: "concepts/39-model-routing-cascades.html",  title: "39 · Model Routing & Cascades", desc: "Start cheap, escalate when needed: save cost without losing quality." },
      ],
    },
    {
      id: "F",
      label: "Stage F · Reality / MLOps",
      items: [
        { file: "concepts/40-deployment.html", title: "40 · Deployment",          desc: "API/Edge/On-Prem hosting + Quantization (shrink model for weaker hardware)." },
        { file: "concepts/41-papers-news.html", title: "41 · Papers & News",       desc: "arXiv, Blogs, how to read papers efficiently without the math." },
        { file: "concepts/42-quantization-compression.html", title: "42 · Quantization & Compression", desc: "Q2 to FP16: Compress models for less hardware." },
        { file: "concepts/43-serving-deployment.html", title: "43 · Serving",       desc: "vLLM, TGI, TensorRT-LLM — scalable inference." },
        { file: "concepts/44-testing-evaluation.html", title: "44 · Testing & Evaluation", desc: "Unit Tests, Eval Datasets, LLM-as-Judge, CI/CD for LLMs." },
        { file: "concepts/45-sandboxing-hardening.html", title: "45 · Sandboxing & Hardening", desc: "Isolate risky code execution: risk tiers, sandbox, network allowlist." },
      ],
    },
    {
      id: "X",
      label: "Cross-thinking & Security",
      items: [
        { file: "concepts/46-what-cant-ai-do.html",       title: "46 · What Can't AI Do?",        desc: "Structural limits: no consciousness, no experience, no real logic." },
        { file: "concepts/47-difference-vs-understanding.html",   title: "47 · Difference vs. Understanding",  desc: "Word network vs. experience network — why 'guessing' isn't 'understanding'." },
      ],
    },
    {
      id: "G",
      label: "Stage G · Mini-Projects (Practice)",
      items: [
        { file: "concepts/48-project-cli-chatbot.html",  title: "48 · CLI Chatbot",      desc: "First usable bot: API + System Prompt + Streaming + History." },
        { file: "concepts/49-project-mini-rag.html",     title: "49 · Mini-RAG",         desc: "Answer own data: Embeddings + Vector search + augmented Prompt." },
        { file: "concepts/50-project-attention-vis.html", title: "50 · Attention-Vis",    desc: "Build the heatmap from Concept 03 yourself (p5.js) — reading becomes making." },
        { file: "concepts/51-project-lora-train.html", title: "51 · Train LoRA", desc: "Train a small adapter on your own dataset (PEFT)." },
      ],
    },
    {
      id: "H",
      label: "Stage H · Modern Architecture & Data",
      items: [
        { file: "concepts/52-mcp-model-context-protocol.html", title: "52 · MCP (Model Context Protocol)", desc: "USB-C for AI tools: servers, clients, tools/resources/prompts — build once, use everywhere." },
        { file: "concepts/53-diffusion-bildgenerierung.html", title: "53 · Diffusion & Image Generation", desc: "Removing noise instead of guessing text: latent diffusion, U-Net/DiT, CFG, seeds, LoRA styles." },
        { file: "concepts/54-rag-vs-finetuning-vs-prompting.html", title: "54 · RAG vs. Fine-Tuning vs. Prompting", desc: "The decision tree: start cheap, escalate deliberately — with a comparison table." },
        { file: "concepts/55-datenqualitaet-datensaetze.html", title: "55 · Data Quality & Datasets", desc: "Garbage in, garbage out: the curation cycle, quality criteria, reference datasets." },
        { file: "concepts/56-sampling-decoding.html", title: "56 · Sampling & Decoding", desc: "Temperature, top-p/top-k, greedy — how logits become the next word." },
        { file: "concepts/57-kv-cache-inference-optimization.html", title: "57 · KV-Cache & Inference Optimization", desc: "Why generation would be O(n²) without it: KV-cache, batching, throughput vs. latency." },
        { file: "concepts/58-attention-details.html", title: "58 · Attention Details", desc: "Multi-head, cross-attention, positional encoding — and why the √d_k scaling." },
        { file: "concepts/59-retrieval-fine-tuning.html", title: "59 · Retrieval Fine-Tuning", desc: "Chunking strategies, hybrid search, re-ranking — taking RAG from 'works' to 'good'." },
        { file: "concepts/60-agent-architectures.html", title: "60 · Agent Architectures", desc: "ReAct vs. plan-and-execute, framework comparison, agent eval." },
      ],
    },
    {
      id: "I",
      label: "Stage I · Applied & Advanced",
      items: [
        { file: "concepts/61-llm-observability.html", title: "61 · LLM Observability", desc: "Trace, log and evaluate LLM apps in production — turn a demo into a system." },
        { file: "concepts/62-streaming-transport.html", title: "62 · Streaming & Transport", desc: "How tokens reach your UI: SSE vs WebSockets, partial responses, abort." },
        { file: "concepts/63-vector-databases.html", title: "63 · Vector Databases", desc: "The index layer behind RAG: ANN, HNSW, and the pgvector/Qdrant/Milvus options." },
        { file: "concepts/64-alternative-architectures.html", title: "64 · Alternative Architectures", desc: "Beyond the transformer: SSM/Mamba and RWKV with linear scaling." },
        { file: "concepts/65-rlhf-deep-dive.html", title: "65 · RLHF & RL Deep Dive", desc: "Reward models, PPO, and DPO — how alignment training actually works." },
        { file: "concepts/66-coding-agents.html", title: "66 · Coding Agents", desc: "Agents that write, test and fix code — the loop and the tools." },
        { file: "concepts/67-responsible-ai.html", title: "67 · Responsible AI & Governance", desc: "Bias, transparency, red teaming, and the regulatory landscape." },
        { file: "concepts/68-distillation-pruning.html", title: "68 · Distillation & Pruning", desc: "Smaller models: teacher→student distillation and weight pruning." },
      ],
    },
  ],

  playground: [
    { file: "playground/tokenizer-demo.html", title: "Tokenizer",  desc: "Type text and see how it's split into tokens." },
    { file: "playground/attention-demo.html", title: "Attention",  desc: "Self-Attention as heatmap — and how temperature sharpens focus." },
    { file: "playground/embedding-vis.html", title: "Embeddings", desc: "2D Projection: How similar are words?" },
    { file: "playground/cost-calculator.html", title: "Cost Calculator", desc: "Token × Price = ? Calculate your API costs." },
    { file: "playground/rag-demo.html", title: "RAG Demo", desc: "Simulate Retrieval Augmented Generation." },
    { file: "playground/agent-loop.html", title: "Agent Loop", desc: "The model→tool→result→model loop as an animation." },
    { file: "playground/context-window.html", title: "Context Window", desc: "How context grows, gets cached, and compaction kicks in (O(n²))." },
    { file: "playground/memory-tiers.html", title: "Memory Tiers", desc: "Core/Recall/Archival — what lands in the prompt, what moves external." },
    { file: "playground/routing-cascade.html", title: "Routing & Cascade", desc: "Start cheap, escalate when needed — save cost interactively." },
    { file: "playground/sorting-vis.html", title: "Sorting & Big-O", desc: "Watch bubble/merge/quick sort an array and count comparisons — proof of Big-O." },
    { file: "playground/architecture-compare.html", title: "Architecture Styles", desc: "Monolith vs microservices vs serverless vs event-driven — the same app, four wirings." },
    { file: "playground/http-stack.html", title: "HTTP & TCP/IP", desc: "Watch a request get wrapped layer by layer, then unwrapped on the way back." },
    { file: "playground/paradigm-compare.html", title: "Paradigms", desc: "The same problem in imperative, OOP and functional style." },
    { file: "playground/git-branching.html", title: "Git Branching", desc: "Gitflow vs trunk-based as an animated commit graph." },
    { file: "playground/chat-ui-compare.html", title: "Chat UI", desc: "The same chat UI rendered React-style vs Svelte-style." },
    { file: "playground/rest-vs-graphql.html", title: "REST vs GraphQL", desc: "Round-trips and over-fetching, side by side." },
    { file: "playground/cicd-pipeline.html", title: "CI/CD Pipeline", desc: "Commit → build → test → deploy → monitor, with a feedback loop." },
    { file: "playground/prompt-injection.html", title: "Prompt Injection", desc: "See how crafted input can hijack a model's behavior." },
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

// Apply saved theme immediately (prevents flash on load)
applyTheme(localStorage.getItem("learnai-theme") || "dark");

/* ---- Search (Hub): search all pages by title/description ---- */
function initSearch() {
  const host = document.getElementById("search-box");
  if (!host) return;
  host.innerHTML = `<input type="search" placeholder="Search…" aria-label="Search" />
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
      : `<a>No results</a>`;
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

