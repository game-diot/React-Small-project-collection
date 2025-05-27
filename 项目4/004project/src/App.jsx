import "./App.css";
import Container from "./components/container";
import Footer from "./components/footer";
import logo from "./assets/images/logo.png";
import { useState, useEffect } from "react";
import { message } from "antd";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

function App() {
  const [messageApi, contextHolder] = message.useMessage();
  const [cityName, setCityName] = useState("ChongQing");
  const [currentTime, setCurrentTime] = useState("");
  const [currentDay, setCurrentDay] = useState("");
  const [isError, setIsError] = useState(false);
  const [forecastData, setForecastData] = useState("");
  const [weatherData, setWeatherData] = useState({
    weather: [
      { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
    ],
    base: "stations",
    clouds: { all: 0 },
    cod: 200,
    coord: { lon: 67.0822, lat: 24.9056 },
    dt: 1742612932,
    id: 1174872,
    main: {
      feels_like: 24.64,
      grnd_level: 1011,
      humidity: 88,
      pressure: 1015,
      sea_level: 1015,
      temp: 23.9,
      temp_max: 23.9,
      temp_min: 23.9,
    },
    name: "ChongQing",
    sys: {
      country: "PK",
      sunrise: 1742607223,
      sunset: 1742651002,
      type: 1,
    },
    timezone: 18000,
    visibility: 3000,

    wind: { speed: 0, deg: 0 },
  });
  let search = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
          import.meta.env.VITE_APP_ID
        }`
      );
      let data = response.data;
      setWeatherData(data);
      setCityName("");
      setIsError(false); // 成功后再设置isError为false
    } catch (error) {
      console.log("获取API出现错误", error);
      if (!isError) {
        // 只有在之前没有错误的情况下才显示消息
        messageApi.open({
          type: "error",
          content: "未能搜索到该地区的天气情况，请稍后再试",
        });
        setIsError(true);
      }
    }
  };
  let handleSearch = () => {
    search(cityName);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);
  // 当前时间天气
  useEffect(() => {
    if (weatherData && weatherData.timezone) {
      const timezoneOffsetSeconds = weatherData.timezone;
      const localTime = new Date();
      const utc = localTime.getTime() + localTime.getTimezoneOffset() * 60000;
      const targetTime = new Date(utc + timezoneOffsetSeconds * 1000);

      const formattedTime = new Intl.DateTimeFormat("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(targetTime);

      setCurrentTime(formattedTime);

      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const dayName = days[targetTime.getDay()];
      setCurrentDay(dayName);
    }
  }, [weatherData]);
  // 日出、日落时间
  const convertSunsetriseToProperTime = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12; // Convert 24hr to 12hr
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };
  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/forecast",
          {
            params: {
              lat: weatherData.coord.lat,
              lon: weatherData.coord.lon,
              units: "metric",
              appid: import.meta.env.VITE_APP_ID,
            },
          }
        );

        setForecastData(response.data);
      } catch (error) {
        console.error("Error fetching forecast data: ", error);
      }
    };

    if (weatherData.coord) {
      fetchForecastData();
    }
  }, [weatherData.coord]);
  const [themeClass, setThemeClass] = useState("theme-clear");
  useEffect(() => {
    if (weatherData && weatherData.weather && weatherData.weather[0]) {
      const main = weatherData.weather[0].main;
      let theme = "theme-clear";
      if (["Clouds", "Mist", "Fog", "Haze"].includes(main))
        theme = "theme-cloud";
      else if (["Rain", "Drizzle", "Thunderstorm"].includes(main))
        theme = "theme-rain";
      else if (["Snow"].includes(main)) theme = "theme-snow";
      else if (["Clear"].includes(main)) theme = "theme-clear";
      else theme = "theme-default";
      setThemeClass(theme);
      document.body.className = theme; // 动态切换body的class
    }
  }, [weatherData]);
  return (
    <div>
      <div className="header">
        <div>
          <h1>
            <img src={logo} alt="" />
            Weather Now
          </h1>
        </div>
        <div>
          <div className="search-container">
            <input
              type="text"
              placeholder="输入地区名称"
              value={cityName}
              onChange={(e) => setCityName(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <FaSearch className="search-icon" onClick={handleSearch} />
          </div>
        </div>
      </div>
      {/* this is for antd message */}
      {contextHolder}
      <div className="container">
        <Container
          description={weatherData.weather[0].main}
          time={currentTime}
          day={currentDay}
          data={weatherData}
          sunrise={convertSunsetriseToProperTime(weatherData.sys.sunrise)}
          sunset={convertSunsetriseToProperTime(weatherData.sys.sunset)}
          forecastData={forecastData}
        />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
