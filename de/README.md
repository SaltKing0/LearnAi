# 🇩🇪 AI-Lernkurs

Ein wachsendes, **interaktives** Lern-Wiki für KI — gebaut, um die Mechanik hinter LLMs wirklich zu verstehen, nicht nur APIs zu bedienen.

> **Die eine Regel:** Zu jedem Konzept gibt es einen Satz *„Erklär es einem 12-Jährigen"*. Wer ihn nicht schreiben kann, hat's noch nicht verstandent.

---

## 🎯 Ziel dieses Repos

Dieses Repo ist kein Kurs im klassischen Sinne. Es ist eine **Sammlung interaktiver Erklärungen**, die dich zwingen, aktiv zu erstellen statt passiv zu konsumieren. Jedes Konzept wird als eigene Seite gebaut — mit Animationen, Demos und Querverweisen.

**Für wen?** Für Entwickler die KI nicht nur benutzen, sondern verstehen wollen.

---

## 🚀 Schnellstart

```bash
# Repo klonen
git clone https://github.com/SaltKing0/LearnAi.git
cd LearnAi

# Lokalen Server starten (optional)
python3 -m http.server 8000
# dann http://localhost:8000 öffnen
```

Oder einfach `index.html` im Browser öffnen.

---

## 📂 Struktur

```
LearnAi/
  index.html              # Sprachwahl / Language switcher
  de/                     # 🇩🇪 Deutsche Version
    index.html            # Hub / Navigationskarte
    concepts/             # EINE Datei pro Konzept
      01-sprachmodell-als-funktion.html
      02-tokens-und-embeddings.html
      ...
      _template.html      # Vorlage für neue Seiten
    playground/           # Interaktive Demos
      tokenizer-demo.html
      attention-demo.html
    assets/
      style.css           # Gemeinsames Stylesheet
      nav.js              # Navigation (ZENTRAL pflegen!)
    README.md
    ROADMAP.md
  en/                     # 🇺🇸 English version
    (same structure)
```

---

## 🛠️ Neue Konzept-Seite hinzufügen

1. `concepts/_template.html` kopieren → `concepts/XX-titel.html`
2. Inhalt füllen (Titel, 12-Jährigen-Satz, Intuition, Technik, Verwandt, Lücken)
3. `assets/nav.js` → Eintrag in der passenden Stufe einfügen

Fertig — die Seite taucht automatisch in der Nav auf.

---

## 🤝 Mitmachen

Beiträge willkommen! Ob Übersetzungen, neue Konzepte, oder Bugfixes — einfach ein Issue oder PR öffnen.

**Übersetzungen:** Die englische Version ist noch nicht vollständig. Wenn du helfen willst, kopiere eine deutsche Konzept-Seite und übersetze sie.

---

## 📜 Lizenz

MIT — mach damit was du willst.

---

**🇺🇸 Englische Version:** [en/README.md](../en/README.md)

