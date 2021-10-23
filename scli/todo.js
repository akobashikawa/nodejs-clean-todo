const _ = require("lodash");

const todoService = require("../core/todo-service").create();
const todoController = require("../core/todo-controller").create({
  todoService,
});

const todo = {
  async getItems() {
    try {
      const items = await todoController.getItems();
      return items;
    } catch (error) {
      throw error;
    }
  },

  async postItem(args) {
    try {
      const text = args[1];
      if (!text) {
        throw {
          status: 400,
          message: "text is required",
        };
      }
      const newItem = {
        text,
      };

      const item = await todoController.postItem(newItem);
      return item;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = todo;
