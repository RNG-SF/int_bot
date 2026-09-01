/* RNG_NET — KALENDER / PROFIL
   Semua data pengguna disimpan lokal di browser.
   Tidak membutuhkan database untuk penggunaan pribadi.
*/

const CALENDAR_DEFAULTS = {
  profile: {
    name: "",
    age: "",
    status: "",          // sekolah / kerja / lainnya
    school: "",
    company: "",
    salaryEnabled: false,
    salaryType: "daily", // daily / hourly
    salary: 0
  },

  work: {
    hasWorkHours: true,
    mode: "manual",      // manual / automatic
    hasShift: false,
    shiftCount: 1,
    writeSchedule: true,
    overtime: {
      enabled: false,
      mode: "fixed",     // fixed / flexible
      rate30: 0,
      rate60: 0
    },
    schedule: {}
  },

  holidays: [],
  notes: {}
};
