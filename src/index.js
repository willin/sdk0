const axios = require('axios');

module.exports = (options) => {
  const client = axios.create(options);
  return new Proxy(
    {},
    {
      get: (_, property) => client[property.toLowerCase()]
    }
  );
};
