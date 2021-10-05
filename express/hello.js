const express = require('express');
const helloRouter = express.Router();

const helloController = require('../core/hello-controller').create();

helloRouter.get('/', function(req, res) {
  const name = req.query.name;
  const response = helloController.hello(name);
  res.send(response);
});

module.exports = helloRouter;