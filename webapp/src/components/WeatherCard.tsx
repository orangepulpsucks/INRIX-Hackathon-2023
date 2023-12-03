import { useState, useEffect } from "react";

interface WeatherCardProps {
  temp: number;
  url: string;
}

function WeatherCard() {
  const [temp, setTemp] = useState(100);
  const [url, setUrl] = useState(
    "https://openweathermap.org/img/wn/10d@2x.png",
  );

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await fetch("/api/weather/forecast");
        if (response.ok) {
          const { temp, url } = await response.json();
          setTemp(temp);
          setUrl(url);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getWeather();
  }, []);

  const lastSlashIndex = url.lastIndexOf("/");
  const substring = url.substring(lastSlashIndex + 1);
  const dAtIndex = substring.indexOf("d@");
  const weather = substring.substring(0, dAtIndex);
  let dynWeatherColor = "to-stone-200";
  let tempFaren = Math.round(temp * (9 / 5) - 459.67);

  if (weather == "01" || weather == "02") {
    dynWeatherColor = "to-amber-200";
  } else if (
    weather == "09" ||
    weather == "10" ||
    weather == "11" ||
    weather == "13"
  ) {
    dynWeatherColor = "to-blue-200";
  }

  return (
    <div
      className={`flex h-fit justify-between rounded-lg border border-gray-300 bg-gradient-to-r from-stone-50 first-letter:items-center ${dynWeatherColor}`}
    >
      <div className="m-6 flex-row">
        <p className="px-2 text-xl">{tempFaren}°F</p>
        <p className="px-2 text-sm">San Francisco, CA</p>
      </div>
      <img src={url} />
    </div>
  );
}

export default WeatherCard;
