import { getWeather } from "./weatherAPI.js";

const cityData = {
    gwangju: { name: "광주", lat: 35.1595, lng: 126.8526 },
    seoul: { name: "서울", lat: 37.5665, lng: 126.9780 },
    tokyo: { name: "도쿄", lat: 35.6762, lng: 139.6503 },
    newyork: { name: "뉴욕", lat: 40.7128, lng: -74.0060 },
    london: { name: "런던", lat: 51.5074, lng: -0.1278 }
};

const citySelect = document.getElementById("citySelect");
const weatherBox = document.getElementById("weather-box");

weatherBox.style.display = "none";

citySelect.addEventListener("change", async function () {
    const selectedCity = cityData[citySelect.value];

    if (!selectedCity) {
        weatherBox.innerHTML = "";
        weatherBox.style.display = "none";
        return;
    }

    weatherBox.style.display = "block";
    weatherBox.innerHTML = "<p>🔄 로딩 중...</p>";

    try {
        const weather = await getWeather(selectedCity.lat, selectedCity.lng);

        weatherBox.innerHTML =
            "<p><strong>" + selectedCity.name + "</strong></p>" +
            "<p>온도: " + weather.temperature + "°C</p>" +
            "<p>습도: " + weather.humidity + "%</p>";
    } catch (error) {
        weatherBox.innerHTML = "<p>날씨 정보를 가져오지 못했습니다.</p>";
    }
});
