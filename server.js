'use strict';
console.log('server file logging');

// requires
const express = require('express');
//app is my server
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5005;


// endpoints
//base end point
app.get('/', (request, response) => {
  console.log('hello from home');
  response.status(200).send('welcome to my server!');

});



// error handling
// server start
app.listen(PORT, () => console.log(`PORT RUN: ${PORT}`));
