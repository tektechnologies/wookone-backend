// const express = require('express');
// const app = express();
const axios = require('axios');
require('dotenv').config();





'use strict';

let cache = require('./cache.js');


async function getWeather(latitude, longitude) {
  console.log('!!!!!!XXXXX!!!!!!!',latitude,longitude);
  const key = 'weather-' + latitude + longitude;
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&days=5&aqi=no&alerts=no&q=${latitude,longitude}`;

  if (cache[key] && (Date.now() - cache[key].timestamp < 50000)) {
    console.log('Cache hit');
  } else {
    console.log('Cache miss');
    // let results = await axios.get(url);

    cache[key] = {};
    cache[key].timestamp = Date.now();
    cache[key].data = axios.get(url)
      .then(response => parseWeather(response.data));
  }
  return cache[key].data;
}

function parseWeather(weatherData) {
  // console.log('xxxxxxxxx',weatherData);
  try {
    const weatherSummaries = weatherData.forecast.forecastday.map(day => {
      // console.log('dddddddddddd',day);
      return new Weather(day);
    });
    return Promise.resolve(weatherSummaries);
  } catch (e) {
    return Promise.reject(e);
  }
}

class Weather {
  constructor(day) {
    // console.log(day.date,'dat data !!! {[{},{}]}');
    for(let i = 0; i < day.hour.length; i++){
      // console.log('zzzzzzzzzzzz',day.hour[i].condition.text);
      this.forecast = day.hour[i].condition.text;
    }
    this.time = day.date;

  }
}

module.exports = getWeather;
