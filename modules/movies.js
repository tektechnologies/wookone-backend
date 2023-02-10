'use strict';
const axios = require('axios');
require('dotenv').config();

// let cache = require('./cache.js');

async function getMovie(location) {
  console.log('GET MOVIES',location);
  // MOVIE_API_KEY

}

// function parseMovie(movieData) {
//   try {
//     const movieSummaries = movieData.{}.map(day => {
//       return new Movie(day);
//     });
//     return Promise.resolve(movieSummaries);
//   } catch (e) {
//     return Promise.reject(e);
//   }
// }

// class Movie {
//   constructor(movieObject) {
//     console.log('🚀 ~ file: movies.js:24 ~ Movie ~ constructor ~ movieObject', movieObject);


//   }
// }

module.exports = getMovie;
