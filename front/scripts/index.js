class Movie {
  constructor(title,year,director,duration,genre,rate,poster) {
    this.title= title;
    this.year = year;
    this.director = director;
    this.duration = duration;
    this.genre = genre;
    this.rate = rate;
    this.poster = poster;
  }
}


class Repository {
    constructor(){
        this.moviesDB = [];
    }
    
    getAllMovies () {
        return  this.moviesDB;
    }
    
    createMovie({title,year,director,duration,genre,rate,poster}){
        // console.log("createMovie, movie:" + movie);
        const  newMovie = new Movie (title,year,director,duration,genre,rate,poster);
        //console.log("createMovie, newMovie" + newMovie);
        this.moviesDB.push(newMovie);
    }
}

const repository = new Repository();

function convertMovieToHtml (movie){
    //console.log(movie);
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

function convertAllMovies(){
    const moviesContainer = document.getElementById('movies');
    moviesContainer.innerHTML = '';
    const movies = repository.getAllMovies();
    const moviesHtml = movies.map(convertMovieToHtml);
    moviesHtml.forEach(movie=>moviesContainer.appendChild(movie));
}

const addMovies = (moviesData)  => {
    //console.log("addMovies" + moviesData);
    //moviesData.forEach((movieData) => console.log (movieData));
    moviesData.forEach((movieData) => repository.createMovie(movieData));;
    convertAllMovies();
}

$.get("https://students-api.2.us-1.fl0.io/movies", (moviesData) => addMovies(moviesData));