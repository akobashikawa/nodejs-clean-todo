const helloController = {
  create() {
    const obj = Object.create(this);
    return obj;
  },

  hello(name) {
    return name ? `Hello ${name}` : 'Hello';
  },
};

module.exports = helloController;