const cliapp = {
  create() {
    const obj = Object.create(this);
    return obj;
  },

  _showSyntax() {
    let response = '';
    response += `Use: node cli <route> <command> [par...]`;
    return response;
  },

  use(route, adapter) {
    this[route] = adapter;
  },

  async main(args = []) {
    let response = '';
    const route = args[0];
    if (!route) {
      response += this._showSyntax();
      response += `\nUse a route`;
      return response;
    }

    if (typeof this[route] === 'object') {
      const command = args[1];
      if (!command) {
        response += this._showSyntax();
        response += `\nUse a command`;
        return response;
      }

      if (typeof this[route][command] === 'function') {
        const result = await this[route][command](args.slice(1));
        try {
          response += JSON.stringify(result);
        } catch (error) {
          response += result;
        }
      } else {
        response += this._showSyntax();
        response += `\nCommand '${command}' not found`;
      }
      
    } else {
      response += this._showSyntax();
      response += `\nRoute '${route}' not found`;
    }

    return response;
  },
};

module.exports = cliapp;