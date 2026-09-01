/* RNG_NET — THEME CONTROLLER
   Dipanggil setelah config/settings.js.
*/
const RNGTheme = (() => {
  function apply() {
    const cfg = window.RNG_SETTINGS?.theme || {};
    const root = document.documentElement;

    root.dataset.theme = cfg.mode || "dark";
    root.dataset.accent = cfg.accent || "cyan";
    root.dataset.glass = cfg.glass === false ? "off" : "on";
    root.dataset.motion = cfg.animations === false ? "off" : "on";
  }

  function setAccent(accent) {
    const settings = RNG_SETTINGS.theme || {};
    settings.accent = accent;
    RNG_SETTINGS.theme = settings;
    localStorage.setItem("rng_net_theme", JSON.stringify(settings));
    apply();
  }

  function loadSaved() {
    try {
      const saved = JSON.parse(localStorage.getItem("rng_net_theme"));
      if (saved) RNG_SETTINGS.theme = { ...RNG_SETTINGS.theme, ...saved };
    } catch {}
    apply();
  }

  return { apply, setAccent, loadSaved };
})();
                  
