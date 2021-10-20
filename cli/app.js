const app = require('./cliapp');

const hello = require("./hello");
const todo = require("./todo.js");

app.use('hello', hello);
app.use('todo', todo);

module.exports = app;