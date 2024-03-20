const movieService = require("../services/movieService");

module.exports = {
  getAllMovies: async (req, res) => {
    try {
      const movies = await movieService.getMovies();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({
        error: "Error interno del servidor",
      })
    }
  },
  createMovie: async  (req, res) => {
    try {
      const { title, year, director, duration, genre, rate, poster } = req.body;
      console.log("createMovie Controller", req.body)
      const movie = await movieService.addMovie({ title, year, director, duration, genre, rate, poster });
      res.status(201).send({ message: 'Movie created successfully', data: movie });
    } catch (error) {
      res.status(500).send({ message: 'Error creating movie', error: error.message });
    }
  }
};
