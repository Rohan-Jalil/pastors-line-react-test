const axios = require('axios');

export const pastorsline = axios.create({
  baseURL: 'https://api.dev.pastorsline.com',
  headers: {
    Authorization: process.env.REACT_APP_API_TOKEN,
  },
});
