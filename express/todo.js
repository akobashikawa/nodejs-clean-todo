const express = require('express');
const todoRouter = express.Router();

const todoService = require('../core/todo-service').create();
const todoController = require('../core/todo-controller').create({todoService});

todoRouter.get('/', function(req, res) {
  res.send('To Do');
});

todoRouter.get('/items/:id', async function(req, res) {
  const id = req.params.id;
  try {
    const item = await todoController.getItem(id);
    res.json(item);
  } catch (error) {
    res.status(500).json({
      message: "error getting item",
      id,
    });
  }

});

todoRouter.get('/items', async function(req, res) {
  try {
    const items = await todoController.getItems();
    res.json(items);
  } catch (error) {
    res.status(500).json({
      message: 'error getting items',
    });
  }
});

todoRouter.post('/items', async function(req, res) {
  const newItem = req.body;
  if (!newItem) {
    return res.status(400).json({
      message: "newItem is required",
      newItem,
    });
  }

  try {
    const item = await todoController.postItem(newItem);
    res.json(item);
  } catch (error) {
    res.status(500).json({
      message: "error posting item",
      item: newItem,
    });    
  }
});

module.exports = todoRouter;