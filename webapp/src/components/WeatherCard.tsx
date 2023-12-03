interface WeatherCardProps {
  temp: number;
  url: string;
}

function WeatherCard({ temp, url }: WeatherCardProps) {
  const lastSlashIndex = url.lastIndexOf("/");
  const substring = url.substring(lastSlashIndex + 1);
  const dAtIndex = substring.indexOf("d@");
  const weather = substring.substring(0, dAtIndex);
  let dynWeatherColor = "to-stone-200";

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
      className={`inline-block flex h-fit w-1/2 justify-between rounded-lg border border-gray-300 bg-gradient-to-r from-stone-50 first-letter:items-center ${dynWeatherColor}`}
    >
      <div className="m-6 flex-row">
        <p className="px-2 text-xl">{temp}°F</p>
        <p className="px-2 text-sm">Seattle, WA</p>
      </div>
      <img src={url} />
    </div>
  );
}

export default WeatherCard;
