const helloController = require("../core/hello-controller").create();

const hello = {
  hello(args) {
    const name = args[1];
    const response = helloController.hello(name);
    console.log(response);
  },
};

module.exports = hello;