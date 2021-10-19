const express = require('express');
const todoRouter = express.Router();
const _ = require('lodash');

const todoService = require('../core/todo-service').create();
const todoController = require('../core/todo-controller').create({todoService});

todoRouter.get('/', function(req, res) {
  res.send('To Do');
});

todoRouter.get('/items/:id', async function(req, res, next) {
  const id = req.params.id;
  try {
    const item = await todoController.getItem(id);
    res.json(item);
  } catch (error) {
    next(error);
  }

});

todoRouter.get('/items', async function(req, res, next) {
  try {
    const items = await todoController.getItems();
    res.json(items);
  } catch (error) {
    next(error);
  }
});

todoRouter.post('/items', async function(req, res, next) {
  try {
    const newItem = req.body;
    console.log(!newItem);
    if (_.isEmpty(newItem)) {
      throw {
        status: 400,
        message: "newItem is required",
        newItem,
      };
    }
  
    const item = await todoController.postItem(newItem);
    res.json(item);
  } catch (error) {
    next(error);
  }
});

todoRouter.delete("/items/:id", async function (req, res, next) {
  const id = req.params.id;
  try {
    await todoController.deleteItem(id);
    res.end();
  } catch (error) {
    next(error);
  }
});

module.exports = todoRouter;