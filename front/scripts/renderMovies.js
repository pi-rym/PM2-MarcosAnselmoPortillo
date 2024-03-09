const Repository = require('../modules/Repository')

const repository = new Repository();

function renderMovieToHtml (movie){
    console.log(movie);
    const {title, year, director, duration, genre, rate, poster} = movie;
    
    const titleTag = document.createElement("h3");
    const yearTag = document.createElement("p");
    const directorTag = document.createElement("p");
    const durationTag = document.createElement("p");
    const genreTag = document.createElement("p");
    const rateTag = document.createElement("p");
    const posterTag = document.createElement("img");
    
    const divMovie = document.createElement("div");
    
    titleTag.className="title";
    yearTag.className ="year";
    directorTag.className = "director";
    durationTag.className =  "duration";
    genreTag.className= "genre" ;
    rateTag.className= "rate";
    posterTag.className= "poster";
    
    let stringGenre = genre.join(", ") + ".";
    
    titleTag.textContent = `${title}`;
    yearTag.textContent = `Year: ${year}`;
    directorTag.textContent = `Directed by: ${director}`;
    durationTag.textContent = `Duration: ${duration}.`;
    genreTag.textContent = `Genre: ${stringGenre}`;
    rateTag.innerHTML = `Rating: <i>${rate}/10</i>`;
    posterTag.src = poster;
    posterTag.alt = `${title}`;
    
    divMovie.appendChild(titleTag);
    divMovie.appendChild(posterTag);
    divMovie.appendChild(yearTag);
    divMovie.appendChild(directorTag);
    divMovie.appendChild(durationTag);
    divMovie.appendChild(genreTag);
    divMovie.appendChild(rateTag);
    
    divMovie.className = 'movie';
    // console.log(divMovie);
    
    return divMovie;
}

function renderAllMovies(){
    const moviesContainer = document.getElementById('movies');
    moviesContainer.innerHTML = '';
    const movies = repository.getAllMovies();
    const moviesHtml = movies.map(renderMovieToHtml);
    moviesHtml.forEach(movie=>moviesContainer.appendChild(movie));
}

const addMovies = (moviesData)  => {
    //console.log("addMovies" + moviesData);
    //moviesData.forEach((movieData) => console.log (movieData));
    moviesData.forEach((movieData) => repository.createMovie(movieData));;
    renderAllMovies();
}

module.exports = addMovies;