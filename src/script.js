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

  await getWeather(city);
  await getWiki(city);
});

/**
 * Hämtar väderdata för stad från openweathermap API.
 *
 * @param {string} city - Namnet på staden att hämta väderdata för.
 * @returns {Promise<void>} En promise som löser sig när datan är hämtad och visad.
 */
async function getWeather(city) {
  const apiKey = "8bbe61b4a2218e6c92007ae17d5dec3b";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=sv`;


  try {
    const response = await fetch(url);
    const data = await response.json();
    await new Promise(resolve => setTimeout(resolve, 500));

    weatherDiv.innerHTML = `
      <h3>Väder i ${data.name}</h3>
      <p>Temperatur: ${data.main.temp}°C</p>
      <p>Väder: ${data.weather[0].description}</p>
    `;
    weatherDiv.classList.add("show");
  } catch (error) {
    weatherDiv.innerHTML = "Kunde inte hämta vädret.";
  }
}

/**
 * Hämtar en sammanfattning från wikipedia för staden.
 *
 * @param {string} city - Namnet på staden att hämta information för.
 * @returns {Promise<void>} En promise som löser sig när datan är hämtad och visad.
 */
async function getWiki(city) {
  const url = `https://sv.wikipedia.org/api/rest_v1/page/summary/${city}`;

  wikiDiv.innerHTML = `<div class="spinner"></div>`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    await new Promise(resolve => setTimeout(resolve, 500));


    wikiDiv.innerHTML = `
      <h3>Om ${city}</h3>
      <p>${data.extract}</p>
      <a href="${data.content_urls.desktop.page}" target="_blank">Läs mer på Wikipedia</a>
    `;
    wikiDiv.classList.add("show");
  } catch (error) {
    wikiDiv.innerHTML = "Kunde inte hämta Wikipedia information.";
  }
}
