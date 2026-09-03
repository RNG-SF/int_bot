/* =========================================================
   RNG SF — PESAN SPECIAL
   ---------------------------------------------------------
   Password/orang diatur di config/passwords.js.
   Isi pesan diatur di file ini menggunakan messageNo.

   Contoh:
   messageNo: 1 -> memakai MESSAGE_DATA[1]
   messageNo: 2 -> memakai MESSAGE_DATA[2]
   messageNo: 3 -> memakai MESSAGE_DATA[3]
   ========================================================= */

const MESSAGE_DATA = {

  /* =======================================================
     PESAN 1
     ======================================================= */
  1: `Hei {name}, gimana kabarmu?

Kalau kamu membaca pesan ini, artinya aku sudah pergi dari kehidupanmu. Aku cuma ingin meninggalkan sedikit ucapan terima kasih.

Terima kasih sudah pernah menemani aku, sudah pernah membuatku nyaman, tenang, dan bahagia. Terima kasih untuk waktu, perhatian, cerita, tawa, dan hal-hal kecil yang pernah kita lewati bersama.

Aku tahu kita bukan hubungan yang sempurna. Kita pernah salah, pernah saling kecewa, dan mungkin ada banyak hal yang sampai sekarang belum benar-benar kita pahami. Tapi aku nggak ingin membawa semua itu sebagai kebencian.

Aku cuma berharap, setelah aku pergi dari kehidupanmu, kamu bisa menemukan kebahagiaanmu sendiri. Semoga hidupmu lebih tenang, dan semoga kamu bertemu dengan banyak hal baik yang memang pantas kamu dapatkan.

Nggak perlu merasa bersalah atau merasa harus melakukan sesuatu setelah membaca ini.

Cukup jaga dirimu baik-baik.

Dan sekali lagi, terima kasih karena pernah hadir di hidupku.`,

  /* =======================================================
     PESAN 2
     ======================================================= */
  2: `hayy {name},apa kabar?

Aku cuma mau bilang terima kasih.

Terima kasih karena selama ini sudah pernah jadi teman yang baik, sudah pernah menemani, ngobrol, bercanda, dan berbagi banyak hal. Mungkin kelihatannya sederhana, tapi aku tetap menghargai semua itu.

Kalau kamu melihat pesan ini, artinya mungkin aku sudah tidak ada lagi.

Aku berharap kamu baik-baik saja, bahagia, dan hidupmu ke depannya semakin tenang.

Sekali lagi, terima kasih sudah pernah menjadi bagian dari hidupku sebagai seorang teman.

Jaga diri baik-baik.`,

  /* =======================================================
     PESAN 3
     ======================================================= */
  3: `Hai {name}.

Kalau pesan ini sudah kamu baca, artinya aku sudah tiada.

Jujur, dari sekian lama waktu yang sudah kita lewati bersama, sampai akhirnya kemarin kita sempat ketemu dan jadian, perjalanan itu menyimpan banyak cerita tersendiri. Walaupun hubungan kemarin cuma bertahan sebentar saja dan akhirnya kamu memilih pergi begitu saja, aku nggak mau melihat itu sebagai hal yang buruk.

Aku cuma mau ngucapin terima kasih banyak ya. Terima kasih sudah sempat bikin aku ngerasa nyaman, tenang, dan ngerasain momen-momen baik bareng kamu, meskipun waktunya singkat banget. Aku hargai semua kebaikan dan waktu yang pernah kita bagi bersama, dari masa-masa kita kenal dulu sampai kemarin.

Semoga ke depannya kamu selalu diberi hal-hal baik dan kebahagiaan di jalan yang kamu pilih. 

Jaga diri baik-baik, ya.`,

4: `Hai. Sengaja aku tulis pesan ini khusus buat kalian, karena aku pengen kalian tahu satu hal yang jarang banget sempat aku ucapkan secara langsung.

 Selama kita sekelas dan temenan, mungkin aku kelihatan biasa aja atau jarang banyak ngomong. Tapi sejujurnya, aku ngerasa beruntung banget bisa ada di lingkaran pertemanan kalian. Di saat aku sering merasa canggung atau diabaikan di tempat lain, kalian justru selalu jadi orang-orang yang konsisten ngajak aku gabung, nengok, dan yang paling penting: selalu bikin aku ngerasa dianggap ada.

Terima kasih banyak ya buat semua ajakan main, tawa di kelas, obrolan random, dan ketulusan kalian selama ini. Kalian nggak pernah bikin aku ngerasa sendirian atau tersisih. Buat aku, punya teman-teman yang bener-bener tulus kayak kalian itu hal yang berharga banget.

Semoga ke depannya kita tetap bisa akur, saling support, dan sukses di jalan masing-masing. Sekali lagi, terima kasih banyak sudah nerima aku dan selalu ada buat aku. Kalian emang temen-temen terbaik.`,

5: `Hai {name}.

Kalau pesan ini sudah kamu baca, artinya aku sudah tiada.

Jujur, dari semua orang yang kenal lewat circle Nyla, lu tuh emang beda sendiri. Walaupun kadang omongan lu toxic, julid, atau random, tapi lu tetep jadi salah satu orang yang bener-bener nemenin aku dan nggak pernah ngabaikan aku. Asiknya lagi, lu orangnya anti baperan, jadi enak diajak seru-seruan tanpa harus jaim.

Makasih banyak ya udah mau nemenin dan udah aku anggap kayak sahabat sendiri. Lu bener-bener solid dan tahu cara bikin suasana cair.

Semoga lu selalu sehat, bahagia, dan sukses terus ke depannya. Jaga diri baik-baik, ya.`

6: `Hai {name}.

Cuma mau ngucapin makasih banyak ya sudah jadi teman sekelas yang asik dan seru selama ini. 

Mungkin kita nggak sedekat itu atau jarang ngobrol panjang, tapi aku bener-bener hargai setiap tawa, obrolan ringan, atau bantuan kecil yang pernah kita bagi di kelas. Kamu orangnya seru dan ramah.

Semoga ke depannya segala urusan dan impian kamu dilancarkan terus, serta sukses buat apa pun yang sedang kamu kejar. Sukses terus ya!`

10: `Hai {name}.

Wah, ternyata kamu tahu dan ingat tanggal ulang tahunku sampai bisa masuk ke pesan spesial ini. Walaupun datamu mungkin belum sempat masuk ke sistem, aku tetap senang dan hargai banget perhatianmu.

Makasih banyak ya sudah menyempatkan mampir ke sini dan masih ingat momen itu. Senang rasanya tahu kamu peduli. 

Semoga kamu selalu sehat, lancar terus semua urusannya, dan sukses ke depannya ya!`


11: `Hai!

Makasih banyak ya sudah nyempetin mampir dan ngecek halaman ini. Walap buat akses pesan khusus, maaf bgt belum masukin kamu ke sistem hehe,makasi ya atas waktu kamu buat mampir ke sini. 

Semoga semua urusanmu lancar terus dan sukses ke depannya ya! hehe`




  /* =======================================================
     PESAN DEFAULT
     ======================================================= */
  default: `Terima kasih sudah sampai di sini, {name}. ✦`

};