import { LatLong, WeatherResponse } from "./types";
import { randomInt } from "crypto";

export async function getWeather({
  lat,
  long,
}: LatLong): Promise<WeatherResponse> {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${process.env.OPENWEATHER_KEY}`,
    );

    const body = await response.json();

    const listLength = body["list"].length;
    const list = body["list"];

    const randomAccessIdx = randomInt(listLength - 1);

    return {
      url: `https://openweathermap.org/img/wn/${list[randomAccessIdx]["weather"][0]["icon"]}@2x.png`,
      temp: list[randomAccessIdx]["main"]["temp"],
    };
  } catch (error) {
    return { url: "", temp: 0 };
  }
}
