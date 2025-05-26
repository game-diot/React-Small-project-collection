import { getIcon } from "./weatherIcons";

export default function WeatherDetails({ sunrise, sunset, data }) {
  if (!sunrise || !sunset || !data) {
    return (
      <div className="weather-details">
        <h1 className="weather-details-title">天气详情</h1>
        <div className="loading">
          <p>正在加载天气数据...</p>
        </div>
      </div>
    );
  }

  const weatherCards = [
    {
      label: "体感温度",
      value: data.main.feels_like
        ? `${Math.floor(data.main.feels_like)}℃`
        : "-",
      icon:
        Math.floor(data.main.feels_like) <= 25
          ? "https://cdn-icons-png.flaticon.com/128/2322/2322701.png"
          : "https://cdn-icons-png.flaticon.com/128/6218/6218295.png",
    },
    {
      label: "日出时间",
      value: sunrise || "-",
      icon: "https://cdn-icons-png.flaticon.com/128/8098/8098355.png",
    },
    {
      label: "日落时间",
      value: sunset || "-",
      icon: "https://cdn-icons-png.flaticon.com/128/8098/8098358.png",
    },
    {
      label: "湿度",
      value: data.main.humidity ? `${data.main.humidity}%` : "-",
      icon: "https://cdn-icons-png.flaticon.com/128/11742/11742610.png",
    },
    {
      label: "能见度",
      value: data.visibility ? `${data.visibility / 1000} km` : "-",
      icon: "https://cdn-icons-png.flaticon.com/128/2698/2698213.png",
    },
    {
      label: "风速",
      value: data.wind.speed ? `${data.wind.speed} km/h` : "-",
      icon: "https://cdn-icons-png.flaticon.com/128/2529/2529971.png",
    },
    {
      label: "气压",
      value: data.main.pressure ? `${data.main.pressure} hPa` : "-",
      icon: "https://cdn-icons-png.flaticon.com/128/6975/6975183.png",
    },
    {
      label: "天气状况",
      value: data.weather[0].description,
      icon: getIcon(data.weather[0].main),
    },
  ];

  return (
    <div className="weather-details">
      <h1 className="weather-details-title">天气详情</h1>
      <div className="weather-grid">
        {weatherCards.map((card, index) => (
          <div key={index} className="weather-card">
            <div className="info-section">
              <p className="weather-label">{card.label}</p>
              <p className="weather-value">{card.value}</p>
            </div>
            <div className="icon-section">
              <img src={card.icon} alt={`${card.label} icon`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
