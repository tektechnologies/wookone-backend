'use strict';
console.log('server file logging');
console.log('I am a CONSOLE LOG I LIVE HERE IN THE TERMINAL');

// requires
const express = require('express');
//app is my server
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5005;
// console.log('new');
// console.log('new');
// console.log('new');
// console.log('new');
// console.log('new');




// endpoints
// error handling
// server start
app.listen(PORT, () => console.log(`PORT RUN: ${PORT}`));
