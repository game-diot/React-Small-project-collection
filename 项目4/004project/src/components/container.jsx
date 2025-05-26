import React from "react";

import WeatherDetails from "./containerComponents/weatherDetails";
import WeatherForecast from "./containerComponents/weatherForecast";
import WeatherOverviews from "./containerComponents/weatherOverviews";

const Container = (props) => {
  // 接收props
  const { data, forecastData, time, day, description, sunrise, sunset } = props;

  // 如果data不存在，可以显示加载状态或错误信息
  if (!data) {
    return <div className="container-loading">正在加载天气数据...</div>;
  }

  return (
    <div className="container">
      <div className="weatherOverviewSection">
        <WeatherOverviews
          data={data}
          time={time}
          day={day}
          description={description}
        />
      </div>
      <div className="contentWrapper">
        <div className="weatherDetailsSection">
          <WeatherDetails data={data} sunrise={sunrise} sunset={sunset} />
        </div>
        {forecastData && (
          <div className="weatherForecastSection">
            <WeatherForecast forecastData={forecastData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Container;
