# AI-Lernkurs

Ein wachsendes, **interaktives** Lern-Wiki für KI — gebaut, um die Mechanik
hinter LLMs wirklich zu verstehen, nicht nur APIs zu bedienen.

Format: Vanilla HTML/CSS/JS + [p5.js](https://p5js.org/) (via CDN, **kein**
Build-Step). Läuft direkt auf GitHub Pages.

## Philosophie

- **Aktiv erstellen > passiv konsumieren.** Jedes Konzept wird selbst als
  interaktive Seite gebaut — das Zwingt zum echten Verständnis (Feynman-Technik).
- **Netz statt Liste.** Konzepte verlinken quer (Zettelkasten). Je mehr Knoten,
  desto schneller jeder neue („exponentielles“ Lernen durch Vernetzung).
- **Die eine Regel:** Zu jedem Konzept ein Satz *„Erklär es einem 12-Jährigen“*.
  Wer ihn nicht schreiben kann, hat's noch nicht verstanden.

## Struktur

```
ai-lernkurs/
  index.html              # Hub / Navigationskarte
  concepts/               # EINE Datei pro Konzept (Kopie von _template.html)
    01-sprachmodell-als-funktion.html
    02-tokens-und-embeddings.html
    03-attention-ueberblick.html
    _template.html        # Vorlage für neue Seiten
  playground/             # Interaktive JS/p5.js-Demos
    tokenizer-demo.html
    attention-demo.html
  assets/
    style.css             # gemeinsames Stylesheet
    nav.js                # baut Top-Nav + Prev/Next (ZENTRAL pflegen!)
  README.md
  ROADMAP.md
```

## Neue Konzept-Seite hinzufügen

1. `concepts/_template.html` kopieren → `concepts/XX-titel.html`.
2. Inhalt füllen (Titel, 12-Jährigen-Satz, Intuition, Technik, Verwandt, Lücken).
3. `assets/nav.js` → Eintrag in `SITE.concepts` an der richtigen Stelle einfügen.
   Fertig — die Seite taucht überall automatisch in der Nav auf.

## Lokal ansehen

Einfach `index.html` im Browser öffnen. Oder ein Mini-Server:

```bash
python3 -m http.server 8000
# dann http://localhost:8000 öffnen
```

## Auf GitHub Pages veröffentlichen

1. Repo auf GitHub erstellen, dieses Verzeichnis pushen.
2. *Settings → Pages → Source: Branch `main`, Ordner `/ (root)*.
3. Nach ~1 Min: `https://<user>.github.io/<repo>/`.

## Lernpfad / Roadmap

Siehe `ROADMAP.md`.
