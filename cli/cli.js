#!/usr/bin/env node
const app = require('./app').create();

const args = process.argv.slice(2);
const response = app.main(args);
console.log(response);