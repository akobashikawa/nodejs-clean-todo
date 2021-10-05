const todoController = {
  todoService: null,

  create({ todoService }) {
    const obj = Object.create(this);
    obj.todoService = todoService;
    return obj;
  },

  getItems() {
    const items = this.todoService.getItems();
    return items;
  },

  postItem(newItem) {
    const result = this.todoService.postItem(newItem);
    return result;
  },

  getItem(id) {
    const item = this.todoService.getItem(id);
    return item;
  },
};

module.exports = todoController;