# Roadmap — AI-Lernkurs

Wachsender Lernpfad. Erledigtes abhaken (`- [x]`), Neues oben/untendran.
Niveau-Ziel: Stufe 3–4 (API-erfahren, Mechanik will verstanden werden).

Struktur = gespiegelt in `assets/nav.js` (dort Stufen als `stages`). Immer synchron halten!

## Stufe 0 — CS & Engineering-Grundlagen
- [x] 01 · Datenstrukturen & Algorithmen
- [x] 02 · Systemarchitektur & Design
- [x] 03 · Betriebssysteme & Netzwerke
- [x] 04 · Programmierparadigmen & Sprachen
- [x] 05 · Software-Engineering & Lebenszyklus
- [x] 06 · Frontend-Entwicklung
- [x] 07 · Backend-Entwicklung
- [x] 08 · DevOps, Infrastruktur & Cloud
- [x] 09 · Sicherheit & Compliance
- [x] 10 · Spezialisierte Domänen

## Stufe A — Mentale Modelle
- [x] 11 · Einstieg (was ist KI, absolut für Anfänger)
- [x] 12 · Sprachmodell als Funktion (P(next|context), autoregressiver Loop)
- [x] 13 · Tokens & Embeddings (Text→Zahlen, Bedeutung=Position)
- [x] 14 · Attention (Self-Attention, Q/K/V, Temperatur)

## Stufe B — Architektur & Training
- [x] 15 · Transformer-Überblick (Stack aus Attention + FFN, Encoder/Decoder)
- [x] 16 · Training intuitiv (Loss, Backprop nur als Idee, Epochen)
- [x] 17 · Inference vs. Training (was läuft wo, warum teuer)
- [x] 18 · Alignment (RLHF & DPO) (hilfreich machen: RLHF, DPO, Constitutional AI)

## Stufe C — Mit LLMs arbeiten
- [x] 19 · Prompting-Patterns (few-shot, chain-of-thought, structured output)
- [x] 20 · RAG (Retrieval Augmented Generation) + Vektordatenbanken
- [x] 21 · Agents / Tool-Use (Schleife: Modell→Werkzeug→Modell)
- [x] 22 · Fine-Tuning (Konzept: wann lohnt es, LoRA/FR)
- [x] 23 · Agent-Loop & Harness (while-Schleife, Harness vs. Modell, Kontext-Kosten)
- [x] 24 · Kontext-Engineering (Caching, Kompaktion, Progressive Disclosure, O(n²))
- [x] 25 · Memory für Agenten (Tiers: Core/Recall/Archival)
- [x] 26 · Multi-Agent & Subagents (wann lohnt es, Isolation, Limits)
- [x] 27 · Function Calling (Deep Dive) (Tools, Multi-Calls, Fehler, Streaming)
- [x] 28 · Embedding-Suche & Vector Search (Cosine, Chunking — RAG-Basis)

## Stufe D — Ökosystem & Werkzeuge
- [x] 29 · Hugging Face (Modell laden/ nutzen, transformers pipeline)
- [x] 30 · LLM-APIs praktisch (System-Prompt, Streaming, Tool-Calls)
- [x] 31 · Notebook-Workflow (Colab/Jupyter als Spielwiese)
- [x] 32 · Open-Source vs. Closed Models (Llama, Mistral, GPT…)
- [x] 33 · Lokale Modelle (Ollama, LM Studio, vLLM)
- [x] 34 · Multi-Modal Modelle (Text, Bild, Audio, Video)

## Stufe E — Bewerten & Grenzen
- [x] 35 · Evaluierung & Metriken (intuitiv: Accuracy, Perplexity)
- [x] 36 · Halluzinationen, Bias, Limits
- [x] 37 · Kosten & Latenz (Tokens, Modellgröße)
- [x] 38 · Sicherheit & Prompt Injection (Injection, Jailbreaking, Sandboxing)
- [x] 39 · Modell-Routing & Cascades (erst billig, bei Bedarf eskalieren)

## Stufe F — Realität / MLOps
- [x] 40 · Deployment (API, Edge, Quantisierung)
- [x] 41 · Papers & News lesen
- [x] 42 · Quantisierung & Kompression (Q2–FP16)
- [x] 43 · Serving (vLLM, TGI, TensorRT-LLM)
- [x] 44 · Testing & Evaluation (Eval-Datasets, LLM-as-Judge, CI/CD)
- [x] 45 · Sandboxing & Härtung (Risk-Tiers, Sandbox, Netzwerk-Allowlist)

## Querdenken
- [x] 46 · Was kann AI nicht? (Ethik & Risiken)
- [x] 47 · Unterschied zu echtem Verstehen

## Stufe G — Mini-Projekte (Praxis)
- [x] 48 · CLI-Chatbot über eine API
- [x] 49 · Mini-RAG über eigene Textdateien
- [x] 50 · Eigene Attention-Visualisierung
- [x] 51 · LoRA-Adapter auf einem kleinen Datensatz trainieren

## Stufe H — Moderne Architektur & Daten
- [x] 52 · MCP (Model Context Protocol)
- [x] 53 · Diffusion & Bildgenerierung
- [x] 54 · RAG vs. Fine-Tuning vs. Prompting
- [x] 55 · Datenqualität & Datensätze
- [x] 56 · Sampling & Decoding
- [x] 57 · KV-Cache & Inference-Optimierung
- [x] 58 · Attention-Details
- [x] 59 · Retrieval-Feintuning
- [x] 60 · Agent-Architekturen

## Stufe I — Angewandt & Fortgeschritten
- [x] 61 · LLM-Observability
- [x] 62 · Streaming & Transport
- [x] 63 · Vektordatenbanken
- [x] 64 · Alternative Architekturen
- [x] 65 · RLHF & RL Deep Dive
- [x] 66 · Coding Agents
- [x] 67 · Verantwortungsvolle KI & Governance
- [x] 68 · Destillation & Pruning

## Playground
- [x] Tokenizer
- [x] Attention
- [x] Embeddings
- [x] Kostenrechner
- [x] RAG-Demo
- [x] Agent-Loop
- [x] Context-Window
- [x] Memory-Tiers
- [x] Routing & Cascade
- [x] Sortieren & Big-O
- [x] Architektur-Stile
- [x] HTTP & TCP/IP
- [x] Paradigmen
- [x] Git-Branching
- [x] Chat-UI
- [x] REST vs. GraphQL
- [x] CI/CD-Pipeline
- [x] Prompt Injection
