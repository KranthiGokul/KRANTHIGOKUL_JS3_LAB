

import {WeatherAPI} from "./weather-api.js"

function testBuildURL(){

  const weatherAPIObj = new WeatherAPI();

  weatherAPIObj.buildURL("Tokyo");

}

async function testInvokeURL(){

  const weatherAPIObj = new WeatherAPI();

  weatherAPIObj.buildURL("Tokyo");

  const responseJSON = await weatherAPIObj.invokeURL();

  console.log(responseJSON);

}

testInvokeURL();