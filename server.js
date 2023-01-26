'use strict';
console.log('server file logging');
console.log('I am a CONSOLE LOG I LIVE HERE IN THE TERMINAL');

// requires
const express = require('express');
//app is my server
const app = express();


const PORT = process.env.PORT || 5005;




// endpoints
// error handling
// server start
app.listen(PORT, () => console.log(`PORT RUN: ${PORT}`));
