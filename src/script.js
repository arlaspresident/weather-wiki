/**
 * Element som visar väderdata
 * @type {HTMLElement}
 */
const weatherDiv = document.getElementById("weather");

/**
 * Element som visar wikipedia info.
 * @type {HTMLElement}
 */
const wikiDiv = document.getElementById("wiki");

/**
 * Sök knappen.
 * @type {HTMLElement}
 */
const searchButton = document.getElementById("searchBtn");

/**
 * Eventlistener för sök knappen.
 * Hämtar väderdata och wiki info för den angivna staden.
 */
searchButton.addEventListener("click", async () => {
  const city = document.getElementById("city").value;
  if (!city) return;

  await getWeatherAndWiki(city);
});

/**
 * Hämtar väderdata för stad från openweathermap API.
 *
 * @param {string} city - Namnet på staden att hämta väderdata för.
 * @returns {Promise<void>} En promise som löser sig när datan är hämtad och visad.
 */
async function getWeatherAndWiki(city) {
  const apiKey = "8bbe61b4a2218e6c92007ae17d5dec3b";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=sv`;


  try {
    const response = await fetch(url);
    const data = await response.json();
    

    weatherDiv.innerHTML = `
      <h3>Väder i ${data.name}</h3>
      <p>Temperatur: ${data.main.temp}°C</p>
      <p>Väder: ${data.weather[0].description}</p>
    `;
    weatherDiv.classList.add("show");
    const lat = data.coord.lat;
    const lon = data.coord.lon;
    await getWikiByCoords(lat, lon);
  } catch (error) {
    weatherDiv.innerHTML = "Kunde inte hämta vädret";
    wikiDiv.innerHTML = "Kunde inte hämta Wikipedia info";
  }
}

/**
 * Hämtar närmaste Wikipedia-artikel baserat på lat/lon-koordinater.
 *
 * @param {number} lat - Latitud
 * @param {number} lon - Longitud
 * @returns {Promise<void>}
 */
async function getWikiByCoords(lat, lon) {
  const geoUrl = `https://sv.wikipedia.org/w/api.php?origin=*&action=query&format=json&list=geosearch&gsradius=10000&gscoord=${lat}|${lon}`;


  wikiDiv.innerHTML = `<div class="spinner"></div>`;

  try {
    const geoRes = await fetch(geoUrl);
    const geoData = await geoRes.json();
    const pageTitle = geoData.query.geosearch[0]?.title;

    if (pageTitle) {
      const summaryUrl = `https://sv.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(pageTitle)}`;
      const summaryRes = await fetch(summaryUrl);
      const summaryData = await summaryRes.json();


    wikiDiv.innerHTML = `
     <h3>Om ${summaryData.title}</h3>
        <p>${summaryData.extract}</p>
        <a href="${summaryData.content_urls.desktop.page}" target="_blank">Läs mer på Wikipedia</a>
      `;
      wikiDiv.classList.add("show");
    } else {
      wikiDiv.innerHTML = "Ingen relevant Wikipedia artikel hittades nära din plats";
    }
  } catch (error) {
    wikiDiv.innerHTML = "Kunde inte hämta Wikipedia info";
  }
}

const hour = new Date().getHours();
const body = document.body;
const greeting = document.getElementById("greeting");

if (hour >= 7 && hour < 19) {
  body.classList.add("day");
  greeting.textContent = "God morgon!";
} else {
  body.classList.add("night");
  greeting.textContent = "God kväll!";
  greeting.classList.add("night"); 
}

