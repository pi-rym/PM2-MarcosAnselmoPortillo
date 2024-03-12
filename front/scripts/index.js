const renderMovies = require('./renderMovies');
const axios = require('axios');

axios.get('https://students-api.up.railway.app/movies')
  .then(response => {
    const moviesData = response.data;
    renderMovies(moviesData);
  })
  .catch(error => {
    console.error('Error fetching movies:', error.message);
  });