# Roadmap — AI-Lernkurs

Wachsender Lernpfad. Erledigtes abhaken (`- [x]`), Neues oben/untendran.
Niveau-Ziel: Stufe 3–4 (API-erfahren, Mechanik will verstanden werden).

## Stufe A — Mentale Modelle (schon angelegt)
- [x] 01 · Sprachmodell als Funktion (P(next|context), autoregressiver Loop)
- [x] 02 · Tokens & Embeddings (Text→Zahlen, Bedeutung=Position)
- [x] 03 · Attention (Self-Attention, Q/K/V, Temperatur)
- [x] 04 · Transformer-Überblick (Stack aus Attention + FFN, Encoder/Decoder)
- [ ] 05 · Training intuitiv (Loss, Backprop nur als Idee, Epochen)
- [ ] 06 · Inference vs. Training (was läuft wo, warum teuer)

## Stufe B — Ökosystem & Werkzeuge
- [ ] Hugging Face: ein Modell laden/ nutzen (pip transformers)
- [ ] LLM-APIs praktisch (System-Prompt, Streaming, Tool-Calls)
- [ ] Notebook-Workflow (Colab/Jupyter als Spielwiese)
- [ ] Open-Source vs. Closed Models (Llama, Mistral, GPT…)

## Stufe C — Mit LLMs arbeiten
- [ ] Prompting-Patterns (few-shot, chain-of-thought)
- [ ] RAG (Retrieval Augmented Generation) + Vektordatenbanken
- [ ] Agents / Tool-Use (Schleife: Modell→Werkzeug→Modell)
- [ ] Fine-Tuning (Konzept: wann lohnt es, LoRA/PEFT)

## Stufe D — Bewerten & Grenzen
- [ ] Evaluierung & Metriken (intuitiv: Accuracy, Perplexity)
- [ ] Halluzinationen, Bias, Limits
- [ ] Kosten & Latenz (Tokens, Modellgröße)

## Stufe E — Realität / MLOps
- [ ] Deployment (API, Edge, Quantisierung)
- [ ] Wie man Papers & News liest, am Ball bleibt

## Querdenken
- [ ] Was kann AI nicht? Ethik & Risiken
- [ ] Unterschied zu echtem Verstehen

## Mini-Projekte (jeder Block = eins)
- [ ] Kleiner CLI-Chatbot über eine API
- [ ] Mini-RAG über eigene Textdateien
- [ ] Eigene Attention-Visualisierung erweitern
