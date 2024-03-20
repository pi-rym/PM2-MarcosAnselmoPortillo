const { Router } = require("express");
const movieController = require("../controllers/movieController");
const validateMovieData = require("../middleware/validateMovieData");

const movieRouter = Router();

movieRouter.get("/", movieController.getAllMovies);

movieRouter.post('/', validateMovieData, movieController.createMovie);

module.exports = movieRouter;
