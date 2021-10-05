const express = require('express');
const todoRouter = express.Router();

const todoService = require('../core/todo-service').create();
const todoController = require('../core/todo-controller').create({todoService});

todoRouter.get('/', function(req, res) {
  res.send('To Do');
});

todoRouter.get('/items/:id', function(req, res) {
  const id = req.params.id;
  const item = todoController.getItem(id);
  res.json(item);
});

todoRouter.get('/items', function(req, res) {
  const items = todoController.getItems();
  res.json(items);
});

todoRouter.post('/items', function(req, res) {
  const newItem = req.body;
  if (!newItem) {
    return res.status(400).json({
      message: 'newItem is required',
      newItem,
    });
  }
  const item = todoController.postItem(newItem);
  res.json(item);
});

module.exports = todoRouter;