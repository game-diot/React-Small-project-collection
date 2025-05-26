export default function WeatherOverviews({ time, data, day, description }) {
  if (!time || !data || !day || !description) {
    return (
      <div className="overview-container">
        <div className="loading">
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
          <div className="loading-dot"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="overview-container">
      <div className="overview-content-wrapper">
        <div className="temperature-section">
          <h1 className="temperature">{Math.floor(data.main.temp)}°C</h1>
          <p className="location">
            {data.name}
            <hr className="location-divider" />
            {data.sys.country}
          </p>
        </div>
        <div className="time-section">
          <h1 className="current-time">{time}</h1>
          <p className="date-info">
            {day}
            <br />
            <span className="weather-description">{description}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
