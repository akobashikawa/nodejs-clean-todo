#!/usr/bin/env node
const app = require('./app').create();

const args = process.argv.slice(2);

(async () => {
  try {
    const response = await app.main(args);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
})();