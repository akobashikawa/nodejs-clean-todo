const express = require('express');
const app = express();

// json request support
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const hello = require('./hello.js');
const todo = require('./todo.js');

app.use('/hello', hello);
app.use('/todo', todo);

app.get('/', (req, res) => {
  res.send('Clean To Do @expressjs');
});

module.exports = app;