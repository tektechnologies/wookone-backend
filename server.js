'use strict';
console.log('server file logging');

const express = require('express');
const app = express();
require('dotenv').config();
const weather = require('./modules/weather.js');
const movies = require('./modules/movies');
const yelp = require('./modules/yelp.js');
const PORT = process.env.PORT || 5005;
const cors = require('cors');

app.use(cors());

app.get('/weather', getWeather);
app.get('/movies', getMovies);
app.get('/yelp', yelpHandler);



function getWeather(request, response) {
  const { lat, lon } = request.query;
  weather(lat, lon)
    .then((summaries) => response.status(200).send(summaries))
    .catch((error) => {
      console.error(error);
      response.status(500).send('Sorry. Something went wrong!');
    });
}

function getMovies(request, response) {
  const location = request.query.searchQuery;
  movies(location)
    .then((movieList) => response.status(200).send(movieList))
    .catch((error) => {
      console.error(error);
      response.status(500).send('OPPS! 500' + error.message);
    });
}


function yelpHandler(request, response) {
  const location = request.query.searchQuery;
  yelp(location, request.query.page)
    .then(reviews => response.send(reviews))
    .catch((error) => {
      console.error(error);
      response.status(500).send('Sorry. Something went wrong!')
    });
}



app.listen(PORT, () => console.log(`PORT RUN: ${PORT}`));
