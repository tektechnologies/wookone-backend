'use strict';
console.log('server file logging');

const express = require('express');
const app = express();
require('dotenv').config();
const weather = require('./modules/weather.js');
const movies = require('./modules/movies');
// const movies = require('./modules/movies');
const PORT = process.env.PORT || 5005;
const cors = require('cors');

app.use(cors());

app.get('/weather', getWeather);
app.get('/movies', getMovies);

function getWeather(request, response) {
  // console.log('!!!!!!!!!! ',request.query);
  const { lat, lon } = request.query;
  // console.log(lat,lon);
  weather(lat, lon)
    .then((summaries) => response.status(200).send(summaries))
    .catch((error) => {
      console.error(error);
      response.status(500).send('Sorry. Something went wrong!');
    });
}

function getMovies(request, response) {
  // console.log('request object',request.query.searchQuery);
  const location = request.query.searchQuery;
  movies(location)
    .then((movieList) => response.status(200).send(movieList))
    .catch((error) => {
      console.error(error);
      response.status(500).send('OPPS! 500' + error.message);
    });
}

app.listen(PORT, () => console.log(`PORT RUN: ${PORT}`));
