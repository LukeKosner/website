const express = require('express');
const path = require('path');

const app = express();

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});
