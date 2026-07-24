function getWeatherCondition(code) {
    if (code === 0) return { emoji: "☀️", label: "맑음" };
    if (code === 1 || code === 2) return { emoji: "🌤️", label: "구름 조금" };
    if (code === 3) return { emoji: "☁️", label: "흐림" };
    if (code === 45 || code === 48) return { emoji: "🌫️", label: "안개" };
    if ([51, 53, 55, 56, 57].includes(code)) return { emoji: "🌦️", label: "이슬비" };
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return { emoji: "🌧️", label: "비" };
    if ([71, 73, 75, 77, 85, 86].includes(code)) return { emoji: "❄️", label: "눈" };
    if (code === 95 || code === 96 || code === 99) return { emoji: "⛈️", label: "뇌우" };
    return { emoji: "🌡️", label: "정보 없음" };
}

export async function fetchCityWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,is_day&timezone=auto`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("날씨 서버 응답이 원활하지 않습니다.");
        }

        const data = await response.json();
        const condition = getWeatherCondition(data.current.weather_code);

        return {
            temperature: data.current.temperature_2m,
            humidity: data.current.relative_humidity_2m,
            conditionEmoji: condition.emoji,
            conditionLabel: condition.label,
            isDay: data.current.is_day === 1,
            time: data.current.time
        };
    } catch (error) {
        console.error("weatherAPI 에러:", error);
        return null;
    }
}
