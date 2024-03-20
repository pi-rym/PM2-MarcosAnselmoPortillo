const Movie = require("../models/Movie");

module.exports = {
  getMovies: async () => {
    try {
      const movies = await Movie.find();
      return movies;
    } catch (error) {
      console.log("Error getting Movies", error);
      throw error;
    }
  },
  addMovie: async (movieData) => {
    try {
      const movie = new Movie(movieData);
      await movie.save();
      return movie;
    } catch (error) {
      throw error;
    }
  }
};

