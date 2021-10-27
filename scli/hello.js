const axios = require('axios');

const hello = {
  async hello(args) {
    const name = args[1];
    const qs = name ? `?name=${name}` : '';
    try {
      const response = await axios.get(`http://localhost:3000/hello${qs}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = hello;