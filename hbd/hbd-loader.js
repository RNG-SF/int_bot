(() => {
  const load = src => new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
  load("config/features.js")
    .then(() => load("config/birthday.js"))
    .then(() => load("hbd/hbd-launcher.js"))
    .catch(console.error);
})();
