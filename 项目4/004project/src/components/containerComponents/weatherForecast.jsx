import { getIcon } from "./weatherIcons";

export function WeatherForecast({ forecastData }) {
  if (!forecastData || !forecastData.list) {
    return (
      <div className="forecast-container">
        <h1 className="forecast-title">天气预报</h1>
        <div className="loading">
          <p>正在加载天气预报数据...</p>
        </div>
      </div>
    );
  }

  const formatTimeAMPM = (dt_txt) => {
    const timeString = dt_txt.split(" ")[1];
    const parts = timeString.split(":");
    let hours = parseInt(parts[0]);
    const minutes = parts[1];
    const ampm = hours >= 12 ? "下午" : "上午";
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours}:${minutes} ${ampm}`;
  };
  const getNearestForecastIndex = () => {
    const now = new Date();
    const nowTime = now.getTime();

    let closestIndex = 0;
    let smallestDiff = Infinity;

    forecastData.list.forEach((item, index) => {
      const forecastTime = new Date(item.dt_txt).getTime();
      const diff = Math.abs(forecastTime - nowTime);
      if (diff < smallestDiff) {
        smallestDiff = diff;
        closestIndex = index;
      }
    });

    return closestIndex;
  };

  const highlightedIndex = getNearestForecastIndex();

  return (
    <div className="forecast-container">
      <h1 className="forecast-title">未来天气预报(当前时间段处于高亮区域)</h1>
      <div className="forecast-grid">
        {forecastData.list.map((data, index) => (
          <div
            key={index}
            className={`forecast-item ${
              index === highlightedIndex ? "highlighted" : ""
            }`}
          >
            <p className="forecast-time">{formatTimeAMPM(data.dt_txt)}</p>
            <img
              className="forecast-icon"
              src={getIcon(data.weather[0].main)}
              alt={data.weather[0].description}
            />
            <p className="forecast-temperature">
              {Math.floor(data.main.temp)}℃
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherForecast;
