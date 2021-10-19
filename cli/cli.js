const app = require('./app').create();

// const hello = require("./hello.js");
// app.get('hello', hello);

app.main(() => {
  console.log(`CLI app`);
});