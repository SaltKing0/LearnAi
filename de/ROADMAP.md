# Roadmap — AI-Lernkurs

Wachsender Lernpfad. Erledigtes abhaken (`- [x]`), Neues oben/untendran.
Niveau-Ziel: Stufe 3–4 (API-erfahren, Mechanik will verstanden werden).

Struktur = gespiegelt in `assets/nav.js` (dort Stufen als `stages`). Immer synchron halten!

## Stufe 0 — CS & Engineering-Grundlagen
- [x] 51 · Datenstrukturen & Algorithmen
- [x] 52 · Systemarchitektur & Design
- [x] 53 · Betriebssysteme & Netzwerke
- [x] 54 · Programmierparadigmen & Sprachen
- [x] 55 · Software-Engineering & Lebenszyklus
- [x] 56 · Frontend-Entwicklung
- [x] 57 · Backend-Entwicklung
- [x] 58 · DevOps, Infrastruktur & Cloud
- [x] 59 · Sicherheit & Compliance
- [x] 60 · Spezialisierte Domänen

## Stufe A — Mentale Modelle
- [x] 01 · Sprachmodell als Funktion (P(next|context), autoregressiver Loop)
- [x] 02 · Tokens & Embeddings (Text→Zahlen, Bedeutung=Position)
- [x] 03 · Attention (Self-Attention, Q/K/V, Temperatur)

## Stufe B — Architektur & Training
- [x] 04 · Transformer-Überblick (Stack aus Attention + FFN, Encoder/Decoder)
- [x] 05 · Training intuitiv (Loss, Backprop nur als Idee, Epochen)
- [x] 06 · Inference vs. Training (was läuft wo, warum teuer)
- [x] 28 · Alignment (RLHF & DPO) (hilfreich machen: RLHF, DPO, Constitutional AI)

## Stufe C — Mit LLMs arbeiten
- [x] 07 · Prompting-Patterns (few-shot, chain-of-thought, structured output)
- [x] 08 · RAG (Retrieval Augmented Generation) + Vektordatenbanken
- [x] 09 · Agents / Tool-Use (Schleife: Modell→Werkzeug→Modell)
- [x] 10 · Fine-Tuning (Konzept: wann lohnt es, LoRA/FR)
- [x] 29 · Function Calling (Deep Dive) (Tools, Multi-Calls, Fehler, Streaming)
- [x] 30 · Embedding-Suche & Vector Search (Cosine, Chunking — RAG-Basis)
- [x] 35 · Agent-Loop & Harness (while-Schleife, Harness vs. Modell, Kontext-Kosten)
- [x] 36 · Kontext-Engineering (Caching, Kompaktion, Progressive Disclosure, O(n²))
- [x] 37 · Memory für Agenten (Tiers: Core/Recall/Archival)
- [x] 39 · Multi-Agent & Subagents (wann lohnt es, Isolation, Limits)

## Stufe D — Ökosystem & Werkzeuge
- [x] 11 · Hugging Face (Modell laden/ nutzen, transformers pipeline)
- [x] 12 · LLM-APIs praktisch (System-Prompt, Streaming, Tool-Calls)
- [x] 13 · Notebook-Workflow (Colab/Jupyter als Spielwiese)
- [x] 14 · Open-Source vs. Closed Models (Llama, Mistral, GPT…)
- [x] 27 · Lokale Modelle (Ollama, LM Studio, vLLM)
- [x] 32 · Multi-Modal Modelle (Text, Bild, Audio, Video)

## Stufe E — Bewerten & Grenzen
- [x] 15 · Evaluierung & Metriken (intuitiv: Accuracy, Perplexity)
- [x] 16 · Halluzinationen, Bias, Limits
- [x] 17 · Kosten & Latenz (Tokens, Modellgröße)
- [x] 26 · Sicherheit & Prompt Injection (Injection, Jailbreaking, Sandboxing)
- [x] 38 · Modell-Routing & Cascades (erst billig, bei Bedarf eskalieren)

## Stufe F — Realität / MLOps
- [x] 18 · Deployment (API, Edge, Quantisierung)
- [x] 19 · Papers & News lesen
- [x] 31 · Quantisierung & Kompression (Q2–FP16)
- [x] 33 · Serving (vLLM, TGI, TensorRT-LLM)
- [x] 34 · Testing & Evaluation (Eval-Datasets, LLM-as-Judge, CI/CD)
- [x] 40 · Sandboxing & Härtung (Risk-Tiers, Sandbox, Netzwerk-Allowlist)

## Querdenken
- [x] 20 · Was kann AI nicht? (Ethik & Risiken)
- [x] 21 · Unterschied zu echtem Verstehen

## Stufe G — Mini-Projekte (Praxis)
- [x] 22 · CLI-Chatbot über eine API
- [x] 23 · Mini-RAG über eigene Textdateien
- [x] 24 · Eigene Attention-Visualisierung
- [x] 25 · LoRA-Adapter auf einem kleinen Datensatz trainieren
