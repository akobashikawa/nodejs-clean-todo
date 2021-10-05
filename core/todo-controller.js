const todoController = {
  todoService: null,

  create({ todoService }) {
    const obj = Object.create(this);
    obj.todoService = todoService;
    return obj;
  },

  async getItems() {
    try {
      const items = await this.todoService.getItems();
      return items;
    } catch (error) {
      throw error;
    }
  },

  async postItem(newItem) {
    try {
      const result = await this.todoService.postItem(newItem);
      return result;
    } catch (error) {
      throw error;
    }
  },

  async getItem(id) {
    try {
      const item = await this.todoService.getItem(id);
      return item;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = todoController;