const { Router } = require("express");
const movieController = require("../controllers/movieController");

const movieRouter = Router();

movieRouter.get("/", movieController.getAllMovies);

module.exports = movieRouter;
