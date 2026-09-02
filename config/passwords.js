/* =========================================================
   RNG_NET — DATABASE AKSES / PASSWORD
   ---------------------------------------------------------
   EDIT FILE INI SAJA untuk data akses.

   FORMAT ULTA PASSWORD:
   DDMMYYYY
   Contoh: 05-09-2005 -> "05092005"

   PASSWORD 1 = ULTA orang tersebut
   PASSWORD 2 = ULTA pemilik/backup: "25112006"

   Untuk orang yang belum punya tanggal lahir lengkap,
   password1 dibuat null dan bisa diisi nanti.
   ========================================================= */

const OWNER_BACKUP_PASSWORD = "25112006";

const ACCESS_DATA = {

    /* =====================================================
       NORMAL
       ===================================================== */
    normal: {
        password: "010101",
        link: "private/index.html"
    },


    /* =====================================================
       SPECIAL
       -----------------------------------------------------
       password1 : ULTA orang
       password2 : password cadangan/pemilik
       display   : data yang boleh ditampilkan
       messageNo : nomor pesan di config/messages.js
       output    : "notice" | "link"

       CATATAN:
       Halaman special terpisah TIDAK digunakan.
       Password/orang diatur di file ini.
       Isi pesan diatur di config/messages.js melalui messageNo.
       ===================================================== */
    special: [

        /* ================= KERABAT KELUARGA ================= */

        {
            id: "keluarga-01",
            nickname: "Mba Novi",
            fullName: "Novita Mariana",
            birthday: "05092005",
            password1: "05092005",
            password2: OWNER_BACKUP_PASSWORD,
            origin: "Kalimantan Selatan",
            output: "notice",
            messageNo: 3
        },

        {
            id: "keluarga-02",
            nickname: "Mba Lia",
            fullName: "Siti Aulia Rahma",
            birthday: "23012000",
            password1: "23012000",
            password2: OWNER_BACKUP_PASSWORD,
            origin: "Kalimantan Selatan",
            output: "notice",
            messageNo: 3
        },

        {
            id: "keluarga-03",
            nickname: "",
            fullName: "",
            birthday: "",
            password1: null,
            password2: OWNER_BACKUP_PASSWORD,
            origin: "Kalimantan Tengah",
            output: "notice",
            messageNo: 3,
            enabled: false
        },


        /* ================= TEMAN ================= */

        {
            id: "teman-01",
            nickname: "Kiya",
            fullName: "Saskiya Julia Ananta",
            birthday: "01072008",
            password1: "01072008",
            password2: OWNER_BACKUP_PASSWORD,
            origin: "Surabaya",
            output: "notice",
            messageNo: 1
        },

        {
            id: "teman-02",
            nickname: "Kia",
            fullName: "Saskia Umairo Anjh",
            birthday: "30042010",
            password1: "30042010",
            password2: OWNER_BACKUP_PASSWORD,
            origin: "Medan",
            output: "notice",
            messageNo: 2
        },

        {
            id: "teman-03",
            nickname: "Nyla",
            fullName: "Nyla",
            birthday: "29092010",
            password1: "29092010",
            password2: OWNER_BACKUP_PASSWORD,
            origin: "Ponorogo",
            output: "notice",
            messageNo: 1
        },

        {
            id: "teman-04",
            nickname: "Anisa",
            fullName: "Anisa Putri",
            birthday: "07122009",
            password1: "07122009",
            password2: OWNER_BACKUP_PASSWORD,
            origin: "Madura",
            output: "notice",
            messageNo: 2
        },

        {
            id: "teman-05",
            nickname: "Bintang",
            fullName: "Bintang Marsya Tandirau",
            birthday: "19112007",
            password1: "19112007",
            password2: OWNER_BACKUP_PASSWORD,
            origin: "Sulawesi Selatan",
            output: "notice",
            messageNo: 1
        },

        {
            id: "teman-06",
            nickname: "Icha",
            fullName: "Icha",
            birthday: "29102009",
            password1: "29102009",
            password2: OWNER_BACKUP_PASSWORD,
            origin: "Palembang",
            output: "notice",
            messageNo: 2
        },

        {
            id: "teman-07",
            nickname: "Eca",
            fullName: "Eca",
            birthday: "12102009",
            password1: "12102009",
            password2: OWNER_BACKUP_PASSWORD,
            origin: "Surabaya",
            output: "notice",
            messageNo: 1
        },

        {
            id: "teman-08",
            nickname: "Adek Wita",
            fullName: "Dewita Yulistia",
            birthday: "21042008",
            password1: "21042008",
            password2: OWNER_BACKUP_PASSWORD,
            origin: "Subang",
            output: "notice",
            messageNo: 1
        },

        {
            id: "teman-09",
            nickname: "Kia",
            fullName: "Kia",
            birthday: "14012007",
            password1: "14012007",
            password2: OWNER_BACKUP_PASSWORD,
            origin: "Madiun - Balerejo",
            output: "notice",
            messageNo: 2
        },

        {
            id: "teman-10",
            nickname: "Mita",
            fullName: "Mita",
            birthday: "",
            password1: null,
            password2: OWNER_BACKUP_PASSWORD,
            origin: "Madiun - Balerejo",
            output: "notice",
            messageNo: 2,
            note: "Tanggal lahir belum lengkap (data hanya umur 16).",
            enabled: false
        },

        {
            id: "teman-11",
            nickname: "Nurul",
            fullName: "Nurul",
            birthday: "03102010",
            password1: "03102010",
            password2: OWNER_BACKUP_PASSWORD,
            origin: "Temanggung",
            output: "notice",
            messageNo: 1
        },

        {
            id: "teman-12",
            nickname: "Nifa",
            fullName: "Janifa Rahma Wati",
            birthday: "21102011",
            password1: "21102011",
            password2: OWNER_BACKUP_PASSWORD,
            origin: "Medan",
            output: "notice",
            messageNo: 2
        },

        {
            id: "teman-13",
            nickname: "Dek Rahma",
            fullName: "Rahma",
            birthday: "10092008",
            password1: "10092008",
            password2: OWNER_BACKUP_PASSWORD,
            origin: "Madiun",
            output: "notice",
            messageNo: 1
        },

        {
            id: "teman-14",
            nickname: "Diana",
            fullName: "Diana",
            birthday: "20112008",
            password1: "20112008",
            password2: OWNER_BACKUP_PASSWORD,
            origin: "Subang",
            output: "notice",
            messageNo: 2
        },

        {
            id: "teman-15",
            nickname: "Delia",
            fullName: "Delia",
            birthday: "15122006",
            password1: "15122006",
            password2: OWNER_BACKUP_PASSWORD,
            origin: "Madiun - Jepang",
            output: "notice",
            messageNo: 1
        },

        {
            id: "teman-16",
            nickname: "Dinda",
            fullName: "Dinda",
            birthday: "10122010",
            password1: "10122010",
            password2: OWNER_BACKUP_PASSWORD,
            origin: "Ponorogo",
            output: "notice",
            messageNo: 2
        },

        {
            id: "teman-17",
            nickname: "Hana",
            fullName: "Hana",
            birthday: "20012011",
            password1: "20012011",
            password2: OWNER_BACKUP_PASSWORD,
            origin: "Madiun - Balerejo",
            output: "notice",
            messageNo: 1
        },

        {
            id: "teman-18",
            nickname: "Dita",
            fullName: "Dita",
            birthday: "30092007",
            password1: "30092007",
            password2: OWNER_BACKUP_PASSWORD,
            origin: "",
            output: "notice",
            messageNo: 2
        },

        {
            id: "teman-19",
            nickname: "Seva",
            fullName: "Seva",
            birthday: "18022011",
            password1: "18022011",
            password2: OWNER_BACKUP_PASSWORD,
            origin: "Cilacap",
            output: "notice",
            messageNo: 1
        },


        /* ================= TEMAN KELAS ================= */

        {
            id: "kelas-01",
            nickname: "Arin",
            fullName: "AARINAL BAZLA",
            birthday: "15042007",
            password1: "15042007",
            password2: OWNER_BACKUP_PASSWORD,
            output: "notice",
            messageNo: 1
        },

        {
            id: "kelas-02",
            nickname: "Adit",
            fullName: "ADITTIYA PUTRA",
            birthday: "06072006",
            password1: "06072006",
            password2: OWNER_BACKUP_PASSWORD,
            output: "notice",
            messageNo: 2
        },

        {
            id: "kelas-03",
            nickname: "Anis",
            fullName: "ANIS SYAROFAH",
            birthday: "03022007",
            password1: "03022007",
            password2: OWNER_BACKUP_PASSWORD,
            output: "notice",
            messageNo: 1
        },

        {
            id: "kelas-04",
            nickname: "Baun",
            fullName: "ARBA'UN MURSALIM",
            birthday: "07072006",
            password1: "07072006",
            password2: OWNER_BACKUP_PASSWORD,
            output: "notice",
            messageNo: 1
        },

        {
            id: "kelas-05",
            nickname: "Atika",
            fullName: "ATIKA LAILATUL MUNAWAROH",
            birthday: "24072006",
            password1: "24072006",
            password2: OWNER_BACKUP_PASSWORD,
            output: "notice",
            messageNo: 2
        },

        {
            id: "kelas-06",
            nickname: "Chandra",
            fullName: "CHANDRA APRILLIYANTO",
            birthday: "15042007",
            password1: "15042007",
            password2: OWNER_BACKUP_PASSWORD,
            output: "notice",
            messageNo: 1
        },

        {
            id: "kelas-07",
            nickname: "Diki",
            fullName: "DIKI PRASTYO FERNANDA",
            birthday: "23062007",
            password1: "23062007",
            password2: OWNER_BACKUP_PASSWORD,
            output: "notice",
            messageNo: 2
        },

        {
            id: "kelas-08",
            nickname: "Esa",
            fullName: "ESA MESSI ASSHOFA",
            birthday: "21112006",
            password1: "21112006",
            password2: OWNER_BACKUP_PASSWORD,
            output: "notice",
            messageNo: 1
        },

        {
            id: "kelas-09",
            nickname: "Fatma",
            fullName: "FATMA AFIRUL ISTHIANI",
            birthday: "09022007",
            password1: "09022007",
            password2: OWNER_BACKUP_PASSWORD,
            output: "notice",
            messageNo: 1
        },

        {
            id: "kelas-10",
            nickname: "Hendra",
            fullName: "HENDRA KURNIAWAN",
            birthday: "23032007",
            password1: "23032007",
            password2: OWNER_BACKUP_PASSWORD,
            output: "notice",
            messageNo: 2
        },

        {
            id: "kelas-11",
            nickname: "Intan",
            fullName: "INTAN NIRMALASARI RIZKI ANJARWATI",
            birthday: "21042006",
            password1: "21042006",
            password2: OWNER_BACKUP_PASSWORD,
            output: "notice",
            messageNo: 1
        },

        {
            id: "kelas-12",
            nickname: "Dila",
            fullName: "IRMA DWI ADHILA PUTRI",
            birthday: "22062007",
            password1: "22062007",
            password2: OWNER_BACKUP_PASSWORD,
            output: "notice",
            messageNo: 2
        },

        {
            id: "kelas-13",
            nickname: "Khoirul",
            fullName: "KHOIRUL",
            birthday: "10072006",
            password1: "10072006",
            password2: OWNER_BACKUP_PASSWORD,
            output: "notice",
            messageNo: 1
        },

        {
            id: "kelas-14",
            nickname: "Nabila",
            fullName: "NABILA SITI AISYAH",
            birthday: "16102007",
            password1: "16102007",
            password2: OWNER_BACKUP_PASSWORD,
            output: "notice",
            messageNo: 2
        },

        {
            id: "kelas-15",
            nickname: "Okta",
            fullName: "OKTAVIYANI NUR RAHMAWATI",
            birthday: "15102006",
            password1: "15102006",
            password2: OWNER_BACKUP_PASSWORD,
            output: "notice",
            messageNo: 1
        },

        {
            id: "kelas-16",
            nickname: "Rahayu",
            fullName: "RAHAYU PRATIWI",
            birthday: "05082006",
            password1: "05082006",
            password2: OWNER_BACKUP_PASSWORD,
            output: "notice",
            messageNo: 2
        },

        {
            id: "kelas-17",
            nickname: "Rangga",
            fullName: "RANGGA SOFYANTO",
            birthday: "25112006",
            password1: "25112006",
            password2: OWNER_BACKUP_PASSWORD,
            output: "notice",
            messageNo: 1
        },

        {
            id: "kelas-18",
            nickname: "Rizki",
            fullName: "RIZKY DWI NURFAIZIN",
            birthday: "06122006",
            password1: "06122006",
            password2: OWNER_BACKUP_PASSWORD,
            output: "notice",
            messageNo: 2
        },

        {
            id: "kelas-19",
            nickname: "Nida",
            fullName: "SEIFIKAI SUNNIDA PRAMUDIANA",
            birthday: "28042007",
            password1: "28042007",
            password2: OWNER_BACKUP_PASSWORD,
            output: "notice",
            messageNo: 1
        },

        {
            id: "kelas-20",
            nickname: "Siti",
            fullName: "SITI NURJANAH",
            birthday: "31082006",
            password1: "31082006",
            password2: OWNER_BACKUP_PASSWORD,
            output: "notice",
            messageNo: 2,
            note: "Data teman kelas; tidak ada penanda khusus."
        },

        {
            id: "kelas-21",
            nickname: "Tajib",
            fullName: "TAJIB BUSTANUN NA'IM",
            birthday: "11072006",
            password1: "11072006",
            password2: OWNER_BACKUP_PASSWORD,
            output: "notice",
            messageNo: 1
        },

        {
            id: "kelas-22",
            nickname: "Arifin",
            fullName: "ZAINAL ARIFIN",
            birthday: "16012007",
            password1: "16012007",
            password2: OWNER_BACKUP_PASSWORD,
            output: "notice",
            messageNo: 2
        }

    ],


    /* =====================================================
       SUPER SPECIAL
       -----------------------------------------------------
       Tetap dipisahkan dari SPECIAL agar engine lama tidak
       tercampur.

       Password 1 = ULTA
       Password 2 = backup
       Password 3 = kode tahap 4 / inisial
       ===================================================== */
    superSpecial: [

        /* Tambahkan orang tahap 4 di sini.
           Contoh:

           {
               id: "tahap4-01",
               nickname: "Nama",
               fullName: "Nama Lengkap",
               birthday: "DDMMYYYY",
               password1: "DDMMYYYY",
               password2: OWNER_BACKUP_PASSWORD,
               password3: "INISIAL",
               output: "notice",
               messageNo: 1
           }
        */

    ],

    /* SUPER SPECIAL — 3 tahap */
    superSpecial: [
        {
            id: "super-01",
            nickname: "RNG_NET",
            fullName: "Private Access",
            birthday: "",
            password1: "252012",
            password2: "739421",
            password3: "DDMMYYYY",
            output: "notice",
            messageNo: 1,
            enabled: true
        }
    ]

};


/* =========================================================
   OPTIONAL HELPER
   ---------------------------------------------------------
   Memudahkan engine mengecek apakah item memang aktif.
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
