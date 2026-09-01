/* RNG_NET — DATABASE TOMBOL
   Tambah / hapus tombol dari file ini saja.
   type:
     "link" -> buka URL
     "data" -> tampilkan data yang bisa disalin
*/
const RNG_BUTTONS = [
  {
    id: "tiktok",
    title: "TikTok",
    icon: "♪",
    type: "link",
    value: "#",
    enabled: true
  },
  {
    id: "instagram",
    title: "Instagram",
    icon: "◎",
    type: "link",
    value: "#",
    enabled: true
  },
  {
    id: "wa-group",
    title: "Grup Bot WA",
    icon: "○",
    type: "link",
    value: "#",
    enabled: true
  },
  {
    id: "mc-group",
    title: "Grup MC (Minecraft)",
    icon: "◌",
    type: "link",
    value: "#",
    enabled: true
  },
  {
    id: "wa-channel",
    title: "Saluran WhatsApp",
    icon: "◉",
    type: "link",
    value: "#",
    enabled: true
  },

  // Contoh tombol DATA. Ganti value dengan ID milikmu.
  {
    id: "minecraft-id",
    title: "ID Server Minecraft",
    icon: "◆",
    type: "data",
    value: "CONTOH-ID-SERVER",
    copyLabel: "Salin ID",
    enabled: true
  }
];
