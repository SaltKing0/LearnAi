/* ============================================================
   AI-Lernkurs – Mermaid initialisieren (Dark-Theme passend)
   Wird GLEICH NACH dem Mermaid-CDN-Script geladen.
   startOnLoad:true sorgt dafür, dass alle <div class="mermaid">…
   automatisch beim Laden gerendert werden.
   ============================================================ */
(function () {
  var m = window.mermaid;
  if (!m || typeof m.initialize !== "function") return;
  m.initialize({
    startOnLoad: true,
    theme: "dark",
    securityLevel: "loose",
    fontFamily: "var(--mono)",
    themeVariables: {
      background:       "#0e1116",
      primaryColor:     "#161b22",
      primaryTextColor: "#e6edf3",
      primaryBorderColor:"#2a3340",
      lineColor:        "#9aa7b4",
      secondaryColor:   "#1c2330",
      tertiaryColor:    "#161b22",
      noteBkgColor:     "#1c2330",
      noteTextColor:    "#e6edf3",
      fontSize:         "15px"
    },
    flowchart: { curve: "basis", padding: 10, nodeSpacing: 40, rankSpacing: 48 },
    sequence:  { useMaxWidth: true },
    journey:   { useMaxWidth: true }
  });
})();
