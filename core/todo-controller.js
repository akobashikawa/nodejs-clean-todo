const todoController = {
  todoService: null,

  create({ todoService }) {
    const obj = Object.create(this);
    obj.todoService = todoService;
    return obj;
  },

  async getItem(id) {
    try {
      const item = await this.todoService.getItem(id);
      return item;
    } catch (error) {
      throw error;
    }
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

  async deleteItem(id) {
    try {
      await this.todoService.deleteItem(id);
    } catch (error) {
      throw error;
    }
  },
};

module.exports = todoController;