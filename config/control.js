/* =========================================================
   RNG SF — MASTER CONTROL / FEATURE SETTINGS
   ---------------------------------------------------------
   Satu tempat untuk mengaktifkan, mematikan, menjadwalkan,
   dan mengetes fitur tanpa perlu mengubah index.html.

   TRUE  = aktif
   FALSE = mati
   ========================================================= */

const RNG_CONTROL = {
    /* =========================
       GLOBAL
       ========================= */
    global: {
        enabled: true,
        debug: false
    },

    /* =========================
       FITUR UTAMA
       ========================= */
    features: {
        portalButtons: true,
        ucapan: true,
        hbd: true,
        calendar: true,
        gateway: true,
        background: true,
        menu: true
    },

    /* =========================
       HBD
       ========================= */
    hbd: {
        enabled: true,

        // false = jadwal diabaikan, cocok untuk testing.
        // true  = HBD mengikuti start/end window di bawah.
        scheduleEnabled: false,

        // Contoh:
        // 24 = mulai 24 jam sebelum ulang tahun.
        // 48 = mulai 2 hari sebelum ulang tahun.
        startHoursBeforeBirthday: 24,

        // Contoh:
        // 24 = tetap tersedia sampai 24 jam setelah ulang tahun.
        // 0  = berakhir tepat saat ulang tahun dimulai.
        endHoursAfterBirthday: 24,

        // Saat true, HBD tetap bisa dibuka kapan saja walaupun
        // scheduleEnabled = true. Sangat berguna saat testing.
        testing: {
            enabled: true,
            ignoreSchedule: true
        },

        verification: true,
        letter: true,
        response: true,

        responseMethods: {
            whatsapp: true,
            email: true,
            tiktok: true,
            copy: true
        }
    },

    /* =========================
       KONTAK / TUJUAN PESAN
       ========================= */
    contact: {
        whatsapp: "6285745596459",

        // Isi kalau nanti ingin tombol Email langsung membuka
        // alamat email tertentu.
        email: "",

        // Isi dengan link profil TikTok jika sudah ada.
        // Pesan akan disalin dulu, kemudian link ini dibuka.
        tiktok: ""
    },

    /* =========================
       UCAPAN
       ========================= */
    ucapan: {
        enabled: true,
        personalMessages: true,
        showEmptyFallback: true
    },

    /* =========================
       KALENDER
       ========================= */
    calendar: {
        enabled: true,
        allowTodayButton: true,
        allowNavigation: true
    },

    /* =========================
       TAMPILAN
       ========================= */
    appearance: {
        particles: true,
        animations: true,
        glass: true,
        showButtonCount: true
    }
};

/* =========================================================
   HELPER
   ========================================================= */

function rngControl(path, fallback = false) {
    const parts = String(path || "").split(".").filter(Boolean);
    let value = RNG_CONTROL;

    for (const part of parts) {
        if (value == null || typeof value !== "object") return fallback;
        value = value[part];
    }

    return value === undefined ? fallback : value;
}

function rngFeatureEnabled(name) {
    if (RNG_CONTROL.global?.enabled === false) return false;
    return RNG_CONTROL.features?.[name] !== false;
}

function rngHbdScheduleEnabled() {
    if (!rngFeatureEnabled("hbd")) return false;
    if (RNG_CONTROL.hbd?.testing?.enabled && RNG_CONTROL.hbd?.testing?.ignoreSchedule) return false;
    return RNG_CONTROL.hbd?.scheduleEnabled === true;
}

function rngHbdWindow(person, now = new Date()) {
    if (!person || !person.birthday) return false;

    const code = String(person.birthday);
    if (!/^\d{8}$/.test(code)) return false;

    const day = Number(code.slice(0, 2));
    const month = Number(code.slice(2, 4));
    const year = Number(code.slice(4, 8));

    // Tahun lahir dipakai hanya sebagai data identitas.
    // Ulang tahun dihitung pada tahun kalender saat ini.
    let birthday = new Date(now.getFullYear(), month - 1, day, 0, 0, 0, 0);

    // Kalau tanggal tahun ini sudah lewat jauh, tetap gunakan tahun ini
    // untuk mengecek window pasca-ulang-tahun. Untuk pencarian berikutnya,
    // fungsi caller bisa menghitung tahun berikutnya.
    const start = new Date(
        birthday.getTime() - Number(RNG_CONTROL.hbd.startHoursBeforeBirthday || 0) * 3600000
    );
    const end = new Date(
        birthday.getTime() + Number(RNG_CONTROL.hbd.endHoursAfterBirthday || 0) * 3600000
    );

    void year;
    return now >= start && now <= end;
}

window.RNG_CONTROL = RNG_CONTROL;
window.rngControl = rngControl;
window.rngFeatureEnabled = rngFeatureEnabled;
window.rngHbdScheduleEnabled = rngHbdScheduleEnabled;
window.rngHbdWindow = rngHbdWindow;
