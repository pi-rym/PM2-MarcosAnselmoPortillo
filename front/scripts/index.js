const addMovies = require("./renderMovies")

$.get("https://students-api.2.us-1.fl0.io/movies", (moviesData) => addMovies(moviesData));