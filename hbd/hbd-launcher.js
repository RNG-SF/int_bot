/* RNG SF — lightweight HBD launcher */
(() => {
    "use strict";
const HBD_24H_ONLY = false; // testing; set true for production 24h window // FALSE = testing, TRUE = only previous 24h
    const HBD_PATH = "hbd/index.html";

    const esc = (value) => String(value ?? "").replace(/[&<>"']/g, c => ({
        "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
    }[c]));

    const getPeople = () => [
        ...(Array.isArray(window.ACCESS_DATA?.special) ? window.ACCESS_DATA.special : []),
        ...(Array.isArray(window.ACCESS_DATA?.classmates) ? window.ACCESS_DATA.classmates : []),
        ...(Array.isArray(window.ACCESS_DATA?.superSpecial) ? window.ACCESS_DATA.superSpecial : [])
    ].filter(p =>
        p &&
        p.enabled !== false &&
        (p.featureType === "ulta" || p.hbdEnabled === true) &&
        /^\\d{8}$/.test(String(p.birthday || ""))
    );

    const parts = code => ({
        day: Number(code.slice(0,2)),
        month: Number(code.slice(2,4)),
        year: Number(code.slice(4,8))
    });

    const occurrence = (p, year) => {
        const d = parts(String(p.birthday));
        return new Date(year, d.month - 1, d.day, 0, 0, 0, 0);
    };

    const nextOccurrence = (p, now) => {
        let d = occurrence(p, now.getFullYear());
        if (d < now) d = occurrence(p, now.getFullYear() + 1);
        return d;
    };

    const in24hWindow = (p, now) => {
        const d = occurrence(p, now.getFullYear());
        return d.getTime() > now.getTime() &&
               d.getTime() - now.getTime() <= 24 * 60 * 60 * 1000;
    };

    const diff = ms => {
        const total = Math.max(0, Math.floor(ms / 1000));
        return {
            days: Math.floor(total / 86400),
            hours: Math.floor((total % 86400) / 3600),
            minutes: Math.floor((total % 3600) / 60),
            seconds: total % 60
        };
    };

    const mask = name => {
        const s = String(name || "seseorang").trim();
        if (s.length <= 2) return s[0] + "•";
        if (s.length <= 4) return s[0] + "••" + s.slice(-1);
        return s.slice(0, 2) + "•••" + s.slice(-1);
    };

    const nearest = (people, now) => {
        return people
            .map(p => ({ p, date: nextOccurrence(p, now) }))
            .sort((a,b) => a.date - b.date)[0] || null;
    };

    const render = () => {
        const list = document.querySelector("#portalList");
        if (!list) return;

        const people = getPeople();
        const now = new Date();

        let eligible = people;
        if (HBD_24H_ONLY) eligible = people.filter(p => in24hWindow(p, now));

        if (!eligible.length) {
            document.querySelector("#rngHbdLauncher")?.remove();
            return;
        }

        const active = eligible.filter(p => occurrence(p, now.getFullYear()).getTime() <= now.getTime());
        const target = active[0] || nearest(eligible, now)?.p;
        if (!target) return;

        let wrap = document.querySelector("#rngHbdLauncher");
        if (!wrap) {
            wrap = document.createElement("div");
            wrap.id = "rngHbdLauncher";
            wrap.className = "hbd-launcher";
            list.appendChild(wrap);
        }

        const date = nextOccurrence(target, now);
        const remaining = diff(date - now);

        wrap.innerHTML = `
            <button class="hbd-launch-button" type="button">
                <span class="hbd-launch-icon">🎁</span>
                <span class="hbd-launch-copy">
                    <b>Ucapan ulang tahun untuk ${esc(mask(target.nickname || target.fullName))}</b>
                    <small>${active.length ? "🎉 Waktunya sudah tiba" : `00:00 · ${remaining.days}h ${remaining.hours}j ${remaining.minutes}m ${remaining.seconds}d`}</small>
                    <em>siapapun, jangan pencet ini kalau bukan yang bersangkutan...</em>
                </span>
                <span class="hbd-launch-arrow">→</span>
            </button>
        `;

        wrap.querySelector("button").onclick = () => {
            const params = new URLSearchParams({
                birthday: String(target.birthday),
                id: String(target.id || "")
            });
            window.location.href = `${HBD_PATH}?${params.toString()}`;
        };
    };

    const style = document.createElement("style");
    style.textContent = `
        .hbd-launcher{margin:12px 0 4px}
        .hbd-launch-button{
            width:100%;display:flex;align-items:center;gap:12px;
            padding:13px 14px;border:1px solid rgba(255,255,255,.12);
            border-radius:16px;background:linear-gradient(135deg,rgba(255,184,77,.09),rgba(255,105,180,.08));
            color:inherit;text-align:left;cursor:pointer;
            transition:transform .2s ease,border-color .2s ease,background .2s ease;
        }
        .hbd-launch-button:hover{transform:translateY(-1px);border-color:rgba(255,210,120,.32)}
        .hbd-launch-icon{font-size:20px;flex:0 0 auto}
        .hbd-launch-copy{display:flex;flex-direction:column;min-width:0;gap:2px}
        .hbd-launch-copy b{font-size:13px;line-height:1.35}
        .hbd-launch-copy small{font-size:10px;opacity:.75}
        .hbd-launch-copy em{font-size:9px;opacity:.48;font-style:normal}
        .hbd-launch-arrow{margin-left:auto;opacity:.55}
    `;
    document.head.appendChild(style);

    render();
    setInterval(render, 1000);
})();
