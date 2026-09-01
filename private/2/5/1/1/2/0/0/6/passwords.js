/* =========================================================
   PASSWORDS.JS
   =========================================================
   
   File ini khusus untuk:
   - Password pembuka
   - Password ULTA
   - Password cadangan
   - Data orang
   - Pemberitahuan
   - Link/file
   - Kode tahap 4

   INDEX.HTML TIDAK PERLU DIUBAH
   kalau hanya ingin menambah/mengurangi data.
   ========================================================= */


window.ACCESS_DATA = {


    /* =====================================================
       TAHAP 1
       PASSWORD PEMBUKA UTAMA
       ===================================================== */

    unlock: {

        password: "252012",

        title: "Akses khusus",

        description:
            "Masukkan password untuk membuka akses khusus.",

        message:
            "Password diperlukan untuk melanjutkan.",

        rejectTitle:
            "Tidak dilanjutkan",

        rejectMessage:
            "Tidak masalah. Akses khusus tidak dilanjutkan."

    },


    /* =====================================================
       TAHAP 2
       ULTA + PASSWORD CADANGAN
       ===================================================== */

    stage2: {

        /*
           Format ULTA:

           DDMMYYYY

           Contoh:
           25 / 20 / 2012

           Untuk contoh sekarang sengaja:
           252012

           Tapi kalau nanti tanggal asli digunakan,
           isi dengan 8 angka.
        */

        ulta: "252012",

        backup: "252012",

        description:
            "Masukkan tanggal ULTA atau gunakan password cadangan.",

        message:
            "Gunakan salah satu metode verifikasi."

    },


    /* =====================================================
       DAFTAR PEMBERITAHUAN
       =====================================================

       Tinggal tambahkan:

       "03": {
           title: "...",
           message: "..."
       }

       lalu orangnya tinggal memakai:

       notice: "03"
    */

    notices: {


        "01": {

            title:
                "Pemberitahuan 01",

            message:
                "Bla-bla-bla."

        },


        "02": {

            title:
                "Pemberitahuan 02",

            message:
                "Nyenyenye."

        },


        "03": {

            title:
                "Pemberitahuan 03",

            message:
                "Ini contoh pemberitahuan ketiga."

        }

    },


    /* =====================================================
       DATA ORANG
       =====================================================

       Setiap orang dibuat sebagai SATU BLOK.

       Jadi nanti kalau mau menambah orang,
       tinggal copy satu blok dan ubah isinya.
    */

    people: [


        /* =================================================
           ORANG 01
        ================================================= */

        {

            name:
                "Orang 01",


            /*
               ULTA orang ini.

               Format:
               DDMMYYYY
            */

            ulta:
                "252012",


            /*
               Pilih pemberitahuan.

               Bisa:
               "01"
               "02"
               "03"
            */

            notice:
                "01",


            /* =============================================
               TAHAP 4
               ============================================= */

            stage4: {

                enabled:
                    true,

                password:
                    "252012"

            },


            /* =============================================
               HASIL

               type:

               "notice"
               = hanya pemberitahuan

               "file"
               = pemberitahuan + tombol link
               ============================================= */

            result: {

                type:
                    "notice",

                title:
                    "Akses berhasil",

                message:
                    "Selamat, akses kamu berhasil diverifikasi."

            }

        },


        /* =================================================
           ORANG 02
        ================================================= */

        {

            name:
                "Orang 02",


            ulta:
                "252012",


            notice:
                "02",


            stage4: {

                enabled:
                    true,

                password:
                    "252012"

            },


            result: {

                type:
                    "file",

                title:
                    "Akses berhasil",

                message:
                    "Akses berhasil. Silakan lanjut melalui tombol di bawah.",

                button:
                    "Buka file",

                link:
                    "https://contoh.com/file.zip"

            }

        }

    ]

};