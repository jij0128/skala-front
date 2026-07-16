export async function getWeather(lat, lng) {
    const url =
        "https://api.open-meteo.com/v1/forecast?latitude=" + lat +
        "&longitude=" + lng +
        "&current=temperature_2m,relative_humidity_2m";

    const response = await fetch(url);
    const data = await response.json();

    return {
        temperature: data.current.temperature_2m,
        humidity: data.current.relative_humidity_2m
    };
}
