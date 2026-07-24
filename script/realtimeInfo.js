import { fetchCityWeather } from "./weatherAPI.js";

const CITIES = [
    { name: "나의 고향 서울", flag: "🇰🇷", lat: 37.5665, lon: 126.9780 },
    { name: "오빠가 있는 시카고", flag: "🇺🇸", lat: 41.8781, lon: -87.6298 },
    { name: "아빠의 청춘이 담긴 뉴질랜드", flag: "🇳🇿", lat: -36.8485, lon: 174.7633 }
];

const citySelect = document.querySelector("#citySelect");
const weatherBox = document.querySelector("#weather-box");

const MIN_LOADING_TIME = 1200;

function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function formatLocalTime(isoString) {
    const [, timePart] = isoString.split("T");
    const [hourStr, minuteStr] = timePart.split(":");
    let hour = parseInt(hourStr, 10);
    const period = hour < 12 ? "오전" : "오후";
    hour = hour % 12 || 12;
    return `${period} ${hour}:${minuteStr}`;
}

async function renderWeather() {
    const city = CITIES[citySelect.value];

    weatherBox.innerHTML = `
        <p><b>📍 ${city.flag} ${city.name}</b></p>
        <p class="weather-loading">로딩 중… ⏳</p>
    `;

    const [weather] = await Promise.all([
        fetchCityWeather(city.lat, city.lon),
        wait(MIN_LOADING_TIME)
    ]);

    if (weather) {
        weatherBox.innerHTML = `
            <p><b>📍 ${city.flag} ${city.name}</b></p>
            <p>${weather.conditionEmoji} 날씨: ${weather.conditionLabel}</p>
            <p>🌡️ 기온: ${weather.temperature}°C</p>
            <p>💧 습도: ${weather.humidity}%</p>
            <p>${weather.isDay ? "☀️ 낮" : "🌙 밤"} · ${formatLocalTime(weather.time)}</p>
        `;
    } else {
        weatherBox.innerHTML += "<p>⚠️ 날씨 정보를 가져오지 못했습니다.</p>";
    }
}

if (citySelect && weatherBox) {
    citySelect.addEventListener("change", renderWeather);
    renderWeather();
}
