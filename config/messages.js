/* =========================================================
   RNG_NET — PESAN SPECIAL
   ---------------------------------------------------------
   Password/orang diatur di config/passwords.js.
   Isi pesan diatur di file ini menggunakan messageNo.

   Contoh:
   messageNo: 1 -> memakai MESSAGE_DATA[1]
   messageNo: 2 -> memakai MESSAGE_DATA[2]
   messageNo: 3 -> memakai MESSAGE_DATA[3]
   ========================================================= */

const MESSAGE_DATA={
  1:`Hai, {name}.\n\nKalau kamu bisa sampai di bagian ini, berarti ada sesuatu yang memang sengaja disimpan di balik pintu kecil ini. Terima kasih sudah meluangkan waktu untuk membukanya.\n\nSemoga pesan ini bisa membuat harimu sedikit lebih hangat. ✦`,
  2:`Untuk {name},\n\nTidak semua hal harus dibuat ramai agar berarti. Ada beberapa pesan yang memang cukup dibaca pelan-pelan, lalu disimpan sebagai kenangan kecil.\n\nJaga diri baik-baik, dan semoga semuanya berjalan dengan baik untukmu. 🤍`,
  3:`Untuk {name},\n\nTerima kasih sudah menjadi bagian dari cerita ini. Tidak peduli seberapa jauh waktu berjalan, beberapa orang tetap punya tempatnya sendiri di dalam ingatan.\n\nSemoga selalu diberi banyak hal baik di perjalananmu. 🌙`,
  default:`Terima kasih sudah sampai di sini, {name}. ✦`
};
