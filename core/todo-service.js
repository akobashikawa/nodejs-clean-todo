const crypto = require("crypto");

const todoService = {
  items: [],

  create() {
    const obj = Object.create(this);
    return obj;
  },

  getNewId() {
    // 32b random id
    // https://stackoverflow.com/a/40191779
    // const id = crypto.randomBytes(16).toString("hex");

    // date random id
    const id = (new Date()).getTime().toString(36) + Math.random().toString(36).slice(2);
    // https://stackoverflow.com/a/57593036
    
    // console.log(id);
    return id;
  },

  getItems() {
    return this.items;
  },

  getItem(id) {
    const found = this.items.find(item => (id === item.id));
    // console.log(found, !found, !!found);
    return found;
  },

  postItem(newItem) {
    newItem.id = this.getNewId();
    this.items.push(newItem);
    return newItem;
  },
};

module.exports = todoService;
