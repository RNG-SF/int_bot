/* =========================================================
   RNG SF — PASSWORD / ACCESS CONFIG
   ========================================================= */

const OWNER_BACKUP_PASSWORD = "25112006";
const GATEWAY_PASSWORD = "252012";

/* =========================================================
   SECURITY / PESAN AKSES PAKSA
   ========================================================= */

const SECURITY_MESSAGES = {
    forcedEntry: {
        title: "Hei, jangan masuk ke sini.",
        message:
            "Kalau kamu sampai menemukan pesan ini, berarti kamu mencoba masuk ke tempat yang seharusnya bukan untukmu.\n\n" +
            "Di sini nggak ada apa-apa yang perlu kamu cari. Nggak ada rahasia besar, nggak ada sesuatu yang berharga untuk diambil.\n\n" +
            "Di sini cuma ada hati. Hati yang menyimpan cerita, kenangan, dan pesan untuk orang-orang yang memang punya tempat di dalamnya.\n\n" +
            "Jadi, tolong berhenti sampai di sini. Jangan rusak sesuatu yang dibuat dengan perasaan.\n\n" +
            "Kamu nggak perlu masuk lebih jauh. Pulang aja. 🤍"
    }
};

/* =========================================================
   DATABASE AKSES
   ========================================================= */

const ACCESS_DATA = {

    /* -----------------------------------------------------
       AKSES NORMAL
       ----------------------------------------------------- */

    normal: {
        password: "010101",
        link: "private/index.html"
    },

    /* -----------------------------------------------------
       AKSES KHUSUS
       Password khusus TIDAK digunakan langsung.
       User harus melewati GATEWAY_PASSWORD terlebih dahulu.
       ----------------------------------------------------- */

    special: [

        {
            id: "keluarga-01",
            nickname: "Mba Novi",
            fullName: "Novita Mariana",
            birthday: "05092005",
            origin: "",
            output: "notice",
            messageNo: 3,
            password1: null,
            enabled: true
        },

        {
            id: "keluarga-02",
            nickname: "Mba Lia",
            fullName: "Siti Aulia Rahma",
            birthday: "23012000",
            origin: "",
            output: "notice",
            messageNo: 3,
            password1: null,
            enabled: true
        },

        {
            id: "keluarga-03",
            nickname: "",
            fullName: "",
            birthday: "",
            origin: "",
            output: "notice",
            messageNo: 3,
            note: "Tanggal lahir belum lengkap. Isi birthday dan password1 nanti.",
            password1: null,
            enabled: false
        },

        {
            id: "teman-01",
            nickname: "Kiya",
            fullName: "Saskiya Julia Ananta",
            birthday: "01072008",
            origin: "Surabaya",
            output: "notice",
            messageNo: 1,
            password1: null,
            enabled: true
        },

        {
            id: "teman-02",
            nickname: "Kia",
            fullName: "Saskia Umairo Anjh",
            birthday: "30042010",
            origin: "Medan",
            output: "notice",
            messageNo: 2,
            password1: null,
            enabled: true
        },

        {
            id: "teman-03",
            nickname: "Nyla",
            fullName: "Nyla",
            birthday: "29092010",
            origin: "Ponorogo",
            output: "link",
            link: "special/nyla.html",
            messageNo: 1,
            password1: null,
            enabled: true
        },

        {
            id: "teman-04",
            nickname: "Anisa",
            fullName: "Anisa Putri",
            birthday: "07122009",
            origin: "Madura",
            output: "notice",
            messageNo: 2,
            password1: null,
            enabled: true
        },

        {
            id: "teman-05",
            nickname: "Bintang",
            fullName: "Bintang Marsya Tandirau",
            birthday: "19112007",
            origin: "Sulawesi Selatan",
            output: "notice",
            messageNo: 1,
            password1: null,
            enabled: true
        },

        {
            id: "teman-06",
            nickname: "Icha",
            fullName: "Icha",
            birthday: "29102009",
            origin: "Palembang",
            output: "notice",
            messageNo: 2,
            password1: null,
            enabled: true
        },

        {
            id: "teman-07",
            nickname: "Eca",
            fullName: "Eca",
            birthday: "12102009",
            origin: "Surabaya",
            output: "notice",
            messageNo: 1,
            password1: null,
            enabled: true
        },

        {
            id: "teman-08",
            nickname: "Adek Wita",
            fullName: "Dewita Yulistia",
            birthday: "21042008",
            origin: "Subang",
            output: "link",
            link: "special/wita.html",
            messageNo: 1,
            password1: null,
            enabled: true
        },

        {
            id: "teman-09",
            nickname: "Kia",
            fullName: "Kia",
            birthday: "14012007",
            origin: "Madiun - Balerejo",
            output: "notice",
            messageNo: 2,
            password1: null,
            enabled: true
        },

        {
            id: "teman-10",
            nickname: "Mita",
            fullName: "Mita",
            birthday: "",
            origin: "Madiun - Balerejo",
            output: "notice",
            messageNo: 2,
            note: "Tanggal lahir belum lengkap. Isi birthday dan password1 nanti.",
            password1: null,
            enabled: true
        },

        {
            id: "teman-11",
            nickname: "Nurul",
            fullName: "Nurul",
            birthday: "03102010",
            origin: "Temanggung",
            output: "notice",
            messageNo: 1,
            password1: null,
            enabled: true
        },

        {
            id: "teman-12",
            nickname: "Nifa",
            fullName: "Janifa Rahma Wati",
            birthday: "21102011",
            origin: "Medan",
            output: "notice",
            messageNo: 2,
            password1: null,
            enabled: true
        },

        {
            id: "teman-13",
            nickname: "Dek Rahma",
            fullName: "Rahma",
            birthday: "10092008",
            origin: "Madiun",
            output: "notice",
            messageNo: 1,
            password1: null,
            enabled: true
        },

        {
            id: "teman-14",
            nickname: "Diana",
            fullName: "Diana",
            birthday: "20112008",
            origin: "Subang",
            output: "notice",
            messageNo: 2,
            password1: null,
            enabled: true
        },

        {
            id: "teman-15",
            nickname: "Delia",
            fullName: "Delia",
            birthday: "15122006",
            origin: "Madiun - Jepang",
            output: "notice",
            messageNo: 1,
            password1: null,
            enabled: true
        },

        {
            id: "teman-16",
            nickname: "Dinda",
            fullName: "Dinda",
            birthday: "10122010",
            origin: "Ponorogo",
            output: "notice",
            messageNo: 2,
            password1: null,
            enabled: true
        },

        {
            id: "teman-17",
            nickname: "Hana",
            fullName: "Hana",
            birthday: "20012011",
            origin: "Madiun - Balerejo",
            output: "notice",
            messageNo: 1,
            password1: null,
            enabled: true
        },

        {
            id: "teman-18",
            nickname: "Dita",
            fullName: "Dita",
            birthday: "30092007",
            origin: "",
            output: "notice",
            messageNo: 2,
            password1: null,
            enabled: true
        },

        {
            id: "teman-19",
            nickname: "Seva",
            fullName: "Seva",
            birthday: "18022011",
            origin: "Cilacap",
            output: "link",
            link: "special/seva.html",
            messageNo: 1,
            password1: null,
            enabled: true
        }
    ],

    /* -----------------------------------------------------
       DATA TEMAN SEKELAS
       ----------------------------------------------------- */

    classmates: [

        {
            id: "kelas-01",
            nickname: "Arin",
            fullName: "AARINAL BAZLA",
            birthday: "15042007",
            output: "notice",
            messageNo: 1,
            password1: null,
            enabled: true
        },

        {
            id: "kelas-02",
            nickname: "Adit",
            fullName: "ADITTIYA PUTRA",
            birthday: "06072006",
            output: "notice",
            messageNo: 2,
            password1: null,
            enabled: true
        },

        {
            id: "kelas-03",
            nickname: "Anis",
            fullName: "ANIS SYAROFAH",
            birthday: "03022007",
            output: "notice",
            messageNo: 1,
            password1: null,
            enabled: true
        },

        {
            id: "kelas-04",
            nickname: "Baun",
            fullName: "ARBA'UN MURSALIM",
            birthday: "07072006",
            output: "link",
            link: "special/baun.html",
            messageNo: 1,
            password1: null,
            enabled: true
        },

        {
            id: "kelas-05",
            nickname: "Atika",
            fullName: "ATIKA LAILATUL MUNAWAROH",
            birthday: "24072006",
            output: "notice",
            messageNo: 2,
            password1: null,
            enabled: true
        },

        {
            id: "kelas-06",
            nickname: "Chandra",
            fullName: "CHANDRA APRILLIYANTO",
            birthday: "15042007",
            output: "notice",
            messageNo: 1,
            password1: null,
            enabled: true
        },

        {
            id: "kelas-07",
            nickname: "Diki",
            fullName: "DIKI PRASTYO FERNANDA",
            birthday: "23062007",
            output: "notice",
            messageNo: 2,
            password1: null,
            enabled: true
        },

        {
            id: "kelas-08",
            nickname: "Esa",
            fullName: "ESA MESSI ASSHOFA",
            birthday: "21112006",
            output: "notice",
            messageNo: 1,
            password1: null,
            enabled: true
        },

        {
            id: "kelas-09",
            nickname: "Fatma",
            fullName: "FATMA AFIRUL ISTHIANI",
            birthday: "09022007",
            output: "link",
            link: "special/fatma.html",
            messageNo: 1,
            password1: null,
            enabled: true
        },

        {
            id: "kelas-10",
            nickname: "Hendra",
            fullName: "HENDRA KURNIAWAN",
            birthday: "23032007",
            output: "notice",
            messageNo: 2,
            password1: null,
            enabled: true
        },

        {
            id: "kelas-11",
            nickname: "Intan",
            fullName: "INTAN NIRMALASARI RIZKI ANJARWATI",
            birthday: "21042006",
            output: "link",
            link: "special/intan.html",
            messageNo: 1,
            password1: null,
            enabled: true
        },

        {
            id: "kelas-12",
            nickname: "Dila",
            fullName: "IRMA DWI ADHILA PUTRI",
            birthday: "22062007",
            output: "notice",
            messageNo: 2,
            password1: null,
            enabled: true
        },

        {
            id: "kelas-13",
            nickname: "Khoirul",
            fullName: "KHOIRUL",
            birthday: "10072006",
            output: "notice",
            messageNo: 1,
            password1: null,
            enabled: true
        },

        {
            id: "kelas-14",
            nickname: "Nabila",
            fullName: "NABILA SITI AISYAH",
            birthday: "16102007",
            output: "notice",
            messageNo: 2,
            password1: null,
            enabled: true
        },

        {
            id: "kelas-15",
            nickname: "Okta",
            fullName: "OKTAVIYANI NUR RAHMAWATI",
            birthday: "15102006",
            output: "notice",
            messageNo: 1,
            password1: null,
            enabled: true
        },

        {
            id: "kelas-16",
            nickname: "Rahayu",
            fullName: "RAHAYU PRATIWI",
            birthday: "05082006",
            output: "notice",
            messageNo: 2,
            password1: null,
            enabled: true
        },

        {
            id: "kelas-17",
            nickname: "Rangga",
            fullName: "RANGGA SOFYANTO",
            birthday: "25112006",
            output: "notice",
            messageNo: 1,
            password1: null,
            enabled: true
        },

        {
            id: "kelas-18",
            nickname: "Rizki",
            fullName: "RIZKY DWI NURFAIZIN",
            birthday: "06122006",
            output: "notice",
            messageNo: 2,
            password1: null,
            enabled: true
        },

        {
            id: "kelas-19",
            nickname: "Nida",
            fullName: "SEIFIKAI SUNNIDA PRAMUDIANA",
            birthday: "28042007",
            output: "notice",
            messageNo: 1,
            password1: null,
            enabled: true
        },

        {
            id: "kelas-20",
            nickname: "Siti",
            fullName: "SITI NURJANAH",
            birthday: "31082006",
            output: "notice",
            messageNo: 2,
            password1: null,
            enabled: true
        },

        {
            id: "kelas-21",
            nickname: "Tajib",
            fullName: "TAJIB BUSTANUN NA'IM",
            birthday: "11072006",
            output: "link",
            link: "special/tajib.html",
            messageNo: 1,
            password1: null,
            enabled: true
        },

        {
            id: "kelas-22",
            nickname: "Arifin",
            fullName: "ZAINAL ARIFIN",
            birthday: "16012007",
            output: "notice",
            messageNo: 2,
            password1: null,
            enabled: true
        }
    ],

    /* -----------------------------------------------------
       SUPER SPECIAL
       ----------------------------------------------------- */

    superSpecial: []
};


/* =========================================================
   HELPER
   ========================================================= */

function getActiveSpecialAccess() {
    return ACCESS_DATA.special.filter(item =>
        item.enabled !== false &&
        item.password1
    );
}

function getActiveSuperSpecialAccess() {
    return ACCESS_DATA.superSpecial.filter(item =>
        item.enabled !== false &&
        item.password1
    );
}