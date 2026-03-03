# ChronoForge · 和暦
### Japanese Calendar Engine

ChronoForge · 和暦 is a **mathematically accurate** digital implementation of the modern Japanese calendar (1873–present). It preserves the full complexity of the system — era names, Rokuyo fortune days, five seasonal festivals, and 24 solar terms — while presenting a clean, bilingual interface.

Built with **pure HTML, CSS, and Vanilla JavaScript**. No frameworks. No dependencies.

This is not a UI widget.  
This is a **time engine**.

---

## What It Does

For any date between 1873–2100, ChronoForge · 和暦 calculates:

| Element | Description |
|---------|-------------|
| **Japanese Era** | Meiji, Taishō, Shōwa, Heisei, Reiwa with year (元年 for year 1) |
| **Rokuyo** | Six-day fortune cycle: 先勝, 友引, 先負, 仏滅, 大安, 赤口 |
| **Five Festivals** | 人日, 上巳, 端午, 七夕, 重陽 with holiday names and emoji |
| **Solar Terms** | 二十四節気 with Japanese readings |
| **Zassetsu** | Seasonal markers: 節分, 八十八夜, 入梅, etc. |
| **Bilingual Display** | 日本語, English, or 日本語/English |

---

## Core Structure

### Era System (元号)
| Era | Kanji | Romaji | Period |
|-----|-------|--------|--------|
| Meiji | 明治 | Meiji | 1868–1912 |
| Taishō | 大正 | Taishō | 1912–1926 |
| Shōwa | 昭和 | Shōwa | 1926–1989 |
| Heisei | 平成 | Heisei | 1989–2019 |
| Reiwa | 令和 | Reiwa | 2019–present |

Year 1 is displayed as 元年 (gannen).

### Rokuyo (六曜)
| Day | Kanji | Reading | Fortune | Color |
|-----|-------|---------|---------|-------|
| 1 | 先勝 | Senshō | Good morning, bad afternoon | Green |
| 2 | 友引 | Tomobiki | Bad for funerals | Purple |
| 3 | 先負 | Senbu | Bad morning, good afternoon | Orange |
| 4 | 仏滅 | Butsumetsu | Most unlucky | Red |
| 5 | 大安 | Taian | Most lucky | Gold |
| 6 | 赤口 | Shakkō | Good only at noon | Blue-gray |

### Five Festivals (五節句)
| Festival | Kanji | Holiday | Date | Emoji |
|----------|-------|---------|------|-------|
| Jinjitsu | 人日 | 七草粥 | Jan 7 | 🎍 |
| Jōshi | 上巳 | 雛祭り | Mar 3 | 🎎 |
| Tango | 端午 | こどもの日 | May 5 | 🎏 |
| Tanabata | 七夕 | 七夕 | Jul 7 | 🎋 |
| Chōyō | 重陽 | 菊の節句 | Sep 9 | 🌼 |

### 24 Solar Terms (二十四節気)
| Season | Terms |
|--------|-------|
| Spring | 立春 · 雨水 · 啓蟄 · 春分 · 清明 · 穀雨 |
| Summer | 立夏 · 小満 · 芒種 · 夏至 · 小暑 · 大暑 |
| Autumn | 立秋 · 処暑 · 白露 · 秋分 · 寒露 · 霜降 |
| Winter | 立冬 · 小雪 · 大雪 · 冬至 · 小寒 · 大寒 |

---

## Features

### Calendar Grid
- Today highlighted with red border
- Active day selection
- Rokuyo color dots on each cell
- Festival emoji on relevant days
- Mobile: Rokuyo shows abbreviations (先, 友, 負, 仏, 大, 赤)

### Information Panel
- **Gregorian Date** with weekday
- **Japanese Date** with era and traditional month name
- **Rokuyo** with meaning and fortune
- **Festivals** with holiday names and countdown
- **Solar Terms** with progress indicator
- **Zassetsu** for current date

### Navigation
- Month/year arrows
- One-click return to today
- Keyboard arrows (← → ↑ ↓)
- Pre-Meiji (pre-1873) blocking with warning
- Settings menu with localStorage persistence

### Settings

| Option | Description |
|--------|-------------|
| Detail Level | Basic (date only) / Standard (+Rokuyo) / Complete (+festival details) |
| Language | 日本語 / English / 日本語/English |
| Show Rokuyo | Toggle fortune days |
| Show Festivals | Toggle festival display |
| Show Zassetsu | Toggle seasonal markers |
| Show Solar Terms | Toggle 二十四節気 |
| Compact Mode | Tighter spacing |
| Ultra Compact | Even tighter |

---

## Data Sources & Accuracy

| Component | Source | Accuracy |
|-----------|--------|----------|
| Era dates | Imperial Household Agency | Exact |
| Rokuyo | 1927-01-01 reference cycle | Exact |
| Festivals | Fixed Gregorian dates (post-1873) | Exact |
| Solar terms | Interpolated from Chinese calendar data | ±1 day |
| Zassetsu | Traditional calendar markers | Exact dates |

**Date range:** 1873–2100 (pre-1873 and post-2100 show warnings)

---

## Architecture

```

project/
├── index.html          # Calendar UI
├── style.css           # Japanese aesthetic styling
└── script.js           # Complete engine

```

### Core Algorithms

**Era lookup:**
```javascript
function getJapaneseEra(date) {
  for (let era of japaneseEras) {
    if (date >= era.start && (!era.end || date <= era.end)) {
      const year = date.getFullYear() - era.start.getFullYear() + 1;
      return `${era.name}${year === 1 ? "元" : year}年`;
    }
  }
}
```

Rokuyo calculation:

```javascript
// 1927-01-01 was 先勝
const ref = new Date(1927, 0, 1);
const daysSince = Math.floor((target - ref) / (1000*60*60*24));
const index = ((daysSince % 6) + 6) % 6;
return rokuyo[index];
```

Solar terms:

```javascript
// Interpolated from base years (1900, 1950, 2000, 2050, 2100)
const dayOfYear = Math.floor((date - new Date(year, 0, 1)) / (1000*60*60*24)) + 1;
const terms = solarTerms[year];
// Find current term based on offset
```

---

## Bilingual System

Every text element supports three modes:

- **日本語** — Full Japanese  
- **English** — Full English translation  
- **Bilingual** — 日本語 · English

The translation layer updates all labels, tooltips, and UI text dynamically.

---

## Philosophy

ChronoForge is not a calendar app.  
It is a **time engine** — preserving and transmitting the mathematical and cultural precision of traditional timekeeping systems.

The Japanese calendar carries centuries of imperial history, seasonal observation, and daily fortune traditions. This implementation respects that heritage while making it computable and accessible.

---

## Roadmap

- ✅ Era system (1868–present)  
- ✅ Rokuyo with colors and meanings  
- ✅ Five festivals with holiday names  
- ✅ 24 solar terms with progress  
- ✅ Zassetsu markers  
- ✅ Bilingual display  
- ✅ Detail level settings  
- ✅ Pre-1873 blocking  
- ✅ LocalStorage persistence  
- ⬜ Doyō periods (土用)  
- ⬜ 2033 problem documentation  
- ⬜ PWA support  

---

## About the Creator

Built by **Virxee** — a systems-focused software engineer who models complex rule-based structures into precise, executable software.

ChronoForge began as a personal exploration of alternative time systems and evolved into a public demonstration of architectural discipline: translating layered cultural calendars into mathematically consistent, dependency-free engines.

The goal is simple — prove the ability to implement complex temporal logic cleanly, transparently, and with long-term extensibility in mind.

- 📧 ngangmi.virxee@gmail.com  
- 🐦 [@NgangmiR](https://x.com/NgangmiR)  
- 💼 [GitHub Sponsors](https://github.com/sponsors/V-XY)

---

## License

MIT License © 2026 Virxee

*Built with precision and purpose.*
