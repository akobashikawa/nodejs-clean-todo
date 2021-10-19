const app = {
  create() {
    const obj = Object.create(this);
    return obj;
  },

  _showSyntax() {
    console.log("Use: node cli <route> <command> [par...]");
  },

  use(route, adapter) {
    this[route] = adapter;
  },

  main(cb) {
    cb();

    const args = process.argv.slice(2);
    const route = args[0];
    if (!route) {
      this._showSyntax();
      console.log(`Use a route`);
      return;
    }

    if (typeof this[route] === 'object') {
      const command = args[1];
      if (!command) {
        this._showSyntax();
        console.log(`Use a command`);
        return;
      }

      if (typeof this[route][command] === 'function') {
        this[route][command](args.slice(1));
      } else {
        this._showSyntax();
        console.log(`Command '${command}' not found`);
        return;
      }
      
    } else {
      this._showSyntax();
      console.log(`Route '${route}' not found`);
      return;
    }
  },
};

const hello = require("./hello.js");
app.use('hello', hello);

module.exports = app;
