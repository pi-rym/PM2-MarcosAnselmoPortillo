// class Movie {
//   constructor(id,title,year,director,duration,genre,rate,poster) {
//     this.id = id;
//     this.title= title;
//     this.year = year;
//     this.director = director;
//     this.duration = duration;
//     this.genre = genre;
//     this.rate = rate;
//     this.poster = poster;
//   }
// }

class Repository {
    constructor(){
        this.moviesDB = tempData;
    }

    getAllMovies () {
        return  this.moviesDB;
    }
}

const repository = new Repository();

function convertMovieToHtml (movie){
    const {title, year, director, duration, genre, rate, poster} = movie;
    
    const titleTag = document.createElement("h3");
    const yearTag = document.createElement("p");
    const directorTag = document.createElement("p");
    const durationTag = document.createElement("p");
    const genreTag = document.createElement("p");
    const rateTag = document.createElement("p");
    const posterTag = document.createElement("img");

    const divMovie = document.createElement("div");

    titleTag.textContent = `${title}`;
    yearTag.textContent = `Year: ${year}`;
    directorTag.textContent = `Directed by: ${director}`;
    durationTag.textContent = `Duration: ${duration}.`;
    genreTag.textContent = `Genre: ${genre}`;
    rateTag.innerHTML = `Rating: <i>${rate}/10</i>`;
    posterTag.src = poster;
    posterTag.alt = "Poster";

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
    moviesHtml.forEach(m=>moviesContainer.appendChild(m));
}

convertAllMovies();
