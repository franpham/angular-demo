"use strict";
var PORT = 3000;

var express = require('express');
var app = express();

app.use(express.static('./public'));

app.listen(PORT, function() {
  console.log('listening on port ', PORT);
});