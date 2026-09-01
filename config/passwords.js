/* =========================================================
   RNG_NET — DATABASE PASSWORD & MEMBER
   Edit file ini saja untuk menambah / mengubah member.

   FORMAT ULTA:
   DDMMYYYY

   output:
   "notice" = hanya menampilkan pemberitahuan
   "link"   = menampilkan pemberitahuan + link
   ========================================================= */

const ACCESS_DATA = {

    /* =====================================================
       PASSWORD AWAL
       Digunakan untuk masuk ke sistem akses khusus
       ===================================================== */

    normal: {
        password: "252012",
        link: ""
    },


    /* =====================================================
       MEMBER KHUSUS
       
       password1 = ULTA member
       password2 = password cadangan yang kamu isi sendiri

       output:
       notice = pemberitahuan
       link   = pemberitahuan + link
       ===================================================== */

    special: [

        /* ==================== KELUARGA ==================== */

        {
            type: "keluarga",
            nickname: "Mba Novi",
            name: "Novita Mariana",
            birth: "05092005",

            password1: "05092005",
            password2: "",

            output: "notice",
            message: 3,
            link: ""
        },

        {
            type: "keluarga",
            nickname: "Mba Lia",
            name: "Siti Aulia Rahma",
            birth: "23012000",

            password1: "23012000",
            password2: "",

            output: "notice",
            message: 3,
            link: ""
        },

        {
            type: "keluarga",
            nickname: "",
            name: "",
            birth: "",

            password1: "",
            password2: "",

            output: "notice",
            message: 3,
            link: ""
        },


        /* =================================================
           TEMAN
           ================================================= */

        {
            type: "teman",
            nickname: "Kiya",
            name: "Saskiya Julia Ananta",
            birth: "01072008",

            password1: "01072008",
            password2: "",

            output: "notice",
            message: 1,
            link: ""
        },

        {
            type: "teman",
            nickname: "Kia",
            name: "Saskia umairo Anjh",
            birth: "30042010",

            password1: "30042010",
            password2: "",

            output: "notice",
            message: 2,
            link: ""
        },

        {
            type: "teman",
            nickname: "Nyla",
            name: "Nyla",
            birth: "29092010",

            password1: "29092010",
            password2: "",

            output: "link",
            message: 1,
            link: ""
        },

        {
            type: "teman",
            nickname: "Anisa",
            name: "Anisa Putri",
            birth: "07122009",

            password1: "07122009",
            password2: "",

            output: "notice",
            message: 2,
            link: ""
        },

        {
            type: "teman",
            nickname: "Bintang",
            name: "Bintang Marsya Tandirau",
            birth: "19112007",

            password1: "19112007",
            password2: "",

            output: "notice",
            message: 1,
            link: ""
        },

        {
            type: "teman",
            nickname: "Icha",
            name: "Icha",
            birth: "29102009",

            password1: "29102009",
            password2: "",

            output: "notice",
            message: 2,
            link: ""
        },

        {
            type: "teman",
            nickname: "Eca",
            name: "Eca",
            birth: "12102009",

            password1: "12102009",
            password2: "",

            output: "notice",
            message: 3,
            link: ""
        },

        {
            type: "teman",
            nickname: "Adek Wita",
            name: "Dewita Yulistia",
            birth: "21042008",

            password1: "21042008",
            password2: "",

            output: "link",
            message: 2,
            link: ""
        },

        {
            type: "teman",
            nickname: "Kia",
            name: "Kia",
            birth: "14012007",

            password1: "14012007",
            password2: "",

            output: "notice",
            message: 1,
            link: ""
        },

        {
            type: "teman",
            nickname: "Mita",
            name: "Mita",
            birth: "",

            password1: "",
            password2: "",

            output: "notice",
            message: 3,
            link: ""
        },

        {
            type: "teman",
            nickname: "Nurul",
            name: "Nurul",
            birth: "03102010",

            password1: "03102010",
            password2: "",

            output: "notice",
            message: 2,
            link: ""
        },

        {
            type: "teman",
            nickname: "Nifa",
            name: "Janifa Rahma Wati",
            birth: "21102011",

            password1: "21102011",
            password2: "",

            output: "notice",
            message: 1,
            link: ""
        },

        {
            type: "teman",
            nickname: "Dek Rahma",
            name: "Rahma",
            birth: "10092008",

            password1: "10092008",
            password2: "",

            output: "notice",
            message: 2,
            link: ""
        },

        {
            type: "teman",
            nickname: "Diana",
            name: "Diana",
            birth: "20112008",

            password1: "20112008",
            password2: "",

            output: "notice",
            message: 1,
            link: ""
        },

        {
            type: "teman",
            nickname: "Delia",
            name: "Delia",
            birth: "15122006",

            password1: "15122006",
            password2: "",

            output: "notice",
            message: 3,
            link: ""
        },

        {
            type: "teman",
            nickname: "Dinda",
            name: "Dinda",
            birth: "10122010",

            password1: "10122010",
            password2: "",

            output: "notice",
            message: 2,
            link: ""
        },

        {
            type: "teman",
            nickname: "Hana",
            name: "Hana",
            birth: "20012011",

            password1: "20012011",
            password2: "",

            output: "notice",
            message: 1,
            link: ""
        },

        {
            type: "teman",
            nickname: "Dita",
            name: "Dita",
            birth: "30092007",

            password1: "30092007",
            password2: "",

            output: "notice",
            message: 3,
            link: ""
        },

        {
            type: "teman",
            nickname: "Seva",
            name: "Seva",
            birth: "18022011",

            password1: "18022011",
            password2: "",

            output: "link",
            message: 2,
            link: ""
        },


        /* =================================================
           TEMAN KELAS
           ================================================= */

        {
            type: "teman_kelas",
            nickname: "Arin",
            name: "AARINAL BAZLA",
            birth: "15042007",

            password1: "15042007",
            password2: "",

            output: "notice",
            message: 1,
            link: ""
        },

        {
            type: "teman_kelas",
            nickname: "Adit",
            name: "ADITTIYA PUTRA",
            birth: "06072006",

            password1: "06072006",
            password2: "",

            output: "notice",
            message: 2,
            link: ""
        },

        {
            type: "teman_kelas",
            nickname: "Anis",
            name: "ANIS SYAROFAH",
            birth: "03022007",

            password1: "03022007",
            password2: "",

            output: "notice",
            message: 3,
            link: ""
        },

        {
            type: "teman_kelas",
            nickname: "Baun",
            name: "ARBA'UN MURSALIM",
            birth: "07072006",

            password1: "07072006",
            password2: "",

            output: "link",
            message: 1,
            link: ""
        },

        {
            type: "teman_kelas",
            nickname: "Atika",
            name: "ATIKA LAILATUL MUNAWAROH",
            birth: "24072006",

            password1: "24072006",
            password2: "",

            output: "notice",
            message: 2,
            link: ""
        },

        {
            type: "teman_kelas",
            nickname: "Chandra",
            name: "CHANDRA APRILLIYANTO",
            birth: "15042007",

            password1: "15042007",
            password2: "",

            output: "notice",
            message: 3,
            link: ""
        },

        {
            type: "teman_kelas",
            nickname: "Diki",
            name: "DIKI PRASTYO FERNANDA",
            birth: "23062007",

            password1: "23062007",
            password2: "",

            output: "notice",
            message: 1,
            link: ""
        },

        {
            type: "teman_kelas",
            nickname: "Esa",
            name: "ESA MESSI ASSHOFA",
            birth: "21112006",

            password1: "21112006",
            password2: "",

            output: "notice",
            message: 2,
            link: ""
        },

        {
            type: "teman_kelas",
            nickname: "Fatma",
            name: "FATMA AFIRUL ISTHIANI",
            birth: "09022007",

            password1: "09022007",
            password2: "",

            output: "link",
            message: 3,
            link: ""
        },

        {
            type: "teman_kelas",
            nickname: "Hendra",
            name: "HENDRA KURNIAWAN",
            birth: "23032007",

            password1: "23032007",
            password2: "",

            output: "notice",
            message: 1,
            link: ""
        },

        {
            type: "teman_kelas",
            nickname: "Intan",
            name: "INTAN NIRMALASARI RIZKI ANJARWATI",
            birth: "21042006",

            password1: "21042006",
            password2: "",

            output: "link",
            message: 2,
            link: ""
        },

        {
            type: "teman_kelas",
            nickname: "Dila",
            name: "IRMA DWI ADHILA PUTRI",
            birth: "22062007",

            password1: "22062007",
            password2: "",

            output: "notice",
            message: 3,
            link: ""
        },

        {
            type: "teman_kelas",
            nickname: "Khoirul",
            name: "KHOIRUL",
            birth: "10072006",

            password1: "10072006",
            password2: "",

            output: "notice",
            message: 1,
            link: ""
        },

        {
            type: "teman_kelas",
            nickname: "Nabila",
            name: "NABILA SITI AISYAH",
            birth: "16102007",

            password1: "16102007",
            password2: "",

            output: "notice",
            message: 2,
            link: ""
        },

        {
            type: "teman_kelas",
            nickname: "Okta",
            name: "OKTAVIYANI NUR RAHMAWATI",
            birth: "15102006",

            password1: "15102006",
            password2: "",

            output: "notice",
            message: 3,
            link: ""
        },

        {
            type: "teman_kelas",
            nickname: "Rahayu",
            name: "RAHAYU PRATIWI",
            birth: "05082006",

            password1: "05082006",
            password2: "",

            output: "notice",
            message: 1,
            link: ""
        },

        {
            type: "teman_kelas",
            nickname: "Rangga",
            name: "RANGGA SOFYANTO",
            birth: "25112006",

            password1: "25112006",
            password2: "",

            output: "notice",
            message: 2,
            link: ""
        },

        {
            type: "teman_kelas",
            nickname: "Rizki",
            name: "RIZKY DWI NURFAIZIN",
            birth: "06122006",

            password1: "06122006",
            password2: "",

            output: "notice",
            message: 3,
            link: ""
        },

        {
            type: "teman_kelas",
            nickname: "Nida",
            name: "SEIFIKAI SUNNIDA PRAMUDIANA",
            birth: "28042007",

            password1: "28042007",
            password2: "",

            output: "notice",
            message: 1,
            link: ""
        },

        {
            type: "teman_kelas",
            nickname: "Siti",
            name: "SITI NURJANAH",
            birth: "31082006",

            password1: "31082006",
            password2: "",

            output: "notice",
            message: 2,
            link: ""
        },

        {
            type: "teman_kelas",
            nickname: "Tajib",
            name: "TAJIB BUSTANUN NA'IM",
            birth: "11072006",

            password1: "11072006",
            password2: "",

            output: "link",
            message: 3,
            link: ""
        },

        {
            type: "teman_kelas",
            nickname: "Arifin",
            name: "ZAINAL ARIFIN",
            birth: "16012007",

            password1: "16012007",
            password2: "",

            output: "notice",
            message: 1,
            link: ""
        }

    ],


    /* =====================================================
       TAHAP 4
       
       KHUSUS ULTA YANG SAMA.
       SENGAJA DIKOSONGKAN DULU.
       
       Nanti formatnya:
       
       {
           initial: "XX",
           password: "DDMMYYYY",
           program: "program-01",
           message: 1
       }
       ===================================================== */

    superSpecial: []

};


/* =========================================================
   EXPORT
   ========================================================= */

if (typeof window !== "undefined") {
    window.ACCESS_DATA = ACCESS_DATA;
}