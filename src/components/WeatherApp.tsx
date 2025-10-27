import React, { useState } from "react";
import axios from "axios";

const WeatherApp: React.FC = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    try {
      const res = await axios.get(`https://wttr.in/${city}?format=j1`);
      setWeather(res.data);
    } catch (error) {
      alert("Không tìm thấy thành phố!");
    }
    setLoading(false);
  };

  return (
    <div className="card">
      <h2>🌤️ Ứng dụng thời tiết</h2>
      <input
        type="text"
        placeholder="Nhập tên thành phố..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather} disabled={loading}>
        {loading ? "Đang tải..." : "Xem thời tiết"}
      </button>

      {weather && (
        <div className="result">
          <h3>{city.toUpperCase()}</h3>
          <p>Nhiệt độ: {weather.current_condition[0].temp_C}°C</p>
          <p>Thời tiết: {weather.current_condition[0].weatherDesc[0].value}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
