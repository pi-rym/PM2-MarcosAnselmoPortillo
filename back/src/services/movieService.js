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
};
