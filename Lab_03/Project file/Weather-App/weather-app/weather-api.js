
const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "ae808ca6fbbc269e3562f0bc17ddd9e0";

class WeatherAPI{0

  buildURL(locationName){

    this.weatherAPIURL = new URL(WEATHER_API_BASE_URL);

    this.weatherAPIURL.searchParams.append("q", locationName);

    this.weatherAPIURL.searchParams.append("units", "metric");

    this.weatherAPIURL.searchParams.append("appid", API_KEY);

    console.log(this.weatherAPIURL.toString());
  }

  async invokeURL(){


    const responseObj = await fetch(this.weatherAPIURL.toString());

    const responseJSON = await responseObj.json();

    return responseJSON;
  }

}

export {WeatherAPI}