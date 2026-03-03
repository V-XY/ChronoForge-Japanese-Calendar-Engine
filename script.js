// ==============================
// CHRONOFORGE · 和暦
// Japanese Calendar Engine - C.E
// ==============================

const japaneseEras = [
  { 
    name: "明治", 
    nameEn: "Meiji", 
    start: new Date(1868, 0, 25), 
    end: new Date(1912, 6, 30)
  },
  { 
    name: "大正", 
    nameEn: "Taishō", 
    start: new Date(1912, 6, 30), 
    end: new Date(1926, 11, 25)
  },
  { 
    name: "昭和", 
    nameEn: "Shōwa", 
    start: new Date(1926, 11, 25), 
    end: new Date(1989, 0, 7)
  },
  { 
    name: "平成", 
    nameEn: "Heisei", 
    start: new Date(1989, 0, 8), 
    end: new Date(2019, 3, 30)
  },
  { 
    name: "令和", 
    nameEn: "Reiwa", 
    start: new Date(2019, 4, 1), 
    end: null
  }
];

const japaneseMonths = [
  { name: "睦月", nameEn: "Mutsuki" },
  { name: "如月", nameEn: "Kisaragi" },
  { name: "弥生", nameEn: "Yayoi" },
  { name: "卯月", nameEn: "Uzuki" },
  { name: "皐月", nameEn: "Satsuki" },
  { name: "水無月", nameEn: "Minazuki" },
  { name: "文月", nameEn: "Fumizuki" },
  { name: "葉月", nameEn: "Hazuki" },
  { name: "長月", nameEn: "Nagatsuki" },
  { name: "神無月", nameEn: "Kannazuki" },
  { name: "霜月", nameEn: "Shimotsuki" },
  { name: "師走", nameEn: "Shiwasu" }
];

const rokuyo = [
  { 
    name: "先勝", 
    nameEn: "Senshō", 
    meaning: "先勝",
    meaningEn: "Quick victory",
    fortune: "午前吉 午後凶",
    fortuneEn: "Good morning, bad afternoon",
    color: "sensho",
    abbr: "先"
  },
  { 
    name: "友引", 
    nameEn: "Tomobiki", 
    meaning: "友引",
    meaningEn: "Pulling friends",
    fortune: "葬式凶",
    fortuneEn: "Bad for funerals",
    color: "tomobiki",
    abbr: "友"
  },
  { 
    name: "先負", 
    nameEn: "Senbu", 
    meaning: "先負",
    meaningEn: "Quick loss",
    fortune: "午前凶 午後吉",
    fortuneEn: "Bad morning, good afternoon",
    color: "senbu",
    abbr: "負"
  },
  { 
    name: "仏滅", 
    nameEn: "Butsumetsu", 
    meaning: "仏滅",
    meaningEn: "Buddha's death",
    fortune: "大凶",
    fortuneEn: "Most unlucky",
    color: "butsumetsu",
    abbr: "仏"
  },
  { 
    name: "大安", 
    nameEn: "Taian", 
    meaning: "大安",
    meaningEn: "Great peace",
    fortune: "大吉",
    fortuneEn: "Most lucky",
    color: "taian",
    abbr: "大"
  },
  { 
    name: "赤口", 
    nameEn: "Shakkō", 
    meaning: "赤口",
    meaningEn: "Red mouth",
    fortune: "正午のみ吉",
    fortuneEn: "Good only at noon",
    color: "shakko",
    abbr: "赤"
  }
];

const fiveFestivals = [
  { 
    name: "人日", 
    nameEn: "Jinjitsu", 
    holidayName: "七草粥",
    holidayNameEn: "Seven Herbs",
    emoji: "🎍",
    date: { month: 0, day: 7 }
  },
  { 
    name: "上巳", 
    nameEn: "Jōshi", 
    holidayName: "雛祭り",
    holidayNameEn: "Doll Festival",
    emoji: "🎎",
    date: { month: 2, day: 3 }
  },
  { 
    name: "端午", 
    nameEn: "Tango", 
    holidayName: "こどもの日",
    holidayNameEn: "Children's Day",
    emoji: "🎏",
    date: { month: 4, day: 5 }
  },
  { 
    name: "七夕", 
    nameEn: "Tanabata", 
    holidayName: "七夕",
    holidayNameEn: "Star Festival",
    emoji: "🎋",
    date: { month: 6, day: 7 }
  },
  { 
    name: "重陽", 
    nameEn: "Chōyō", 
    holidayName: "菊の節句",
    holidayNameEn: "Chrysanthemum",
    emoji: "🌼",
    date: { month: 8, day: 9 }
  }
];

const zassetsu = [
  { name: "節分", nameEn: "Setsubun", emoji: "👹", month: 1, day: 3 },
  { name: "八十八夜", nameEn: "Hachijūhachiya", emoji: "🌱", month: 4, day: 2 },
  { name: "入梅", nameEn: "Nyūbai", emoji: "☔", month: 5, day: 11 },
  { name: "半夏生", nameEn: "Hangeshō", emoji: "🌿", month: 6, day: 2 },
  { name: "土用丑", nameEn: "Doyō no Ushi", emoji: "🐟", month: 6, day: 20 },
  { name: "二百十日", nameEn: "Nihyaku-tōka", emoji: "🌪️", month: 8, day: 1 }
];

const solarTermNames = [
  "立春", "雨水", "啓蟄", "春分", "清明", "穀雨",
  "立夏", "小満", "芒種", "夏至", "小暑", "大暑",
  "立秋", "処暑", "白露", "秋分", "寒露", "霜降",
  "立冬", "小雪", "大雪", "冬至", "小寒", "大寒"
];

const solarTermNamesEn = [
  "Risshun", "Usui", "Keichitsu", "Shunbun", "Seimei", "Kokuu",
  "Rikka", "Shōman", "Bōshu", "Geshi", "Shōsho", "Taisho",
  "Risshū", "Shosho", "Hakuro", "Shūbun", "Kanro", "Sōkō",
  "Rittō", "Shōsetsu", "Taisetsu", "Tōji", "Shōkan", "Daikan"
];

const solarTermBase = {
  1900: [6,21,35,50,65,80,95,110,126,141,157,172,188,203,219,234,250,265,281,296,312,327,343,358],
  1950: [6,20,35,50,65,80,95,110,126,141,157,172,188,203,219,234,250,265,281,296,312,327,343,358],
  2000: [6,20,35,50,65,80,95,110,126,141,157,172,188,203,219,234,250,265,281,296,312,327,343,358],
  2050: [5,20,35,50,65,80,95,110,126,141,157,172,188,203,219,234,250,265,281,296,312,327,343,358],
  2100: [5,20,34,49,64,79,94,109,125,140,156,171,187,202,218,233,249,264,280,295,311,326,342,357]
};

const solarTerms = {};

function generateSolarTerms() {
  const baseYears = [1900, 1950, 2000, 2050, 2100];
  
  for (let year = 1873; year <= 2100; year++) {
    let lower = 1900, upper = 2100;
    for (let i = 0; i < baseYears.length - 1; i++) {
      if (year >= baseYears[i] && year <= baseYears[i + 1]) {
        lower = baseYears[i];
        upper = baseYears[i + 1];
        break;
      }
    }
    
    const lowerOffsets = solarTermBase[lower];
    const upperOffsets = solarTermBase[upper];
    const ratio = (year - lower) / (upper - lower);
    
    solarTerms[year] = lowerOffsets.map((low, i) => {
      const high = upperOffsets[i];
      const offset = Math.round(low + (high - low) * ratio);
      return {
        name: solarTermNames[i],
        nameEn: solarTermNamesEn[i],
        offset: offset
      };
    });
  }
}
generateSolarTerms();

const translations = {
  headerSubhead: { ja: "· 和暦", en: "· Wareki" },
  todayText: { ja: "今日", en: "Today" },
  monthNameLabel: { ja: "和暦月", en: "Month" },
  monthDaysLabel: { ja: "日数", en: "Days" },
  festivalLabel: { ja: "五節句", en: "Festivals" },
  zassetsuLabel: { ja: "雑節", en: "Zassetsu" },
  gregorianTitle: { ja: "グレゴリオ暦", en: "Gregorian" },
  japaneseTitle: { ja: "和暦", en: "Japanese" },
  dateLabel: { ja: "日付", en: "Date" },
  weekdayLabel: { ja: "曜日", en: "Weekday" },
  eraLabel: { ja: "元号", en: "Era" },
  japaneseMonthLabel: { ja: "月", en: "Month" },
  japaneseDayLabel: { ja: "日", en: "Day" },
  rokuyoTitle: { ja: "六曜", en: "Rokuyō" },
  rokuyoLabel: { ja: "本日", en: "Today" },
  rokuyoMeaningLabel: { ja: "意味", en: "Meaning" },
  rokuyoFortuneLabel: { ja: "運勢", en: "Fortune" },
  festivalTitle: { ja: "節句", en: "Festivals" },
  festivalTodayLabel: { ja: "本日", en: "Today" },
  festivalNextLabel: { ja: "次", en: "Next" },
  festivalHolidayLabel: { ja: "別名", en: "Also" },
  festivalCountdownLabel: { ja: "まで", en: "Until" },
  solarTermTitle: { ja: "二十四節気", en: "Solar Terms" },
  zassetsuTitle: { ja: "雑節", en: "Zassetsu" },
  detailLevelLabel: { ja: "表示レベル:", en: "Level:" },
  detailBasic: { ja: "基本", en: "Basic" },
  detailStandard: { ja: "標準", en: "Standard" },
  detailComplete: { ja: "詳細", en: "Complete" },
  languageLabel: { ja: "言語:", en: "Language:" },
  langJapanese: { ja: "日本語", en: "Japanese" },
  langEnglish: { ja: "English", en: "English" },
  langBilingual: { ja: "日本語/English", en: "Japanese/English" },
  settingRokuyoLabel: { ja: "六曜", en: "Rokuyo" },
  settingFestivalLabel: { ja: "五節句", en: "Festivals" },
  settingZassetsuLabel: { ja: "雑節", en: "Zassetsu" },
  settingSolarLabel: { ja: "二十四節気", en: "Solar Terms" },
  compactLabel: { ja: "コンパクト", en: "Compact" },
  ultraLabel: { ja: "超コンパクト", en: "Ultra" },
  dataSourceNote: { ja: "国立天文台", en: "NAOJ" },
  shareText: { ja: "共有", en: "Share" },
  copiedText: { ja: "コピーしました", en: "Copied" },
  preMeijiWarning: { ja: "1873年以前は参考値", en: "Pre-1873 approximate" },
  rokuyoSensho: { ja: "先勝", en: "Senshō" },
  rokuyoTomobiki: { ja: "友引", en: "Tomobiki" },
  rokuyoSenbu: { ja: "先負", en: "Senbu" },
  rokuyoButsumetsu: { ja: "仏滅", en: "Butsumetsu" },
  rokuyoTaian: { ja: "大安", en: "Taian" },
  rokuyoShakko: { ja: "赤口", en: "Shakkō" },
  festivalJinjitsu: { ja: "人日", en: "Jinjitsu" },
  festivalJoshi: { ja: "上巳", en: "Jōshi" },
  festivalTango: { ja: "端午", en: "Tango" },
  festivalTanabata: { ja: "七夕", en: "Tanabata" },
  festivalChoyo: { ja: "重陽", en: "Chōyō" },
  festivalJinjitsuHoliday: { ja: "七草粥", en: "Seven Herbs" },
  festivalJoshiHoliday: { ja: "雛祭り", en: "Doll Festival" },
  festivalTangoHoliday: { ja: "こどもの日", en: "Children's Day" },
  festivalTanabataHoliday: { ja: "七夕", en: "Star Festival" },
  festivalChoyoHoliday: { ja: "菊の節句", en: "Chrysanthemum" },
  disclaimerText: { ja: "1873–present · 六曜基準:1927", en: "1873–present · Rokuyo ref:1927" }
};

document.addEventListener('DOMContentLoaded', function() {
  const headerSubhead = document.getElementById("headerSubhead");
  const eraBadge = document.getElementById("eraBadge");
  const headerGregorian = document.getElementById("headerGregorian");
  const headerJapanese = document.getElementById("headerJapanese");
  const todayText = document.getElementById("todayText");
  const toggleToday = document.getElementById("toggleToday");
  const eraYear = document.getElementById("eraYear");
  const japaneseMonth = document.getElementById("japaneseMonth");
  const rokuyoToday = document.getElementById("rokuyoToday");
  const solarTermEl = document.getElementById("solarTerm");
  const rangeWarning = document.getElementById("rangeWarning");
  const japaneseMonthName = document.getElementById("japaneseMonthName");
  const monthDays = document.getElementById("monthDays");
  const monthFestival = document.getElementById("monthFestival");
  const monthZassetsu = document.getElementById("monthZassetsu");
  const daysContainer = document.getElementById("daysContainer");
  const festivalNotice = document.getElementById("festivalNotice");
  const errorBoundary = document.getElementById("errorBoundary");
  const errorMessage = document.getElementById("errorMessage");
  const errorRetry = document.getElementById("errorRetry");
  const infoGregorian = document.getElementById("infoGregorian");
  const infoWeekday = document.getElementById("infoWeekday");
  const infoEra = document.getElementById("infoEra");
  const infoJapaneseMonth = document.getElementById("infoJapaneseMonth");
  const infoJapaneseDay = document.getElementById("infoJapaneseDay");
  const infoRokuyo = document.getElementById("infoRokuyo");
  const infoRokuyoMeaning = document.getElementById("infoRokuyoMeaning");
  const infoRokuyoFortune = document.getElementById("infoRokuyoFortune");
  const rokuyoDisplay = document.getElementById("rokuyoDisplay");
  const infoFestival = document.getElementById("infoFestival");
  const infoNextFestival = document.getElementById("infoNextFestival");
  const infoFestivalHoliday = document.getElementById("infoFestivalHoliday");
  const infoFestivalCountdown = document.getElementById("infoFestivalCountdown");
  const currentTerm = document.getElementById("currentTerm");
  const nextTerm = document.getElementById("nextTerm");
  const termProgress = document.getElementById("termProgress");
  const zassetsuSection = document.getElementById("zassetsuSection");
  const zassetsuGrid = document.getElementById("zassetsuGrid");
  const rangeWarningSection = document.getElementById("rangeWarningSection");
  const rangeWarningMessage = document.getElementById("rangeWarningMessage");
  const dataSourceNote = document.getElementById("dataSourceNote");
  const shareDate = document.getElementById("shareDate");
  const shareText = document.getElementById("shareText");
  const prevYear = document.getElementById("prevYear");
  const prevMonth = document.getElementById("prevMonth");
  const nextMonth = document.getElementById("nextMonth");
  const nextYear = document.getElementById("nextYear");
  const settingsToggle = document.getElementById("settingsToggle");
  const settingsMenu = document.getElementById("settingsMenu");
  const toast = document.getElementById("toast");
  const detailLevel = document.getElementById("detailLevel");
  const languagePreference = document.getElementById("languagePreference");
  const showRokuyo = document.getElementById("showRokuyo");
  const showFestivals = document.getElementById("showFestivals");
  const showZassetsu = document.getElementById("showZassetsu");
  const showSolarTerms = document.getElementById("showSolarTerms");
  const compactMode = document.getElementById("compactMode");
  const ultraCompact = document.getElementById("ultraCompact");
  const resetSettings = document.getElementById("resetSettings");

  const legendElements = {
    rokuyoSensho: document.getElementById("rokuyoSensho"),
    rokuyoTomobiki: document.getElementById("rokuyoTomobiki"),
    rokuyoSenbu: document.getElementById("rokuyoSenbu"),
    rokuyoButsumetsu: document.getElementById("rokuyoButsumetsu"),
    rokuyoTaian: document.getElementById("rokuyoTaian"),
    rokuyoShakko: document.getElementById("rokuyoShakko"),
    festivalJinjitsu: document.getElementById("festivalJinjitsu"),
    festivalJoshi: document.getElementById("festivalJoshi"),
    festivalTango: document.getElementById("festivalTango"),
    festivalTanabata: document.getElementById("festivalTanabata"),
    festivalChoyo: document.getElementById("festivalChoyo"),
    festivalJinjitsuHoliday: document.getElementById("festivalJinjitsuHoliday"),
    festivalJoshiHoliday: document.getElementById("festivalJoshiHoliday"),
    festivalTangoHoliday: document.getElementById("festivalTangoHoliday"),
    festivalTanabataHoliday: document.getElementById("festivalTanabataHoliday"),
    festivalChoyoHoliday: document.getElementById("festivalChoyoHoliday"),
    disclaimerText: document.getElementById("disclaimerText")
  };

  const labelElements = {
    headerSubhead, todayText, eraYear, japaneseMonth, rokuyoToday, solarTerm,
    monthNameLabel: document.getElementById("monthNameLabel"),
    monthDaysLabel: document.getElementById("monthDaysLabel"),
    festivalLabel: document.getElementById("festivalLabel"),
    zassetsuLabel: document.getElementById("zassetsuLabel"),
    gregorianTitle: document.getElementById("gregorianTitle"),
    japaneseTitle: document.getElementById("japaneseTitle"),
    dateLabel: document.getElementById("dateLabel"),
    weekdayLabel: document.getElementById("weekdayLabel"),
    eraLabel: document.getElementById("eraLabel"),
    japaneseMonthLabel: document.getElementById("japaneseMonthLabel"),
    japaneseDayLabel: document.getElementById("japaneseDayLabel"),
    rokuyoTitle: document.getElementById("rokuyoTitle"),
    rokuyoLabel: document.getElementById("rokuyoLabel"),
    rokuyoMeaningLabel: document.getElementById("rokuyoMeaningLabel"),
    rokuyoFortuneLabel: document.getElementById("rokuyoFortuneLabel"),
    festivalTitle: document.getElementById("festivalTitle"),
    festivalTodayLabel: document.getElementById("festivalTodayLabel"),
    festivalNextLabel: document.getElementById("festivalNextLabel"),
    festivalHolidayLabel: document.getElementById("festivalHolidayLabel"),
    festivalCountdownLabel: document.getElementById("festivalCountdownLabel"),
    solarTermTitle: document.getElementById("solarTermTitle"),
    zassetsuTitle: document.getElementById("zassetsuTitle"),
    detailLevelLabel: document.getElementById("detailLevelLabel"),
    detailBasic: document.getElementById("detailBasic"),
    detailStandard: document.getElementById("detailStandard"),
    detailComplete: document.getElementById("detailComplete"),
    languageLabel: document.getElementById("languageLabel"),
    langJapanese: document.getElementById("langJapanese"),
    langEnglish: document.getElementById("langEnglish"),
    langBilingual: document.getElementById("langBilingual"),
    settingRokuyoLabel: document.getElementById("settingRokuyoLabel"),
    settingFestivalLabel: document.getElementById("settingFestivalLabel"),
    settingZassetsuLabel: document.getElementById("settingZassetsuLabel"),
    settingSolarLabel: document.getElementById("settingSolarLabel"),
    compactLabel: document.getElementById("compactLabel"),
    ultraLabel: document.getElementById("ultraLabel"),
    dataSourceNote,
    shareText,
    ...legendElements
  };

  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let selectedDate = new Date(currentDate);
  
  let settings = {
    detailLevel: 'standard',
    language: 'bilingual',
    showRokuyo: true,
    showFestivals: true,
    showZassetsu: false,
    showSolarTerms: true,
    compactMode: true,
    ultraCompact: false
  };

  function loadSettings() {
    try {
      const saved = localStorage.getItem('chronoforgeWareki');
      if (saved) {
        const parsed = JSON.parse(saved);
        settings = { ...settings, ...parsed };
        
        if (detailLevel) detailLevel.value = settings.detailLevel;
        if (languagePreference) languagePreference.value = settings.language;
        if (showRokuyo) showRokuyo.checked = settings.showRokuyo;
        if (showFestivals) showFestivals.checked = settings.showFestivals;
        if (showZassetsu) showZassetsu.checked = settings.showZassetsu;
        if (showSolarTerms) showSolarTerms.checked = settings.showSolarTerms;
        if (compactMode) compactMode.checked = settings.compactMode;
        if (ultraCompact) ultraCompact.checked = settings.ultraCompact;
      }
    } catch (e) {
      console.warn('Settings load failed', e);
    }
  }

  function saveSettings() {
    try {
      localStorage.setItem('chronoforgeWareki', JSON.stringify(settings));
    } catch (e) {
      console.warn('Settings save failed', e);
    }
  }

  function t(ja, en) {
    if (settings.language === 'japanese') return ja;
    if (settings.language === 'english') return en;
    return `${ja} · ${en}`;
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3000);
  }

  function updateCompactModes() {
    document.body.classList.toggle('compact-mode', settings.compactMode);
    document.body.classList.toggle('ultra-compact', settings.ultraCompact);
  }

  function updateLanguageBodyClass() {
    document.body.classList.remove('lang-japanese', 'lang-english', 'lang-bilingual');
    document.body.classList.add(`lang-${settings.language}`);
  }

  function updateAllLabels() {
    Object.keys(labelElements).forEach(key => {
      const el = labelElements[key];
      const trans = translations[key];
      if (el && trans) {
        el.textContent = t(trans.ja, trans.en);
      }
    });
  }

  function getJapaneseEra(date) {
    const target = new Date(date);
    target.setHours(0, 0, 0, 0);
    
    for (let era of japaneseEras) {
      if (target >= era.start && (!era.end || target <= era.end)) {
        const year = target.getFullYear() - era.start.getFullYear() + 1;
        return {
          era: era.name,
          eraEn: era.nameEn,
          year: year,
          yearDisplay: year === 1 ? "元" : year.toString(),
          full: `${era.name}${year === 1 ? "元" : year}年`,
          fullEn: `${era.nameEn} ${year}`
        };
      }
    }
    
    return { era: "—", eraEn: "—", year: 0, full: "—", fullEn: "—" };
  }

  function getRokuyo(date) {
    const ref = new Date(1927, 0, 1);
    ref.setHours(0, 0, 0, 0);
    
    const target = new Date(date);
    target.setHours(0, 0, 0, 0);
    
    const daysSince = Math.floor((target - ref) / (1000 * 60 * 60 * 24));
    const index = ((daysSince % 6) + 6) % 6;
    
    return rokuyo[index];
  }

  function getFestival(date) {
    const month = date.getMonth();
    const day = date.getDate();
    
    for (let festival of fiveFestivals) {
      if (festival.date.month === month && festival.date.day === day) {
        return festival;
      }
    }
    return null;
  }

  function getNextFestival(fromDate) {
    const currentMonth = fromDate.getMonth();
    const currentDay = fromDate.getDate();
    const currentYear = fromDate.getFullYear();
    
    for (let festival of fiveFestivals) {
      if (festival.date.month > currentMonth || 
          (festival.date.month === currentMonth && festival.date.day > currentDay)) {
        const festDate = new Date(currentYear, festival.date.month, festival.date.day);
        return { ...festival, dateObj: festDate };
      }
    }
    
    const nextYearFest = fiveFestivals[0];
    const festDate = new Date(currentYear + 1, nextYearFest.date.month, nextYearFest.date.day);
    return { ...nextYearFest, dateObj: festDate, nextYear: true };
  }

  function getZassetsuForDate(date) {
    const month = date.getMonth();
    const day = date.getDate();
    return zassetsu.filter(z => z.month === month && z.day === day);
  }

  function getSolarTerm(date) {
    const year = date.getFullYear();
    const dayOfYear = Math.floor((date - new Date(year, 0, 1)) / (1000 * 60 * 60 * 24)) + 1;
    
    const terms = solarTerms[year];
    if (!terms) {
      return { current: "—", currentEn: "—", next: "—", nextEn: "—", progress: 0 };
    }
    
    let current = null;
    let next = null;
    
    for (let i = 0; i < terms.length; i++) {
      if (terms[i].offset >= dayOfYear) {
        next = terms[i];
        current = i > 0 ? terms[i - 1] : terms[terms.length - 1];
        break;
      }
    }
    
    if (!current) {
      current = terms[terms.length - 1];
      if (current.name === "大寒" || current.name === "小寒") {
        const nextYearTerms = solarTerms[year + 1];
        next = nextYearTerms ? nextYearTerms[0] : terms[0];
      } else {
        next = solarTerms[year + 1]?.[0] || terms[0];
      }
    }
    
    const progress = next && current ? 
      ((dayOfYear - current.offset) / (next.offset - current.offset)) * 100 : 0;
    
    return {
      current: current?.name || "—",
      currentEn: current?.nameEn || "—",
      next: next?.name || "—",
      nextEn: next?.nameEn || "—",
      progress: Math.min(100, Math.max(0, progress))
    };
  }

  function updateHeader() {
    if (!headerGregorian || !headerJapanese) return;
    
    const era = getJapaneseEra(currentDate);
    const monthIndex = currentDate.getMonth();
    const rokuyoData = getRokuyo(currentDate);
    const term = getSolarTerm(currentDate);
    
    headerGregorian.textContent = currentDate.toLocaleDateString('en-US', { 
      year: 'numeric', month: 'long' 
    });
    
    if (era.era !== "—") {
      const monthName = japaneseMonths[monthIndex];
      headerJapanese.textContent = t(
        `${era.full} · ${monthName.name}`,
        `${era.fullEn} · ${monthName.nameEn}`
      );
    } else {
      headerJapanese.textContent = t("—", "—");
    }
    
    if (eraBadge) eraBadge.textContent = t(era.full, era.fullEn);
    if (eraYear) eraYear.textContent = t(era.full, era.fullEn);
    
    if (japaneseMonth) {
      const monthName = japaneseMonths[monthIndex];
      japaneseMonth.textContent = t(monthName.name, monthName.nameEn);
    }
    
    if (rokuyoToday) {
      rokuyoToday.textContent = t(rokuyoData.name, rokuyoData.nameEn);
      rokuyoToday.className = `era-item ${rokuyoData.color}`;
      rokuyoToday.title = t(rokuyoData.meaning, rokuyoData.meaningEn);
    }
    
    if (solarTermEl) solarTermEl.textContent = t(term.current, term.currentEn);
    
    if (toggleToday) {
      const isToday = currentDate.toDateString() === new Date().toDateString();
      toggleToday.setAttribute('data-today', isToday ? 'true' : 'false');
    }
    
    if (currentDate < new Date(1873, 0, 1)) {
      rangeWarning.textContent = t("⚠️ 1873年以前", "⚠️ Pre-1873");
      rangeWarning.title = t(translations.preMeijiWarning.ja, translations.preMeijiWarning.en);
      rangeWarning.style.display = 'flex';
    } else {
      rangeWarning.style.display = 'none';
    }
  }

  function renderCalendar() {
    if (!daysContainer) return;
    
    try {
      daysContainer.innerHTML = '';
      
      const firstDay = new Date(currentYear, currentMonth, 1);
      const lastDay = new Date(currentYear, currentMonth + 1, 0);
      const daysInMonth = lastDay.getDate();
      const startOffset = firstDay.getDay();
      
      for (let i = 0; i < startOffset; i++) {
        const empty = document.createElement('div');
        empty.className = 'day-cell empty';
        daysContainer.appendChild(empty);
      }
      
      for (let d = 1; d <= daysInMonth; d++) {
        const cellDate = new Date(currentYear, currentMonth, d);
        const rokuyoData = getRokuyo(cellDate);
        const festival = getFestival(cellDate);
        const isToday = cellDate.toDateString() === new Date().toDateString();
        
        const cell = document.createElement('div');
        cell.className = 'day-cell';
        
        if (isToday) cell.classList.add('today');
        if (settings.showRokuyo) cell.classList.add(rokuyoData.color);
        
        cell.dataset.date = cellDate.toISOString();
        cell.dataset.year = currentYear;
        cell.dataset.month = currentMonth;
        cell.dataset.day = d;
        
        let rokuyoHtml = '';
        if (settings.showRokuyo) {
          const rokuyoText = t(rokuyoData.name, rokuyoData.nameEn);
          const isMobile = window.innerWidth <= 480;
          const displayText = isMobile ? rokuyoData.abbr : rokuyoText;
          const tooltip = t(rokuyoData.meaning, rokuyoData.meaningEn);
          rokuyoHtml = `<div class="rokuyo-display ${rokuyoData.color}" title="${tooltip}">${displayText}</div>`;
        }
        
        let festivalHtml = '';
        if (settings.showFestivals && festival) {
          const tooltip = t(festival.name, festival.nameEn);
          festivalHtml = `<span class="festival-emoji" title="${tooltip}">${festival.emoji}</span>`;
        }
        
        cell.innerHTML = `
          <div class="gregorian-date">${d}</div>
          ${rokuyoHtml}
          ${festivalHtml}
        `;
        
        cell.addEventListener('click', () => selectDate(cellDate));
        daysContainer.appendChild(cell);
      }
      
      if (japaneseMonthName) {
        const monthName = japaneseMonths[currentMonth];
        japaneseMonthName.textContent = t(monthName.name, monthName.nameEn);
      }
      
      if (monthDays) {
        monthDays.textContent = t(`${daysInMonth}日`, `${daysInMonth} days`);
      }
      
      const festivalsThisMonth = fiveFestivals.filter(f => f.date.month === currentMonth);
      if (monthFestival) {
        if (festivalsThisMonth.length > 0) {
          monthFestival.textContent = festivalsThisMonth.map(f => 
            `${f.emoji} ${t(f.name, f.nameEn)}`
          ).join(' · ');
        } else {
          monthFestival.textContent = t("—", "—");
        }
      }
      
      if (settings.showZassetsu && monthZassetsu) {
        const zassetsuThisMonth = zassetsu.filter(z => z.month === currentMonth);
        if (zassetsuThisMonth.length > 0) {
          monthZassetsu.textContent = zassetsuThisMonth.map(z => 
            `${z.emoji || ''} ${t(z.name, z.nameEn)}`
          ).join(' · ');
        } else {
          monthZassetsu.textContent = t("—", "—");
        }
      }
      
      if (errorBoundary) errorBoundary.classList.add('hidden');
      
    } catch (error) {
      console.error('Render error:', error);
      if (errorBoundary) {
        errorBoundary.classList.remove('hidden');
        if (errorMessage) errorMessage.textContent = t('表示エラー', 'Render error');
        if (errorRetry) {
          errorRetry.addEventListener('click', () => {
            renderCalendar();
          }, { once: true });
        }
      }
    }
  }

  function selectDate(date) {
    if (date < new Date(1873, 0, 1)) {
      showToast(t("1873年以前は表示できません", "Pre-1873 not available"));
      return;
    }
    
    selectedDate = new Date(date);
    
    document.querySelectorAll('.day-cell').forEach(cell => {
      cell.classList.remove('active-day');
    });
    
    const selectedCell = Array.from(document.querySelectorAll('.day-cell')).find(cell => 
      cell.dataset.date === date.toISOString()
    );
    if (selectedCell) selectedCell.classList.add('active-day');
    
    updateInfoPanel(date);
    
    const festival = getFestival(date);
    if (festival && festivalNotice) {
      festivalNotice.textContent = t(`✨ 本日は${festival.name}です`, `✨ Today is ${festival.nameEn}`);
      festivalNotice.classList.remove('hidden');
      setTimeout(() => festivalNotice.classList.add('hidden'), 5000);
    }
  }

  function updateInfoPanel(date) {
    if (!infoGregorian) return;
    
    const era = getJapaneseEra(date);
    const monthIndex = date.getMonth();
    const day = date.getDate();
    const rokuyoData = getRokuyo(date);
    const festival = getFestival(date);
    const nextFestival = getNextFestival(date);
    const term = getSolarTerm(date);
    const zassetsuList = getZassetsuForDate(date);
    
    const isBasic = settings.detailLevel === 'basic';
    const isComplete = settings.detailLevel === 'complete';
    
    infoGregorian.textContent = date.toLocaleDateString(
      settings.language === 'japanese' ? 'ja-JP' : 'en-US', 
      { year: 'numeric', month: 'long', day: 'numeric' }
    );
    
    if (infoWeekday) {
      const weekday = date.getDay();
      const jp = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];
      const en = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      infoWeekday.textContent = t(jp[weekday], en[weekday]);
    }
    
    if (infoEra) infoEra.textContent = t(era.full, era.fullEn);
    
    if (infoJapaneseMonth) {
      const monthName = japaneseMonths[monthIndex];
      infoJapaneseMonth.textContent = t(monthName.name, monthName.nameEn);
    }
    
    if (infoJapaneseDay) infoJapaneseDay.textContent = t(`${day}日`, `Day ${day}`);
    
    if (infoRokuyo) infoRokuyo.textContent = t(rokuyoData.name, rokuyoData.nameEn);
    
    if (rokuyoDisplay) {
      rokuyoDisplay.classList.remove('sensho', 'tomobiki', 'senbu', 'butsumetsu', 'taian', 'shakko');
      rokuyoDisplay.classList.add(rokuyoData.color);
    }
    
    if (infoRokuyoMeaning) {
      infoRokuyoMeaning.textContent = t(rokuyoData.meaning, rokuyoData.meaningEn);
      infoRokuyoMeaning.parentElement.style.display = isBasic ? 'none' : 'flex';
    }
    
    if (infoRokuyoFortune) {
      infoRokuyoFortune.textContent = t(rokuyoData.fortune, rokuyoData.fortuneEn);
      infoRokuyoFortune.parentElement.style.display = isBasic ? 'none' : 'flex';
    }
    
    if (infoFestival) {
      infoFestival.textContent = festival ? t(festival.name, festival.nameEn) : t("—", "—");
    }
    
    if (infoNextFestival && nextFestival.dateObj) {
      const month = nextFestival.dateObj.getMonth() + 1;
      const day = nextFestival.dateObj.getDate();
      infoNextFestival.textContent = t(
        `${nextFestival.emoji} ${nextFestival.name} (${month}/${day})`,
        `${nextFestival.emoji} ${nextFestival.nameEn} (${month}/${day})`
      );
    }
    
    if (infoFestivalHoliday && festival) {
      infoFestivalHoliday.textContent = t(festival.holidayName, festival.holidayNameEn);
      infoFestivalHoliday.parentElement.style.display = isComplete ? 'flex' : 'none';
    } else if (infoFestivalHoliday) {
      infoFestivalHoliday.parentElement.style.display = 'none';
    }
    
    if (infoFestivalCountdown && nextFestival.dateObj) {
      const daysUntil = Math.ceil((nextFestival.dateObj - date) / (1000*60*60*24));
      infoFestivalCountdown.textContent = t(
        daysUntil === 0 ? "今日" : `あと${daysUntil}日`,
        daysUntil === 0 ? "Today" : `${daysUntil} days`
      );
      infoFestivalCountdown.parentElement.style.display = isComplete ? 'flex' : 'none';
    } else if (infoFestivalCountdown) {
      infoFestivalCountdown.parentElement.style.display = 'none';
    }
    
    const solarTermSection = document.getElementById('solarTermSection');
    if (solarTermSection) {
      if (settings.showSolarTerms) {
        solarTermSection.classList.remove('hidden');
        if (currentTerm) currentTerm.textContent = t(term.current, term.currentEn);
        if (nextTerm) nextTerm.textContent = t(term.next, term.nextEn);
        if (termProgress) {
          termProgress.style.width = `${term.progress}%`;
          termProgress.setAttribute('aria-valuenow', Math.round(term.progress));
        }
      } else {
        solarTermSection.classList.add('hidden');
      }
    }
    
    if (zassetsuSection && zassetsuGrid) {
      if (settings.showZassetsu && zassetsuList.length > 0) {
        zassetsuSection.classList.remove('hidden');
        zassetsuGrid.innerHTML = '';
        
        zassetsuList.forEach(z => {
          const item = document.createElement('div');
          item.className = 'zassetsu-item';
          item.title = t(z.name, z.nameEn);
          item.innerHTML = `
            <span class="zassetsu-emoji">${z.emoji || ''}</span>
            <span class="zassetsu-name">${t(z.name, z.nameEn)}</span>
          `;
          zassetsuGrid.appendChild(item);
        });
      } else {
        zassetsuSection.classList.add('hidden');
      }
    }
    
    if (rangeWarningSection && rangeWarningMessage) {
      if (date < new Date(1873, 0, 1)) {
        rangeWarningSection.classList.remove('hidden');
        rangeWarningMessage.textContent = t(
          translations.preMeijiWarning.ja,
          translations.preMeijiWarning.en
        );
      } else {
        rangeWarningSection.classList.add('hidden');
      }
    }
  }

  function shareCurrentDate() {
    if (!selectedDate) return;
    
    const era = getJapaneseEra(selectedDate);
    const rokuyoData = getRokuyo(selectedDate);
    const festival = getFestival(selectedDate);
    
    let text = t(
      `${era.full} ${selectedDate.getMonth()+1}月${selectedDate.getDate()}日 (${rokuyoData.name})`,
      `${era.fullEn} ${selectedDate.getMonth()+1}/${selectedDate.getDate()} (${rokuyoData.nameEn})`
    );
    
    if (festival) text += t(` · ${festival.emoji} ${festival.name}`, ` · ${festival.emoji} ${festival.nameEn}`);
    
    if (navigator.share) {
      navigator.share({ title: 'ChronoForge · 和暦', text }).catch(() => copyToClipboard(text));
    } else {
      copyToClipboard(text);
    }
  }
  
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(t(translations.copiedText.ja, translations.copiedText.en));
    }).catch(() => showToast(t('コピー失敗', 'Copy failed')));
  }

  function prevMonthFn() {
    let newMonth = currentMonth - 1;
    let newYear = currentYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    }
    const newDate = new Date(newYear, newMonth, 1);
    if (newDate < new Date(1873, 0, 1)) {
      showToast(t("1873年以前には移動できません", "Cannot go before 1873"));
      return;
    }
    currentMonth = newMonth;
    currentYear = newYear;
    currentDate = newDate;
    updateHeader();
    renderCalendar();
    selectDate(currentDate);
    showToast(t(`${currentYear}年${currentMonth+1}月`, `${currentYear}/${currentMonth+1}`));
  }

  function nextMonthFn() {
    let newMonth = currentMonth + 1;
    let newYear = currentYear;
    if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }
    currentMonth = newMonth;
    currentYear = newYear;
    currentDate = new Date(currentYear, currentMonth, 1);
    updateHeader();
    renderCalendar();
    selectDate(currentDate);
    showToast(t(`${currentYear}年${currentMonth+1}月`, `${currentYear}/${currentMonth+1}`));
  }

  function prevYearFn() {
    const newYear = currentYear - 1;
    const newDate = new Date(newYear, currentMonth, 1);
    if (newDate < new Date(1873, 0, 1)) {
      showToast(t("1873年以前には移動できません", "Cannot go before 1873"));
      return;
    }
    currentYear = newYear;
    currentDate = newDate;
    updateHeader();
    renderCalendar();
    selectDate(currentDate);
    showToast(t(`${currentYear}年`, `${currentYear}`));
  }

  function nextYearFn() {
    currentYear++;
    currentDate = new Date(currentYear, currentMonth, 1);
    updateHeader();
    renderCalendar();
    selectDate(currentDate);
    showToast(t(`${currentYear}年`, `${currentYear}`));
  }

  function goToToday() {
    currentDate = new Date();
    currentYear = currentDate.getFullYear();
    currentMonth = currentDate.getMonth();
    updateHeader();
    renderCalendar();
    selectDate(currentDate);
    showToast(t("今日", "Today"));
  }

  function updateSettings() {
    if (detailLevel) settings.detailLevel = detailLevel.value;
    if (languagePreference) settings.language = languagePreference.value;
    if (showRokuyo) settings.showRokuyo = showRokuyo.checked;
    if (showFestivals) settings.showFestivals = showFestivals.checked;
    if (showZassetsu) settings.showZassetsu = showZassetsu.checked;
    if (showSolarTerms) settings.showSolarTerms = showSolarTerms.checked;
    if (compactMode) settings.compactMode = compactMode.checked;
    if (ultraCompact) settings.ultraCompact = ultraCompact.checked;
    
    updateCompactModes();
    updateLanguageBodyClass();
    updateAllLabels();
    
    renderCalendar();
    if (selectedDate) updateInfoPanel(selectedDate);
    updateHeader();
    
    saveSettings();
    showToast(t("設定を更新", "Settings updated"));
  }

  function resetAllSettings() {
    settings = {
      detailLevel: 'standard',
      language: 'bilingual',
      showRokuyo: true,
      showFestivals: true,
      showZassetsu: false,
      showSolarTerms: true,
      compactMode: true,
      ultraCompact: false
    };
    
    if (detailLevel) detailLevel.value = 'standard';
    if (languagePreference) languagePreference.value = 'bilingual';
    if (showRokuyo) showRokuyo.checked = true;
    if (showFestivals) showFestivals.checked = true;
    if (showZassetsu) showZassetsu.checked = false;
    if (showSolarTerms) showSolarTerms.checked = true;
    if (compactMode) compactMode.checked = true;
    if (ultraCompact) ultraCompact.checked = false;
    
    updateSettings();
  }

  function init() {
    try {
      loadSettings();
      
      currentDate = new Date();
      currentYear = currentDate.getFullYear();
      currentMonth = currentDate.getMonth();
      
      updateLanguageBodyClass();
      updateAllLabels();
      updateCompactModes();
      updateHeader();
      renderCalendar();
      selectDate(currentDate);
      
      if (settingsToggle && settingsMenu) {
        settingsToggle.addEventListener('click', (e) => {
          e.stopPropagation();
          settingsMenu.classList.toggle('hidden');
        });
        
        document.addEventListener('click', (e) => {
          if (!settingsToggle.contains(e.target) && !settingsMenu.contains(e.target)) {
            settingsMenu.classList.add('hidden');
          }
        });
      }
      
      const settingElements = [
        { el: detailLevel, handler: updateSettings },
        { el: languagePreference, handler: updateSettings },
        { el: showRokuyo, handler: updateSettings },
        { el: showFestivals, handler: updateSettings },
        { el: showZassetsu, handler: updateSettings },
        { el: showSolarTerms, handler: updateSettings },
        { el: compactMode, handler: updateSettings },
        { el: ultraCompact, handler: updateSettings }
      ];
      
      settingElements.forEach(({ el, handler }) => {
        if (el) el.addEventListener('change', handler);
      });
      
      if (resetSettings) resetSettings.addEventListener('click', resetAllSettings);
      if (shareDate) shareDate.addEventListener('click', shareCurrentDate);
      
      const navElements = [
        { el: prevYear, handler: prevYearFn },
        { el: prevMonth, handler: prevMonthFn },
        { el: nextMonth, handler: nextMonthFn },
        { el: nextYear, handler: nextYearFn },
        { el: toggleToday, handler: goToToday }
      ];
      
      navElements.forEach(({ el, handler }) => {
        if (el) el.addEventListener('click', handler);
      });
      
      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevMonthFn();
        else if (e.key === 'ArrowRight') nextMonthFn();
        else if (e.key === 'ArrowUp') prevYearFn();
        else if (e.key === 'ArrowDown') nextYearFn();
      });
      
      window.addEventListener('resize', () => renderCalendar());
      
      showToast(t("ChronoForge · 和暦", "ChronoForge · Wareki"));
      
    } catch (error) {
      console.error('Init error:', error);
      if (errorBoundary) {
        errorBoundary.classList.remove('hidden');
        if (errorMessage) errorMessage.textContent = t('初期化失敗', 'Init failed');
        if (errorRetry) {
          errorRetry.addEventListener('click', () => {
            errorBoundary.classList.add('hidden');
            init();
          });
        }
      }
    }
  }

  init();
});
