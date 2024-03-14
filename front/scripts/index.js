const renderMovies = require('./renderMovies');
const axios = require('axios');

//const url = 'https://students-api.up.railway.app/movies';
const url = 'http://localhost:3000/movies'

axios.get(url)
  .then(response => {
    const moviesData = response.data;
    renderMovies(moviesData);
  })
  .catch(error => {
    console.error('Error fetching movies:', error.message);
  });