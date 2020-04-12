const axios = require('axios');

module.exports = () =>
  axios
    .get('https://meme-api.herokuapp.com/gimme')
    .then((response) => response.data);
