import "./weather.css";
import axios from "axios";
import { useEffect, useState } from "react";
const Weather = () => {
  const [search, setSearch] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [city, setCity] = useState(() => {
      if(localStorage.getItem("city")){
        return localStorage.getItem("city");   
      } else{
          return "Kolkata"
      }
  });
  const [showDetails, setShowDetails] = useState(false);
  const [weather, setWeather] = useState({
    city: "",
    degree: 0,
    max: 0,
    min: 0,
    icon: "",
    sky: "",
  });
  const [date, setDate] = useState({
    date: 0,
    year: 0,
    month: "",
    day: "",
  });
  const apiKey = "369506d9f9f0c5a327bc50b4b6092b20";
  useEffect(() => {
    const getWeather = async () => {
      try {
        const resp = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );
        setWeather({
          city: resp.data.name,
          degree: Math.round(resp.data.main.temp - 273.15),
          max: Math.round(resp.data.main.temp_max - 273.15),
          min: Math.round(resp.data.main.temp_min - 273.15),
          icon: resp.data.weather[0].icon,
          sky: resp.data.weather[0].main,
        });
        const udate = new Date();
        setDate({
          date: udate.getDate(),
          year: udate.getFullYear(),
          month: udate.toLocaleDateString("default", { month: "long" }),
          day: udate.toLocaleDateString("default", { weekday: "long" }),
        });
        setErrMsg(() => "");
      } catch (err) {
        console.log(err);
        setErrMsg(() => "Weather not found");
      }
    };
    getWeather();
  },[city]);

  return (
    <div className="weather__main-container">
      <div className="weather__hover">
        <lable className="search__city">
          <i class="bx bx-search"></i>
          <input
            type="text"
            className="input__city"
            onChange={(e) => {
                setShowDetails(false)
                setSearch(e.target.value)
            }}
            onKeyPress={(e) => {
              if (city !== "") {
                localStorage.removeItem("city");
                if (e.key === "Enter") {
                  localStorage.setItem("city", search);
                }
                setCity(() => localStorage.getItem("city"));
              } else {
                if (e.key === "Enter") {
                  localStorage.setItem("city", search);
                }
                setCity(() => localStorage.getItem("city"));
              }
            }}
          />
        </lable>
        {errMsg !== "" ? (
          <h1 className="err__msg">{errMsg}</h1>
        ) : (
          <div
            className="primary__temp"
            onClick={() => setShowDetails(!showDetails)}
          >
            <img
              src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
              alt="weather"
              className="weather__img"
            />
            <div className="temp__text">
              <p className="temp__num">{weather.degree}°</p>
              <p className="city__name">{weather.city}</p>
            </div>
          </div>
        )}
      </div>
      <div className={`detailed__temp ${showDetails ? "show" : ""}`}>
        <p className="weather__primary__text">{weather.city}</p>
        <p className="secondary__text">
          {date.day}, {date.month} {date.date}, {date.year}
        </p>
        <hr className="hr__line" />
        <img
          src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
          alt="weather"
          className="weather__img"
        />
        <p className="temperature">{weather.degree}°</p>
        <p className="sky">{weather.sky}</p>
        <p className="humadity">
          {weather.max}° | {weather.min}°
        </p>
      </div>
    </div>
  );
};

export { Weather };
