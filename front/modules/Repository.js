const Movie = require( '../modules/Movie.js' );

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

module.exports = Repository;