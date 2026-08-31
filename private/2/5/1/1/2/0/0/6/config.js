/* =========================================================
   PASSWORD & LINK DATABASE
   Edit file ini saja.
   ========================================================= */

const ACCESS_DATA = {

    // =====================================================
    // NORMAL
    // 1 PASSWORD → LANGSUNG KE LINK
    // =====================================================

    normal: {
        password: "010101",
        link: "private/index.html"
    },


    // =====================================================
    // SPECIAL
    // 2 PASSWORD → LANGSUNG KE LINK
    //
    // Kamu bebas tambah / hapus data di sini.
    // =====================================================

    special: [

        {
            password1: "111111",
            password2: "222222",
            link: "special/01.html"
        },

        {
            password1: "333333",
            password2: "444444",
            link: "special/02.html"
        },

        {
            password1: "555555",
            password2: "666666",
            link: "special/03.html"
        }

    ],


    // =====================================================
    // SUPER SPECIAL
    // 3 PASSWORD → POPUP → LANJUT → LINK
    // =====================================================

    superSpecial: [

        {
            password1: "252012",
            password2: "739421",
            password3: "DDMMYYYY",
            link: "private/index.html"
        }

    ]

};
