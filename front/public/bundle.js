/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/Movie.js":
/*!**************************!*\
  !*** ./modules/Movie.js ***!
  \**************************/
/***/ ((module) => {

eval("class Movie {\r\n    constructor(title,year,director,duration,genre,rate,poster) {\r\n      this.title= title;\r\n      this.year = year;\r\n      this.director = director;\r\n      this.duration = duration;\r\n      this.genre = genre;\r\n      this.rate = rate;\r\n      this.poster = poster;\r\n    }\r\n  }\r\n\r\n  module.exports = Movie;\n\n//# sourceURL=webpack://front/./modules/Movie.js?");

/***/ }),

/***/ "./modules/Repository.js":
/*!*******************************!*\
  !*** ./modules/Repository.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Movie = __webpack_require__( /*! ../modules/Movie.js */ \"./modules/Movie.js\" );\r\n\r\nclass Repository {\r\n    constructor(){\r\n        this.moviesDB = [];\r\n    }\r\n    \r\n    getAllMovies () {\r\n        return  this.moviesDB;\r\n    }\r\n    \r\n    createMovie({title,year,director,duration,genre,rate,poster}){\r\n        // console.log(\"createMovie, movie:\" + movie);\r\n        const  newMovie = new Movie (title,year,director,duration,genre,rate,poster);\r\n        //console.log(\"createMovie, newMovie\" + newMovie);\r\n        this.moviesDB.push(newMovie);\r\n    }\r\n}\r\n\r\nmodule.exports = Repository;\n\n//# sourceURL=webpack://front/./modules/Repository.js?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const addMovies = __webpack_require__(/*! ./renderMovies */ \"./scripts/renderMovies.js\")\r\n\r\n$.get(\"https://students-api.2.us-1.fl0.io/movies\", (moviesData) => addMovies(moviesData));\n\n//# sourceURL=webpack://front/./scripts/index.js?");

/***/ }),

/***/ "./scripts/renderMovies.js":
/*!*********************************!*\
  !*** ./scripts/renderMovies.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Repository = __webpack_require__(/*! ../modules/Repository */ \"./modules/Repository.js\")\r\n\r\nconst repository = new Repository();\r\n\r\nfunction renderMovieToHtml (movie){\r\n    console.log(movie);\r\n    const {title, year, director, duration, genre, rate, poster} = movie;\r\n    \r\n    const titleTag = document.createElement(\"h3\");\r\n    const yearTag = document.createElement(\"p\");\r\n    const directorTag = document.createElement(\"p\");\r\n    const durationTag = document.createElement(\"p\");\r\n    const genreTag = document.createElement(\"p\");\r\n    const rateTag = document.createElement(\"p\");\r\n    const posterTag = document.createElement(\"img\");\r\n    \r\n    const divMovie = document.createElement(\"div\");\r\n    \r\n    titleTag.className=\"title\";\r\n    yearTag.className =\"year\";\r\n    directorTag.className = \"director\";\r\n    durationTag.className =  \"duration\";\r\n    genreTag.className= \"genre\" ;\r\n    rateTag.className= \"rate\";\r\n    posterTag.className= \"poster\";\r\n    \r\n    let stringGenre = genre.join(\", \") + \".\";\r\n    \r\n    titleTag.textContent = `${title}`;\r\n    yearTag.textContent = `Year: ${year}`;\r\n    directorTag.textContent = `Directed by: ${director}`;\r\n    durationTag.textContent = `Duration: ${duration}.`;\r\n    genreTag.textContent = `Genre: ${stringGenre}`;\r\n    rateTag.innerHTML = `Rating: <i>${rate}/10</i>`;\r\n    posterTag.src = poster;\r\n    posterTag.alt = `${title}`;\r\n    \r\n    divMovie.appendChild(titleTag);\r\n    divMovie.appendChild(posterTag);\r\n    divMovie.appendChild(yearTag);\r\n    divMovie.appendChild(directorTag);\r\n    divMovie.appendChild(durationTag);\r\n    divMovie.appendChild(genreTag);\r\n    divMovie.appendChild(rateTag);\r\n    \r\n    divMovie.className = 'movie';\r\n    // console.log(divMovie);\r\n    \r\n    return divMovie;\r\n}\r\n\r\nfunction renderAllMovies(){\r\n    const moviesContainer = document.getElementById('movies');\r\n    moviesContainer.innerHTML = '';\r\n    const movies = repository.getAllMovies();\r\n    const moviesHtml = movies.map(renderMovieToHtml);\r\n    moviesHtml.forEach(movie=>moviesContainer.appendChild(movie));\r\n}\r\n\r\nconst addMovies = (moviesData)  => {\r\n    //console.log(\"addMovies\" + moviesData);\r\n    //moviesData.forEach((movieData) => console.log (movieData));\r\n    moviesData.forEach((movieData) => repository.createMovie(movieData));;\r\n    renderAllMovies();\r\n}\r\n\r\nmodule.exports = addMovies;\n\n//# sourceURL=webpack://front/./scripts/renderMovies.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index.js");
/******/ 	
/******/ })()
;