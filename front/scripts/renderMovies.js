const Repository = require("../modules/Repository");

const repository = new Repository();

function renderMovieToHtml(movie) {
  //console.log(movie);
  const { title, year, director, duration, genre, rate, poster } = movie;

  const card = document.createElement("div");
  card.classList.add("col");

  const cardContent = `
    <div class="card h-100">
        <img src="${poster}" class="card-img-top" alt="${title}">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">Year: ${year}</p>
            <p class="card-text">Directed by: ${director}</p>
            <p class="card-text">Duration: ${duration}</p>
            <p class="card-text">Genre: ${genre.join(", ")}</p>
            <p class="card-text">Rating: ${rate}/10</p>
        </div>
    </div>
    `;

  card.innerHTML = cardContent;
  return card;
}

function renderAllMovies() {
  const moviesContainer = document.getElementById("movies");
  moviesContainer.innerHTML = "";
  const movies = repository.getAllMovies();
  const row = document.createElement("div");
  row.classList.add("row", "row-cols-1", "row-cols-md-3", "g-4");
  const movieCards = movies.map(renderMovieToHtml);
  movieCards.forEach((card) => row.appendChild(card));
  moviesContainer.appendChild(row);
}

const addMovies = (moviesData) => {
  //console.log("addMovies" + moviesData);
  //moviesData.forEach((movieData) => console.log (movieData));
  moviesData.forEach((movieData) => repository.createMovie(movieData));
  renderAllMovies();
};

module.exports = addMovies;
