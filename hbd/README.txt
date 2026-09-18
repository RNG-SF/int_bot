RNG SF — HBD / ULTA

PEMBAGIAN DATA
- UCAPAN biasa: config/ucapan.js
  nama, ulta, pesanKe, messageNo
- ULTA: config/birthday.js
  nama, ulta, pesanHBD
- config/passwords.js
  menentukan akses + featureType.
  ULTA memakai featureType: "ulta" dan hbdDataId.

FILE PENTING
- config/buttons.js dan config/settings.js tetap berasal dari project utama.
- HBD dibuat eksternal agar index.html utama tetap ringan.
- HBD_24H_ONLY = false untuk testing.
  Set true jika ingin tombol hanya muncul 24 jam sebelum ulang tahun.

CATATAN
Tanggal Alisya "18102010" dipakai sebagai 18 Oktober 2010.
