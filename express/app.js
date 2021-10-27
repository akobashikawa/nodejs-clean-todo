const express = require('express');
const app = express();
const cors = require("cors");

// json request support
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const hello = require('./hello');
const todo = require('./todo');

app.use( cors() );
app.options("*", cors());

app.use('/hello', hello);
app.use('/todo', todo);

app.get('/', (req, res) => {
  res.send('Clean To Do @expressjs');
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  const result = {};
  if (err.message) {
    result.message = err.message;
  }
  res.json(result);
});

module.exports = app;