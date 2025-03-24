# Wikiväder
LÄNK: https://wikivader.netlify.app

**Wikiväder** är en enkel och responsiv webbapplikation som kombinerar information från två olika API:er:  
- [OpenWeatherMap](https://openweathermap.org/api) för väderdata  
- [Wikipedia REST API](https://www.mediawiki.org/wiki/API:REST_API) för sammanfattningar av städer

Användaren kan skriva in en stad och få aktuell väderinformation samt en kortfattad beskrivning av staden direkt på sidan.

## Teknik & Verktyg

- **HTML, CSS (SCSS), JavaScript **
- **SASS/SCSS** för struktur och återanvändning i styling
- **Parcel** som bundler och arbetsprocess
- **JSDoc** för dokumentation av JavaScript-kod
- **Git & GitHub** för versionshantering
- **Netlify** för deploy

## Starta lokalt

1. Klona repot:
   git clone https://github.com/arlaspresident/weather-wiki.git
   cd weather-wiki
2. Installera beroenden:
   npm install
3. Starta utvecklingsserver:
   npm run dev
4. Bygg för produktion:
   npm run build
5. Generera JSDoc-dokumentation:
   npm run jsdoc
