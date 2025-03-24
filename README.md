# Wikiväder

**Wikiväder** är en enkel och responsiv webbapplikation (mashup) som kombinerar information från två olika API:er:  
- [OpenWeatherMap](https://openweathermap.org/api) för väderdata  
- [Wikipedia REST API](https://www.mediawiki.org/wiki/API:REST_API) för sammanfattningar av städer

Användaren kan skriva in en stad och få aktuell väderinformation samt en kortfattad beskrivning av staden direkt på sidan.

## Teknik & Verktyg

- **HTML, CSS (SCSS), JavaScript (ES Modules)**
- **SASS/SCSS** för struktur och återanvändning i styling
- **Parcel** som bundler och arbetsprocess
- **JSDoc** för dokumentation av JavaScript-kod
- **Git & GitHub** för versionshantering
- **Netlify** för deploy

## Starta lokalt

1. Klona repot:
   ```bash
   git clone https://github.com/arlaspresident/weather-wiki.git
   cd weather-wiki
