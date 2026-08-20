# Roadmap — AI-Lernkurs

Wachsender Lernpfad. Erledigtes abhaken (`- [x]`), Neues oben/untendran.
Niveau-Ziel: Stufe 3–4 (API-erfahren, Mechanik will verstanden werden).

Struktur = gespiegelt in `assets/nav.js` (dort Stufen als `stages`). Immer synchron halten!

## Stufe A — Mentale Modelle
- [x] 01 · Sprachmodell als Funktion (P(next|context), autoregressiver Loop)
- [x] 02 · Tokens & Embeddings (Text→Zahlen, Bedeutung=Position)
- [x] 03 · Attention (Self-Attention, Q/K/V, Temperatur)

## Stufe B — Architektur & Training
- [x] 04 · Transformer-Überblick (Stack aus Attention + FFN, Encoder/Decoder)
- [x] 05 · Training intuitiv (Loss, Backprop nur als Idee, Epochen)
- [x] 06 · Inference vs. Training (was läuft wo, warum teuer)

## Stufe C — Mit LLMs arbeiten
- [x] 07 · Prompting-Patterns (few-shot, chain-of-thought, structured output)
- [x] 08 · RAG (Retrieval Augmented Generation) + Vektordatenbanken
- [x] 09 · Agents / Tool-Use (Schleife: Modell→Werkzeug→Modell)
- [x] 10 · Fine-Tuning (Konzept: wann lohnt es, LoRA/PEFT)

## Stufe D — Ökosystem & Werkzeuge
- [ ] Hugging Face: ein Modell laden/ nutzen (pip transformers)
- [ ] LLM-APIs praktisch (System-Prompt, Streaming, Tool-Calls)
- [ ] Notebook-Workflow (Colab/Jupyter als Spielwiese)
- [ ] Open-Source vs. Closed Models (Llama, Mistral, GPT…)

## Stufe E — Bewerten & Grenzen
- [ ] Evaluierung & Metriken (intuitiv: Accuracy, Perplexity)
- [ ] Halluzinationen, Bias, Limits
- [ ] Kosten & Latenz (Tokens, Modellgröße)

## Stufe F — Realität / MLOps
- [ ] Deployment (API, Edge, Quantisierung)
- [ ] Wie man Papers & News liest, am Ball bleibt

## Querdenken
- [ ] Was kann AI nicht? Ethik & Risiken
- [ ] Unterschied zu echtem Verstehen

## Mini-Projekte (jeder Block = eins)
- [ ] Kleiner CLI-Chatbot über eine API
- [ ] Mini-RAG über eigene Textdateien
- [ ] Eigene Attention-Visualisierung erweitern
- [ ] LoRA-Adapter auf einem kleinen Datensatz trainieren
