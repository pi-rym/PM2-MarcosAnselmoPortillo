const Repository = require('../modules/Repository')

const repository = new Repository();

function renderMovieToHtml (movie){
    //console.log(movie);
    const {title, year, director, duration, genre, rate, poster} = movie;

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
    
    // const titleTag = document.createElement("h3");
    // const yearTag = document.createElement("p");
    // const directorTag = document.createElement("p");
    // const durationTag = document.createElement("p");
    // const genreTag = document.createElement("p");
    // const rateTag = document.createElement("p");
    // const posterTag = document.createElement("img");
    
    // const divMovie = document.createElement("div");
    
    // titleTag.className="title";
    // yearTag.className ="year";
    // directorTag.className = "director";
    // durationTag.className =  "duration";
    // genreTag.className= "genre" ;
    // rateTag.className= "rate";
    // posterTag.className= "poster";
    
    // let stringGenre = genre.join(", ") + ".";
    
    // titleTag.textContent = `${title}`;
    // yearTag.textContent = `Year: ${year}`;
    // directorTag.textContent = `Directed by: ${director}`;
    // durationTag.textContent = `Duration: ${duration}.`;
    // genreTag.textContent = `Genre: ${stringGenre}`;
    // rateTag.innerHTML = `Rating: <i>${rate}/10</i>`;
    // posterTag.src = poster;
    // posterTag.alt = `${title}`;
    
    // divMovie.appendChild(titleTag);
    // divMovie.appendChild(posterTag);
    // divMovie.appendChild(yearTag);
    // divMovie.appendChild(directorTag);
    // divMovie.appendChild(durationTag);
    // divMovie.appendChild(genreTag);
    // divMovie.appendChild(rateTag);
    
    // divMovie.className = 'movie';
    // // console.log(divMovie);
    
    // return divMovie;
}

function renderAllMovies(){
    const moviesContainer = document.getElementById('movies');
    moviesContainer.innerHTML = '';
    const movies = repository.getAllMovies();
    const row = document.createElement("div");
    row.classList.add("row", "row-cols-1", "row-cols-md-3", "g-4");
    const movieCards = movies.map(renderMovieToHtml);
    movieCards.forEach(card => row.appendChild(card));
    moviesContainer.appendChild(row);
}

const addMovies = (moviesData)  => {
    //console.log("addMovies" + moviesData);
    //moviesData.forEach((movieData) => console.log (movieData));
    moviesData.forEach((movieData) => repository.createMovie(movieData));;
    renderAllMovies();
}

module.exports = addMovies;