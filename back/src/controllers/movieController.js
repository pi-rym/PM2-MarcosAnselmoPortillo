const movieService = require("../services/movieService");

module.exports = {
  getAllMovies: async (req, res) => {
    try {
      const movies = await movieService.getMovies();
      res.status(200).json(movies);
      console.log(res);
      
    } catch (error) {
      res.status(500).json({
        error: "Error interno del servidor",
      })
    }
  },
};
