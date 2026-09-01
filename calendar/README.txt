KALENDER RNG_NET

Data kalender disimpan di localStorage browser.

Fitur engine:
- profil pengguna
- sekolah / kerja
- hitungan gaji opsional
- gaji harian / per jam
- jam kerja manual
- mode otomatis
- shift
- jumlah shift
- lembur
- lembur jam mati / jam hidup
- libur satu tanggal
- libur rentang tanggal
- hapus libur
- edit hari yang terlewat
- bulan sebelumnya
- bulan berikutnya
- history

Contoh:
RNGCalendar.addHoliday("2026-10-01");
RNGCalendar.addHoliday("2026-10-01", "2026-10-05");

RNGCalendar.setDay("2026-09-03", {
  start: "08:00",
  end: "17:00",
  overtime: 1
});

RNGCalendar.deleteDay("2026-09-03");
RNGCalendar.removeHoliday("2026-10-03");
