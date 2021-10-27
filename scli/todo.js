const axios = require("axios");

const todo = {
  async getItems() {
    try {
      const response = await axios.get(`http://localhost:3000/todo/items`);
      return response.data;
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

      const response = await axios.post(`http://localhost:3000/todo/items`, {data: newItem});
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = todo;
