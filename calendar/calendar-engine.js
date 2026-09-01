/* =========================================================
   RNG_NET — CALENDAR ENGINE
   Penyimpanan: localStorage browser.
   Kunci utama:
     rng_net_profile
     rng_net_calendar
     rng_net_settings
   ========================================================= */

const RNGCalendar = (() => {
  const KEYS = {
    profile: "rng_net_profile",
    calendar: "rng_net_calendar",
    settings: "rng_net_settings"
  };

  const clone = value => JSON.parse(JSON.stringify(value));

  function load(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return clone(fallback);
      return { ...clone(fallback), ...JSON.parse(raw) };
    } catch {
      return clone(fallback);
    }
  }

  function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return value;
  }

  function getProfile() {
    return load(KEYS.profile, CALENDAR_DEFAULTS.profile);
  }

  function setProfile(data) {
    return save(KEYS.profile, { ...getProfile(), ...data });
  }

  function getCalendar() {
    return load(KEYS.calendar, {
      work: clone(CALENDAR_DEFAULTS.work),
      holidays: [],
      notes: {}
    });
  }

  function setCalendar(data) {
    return save(KEYS.calendar, { ...getCalendar(), ...data });
  }

  function getSettings() {
    return load(KEYS.settings, {
      theme: "dark",
      monthOffset: 0,
      firstDay: 1
    });
  }

  function setSettings(data) {
    return save(KEYS.settings, { ...getSettings(), ...data });
  }

  function setDay(date, data) {
    const cal = getCalendar();
    const key = normalizeDate(date);
    cal.work.schedule[key] = {
      ...(cal.work.schedule[key] || {}),
      ...data
    };
    save(KEYS.calendar, cal);
    return cal.work.schedule[key];
  }

  function deleteDay(date) {
    const cal = getCalendar();
    delete cal.work.schedule[normalizeDate(date)];
    save(KEYS.calendar, cal);
  }

  function addHoliday(startDate, endDate = startDate) {
    const start = toDate(startDate);
    const end = toDate(endDate);
    if (!start || !end || end < start) return false;

    const cal = getCalendar();
    const cursor = new Date(start);

    while (cursor <= end) {
      const key = normalizeDate(cursor);
      if (!cal.holidays.includes(key)) cal.holidays.push(key);
      cursor.setDate(cursor.getDate() + 1);
    }

    cal.holidays.sort();
    save(KEYS.calendar, cal);
    return true;
  }

  function removeHoliday(date) {
    const cal = getCalendar();
    const key = normalizeDate(date);
    cal.holidays = cal.holidays.filter(d => d !== key);
    save(KEYS.calendar, cal);
  }

  function isHoliday(date) {
    return getCalendar().holidays.includes(normalizeDate(date));
  }

  function getDay(date) {
    const cal = getCalendar();
    const key = normalizeDate(date);

    if (cal.holidays.includes(key)) {
      return { date: key, status: "holiday" };
    }

    return {
      date: key,
      status: "work",
      ...(cal.work.schedule[key] || {})
    };
  }

  function getMonth(year, monthIndex) {
    const first = new Date(year, monthIndex, 1);
    const last = new Date(year, monthIndex + 1, 0);
    const result = [];

    for (let d = 1; d <= last.getDate(); d++) {
      result.push(getDay(new Date(year, monthIndex, d)));
    }

    return {
      year,
      month: monthIndex,
      firstWeekday: first.getDay(),
      days: result
    };
  }

  function getHistory(monthsBack = 6) {
    const now = new Date();
    const result = [];

    for (let i = 0; i < monthsBack; i++) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      result.push(getMonth(d.getFullYear(), d.getMonth()));
    }

    return result;
  }

  function normalizeDate(value) {
    const d = toDate(value);
    if (!d) return "";
    return [
      d.getFullYear(),
      String(d.getMonth() + 1).padStart(2, "0"),
      String(d.getDate()).padStart(2, "0")
    ].join("-");
  }

  function toDate(value) {
    if (value instanceof Date && !isNaN(value)) {
      return new Date(value.getFullYear(), value.getMonth(), value.getDate());
    }

    if (typeof value !== "string") return null;

    const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (!match) return null;

    const d = new Date(
      Number(match[1]),
      Number(match[2]) - 1,
      Number(match[3])
    );

    return isNaN(d) ? null : d;
  }

  function resetAll() {
    Object.values(KEYS).forEach(key => localStorage.removeItem(key));
  }

  return {
    getProfile,
    setProfile,
    getCalendar,
    setCalendar,
    getSettings,
    setSettings,
    setDay,
    deleteDay,
    addHoliday,
    removeHoliday,
    isHoliday,
    getDay,
    getMonth,
    getHistory,
    normalizeDate,
    resetAll
  };
})();
