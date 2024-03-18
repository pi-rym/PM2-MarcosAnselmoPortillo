const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    maxLength: 100,
  },
  year: {
    type: Number,
    required: true,
    min: 1895,
    max: new Date().getFullYear(), // Example: Maximum year as current year
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  genre: {
    type: [String],
    required: true,
    enum: [
      "Action",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film-Noir",
      "History",
      "Horror",
      "Music",
      "Musical",
      "Mystery",
      "Romance",
      "Sci-Fi",
      "Sport",
      "Thriller",
      "War",
      "Western",
    ],
  },
  rate: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
  poster: {
    type: String,
    required: true,
    match: /^https?:\/\//, // Example: URL format validation
  },
});

const Movie = model("Movie", movieSchema);

module.exports = Movie;
